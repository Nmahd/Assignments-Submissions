var hrSpan = document.getElementById('hours')
var minSpan = document.getElementById('minutes')
var secSpan = document.getElementById('seconds')


setInterval( function(){
    var currentTime = new Date();
    var hour = currentTime.getHours();

    if (hour === 0 ){
        hour = 12;
    }
    else if(hour > 12 ){
        hour = hour - 12;
    }

    if (hour < 10){ 
        hrSpan.innerText = '0' + hour;
    } else {
        hrSpan.innerText = hour;
    }

    if(currentTime.getMinutes() < 10){
        minSpan.innerText = '0'+ currentTime.getMinutes();
    }
    else {
        minSpan.innerText = currentTime.getMinutes();
    }

    if(currentTime.getSeconds() < 10){
        secSpan.innerText = '0'+ currentTime.getSeconds();
    }
    else {
        secSpan.innerText = currentTime.getSeconds();
    }

}, 1000);
