import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Banana from './components/Banana';
import { Component } from 'react';

class App extends Component {
  // STATE
  constructor(props) {
    super(props);
    this.state = {
      position: false,
      count:1
    };
  }

  clickHandler = () => {
    if(this.state.position == false){
      this.setState({position:true})
    }
    else{
      this.setState({position:false})
    }
  }

  counter = () => {
    this.setState({count : this.state.count+1})
  }

  // RENDER PORTION
  render() {
    return (
      <fieldset>
        <legend>App.js</legend>
        <button onClick={this.clickHandler}>Click</button>

        <hr />
        <h1>Counter : {this.state.count}</h1>
        <button onClick={this.counter}>Counter</button>

        <Form position={this.state.position} name="Edward Im" age={31} location="Alhambra" hairColor="black" />

        {/* --------------------------------------------------------- */}
        {/* --------------------------------------------------------- */}
        {/* --------------------------------------------------------- */}
        {/* <Form name="Edward Im" age={31} location="Alhambra" hairColor="black" />
        <Form name="John Doe" age={34} location="LA" hairColor="yellow" />
        <Form name="Jane Doe" age={33} location="LA" hairColor="yellow" />
        <Banana>
          <h1>B</h1>
          <h1>A</h1>
          <h1>N</h1>
          <h1>A</h1>
          <h1>N</h1>
          <h1>A</h1>
        </Banana> */}
      </fieldset>
    );
  }

}

export default App;