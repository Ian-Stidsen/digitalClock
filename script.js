const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

setTime()
setInterval(setTime, 1000)

function setTime() {  
  const currentTime = new Date();
  const hour = String(currentTime.getHours() + ':');
  const minute = String(currentTime.getMinutes() + ':');
  const second = String(currentTime.getSeconds());
  if (hour.length === 1) {
    hours.innerText = '0' + hour
  } else {
    hours.innerText = hour
  }
  if (minute.length === 1) {
    hours.innerText = '0' + hour
  } else {
    minutes.innerText = minute
  }
  if (second.length === 1) {
    seconds.innerText = '0' + second
  } else {
    seconds.innerText = second
  }
}