import Home from "./components/Home"
import DetailComponent from "./components/DetailComponent/DetailComponent"
import EditComponent from "./components/EditComponents/EditComponent"
import {Router} from "@reach/router"

function App() {
  return (
    <div>
      <Router>
        <Home path="/" />
        <DetailComponent path="/:cat_id" />
        <EditComponent path="/:cat_id/edit" />
      </Router>
    </div>
  );
}

export default App;
