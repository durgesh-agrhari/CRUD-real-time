import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import User from './components/users/User';

function App() {
  return (
    <Router>
      <div className="App"> 
      <Navbar />

      <Routes>
        <Route path='/' element = {<Home/> }/>
        <Route exact path='/contact' element = {<Contact/> }/>
        <Route exact path='/about' element = {<About/> }/>
        <Route exact path='/adduser' element = {<AddUser/> }/>
        <Route exact path='/edituser/:id' element = {<EditUser/> }/>
        <Route exact path='/user/:id' element = {<User/> }/>
        <Route component={<NotFound /> }/>
      </Routes>

    </div>
    </Router>
  );
}

export default App;
