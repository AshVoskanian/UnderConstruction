let day = document.querySelector ('#day');
let hour = document.querySelector ('#hour');
let minute = document.querySelector ('#minute');
let second = document.querySelector ('#second');
let meta = document.querySelector('#date')



function timer() {
  let inputDate = meta.content;
  let date = new Date();
  date.setFullYear(+inputDate.split('/')[2].split(' ')[0], +inputDate.split('/')[1] - 1, +inputDate.split('/')[0]);
  date.setHours(+inputDate.split(' ')[1].split(':')[0], +inputDate.split(' ')[1].split(':')[1], +inputDate.split(' ')[1].split(':')[2]);
  let seconds = (date.getTime() - new Date().getTime()) / 1000;

  if (seconds < 0) {
    return;
  }

  let days = Math.floor (seconds / 24 / 60 / 60);
  let hoursLeft = Math.floor ((seconds) - (days * 86400));
  let hours = Math.floor (hoursLeft / 3600);
  let minutesLeft = Math.floor ((hoursLeft) - (hours * 3600));
  let minutes = Math.floor (minutesLeft / 60);
  let remainingSeconds = Math.trunc(seconds % 60);

  function pad(n) {
    return (n < 10 ? "0" + n : n);
  }

  day.innerHTML = pad(days);
  hour.innerHTML = pad(hours);
  minute.innerHTML = pad(minutes);
  second.innerHTML = pad(remainingSeconds);

  if (seconds === 0) {
    clearInterval (countdownTimer);
  }
}

let countdownTimer = setInterval ('timer()', 1000);
