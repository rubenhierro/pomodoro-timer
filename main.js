let timer = {
    total: 0,
    minutes: 20,
    seconds: 0
};
let timeInterval;
let timeClass = 'pomodoro';

const selectTime = document.getElementById('selectTime')
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const start = document.getElementById('startButton');
const stop = document.getElementById('stopButton');
const reset = document.getElementById('resetButton');
const alarmAudio = document.createElement('audio');
alarmAudio.src = 'alarm-clock.mp3'

selectTime.addEventListener('click', selectClock);
start.addEventListener('click', startClock);
stop.addEventListener('click', stopClock);
reset.addEventListener('click', setTimer);

showTimer();

function showTimer() {
    minutes.innerHTML = ('0' + timer.minutes).slice(-2);
    seconds.innerHTML = ('0' + timer.seconds).slice(-2);
}

function setTimer() {
    stopClock();
    switch (timeClass) {
        case 'pomodoro':
            timer.minutes = 20;
            break;
        case 'shortBreak':
            timer.minutes = 5;
            break;
        case 'longBreak':
            timer.minutes = 1;
            break;
    }
    timer.seconds = 0;
    showTimer();
}
function selectClock() {
    const target = event.target;
    const children = event.currentTarget.children;

    for (let i = 0; i < children.length; i++) {
        children[i].classList = '';
    }

    target.classList = 'isActive';
    timeClass = target.id;

    setTimer();
}

function startClock() {
    timer.total = timer.minutes * 60 + timer.seconds;
    function updateCounter() {
        timer.seconds = Math.floor((timer.total) % 60);
        timer.minutes = Math.floor((timer.total / 60) % 60);

        showTimer();
        timer.total -= 1;
        if (timer.total < 0) {
            clearInterval(timeInterval);
            alarmAudio.play();
        }
    }
    updateCounter();
    timeInterval = setInterval(updateCounter, 1000);
}

function stopClock() {
    clearInterval(timeInterval);
}
