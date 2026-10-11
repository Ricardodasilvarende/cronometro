// Corrigido: Inicializando o array com os valores [0, 0, 0]
let [seconds, minutes, hours] = [0, 0, 0];
let timerRef = document.getElementById('display');
let int = null;

const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');

startBtn.addEventListener('click', () => {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 1000);
    startBtn.disabled = true;
    pauseBtn.disabled = false;
});

pauseBtn.addEventListener('click', () => {
    clearInterval(int);
    startBtn.disabled = false;
    pauseBtn.disabled = true;
});

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(int);
    // Corrigido: Resetando as variáveis para 0
    [seconds, minutes, hours] = [0, 0, 0];
    timerRef.innerHTML = '00:00:00';
    startBtn.disabled = false;
    pauseBtn.disabled = true;
});

function displayTimer() {
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

    timerRef.innerHTML = `${h}:${m}:${s}`;
}
