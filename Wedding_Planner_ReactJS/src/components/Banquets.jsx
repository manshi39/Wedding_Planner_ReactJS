// import React from 'react';
// import {withRouter} from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import { withFirebase } from './Firebase';

// import SelectBanquetCity from './SelectBanquetCity'
// import ShowBanquets from './ShowBanquets'

// class Banquets extends React.Component {
//     state= {
//         city:null,
//         page:null
//     }
//     constructor() {
//         super()
//     }
//     componentDidUpdate() {
//         console.log("page="+this.props.match.params.p)
//         if(this.state.page!=this.props.match.params.p)
//         this.setState({page:this.props.match.params.p})
//     }
//     render() {
//         if(this.props.match.params.c!=undefined)
//         return (
//             <ShowBanquets city={this.props.match.params.c} page={this.props.match.params.p} key={this.props.key} authUser={this.props.authUser}/>
//         );
//         return (
//             <SelectBanquetCity />
//         );
//     }
// }

// export default withRouter( withFirebase(Banquets))
// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import { withFirebase } from './Firebase';
// import SelectBanquetCity from './SelectBanquetCity';
// import ShowBanquets from './ShowBanquets';

// function Banquets({ firebase, authUser }) {
//     const { c, p } = useParams();
//     const navigate = useNavigate();
//     const [city, setCity] = useState(null);
//     const [page, setPage] = useState(null);

//     useEffect(() => {
//         setPage(p);
//     }, [p]);

//     useEffect(() => {
//         if (c !== undefined) {
//             setCity(c);
//         }
//     }, [c]);

//     useEffect(() => {
//         const unregisterAuthObserver = firebase.auth.onAuthStateChanged(authUser => {
//             // Handle auth state changes here
//         });

//         return () => {
//             unregisterAuthObserver(); // Make sure to unregister the observer when the component unmounts
//         };
//     }, [firebase.auth]);

//     useEffect(() => {
//         console.log("page=" + page);
//     }, [page]);

//     return (
//         <>
//             {city !== null ? (
//                 <ShowBanquets city={city} page={page} authUser={authUser} />
//             ) : (
//                 <SelectBanquetCity />
//             )}
//         </>
//     );
// }

// export default withFirebase(Banquets);


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { withFirebase } from './Firebase';

import SelectBanquetCity from './SelectBanquetCity'
import ShowBanquets from './ShowBanquets'

const Banquets = ({ authUser }) => {
    const { c: city, p: page } = useParams();

    useEffect(() => {
        console.log("page=" + page);
    }, [page]);

    return (
        <>
            {city !== undefined ? (
                <ShowBanquets city={city} page={page} key={city} authUser={authUser} />
            ) : (
                <SelectBanquetCity />
            )}
        </>
    );
}

export default withFirebase(Banquets);
