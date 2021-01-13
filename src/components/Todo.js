import React from 'react'

function Todo(props) {
    return (
        <div 
            style={{ textDecoration: props.todo.completed ? 'line-through' : "" }}
            onClick={() => props.toggleTodo(props.todo.id)}>
                {props.todo.task}
        </div>
    )
}

export default Todo;