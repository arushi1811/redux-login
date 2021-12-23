import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Welcome from "./components/Welcome"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Navbar from "./components/Navbar"
import Logout from './components/Logout';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Welcome}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/logout" component={Logout}/>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
