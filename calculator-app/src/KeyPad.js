import React, { Component } from 'react';
import './App.css';

export default class KeyPad extends Component {
  render() {
    return (
      <div className="keypad">
        <button className={this.props.color} name="CE" onClick={e => this.props.onClear(e.target.name)}>CE</button>
        <button className={this.props.color} name="C" onClick={e => this.props.onClear(e.target.name)}>C</button>

        <button className={this.props.color} name="1" onClick={e => this.props.handleNum(e.target.name)}>1</button>
        <button className={this.props.color} name="2" onClick={e => this.props.handleNum(e.target.name)}>2</button>
        <button className={this.props.color} name="3" onClick={e => this.props.handleNum(e.target.name)}>3</button>
        <button className={this.props.color} name="+" onClick={e => this.props.handleOperation(e.target.name)}>+</button>

        <button className={this.props.color} name="4" onClick={e => this.props.handleNum(e.target.name)}>4</button>
        <button className={this.props.color} name="5" onClick={e => this.props.handleNum(e.target.name)}>5</button>
        <button className={this.props.color} name="6" onClick={e => this.props.handleNum(e.target.name)}>6</button>
        <button className={this.props.color} name="-" onClick={e => this.props.handleOperation(e.target.name)}>-</button>

        <button className={this.props.color} name="7" onClick={e => this.props.handleNum(e.target.name)}>7</button>
        <button className={this.props.color} name="8" onClick={e => this.props.handleNum(e.target.name)}>8</button>
        <button className={this.props.color} name="9" onClick={e => this.props.handleNum(e.target.name)}>9</button>
        <button className={this.props.color} name="*" onClick={e => this.props.handleOperation(e.target.name)}>x</button>
        
        <button className={this.props.color} name="0" onClick={e => this.props.handleNum(e.target.name)}>0</button>
        <button className={this.props.color} name="/" onClick={e => this.props.handleOperation(e.target.name)}>÷</button>
        
        
        <button className={this.props.color} name ="Blue" onClick={e => this.props.setColor(e.target.name)}>Blue</button>
        <button className={this.props.color} name="=" onClick={e => this.props.handleResult(e.target.name)}>=</button>
        <button className={this.props.color} name="Red" onClick={e => this.props.setColor(e.target.name)}>Red</button>
        
        <button className={this.props.color} name="reset" onClick={e => this.props.setColor(e.target.name)}>Reset color</button>
      </div>
    );
  }
}
