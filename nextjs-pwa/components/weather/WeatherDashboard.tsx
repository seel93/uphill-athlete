import {CompactForecast, Timesery} from "../../domain/yr/CompactForecast";
import {Container, Typography} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {dateHandler, findDayFromDate} from "../../common/Datehandler";
import WeatherDetails from "./WeatherDetails";
import React from "react";
import _ from "lodash";


export const weatherDashboard = (weatherData: { properties: CompactForecast }) => {
    const groups = weatherData.properties.properties.timeseries.reduce((groups: any, series) => {
        const date = new Date(series.time).getDay();
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(series);
        return groups;
    }, {});

    return <>
        <Container maxWidth="sm">
            {
                weatherData.properties.properties.timeseries.map((elem : Timesery, index: number) => <Accordion key={index}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        key={elem.time.toString()}
                    >
                        <Typography> {dateHandler(elem.time)} </Typography>
                        <Typography> {elem.data.instant.details.air_temperature} </Typography>
                    </AccordionSummary>
                    <WeatherDetails  properties={groups[findDayFromDate(elem.time)]}/>
                </Accordion>)
            }
        </Container>
    </>
}

export default weatherDashboard;
