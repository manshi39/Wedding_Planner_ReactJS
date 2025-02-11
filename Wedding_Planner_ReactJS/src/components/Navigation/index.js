// // import React, { Component } from 'react';
// // import Login from '../Login';
// // import Signup from '../Signup';
// // import NavigationAuth from './NavigationAuth'

// // const Navigation = ({authUser, username}) => (
// //   <div className="row justify-content-center justify-content-sm-end">{authUser ? <NavigationAuth authUser={authUser} username={username}/> : <NavigationNonAuth />}</div>
// // );

// // const NavigationNonAuth = () => (
// //     <div>
// //     <div className="btn-group">
// //         <button type="button" className="btn btn-dark" data-toggle="dropdown">LOGIN</button>
// //             <div className="dropdown-menu dropdown-menu-right">
// //                 <div className="dropdown-item">
// //                   <Login/>
// //                 <div id="firebaseui-auth-container"></div>
// //             </div>
// //         </div>
// //     </div>
// //     <div className="btn-group">
// //     <button type="button" className="btn btn-dark" data-toggle="dropdown">SIGNUP</button>
// //     <div className="dropdown-menu dropdown-menu-right p-0">
// //       <div className="dropdown-item">
// //         <Signup/>
// //       </div>
// //     </div>
// //   </div>
// //   </div>
// // );

// // export default Navigation;


// // import React from 'react';
// // import Login from '../Login';
// // import Signup from '../Signup';
// // import NavigationAuth from './NavigationAuth';

// // const Navigation = ({ authUser, username }) => (
// //   <div className="row justify-content-center justify-content-sm-end">
// //     {authUser ? (
// //       <NavigationAuth authUser={authUser} username={username} />
// //     ) : (
// //       <NavigationNonAuth />
// //     )}
// //   </div>
// // );

// // const NavigationNonAuth = () => (
// //   <div>
// //     <div className="btn-group">
// //       <button type="button" className="btn btn-dark" data-toggle="dropdown">
// //         LOGIN
// //       </button>
// //       <div className="dropdown-menu dropdown-menu-right">
// //         <div className="dropdown-item">
// //           <Login />
// //           <div id="firebaseui-auth-container"></div>
// //         </div>
// //       </div>
// //     </div>
// //     <div className="btn-group">
// //       <button type="button" className="btn btn-dark" data-toggle="dropdown">
// //         SIGNUP
// //       </button>
// //       <div className="dropdown-menu dropdown-menu-right p-0">
// //         <div className="dropdown-item">
// //           <Signup />
// //         </div>
// //       </div>
// //     </div>
// //   </div>
// // );

// // export default Navigation;
// import React, { Component } from 'react';
// import Login from '../Login';
// import Signup from '../Signup';
// import NavigationAuth from './NavigationAuth';

// class Navigation extends Component {
//   render() {
//     const { authUser, username } = this.props;
//     return (
//       <div className="row justify-content-center justify-content-sm-end">
//         {authUser ? (
//           <NavigationAuth authUser={authUser} username={username} />
//         ) : (
//           <NavigationNonAuth />
//         )}
//       </div>
//     );
//   }
// }

// const NavigationNonAuth = () => (
//   <div>
//     <div className="btn-group">
//       <button type="button" className="btn btn-dark" data-toggle="dropdown">
//         LOGIN
//       </button>
//       <div className="dropdown-menu dropdown-menu-right">
//         <div className="dropdown-item">
//           <Login />
//           <div id="firebaseui-auth-container"></div>
//         </div>
//       </div>
//     </div>
//     <div className="btn-group">
//       <button type="button" className="btn btn-dark" data-toggle="dropdown">
//         SIGNUP
//       </button>
//       <div className="dropdown-menu dropdown-menu-right p-0">
//         <div className="dropdown-item">
//           <Signup />
//         </div>
//       </div>
//     </div>
//   </div>
// );

// export default Navigation;

import React from 'react';
import Login from '../Login';
import Signup from '../Signup';
import NavigationAuth from './NavigationAuth'
import { Link } from "react-router-dom";

const Navigation = ({ authUser, username }) => (
  <div className="row justify-content-center justify-content-sm-end">{authUser ? <NavigationAuth authUser={authUser} username={username} /> : <NavigationNonAuth />}</div>
);

const NavigationNonAuth = () => (
  <div>
    <div className="btn-group">
      {/* <button type="button" className="btn btn-dark" data-toggle="dropdown" onClick={() => <Login />}>LOGIN</button> */}
      <Link to="/login" className="btn btn-dark">LOGIN</Link>
      <div className="dropdown-menu dropdown-menu-right">
        <div className="dropdown-item">
          <Login/>
          <div id="firebaseui-auth-container"></div>
        </div>
      </div>
    </div>
    <div className="btn-group">
      {/* <button type="button" className="btn btn-dark" data-toggle="dropdown">SIGNUP</button> */}
      <Link to="/signup" className="btn btn-dark">SIGNUP</Link>
      <div className="dropdown-menu dropdown-menu-right p-0">
        <div className="dropdown-item">
          <Signup />
        </div>
      </div>
    </div>
  </div>
);

export default Navigation;
