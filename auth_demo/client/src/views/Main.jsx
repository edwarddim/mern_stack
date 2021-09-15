import React,{useState} from "react"
import axios from 'axios'

const Main = () => {

    const [errorState, setErrorState] = useState({})
    const [registerState, setRegisterState] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const [loginState, setLoginState] = useState({
        email:"",
        password:""
    })

    const loginChangeHandler = e => {
        setLoginState({
            ...loginState,
            [e.target.name]:e.target.value
        })
    }
    const registerChangeHandler = e => {
        setRegisterState({
            ...registerState,
            [e.target.name]:e.target.value
        })
    }

    const loginSubmit = e => {
        console.log("login submit")
        e.preventDefault()
        axios.post("http://localhost:8000/api/users/login", loginState, {withCredentials:true})
            .then(res => console.log(res))
            .catch(err => console.log(err.response.data))
    }

    const registerSubmit = (e) =>{
        console.log("REGISTER SUBMIT")
        e.preventDefault()
        axios.post("http://localhost:8000/api/users/register", registerState)
            .then(res => console.log(res.data))
            .catch(err => {
                console.log(err)
                const {errors} = err.response.data;
                const errObj = {}
                for(const [key, value] of Object.entries(errors)){
                    errObj[key] = value;
                }
                setErrorState(errObj)
            })
    }

    const getAllUsers = () =>{
        axios.get("http://localhost:8000/api/users", {withCredentials:true})
            .then(res => console.log(res))
            .catch(err => {
                console.log(err.response)
                // console.log(err.response.status)
            })
    }

    const logOut = () => {
        axios.get("http://localhost:8000/api/users/logout",{withCredentials:true})
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <fieldset>
            <legend>Main.jsx</legend>
            <h1>Register</h1>
                <form onSubmit={registerSubmit}>
                    <p>
                        First Name:
                        <input name="firstName" type="text" onChange={registerChangeHandler} />
                        {(errorState.firstName)? <small className="ml-1 text-danger font-weight-bold">WRONG</small>:null}
                    </p>
                    <p>
                        Last Name:
                        <input name="lastName" type="text" onChange={registerChangeHandler} />
                        {(errorState.lastName)? <small className="ml-1 text-danger font-weight-bold">WRONG</small>:null}
                    </p>
                    <p>
                        Email:
                        <input name="email" type="text" onChange={registerChangeHandler} />
                        {(errorState.email)? <small className="ml-1 text-danger font-weight-bold">WRONG</small>:null}
                        {(errorState.duplicate)? <small className="ml-1 text-danger font-weight-bold">EMAIL EXISTS</small>:null}
                    </p>
                    <p>
                        Password:
                        <input name="password" type="text" onChange={registerChangeHandler} />
                        {(errorState.password)? <small className="ml-1 text-danger font-weight-bold">WRONG</small>:null}
                    </p>
                    <p>
                        Confirm Password:
                        <input name="confirmPassword" type="text" onChange={registerChangeHandler} />
                        {(errorState.confirmPassword)? <small className="ml-1 text-danger font-weight-bold">WRONG</small>:null}
                    </p>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <h1>Login</h1>
                <form onSubmit={loginSubmit}>
                    <p>
                        Email:
                        <input name="email" type="text" onChange={loginChangeHandler} />
                    </p>
                    <p>
                        Password:
                        <input name="password" type="text" onChange={loginChangeHandler} />
                    </p>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <button onClick={getAllUsers}>GET ALL USERS</button>
                <button onClick={logOut}>LOGOUT</button>
        </fieldset>
    )
}

export default Main
