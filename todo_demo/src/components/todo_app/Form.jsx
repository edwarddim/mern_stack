import React, { useState } from "react"

const Form = props => {

    const [inputState, setInputState] = useState("")

    const {list, setList} = props


    const handleSubmit = event => {
        event.preventDefault()
        setList([
            ...list,
            {
                "title" : inputState,
                "isComplete" : false
            }
        ])
        setInputState("")
    }

    return(
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={handleSubmit}>
                <p>
                    Todo:
                    <input type="text" value={inputState} onChange={e => setInputState(e.target.value)} />
                </p>
                <button>Create</button>
            </form>
        </fieldset>
    )
}
export default Form