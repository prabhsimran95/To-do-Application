import React, { Component } from 'react';
import './counter.css'



class Counter extends Component{

    constructor(){
        super(); // Error 1 people forget if they 
        this.state={
            counter: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset= this.reset.bind(this);
    }
    render () {
        return (
            <div className="counter">
            <CounterButton by ={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <CounterButton by ={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <CounterButton by ={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <span className="count">{this.state.counter}</span>
            <button onClick={this.reset}>Reset</button>
            </div>
          )
    }
    reset(){
        this.setState({
            counter: 0
        })
    }
    increment(by) { 
        console.log(`IN parent from - ${by}`)
       this.setState({
           counter: this.state.counter + by
       })  
    }

    decrement(by) { 
        console.log(`IN parent from - ${by}`)
       this.setState({
           counter: this.state.counter - by
       })  
    }
}

class CounterButton extends Component {

    // Define the initial state in the constructor
    // state => counter 0

    constructor(){
        super(); // Error 1 people forget if they 
    //   this.increment = this.increment.bind(this);
    //   this.decrement = this.decrement.bind(this);
      // with arrow functions you dont need to do the binding that we did above.
    }
    render () {
        return (
            <div className="counter">
            <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
            <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
            </div>
          );
    }

    // increment() {
    //     this.props.incrementMethod(this.props.by);
    // }
    // decrement() {
    //     this.props.decrementMethod(this.props.by);
    // }
    
}


export default Counter