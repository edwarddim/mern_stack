import React from 'react'

const Box = (props) => {

    const {color} = props

    const style = {
        backgroundImage : `linear-gradient(to right, ${color}, #019CAD)`,
        // backgroundColor : color,
        width: "50px",
        height : "50px"
    }

    return (
        <fieldset>
            <legend>Box.jsx</legend>
            <div style={style}></div>
        </fieldset>
    )
}

export default Box
