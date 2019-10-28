// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {
    render() {
        return (
            <ul className="todo-list">
                {
                    this.props.toDoList.map( (toDoItem) => {
                        return(<Todo toggleItem={this.props.toggleItem} toDoItem={toDoItem}/>)
                    })
                }
            </ul>
        )
    }
}