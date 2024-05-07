// import FirebaseContext, { withFirebase } from './context';
// import Firebase from './firebase';
// export default Firebase;
// export { FirebaseContext, withFirebase };

// index.js
// index.js

import { auth, db, storage, doCreateUserWithEmailAndPassword, doSignInWithEmailAndPassword, doPasswordReset, doPasswordUpdate, doSignInWithGoogle, doSignInWithFacebook, doSignInWithTwitter, doSignOut, user, users } from './firebase';
import FirebaseContext, { withFirebase } from './context';

export {
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
    users,
    FirebaseContext,
    withFirebase
};
