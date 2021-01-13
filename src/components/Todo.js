import React from 'react';
import './Todo.css';

function Todo(props) {
    return (
        <div
            className="todos"
            style={{ textDecoration: props.todo.completed ? 'line-through' : "" }}
            onClick={() => props.toggleTodo(props.todo.id)}>
                <p>{props.todo.task}</p>
        </div>
    )
}

export default Todo;