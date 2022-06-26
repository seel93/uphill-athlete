import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import {LocationInformation} from "../../common/LocationList";
import Button from "@mui/material/Button";

interface LocationCardProps {
    location: LocationInformation,
}


export default function LocationCard(props : LocationCardProps) {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props.location.area.name}
                </Typography>
                <Typography variant="h5" component="div">
                    {props.location.name}
                </Typography>
                <Typography variant="body2">
                    {props.location.description}
                </Typography>
            </CardContent>
            <CardActions>
                <a href={`/locations/${props.location.id}`}>Check it out</a>
            </CardActions>
        </Card>
    );
}
