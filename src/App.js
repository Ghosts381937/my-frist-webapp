import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from './pages/Navbar';
import Mainpage from './pages/MainPage';
import CreateCourse from './pages/CreateCourse';
import Home from './pages/Home';
import Login from './pages/Login';
function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/course" exact render={() => <Mainpage />} />
        <Route path="/createcourse" render={()=> <CreateCourse />} />
        <Route path="/login" render={()=> <Login />} />
      </Router>
    </div>
  );
}

export default App;
