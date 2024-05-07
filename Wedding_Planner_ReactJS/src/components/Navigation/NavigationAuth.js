// import React, { Component } from 'react'
// import { withFirebase } from "../Firebase";
// import SignOutButton from '../Signout'
// import {Link} from 'react-router-dom'

// class NavigationAuth extends Component {
//     componentDidMount() {
//       console.log("users"+this.props.firebase.db.path('/users'));
//     }
//     render() {
//       return (
//         <div>
//             <Link className="btn btn-dark" to='/userData'>{this.props.username}</Link>
//             <SignOutButton />
//         </div>
//       );
//     }
//   }

//   export default withFirebase(NavigationAuth)

// // import React, { useEffect } from 'react';
// // import { withFirebase } from '../Firebase';
// // import SignOutButton from '../Signout';
// // import { Link } from 'react-router-dom';

// // const NavigationAuth = ({ firebase, username }) => {
// //   useEffect(() => {
// //     // Perform any necessary side effects when the component mounts
// //     // For example, you can fetch user data or initialize Firebase
// //     // console.log("users" + firebase.db.path('/users'));
// //   }, [firebase]);

// //   return (
// //     <div>
// //       <Link className="btn btn-dark" to="/userData">
// //         {username}
// //       </Link>
// //       <SignOutButton />
// //     </div>
// //   );
// // };

// // export default withFirebase(NavigationAuth);

import React, { Component } from 'react'
import { withFirebase } from "../Firebase";
import SignOutButton from '../Signout'
import { Link } from 'react-router-dom'

class NavigationAuth extends Component {
  componentDidMount() {
    //console.log("users"+this.props.firebase.db.path('/users'));
  }
  render() {
    return (
      <div>
        <Link className="btn btn-dark" to='/userData'>{this.props.username}</Link>
        <SignOutButton />
      </div>
    );
  }
}

export default withFirebase(NavigationAuth)
