import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"

const Dashboard = () => {

    const [recipes, setRecipes] = useState([])
    const [submitted, setSubmitted] = useState(false)

    const refresh = ()=>{
        setSubmitted(!submitted)
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/recipes")
            .then(response => setRecipes(response.data))
            .catch()
    }, [submitted])

    const deleteHandler = (recipe_id) => {
        axios.delete("http://localhost:8000/api/recipes/"+recipe_id)
            .then(response => refresh())
            .catch(error => console.log(error))
    }

    return (
        <fieldset>
            <legend>Dashboard.jsx</legend>
            <table>
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Date Made</th>
                    <th>Under 30 min</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                        recipes.map((recipe) => {
                            return(
                                <tr>
                                    <td>{recipe._id}</td>
                                    <td>{recipe.name}</td>
                                    <td>{recipe.description}</td>
                                    <td>{recipe.dateMade}</td>
                                    {(recipe.under30) ? <td>Yes</td> : <td>No</td>}
                                    <td>
                                        <Link to={"/recipes/"+recipe._id}>View</Link>
                                        <Link to={"/recipes/edit/"+recipe._id}>Edit</Link>
                                        <button onClick={() => deleteHandler(recipe._id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </fieldset>
    )
}

export default Dashboard