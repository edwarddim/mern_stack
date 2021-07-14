import React, {useEffect, useState} from "react"
import {Link} from "@reach/router"

const Home =props => {

    const users = [1,2,3,4,5]
    const [time, setTime] = useState(new Date().toLocaleString());

    useEffect(() => {
        const int = setInterval(
            () => {
                setTime(new Date().toLocaleString())
                console.log("SET INTERVAL TRIGGERED")
            },
            1000
        );
 
        return function clearInt() {
            clearInterval(int);
        }
    }, [])

    return(
        <fieldset>
            <legend>Home.jsx</legend>
            <h1>{time}</h1>
            {
                users.map((user_id , i) => {
                    return <Link to={`/${user_id}/edward`} >User for {user_id}</Link>
                })
            }
        </fieldset>
    )
}
export default Home;