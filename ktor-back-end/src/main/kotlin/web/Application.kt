package web

import io.ktor.server.application.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import service.strava.ActivityService
import service.strava.TokenValidationService
import web.routes.configureRouting
import io.ktor.server.plugins.cors.*

fun main() {
    val activityService = ActivityService()
    //val tokenValidationService = TokenValidationService()
    //if(tokenValidationService.authorize() != 200){
    //    tokenValidationService.refreshToken()
    //}
    //activityService.getActivities()
    embeddedServer(Netty, port = 8080, host = "0.0.0.0") {
        configureRouting()
    }.start(wait = true)
}
