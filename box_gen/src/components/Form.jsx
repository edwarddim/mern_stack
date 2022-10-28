import React, {useState} from 'react'

const Form = ({addNewColor}) => {
    
    // STATE
    const [color, setColor] = useState("")

    // HANDLER FUNCTIONS
    const colorHandler = (e) => {
        setColor(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("ADDING COLOR: ", color)
        addNewColor(color)
        setColor("")
    }

    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={submitHandler}>
                <p>
                    Color:
                    <input type="text" value={color} onChange={colorHandler} />
                </p>
                <button>Add</button>
            </form>
        </fieldset>
    )
}

export default Form