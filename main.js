"use strict";
const startBtn = document.querySelector(".startButton");
const stopBtn = document.querySelector(".stopButton");
const display = document.querySelector(".display");
const log = document.querySelector(".log");
let stop = null;

function nowTime() {
  let now = new Date();
  const hours = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();
  const time = `${hours}時${min}分${sec}秒`;
  return time;
}

startBtn.addEventListener("click", () => {
  if (stop === null) {
    let seconds = 0;
    stop = setInterval(() => {
      seconds++;
      display.textContent = seconds;
    }, 1000);
    log.textContent = `${nowTime()}：開始`;
  }
});

stopBtn.addEventListener("click", () => {
  if (stop !== null) {
    clearInterval(stop);
    stop = null;
    log.textContent = `${nowTime()}：終了`;
  }
});
