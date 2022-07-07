import React, { useState } from 'react'

const Counter = () => {
    // STATE
    //                     [STATE OBJECT, SET STATE FUNCITON]
    const [number, setNumber] = useState(0)


    const clickHandler = () => {
        setNumber(number+1)
        console.log(number)
    }

    return (
        <fieldset>
            <legend>Counter.jsx</legend>
            <h1>Number : {number}</h1>
            <button onClick={clickHandler}>Click</button>
        </fieldset>
    )
}

export default Counter