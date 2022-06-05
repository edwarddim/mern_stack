import React from 'react'
import { useHistory } from 'react-router-dom'

const Auth = () => {

    // INITIALIZE USE HISTORY
    const history = useHistory()

    const loginHandler = (e) => {
        e.preventDefault()
        // LOGIN IS SUCCESSFUL
        history.push("/dashboard")

        // LOGIN IS UNSUCCESSFUL
        // DISPLAY VALIDATION MESSAGES
    }

    return (
        <fieldset>
            <legend>Auth.jsx</legend>
            <form onSubmit={loginHandler}>
                <input type="text" name="email" id="" />
                <input type="text" name="password" id="" />
                <button>Login</button>
            </form>
        </fieldset>
    )
}

export default Auth
