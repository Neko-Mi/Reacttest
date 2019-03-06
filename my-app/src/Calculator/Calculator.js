import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      result: 0,
      number1: 10,
      number2: 20,
      operation: "+"
    };

    this.showResult = this.showResult.bind(this);
    this.handleNumber1Change = this.handleNumber1Change.bind(this);
    this.handleNumber2Change = this.handleNumber2Change.bind(this);
    this.handleOperationChange = this.handleOperationChange.bind(this);
  }

  showResult(operation, number1, number2){

    let result = 0;

    switch (operation) {
      case "+":
        result = number1 + number2;
        break;
      case "-":
        result = number1 - number2;
        break;
      default:
        break;
    }
    this.setState({result: result});
  }
  handleNumber1Change(e){
    
    let number1 = +e.currentTarget.value
     
    this.setState({number1: number1});

    let {number2, operation} = this.state;

    this.showResult(operation, number1, number2 )
  }

  handleNumber2Change(e){

    let number2 = +e.currentTarget.value;

    this.setState({number2: number2});

    let {number1, operation} = this.state;

    this.showResult(operation, number1, number2 )
  }

  handleOperationChange(e){
    
    let operation = e.currentTarget.value;

    this.setState({operation: operation});

    let {number1, number2} = this.state;

    this.showResult(operation, number1, number2 )
  }

  render() {
    return (
      <div className="Calculator">
      <div>
         <input value={this.state.number1} 
          onChange={this.handleNumber1Change} />
      </div>
      <div>
         <select onChange={this.handleOperationChange}>
          <option value="+">+</option>
          <option value="-">-</option>
        </select>
      </div>
       <div>
         <input value={this.state.number2}
         onChange={this.handleNumber2Change}/>
       </div>
        
        <div>
          {/* <button onClick={this.showResult}>Get result</button> */}
        <div>
          Result: <span>{this.state.result}</span>
        </div>
        </div>
        
      </div>
    );
  }
}

export default Calculator;
