"use strict";
const startBtn = document.querySelector(".startButton");
const stopBtn = document.querySelector(".stopButton");
const display = document.querySelector(".display");
let stop = null;

startBtn.addEventListener("click", () => {
  if (stop === null) {
    let seconds = 0;
    stop = setInterval(() => {
      seconds++;
      display.textContent = seconds;
    }, 1000);
  }
});

stopBtn.addEventListener("click", () => {
  if (stop !== null) {
    clearInterval(stop);
    stop = null;
  }
});
