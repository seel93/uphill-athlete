package domain.strava


import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class StravaToken(
    @SerialName("access_token")
    val accessToken: String,
    @SerialName("expires_at")
    val expiresAt: Int,
    @SerialName("expires_in")
    val expiresIn: Int,
    @SerialName("refresh_token")
    val refreshToken: String,
    @SerialName("token_type")
    val tokenType: String
)
