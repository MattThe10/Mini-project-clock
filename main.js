let clockPar = document.getElementById('clock-par')
let clockDay = document.getElementById('clock-day')

function updateTime() {
    let time = new Date()
    let dateObj = {
        hours: time.getHours(),
        minutes: checkZeros(time.getMinutes()),
        seconds: checkZeros(time.getSeconds()),
        day: determineDay(time.getDay()),
        date: time.getDate(),
        month: determineMonth(time.getMonth())
        dataPar: function
    }
    
    clockPar.textContent = `${hours}:${minutes}:${seconds}`
    clockDay.textContent = `${month} ${date}. ${day}`
    setTimeout(updateTime, 1000)
    
}

function checkZeros(t){
    if(t < 10) {
        t = "0" + t
    }
    return t
}

function determineDay(d) {
    switch(d) {
        case 0: d = 'Sun'; break;
        case 1: d = 'Mon'; break;
        case 2: d = 'Tue'; break;
        case 3: d = 'Wed'; break;
        case 4: d = 'Thu'; break;
        case 5: d = 'Fri'; break;
        case 6: d = 'Sat'; break;
    }
    return d;
}

function determineMonth(m) {
    switch(m) {
        case 0: m = 'Jan'; break;
        case 1: m = 'Feb'; break;
        case 2: m = 'Mar'; break;
        case 3: m = 'Apr'; break;
        case 4: m = 'May'; break;
        case 5: m = 'Jun'; break;
        case 6: m = 'Jul'; break;
        case 7: m = 'Aug'; break;
        case 8: m = 'Sep'; break;
        case 9: m = 'Oct'; break;
        case 10: m = 'Nov'; break;
        case 11: m = 'Dec'; break;
    }
    return m
}

