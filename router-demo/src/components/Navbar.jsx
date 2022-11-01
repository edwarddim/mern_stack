import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <fieldset>
        <legend>Navbar.jsx</legend>
        <ul>
            <li>
                <Link to={"/"}>Auth</Link>
            </li>
            <li>
                <Link to={"/recipes"}>Dashboard</Link>

            </li>
            <li>
                <Link to={"/recipes/343"}>Details</Link>
            </li>
        </ul>
    </fieldset>
  )
}

export default Navbar