var hour = 0
var minute = 0
var second = 0

var time = 1000 // that means 1 sec
var chrono

var counter = document.getElementById('counter')

function start() {
    chrono = setInterval(() => {
        timer()
    }, time)
}


function pause() {
    clearInterval(chrono)

    
}

function clearTime() {
    clearInterval(chrono);
    hour = 0;
    minute = 0;
    second = 0;

    counter.innerHTML = '00:00:00';
}


function timer() {
    second++ 

    if(second > 59) {
        second = 0
        minute++

        if(minute > 59) {
            minute = 0 
            hour++
        }
    }

    var format = hour + ':' + (minute < 10 ? '0' + minute : minute) + ':' +
    (second < 10 ? '0' + second : second)
    counter.innerHTML = format 
    return format
}