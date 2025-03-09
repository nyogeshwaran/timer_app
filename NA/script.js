let timer;
let timeLeft = 25 * 60;
let isRunning = false;

const display = document.querySelector(".timer-display");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const stopBtn = document.getElementById("stop");
const pomodoroBtn = document.getElementById("pomodoro");
const shortBreakBtn = document.getElementById("short-break");
const longBreakBtn = document.getElementById("long-break");
const alarm = document.getElementById("alarm");

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    display.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                alarm.play();
                isRunning = false;
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 25 * 60;
    updateDisplay();
    isRunning = false;
}

function stopTimer() {
    clearInterval(timer);
    timeLeft = 0;
    updateDisplay();
    isRunning = false;
}

function setMode(time) {
    clearInterval(timer);
    timeLeft = time * 60;
    updateDisplay();
    isRunning = false;
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
stopBtn.addEventListener("click", stopTimer);

pomodoroBtn.addEventListener("click", () => setMode(25));
shortBreakBtn.addEventListener("click", () => setMode(5));
longBreakBtn.addEventListener("click", () => setMode(15));

updateDisplay();
