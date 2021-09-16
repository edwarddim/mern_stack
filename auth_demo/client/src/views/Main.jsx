import React, {useState} from "react"
import axios from "axios"

const Main = props => {

    const [registerState, setRegisterState] = useState({
        name: "",
        email:"",
        password:"",
        confirmPassword:""
    })

    const [loginState, setLoginState] = useState({
        email:"",
        password:""
    })

    const [errorState, setErrorState] = useState({})


    const registerSubmit = (e) =>{
        e.preventDefault()
        axios.post("http://localhost:8000/api/user/register", registerState, {withCredentials:true})
            .then(res => console.log(res))
            .catch(err => {
                console.log(err.response.data)
                const {errors} = err.response.data;
                console.log(errors)
                const errObj = {}

                for(const [key, value] of Object.entries(errors)){
                    console.log(errors[key])
                    errObj[key] = value;
                }
                setErrorState(errObj)
            })
    }

    const getAllUsers = () =>{
        axios.get("http://localhost:8000/api/users", {withCredentials:true})
            .then(res => console.log(res))
            .catch(err => {
                console.log(err)
                if(err.response.status === 401){
                    console.log("UNAUTHORIZED")
                }
                else if(err.response.status === 400){
                    console.log("BAD REQUEST")
                }
            })
    }

    const loginSubmit = e => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/user/login", loginState, {withCredentials:true})
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

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

    return(
        <div>
            <fieldset>
                <legend>Main.jsx</legend>
                <h1>Register</h1>
                <form onSubmit={registerSubmit}>
                    <p>
                        Name:
                        <input name="name" type="text" onChange={registerChangeHandler} />
                        {(errorState.name)? <small className="ml-1 text-danger font-weight-bold">WRONG</small>:null}
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
            </fieldset>
            <button onClick={getAllUsers}>GET ALL USERS</button>
        </div>
    )
}
export default Main