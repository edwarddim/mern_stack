import React, {useEffect, useState} from "react"
import axios from 'axios'

const DetailComponent = props => {

    const {cat_id} = props

    const [cat, setCat] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/cats/${cat_id}`)
            .then(res => setCat(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1>Detail Component</h1>
            <h1>{cat.name}</h1>
            <h1>{cat.age}</h1>
            <h1>{cat.breed}</h1>
        </div>
    )
}
export default DetailComponent