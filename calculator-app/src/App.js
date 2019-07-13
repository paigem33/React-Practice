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
  
  onClear = (button) => {
    const {num1, num2, operation, equals} = this.state
    if (button === 'CE'){
      this.setState({num1:''})
      this.setState({num2:''})
      this.setState({operation:''})
      this.setState({result: ''})
      this.setState({equals:''})
      console.log(button)
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
  }
}

  handleNum = (button) => {
    const {num1, num2, operation} = this.state
    if (num1 === ''){
      this.setState({num1:button})
      console.log(button)
    } else if (num1 !== '' && operation === '') {
      let newValue = num1+button
      this.setState({num1:newValue})
      console.log(newValue)
    } else if (operation !== '' && num2 === ''){
      this.setState({num2:button})
      console.log(button)
    } else if (operation !== '' && num2 !== ''){
      let newValue = num2+button
      this.setState({num2:newValue})
      console.log(newValue)
    }
  }
  
  handleOperation = (button) => {
    const {num1, num2} = this.state
    if (num1 !== '' && num2 === ''){
      this.setState({operation:button})
      console.log(button)
    }
  }
  
  handleResult = (button) => {
    const {num1, num2, operation} = this.state
    if (num1 !== '' && num2 !== '' && operation === '+'){
      let outcome = parseFloat(num1)+parseFloat(num2)
      this.setState({result:outcome, equals:'='})
      console.log(button, outcome) 
    } else if (num1 !== '' && num2 !== '' && operation === '-' && button === '='){
      let outcome = parseFloat(num1)-parseFloat(num2)
      this.setState({result:outcome, equals:'='})
      console.log(button, outcome)
    } else if (num1 !== '' && num2 !== '' && operation === '*' && button === '='){
      let outcome = parseFloat(num1)*parseFloat(num2)
      this.setState({result:outcome, equals:'='})
      console.log(button, outcome)
    } else if (num1 !== '' && num2 !== '' && operation === '/' && button === '='){
      let outcome = parseFloat(num1)/parseFloat(num2)
      this.setState({result:outcome, equals:'='})
      console.log(button, outcome)
    }
  }
  
  // onClick = (button) => {
  //   const {result, num1, num2, operation, equals, color} = this.state
  //   let isNum = /\d/
  
  //   if (isNum.test(button) === false && num1 === ''){
  //     console.log('not a number')
      
  //   } else if (isNum.test(button) === true && num1 === ''){
  //       this.setState({num1:button})
  //       console.log(button)
      
  //   } else if (isNum.test(button) === true && num1 !== '' && operation === ''){
  //     let newValue = num1+button
  //     this.setState({num1:newValue})
  //     console.log(newValue)
      
  //   } else if (isNum.test(button) === false && num1 !== '' && num2 === ''){
      
  //     if (button === '+' || button === '-' || button === '*' || button === '/'){
  //       this.setState({operation:button})
  //       console.log(button)
  //     } 
      
  //   } else if (isNum.test(button) === true && num1 !== '' && operation !== '' && num2 === ''){
  //     this.setState({num2:button})
  //     console.log(button)
      
  //   } else if (isNum.test(button) === true && num1 !== '' && operation !== '' && num2 !== ''){
  //     let newValue = num2+button
  //     this.setState({num2:newValue})
  //     console.log(newValue)

  //   } else if (num2 !== '' && button === 'C'){
  //     this.setState({num2:''})
  //     console.log(button)
      
  //   } else if (num1 !== '' && num2 !== '' && operation === '+' && button === '='){
  //     let outcome = parseFloat(num1)+parseFloat(num2)
  //     this.setState({result:outcome, equals:'='})
  //     console.log(outcome)
  //   } else if (num1 !== '' && num2 !== '' && operation === '-' && button === '='){
  //     let outcome = parseFloat(num1)-parseFloat(num2)
  //     this.setState({result:outcome, equals:'='})
  //     console.log(outcome)
  //   } else if (num1 !== '' && num2 !== '' && operation === '*' && button === '='){
  //     let outcome = parseFloat(num1)*parseFloat(num2)
  //     this.setState({result:outcome, equals:'='})
  //     console.log(outcome)
  //   } else if (num1 !== '' && num2 !== '' && operation === '/' && button === '='){
  //     let outcome = parseFloat(num1)/parseFloat(num2)
  //     this.setState({result:outcome, equals:'='})
  //     console.log(outcome)
  // }
  // }
  
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
        <KeyPad onClear={this.onClear} setColor={this.setColor} handleNum={this.handleNum} color={this.state.color} handleOperation={this.handleOperation} handleResult={this.handleResult}/>
      </div>
    );
  }
}
