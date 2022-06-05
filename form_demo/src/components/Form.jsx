import React, {useState} from 'react'

const Form = (props) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [pets, setPets] = useState("yes")
    const [human, setHuman] = useState(false)

    const submitHandler = (e) => {
        // PREVENT THE DEFAULT ACTION
        e.preventDefault()
        console.log("SENDING INFO TO DATABASE")
        console.log(email)
        console.log(password)
        console.log(pets)

        // RESET MY FORMS
        setEmail("")
        setPassword("")
        setPets("yes")
    }

    return (
        <fieldset>
            <legend>Form.jsx</legend>

            <form onSubmit={submitHandler}>
                <p>
                    Email:
                    <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                </p>
                <p>
                    Password:
                    <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                </p>
                <p>
                    Do you like pets:
                    <select name="" onChange={(e) => setPets(e.target.value)} value={pets} >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </p>
                <p>
                    Are you a human?
                    <input type="checkbox" onChange={(e) => setHuman(e.target.checked)} id="" />
                </p>
                <button>Submit</button>
            </form>
            <h1>{email}</h1>

        </fieldset>
    )
}

export default Form