let startTime = 0;
let elapsedTime = 0;
let timerInterval;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const lapsList = document.getElementById('laps');

function timeToString(time) {
  const diffInHrs = time / 3600000;
  const hh = Math.floor(diffInHrs);

  const diffInMin = (diffInHrs - hh) * 60;
  const mm = Math.floor(diffInMin);

  const diffInSec = (diffInMin - mm) * 60;
  const ss = Math.floor(diffInSec);

  const diffInMs = (diffInSec - ss) * 1000;
  const ms = Math.floor(diffInMs);

  const formattedMM = mm.toString().padStart(2, '0');
  const formattedSS = ss.toString().padStart(2, '0');
  const formattedMS = ms.toString().padStart(3, '0');

  return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

function print(txt) {
  display.textContent = txt;
}

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    print(timeToString(elapsedTime));
    display.classList.add('running');
  }, 10);

  startBtn.disabled = true;
  stopBtn.disabled = false;
  resetBtn.disabled = false;
  lapBtn.disabled = false;
}

function stop() {
  clearInterval(timerInterval);
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = false;
  lapBtn.disabled = true;
  display.classList.remove('running');
}

function reset() {
  clearInterval(timerInterval);
  print("00:00:000");
  elapsedTime = 0;
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = true;
  lapBtn.disabled = true;
  lapsList.innerHTML = '';
  display.classList.remove('running');
}

function lap() {
  if (elapsedTime === 0) return; // no lap if timer not started
  const lapTime = timeToString(elapsedTime);
  const lapItem = document.createElement('li');
  lapItem.textContent = `Lap ${lapsList.children.length + 1}`;
  const timeSpan = document.createElement('span');
  timeSpan.textContent = lapTime;
  lapItem.appendChild(timeSpan);
  lapsList.appendChild(lapItem);

  // Scroll to the latest lap
  lapsList.scrollTop = lapsList.scrollHeight;
}

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', lap);
