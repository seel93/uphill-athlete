package service.yr

import domain.common.AANDALSNES_LAT
import domain.common.AANDALSNES_LON
import domain.yr.LocationForecastCompact
import domain.yr.YR_API_URL
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.json.Json
import org.slf4j.LoggerFactory
import java.net.URI
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse

class ForecastService {
    private val client = HttpClient.newBuilder().build();
    private val logger = LoggerFactory.getLogger(javaClass)

    fun getCompactForecast (lat: String, lon : String): String? {
        val request = HttpRequest.newBuilder()
            .uri(URI.create("$YR_API_URL/compact?lat=$lat&lon=$lon"))
            .build();
        val response = client.send(request, HttpResponse.BodyHandlers.ofString())
        val obj : LocationForecastCompact = Json.decodeFromString(response.body())
        logger.info(response.body())
        return response.body()
    }
}
