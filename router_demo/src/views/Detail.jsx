import React from 'react'
import {useParams} from "react-router-dom"

const Detail = () => {

    const {id} = useParams();

    return (
        <fieldset>
            <legend>Detail.jsx</legend>
            <h1>Details page for User w/ ID {id}</h1>
        </fieldset>
    )
}

export default Detail
