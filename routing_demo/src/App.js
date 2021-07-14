import Navbar from "./components/Navbar";
import {Router} from "@reach/router"
import Home from "./components/Home";
import About from "./components/About";
import Detail from "./components/Detail";
import Checkout from "./components/Checkout";
import Error from "./components/Error"

function App() {

  // const [state, setState] = useState("edward")

  return (
    <div>
      <fieldset>
        <legend>App.js</legend>
        <Navbar />
        <Router>
          <Home path="/" />
          <About path="/about" />
          <Detail path="/:param/:name" />
          <Checkout path="/checkout" />
          <Error path="/error" />
        </Router>
      </fieldset>
    </div>
  );
}

export default App;
