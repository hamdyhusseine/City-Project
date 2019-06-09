var secs = document.getElementById("seconds");
var mins = document.getElementById("minutes");
var hours = document.getElementById("hours");
var days = document.getElementById("days");

const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

let countDown = new Date('june 21, 2019 22:00:00').getTime(),
    x = setInterval(function() {
      
    let now = new Date().getTime(),
        distance = countDown - now;
    days.innerText = Math.floor(distance / (day)),
    hours.innerText = Math.floor((distance % (day)) / (hour)),
    minutes.innerText = Math.floor((distance % (hour)) / (minute)),
    seconds.innerText = Math.floor((distance % (minute)) / second);
    }, second)
//--- 2 
var ssecs = document.getElementById("secSeconds");
var smins = document.getElementById("secMinutes");
var shours = document.getElementById("secHours");
var sdays = document.getElementById("secDays");

const secSecond = 1000,
    secMinute = secSecond * 60,
    secHour = secMinute * 60,
    secDay = secHour * 24;

let scountDown = new Date('August 11, 2019 00:00:00').getTime(),
    xx = setInterval(function() {
      
    let now = new Date().getTime(),
        distance = scountDown - now;
    secDays.innerText = Math.floor(distance / (secDay)),
    secHours.innerText = Math.floor((distance % (secDay)) / (secHour)),
    secMinutes.innerText = Math.floor((distance % (secHour)) / (secMinute)),
    secSeconds.innerText = Math.floor((distance % (secMinute)) / secSecond);
    }, secSecond)
//--- 3
var tsecs = document.getElementById("thSeconds");
var tmins = document.getElementById("thMinutes");
var thours = document.getElementById("thHours");
var tdays = document.getElementById("thDays");

const thrSecond = 1000,
    thrMinute = thrSecond * 60,
    thrHour = thrMinute * 60,
    thrDay = thrHour * 24;

let tcountDown = new Date('January 1, 2020 00:00:00').getTime(),
    xxx = setInterval(function() {
      
    let now = new Date().getTime(),
        distance = tcountDown - now;
    thrDays.innerText = Math.floor(distance / (thrDay)),
    thrHours.innerText = Math.floor((distance % (thrDay)) / (thrHour)),
    thrMinutes.innerText = Math.floor((distance % (thrHour)) / (thrMinute)),
    thrSeconds.innerText = Math.floor((distance % (thrMinute)) / thrSecond);
    }, thrSecond)