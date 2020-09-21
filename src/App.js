import React from 'react';
import './App.css';
import { createContext } from 'react';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Booking from './Pages/Booking/Booking';
import PrivateRoute from './Components/PrivateRouter/PrivateRoute';
import LogIn from './Pages/Login/LogIn';
import Home from './Pages/Home/Home';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [user, setUser] = useState({
    isSignedIn: false,
    firstName: '',
    lastName: '',
    name() {return `${this.firstName} ${this.lastName}`},
    email: '',
    password: '',
    confirmPassword: '',
    success: false,
    error: '',
    newUser: false
  })

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, user, setUser]}>
      <Router>
        <Switch>
        <Route path='/home'>
          <Home/>
        </Route>
        <Route path='/booking/:name'>
          <Booking/>
        </Route>
        <Route path='/login'>
          <LogIn/>
        </Route>
        <PrivateRoute path='/details/:place'>
          
        </PrivateRoute>
        <Route exact path='/'>
          <Home/>
        </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
