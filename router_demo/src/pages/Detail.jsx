import React from 'react'
import { useParams } from "react-router"

const Detail = () => {
    const {watermelon} = useParams()

    return (
        <fieldset>
            <legend>Detail.jsx</legend>
            <h1>ID: {watermelon}</h1>
        </fieldset>
    )
}

export default Detail