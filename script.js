let [seconds, minutes, hours] = [0,0,0];
let displayTime = document.getElementById("displayTime");
let timer = null;

function stopwatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;

        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    displayTime.innerHTML = h +":"+ m +":"+ s;
}

function watchStart() {
    if (timer != null) {
        clearInterval(timer);
    }

    timer = setInterval(stopwatch, 1000);
}

function watchStop() {
    clearInterval(timer);
}

function watchReset() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0,0,0];
    displayTime.innerHTML = "00:00:00";
}

let start_btn = document.getElementById("start");
let stop_btn = document.getElementById("stop");
let reset_btn = document.getElementById("reset");

start_btn.addEventListener("click", watchStart);
stop_btn.addEventListener("click", watchStop);
reset_btn.addEventListener("click", watchReset);

var darkmode_btn = document.getElementById("btn-darkmode");

darkmode_btn.addEventListener('click', function() {
    document.documentElement.classList.toggle('dark-mode');
})