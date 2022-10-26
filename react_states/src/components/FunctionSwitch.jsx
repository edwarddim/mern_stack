import React, {useState} from 'react'

const FunctionSwitch = ({user}) => {
    const {firstName, lastName, age:propsAge} = user

    // useState HOOK
    const [age, setAge] = useState(propsAge)
    const [position, setPosition] = useState("On")

    const clickHandler = () => {
        setAge(age + 1);
    }
    const toggleHandler = () => {
        (position === "On") ? setPosition("Off") : setPosition("On");
    }


    return (
        <fieldset>
            <legend>FunctionSwitch.jsx</legend>
            <h1>{firstName} {lastName}</h1>
            <h2>Age: {age}</h2>
            <h2>Postion: {position}</h2>
            <button onClick={clickHandler}>Birthday!</button>
            <button onClick={toggleHandler}>Toggle</button>
        </fieldset>
    )
}

export default FunctionSwitch