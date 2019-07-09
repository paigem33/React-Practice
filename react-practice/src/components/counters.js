import React, { Component } from 'react';
import Counter from './counter'

export default class Counters extends Component {
  state = {
    counters: {
      item: "",
      value: 0
    }
  }
  handleAdd = (e) => {
    
    const counters = [...this.state.counters]
  
    // value = value++
    console.log(e)
    console.log(counters[e])
    this.setState({counters})
    
    // const counters = [...this.state.counters]
    // const index = counters.indexOf(e)
    // counters[index] = {...e }
    // console.log(counters[index].value++)
    // this.setState({ counters })
  }
  
  handleDelete = (e) => {
    let id = e
    const counters = this.state.counters
    console.log(id)
    let newCounters = counters.splice(id,id)
    this.setState({counters: newCounters})
  }
  
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0
      return c
    })
    this.setState({counters})
  }
  
  handleAddNew = () => {
    const counters = this.state.counters
    const item = this.state.counters
    const value = this.state.counters
    counters.item = "banana"
    counters.value = 1
    this.setState({counters, item, value})
  }
  render(){
    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={this.handleReset}>RESET</button>
        <button onClick={() => this.handleAddNew()} className="btn btn-primary btn-sm m-2">Add</button>
        {this.state.counters.map((value, index) => 
          <Counter 
          onAdd={this.handleAdd} 
          onDelete={this.handleDelete} 
          value={value} 
          id={index}>
        </Counter>)}
        
      </div>
      )
  }
  }


// { this.state.counters.map(counter =>
//           <Counter 
//           onAdd={this.handleAdd} 
//           key={counter.id} 
//           onDelete={this.handleDelete} 
//           value={counter.value} 
//           id={counter.id}
//           counter={counter}>
//         </Counter>)}