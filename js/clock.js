const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  
  const day = date.getDate();
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ang', 'Sep', 'Oct', 'Nov', 'Dec']
  const monthofYear = month[date.getMonth()];
  const year = date.getFullYear();
  const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ]
  const dayofWeek = week[date.getDay()];

  clock.innerText = `${dayofWeek} ${day} ${monthofYear} ${year} ${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

