import './App.css';
import React, { Component } from "react";
import firebase from 'firebase/app';
import 'firebase/database';



export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pastEquations: [],
      currentEquation: '',
    };
  }

  ref = firebase.database().ref('/');

  componentDidMount() {
    this.ref.on('value', (snapshot) => {
      let values = [];
      snapshot.forEach(data => {
        let dataVal = data.val();
        values.push(dataVal);
      })

      this.setState({pastEquations: values})
      this.showValues();
    });  
  }

  componentWillUnmount() {
    this.ref.off()
  }

  updateValue = (value) => {
    value = value;
    console.log(value)
    return value;
  }
  
  handleChange = (event) => { 
    this.setState({currentEquation: event.target.value});
  }

  result = () => {
    let result = eval(this.state.currentEquation);
    return result;
  }

  addToFirebase = () => {
    let whole = this.state.currentEquation + "=" + this.result();
    this.setState({currentEquation: whole})
    this.ref.push({equation: whole});
  }

  updateState = () => {
    this.ref.on('value', (snapshot) => {
      let value = snapshot.val();
      let keys = Object.keys(value);
        let equations = keys.map((key) => {
          return {key: key, ...value[key] }
        });
        this.setState({pastEquations: equations})
    });
  }

  resetForm = () => {
    document.querySelector('#equation').value = '';
  }

  showValues = () => {
    document.querySelector('#previous').style.display = "block";
    this.displayValues();
  }

  displayValues = () => {
    let previous = document.querySelector('#previous');
      let formatted = "";
      let equations = this.state.pastEquations.reverse();
      console.log(equations)
      if (equations.length > 10) {
        for (let i = 0; i < 10; i++){
          formatted += " " + Object.values(equations)[i].equation
          + '<br>';
        }
    } else {
        for (let i = 0; i < equations.length; i++){
          formatted += " " + Object.values(equations)[i].equation + '<br>';
        }
    }
    previous.innerHTML = formatted;
    
  }

  handleClick = (event) => {
    event.preventDefault();
    this.showValues();
    this.result();
    this.addToFirebase();
    this.showValues();
    this.resetForm();
    this.setState({currentEquation: ''})
  }

  render () {
    return(
      <div className="container">
        <div className="calculator">
          <div className="flex-container">
            <section>
              <div className="flex-item">
                <form id="input-form">
                  <label htmlFor="calc" id="math-lab">Enter a math problem:</label>
                  <input type="text" id="equation" name="input-bar" className="math-input" placeholder="type here" value={this.state.value} onChange={this.handleChange}></input>

                  <input type="submit" value="Evaluate" className="submit-button" aria-label="submit button" onClick={this.handleClick}></input>

                </form>
              </div>
            </section>
            <section>
              <div>
                <p>Previous Problems</p>
                <div>
                  <div id="previous" className="answer-list">
                  </div>

                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
