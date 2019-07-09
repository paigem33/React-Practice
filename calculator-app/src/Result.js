import React, { Component } from 'react';
import './App.css';

export default class Result extends Component {
  render() {
    const {result} = this.props
    return (
      <div className="result">
        <h1>{result}</h1>
     </div>
    );
  }
}
