// db.ts
import Dexie, { Table } from 'dexie';
import {CompactForecast} from "../yr/CompactForecast";
import {AvyReport} from "../NVE/AvyReport";



type ForecastTable = {
    forecast : CompactForecast
    date: Date
}

type AvyReportTable = {
    report : AvyReport,
    date: Date
}


export class MySubClassedDexie extends Dexie {
    forecasts!: Table<ForecastTable>;
    avyReports!: Table<AvyReportTable>

    constructor() {
        super('newDb');
        this.version(3).stores({
            forecasts: '++id, forecasts, date', // Primary key and indexed props
            avyReports: '++id, report, date' // Primary key and indexed props
        });
        this.version(3).stores({
            forecasts: '++id, forecasts, date', // Primary key and indexed props
            avyReports: '++id, report, date, location' // Primary key and indexed props
        })
    }
}

export const db = new MySubClassedDexie();
