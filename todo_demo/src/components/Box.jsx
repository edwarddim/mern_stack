import React from "react"

const Box = props => {

    const {box}  = props
    console.log(box)

    const boxStyle = {
        'backgroundColor' : box.color,
        "width" : `${box.dimension}px`,
        "height" : `${box.dimension}px`,
        "display" : "inline-block",
        "margin" : "10px"
    }

    return (
        <div style={boxStyle}></div>
    )
}
export default Box