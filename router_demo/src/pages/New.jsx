import React from 'react'
import { useNavigate} from "react-router-dom";


const New = () => {

    const navigate = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();
        console.log("FORM SUBMITTED")
        navigate("/dashboard")
    }
    return (
        <fieldset>
            <legend>New.jsx</legend>
            <form onSubmit={submitHandler}>
                <p>
                    Name:
                    <input type="text" name="" id="" />
                </p>
                <button>Add</button>
            </form>
        </fieldset>
    )
}

export default New