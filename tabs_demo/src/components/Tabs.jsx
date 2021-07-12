import React, {useState} from 'react'

const Tabs = props => {
    // 1. DECLARE YOUR STATES
    const [idx, setIdx] = useState(0)
    // 2. DESTRUCTURE YOUR PROPS
    const {tabs} = props

    // 3. DECLARE ALL YOUR HANDLER FUNCTIONS AND OTHER FUNCTIONS
    const handleClick = (idx) => {
        console.log(idx)
        setIdx(idx)
    }
    // 4. RETURN YOUR HTML
    return (
        <div>
            {
                tabs.map((tab, i) => {
                    return <button onClick={ () => handleClick(i)} key={i}>{tab.title}</button>
                })
            }
            <div>
                <h1>{tabs[idx].content}</h1>
            </div>
        </div>
    )
}
export default Tabs