package web.routes

import io.ktor.server.routing.*
import io.ktor.server.application.*
import io.ktor.server.response.*
import org.slf4j.LoggerFactory

fun Application.configureRouting() {
    val logger = LoggerFactory.getLogger(javaClass)

    routing {
        get("/api/nve") {
            call.respondText("Hello World!")
        }
        YrRouting()
        StravaRouting()
        NVERouting()
        logger.info("All routes initialized")
    }
}
