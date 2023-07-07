export const isWithinRange = (row, columnId, value) => {
    const date = row.getValue(columnId);
    const [start, end] = value;
    //If one filter defined and date is null filter it
    if((start || end) && !date) return false;
    if(start && !end){
    return date.getTime() >= start.getTime()
    }else if(!start && end){
    return date.getTime() <= end.getTime()
    }else if (start && end) {
    return date.getTime() >= start.getTime() && date.getTime() <= end.getTime()
    } else return true;
};