const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const timezone = document.getElementById('timezone-menu')

setLocalTimezone()
setTime()
setInterval(setTime, 500)

function setTime() {  
  const timezoneValue = parseInt(timezone.options[timezone.selectedIndex].value);
  const currentTime = new Date();
  const setTimezone = currentTime.setUTCHours(currentTime.getUTCHours() + timezoneValue);
  const hour = currentTime.getUTCHours();
  const minute = currentTime.getMinutes();
  const second = currentTime.getSeconds();
  if (String(hour).length === 1) {
    hours.innerText = '0' + hour + ':';
  } else {
    hours.innerText = hour + ':';
  }
  if (String(minute).length === 1) {
    minutes.innerText = '0' + minute + ':';
  } else {
    minutes.innerText = minute + ':';
  }
  if (String(second).length === 1) {
    seconds.innerText = '0' + second
  } else {
    seconds.innerText = second
  }
}

function setLocalTimezone() {
  const time = new Date();
  const localTime = time.getHours() - time.getUTCHours();
  timezone[0].value = localTime;
  timezone[0].innerText = 'Local timezone ' + localTime;
}