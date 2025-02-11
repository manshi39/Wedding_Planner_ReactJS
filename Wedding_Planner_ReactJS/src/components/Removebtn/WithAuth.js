// import React, { Component } from 'react'
// import {withFirebase} from '../Firebase'
// class WithAuth extends Component {
//     constructor() {
//         super()
//         this.saveToUser = this.saveToUser.bind(this)
//         this.removeFromUser = this.removeFromUser.bind(this)
//     }
//     saveToUser() {
//         console.log("saving")
//         let id=this.props.id
//         this.props.firebase.db.ref('/users/'+this.props.authUser.uid+'/saved/'+this.props.id).set(1)
//         //console.log(this.props.firebase.db.ref('/users/'+this.props.authUser.uid+'/saved').push().remove())
//         //console.log(this.props.firebase.db.ref('/users/'+this.props.firebase.auth.W+'/saved'))
//     }
//     removeFromUser() {
//         console.log(this.props.firebase.db.ref('/users/'+this.props.authUser.uid+'/saved').push().remove())
//     }
//     componentDidMount() {
//         //console.log(this.props.firebase.auth.W)
//         //console.log("uath="+this.props.authUser)
//     }
//     render() {
//         return (
//     <div style={{position:'absolute', right:'0px', bottom:'0px'}}>
//         <button value={this.props.id} className="btn btn-secondary" onClick={this.saveToUser}>Save</button>
//         {/*<button value={this.props.id} className="btn btn-secondary" onClick={this.removeFromUser}>Remove</button>*/}
//     </div>)
//     }
// }

// export default withFirebase(WithAuth)

import React from 'react';
import { useFirebase } from '../Firebase';

const WithAuth = ({ authUser, id }) => {
    const firebase = useFirebase();

    const saveToUser = () => {
        console.log("saving");
        firebase.db.ref(`/users/${authUser.uid}/saved/${id}`).set(1);
    };

    const removeFromUser = () => {
        console.log(firebase.db.ref(`/users/${authUser.uid}/saved/${id}`).remove());
    };

    return (
        <div style={{ position: 'absolute', right: '0px', bottom: '0px' }}>
            <button value={id} className="btn btn-secondary" onClick={saveToUser}>Save</button>
            {/*<button value={id} className="btn btn-secondary" onClick={removeFromUser}>Remove</button>*/}
        </div>
    );
};

export default WithAuth;
