import { useState } from 'react'

const TodoForm = () => {
    // STATE
    const [text, setText] = useState()

    return (
        <fieldset>
            <legend>TodoForm.jsx</legend>
            <form action="">
                <p>
                    Todo:
                    <input type="text" name="todo" id="" />
                </p>
                <button>Add</button>
            </form>
        </fieldset>
    )
}

export default TodoForm