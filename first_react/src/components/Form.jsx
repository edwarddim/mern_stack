import React, { Component } from 'react';


class Form extends Component{
    render(){
        return(
            <fieldset>
                <legend>Form.jsx</legend>
                <form action="" method="post">
                    <p>
                        First Name:
                        <input type="text" name="" id="" />
                    </p>
                </form>
            </fieldset>
        )
    }
}

export default Form