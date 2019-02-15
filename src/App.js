import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return <Todo/>;
  }
}

class Todo extends Component {
  constructor(props){
    super(props);
    this.state = { todoList:[], tempTodo: ''}
  }
   onChangeHandle = (e) => {
    this.setState({
      tempTodo : e.target.value
    });
  }

  addTodo = () => {
    // var {tempTodo, todoList} = this.state; // deconstructing the array
    // todoList.push(tempTodo); // dont directly update -> we will loose the source of the truth.
    let tempTodo = this.state.tempTodo;
    let newArray = [...this.state.todoList];
    newArray.push(tempTodo);
    tempTodo = '';
    this.setState({
      tempTodo,
      todoList : newArray
    });
  };

  deleteTodo = (e) => {
    console.log(e.target.value);
    let itemToBeDeleted = e.target.value;
    let newArray = [...this.state.todoList];
    newArray.splice(newArray.indexOf(itemToBeDeleted),1);
    this.setState({
      todoList : newArray
    });
  };

  render() {
    return (
      <div>
        <h1 align ='center'>TODO LIST</h1>
        <p align='center'>feel free to add your todo list here.</p>
        <div align='center'>
        <p> Enter your Todo item : </p>
        <input onChange =  {this.onChangeHandle} type='text' value = {this.state.tempTodo}/> 
        <input type = 'submit'  value = 'add todo' onClick = {this.addTodo} />
        </div>
        <TodoList items = {this.state.todoList} deleteTodo = {this.deleteTodo}/>
      </div>
    ); 
  }
}

const TodoList = (props) => {
  return (
    <ul>
    {
      props.items.map(item => 
      <React.Fragment>
      <li >{item} 
          <input type ='submit' value = 'X' onClick = {props.deleteTodo} /> 
      </li>
      </React.Fragment>
    )}
    </ul>
  );
};


export default App;
