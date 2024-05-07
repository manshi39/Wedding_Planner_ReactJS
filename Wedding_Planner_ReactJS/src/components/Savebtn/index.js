import React, { Component } from 'react';
import WithAuth from './WithAuth'

class Savebtn extends Component {
  render() {
    if(this.props.authUser!=null)
    return (
      <WithAuth authUser={this.props.authUser} id={this.props.id} />
    );
    return(
      <WithoutAuth />
    ); 
  }
}

const WithoutAuth = () => (
    <button className="btn btn-light disabled" style={{position:'absolute', right:'0px', bottom:'0px'}}>Login to Save</button>
);
export default Savebtn;

// import React from 'react';
// import WithAuth from './WithAuth';

// const Savebtn = ({ authUser, id }) => {
//   return authUser ? <WithAuth authUser={authUser} id={id} /> : <WithoutAuth />;
// };

// const WithoutAuth = () => (
//   <button className="btn btn-light disabled" style={{ position: 'absolute', right: '0px', bottom: '0px' }}>Login to Save</button>
// );

// export default Savebtn;
