import {useState, useEffect} from 'react'
import axios from "axios"
import {Link} from "react-router-dom"

const Dashboard = () => {
    // STATE
    const [allRecipes, setAllRecipes] = useState([])
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/recipes")
            .then(res => setAllRecipes(res.data))
            .catch(errors => console.log(errors))
    }, [refresh])

    const dateFormat = dateString =>{
        let dateObj = new Date(dateString)
    }

    const deleteRecipe = (recipe_id) => {
        axios.delete(`http://localhost:8000/api/recipes/${recipe_id}`)
            .then(res => {
                setRefresh(!refresh)
            })
            .catch(errors => console.log(errors))
    }

    // HANDLER
    return (
        <fieldset>
            <legend>Dashboard.jsx</legend>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Date Made</th>
                        <th>Under 30 minutes</th>
                        <th>Created At</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allRecipes.map((recipe) => {
                            const {_id, name, dateMade, under30Minutes, createdAt} = recipe
                            return(
                                <tr key={_id}>
                                    <td>{_id}</td>
                                    <td>{name}</td>
                                    <td>{dateMade}</td>
                                    {(under30Minutes) ? <td>Yes</td> : <td>No</td>}
                                    <td>{createdAt}</td>
                                    <td>
                                        <Link to={`/recipes/${_id}`}>View</Link>
                                        <Link to={`/recipes/edit/${_id}`}>Edit</Link>
                                        <button onClick={() => deleteRecipe(_id)}>Delete</button>
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