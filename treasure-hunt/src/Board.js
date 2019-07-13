import React, { Component } from 'react';
import Square from './Square'
import './App.css';

export default class Board extends Component {
  constructor(props){
    super(props)
    this.state = {
      squares: Array(9).fill("?"),
      treasure: 0,
      bomb: 0
    }
  }
  
  startGame = () => {
    const { squares, bomb, treasure } = this.state
    this.setState({treasure:Math.floor(Math.random()*9)})
    // squares[randomTreasure] = "treasure"
    this.setState({bomb:Math.floor(Math.random()*9)})
    if (bomb === treasure){
      console.log('same, redo!')
      this.setState({bomb:Math.floor(Math.random()*9)})
    }
  }
  
  handleClick = (id) => {
    
  }
  
  componentWillMount(){
    this.startGame()
  }
  render() {
    const { squares } = this.state
    return (
      <div className="board">
        {squares.map((value, index) => {
          return (<Square id={index} value={value}/>);
        })}
      </div>
    );
  }
}
