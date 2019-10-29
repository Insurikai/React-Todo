import React from 'react';

export default class TodoForm extends React.Component {
    constructor(){
        super();
        this.state={
            item:{
                task: '',
                id: 12,
                completed: false
            }
        }
    }
    changeHandler = (e) => {
        this.setState({
            item: {
                ...this.state.item,
                id: Date.now(),
                task: e.target.value
            }
        });
    }

    render() {
        return (
            <>
                <form className="todo-form" onSubmit={(e)=>{e.preventDefault(); this.props.addItem(this.state.item)}}>
                    <input type="text" name="task-name" id="task-name" value={this.state.item.task} onChange={this.changeHandler}/>
                    <input type="submit" value="Add Item" class="add"/>
                </form>
            </>
        )
    }
}