import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from './pages/Navbar';
import Courses from './pages/Courses';
import CreateCourse from './pages/CreateCourse';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout'
import { useEffect,useState } from 'react';
import axios from 'axios';
import url from './url';
function App(props) {
  const [isLoggedIn,setIsLoggedIn] = useState();
  useEffect(() => {
    axios.post(`${url}/api/isloggedin`,{},{withCredentials: true})
    .then((response) => setIsLoggedIn(response.data));
  },[])
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn}/>
      <Router>
        <Route path="/" exact render={() => <Home isLoggedIn={isLoggedIn}/>} />
        <Route path="/course" exact render={() => <Courses isLoggedIn={isLoggedIn}/>} />
        <Route path="/createcourse" render={()=> <CreateCourse isLoggedIn={isLoggedIn}/>} />
        <Route path="/login" render={()=> isLoggedIn ? <Logout isLoggedIn={isLoggedIn} /> : <Login isLoggedIn={isLoggedIn}/>} />
      </Router>
    </div>
  );
}

export default App;
