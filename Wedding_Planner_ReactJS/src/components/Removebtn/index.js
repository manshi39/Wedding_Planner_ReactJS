// // import React, { Component } from 'react';
// // import WithAuth from './WithAuth'

// // class Savebtn extends Component {
// //   render() {
// //     if(this.props.authUser!=null)
// //     return (
// //       <WithAuth authUser={this.props.authUser} id={this.props.id} />
// //     );
// //     return(
// //       <WithoutAuth />
// //     ); 
// //   }
// // }



// // const WithoutAuth = () => (
// //     <button className="btn btn-secondary disabled" style={{position:'absolute', right:'0px', bottom:'0px'}}>Login to remove</button>
// // );
// // export default Savebtn;

// import React from 'react';
// import WithAuth from './WithAuth';

// const Removebtn = ({ authUser, id }) => {
//   if (authUser != null) {
//     return <WithAuth authUser={authUser} id={id} />;
//   } else {
//     return <WithoutAuth />;
//   }
// };

// const WithoutAuth = () => (
//   <button className="btn btn-secondary disabled" style={{ position: 'absolute', right: '0px', bottom: '0px' }}>
//     Login to remove
//   </button>
// );

// export default Removebtn;

import React, { Component } from 'react';
import WithAuth from './WithAuth'

class Savebtn extends Component {
  render() {
    if (this.props.authUser != null)
      return (
        <WithAuth authUser={this.props.authUser} id={this.props.id} />
      );
    return (
      <WithoutAuth />
    );
  }
}



const WithoutAuth = () => (
  <button className="btn btn-secondary disabled" style={{ position: 'absolute', right: '0px', bottom: '0px' }}>Login to remove</button>
);
export default Savebtn;