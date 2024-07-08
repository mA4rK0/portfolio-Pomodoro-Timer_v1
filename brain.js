// ! this === Pomodoro (class name).

class Pomodoro {
  static resetBtn = document.querySelector(".reset-btn");
  static LongBr = document.querySelector(".LongBr");
  static shortBr = document.querySelector(".shortBr");

  static pomodoro = document.querySelector(".pomo");

  static playBtn = document.querySelector(".play");
  static pauseBtn = document.querySelector(".pause");

  // check the 'd-none' class
  static gone = "d-none";

  static seconds = 0;
  static minutes = 25;
  static timer = null;

  static init() {
    // start
    this.playBtn.addEventListener("click", () => this.doroStart());

    /* OR :
    Pomodoro.playBtn.addEventListener("click", Pomodoro.doroStart); */

    // pause
    this.pauseBtn.addEventListener("click", () => this.doroPause());

    // reset
    this.resetBtn.addEventListener("click", () => this.doroReset());

    // long break
    this.LongBr.addEventListener("click", () => this.longBreak());

    // short break
    this.shortBr.addEventListener("click", () => this.shortBreak());
  }

  static doroTimer() {
    if (this.pomodoro.innerHTML === "00:00") {
      return this.doroReset();
    } else if (this.seconds === 0) {
      this.seconds = 60;
      this.minutes--;
    }
    this.seconds--;

    let m = this.minutes < 10 ? "0" + this.minutes : this.minutes;
    let s = this.seconds < 10 ? "0" + this.seconds : this.seconds;

    this.pomodoro.innerHTML = `${m}:${s}`;
  }

  static longBreak() {
    clearInterval(this.timer);
    this.seconds = 0;
    this.minutes = 30;
    this.pomodoro.innerHTML = "30:00";
    this.doroPause();
  }

  static shortBreak() {
    clearInterval(this.timer);
    this.seconds = 0;
    this.minutes = 5;
    this.pomodoro.innerHTML = "05:00";
    this.doroPause();
  }

  static doroReset() {
    clearInterval(this.timer);
    this.seconds = 0;
    this.minutes = 25;
    this.pomodoro.innerHTML = "25:00";
    this.doroPause();
  }

  static doroStart() {
    this.swapButton();
    this.timer = setInterval(() => this.doroTimer(), 1000);
  }

  static doroPause() {
    this.swapButton();
    clearInterval(this.timer);
    if (this.playBtn.classList.contains(this.gone)) {
      this.swapButton();
    }
  }

  static swapButton() {
    this.playBtn.classList.toggle("d-none");
    this.pauseBtn.classList.toggle("d-none");
  }
}

// Inisialisasi Pomodoro Timer
Pomodoro.init();
