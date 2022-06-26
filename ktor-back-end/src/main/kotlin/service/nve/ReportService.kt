package service.nve

import domain.nve.NVE_API_URL
import org.slf4j.LoggerFactory
import java.net.URI
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse
import java.time.LocalDate

class ReportService {

    private val client = HttpClient.newBuilder().build();
    private val logger = LoggerFactory.getLogger(javaClass)


    fun getAvyReport(lat: String, lon : String) : String? {
        val request = HttpRequest.newBuilder()
            .uri(URI.create("$NVE_API_URL/AvalancheWarningByCoordinates/Simple/${lat}/${lon}/1/${LocalDate.now()}/${addDaysToDate()}"))
            .build();
        val response = client.send(request, HttpResponse.BodyHandlers.ofString())
        return response.body()
    }

    private fun addDaysToDate(): String {
        return LocalDate.now().plusDays(7).toString()
    }

}
