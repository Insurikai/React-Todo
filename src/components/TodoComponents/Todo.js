import React from 'react';

export default class Todo extends React.Component {

    render(){
        return(
            <>
                <button className={`todo-item ${this.props.toDoItem.completed ? 'completed' : ''}`} onClick={() => {this.props.toggleItem(this.props.toDoItem.id)}}>{this.props.toDoItem.task}</button>
            </>
        )
    }
}