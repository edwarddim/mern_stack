import React, { useState } from 'react'
import Dashboard from '../components/Dashboard'
import Form from '../components/Form'

const Main = () => {

  const [refresh, setRefresh] = useState(false)

  const changeRefresh = () => setRefresh(!refresh)

  return (
    <fieldset>
      <legend>Main.jsx</legend>
      <Form changeRefresh={changeRefresh} />
      <Dashboard refresh={refresh} />
    </fieldset>
  )
}

export default Main