"use strict";

class StopWatch {
  constructor(options = {}) {
    this.options = options;
  }
  init() {
    let { color, backgroundColor } = this.options;
    color = color || "lightblue";
    backgroundColor = backgroundColor || "black";

    //optionsでもdisplay使いたいので最初に持ってくる
    const display = document.querySelector(".display");
    display.style.color = color;
    display.style.backgroundColor = backgroundColor;

    this.logElm = document.querySelector(".log");

    //--options--
    // options = options || {};
    // let color = options.color
    // let backgroundColor = options.backgroundColor || "black";
    //let diaplayElm = document.getElementsByClassName("display")[0];

    const startBtn = document.querySelector(".startButton");
    const stopBtn = document.querySelector(".stopButton");
    let stop = null;

    startBtn.addEventListener("click", () => {
      if (stop === null) {
        let seconds = 0;
        stop = setInterval(() => {
          seconds++;
          display.textContent = seconds;
        }, 1000);
        this.logElm.textContent = this.nowTime("開始"); //`${nowTime()}：開始`;
      }
    });

    stopBtn.addEventListener("click", () => {
      if (stop !== null) {
        clearInterval(stop);
        stop = null;
        this.logElm.textContent = this.nowTime("終了");
      }
    });
  }
  nowTime(a) {
    let now = new Date();
    const hours = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    const time = `${hours}時${min}分${sec}秒`;
    return time + a;
  }
}

let options = {
  color: "limegreen",
  backgroundColor: "#787878",
};

const stopWatch = new StopWatch(options);
stopWatch.init();
stopWatch.nowTime();

// class className {
//   constructor(a, b, c) {
//     this.name = a;
//     this.valur = b;
//     this.time = c;
//     this.image = function ma(x, y) {
//       return x + y + y;
//     };
//   }
// }
// let cn = new className(1, 2, 3);
// console.log(cn.time);
// console.log(cn.image(1, 10));
