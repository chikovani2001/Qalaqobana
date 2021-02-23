// Credit: Mateusz Rybczonec

const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};




const TIME_LIMIT = 60;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;


let start = document.querySelector('#start')
start.onclick = function(){
  startTimer();
}

let finish = document.querySelector('#finish')
finish.onclick = function() {
  window.location.reload();
}

let stop = document.querySelector('#stop')
stop.onclick = function(){
  stopTimer();
  document.getElementById("name").readOnly = true;
  document.getElementById("lastName").readOnly = true;
  document.getElementById("country").readOnly = true;
  document.getElementById("city").readOnly = true;
  document.getElementById("animal").readOnly = true;
  document.getElementById("plant").readOnly = true;
}

let more = document.querySelector('#more')
more.onclick = function(){
  resetTimer();

} 
let stop1 = document.querySelector('#stop1')
stop1.onclick = function(){
  stopTimer();
  document.getElementById("name1").readOnly = true;
  document.getElementById("lastName1").readOnly = true;
  document.getElementById("country1").readOnly = true;
  document.getElementById("city1").readOnly = true;
  document.getElementById("animal1").readOnly = true;
  document.getElementById("plan1t").readOnly = true;
}

let more1 = document.querySelector('#more1')
more1.onclick = function(){
  // resetTimer();
}
let stop2 = document.querySelector('#stop2')
stop2.onclick = function(){
  stopTimer();
  document.getElementById("name2").readOnly = true;
  document.getElementById("lastName2").readOnly = true;
  document.getElementById("country2").readOnly = true;
  document.getElementById("city2").readOnly = true;
  document.getElementById("animal2").readOnly = true;
  document.getElementById("plant2").readOnly = true;
}

let more2 = document.querySelector('#more2')
more2.onclick = function(){
  // resetTimer();
}
let stop3 = document.querySelector('#stop3')
stop3.onclick = function(){
  stopTimer();
  document.getElementById("name3").readOnly = true;
  document.getElementById("lastName3").readOnly = true;
  document.getElementById("country3").readOnly = true;
  document.getElementById("city3").readOnly = true;
  document.getElementById("animal3").readOnly = true;
  document.getElementById("plant3").readOnly = true;
}

let more3 = document.querySelector('#more3')
more3.onclick = function(){
  // resetTimer();
}
let stop4 = document.querySelector('#stop4')
stop.onclick = function(){
  stopTimer();
  document.getElementById("name4").readOnly = true;
  document.getElementById("lastName4").readOnly = true;
  document.getElementById("country4").readOnly = true;
  document.getElementById("city4").readOnly = true;
  document.getElementById("animal4").readOnly = true;
  document.getElementById("plant4").readOnly = true;
}

let more4 = document.querySelector('#more4')
more4.onclick = function(){
  // resetTimer();
}


function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}
function stopTimer(){
  clearInterval(timerInterval)
}
function resetTimer(){
  clearTimeout();
}


function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}

function resetTimer(){ 
  window.location.reload();
}




const letters = [
    'ა', 
    'ბ', 
    'გ', 
    'დ', 
    'ე',
    'ვ', 
    'ზ', 
    'თ', 
    'ი', 
    'კ',
    'ლ', 
    'მ', 
    'ნ', 
    'ო', 
    'პ',
    'ჟ', 
    'რ', 
    'ს', 
    'ტ', 
    'უ',
    'ფ', 
    'ქ', 
    'ღ', 
    'ყ', 
    'შ',
    'ჩ', 
    'ც', 
    'ძ', 
    'წ', 
    'ჭ',
    'ჯ',
    'ხ',
    'ჰ'
];

function randomLeter(letters) {
   return letters[Math.floor(Math.random() * letters.length)];
}

document.querySelector("#demo").innerHTML = randomLeter(letters);
console.log(randomLeter(letters))

