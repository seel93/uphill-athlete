import {Timesery} from "../domain/yr/CompactForecast";
import _ from "lodash";

export interface precipitationDetector {
    twelve: Array<Timesery>;
    six: Array<Timesery>;
    one: Array<Timesery>;
}

export interface groupedDetails {

}


export const calculateAverage = (metric : string, records : Array<Timesery>) => {
    type ObjectKey = keyof typeof records;
    const property = metric as ObjectKey;
    const data = records.map((timeseries) => {
        // @ts-ignore
        return timeseries.data.instant.details[property];
    })
    return _.mean(data)
}


export const checkForRain = (records: Array<Timesery>) : precipitationDetector => {
    return {
        twelve: records.filter((timeseries) => timeseries.data.next_12_hours?.details),
        six: records.filter((timeseries) => timeseries.data.next_6_hours?.details),
        one: records.filter((timeseries) => timeseries.data.next_1_hours?.details),
    }
}

export const mergeRecords = (records: Array<Timesery>) : Array<{time: Date, data: Array<Timesery>}> => {
    const groups = records.reduce((groups: any, record) => {
        const date = record.time.toString().split('T')[0];
        if(!groups[date]){
            groups[date] = [];
        }
        groups[date].push(record);
        return groups;
    }, {});

    return Object.keys(groups).map((date) => {
        return {
            time: new Date(date),
            data: groups[date]
        };
    });
}
