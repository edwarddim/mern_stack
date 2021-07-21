import Navbar from "./components/Navbar";
import {Router} from "@reach/router"
import Home from "./components/Home";
import About from "./components/About";
import Detail from "./components/Detail";

function App() {

  // const [state, setState] = useState("edward")

  return (
    <div>
      <fieldset>
        <legend>App.js</legend>
        <Navbar />
        <Router>
          {/* <AdminComponent path="/admin">
            <AdminDash path="dashbaord" />
          </AdminComponent> */}
          {/* <UserComponent path="/user">
            <UserDash path="dashboard" />
          </UserComponent> */}
          <Home path="/home">
            <About path="about" />
            <Detail path="detail" />
          </Home>
        </Router>
      </fieldset>
    </div>
  );
}

export default App;
