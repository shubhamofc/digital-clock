
function clock() {

const fullDate = new Date();
const hours = fullDate.getHours();
const mins = fullDate.getMinutes();
const secs = fullDate.getSeconds();

document.getElementById('hour').innerHTML = hours;
document.getElementById('minute').innerHTML= mins;
document.getElementById('second').innerHTML= secs;
    
}

setInterval(clock,100);


