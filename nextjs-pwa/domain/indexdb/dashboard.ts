import {db} from "./db";
import {InferGetStaticPropsType} from "next";
import {getStaticProps} from "../../pages/dashboard";

export async function checkDataInDb() {
    try {
        const upToDateAvyReports = db.avyReports.toCollection().last().then(res => res ? res.date.getTime() : new Date().getTime());
        const upToDateForeasts = db.forecasts.toCollection().last().then(res => res ? res.date.getTime() : new Date().getTime());
        return [upToDateForeasts, upToDateAvyReports].filter(Boolean).length == 2;
    } catch (err) {
        console.error(err);
    }
    return false;
}

//export async function addDataToDb({weatherData, reports}: InferGetStaticPropsType<typeof getStaticProps>) {
//    console.info("Adding new rows to db");
//    const date = new Date();
//    try {
//        const forecasts = await db.forecasts.add({forecast: weatherData, date: date});
//        //const reporting = await db.avyReports.add({report: reports, date: date});
//    } catch (error) {
//        console.error(error);
//    }
//}
