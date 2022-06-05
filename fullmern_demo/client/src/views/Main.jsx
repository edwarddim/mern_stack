import React, {useState} from 'react'
import Dashboard from '../components/Dashboard'
import Form from '../components/Form'

const Main = () => {

    // CREATE STATE FOR CHECKING TO SEE IF FORM IS SUBMITTED
    const [submitted, setSubmitted] = useState(false)

    const changeSubmitted = () => {
        setSubmitted(!submitted)
    }

    return (
        <fieldset>
            <legend>Main.jsx</legend>
            <Form changeSubmitted={changeSubmitted} />
            <Dashboard submitted={submitted} />
        </fieldset>
    )
}

export default Main
