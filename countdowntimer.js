let countdown;
let timeRemaining = 3600; // Set time in seconds (e.g., 3600 for 1 hour)
let isRunning = false;

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function displayTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const display = `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    timerDisplay.textContent = display;
}

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    countdown = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            displayTime(timeRemaining);
        } else {
            clearInterval(countdown);
            isRunning = false;
            alert("Time's up!");
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(countdown);
    isRunning = false;
}

function resetTimer() {
    clearInterval(countdown);
    isRunning = false;
    timeRemaining = 3600; // Reset to initial time
    displayTime(timeRemaining);
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

displayTime(timeRemaining); // Initial display
