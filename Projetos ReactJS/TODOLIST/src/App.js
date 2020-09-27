import React, { Component } from 'react';
import ToDoList from './components/ToDoList';

class App extends Component {
  render() {
    return (
      <div className="">
        <h1>Lista de tarefas</h1>
        <ToDoList />
      </div>
    )
  }
}
export default App;
