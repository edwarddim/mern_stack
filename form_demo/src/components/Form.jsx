import {useState} from 'react'

const Form = () => {

    // STATE
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [jobReady, setJobReady] = useState(true)
    const [favLanguage, setFavLanguage] = useState("js")

    // VALIDATIONS
    const [nameValid, setNameValid] = useState(true)

    const createUser = (event) => {
        event.preventDefault();

    }

    const nameHandler = (name) => {
        if(name.length < 4){
            setNameValid(false)
        }
        else{
            setNameValid(true)
        }
    }


    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={createUser}>
                <p>
                    Name:
                    <input onChange={(event) => nameHandler(event.target.value)} type="text" name="name" id="" />
                    {
                        (nameValid) ? null : <h1>Your name must be longer than 4 chars</h1>
                    }
                </p>
                <p>
                    Email:
                    <input onChange={(event) => setEmail(event.target.value)} type="email" name="email" id="" />
                </p>
                <p>
                    Job Ready
                    <input onChange={(event) => setJobReady(event.target.checked)} type="checkbox" name="jobReady" checked={jobReady} />
                </p>
                <p>
                    Favorite language?
                    <select name="favLanguage" onChange={(event) => setFavLanguage(event.target.value)}>
                        <option value="js">JS</option>
                        <option value="py">Python</option>
                        <option value="java">Java</option>
                    </select>
                </p>
                <button>Submit</button>
            </form>
            <h1>Name: {name}</h1>
            <h1>Email: {email}</h1>
        </fieldset>
    )
}

export default Form