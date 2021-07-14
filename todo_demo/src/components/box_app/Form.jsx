import React, {useState} from 'react'

const Form = props => {

    const [color, setColor] = useState("")
    const [dimension, setDimension] = useState(100)

    const {boxlist,setBoxlist} = props


    const submitHandler = event => {
        event.preventDefault()
        setBoxlist([...boxlist, {
            color,
            dimension
        }])
        setColor("")
    }

    return(
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={submitHandler}>
                <p>
                    Color:
                    <input type="text" name="color" value={color} onChange={ event => setColor(event.target.value)} />
                </p>
                <p>
                    Dimension:
                    <input type="number" name="dimension" onChange={event => setDimension(event.target.value)} />
                </p>
                <button type="submit">Create</button>
            </form>
            <p>{color}</p>
        </fieldset>
    )
}
export default Form