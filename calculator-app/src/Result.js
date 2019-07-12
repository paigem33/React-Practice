import React, { Component } from 'react';
import './App.css';

export default class Result extends Component {
  render() {
    const {result, num1, num2, operation, equals} = this.props
    return (
      <div className="result">
        <h1 className="progress">{num1}{operation}{num2}{equals}</h1>
        <h1>{result}</h1>
     </div>
    );
  }
}
