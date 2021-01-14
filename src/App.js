import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  // constructor() {
  //   super();
  //   this.state = {
  //     task: "",
  //     id: Date.now(),
  //     completed: false
  //   }
  // }

  state = {
    todos: [
      {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
      }
    ],
    id: Date.now(),
    completed: false
  }

  // Event Handlers
  // Toggle Change
  toggleTodo = (clickedTodoID) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === clickedTodoID) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    })
  }

  // Add Todo to pass down all the way to Todo component
  addTodo = (taskName) => {
    const newTodo = {
      task: taskName,
      id: new Date(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  // Clear Todo to pass down
  clearCompletedTodo = () => {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return !todo.completed
      })
    })
  }


  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <TodoForm addTodo={this.addTodo} clearCompletedTodo={this.clearCompletedTodo}/>
        <div>
          <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
