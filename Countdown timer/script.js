const Days = document.getElementById("days");
const Hours = document.getElementById("hours");
const Minutes = document.getElementById("minutes");
const Seconds = document.getElementById("seconds");

let targetDate = null;
let timerInterval = null;

function timer() {
    if (!targetDate) return;

    const currentDate = new Date().getTime();
    const difference = targetDate - currentDate;

    if (difference <= 0) {
        clearInterval(timerInterval);
        Days.innerHTML = Hours.innerHTML = Minutes.innerHTML = Seconds.innerHTML = "00";
        return;
    }

    const days = Math.floor(difference / 1000 / 60 / 60 / 24);
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(difference / 1000 / 60) % 60;
    const seconds = Math.floor(difference / 1000) % 60;

    Days.innerHTML = String(days).padStart(2, '0');
    Hours.innerHTML = String(hours).padStart(2, '0');
    Minutes.innerHTML = String(minutes).padStart(2, '0');
    Seconds.innerHTML = String(seconds).padStart(2, '0');
}

function setCountdown() {
    const input = document.getElementById("userDate").value;
    if (!input) {
        alert("Please select a valid date and time.");
        return;
    }

    targetDate = new Date(input).getTime();
    if (isNaN(targetDate)) {
        alert("Invalid date format.");
        return;
    }

    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(timer, 1000);
    timer(); // run immediately
}

function cancelCountdown() {
    clearInterval(timerInterval);
    targetDate = null;
    Days.innerHTML = Hours.innerHTML = Minutes.innerHTML = Seconds.innerHTML = "00";
    document.getElementById("userDate").value = "";
}
