import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Vendors from './Vendors.jsx'

import { withAuthentication } from './Session/index.js';

import Navbar from './Navbar.jsx'
import Banquets from './Banquets.jsx'
import Home from './Home.jsx'
import UserData from './UserData.jsx'
import Login from './Login.jsx';
import Signup from './Signup.jsx';

const App = (props) => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const unsubscribe = props.firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        setAuthUser(user);
      } else {
        // No user is signed in.
        setAuthUser(null);
      }
    });

    return () => unsubscribe();
  }, [props.firebase.auth]);


  return (
    <Router basename='/'>
      <div>
        <Navbar cities={props.cities} authUser={authUser} />
        <div>
          <Routes>
            <Route path="/banquets/:c?/:p?" element={<Banquets authUser={authUser} />} />
            <Route path="/vendors/:v?/:c?/:p?" element={<Vendors authUser={authUser} />} />
            <Route path="/userData" element={<UserData authUser={authUser} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default withAuthentication(App);
