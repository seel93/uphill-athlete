import {LocationInformation, locationList} from "../../common/LocationList";
import {YR_URL} from "../../domain/Constants";
import WeatherDetails from "../../components/weather/WeatherDetails";
import {Container} from "@mui/material";
import {CompactForecast} from "../../domain/yr/CompactForecast";
import ContentAccordion from "../../components/common/ContentAccordian";
import {mergeRecords} from "../../common/WeatherMetrics";
import WeatherDetailsMultiple from "../../components/weather/WeatherDetailsMultiple";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";
import * as React from "react";


interface DetailsProps {
    weather: CompactForecast,
    location: LocationInformation
}

const Details = ({weather, location}: DetailsProps) => {
    const mergedRecords = mergeRecords(weather.properties.timeseries);
    return <>
        <Container>
            <h1>{location.name}</h1>
            <WeatherDetails properties={weather.properties.timeseries}/>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Detailed forecasts:</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {Object.keys(mergedRecords).map((key, index) => {
                        return <ContentAccordion
                            key={key}
                            summary={mergedRecords[index].time.toDateString()}
                            childComponent={<WeatherDetailsMultiple
                                records={mergedRecords[index]}
                            />
                            }/>
                    })}
                </AccordionDetails>
            </Accordion>
        </Container>
    </>
}

export async function getServerSideProps(context: any) {
    const currentLocation = locationList.find((location) =>
        location.id.toString() == context.params.id);

    if (currentLocation) {
        const weatherResult = await fetch(`${YR_URL}/compact/${currentLocation.lat}/${currentLocation.lon}`);
        const weatherData = await weatherResult.json();
        return {
            props: {
                weather: weatherData,
                location: currentLocation
            },
        }
    }

    return {
        props: {weather: null}
    }
}

export default Details;
