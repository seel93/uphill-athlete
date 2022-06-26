package service.strava

import com.typesafe.config.Config
import com.typesafe.config.ConfigFactory
import domain.strava.STRAVA_OAUTH_URL
import domain.strava.StravaCredentials
import domain.strava.StravaToken
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.json.Json
import org.slf4j.LoggerFactory
import java.net.URI
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse

class TokenValidationService {
    private val credentials: StravaCredentials = StravaCredentials(
        ConfigFactory.load().getString("Strava.client_id"),
        ConfigFactory.load().getString("Strava.refresh_token"),
        ConfigFactory.load().getString("Strava.client_secret"),
        ConfigFactory.load().getString("Strava.client_id"),
        ConfigFactory.load().getString("Strava.code")
    )

    private val client = HttpClient.newBuilder().build();
    private val logger = LoggerFactory.getLogger(javaClass)

    fun authorize(): Int {
        val request = HttpRequest.newBuilder()
            .uri(
                URI.create(
                    "$STRAVA_OAUTH_URL/authorize?client_id=${credentials.clientId}" +
                            "&redirect_uri=http://localhost:3000&response_type=code&scopeactivity:read"
                )
            ).build()
        val response = client.send(request, HttpResponse.BodyHandlers.ofString())
        logger.info(response.statusCode().toString())
        return response.statusCode()
    }

    fun refreshToken() {
        val request = HttpRequest.newBuilder()
            .uri(
                URI.create(
                    "$STRAVA_OAUTH_URL/token?grant_type=refresh_token&client_id=${
                        credentials.clientId
                    }" + "&client_secret=${credentials.clientSecret}" + "&code=${credentials.code}" + "&grant_type=authorization_code"
                )
            )
            .header("Authorization", "Bearer ${ConfigFactory.load().getString("Strava.access_token")}")
            .POST(HttpRequest.BodyPublishers.ofString(credentials.toString()))
            .build();
        val response = client.send(request, HttpResponse.BodyHandlers.ofString())
        logger.info("body: {}", response.body());
        //val newToken: StravaToken = Json.decodeFromString(response.body())
        //modifyStravaCredentials(newToken)
    }

    private fun modifyStravaCredentials(payload: StravaToken) {
        logger.info("token: {}", payload.accessToken)
        logger.info("system properties: {}", System.getProperties().toString())
        val conf: Config = ConfigFactory.load();
        //conf.withValue("Strava.access_token", payload.accessToken)
    }
}
