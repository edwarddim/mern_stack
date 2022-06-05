import React from 'react'

const Box = (props) => {

    const {box} = props

    const style = {
        'backgroundColor' : box.color,
        'width' : box.dimension + "px",
        'height' : box.dimension + "px"
    }

    return (
        <div style={style}></div>
    )
}

export default Box
