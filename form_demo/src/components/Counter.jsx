import React, {useState} from 'react'

const Counter = () => {

    // create a state in functional components
    // useState Hook
    const [state, setState] = useState(0)

    const clickHandler = () =>{
        console.log("clicked me")
        setState(state+1) // async function
        console.log("State: ", state)
    }

    return (
        <fieldset>
            <legend>Counter.jsx</legend>
            <button onClick={clickHandler}>Click me! {state} </button>
        </fieldset>
    )
}

export default Counter
