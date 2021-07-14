import React from "react"
import { navigate } from "@reach/router"

const Checkout = props => {

    const checkout = () => {
        console.log("SENDING POST INFO FOR BUYING")
        var success = false
        if(success){
            navigate("/")
        }
        else{
            navigate("/error")
        }
    }

    return(
        <fieldset>
            <legend>Checkout.jsx</legend>
            <button onClick={checkout}>Buy</button>
        </fieldset>
    )
}
export default Checkout;