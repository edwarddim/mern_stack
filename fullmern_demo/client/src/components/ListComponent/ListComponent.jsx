import React, {useState, useEffect} from "react"
import {Link} from "@reach/router"
import axios from "axios"

const ListComponent = props => {

    const {submitState, setSubmitState} = props

    const [listState, setListState] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/cats")
            .then(res => setListState(res.data.allCats))
            .catch(err => console.log(err))
    }, [submitState])

    const deleteHandler = (cat_id) => {
        // let answer = confirm("Do you want to delete this cat???")
        // console.log(answer)
        axios.delete(`http://localhost:8000/api/cats/${cat_id}`)
            .then(res => setSubmitState(!submitState))
            .catch(err => console.log(err))
    }


    return(
        <div>
            <h1>List Component</h1>
            {
                listState.map((cat, i) => {
                    return (
                        <div key={i}>
                            <Link to={`/${cat._id}`}>{cat.name}</Link>
                            <br />
                            <Link to={`/${cat._id}/edit`}>Edit {cat.name}</Link>
                            <br />
                            <button onClick={() => deleteHandler(cat._id)}>Delete</button>
                            {/* <h1>Age: {cat.age}</h1>
                            <h1>Breed: {cat.breed}</h1>
                            <h2>ID: {cat._id}</h2>
                            <h2>Created At: {cat.createdAt}</h2>
                            <h2>Updated At: {cat.updatedAt}</h2> */}
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ListComponent