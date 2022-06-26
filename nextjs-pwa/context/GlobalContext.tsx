import React from 'react';
import {YR_URL} from "../domain/Constants";

function getSeason() {
    const date = new Date();
    const month: number = date.getMonth();
    let season: string = '';
    switch(month) {
        case 12:
        case 1:
        case 2:
            season = 'winter';
            break;
        case 3:
        case 4:
        case 5:
            season = 'spring';
            break;
        case 6:
        case 7:
        case 8:
            season = 'summer';
            break;
        case 9:
        case 10:
        case 11:
            season = 'fall';
            break;
    }
    return season;
}

const checkOnlineConnection = () => {
    return fetch(`${YR_URL}`).then(res => {
        return res.ok;
    })
}

export const defaultValues = {
    timeOfYear: getSeason(),
    isOnline: checkOnlineConnection()
}

export const GlobalContext = React.createContext(defaultValues)

