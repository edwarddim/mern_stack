import React from 'react'

const Box = ({color, deleteColor, idx}) => {

    const boxStyle = {
        backgroundColor: color,
        height: "100px",
        width: "100px"
    }

  return (
    <div style={boxStyle}>
        <button onClick={() => deleteColor(idx)}>Delete</button>
    </div>
  )
}

export default Box