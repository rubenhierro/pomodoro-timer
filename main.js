let timer = {
    total: 0,
    minutes: 20,
    seconds: 0
};
let timeInterval;
let timeClass;

const selectTime = document.getElementById('selectTime')
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const start = document.getElementById('startButton');
const stop = document.getElementById('stopButton');
const reset = document.getElementById('resetButton');

selectTime.addEventListener('click', setTimer);
start.addEventListener('click', startClock);
stop.addEventListener('click', stopClock);

showTimer();

function showTimer() {
    minutes.innerHTML = ('0' + timer.minutes).slice(-2);
    seconds.innerHTML = ('0' + timer.seconds).slice(-2);
}

function setTimer() {
    const target = event.target;

    // recorrer tot els fills i esborrar la classe.
    //target.classList.toggle('isActive');

    target.classList = 'isActive';

    switch (target.id) {
        case 'pomodoro':
            timer.minutes = 20;
            break;
        case 'shortBreak':
            timer.minutes = 5;
            break;
        case 'longBreak':
            timer.minutes = 10;
            break;
    }

    showTimer();
    //console.log(timer);
}

function startClock() {
    timer.total = timer.minutes * 60 + timer.seconds;
    console.log(timer.total);
    function updateCounter() {
        //const t = timeRemainig(endTime);
        timer.seconds = Math.floor((timer.total) % 60);
        timer.minutes = Math.floor((timer.total / 60) % 60);

        showTimer();
        //console.log(timer);
        timer.total -= 1;
        if (timer.total <= 0) {
            clearInterval(timeInterval);
        }
    }
    updateCounter();
    timeInterval = setInterval(updateCounter, 1000);
}




function stopClock() {
    clearInterval(timeInterval);
}

function resetClock() {
    // detectar quin element isActive i segons el id assignar el temps i mostrar


}