// DOM Targetting
const countPara = document.querySelector(".count");
const btnAdd = document.querySelector(".btn-add");
const btnSave = document.querySelector(".btn-save");
const btnReset = document.querySelector(".btn-reset");
const entries = document.querySelector(".entries");

// Variables
let rep = 0;
const repLog = [];

// Paint DOM
function paint() {
  countPara.textContent = rep;
  entries.textContent = 'Entries: ' + repLog.join(' - ');
}

// Functions
function addOne() {
  rep += 1;
  paint();
}

function save() {
  repLog.push(rep);
  rep = 0;
  paint();
}

function reset() {
  rep = 0;
  repLog.length = 0;
  paint();
}

// Add event listeners
btnAdd.addEventListener("click", addOne);
btnSave.addEventListener("click", save);
btnReset.addEventListener("click", reset);
