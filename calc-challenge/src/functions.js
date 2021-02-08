'use strict';

let equationState = {
      pastEquations: [],
      currentEquation: '',
};


let form = document.querySelector('#input-form');
let equation = '';
// Button Handling
form.addEventListener('submit', function(event){
    event.preventDefault();
    addTo();
    showValues();
    resetForm();
});

form.addEventListener('input', function(event){
  event.preventDefault();
  equation = updateValue(event.target.value);
});

function updateValue(value) {
  value = value;
  console.log(value)
  return value;
}

function result() {
  let result = eval(equation);
  return result;
}

function addTo () {
  let whole = equation + "=" + result();
  console.log(whole)
  let past = equationState.pastEquations;
  past = past.push(whole);
  equationState.currentEquation = equation;
}

function resetForm() {
  document.querySelector('#equation').value = '';
}

function showValues() {
   document.getElementById('previous').style.display = "block";
   displayValues();
}

function displayValues() {
  let previous = document.querySelector('#previous');
  let formatted = "";
  let equations = equationState.pastEquations.reverse();
  if (equations.length > 10) {
    for (let i = 0; i < 10; i++){
      formatted += " " + equations[i] + '<br>';
    }
  } else {
      for (let i = 0; i < equations.length; i++){
        formatted += " " + equations[i] + '<br>';
      }
  }
  previous.innerHTML = formatted;
}