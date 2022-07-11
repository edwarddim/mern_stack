import {useState} from 'react'

const Form = (props) => {
    // STATE
    const [name, setName] = useState()
    const [age, setAge] = useState()

    // DESTRUCTURE
    const {addUser} = props

    const submitHandler = (event) => {
        event.preventDefault();
        addUser({name, age})
    }

    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={submitHandler}>
                <p>
                    Name:
                    <input onChange={(event) => setName(event.target.value)} type="text" name="name" id="" />
                </p>
                <p>
                    Age:
                    <input onChange={(event) => setAge(event.target.value)} type="number" name="age" id="" />
                </p>
                <button>Add</button>
            </form>
        </fieldset>
    )
}

export default Form