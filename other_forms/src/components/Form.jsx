import React, { useState } from 'react'

const Form = (props) => {
    // DESTRUCTURE addUser FROM PROPS
    const {addUser} = props

    // STATE FOR FULL NAME
    const [fullName, setFullName] = useState("")
    // STATE FOR JOB READY BOOLEAN
    const [jobReady, setJobReady] = useState(false)
    // STATE FOR PREFERRED LANGUAGE
    const [preferredLanguage, setPreferredLanguage] = useState("js")

    const submitHandler = (e) => {
        e.preventDefault();
        // CREATE A USER OBJECT
        let obj = {
            fullName,
            jobReady,
            preferredLanguage
        }
        addUser(obj)
    }

    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={submitHandler}>
                <p>
                    Name:
                    <input onChange={(e) => setFullName(e.target.value)} type="text" name="fullName" id="" />
                </p>
                <p>
                    Looking for jobs?
                    <input onChange={(e) => setJobReady(e.target.checked)} type="checkbox" name="jobReady" id="" />
                </p>
                <p>
                    Preferred Language?
                    <select name="preferedLanguage" onChange={(e) => setPreferredLanguage(e.target.value)}>
                        <option value="js">JavaScript</option>
                        <option value="py">Python</option>
                        <option value="java">Java</option>
                    </select>
                </p>
                <button>Submit</button>
            </form>
        </fieldset>
    )
}

export default Form