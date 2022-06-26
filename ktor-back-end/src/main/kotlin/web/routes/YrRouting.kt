package web.routes

import domain.yr.SnowDepth
import io.ktor.http.*
import io.ktor.server.routing.*
import io.ktor.server.application.*
import io.ktor.server.response.*
import org.slf4j.LoggerFactory
import service.ApiHealthCheck
import service.yr.ForecastService
import service.yr.SnowDepthService


fun Route.YrRouting() {
    val apiHealthCheck = ApiHealthCheck()
    val forecastService = ForecastService()
    val snowDepthService = SnowDepthService()
    val logger = LoggerFactory.getLogger(javaClass)

    get("/service/another/router") {
        call.respondText("Hello World!")
    }

    get("/service/yr") {
        if (apiHealthCheck.yrHealthCheck() == 200) {
            logger.info("Working connection for yr api")
            call.respondText("Working yr connection");
        } else {
            logger.info("yr api connection failed")
            call.respondText("Yr healcheck failed")
        }
    }

    get("/service/snow/{regionId}") {
        val regionId = call.parameters["regionId"]?.toInt()
        val snowDepthResult: SnowDepth? = regionId?.let { it1 -> snowDepthService.getSnowDepth(it1) }
        call.respond(snowDepthResult.toString())
    }

    get("/service/yr/compact/{lat}/{lon}") {
        val lat = call.parameters["lat"].toString()
        val lon = call.parameters["lon"].toString()
        val compactForecast: String? = forecastService.getCompactForecast(lat, lon)
        //call.respond(Json.encodeToJsonElement(compactForecast))
        //val res = Json.encodeToJsonElement(compactForecast)
        if (compactForecast != null) {
            call.respondText(compactForecast, ContentType.Application.Json)
        }
    }
}
