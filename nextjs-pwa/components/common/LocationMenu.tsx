import * as React from 'react';
import {LocationInformation, locationList} from "../../common/LocationList";
import LocationCard from "../location/LocationCard";
import {Grid} from "@mui/material";


const locationMenu = () => {
    return (
        <>
            <Grid container columnSpacing={4}>
                    {locationList.map((location: LocationInformation) => {
                        return <Grid>
                            <LocationCard location={location}/>
                        </Grid>
                    })}
            </Grid>
        </>
    );
};

export default locationMenu;

