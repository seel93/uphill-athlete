import {Timesery} from "../../domain/yr/CompactForecast";
import Notification from "../common/Notification";
import {Card, CardContent, Typography} from "@mui/material";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import AirIcon from "@mui/icons-material/Air";
import CloudIcon from "@mui/icons-material/Cloud";
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import InvertColorsOffIcon from '@mui/icons-material/InvertColorsOff';
import React from "react";
import {calculateAverage, checkForRain, precipitationDetector} from "../../common/WeatherMetrics";

interface WeatherDetailsMultipleProps {
    records: {
        time: Date;
        data: Array<Timesery>;
    };
}

const WeatherDetailsMultiple = (props: WeatherDetailsMultipleProps) => {

    const meanTemp: number = calculateAverage('air_temperature', props.records.data);
    const meanWind: number = calculateAverage('wind_speed', props.records.data);
    const meanCloud: number = calculateAverage('cloud_area_fraction', props.records.data);
    const precipitation: precipitationDetector = checkForRain(props.records.data);


    return <>
        <Card sx={{minWidth: 275}}>
            <CardContent>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    Weather for {props.records.time.toLocaleDateString()}
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
                    &nbsp;
                    {Object.keys(precipitation).filter(elem => elem.length > 0).length > 0 ?
                        <InvertColorsIcon /> : <InvertColorsOffIcon /> }
                </Typography>
            </CardContent>
        </Card>
    </>
}

export default WeatherDetailsMultiple;
