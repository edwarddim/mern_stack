import React from 'react'
import Box from './Box'

const Display = (props) => {
    // DESTRUCTURE FROM PROPS
    const {allColors} = props

    return (
        <fieldset>
            <legend>Display.jsx</legend>
            {
                allColors.map((box, index) => <div style={{backgroundColor:box.inputState, width: box.dimensionState + "px", height:box.dimensionState + "px"}} key={index}></div>)
            }

            {/* {
                allColors.map((color, index) => <Box key={index} color={color} />)
            } */}
        </fieldset>
    )
}
export default Display