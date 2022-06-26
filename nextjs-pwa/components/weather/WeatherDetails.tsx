import {Card, CardContent, Typography} from "@mui/material";
import React from "react";
import {Timesery} from "../../domain/yr/CompactForecast";

import ThermostatIcon from '@mui/icons-material/Thermostat';
import AirIcon from '@mui/icons-material/Air';
import CloudIcon from '@mui/icons-material/Cloud';
import {calculateAverage, checkForRain, precipitationDetector} from "../../common/WeatherMetrics";
import Notification from "../common/Notification";


export const weatherDetails = (records: { properties: Array<Timesery> }) => {
    const meanTemp: number = calculateAverage('air_temperature', records.properties);
    const meanWind: number = calculateAverage('wind_speed', records.properties);
    const meanCloud: number = calculateAverage('cloud_area_fraction', records.properties);
    const precipitation: precipitationDetector = checkForRain(records.properties);

    return (
        <Card sx={{minWidth: 275}}>
            {Object.keys(precipitation).filter(elem => elem.length > 0).length > 0 ?
                <Notification severity={'warning'} text={'possibility of precipitation!!'}/> : null}
            <CardContent>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    Average weather
                    from {records.properties[0].time} to {records.properties[records.properties.length - 1].time}
                </Typography>
                <Typography variant="h5" component="div">
                    <ThermostatIcon/>
                    &nbsp;
                    {Math.round(meanTemp)}
                    &nbsp;
                    <AirIcon/>
                    &nbsp;
                    {Math.round(meanWind)}
                    &nbsp;
                    <CloudIcon/>
                    &nbsp;
                    {Math.round(meanCloud)}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default weatherDetails;
