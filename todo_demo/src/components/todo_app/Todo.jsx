import React, { useState } from "react"

const Todo = props => {

    const {index, todo, handleDelete, handleChange} = props
    // console.log(todo)

    const style={
        "textDecoration" : "line-through"
    }

    return(
        <fieldset>
            <legend>Todo.jsx</legend>
            {
                (todo.isComplete)? <h3 style={style}>{todo.title} @ Index:{index}</h3> : <h3>{todo.title} @ Index:{index}</h3>
            }
            <input type="checkbox" checked={todo.isComplete} onChange={ () => handleChange(index)} />
            <button onClick={ ()=> handleDelete(index)}>Delete</button>
        </fieldset>
    )
}
export default Todo