let timer;
let isRunning = false;
let remainingTime = 0;

function startTimer() {
    if (isRunning) return;//to enter a valid number in the minute input

    const minutesInput = document.getElementById('minutesInput').value;
    remainingTime = minutesInput * 60;

    if (remainingTime > 0) {
        isRunning = true;
        timer = setInterval(updateTimer, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);//stop executing the setInterval method in the output that is to stop the counting numbers
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    remainingTime = 0;
    document.getElementById('timer').textContent = "00:00";
    document.getElementById('minutesInput').value = "";
}

function updateTimer() {
    if (remainingTime <= 0) {
        clearInterval(timer);
        isRunning = false;
        return;
    }

    remainingTime--;

    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    document.getElementById('timer').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;//to be able to convert the minutes and seconds in two digits starting with 0
}