package domain.strava

import kotlinx.serialization.Serializable

data class StravaCredentials(
    val  accessToken: String,
    val clientSecret: String,
    val refreshToken: String,
    val clientId: String,
    val code: String
)
