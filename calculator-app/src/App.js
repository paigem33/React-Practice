import React, { Component } from 'react';
import Result from './Result'
import KeyPad from './KeyPad'
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      num1: "",
      num2: "",
      operation: "",
      result: ""
    }
  }
  
  onClick = (button) => {
    let {result, num1, num2, operation} = this.state
    if (num1 === ""){
      this.setState({num1:button})
      console.log(button)
    } else if (operation === ""){
      this.setState({operation:button})
      console.log(button)
    } else if (num2 === ""){
      this.setState({num2:button})
      console.log(button)
    } else if (button === "="){
      let newNum1 = parseFloat(num1)
      let newNum2 = parseFloat(num2)
      result = newNum1+operation+newNum2
      this.setState({result})
      console.log(button)
    }
  }
  
  render() {
    return (
      <div className="app">
        <Result result={this.state.result}/>
        <KeyPad onClick={this.onClick}/>
      </div>
    );
  }
}
