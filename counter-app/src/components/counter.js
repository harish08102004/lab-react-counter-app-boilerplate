import React, { Component } from 'react';
import '../App.css'

class Counter extends Component{
  constructor(){
    super();
    this.state={
      count:0
    }
  }
  Plus=()=>{
    this.setState({
      count: this.state.count+1
    })
  }
  Minus=()=>{
    this.setState({
      count: this.state.count-1
    })
  }
  Reset=()=>{
    this.setState({
      count: 0
    })
  }
  render(){
    return (
      <div className="App">
        <h2>Counter</h2>
        <h1>{this.state.count}</h1>
        <div>
          <button id='plus' onClick={this.Plus}>+</button>
          <button id='minus' onClick={this.Minus}>-</button>
          <button id='reset' onClick={this.Reset}>Reset</button>
        </div>
      </div>
    );
  }
}
export default Counter;