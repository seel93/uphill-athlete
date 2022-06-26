package web.routes

import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import org.slf4j.LoggerFactory
import service.strava.ActivityService

fun Route.StravaRouting() {
    val activityService = ActivityService()
    val logger = LoggerFactory.getLogger(javaClass)

    get("/api/strava/activities") {
        //val activityList: String? = activityService.getActivities()
        //if(activityList != null){
        //call.respondText(activityList, ContentType.Application.Json)
        // }
        logger.info("activities requested")
        call.respondText("""{"endpoint":"strava", "route":"activities"}"""", ContentType.Application.Json)
    }
}
