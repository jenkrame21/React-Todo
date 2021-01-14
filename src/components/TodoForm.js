import React from 'react';

class TodoForm extends React.Component {

    //Constructor with State
    // constructor() {
    //     super();
    //     this.state = {
    //         newTodoText: ""
    //     }
    // }

    // Setting state of newTodoText
    state = {
        newTodoText: ""
    }

    // Input onChange of handleChanges
    // - controls the user's ability to type in input box
    handleChanges = e => {
        this.setState({
            newTodoText: e.target.value
        })
    }

    // Ability to add through submit button
    handleSubmit = e => {
        e.preventDefault();
        // do something (this.props.addTodo)
        if(this.state.newTodoText.trim() !== "") {
            this.props.addTodo(this.state.newTodoText);
            this.setState({
                newTodoText: ""
            })
        }
    }

    handleCompleted = e => {
        e.preventDefault();
        this.props.clearCompletedTodo()
    }


    render() {
        return (
                <form onSubmit={this.handleSubmit}>
                    <input
                        id="newTodo"
                        name="newtodo"
                        type="text"
                        placeholder="Add New Todo..."
                        value={this.state.newTodoText}
                        onChange={this.handleChanges}
                    />
                    <button>Add Todo</button>
                    <button onClick={this.handleCompleted}>Clear Completed</button>
                </form>

        )
    }
}

export default TodoForm;