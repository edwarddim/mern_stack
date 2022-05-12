import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';
import React, { useState } from "react"
import Form from './components/Form';
import Display from './components/Display';

function App() {
    // OUR 'DATABASE' INFORMATION
    const [users, setUsers] = useState([
        { firstName: "Edawrd", lastName: "Im", age:31 },
        { firstName: "Jane", lastName: "Doe", age:34 },
        { firstName: "John", lastName: "Doe", age:34 }
    ])

    // ------------------ BOX GEN -----------------//
    // // COLORS STATE
    // const [colors, setColors] = useState([])

    // // CREATE A FUNCTION THAT HANDLES ADDING A COLOR
    // const addColor = (newColor) => {
    //     // ADD newColor TO THE LIST OF COLORS
    //     setColors([...colors, newColor])
    // }

    return (
        <fieldset>
            <legend>App.js</legend>

            {/* <table>
                <thead>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                </thead>
                <tbody>
                {
                    users.map((person) =>{
                        return(
                            <tr>
                                <td>{person.firstName}</td>
                                <td>{person.lastName}</td>
                                <td>{person.age}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table> */}


            {
                users.map((person, index) => <PersonCard key={index} user={person} />)
            }


            {/* <Form addColor={addColor}  />
            <Display allColors={colors} /> */}
        </fieldset>
    );
}

export default App;
