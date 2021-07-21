import React, {useEffect, useState} from "react"
import {Link} from "@reach/router"

const Home =props => {

    const users = [1,2,3,4,5]
    const [time, setTime] = useState(new Date().toLocaleString());

    useEffect(() => {
        alert("HOME COMPONENT IS MOUNTED")
        const int = setInterval(
            () => {
                setTime(new Date().toLocaleString())
                console.log("SET INTERVAL TRIGGERED")
            },
            1000
        );
 
        return function clearInt() {
            alert("HOME COMPONENT IS DISMOUNTED")
            clearInterval(int);
        }
    }, [])

    return(
        <fieldset>
            <legend>Home.jsx</legend>
            <Link to="/">GO TO INDEX ROUTE</Link>
            <h1>{time}</h1>
            {props.children}
        </fieldset>
    )
}
export default Home;