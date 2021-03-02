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


// inputs
// let trueVariable = 10;
// let falseVariable = 0;


let stop = document.querySelector('#stop')
stop.onclick = function(){
  stopTimer();
  document.getElementById("name").readOnly = true;
  let variable = document.querySelector('#name').value;
  localStorage.setItem('name', `${variable}`)


  document.getElementById("lastName").readOnly = true;
  let variable1 = document.querySelector('#lastName').value;
  localStorage.setItem('lastName', `${variable1}`)

  document.getElementById("country").readOnly = true;
  let variable2 = document.querySelector('#country').value;
  localStorage.setItem('country', `${variable2}`)

  document.getElementById("city").readOnly = true;
  let variable3 = document.querySelector('#city').value;
  localStorage.setItem('city', `${variable3}`)

  document.getElementById("animal").readOnly = true;
  let variable4 = document.querySelector('#animal').value;
  localStorage.setItem('animal', `${variable4}`)

  document.getElementById("plant").readOnly = true;
  let variable5 = document.querySelector('#plant').value;
  localStorage.setItem('plant', `${variable5}`)

  document.getElementById("sumOf").readOnly = true;
  let variable6 = document.querySelector('#sumOf').value;
  localStorage.setItem('sumOf', `${variable6}`)

}

//  To see result
let more = document.querySelector('#more')
more.onclick = function(){
  addDiv();
  readByElements();
  eyeFunc();
} 
//  Refreshing for timer reseting

let refreshGame = document.querySelector('#refreshGame')
refreshGame.onclick = function(){
  resetTimer();
}



// ADD Div !
function addDiv() {
  const row = document.querySelectorAll('.container');
  row.forEach(rows => {
    var objTo = document.getElementById('container1');
    var divtest = document.createElement("div");
    divtest.innerHTML = rows.innerHTML;
    objTo.append(divtest);
  })

};





// sums , gets items from local storage and cheks with db.json
function eyeFunc(){
  const names = localStorage.getItem("name");
  if(names == "გიო"){
    gio = 10;
    document.getElementById("name").value = `${names} ${gio}`;


  }else{
    gio = 0;
    document.getElementById("name").value = `${names} ${gio}`;
  }
  

  const lastNames = localStorage.getItem("lastName");
  if(lastNames == "გოშაძე"){
    goshadze = 10;
    document.getElementById("lastName").value = `${lastNames} ${goshadze}`;

  }else{
    goshadze = 0;
    document.getElementById("lastName").value = `${lastNames} ${goshadze}`;

  }

  const countrys = localStorage.getItem("country");
  if(countrys == "განა"){
    gana = 10;
    document.getElementById("country").value = `${countrys} ${gana}`;

  }else{
    gana = 0;
    document.getElementById("country").value = `${countrys} ${gana}`;

  }
  
  const citys = localStorage.getItem("city");
  if(citys == "გორი"){
    gori = 10;
    document.getElementById("city").value = `${citys} ${gori}`;

  }else{
    gori = 0;
    document.getElementById("city").value = `${citys} ${gori}`;
    
  }
  
  const animals = localStorage.getItem("animal");
  if(animals == "გორილა"){
    gorila = 10;
    document.getElementById("animal").value = `${animals} ${gorila}`;

  }else{
    gorila = 0;
    document.getElementById("animal").value = `${animals} ${gorila}`;

  }
  
  const plants = localStorage.getItem("plant");
  if(plants == "გოგრა"){
    gogra = 10;
    document.getElementById("plant").value = `${plants} ${gogra}`;
    

  }else{
    gogra = 0;
    document.getElementById("plant").value = `${plants} ${gogra}`;
  
  }
  let sum = gio + goshadze + gana + gori + gorila + gogra   
  console.log(sum)
  document.getElementById("sumOf").value = `${sum}`;
 


}

// Read only elements func
function readByElements(){
  document.getElementById("name").readOnly = true;
  document.getElementById("lastName").readOnly = true;
  document.getElementById("country").readOnly = true;
  document.getElementById("city").readOnly = true;
  document.getElementById("animal").readOnly = true;
  document.getElementById("plant").readOnly = true;
}



//Timer Func
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


// Random massive and function

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







