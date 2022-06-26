package domain.nve

import io.ktor.resources.*
import kotlinx.serialization.Serializable

@Serializable
@Resource("/avalancheReport")
data class AvalancheReport(
    val RegId: Int,
    val RegionId: Int,
    val RegionName: String,
    val RegionTypeId: Int,
    val RegionTypeName: String,
    val DangerLevel: String,
    val ValidFrom: String,
    val ValidTo: String,
    val NextWarningTime: String,
    val PublishTime: String,
    val MainText: String,
    val LangKey: Int
)
