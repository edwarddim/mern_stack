import React, { useState } from 'react'

const Form = () => {

    // STATE
    const [name, setName] = useState("")
    const [email,setEmail] = useState("")
    const [favLanguage, setFavLanguage] = useState("")
    const [jobReady, setJobReady] = useState(false)

    const [nameError, setNameError] = useState("")
    const [languageError, setLanguageError] = useState("")

    
    const nameHandler = (event) => {
        setName(event.target.value)
        if(event.target.value.length < 2){
            setNameError("You name must be longer than 2 chars")
        }
        else{
            setNameError("")
        }
    }

    const emailHandler = (event) => {
        setEmail(event.target.value)
    }

    const dropdown = (event) => {
        setFavLanguage(event.target.value)
    }

    const checkbox = (event) => {
        setJobReady(event.target.checked)
    }

    const createUser = (event) => {
        event.preventDefault();
        const user = {
            name,
            email,
            favLanguage,
            jobReady
        }
        console.log('USER BEING CREATED: ', user)
        setName("")
        setEmail("")
        setFavLanguage("")
        setJobReady(false)
    }

    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={createUser}>
                <p>
                    Name:
                    <input type="text" value={name} onChange={nameHandler} />
                    {(nameError) ? <p>{nameError}</p> : null }
                </p>
                <p>
                    Email:
                    <input type="email" value={email} onChange={emailHandler} />
                </p>
                <p>
                    Favorite Language
                    <select value={favLanguage} onChange={dropdown}>
                        <option>Choose One</option>
                        <option value="js">JavaScript</option>
                        <option value="py">Python</option>
                        <option value="java">Java</option>
                    </select>
                </p>
                <p>
                    Job ready
                    <input type="checkbox" checked={jobReady} onChange={checkbox} />
                </p>
                <button>Submit</button>
            </form>
            <div>
                <h1>{name}</h1>
                <h1>{email}</h1>
            </div>
        </fieldset>
    )
}

export default Form