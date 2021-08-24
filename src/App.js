import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from './pages/Navbar';
import Mainpage from './pages/MainPage';
import CreateCourse from './pages/CreateCourse';
function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Route path="/course" exact render={() => <Mainpage />} />
        <Route path="/createcourse" render={()=> <CreateCourse />} />
      </Router>
    </div>
  );
}

export default App;
