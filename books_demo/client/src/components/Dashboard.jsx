import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const Dashboard = (props) => {

  // STATE TO HOLD ALL BOOKS COMING FROM DB
  const [allBooks, setAllBooks] = useState([])

  // DESTRUCTURE FROM PROPS
  const {refreshState} = props

  useEffect(() => {
    // MAKE A CALL TO EXPRESS, GET ALL BOOKS
    axios.get("http://localhost:8000/api/books")
      .then(res => setAllBooks(res.data)) // INCOMING BOOKS ARE SET TO STATE
      .catch(err => console.log(err))
  }, [refreshState])


  return (
    <fieldset>
      <legend>DashboardComponent.jsx</legend>
      {
        allBooks.map((book, index) => {
          return(
            <div key={index}>
              <Link to={"/" + book._id}>
                <h1>{book.title} - {book.author}</h1>
              </Link>
            </div>
          )
        })
      }
    </fieldset>
  )
}

export default Dashboard