var michaelDate = new Date('2023-07-06T21:03:00');

const updateMichaelTimer = () => {
  
  var now = new Date();
  var timeDiff = now.getTime() - michaelDate.getTime();

  var days = Math.floor(timeDiff / (1000 * 3600 * 24));
  var hours = Math.floor((timeDiff / (1000 * 3600)) % 24);
  var minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
  var seconds = Math.floor((timeDiff / 1000) % 60);

  var timerDisplay = days + ' days, ' + hours + ' hours, ' + minutes + ' minutes, ' + seconds + ' seconds';
  document.getElementById('michael-timer').innerHTML = timerDisplay;
};

var ldocDate = new Date('2023-09-11T18:30:00');

const updateLDOCTimer = () => {
  var now = new Date();
  var timeDiff = ldocDate.getTime() - now.getTime();

  var days = Math.floor(timeDiff / (1000 * 3600 * 24));
  var hours = Math.floor((timeDiff / (1000 * 3600)) % 24);
  var minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
  var seconds = Math.floor((timeDiff / 1000) % 60);

  var timerDisplay = days + ' days, ' + hours + ' hours, ' + minutes + ' minutes, ' + seconds + ' seconds';
  document.getElementById('ldoc-timer').innerHTML = timerDisplay;
};


setInterval(() => {
  updateMichaelTimer();
  updateLDOCTimer();
}, 1000);
