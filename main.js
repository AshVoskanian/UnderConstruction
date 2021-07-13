let day = document.querySelector ('#day');
let hour = document.querySelector ('#hour');
let minute = document.querySelector ('#minute');
let second = document.querySelector ('#second');
let meta = document.querySelector('#minutes')

let minutes = +meta.content;
let seconds = minutes * 60;

function timer() {
  let days = Math.floor (seconds / 24 / 60 / 60);
  let hoursLeft = Math.floor ((seconds) - (days * 86400));
  let hours = Math.floor (hoursLeft / 3600);
  let minutesLeft = Math.floor ((hoursLeft) - (hours * 3600));
  let minutes = Math.floor (minutesLeft / 60);
  let remainingSeconds = seconds % 60;

  function pad(n) {
    return (n < 10 ? "0" + n : n);
  }

  day.innerHTML = pad(days);
  hour.innerHTML = pad(hours);
  minute.innerHTML = pad(minutes);
  second.innerHTML = pad(remainingSeconds);

  if (seconds === 0) {
    clearInterval (countdownTimer);
  } else {
    seconds--;
  }
}

let countdownTimer = setInterval ('timer()', 1000);
