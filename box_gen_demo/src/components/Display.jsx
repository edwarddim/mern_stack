import React from 'react'

const Display = (props) => {

    const {allColors} = props

  return (
    <fieldset>
        <legend>Display.jsx</legend>
        {
            allColors.map((color, index) => {
                return(
                    <div key={index}>
                        {color}
                    </div>
                )
            })
        }
    </fieldset>
  )
}

export default Display