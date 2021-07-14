import React, { useEffect } from "react"

const About =props => {

    useEffect(() => {
        console.log("ABOUT RENDERED")

        return function close() {
            console.log("ABOUT COMPONENT DISMOUNTED");
        }
    }, [])

    return(
        <fieldset>
            <legend>About.jsx</legend>
            <h1>About</h1>
        </fieldset>
    )
}
export default About;