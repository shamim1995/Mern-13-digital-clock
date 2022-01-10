
const hourApp = document.querySelector("#hour")
const minutesApp = document.querySelector("#minutes")
const secondsApp = document.querySelector("#seconds")
const dateDayApp = document.querySelector("#dateDay")
const dateMonApp = document.querySelector("#dateMon")
const dateYearApp = document.querySelector("#dateYear")

const monName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]



setInterval(() => {


let date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
let seconds = date.getSeconds();
let dateDate = date.getDate();
let dateMon = monName[date.getMonth()];
let dateYear = date.getFullYear();

    hourApp.innerHTML = `${hour}`
    minutesApp.innerHTML = `${increase(minute)} ${hour>12 ? `<span style="font-size:18px">PM</span>`:`<span style="font-size:18px">AM</span>`}`;
    secondsApp.innerHTML = `${increase(seconds) }`;
    dateDayApp.innerHTML = dateDate;
    dateMonApp.innerHTML = dateMon;
    dateYearApp.innerHTML = dateYear;
    
    if(hour>12 && hour<23){
        hourApp.innerHTML = "0"+`${hour-12}`
    } else if(hour>22){
hourApp.innerHTML = `${hour-12}`
    }else if (hour < 10) {
        hourApp.innerHTML = "0" + `${hour}`
    }

}, 1000);
