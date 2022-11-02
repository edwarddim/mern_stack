import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"

const Search = () => {
    // STATE
    const [id, setId] = useState(null)
    const [category, setCategory] =  useState("pokemon")

    // useNavigate
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/${category}/${id}`)
    }

    return (
        <fieldset>
            <legend>Search.jsx</legend>
            <form onSubmit={submitHandler}>
                <p>
                    <select onChange={(e) => setCategory(e.target.value)}>
                        <option value="pokemon">Pokemon</option>
                        <option value="ability">Ability</option>
                    </select>
                    <input type="number" onChange={(e) => setId(e.target.value) } />
                    <button>Search</button>
                </p>
            </form>
        </fieldset>
    )
}

export default Search