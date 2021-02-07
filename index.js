'use strict';
// import 'bootstrap/dist/css/bootstrap.min.css';


let equationState = {
      pastEquations: [],
      currentEquation: '',
};


let form = document.querySelector('#input-form');
let equation = '';
// Button Handling
form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('button pressed');
    console.log(addTo())
    showValues();
    resetForm();
});

form.addEventListener('input', function(event){
  event.preventDefault();
  equation = updateValue(event.target.value);
  console.log("equation; " + equation)
});

function updateValue(value) {
  value = value;
  console.log(value)
  return value;
}

function result() {
  let result = eval(equation);
  console.log("in result");
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
      formatted += " " + equations[i] + '\n';
    }
  } else {
      for (let i = 0; i < equations.length; i++){
        formatted += " " + equations[i] + '\n';
      }
  }
  previous.textContent = formatted
}