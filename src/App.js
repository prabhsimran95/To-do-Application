import React, { Component } from 'react';
import './App.css';
import Counter from './components/counter/Counter'
import TodoApp from './components/todo/TodoApp'

class App extends Component{
  render() {
    return (
      //JSX Syntax
      <div className="App">
        {/*<Counter />*/}
        <TodoApp />
      </div>
    );
  }
  
}
export default App;
