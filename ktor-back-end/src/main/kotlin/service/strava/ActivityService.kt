package service.strava

import com.typesafe.config.ConfigFactory
import domain.strava.AthleteActivity
import domain.strava.STRAVA_API_URL
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.json.Json
import org.slf4j.LoggerFactory
import java.net.URI
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse

class ActivityService {
    private val client = HttpClient.newBuilder().build();
    private val logger = LoggerFactory.getLogger(javaClass)
    private val accessToken : String = ConfigFactory.load().getString("Strava.access_token")



    fun getActivities() : String? {
        val request = HttpRequest.newBuilder()
            .uri(URI.create("$STRAVA_API_URL/athlete/activities"))
            .header("Authorization", "Bearer $accessToken")
            .build();
        val response = client.send(request, HttpResponse.BodyHandlers.ofString())
        val obj : List<AthleteActivity> = Json.decodeFromString(response.body())
        logger.info("response serialized: {}", obj.size)
        return response.body()
    }
}
