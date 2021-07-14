import { Link } from "@reach/router"
import React from "react"

const Navbar =props => {
    return(
        <fieldset>
            <legend>Navbar.jsx</legend>
            <h1>Navbar</h1>
            <div>
                <a href="/">Home</a>
                <a href="/about">About</a>
            </div>
            <div>
                <Link to="/">Link to Home</Link>
                <Link to="/about">Link to About</Link>
            </div>
        </fieldset>
    )
}
export default Navbar;