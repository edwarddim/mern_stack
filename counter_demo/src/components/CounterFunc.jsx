import React, {useState} from 'react'

const CounterFunc = props => {
    const [state, setState] = useState({
        count : 0
    })

    const handleClick = () => {
        setState({
            count : state.count + 1
        })
    }

    return(
        <div>
            <h1>Click this if you like pineapples</h1>
            <p>{state.count} people like pinapples</p>
            <button onClick={handleClick}>Click Me!</button>
        </div>
    )
}
export default CounterFunc