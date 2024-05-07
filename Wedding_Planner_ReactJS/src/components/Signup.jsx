// // // // import React, { useState } from 'react';
// // // // import axios from 'axios';

// // // // const SignupForm = () => {
// // // //   const [formData, setFormData] = useState({
// // // //     username: '',
// // // //     email: '',
// // // //     password: ''
// // // //   });

// // // //   const handleChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setFormData({ ...formData, [name]: value });
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     try {
// // // //       await axios.post('http://localhost:8080/api/users', formData); // Assuming Spring Boot is running on port 8080
// // // //       console.log('Signup successful');
// // // //       // Signup successful, redirect or show success message
// // // //     } catch (error) {
// // // //       console.error('An error occurred during signup:', error);
// // // //       // Handle signup error, show error message
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <h2>Sign Up</h2>
// // // //       <form onSubmit={handleSubmit}>
// // // //         <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
// // // //         <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
// // // //         <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
// // // //         <button type="submit">Sign Up</button>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default SignupForm;
// // // import React, { useState } from 'react';
// // // import axios from 'axios';

// // // const SignupForm = () => {
// // //   const [formData, setFormData] = useState({
// // //     username: '',
// // //     email: '',
// // //     password: ''
// // //   });

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData({ ...formData, [name]: value });
// // //   };

// // //   // const handleSubmit = async (e) => {
// // //   //   e.preventDefault();
// // //   //   try {
// // //   //     await axios.post('http://localhost:8080/api/signup', formData);
// // //   //     console.log('Signup successful');
// // //   //     // Redirect or show success message
// // //   //   } catch (error) {
// // //   //     console.error('An error occurred during signup:', error);
// // //   //     // Handle error, show error message
// // //   //   }
// // //   // };
// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     fetch('http://localhost:8080/api/users', {
// // //       method: 'POST',
// // //       headers: {
// // //         'Content-Type': 'application/json',
// // //       },
// // //       body: JSON.stringify(formData),
// // //     })
// // //       .then(response => response.json())
// // //       .then(data => console.log('User created:', data))
// // //       .catch(error => console.error('Error creating user:', error));
// // //   };

// // //   return (
// // //     <div>
// // //       <h2>Sign Up</h2>
// // //       <form onSubmit={handleSubmit}>
// // //         <input type="text" name="username" placeholder="name" value={formData.username} onChange={handleChange} />
// // //         <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
// // //         <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
// // //         <button type="submit">Sign Up</button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default SignupForm;
// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom'; // Import useHistory hook 
// // import {
// //   MDBContainer,
// //   MDBInput,
// //   MDBBtn,
// // } from 'mdb-react-ui-kit';

// // function Signup() {
// //   const [fullName, setFullName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [confirmPassword, setConfirmPassword] = useState('');
// //   const [role, setRole] = useState('ROLE_CUSTOMER');
// //   const [mobile, setMobileNumber] = useState('');
// //   const [error, setError] = useState(''); // State to manage error messages 
// //   const history = useNavigate(); // Get the history object for redirection 

// //   const handleSignup = async () => {
// //     try {
// //       // Check for empty fields 
// //       if (!fullName || !email || !password || !confirmPassword || !mobile) {
// //         setError('Please fill in all fields.');
// //         return;
// //       }

// //       if (password !== confirmPassword) {
// //         throw new Error("Passwords do not match");
// //       }

// //       const response = await axios.post('http://localhost:8080/auth/signup', {
// //         fullName,
// //         email,
// //         password,
// //         role,
// //         mobile
// //       });
// //       // Handle successful signup 
// //       console.log(response.data);
// //       history('/dashboard');
// //     } catch (error) {
// //       // Handle signup error 
// //       console.error('Signup failed:', error.response ? error.response.data : error.message);
// //       setError(error.response ? error.response.data : error.message);
// //     }
// //   };

// //   return (
// //     <div className="d-flex justify-content-center align-items-center vh-100">
// //       <div className="border rounded-lg p-4" style={{ width: '600px', height: 'auto' }}>
// //         <MDBContainer className="p-3">
// //           <h2 className="mb-4 text-center">Sign Up Page</h2>
// //           {/* Render error message if exists */}
// //           {error && <p className="text-danger">{error}</p>}
// //           <MDBInput wrapperClass='mb-3' id='fullName' placeholder={"Full Name"} value={fullName} type='text'
// //             onChange={(e) => setFullName(e.target.value)} />
// //           <MDBInput wrapperClass='mb-3' placeholder='Email Address' id='email' value={email} type='email'
// //             onChange={(e) => setEmail(e.target.value)} />
// //           <MDBInput wrapperClass='mb-3' placeholder='Password' id='password' type='password' value={password}
// //             onChange={(e) => setPassword(e.target.value)} />
// //           <MDBInput wrapperClass='mb-3' placeholder='Confirm Password' id='confirmPassword' type='password'
// //             value={confirmPassword}
// //             onChange={(e) => setConfirmPassword(e.target.value)} />


// //           <MDBInput wrapperClass='mb-2' placeholder='Mobile Number' id='mobileNumber' value={mobile}
// //             type='text'
// //             onChange={(e) => setMobileNumber(e.target.value)} />
// //           <label className="form-label mb-1">Role:</label>
// //           <select className="form-select mb-4" value={role} onChange={(e) => setRole(e.target.value)}>
// //             <option value="ROLE_CUSTOMER">User</option>
// //             <option value="ROLE_ADMIN">Admin</option>
// //           </select>
// //           <button className="mb-4 d-block mx-auto fixed-action-btn btn-primary"
// //             style={{ height: '40px', width: '100%' }}
// //             onClick={handleSignup}>Sign Up
// //           </button>

// //           <div className="text-center">
// //             <p>Already Register? <a href="/">Login</a></p>
// //           </div>

// //         </MDBContainer>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Signup; 


// import React, { Component } from 'react';
// import { withFirebase } from './Firebase';

// const Signup = () => (
//   <div class="row justify-content-center bg-white p-5">
//     <p class="display-3">Sign Up</p>
//     <SignUpForm />
//   </div>
// );
// const INITIAL_STATE = {
//   username: '',
//   email: '',
//   passwordOne: '',
//   passwordTwo: '',
//   error: null,
// };
// class SignUpFormBase extends Component {
//   constructor(props) {
//     super(props);

//     this.state = { ...INITIAL_STATE };
//   }
//   onSubmit = event => {
//     const { username, email, passwordOne } = this.state;
//     this.props.firebase
//       .doCreateUserWithEmailAndPassword(email, passwordOne)
//       .then(authUser => {
//         // Create a user in your Firebase realtime database
//         return this.props.firebase
//           .user(authUser.user.uid)
//           .set({
//             username,
//             email,
//           });
//       })
//       .then(authUser => {
//         this.setState({ ...INITIAL_STATE });
//       })
//       .catch(error => {
//         this.setState({ error });
//       });
//     event.preventDefault();
//   };
//   onChange = event => {
//     this.setState({ [event.target.name]: event.target.value });
//   };
//   render() {
//     const {
//       username,
//       email,
//       passwordOne,
//       passwordTwo,
//       error,
//     } = this.state;
//     const isInvalid =
//       passwordOne !== passwordTwo ||
//       passwordOne === '' ||
//       email === '' ||
//       username === '';
//     return (
//       <form onSubmit={this.onSubmit}>
//         <div class="row justify-content-center bg-white">
//         <input
//           name="username"
//           class="col-12 my-2"
//           value={username}
//           onChange={this.onChange}
//           type="text"
//           placeholder="Full Name"
//           style={{borderTop:'0px', borderLeft:'0px',borderRight:'0px', borderColor:'pink'}}
//         />
//         <input
//           name="email"
//           class="col-12 my-2"
//           value={email}
//           onChange={this.onChange}
//           type="text"
//           placeholder="Email Address"
//           style={{borderTop:'0px', borderLeft:'0px',borderRight:'0px', borderColor:'pink'}}
//         />
//         <input
//           name="passwordOne"
//           class="col-12 my-2"
//           value={passwordOne}
//           onChange={this.onChange}
//           type="password"
//           placeholder="Password"
//           style={{borderTop:'0px', borderLeft:'0px',borderRight:'0px', borderColor:'pink'}}
//         />
//         <input
//           name="passwordTwo"
//           class="col-12 my-2"
//           value={passwordTwo}
//           onChange={this.onChange}
//           type="password"
//           placeholder="Confirm Password"
//           style={{borderTop:'0px', borderLeft:'0px',borderRight:'0px', borderColor:'pink'}}
//         />
//         <button class="btn btn-primary col-12 my-2" disabled={isInvalid} type="submit">Sign Up</button>
//         {error && <p>{error.message}</p>}
//         </div>
//       </form>
//     );
//   }
// }
// const SignUpForm = withFirebase(SignUpFormBase);
// export default Signup;
// export { SignUpForm };


import React, { useState } from "react";
import { withFirebase } from "./Firebase";

const SignUp = () => {
  return (
    <div className="container-xl d-flex justify-content-center align-items-center vh-100">
      <div
        className="card"
        style={{
          width: "700px",
          padding: "20px",
          border: "2px solid #007bff",
          borderRadius: "10px",
        }}
      >
        <div className="card-body">
          <h2 className="card-title text-center">Sign Up</h2>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null,
};

const SignUpFormBase = ({ firebase }) => {
  const [formData, setFormData] = useState({ ...INITIAL_STATE });

  const { username, email, passwordOne, passwordTwo, error } = formData;

  const onSubmit = (event) => {
    firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(() => {
        return firebase.user(firebase.getCurrentUser().uid).set({
          username,
          email,
        });
      })
      .then(() => {
        setFormData({ ...INITIAL_STATE });
      })
      .catch((error) => {
        setFormData({ ...formData, error });
      });
    event.preventDefault();
  };

  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === "" ||
    email === "" ||
    username === "";

  return (
    <form onSubmit={onSubmit} className="text-center">
      <div className="form-group">
        <input
          name="username"
          className="form-control"
          value={username}
          onChange={onChange}
          type="text"
          placeholder="Full Name"
          style={{
            width: "100%",
            height: "50px",
            fontSize: "18px",
            marginBottom: "20px",
            borderRadius: "5px",
            padding: "10px",
          }}
        />
      </div>
      <div className="form-group">
        <input
          name="email"
          className="form-control"
          value={email}
          onChange={onChange}
          type="email"
          placeholder="Email Address"
          style={{
            width: "100%",
            height: "50px",
            fontSize: "18px",
            marginBottom: "20px",
            borderRadius: "5px",
            padding: "10px",
          }}
        />
      </div>
      <div className="form-group">
        <input
          name="passwordOne"
          className="form-control"
          value={passwordOne}
          onChange={onChange}
          type="password"
          placeholder="Password"
          style={{
            width: "100%",
            height: "50px",
            fontSize: "18px",
            marginBottom: "20px",
            borderRadius: "5px",
            padding: "10px",
          }}
        />
      </div>
      <div className="form-group">
        <input
          name="passwordTwo"
          className="form-control"
          value={passwordTwo}
          onChange={onChange}
          type="password"
          placeholder="Confirm Password"
          style={{
            width: "100%",
            height: "50px",
            fontSize: "18px",
            marginBottom: "20px",
            borderRadius: "5px",
            padding: "10px",
          }}
        />
      </div>
      <button
        className="btn btn-primary btn-block"
        disabled={isInvalid}
        type="submit"
        style={{
          backgroundColor: "#007bff",
          border: "none",
          height: "50px",
          fontSize: "18px",
          borderRadius: "5px",
        }}
      >
        Sign Up
      </button>
      {error && <p className="text-danger">{error.message}</p>}
    </form>
  );
};

const SignUpForm = withFirebase(SignUpFormBase);

export default SignUp;
export { SignUpForm };