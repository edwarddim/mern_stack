import React, {useEffect} from "react"

const Detail = props => {

    const {param, name} = props

    useEffect(() => {
        console.log("DETAIL RENDERED")

        return function close() {
            console.log("DETAIL COMPONENT DISMOUNTED");
        }
    }, [])

    return(
        <fieldset>
            <legend>Detail.jsx</legend>
            <h1>Detail for {param} {name}</h1>
        </fieldset>
    )
}
export default Detail;