package service.yr

import domain.yr.SnowDepth
import domain.yr.YR_SNOW_DEPTH_URL
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.json.Json
import org.slf4j.LoggerFactory
import java.net.URI
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse

class SnowDepthService {
    private val client = HttpClient.newBuilder().build();
    private val logger = LoggerFactory.getLogger(javaClass)

    fun getSnowDepth(regionId : Int) : SnowDepth {
        val request = HttpRequest.newBuilder()
            .uri(URI.create("$YR_SNOW_DEPTH_URL/regions/$regionId"))
            .build();
        val response = client.send(request, HttpResponse.BodyHandlers.ofString())
        return Json.decodeFromString(response.body())
    }
}
