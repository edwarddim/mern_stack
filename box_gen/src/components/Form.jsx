import React, {useState} from 'react'

const Form = (props) => {

    const [colorState, setColorState] = useState("")
    const [dimension, setDimension] = useState("")
    const {addToArray} = props


    const submitHandler = (e) =>{
        e.preventDefault()
        addToArray({
            "color" : colorState,
            "dimension" : dimension
        })
    }

    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={submitHandler}>
                <p>
                    Color:
                    <input type="text" name="color" onChange={(e) => setColorState(e.target.value)} value={colorState} id="" />
                </p>
                <p>
                    Dimension:
                    <input type="number" name="dimension" onChange={(e) => setDimension(e.target.value)} value={dimension} id="" />
                </p>
                <button type="submit">Add</button>
            </form>
        </fieldset>
    )
}

export default Form
