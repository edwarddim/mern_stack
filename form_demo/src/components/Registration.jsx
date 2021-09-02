import React, {useState} from 'react'

const Registration = (props) => {

    const [formState, setFormState] = useState({
        'fullName' : "",
        'email' : "",
        "password" : "",
        "confirmPassword" : ""
    })

    // const [validState, setValidState] = useState({
    //     "fullName" : false,
    //     "email" : false,
    //     "password" : false,
    //     "confirmPassword" : false,
    //     "fullNameAlpha" : false
    // })

    // const submitHandler = (e) => {
    //     let fullName = false;
    //     let fullNameAlpha = false;
    //     let email = false;
    //     let password = false;
    //     let confirmPassword = false;
    //     e.preventDefault();
    //     // FULL NAME MUST NOT BE EMPTY
    //     if(formState.fullName.length == 0){
    //         fullName = true;
    //     }
    //     // FULL NAME CONTAINS ONLY LETTERS
    //     // /[^A-Za-z\s]/

    //     if(! (/^[a-zA-Z]+$/).test(formState.fullName)){
    //         fullNameAlpha = true;
    //     }
    //     // EMAIL IS VALID FORMAT
    //     if(! (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(formState.email)){
    //         email = true;
    //     }
    //     // PASSWORD LENGTH IS MORE THAN 5 CHARS
    //     if(formState.password.length < 5){
    //         password = true;
    //     }
    //     // PASSWORD AND CONFIRM PASSWORD MUST MATCH
    //     if(formState.password != formState.confirmPassword){
    //         confirmPassword = true;
    //     }
    //     setValidState({
    //         fullName,
    //         email,
    //         password,
    //         confirmPassword,
    //         fullNameAlpha
    //     })
    // }

    const changeHandler = (e) => {
        const {name, value} = e.target
        setFormState({
            ...formState,
            [name] : value
        })
    }
    

    /*
    __      __   _ _     _       _   _                        _ _   _                                     
    \ \    / /  | (_)   | |     | | (_)                      (_) | | |         /\                         
     \ \  / /_ _| |_  __| | __ _| |_ _  ___  _ __   __      ___| |_| |__      /  \   _ __ _ __ __ _ _   _ 
      \ \/ / _` | | |/ _` |/ _` | __| |/ _ \| '_ \  \ \ /\ / / | __| '_ \    / /\ \ | '__| '__/ _` | | | |
       \  / (_| | | | (_| | (_| | |_| | (_) | | | |  \ V  V /| | |_| | | |  / ____ \| |  | | | (_| | |_| |
        \/ \__,_|_|_|\__,_|\__,_|\__|_|\___/|_| |_|   \_/\_/ |_|\__|_| |_| /_/    \_\_|  |_|  \__,_|\__, |
                                                                                                     __/ |
                                                                                                    |___/ 
    */
    const [validState, setValidState] = useState({
        "fullName" : [],
        "email" : false,
        "password" : false,
        "confirmPassword" : false
    })

    const submitHandler = (e) => {
        let fullName = [];
        let email = false;
        let password = false;
        let confirmPassword = false;
        e.preventDefault();
        // FULL NAME MUST NOT BE EMPTY
        if(formState.fullName.length == 0){
            fullName.push("Name must be included");
        }
        // FULL NAME CONTAINS ONLY LETTERS
        // /[^A-Za-z\s]/

        if(! (/^[a-zA-Z]+$/).test(formState.fullName)){
            fullName.push("Name must be only Alpha chars");
        }
        // EMAIL IS VALID FORMAT
        if(! (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(formState.email)){
            email = true;
        }
        // PASSWORD LENGTH IS MORE THAN 5 CHARS
        if(formState.password.length < 5){
            password = true;
        }
        // PASSWORD AND CONFIRM PASSWORD MUST MATCH
        if(formState.password != formState.confirmPassword){
            confirmPassword = true;
        }
        setValidState({
            fullName,
            email,
            password,
            confirmPassword
        })
    }
    return (
        <div>
            <h1>Registration</h1>
            <form onSubmit={submitHandler}>
                <p>
                    Full Name:
                    <input type="text" name="fullName" id="" onChange={changeHandler} />
                    {/* { (validState.fullName) ? <p style={{"color" :"red"}}>You must include a name</p> : null }
                    { (validState.fullNameAlpha) ? <p style={{"color" :"red"}}>Your name must only include alphatbetical chars</p> : null } */}
                    { validState.fullName.map((message) => <p style={{"color" :"red"}}>{message}</p>)}
                </p>
                <p>
                    Email:
                    <input type="email" name="email" id="" onChange={changeHandler} />
                    { (validState.email) ? <p style={{"color" :"red"}}>Email must be valid</p> : null }
                </p>
                <p>
                    Password:
                    <input type="password" name="password" id="" onChange={changeHandler} />
                    { (validState.password) ? <p style={{"color" :"red"}}>Password must be atleast 5 chars</p> : null }
                </p>
                <p>
                    Confirm Password:
                    <input type="password" name="confirmPassword" id="" onChange={changeHandler} />
                    { (validState.confirmPassword) ? <p style={{"color" :"red"}}>Password and Confirm Password must match</p> : null }
                </p>
                <button>Register</button>
            </form>
        </div>
    )
}

export default Registration;