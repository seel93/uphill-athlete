package domain.yr


import io.ktor.resources.*
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
@Resource("/locationForecastCompact")
data class LocationForecastCompact(
    @SerialName("geometry")
    val geometry: Geometry,
    @SerialName("properties")
    val properties: Properties,
    @SerialName("type")
    val type: String
) {
    @Serializable
    data class Geometry(
        @SerialName("coordinates")
        val coordinates: List<Double>,
        @SerialName("type")
        val type: String
    )

    @Serializable
    data class Properties(
        @SerialName("meta")
        val meta: Meta,
        @SerialName("timeseries")
        val timeseries: List<Timesery>
    ) {
        @Serializable
        data class Meta(
            @SerialName("units")
            val units: Units,
            @SerialName("updated_at")
            val updatedAt: String
        ) {
            @Serializable
            data class Units(
                @SerialName("air_pressure_at_sea_level")
                val airPressureAtSeaLevel: String,
                @SerialName("air_temperature")
                val airTemperature: String,
                @SerialName("cloud_area_fraction")
                val cloudAreaFraction: String,
                @SerialName("precipitation_amount")
                val precipitationAmount: String,
                @SerialName("relative_humidity")
                val relativeHumidity: String,
                @SerialName("wind_from_direction")
                val windFromDirection: String,
                @SerialName("wind_speed")
                val windSpeed: String
            )
        }

        @Serializable
        data class Timesery(
            @SerialName("data")
            val `data`: Data,
            @SerialName("time")
            val time: String
        ) {
            @Serializable
            // These need to be null by default
            data class Data(
                @SerialName("instant")
                val instant: Instant,
                @SerialName("next_12_hours")
                val next12Hours: Next12Hours? = null,
                @SerialName("next_1_hours")
                val next1Hours: Next1Hours? = null,
                @SerialName("next_6_hours")
                val next6Hours: Next6Hours? = null
            ) {
                @Serializable
                data class Instant(
                    @SerialName("details")
                    val details: Details
                ) {
                    @Serializable
                    data class Details(
                        @SerialName("air_pressure_at_sea_level")
                        val airPressureAtSeaLevel: Double,
                        @SerialName("air_temperature")
                        val airTemperature: Double,
                        @SerialName("cloud_area_fraction")
                        val cloudAreaFraction: Double,
                        @SerialName("relative_humidity")
                        val relativeHumidity: Double,
                        @SerialName("wind_from_direction")
                        val windFromDirection: Double,
                        @SerialName("wind_speed")
                        val windSpeed: Double
                    )
                }

                @Serializable
                data class Next12Hours(
                    @SerialName("summary")
                    val summary: Summary
                ) {
                    @Serializable
                    data class Summary(
                        @SerialName("symbol_code")
                        val symbolCode: String
                    )
                }

                @Serializable
                data class Next1Hours(
                    @SerialName("details")
                    val details: Details,
                    @SerialName("summary")
                    val summary: Summary
                ) {
                    @Serializable
                    data class Details(
                        @SerialName("precipitation_amount")
                        val precipitationAmount: Double
                    )

                    @Serializable
                    data class Summary(
                        @SerialName("symbol_code")
                        val symbolCode: String
                    )
                }

                @Serializable
                data class Next6Hours(
                    @SerialName("details")
                    val details: Details,
                    @SerialName("summary")
                    val summary: Summary
                ) {
                    @Serializable
                    data class Details(
                        @SerialName("precipitation_amount")
                        val precipitationAmount: Double
                    )

                    @Serializable
                    data class Summary(
                        @SerialName("symbol_code")
                        val symbolCode: String
                    )
                }
            }
        }
    }
}
