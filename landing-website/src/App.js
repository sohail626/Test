import logo from './logo.svg';
import './App.css';
import Main from './Components/Main';
import Backgroundvideo from './Components/Backgroundvideo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
  <Backgroundvideo/>
      <Router>
    
    <Main/>
    </Router>
    </div>
  );
}

export default App;
