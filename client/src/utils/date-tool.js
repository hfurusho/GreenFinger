export function AddDays(date, days) {
    var newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    console.log(newDate);
    return newDate;
}