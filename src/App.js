import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Items from "./components/Items";

function App() {
  return (
    <Router className="App">
      <Items />
    </Router>
  );
}

export default App;
