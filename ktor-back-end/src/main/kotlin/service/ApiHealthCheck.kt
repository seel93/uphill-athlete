package service

import domain.nve.AvalancheReport
import domain.nve.NVE_API_URL
import domain.yr.YR_API_URL
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.json.Json
import org.slf4j.LoggerFactory
import java.net.URI
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse
import java.time.LocalDate

class ApiHealthCheck {

    private val client = HttpClient.newBuilder().build();
    private val logger = LoggerFactory.getLogger(javaClass)

    fun yrHealthCheck() : Int {
        val request = HttpRequest.newBuilder()
            .uri(URI.create("$YR_API_URL/healthz"))
            .build();
        val response = client.send(request, HttpResponse.BodyHandlers.ofString())

        //if (response.statusCode() == 200) {
        //    logger.info("yr api works")
        //} else {
        //    logger.error("failed")
        //}
        return response.statusCode();
    }

    private fun addDaysToDate(): String {
        return LocalDate.now().plusDays(7).toString()
    }

    fun nveHealthCheck() {
        val request = HttpRequest.newBuilder()
            .uri(URI.create("$NVE_API_URL/AvalancheWarningByCoordinates/Simple/69.6489/18.9551/1/${LocalDate.now()}/${addDaysToDate()}"))
            .build();

        val response = client.send(request, HttpResponse.BodyHandlers.ofString());
        val obj: List<AvalancheReport> = Json.decodeFromString(response.body())

        logger.info("NVE api works")
    }

}
