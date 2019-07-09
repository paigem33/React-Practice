import React, { Component } from 'react';

export default class Counter extends Component {
  
  
  //one way to set styles
  // styles = {
  //   fontSize: 50,
  //   fontWeight: 'bold'
  // }
  
//   getBadgeClasses(){
//   let classes = "badge m-2 badge-";
//   classes += (this.props.counter.value === 0 ? "warning" : "primary")
//   return classes
// }
// formatCount(){
//   const { value } = this.props.counter
//   return value === 0 ? "Zero" : value;
// }
  // <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
  
    render() {
  
      
    
    return (
      <div id={this.props.id}>
       <span className="badge m-2 badge-primary">{this.props.value}</span>
        <button 
          onClick={() => this.props.onAdd(this.props.id) } 
          className="btn btn-secondary btn-sm">Plus one</button>
        <button onClick={() => this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">Delete</button>
        </div>
    )
  }

  


  

}
