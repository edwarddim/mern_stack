import React from 'react'
import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <fieldset>
            <legend>Navbar.jsx</legend>
            <Link to="/">Auth</Link>|
            <Link to="/dashboard">Dashboard</Link>|
            <Link to="/recipes/new">Create Recipe</Link>
            <Link to="/misc">Misc</Link>
        </fieldset>
    )
}

export default Navbar
