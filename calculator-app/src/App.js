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
      result: "",
      equals: "",
      color: ""
    }
  }
  
  onClick = (button) => {
    let {result, num1, num2, operation, equals, color} = this.state
    let isNum = /\d/
  
    //if the first button pushed is not a number and num1 does not have a value, nothing happens
    if (isNum.test(button) === false && num1 === ''){
      console.log('not a number')
      
      //if button pressed is CE at anytime
    } else if (button === 'CE'){
      this.setState({num1:''})
      this.setState({num2:''})
      this.setState({operation:''})
      this.setState({result: ''})
      this.setState({equals:''})
      console.log(button)
      
      //take off last char if button pressed is C
    } else if (button === 'C'){
      if (equals !== ''){
        this.setState({equals:''})
        this.setState({result:''})
        console.log('C')
      } else if(num2 !== ''){
        let newNum = num2.slice(0, -1) 
        this.setState({num2:newNum})
        console.log('C')
      } else if (num2 === '' && operation !== '') {
        let newOp = operation.slice(0, -1) 
        this.setState({operation:newOp})
        console.log('C')
      } else if (num2 === '' && operation === '' && num1 !== ''){
        let newNum = num1.slice(0, -1) 
        this.setState({num1:newNum})
        console.log('C')
      }
      //if button pushed is a number and num1 is empty, num1 is assigned that value
      } else if (isNum.test(button) === true && num1 === ''){
        this.setState({num1:button})
        console.log(button)
      
      //if the button pushed is a number and there is already a value in num1, put that number into num1
    } else if (isNum.test(button) === true && num1 !== '' && operation === ''){
      let newValue = num1+button
      this.setState({num1:newValue})
      console.log(newValue)
      
      //if a non number button is pushed and there is a value in num1 and no value in num2, that value becomes operation unless the value is C or CE
    } else if (isNum.test(button) === false && num1 !== '' && num2 === ''){
      
      //clear num1 if C or CE is pressed
      // if (button === 'C' || button === 'CE'){
      //   this.setState({num1, operation:''})
      //   console.log('C')
      // } 
      if (button === '+' || button === '-' || button === '*' || button === '/'){
        this.setState({operation:button})
        console.log(button)
      } //end of nested conditional 
      
      //if button pressed is a number and num1 has a value and operation has a value and num2 does not have a value, then that value becomes num2
    } else if (isNum.test(button) === true && num1 !== '' && operation !== '' && num2 === ''){
      this.setState({num2:button})
      console.log(button)
      
      //if button pushed is a number and there is already a value for num1 and a value for operation and a value for num2, add that number to num2
    } else if (isNum.test(button) === true && num1 !== '' && operation !== '' && num2 !== ''){
      let newValue = num2+button
      this.setState({num2:newValue})
      console.log(newValue)

      //if num2 has a value and button pressed is CE, reset everything
    } else if (num2 !== '' && button === 'C'){
      this.setState({num2:''})
      console.log(button)
      //if num1, num2, and operation have values and button pressed is = and operation is +, add num1 and num2
    } else if (num1 !== '' && num2 !== '' && operation === '+' && button === '='){
      let outcome = parseFloat(num1)+parseFloat(num2)
      this.setState({result:outcome, equals:'='})
      console.log(outcome)
    } else if (num1 !== '' && num2 !== '' && operation === '-' && button === '='){
      let outcome = parseFloat(num1)-parseFloat(num2)
      this.setState({result:outcome, equals:'='})
      console.log(outcome)
    } else if (num1 !== '' && num2 !== '' && operation === '*' && button === '='){
      let outcome = parseFloat(num1)*parseFloat(num2)
      this.setState({result:outcome, equals:'='})
      console.log(outcome)
    } else if (num1 !== '' && num2 !== '' && operation === '/' && button === '='){
      let outcome = parseFloat(num1)/parseFloat(num2)
      this.setState({result:outcome, equals:'='})
      console.log(outcome)
  }
  }
  
setColor = (button) => {
  if(button === 'Blue'){
      console.log('color btn')
      this.setState({color:'blue'})
    } else if (button === 'Red'){
      console.log('color btn')
      this.setState({color:'red'})
    } else if (button === "reset"){
      this.setState({color:''})
    }
}
  
  
  render() {
    return (
      <div className="app">
        <Result result={this.state.result} num1={this.state.num1} num2={this.state.num2} operation={this.state.operation} equals={this.state.equals}/>
        <KeyPad onClick={this.onClick} setColor={this.setColor} color={this.state.color}/>
      </div>
    );
  }
}
