import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDoItems: []
    }
  }

  //add todo item
  addItem = (item) => {
    if(item.task === ''){return}
    this.setState({
      toDoItems: [...this.state.toDoItems, item]
    })
  }
  //toggle todo item
  toggleItem = (itemId) => {
    this.setState({
      toDoItems: this.state.toDoItems.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    })
  }

  //remove todo item
  clear = () => {
    this.setState({
      toDoItems: this.state.toDoItems.filter(item => {
        if (item.completed) {
          return false;
        } else {
          return true;
        }
      })
    })
  }

  render() {
    return (
    <div className="container center">
      <h1 className="title">ToDo List:</h1>
      <TodoList toDoList={this.state.toDoItems} toggleItem={this.toggleItem}/>
      <div className="bottom">
        <TodoForm addItem={this.addItem}/>
        <button className="clear" onClick={this.clear}>Clear Finished</button>
      </div>
    </div>
    );
  }
}

export default App;