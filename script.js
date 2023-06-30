var targetDate = new Date('2023-06-29T21:30:00');

function updateTimer() {
  var now = new Date();
  var timeDiff = now.getTime() - targetDate.getTime();

  var days = Math.floor(timeDiff / (1000 * 3600 * 24));
  var hours = Math.floor((timeDiff / (1000 * 3600)) % 24);
  var minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
  var seconds = Math.floor((timeDiff / 1000) % 60);

  var timerDisplay = days + ' days, ' + hours + ' hours, ' + minutes + ' minutes, ' + seconds + ' seconds';
  document.getElementById('timer').innerHTML = timerDisplay;
}

function resetTimer() {
  targetDate = new Date();
  updateTimer();
}

updateTimer();
setInterval(updateTimer, 1000);