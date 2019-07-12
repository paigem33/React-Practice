import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      cats: []
    }
    this.getCats()
    console.log('constructor')
  }

  getCats = () => {
    console.log("func")
    fetch("http://34.238.253.249:8080/cats")
    .then((resp)=>{
      console.log(".then")
      return resp.json()
    })
    .then((cat)=>{
      this.setState({ cats: cat })
    })
  }

  render(){
    const { cats } = this.state
    return (
      <div className="App">
        <h1>Cats rule</h1>
        <ul>
        {cats.map((cat, index)=>{
          return(<li key={index}>{cat.name}</li>)
        })}
        </ul>
      </div>
    );
  }
}

export default App;