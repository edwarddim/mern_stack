// IMPORT ALL NECESSARY DEPENDENICES
import React, {useState} from "react"

// DEFINE YOUR COMPONENET
const Counter = (props) => {


    const [count, setCount] = useState(props.startNum)


    const handleClick = () => {
        // console.log("I'm clicked")
        setCount(count + 1)
        console.log(count)
    }

    return(
        <fieldset>
            <legend>Form.jsx</legend>
            <button onClick={handleClick}>Cliked {count} times</button>
        </fieldset>
    )
}


// EXPORT YOUR COMPONENT
export default Counter