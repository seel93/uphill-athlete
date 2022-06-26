package web.routes

import domain.common.AANDALSNES_LAT
import domain.common.AANDALSNES_LON
import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import org.slf4j.LoggerFactory
import service.nve.ReportService


fun Route.NVERouting(){
    val reportService = ReportService()
    val logger = LoggerFactory.getLogger(javaClass)


    get("/service/nve/forecast/{lat}/{lon}"){
        val lat = call.parameters["lat"].toString()
        val lon = call.parameters["lon"].toString()
        val avyReport : String? = reportService.getAvyReport(lat, lon)
        if(avyReport != null){
            logger.info("found valid avy report")
            call.respondText(avyReport, ContentType.Application.Json)
        }
    }
}
