// IMPORT DEPENDENCIES
import React, { Component } from 'react'

// CREATE THE COMPONENT
// EXPORT THE COMPONENT
export default class Form extends Component {
  render() {
    return (
      <fieldset>
          <legend>Form.jsx</legend>
          <form action="">
              <p>
                  Name:
                  <input type="text" name="" id="" />
              </p>
              <p>
                  Email:
                  <input type="email" name="" id="" />
              </p>
              <button className='btn btn-primary'>Submit</button>
          </form>
      </fieldset>
    )
  }
}
