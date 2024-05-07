// import React, { useState } from 'react';
// import { withFirebase } from './Firebase';
// import { Link } from 'react-router-dom';
// import { Component } from 'react';

// const Login = () => (
//   <div className="row justify-content-center bg-white p-5">
//     <p className="display-3">Sign In</p>
//     <SignInForm />
//   </div>
// );

// const SignInFormBase = ({ firebase }) => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     error: null,
//     redirectToHome: false, 
//   });

//   const { email, password, error, redirectToHome } = formData;

//   const onSubmit = async event => {
//     event.preventDefault();
//     try {
//       await firebase.doSignInWithEmailAndPassword(email, password);
//       // Set redirectToHome to true to trigger redirection
//       setFormData({ ...formData, error: null, redirectToHome: true });
//     } catch (error) {
//       setFormData({ ...formData, error });
//     }
//   };

//   const onChange = event => {
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//   };

//   const isInvalid = password === '' || email === '';

//   // Redirect to home page if redirectToHome is true
//   if (redirectToHome) {
//     window.location.href = '/'; // Redirecting to home page
//     return null; 
//   }

//   return (
//     <form onSubmit={onSubmit}>
//       <div className="row justify-content-center bg-white">
//         <input
//           name="email"
//           className="col-12 my-2"
//           value={email}
//           onChange={onChange}
//           type="text"
//           placeholder="Email Address"
//         />
//         <input
//           name="password"
//           className="col-12 my-2"
//           value={password}
//           onChange={onChange}
//           type="password"
//           placeholder="Password"
//         />
//         <button className="btn btn-primary col-12 my-2" disabled={isInvalid} type="submit">
//           Sign In
//         </button>
//         <Link to="/signup">Don't have an account? Sign Up</Link>
//         {error && <p>{error.message}</p>}
//       </div>
//     </form>
//   );
// };

// class SignInGoogleBase extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { error: null };
//   }
//   onSubmit = event => {
//     this.props.firebase
//       .doSignInWithGoogle()
//       .then(socialAuthUser => {
//         return this.props.firebase
//           .user(socialAuthUser.user.uid)
//           .set({
//             username: socialAuthUser.user.displayName,
//             email: socialAuthUser.user.email,
//             roles: {},
//           });
//       })
//       .then(() => {
//         this.setState({ error: null });
//       })
//       .catch(error => {
//         this.setState({ error });
//       });

//     event.preventDefault();
//   };
//   render() {
//     const { error } = this.state;
//     return (
//       <form onSubmit={this.onSubmit}>
//         <button class="btn btn-primary my-2" type="submit">Sign In with Google</button>
//         {error && <p>{error.message}</p>}
//       </form>
//     );
//   }
// }



// const SignInForm = withFirebase(SignInFormBase);
// const SignInGoogle = (withFirebase(SignInGoogleBase));
// export default Login;
// export { SignInForm, SignInGoogle };


import React, { useState } from "react";
import { withFirebase } from "./Firebase";
import { Link } from "react-router-dom";

const Login = () => (
  <div className="container-xl d-flex justify-content-center align-items-center vh-100">
    <div
      className="card border-primary"
      style={{ width: "500px", padding: "20px" }}
    >
      <h2 className="card-title text-center">Sign In</h2>
      <SignInForm />
    </div>
  </div>
);

const SignInFormBase = ({ firebase }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    error: null,
    
    redirectToHome: false,
  });

  const { email, password, error, redirectToHome } = formData;

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await firebase.doSignInWithEmailAndPassword(email, password);
      setFormData({ ...formData, error: null, redirectToHome: true });
    } catch (error) {
      setFormData({ ...formData, error });
    }
  };

  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const isInvalid = password === "" || email === "";

  if (redirectToHome) {
    window.location.href = "/";
    return null;
  }

  return (
    <form onSubmit={onSubmit} className="text-center">
      <div className="form-group">
        <input
          name="email"
          className="form-control"
          value={email}
          onChange={onChange}
          type="text"
          placeholder="Email Address"
        />
      </div>
      <div className="form-group">
        <input
          name="password"
          className="form-control"
          value={password}
          onChange={onChange}
          type="password"
          placeholder="Password"
        />
      </div>
      <button
        className="btn btn-primary btn-block"
        disabled={isInvalid}
        type="submit"
      >
        Sign In
      </button>
      <Link to="/signup" className="mt-3 d-block">
        Don't have an account? Sign Up
      </Link>
      {error && <p className="text-danger">{error.message}</p>}
    </form>
  );
};

const SignInGoogleBase = ({ firebase }) => {
  const [error, setError] = useState(null);

  const onSubmit = (event) => {
    firebase
      .doSignInWithGoogle()
      .then((socialAuthUser) => {
        return firebase.user(socialAuthUser.user.uid).set({
          username: socialAuthUser.user.displayName,
          email: socialAuthUser.user.email,
          roles: {},
        });
      })
      .then(() => {
        setError(null);
      })
      .catch((error) => {
        setError(error);
      });

    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} className="text-center">
      <button className="btn btn-primary btn-block" type="submit">
        Sign In with Google
      </button>
      {error && <p className="text-danger">{error.message}</p>}
    </form>
  );
};

const SignInForm = withFirebase(SignInFormBase);
const SignInGoogle = withFirebase(SignInGoogleBase);

export default Login;
export { SignInForm, SignInGoogle };