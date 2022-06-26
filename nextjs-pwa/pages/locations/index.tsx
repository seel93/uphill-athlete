import {LocationInformation, locationList} from "../../common/LocationList";
import {Container, Grid} from "@mui/material";
import LocationCard from "../../components/location/LocationCard";
import * as React from "react";
import styles from "../../styles/Home.module.css";


const Locations = () => {
    return <>
        <Container>
            <h1 className={styles.title}>Location dashboard</h1>
            <p className={styles.description}>
                Get started by selecting a location:
            </p>

            <h2> Supported metrics: </h2>
            <span>
            <p> Weather </p>
            <p> Snow depth </p>
            <p> Avanlanche danger </p>
            </span>
            <h2> Available locations:</h2>
            <Grid container columnSpacing={4}>
                {locationList.map((location: LocationInformation) => {
                    return <Grid key={location.id}>
                        <LocationCard location={location} />
                    </Grid>
                })}
            </Grid>
        </Container>
    </>
}

export default Locations;
