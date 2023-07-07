class Timer {
  constructor(date, elementID) {
    this.date = date;
    this.elementID = elementID;
  }
  
  stopWatch() {
    var targetDate = new Date(this.date)
    var now = new Date();
    var timeDiff = now.getTime() - targetDate.getTime();
  
    var days = Math.floor(timeDiff / (1000 * 3600 * 24));
    var hours = Math.floor((timeDiff / (1000 * 3600)) % 24);
    var minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    var seconds = Math.floor((timeDiff / 1000) % 60);
  
    var timerDisplay = days + ' days, ' + hours + ' hours, ' + minutes + ' minutes, ' + seconds + ' seconds';
    document.getElementById(this.elementID).innerHTML = timerDisplay;
  }

  countDown() {
    var targetDate = new Date(this.date)
    var now = new Date();
    var timeDiff = targetDate.getTime() - now.getTime();
  
    var days = Math.floor(timeDiff / (1000 * 3600 * 24));
    var hours = Math.floor((timeDiff / (1000 * 3600)) % 24);
    var minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    var seconds = Math.floor((timeDiff / 1000) % 60);
  
    var timerDisplay = days + ' days, ' + hours + ' hours, ' + minutes + ' minutes, ' + seconds + ' seconds';
    document.getElementById(this.elementID).innerHTML = timerDisplay;
  }
}

const michaelTimer = new Timer('2023-07-06T21:03:00', 'michael-timer');
const ldocTImer = new Timer('2023-09-19T18:30:00', 'ldoc-timer');

setInterval(() => {
  michaelTimer.stopWatch();
  ldocTImer.countDown();
}, 1000);