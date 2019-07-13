import React, { Component } from 'react';
import './App.css';

export default class Square extends Component {
  render() {
    return (
      <div className="square" id={this.props.id} onClick={e => this.props.handleClick(e.target.id)}>
        {this.props.value}
      </div>
    );
  }
}
