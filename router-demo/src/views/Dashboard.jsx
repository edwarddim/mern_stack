import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  // instantiate a navigate function from useNavigate
  const navigate = useNavigate()

  useEffect(() => {
    let userLogged = false
    if (!userLogged) {
      navigate("/")
    }
  }, [])

  return (
    <fieldset>
      <legend>Dashboard.jsx</legend>
    </fieldset>
  )
}

export default Dashboard