package domain.yr


import io.ktor.resources.*
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
@Resource("/snowDepth")
data class SnowDepth(
    @SerialName("dates")
    val dates: List<String>,
    @SerialName("_links")
    val links: Links,
    @SerialName("region")
    val region: Region,
    @SerialName("stations")
    val stations: List<Station>
) {
    @Serializable
    data class Links(
        @SerialName("self")
        val self: Self
    ) {
        @Serializable
        data class Self(
            @SerialName("href")
            val href: String
        )
    }

    @Serializable
    data class Region(
        @SerialName("id")
        val id: String,
        @SerialName("name")
        val name: String
    )

    @Serializable
    data class Station(
        @SerialName("location")
        val location: Location,
        @SerialName("name")
        val name: String,
        @SerialName("snow")
        val snow: Snow,
        @SerialName("snowDepths")
        val snowDepths: List<SnowDepth>,
        @SerialName("stationId")
        val stationId: String,
        @SerialName("validFrom")
        val validFrom: String
    ) {
        @Serializable
        data class Location(
            @SerialName("category")
            val category: Category,
            @SerialName("country")
            val country: Country,
            @SerialName("elevation")
            val elevation: Int,
            @SerialName("id")
            val id: String,
            @SerialName("name")
            val name: String,
            @SerialName("position")
            val position: Position,
            @SerialName("region")
            val region: Region,
            @SerialName("subregion")
            val subregion: Subregion,
            @SerialName("timeZone")
            val timeZone: String,
            @SerialName("urlPath")
            val urlPath: String
        ) {
            @Serializable
            data class Category(
                @SerialName("id")
                val id: String,
                @SerialName("name")
                val name: String
            )

            @Serializable
            data class Country(
                @SerialName("id")
                val id: String,
                @SerialName("name")
                val name: String
            )

            @Serializable
            data class Position(
                @SerialName("lat")
                val lat: Double,
                @SerialName("lon")
                val lon: Double
            )

            @Serializable
            data class Region(
                @SerialName("id")
                val id: String,
                @SerialName("name")
                val name: String
            )

            @Serializable
            data class Subregion(
                @SerialName("id")
                val id: String,
                @SerialName("name")
                val name: String
            )
        }

        @Serializable
        data class Snow(
            @SerialName("depth")
            val depth: Double,
            @SerialName("time")
            val time: String
        )

        @Serializable
        data class SnowDepth(
            @SerialName("depth")
            val depth: Double? = null,
            @SerialName("time")
            val time: String? = null
        )
    }
}
