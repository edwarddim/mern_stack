import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const PokeForm = () => {
    // STATE FOR KEEPING TRACK OF POKEMON NAME
    const [pokeName, setPokeName] = useState("")

    // CALL THE useNavigate FUNCTION
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/pokemon/" + pokeName)
    }

    return (
        <fieldset>
            <legend>PokeForm.jsx</legend>
            <form onSubmit={handleSubmit}>
                Name:
                <input onChange={(e) => setPokeName(e.target.value)} type="text" name="pokeName" id="" />
                <button>Submit</button>
            </form>
            {/* <Outlet /> */}
        </fieldset>
    )
}

export default PokeForm