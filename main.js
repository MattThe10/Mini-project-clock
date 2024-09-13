let clockPar = document.getElementById('clock-par')

function updateTime() {
    let time = new Date()
    let hours = time.getHours()
    let minutes = checkZeros(time.getMinutes())
    let seconds = checkZeros(time.getSeconds())
    clockPar.textContent = `${hours}:${minutes}:${seconds}`
    setTimeout(updateTime, 1000)
}

function checkZeros(t){
    if(t < 10) {
        t = "0" + t
    }
    return t
}