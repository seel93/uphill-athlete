package domain.strava


import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable


@Serializable
data class AthleteActivity(
    @SerialName("achievement_count")
    val achievementCount: Int,
    @SerialName("athlete")
    val athlete: Athlete,
    @SerialName("athlete_count")
    val athleteCount: Int,
    @SerialName("average_cadence")
    val averageCadence: Double? = null,
    @SerialName("average_heartrate")
    val averageHeartrate: Double,
    @SerialName("average_speed")
    val averageSpeed: Double,
    @SerialName("average_temp")
    val averageTemp: Int,
    @SerialName("comment_count")
    val commentCount: Int,
    @SerialName("commute")
    val commute: Boolean,
    @SerialName("display_hide_heartrate_option")
    val displayHideHeartrateOption: Boolean,
    @SerialName("distance")
    val distance: Double,
    @SerialName("elapsed_time")
    val elapsedTime: Int,
    @SerialName("elev_high")
    val elevHigh: Double,
    @SerialName("elev_low")
    val elevLow: Double,
    @SerialName("end_latlng")
    val endLatlng: List<Double>,
    @SerialName("external_id")
    val externalId: String,
    @SerialName("flagged")
    val flagged: Boolean,
    @SerialName("from_accepted_tag")
    val fromAcceptedTag: Boolean,
    @SerialName("gear_id")
    val gearId: String? = null,
    @SerialName("has_heartrate")
    val hasHeartrate: Boolean,
    @SerialName("has_kudoed")
    val hasKudoed: Boolean,
    @SerialName("heartrate_opt_out")
    val heartrateOptOut: Boolean,
    @SerialName("id")
    val id: Long,
    @SerialName("kudos_count")
    val kudosCount: Int,
    @SerialName("location_city")
    val locationCity: String? = null,
    @SerialName("location_country")
    val locationCountry: String? = null,
    @SerialName("location_state")
    val locationState: String? = null,
    @SerialName("manual")
    val manual: Boolean,
    @SerialName("map")
    val map: Map,
    @SerialName("max_heartrate")
    val maxHeartrate: Double,
    @SerialName("max_speed")
    val maxSpeed: Double,
    @SerialName("moving_time")
    val movingTime: Int,
    @SerialName("name")
    val name: String,
    @SerialName("photo_count")
    val photoCount: Int,
    @SerialName("pr_count")
    val prCount: Int,
    @SerialName("private")
    val `private`: Boolean,
    @SerialName("resource_state")
    val resourceState: Int,
    @SerialName("start_date")
    val startDate: String,
    @SerialName("start_date_local")
    val startDateLocal: String,
    @SerialName("start_latlng")
    val startLatlng: List<Double>,
    @SerialName("timezone")
    val timezone: String,
    @SerialName("total_elevation_gain")
    val totalElevationGain: Double,
    @SerialName("total_photo_count")
    val totalPhotoCount: Int,
    @SerialName("trainer")
    val trainer: Boolean,
    @SerialName("type")
    val type: String,
    @SerialName("upload_id")
    val uploadId: Long,
    @SerialName("upload_id_str")
    val uploadIdStr: String,
    @SerialName("utc_offset")
    val utcOffset: Double,
    @SerialName("visibility")
    val visibility: String,
    @SerialName("workout_type")
    val workoutType: String? = null
) {
    @Serializable
    data class Athlete(
        @SerialName("id")
        val id: Int,
        @SerialName("resource_state")
        val resourceState: Int
    )

    @Serializable
    data class Map(
        @SerialName("id")
        val id: String,
        @SerialName("resource_state")
        val resourceState: Int,
        @SerialName("summary_polyline")
        val summaryPolyline: String? = null
    )
}
