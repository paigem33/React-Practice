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
    let isNum = /\d/
    //if the first button pushed is not a number and num1 does not have a value
    if (isNum.test(button) === false && num1 === ''){
      console.log('not a number')
      //if button pushed is a number and num1 is empty
    } else if (isNum.test(button) === true && num1 === ''){
      // let buttonNew = parseFloat(button)
      this.setState({num1:button})
      console.log(button)
      //if the button pushed is a number and there is already a value in num1
    } else if (isNum.test(button) === true && num1 !== '' && operation === ''){
      let newValue = num1+button
      this.setState({num1:newValue})
      console.log(newValue)
      //if a non number button is pushed and there is a value in num1 and no value in num2
    } else if (isNum.test(button) === false && num1 !== '' && num2 === ''){
      //clear num1 if C is pressed
      if (button === 'C' || button === 'CE'){
        this.setState({num1:''})
        //if button is +
      } else if (button === '+' || button === '-' || button === 'X' || button === '/'){
        this.setState({operation:button})
        console.log(button)
      }
      //if buttonpressed is a number and num1 has a value and operation has a value and num2 does not have a value
    } else if (isNum.test(button) === true && num1 !== '' && operation !== '' && num2 === ''){
      this.setState({num2:button})
      console.log(button)
      //if button pushed is a number and there is already a value for num1 and a value for operation and a value for num2
    } else if (isNum.test(button) === true && num1 !== '' && operation !== '' && num2 !== ''){
      let newValue = num2+button
      this.setState({num2:newValue})
      console.log(newValue)
      //if button pressed is C and num2 has a value
    } else if (num2 !== '' && button === 'C'){
      this.setState({num2:''})
      console.log(button)
      //if num2 has a value and button pressed is CE
    } else if (num2 !== '' && button === 'CE'){
      this.setState({num1:''})
      this.setState({num2:''})
      this.setState({operation:''})
      console.log(button)
    } else if (num1 !== '' && num2 !== '' && operation === '+' && button === '='){
      let outcome = parseFloat(num1)+parseFloat(num2)
      this.setState({result:outcome})
      console.log(outcome)
    } else if (num1 !== '' && num2 !== '' && operation === '-' && button === '='){
      let outcome = parseFloat(num1)-parseFloat(num2)
      this.setState({result:outcome})
      console.log(outcome)
    } else if (num1 !== '' && num2 !== '' && operation === 'X' && button === '='){
      let outcome = parseFloat(num1)*parseFloat(num2)
      this.setState({result:outcome})
      console.log(outcome)
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
