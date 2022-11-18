// let url = "https://islomapi.uz/api/present/day?region=Toshkent";
let elList = document.querySelectorAll(".list");
const elItems = document.querySelectorAll(".list-item");

async function data() {
  const request = await fetch("https://islomapi.uz/api/present/day?region=Toshkent");
  const respons = await request.json();

  renderFunction(respons.times)
  console.log(respons);

  let realTime = document.querySelector(".real-time").textContent = respons.date
}
data();

function renderFunction(data) {
  const times = Object.values(data);
  times.forEach((time, index) => {
    elItems[index].querySelector("p").textContent = time;
  });
}


// real time 

function checkTime(){
  let today = new Date();
  let hr = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();
  let hours = document.querySelector(".hours");
  let minutes = document.querySelector(".minutes");
  let seconds = document.querySelector(".seconds");
  console.log(hr);
  if(hr < 10){
    hr = "0" + hr;
  }
    if(min < 10){
    min = "0" + min;
  }
    if(sec < 10){
    sec = "0" + sec;
  }

  
  
  hours.textContent = hr + " : ";
  minutes.textContent = min + " : ";
  seconds.textContent = sec;
}

setInterval(checkTime, 500);


