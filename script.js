const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

setTime()
setInterval(setTime, 1000)

function setTime() {  
  const currentTime = new Date()
  hours.innerText = String(currentTime.getHours() + ':')
  minutes.innerText = String(currentTime.getMinutes() + ':')
  seconds.innerText = String(currentTime.getSeconds())
}