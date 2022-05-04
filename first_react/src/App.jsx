import logo from './logo.svg';
import './App.css';
// IMPORTING ALL THE COMPNONENTS
import Display from './components/Display';
import Form from './components/Form';
import { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      clicked : 0,
      name : "Edward Im"
    }
  }

  clickHandler = () => {
    // console.log("I have been clicked")
    // console.log(this.state.clicked)
    let {clicked} = this.state
    this.setState({
      'clicked' : clicked+1,
    })
    // console.log(this.state)
  } 

  render(){
      return (
        <fieldset>
        <legend>App.js</legend>
        <button onClick={this.clickHandler}>Click Me!</button>
        <Display clicked={this.state.clicked} firstName="Edward" lastName="Im" age={32} hairColor="Black" />
        <Form />
      </fieldset>
    );
  }
}

export default App;
