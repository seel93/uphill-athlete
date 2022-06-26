import React, {useEffect} from 'react'
import {InferGetStaticPropsType} from "next";
import LocationMenu from "../components/common/LocationMenu";
import {Container} from "@mui/material";
import {YR_URL} from "../domain/Constants";
import Notification from "../components/common/Notification";
//import {addDataToDb, checkDataInDb} from "../domain/indexdb/dashboard";


const Dashboard = ({online}: InferGetStaticPropsType<typeof getStaticProps>) => {
    //useEffect(() => {
    //    if (!checkDataInDb()) {
    //        addDataToDb({weatherData, reports});
    //    }
    //}, []);
    return <>
        <Container>
            {online ? <Notification severity={'success'} text={'Connection established'} />
                : <Notification severity={'warning'} text={'No internet connection found, results are fetched from local db'} />}
            <LocationMenu/>
        </Container>
    </>
}

export const getStaticProps = async () => {
    // Fetch data from external API
    const res = await fetch(`${YR_URL}`).then(result => console.log(result));
    const data = await res;

    return {
        props: {online: false}
    }
}

export default Dashboard;
