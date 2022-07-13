import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <fieldset>
            <legend>Navbar.jsx</legend>
            <Link to="/">Auth</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/recipes/new">New</Link>
        </fieldset>
    )
}

export default Navbar