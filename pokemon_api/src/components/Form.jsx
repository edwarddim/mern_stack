import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"

const Form = () => {
    // STATE
    const [category, setCategory] = useState("pokemon")
    const [id, setId] = useState()

    const navigate = useNavigate()

    const submitHandler = (event) => {
        event.preventDefault();
        navigate(`/${category}/${id}`)
    }

    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={submitHandler}>
                <select onChange={(event) => setCategory(event.target.value)}>
                    <option value="pokemon">Pokemon</option>
                    <option value="item">Item</option>
                </select>
                <input onChange={(event) => setId(event.target.value)} type="number" name="" id="" />
                <button>Search</button>
            </form>
        </fieldset>
    )
}

export default Form