// // import app from 'firebase/app';
// // import 'firebase/auth';
// // import 'firebase/database';
// // import 'firebase/storage'

// // const config = {
// //     apiKey: "AIzaSyAk6bifdNspHpJiayRf1WVw0mNBN_7lf2g",
// //     authDomain: "wp-database-d7c6f.firebaseapp.com",
// //     databaseURL: "https://wp-database-d7c6f.firebaseio.com",
// //     projectId: "wp-database-d7c6f",
// //     storageBucket: "wp-database-d7c6f.appspot.com",
// //     messagingSenderId: "76433547092",
// //     appId: "1:76433547092:web:36a2db486b682d53f632c1",
// //     measurementId: "G-GY12PRF563"
// //   };

// //   class Firebase {
// //     constructor() {
// //       app.initializeApp(config);
// //       this.auth = app.auth();
// //       this.db = app.database();
// //       this.storage = app.storage()

// //       this.googleProvider = new app.auth.GoogleAuthProvider();
// //       this.facebookProvider = new app.auth.FacebookAuthProvider();
// //       this.twitterProvider = new app.auth.TwitterAuthProvider();
// //     }
// //     doCreateUserWithEmailAndPassword = (email, password) =>
// //     this.auth.createUserWithEmailAndPassword(email, password);
// //     doSignInWithEmailAndPassword = (email, password) =>
// //     this.auth.signInWithEmailAndPassword(email, password);
// //     doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
// //     doPasswordUpdate = password =>
// //     this.auth.currentUser.updatePassword(password);

// //     doSignInWithGoogle = () =>
// //     this.auth.signInWithPopup(this.googleProvider);
// //     doSignInWithFacebook = () =>
// //     this.auth.signInWithPopup(this.facebookProvider);
// //     doSignInWithTwitter = () =>
// //     this.auth.signInWithPopup(this.twitterProvider);
    
// //     doSignOut = () => this.auth.signOut();

// //     // *** User API ***
// //     user = uid => this.db.ref(`users/${uid}`);
// //     users = () => this.db.ref('users');
// //   }
// //   export default Firebase;

// import { useEffect } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';
// import 'firebase/storage';

// const config = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   databaseURL: "YOUR_DATABASE_URL",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID",
//   measurementId: "YOUR_MEASUREMENT_ID"
// };

// const useFirebase = () => {
//   useEffect(() => {
//     firebase.initializeApp(config);
//   }, []);


//   const auth = firebase.auth();
//   const db = firebase.database();
//   const storage = firebase.storage();

//   const googleProvider = new firebase.auth.GoogleAuthProvider();
//   const facebookProvider = new firebase.auth.FacebookAuthProvider();
//   const twitterProvider = new firebase.auth.TwitterAuthProvider();

//   const doCreateUserWithEmailAndPassword = (email, password) =>
//     auth.createUserWithEmailAndPassword(email, password);

//   const doSignInWithEmailAndPassword = (email, password) =>
//     auth.signInWithEmailAndPassword(email, password);

//   const doPasswordReset = email => auth.sendPasswordResetEmail(email);

//   const doPasswordUpdate = password =>
//     auth.currentUser.updatePassword(password);

//   const doSignInWithGoogle = () => auth.signInWithPopup(googleProvider);

//   const doSignInWithFacebook = () => auth.signInWithPopup(facebookProvider);

//   const doSignInWithTwitter = () => auth.signInWithPopup(twitterProvider);

//   const doSignOut = () => auth.signOut();

//   // User API
//   const user = uid => db.ref(`users/${uid}`);
//   const users = () => db.ref('users');

//   return {
//     auth,
//     db,
//     storage,
//     doCreateUserWithEmailAndPassword,
//     doSignInWithEmailAndPassword,
//     doPasswordReset,
//     doPasswordUpdate,
//     doSignInWithGoogle,
//     doSignInWithFacebook,
//     doSignInWithTwitter,
//     doSignOut,
//     user,
//     users
//   };
// };

// export default useFirebase;

// import firebase from 'firebase/app';
// import * as firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';
// import 'firebase/storage';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/storage';

const config = {
  apiKey: "AIzaSyAk6bifdNspHpJiayRf1WVw0mNBN_7lf2g",
  databaseURL: "https://wp-database-d7c6f.firebaseio.com",
  projectId: "wp-database-d7c6f",
  storageBucket: "wp-database-d7c6f.appspot.com",
  messagingSenderId: "76433547092",
  appId: "1:76433547092:web:36a2db486b682d53f632c1",
  authDomain: "wp-database-d7c6f.firebaseapp.com",



  measurementId: "G-GY12PRF563"
};

firebase.initializeApp(config);

const auth = firebase.auth();
const db = firebase.database();
const storage = firebase.storage();

const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();
const twitterProvider = new firebase.auth.TwitterAuthProvider();

const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

const doPasswordReset = email => auth.sendPasswordResetEmail(email);

const doPasswordUpdate = password =>
  auth.currentUser.updatePassword(password);

const doSignInWithGoogle = () => auth.signInWithPopup(googleProvider);

const doSignInWithFacebook = () => auth.signInWithPopup(facebookProvider);

const doSignInWithTwitter = () => auth.signInWithPopup(twitterProvider);

const doSignOut = () => auth.signOut();

// User API
const user = uid => db.ref(`users/${uid}`);
const users = () => db.ref('users');

export{
  auth,
  db,
  storage,
  doCreateUserWithEmailAndPassword,
  doSignInWithEmailAndPassword,
  doPasswordReset,
  doPasswordUpdate,
  doSignInWithGoogle,
  doSignInWithFacebook,
  doSignInWithTwitter,
  doSignOut,
  user,
  users
};
