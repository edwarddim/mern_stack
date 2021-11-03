import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

const Form = () => {

    const [category, setCategory] = useState("pokemon")
    const [id, setId] = useState(1)

    const history = useHistory()

    const submitHandler = e => {
        e.preventDefault()
        console.log("FORM SUBMIITED")

        // REDIRECT THE USER TO THE CORRECT VIEW PAGE
        history.push(`/${category}/${id}`)
    }

    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={submitHandler}>
                <p>
                    Search for:
                    <select name="category" onChange={e => setCategory(e.target.value)}>
                        <option value="pokemon">Pokemon</option>
                        <option value="type">Type</option>
                    </select>
                    <input type="number" name="id" min={0} value={id} onChange={e => setId(e.target.value)} />
                </p>
                <button>Search</button>
            </form>
        </fieldset>
    )
}

export default Form