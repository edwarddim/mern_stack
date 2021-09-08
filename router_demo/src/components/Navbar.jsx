import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <fieldset>
            <legend>Navbar.jsx</legend>
            <Link to="/">Home</Link> |
            <Link to="/dashboard">Dashboard</Link> |
            {/* <Link to="/users">Detail</Link> | */}
        </fieldset>
    )
}

export default Navbar
