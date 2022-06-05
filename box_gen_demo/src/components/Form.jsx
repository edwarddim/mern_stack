import React, {useState} from 'react'

const Form = (props) => {
    // DESCTRUCTURE FROM PROPS
    const {addColor} = props

    // CREATE YOUR STATES
    const [inputState, setInputState] = useState("")
    const [dimensionState, setDimensionState] = useState(50)

    // DEFINE YOUR FUNCTIONS
    const submitHandler = e => {
        e.preventDefault()
        addColor({
            inputState,
            dimensionState
        })
        setInputState("")
        setDimensionState(50)
    }

    // RETURN THE HTML CONTENT
    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={submitHandler}>
                <p>
                    Color:
                    <input type="text" name="color" onChange={e => setInputState(e.target.value)} value={inputState} />
                </p>
                <p>
                    Dimension:
                    <input type="number" name="dimension" onChange={e => setDimensionState(e.target.value) } value={dimensionState} />
                </p>
                <button>Add</button>
            </form>
        </fieldset>
    )
}

export default Form
