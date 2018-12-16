var clock = document.getElementById('clock');




// Function Realtime clock
function DayClock() {
    var time = new Date ();
    var setOfDay = ["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"];

    var day = setOfDay[time.getDay()];

    var hours = time.getHours().toString();
    var minutes = time.getMinutes().toString();
    var sec = time.getSeconds().toString();

    if (hours.length < 2 ){
        hours = '0' + hours;
    }
    if (minutes.length < 2 ){
        minutes = '0' + minutes;
    }
    if (sec.length < 2 ){
        sec = '0' + sec;
    }
    var clockStrFormat = "< "  + day +" | " + hours + " : " + minutes  + " : " + sec + " >" ;

    clock.textContent = clockStrFormat;

}

setInterval(DayClock,1000);



