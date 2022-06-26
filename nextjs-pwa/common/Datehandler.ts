export const dateHandler = (date : string | Date) : string => {
    const nedDate = new Date(date);
    return `${nedDate.toDateString()} ${nedDate.toLocaleTimeString()}`;
}

export const findDayFromDate = (date : string | Date) : number => {
    const newDate = new Date(date);
    return newDate.getDay();
}
