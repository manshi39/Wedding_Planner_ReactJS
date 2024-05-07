import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FirebaseContext } from './Firebase';
import Navigation from './Navigation';

const Navbar = () => {
  const firebase = useContext(FirebaseContext);
  const [authUserState, setAuthUserState] = useState(null);
  const [usern, setUsern] = useState(null);
  const [cities, setCities] = useState(null);


  useEffect(() => {
    const authStateChanged = firebase.auth.onAuthStateChanged(authUser => {
      setAuthUserState(authUser);
      console.log("user=" + (authUser ? authUser.uid : "null"));
      //add null
      console.log("user" + (firebase.auth.currentUser ? firebase.auth.currentUser.profile : "null"));
      // console.log("user" + firebase.auth.currentUser.profile);
      updateUsername(authUser);
    });

    fetch("https://wp-database-d7c6f.firebaseio.com/public/cities.json")
      .then(res => res.json())
      .then(res => setCities(res));

    return () => {
      authStateChanged(); // Cleanup the auth state change listener
    };
  }, [firebase.auth]);

  useEffect(() => {
    if (authUserState !== null) {
      firebase.db.ref("users/" + authUserState.uid + '/username').on('value', snapshot => {
        const messageObject = snapshot.val();
        if (messageObject && usern === null) {
          setUsern(messageObject);
        }
      });
    }
  }, [authUserState, firebase.db, usern]);

  // const updateUsername = (authUser) => {
  //   if (authUser !== null) {
  //     firebase.db.ref("users/" + authUser.uid).once('value').then(snapshot => {
  //       const user = (snapshot.val() && snapshot.val().username) || 'Anonymous';
  //       console.log("uname=" + user);
  //       setUsern(user);
  //     });
  //   }
  const updateUsername = (authUser) => {
    if (authUser !== null && authUser.uid) { 
      firebase.db.ref("users/" + authUser.uid).once('value').then(snapshot => {
        const user = (snapshot.val() && snapshot.val().username) || 'Anonymous';
        console.log("uname=" + user);
        setUsern(user);
      });
    }
  };

  return (
    <div className="container-fluid bg-dark text-white" style={{ width: '100%' }}>
      <div className="row d-flex justify-content-between">
        <div className="d-flex justify-content-center justify-content-sm-center justify-content-md-start col-12 col-sm-12 col-md-4 col-xl-3">
          <Link className="btn  btn-dark text-monospaced " to="/">
            <b>WEDDING PLANNER</b>
          </Link>
        </div>
        <div className="d-flex col-12 col-sm-4 col-md-4 justify-content-center" >
          <div className="btn-group">
            <Link className="btn btn-dark" to='/vendors'>VENDORS</Link>
            <Link className="btn btn-dark" to='/banquets'>BANQUETS</Link>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <Navigation authUser={authUserState} username={usern} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
