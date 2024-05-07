import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.jsx';
import * as serviceWorker from './components/serviceWorker.jsx';
import FirebaseContext from '../src/components/Firebase/context.js';
import { auth, db, storage, doCreateUserWithEmailAndPassword, doSignInWithEmailAndPassword, doPasswordReset, doPasswordUpdate, doSignOut, user, users } from '../src/components/Firebase/firebase.js';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <FirebaseContext.Provider
    value={{
      auth,
      db,
      storage,
      doCreateUserWithEmailAndPassword,
      doSignInWithEmailAndPassword,
      doPasswordReset,
      doPasswordUpdate,
      doSignOut,
      user,
      users
    }}
  >
    <App />
  </FirebaseContext.Provider>
);

serviceWorker.unregister();


