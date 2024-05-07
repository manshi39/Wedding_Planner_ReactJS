// // import React, { useState, useEffect } from 'react';
// // import { Link } from "react-router-dom";
// // import { withFirebase } from "./Firebase";
// // import Savebtn from './Savebtn';
// // import CityCover from './citycover';

// // const ShowBanquets = ({ firebase, city, page }) => {
// //     const [banquets, setBanquets] = useState({});
// //     const [auth, setAuth] = useState(null);

// //     useEffect(() => {
// //         const authStateChanged = firebase.auth.onAuthStateChanged(authUser => {
// //             setAuth(authUser);
// //         });

// //         return () => authStateChanged();
// //     }, [firebase.auth]);

// //     useEffect(() => {
// //         console.log("https://wp-database-d7c6f.firebaseio.com/public/weddingz/banquets/" + city + "/page1.json");
// //         console.log("didmount called");

// //         fetch("https://wp-database-d7c6f.firebaseio.com/public/weddingz/banquets/" + city + "/page" + page + ".json")
// //             .then(res => res.json())
// //             .then(res => {
// //                 console.log(res);
// //                 setBanquets(res);
// //             });

// //         return () => {
// //             // Clean up if needed
// //         };
// //     }, [city, page]);

// //     return (
// //         <div>
// //             <CityCover city={city} />
// //             <div className="md-form active-pink-4 mt-0 mx-5">
// //                 <input className="form-control" type="text" placeholder="Search" aria-label="Search" style={{ borderTop: '0px', borderLeft: '0px', borderRight: '0px', borderColor: 'pink' }} />
// //             </div>
// //             <div>
// //                 <div id="banq" className="container-fluid row justify-content-center">
// //                     {Object.keys(banquets).map((key) => (
// //                         <div className="col-sm-12 col-xl-6 h-100 my-3" key={key}>
// //                             <div className="card text-dark bg-light shadow" style={{ border: '0px', overflow: 'hidden' }}>
// //                                 <div className="row d-flex no-gutters">
// //                                     <div className="col-sm-12 col-md-4" style={{ backgroundImage: "url('" + banquets[key].image + "')", backgroundSize: 'cover', minHeight: '271px' }}></div>
// //                                     <div className="col-sm-12 col-md-8" style={{ height: '271px' }}>
// //                                         <div className="card-header bg-light" style={{ borderColor: 'pink' }}>
// //                                             <h4>{banquets[key].name}</h4>
// //                                         </div>
// //                                         <div className="card-body">
// //                                             <p className="card-text" style={{ height: '48px', overflow: 'hidden' }}>{banquets[key].desc}</p>
// //                                             <p className="card-text" style={{ height: '48px', overflow: 'hidden' }}>{banquets[key].address}</p>
// //                                             <p className="card-text" style={{ height: '48px' }}>Price : {banquets[key].price} per plate</p>
// //                                             <Savebtn authUser={auth} id={key} />
// //                                         </div>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     ))}
// //                 </div>
// //                 <div className="row mb-2 mt-2 d-flex justify-content-center" style={{ width: '100%' }}>
// //                     <Link className="btn btn-primary" to={"/banquets/" + city + "/" + (parseInt(page, 10) + 1)}>next</Link>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// // export default withFirebase(ShowBanquets);







// // // import React, { useState, useEffect } from 'react';
// // // import { Link } from "react-router-dom";
// // // import { withFirebase } from "./Firebase";
// // // import Savebtn from './Savebtn';
// // // import CityCover from './citycover';

// // // const ShowBanquets = ({ firebase, city, page }) => {
// // //     const [banquets, setBanquets] = useState({});
// // //     const [auth, setAuth] = useState(null);

// // //     useEffect(() => {
// // //         const authStateChanged = firebase.auth.onAuthStateChanged(authUser => {
// // //             setAuth(authUser);
// // //         });

// // //         return () => authStateChanged();
// // //     }, [firebase.auth]);

// // //     useEffect(() => {
// // //         fetch("https://wp-database-d7c6f.firebaseio.com/public/weddingz/banquets/" + city + "/page" + page + ".json")
// // //             .then(res => res.json())
// // //             .then(res => {
// // //                 setBanquets(res);
// // //             });

// // //         return () => {
// // //             // Clean up if needed
// // //         };
// // //     }, [city, page]);

// // //     return (
// // //         <div>
// // //             <CityCover city={city} />
// // //             <div className="md-form active-pink-4 mt-0 mx-5">
// // //                 <input className="form-control" type="text" placeholder="Search" aria-label="Search" style={{ borderTop: '0px', borderLeft: '0px', borderRight: '0px', borderColor: 'pink' }} />
// // //             </div>
// // //             <div>
// // //                 <div id="banq" className="container-fluid row justify-content-center">
// // //                     {Object.keys(banquets).map((key) => (
// // //                         <div className="col-sm-12 col-xl-6 h-100 my-3" key={key}>
// // //                             <div className="card text-dark bg-light shadow" style={{ border: '0px', overflow: 'hidden' }}>
// // //                                 <div className="row d-flex no-gutters">
// // //                                     <div className="col-sm-12 col-md-4" style={{ backgroundImage: "url('" + banquets[key].image + "')", backgroundSize: 'cover', minHeight: '271px' }}></div>
// // //                                     <div className="col-sm-12 col-md-8" style={{ height: '350px' }}>
// // //                                         <div className="card-header bg-light" style={{ borderColor: 'pink' }}>
// // //                                             <h4>{banquets[key].name}</h4>
// // //                                         </div>
// // //                                         <div className="card-body">
// // //                                             <p className="card-text" style={{ height: '48px', overflow: 'hidden' }}>{banquets[key].desc}</p>
// // //                                             <p className="card-text" style={{ height: '48px', overflow: 'hidden' }}>{banquets[key].address}</p>
// // //                                             <p className="card-text" style={{ height: '48px' }}>Price : {banquets[key].price} per plate</p>
// // //                                             <Link className="btn btn-success" to={`/booking-details/${key}`}>Book Now</Link>

// // //                                             <Savebtn authUser={auth} id={key} />
// // //                                         </div>
// // //                                     </div>
// // //                                 </div>
// // //                             </div>
// // //                         </div>
// // //                     ))}
// // //                 </div>
// // //                 <div className="row mb-2 mt-2 d-flex justify-content-center" style={{ width: '100%' }}>
// // //                     <Link className="btn btn-primary" to={"/banquets/" + city + "/" + (parseInt(page, 10) + 1)}>Next</Link>
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // }

// // // export default withFirebase(ShowBanquets);



// // // import React, { useState, useEffect } from 'react';
// // // import { Link } from "react-router-dom";
// // // import { withFirebase } from "./Firebase";
// // // import Savebtn from './Savebtn';
// // // import CityCover from './citycover';

// // // const ShowBanquets = ({ firebase, city, page }) => {
// // //     const [banquets, setBanquets] = useState({});
// // //     const [auth, setAuth] = useState(null);

// // //     useEffect(() => {
// // //         const authStateChanged = firebase.auth.onAuthStateChanged(authUser => {
// // //             setAuth(authUser);
// // //         });

// // //         return () => authStateChanged();
// // //     }, [firebase.auth]);

// // //     useEffect(() => {
// // //         fetch("https://wp-database-d7c6f.firebaseio.com/public/weddingz/banquets/" + city + "/page" + page + ".json")
// // //             .then(res => res.json())
// // //             .then(res => {
// // //                 setBanquets(res);
// // //             });

// // //         return () => {
// // //             // Clean up if needed
// // //         };
// // //     }, [city, page]);

// // //     return (
// // //         <div>
// // //             <CityCover city={city} />
// // //             <div className="md-form active-pink-4 mt-0 mx-5">
// // //                 <input className="form-control" type="text" placeholder="Search" aria-label="Search" style={{ borderTop: '0px', borderLeft: '0px', borderRight: '0px', borderColor: 'pink' }} />
// // //             </div>
// // //             <div>
// // //                 <div id="banq" className="container-fluid row justify-content-center">
// // //                     {Object.keys(banquets).map((key) => (
// // //                         <div className="col-sm-12 col-xl-6 h-100 my-3" key={key}>
// // //                             <div className="card text-dark bg-light shadow" style={{ border: '0px', overflow: 'hidden' }}>
// // //                                 <div className="row d-flex no-gutters">
// // //                                     <div className="col-sm-12 col-md-4" style={{ backgroundImage: "url('" + banquets[key].image + "')", backgroundSize: 'cover', minHeight: '271px' }}></div>
// // //                                     <div className="col-sm-12 col-md-8" style={{ height: '350px' }}>
// // //                                         <div className="card-header bg-light" style={{ borderColor: 'pink' }}>
// // //                                             <h4>{banquets[key].name}</h4>
// // //                                         </div>
// // //                                         <div className="card-body">
// // //                                             <p className="card-text" style={{ height: '48px', overflow: 'hidden' }}>{banquets[key].desc}</p>
// // //                                             <p className="card-text" style={{ height: '48px', overflow: 'hidden' }}>{banquets[key].address}</p>
// // //                                             <p className="card-text" style={{ height: '48px' }}>Price : {banquets[key].price} per plate</p>
// // //                                             <Link to={`/booking-details/${key}`} className="btn btn-success">Book Now</Link> {/* Redirect to BookingDetails */}
// // //                                             <Savebtn authUser={auth} id={key} />
// // //                                         </div>
// // //                                     </div>
// // //                                 </div>
// // //                             </div>
// // //                         </div>
// // //                     ))}
// // //                 </div>
// // //                 <div className="row mb-2 mt-2 d-flex justify-content-center" style={{ width: '100%' }}>
// // //                     <Link className="btn btn-primary" to={"/banquets/" + city + "/" + (parseInt(page, 10) + 1)}>next</Link>
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // }

// // // export default withFirebase(ShowBanquets);

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { withFirebase } from "./Firebase";
// import Savebtn from "./Savebtn";
// import CityCover from "./citycover";

// const ShowBanquets = ({ firebase, city, page }) => {
//   const [banquets, setBanquets] = useState({});
//   const [auth, setAuth] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     const authStateChanged = firebase.auth.onAuthStateChanged((authUser) => {
//       setAuth(authUser);
//     });

//     return () => authStateChanged();
//   }, [firebase.auth]);

//   useEffect(() => {
//     fetch(
//       "https://wp-database-d7c6f.firebaseio.com/public/weddingz/banquets/" +
//         city +
//         "/page" +
//         page +
//         ".json"
//     )
//       .then((res) => res.json())
//       .then((res) => {
//         setBanquets(res);
//       });

//     return () => {
//     };
//   }, [city, page]);

//   const filterBanquets = () => {
//     if (searchQuery.trim() === "") {
//       return banquets;
//     }

//     return Object.keys(banquets)
//       .filter((key) => {
//         const banquet = banquets[key];
//         return (
//           banquet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           banquet.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           banquet.address.toLowerCase().includes(searchQuery.toLowerCase())
//         );
//       })
//       .reduce((filteredBanquets, key) => {
//         filteredBanquets[key] = banquets[key];
//         return filteredBanquets;
//       }, {});
//   };

//   const filteredBanquets = filterBanquets();

//   return (
//     <div>
//       <CityCover city={city} />
//       <div className="md-form active-pink-4 mt-0 mx-5">
//         <input
//           className="form-control"
//           type="text"
//           placeholder="Search"
//           aria-label="Search"
//           style={{
//             borderTop: "0px",
//             borderLeft: "0px",
//             borderRight: "0px",
//             borderColor: "pink",
//           }}
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </div>
//       <div>
//         <div id="banq" className="container-fluid row justify-content-center">
//           {Object.keys(filteredBanquets).map((key) => (
//             <div className="col-sm-12 col-xl-6 h-100 my-3" key={key}>
//               <div
//                 className="card text-dark bg-light shadow"
//                 style={{ border: "0px", overflow: "hidden" }}
//               >
//                 <div className="row d-flex no-gutters">
//                   <div
//                     className="col-sm-12 col-md-4"
//                     style={{
//                       backgroundImage:
//                         "url('" + filteredBanquets[key].image + "')",
//                       backgroundSize: "cover",
//                       minHeight: "271px",
//                     }}
//                   ></div>
//                   <div
//                     className="col-sm-12 col-md-8"
//                     style={{ height: "271px" }}
//                   >
//                     <div
//                       className="card-header bg-light"
//                       style={{ borderColor: "pink" }}
//                     >
//                       <h4>{filteredBanquets[key].name}</h4>
//                     </div>
//                     <div className="card-body">
//                       <p
//                         className="card-text"
//                         style={{ height: "48px", overflow: "hidden" }}
//                       >
//                         {filteredBanquets[key].desc}
//                       </p>
//                       <p
//                         className="card-text"
//                         style={{ height: "48px", overflow: "hidden" }}
//                       >
//                         {filteredBanquets[key].address}
//                       </p>
//                       <p className="card-text" style={{ height: "48px" }}>
//                         Price : {filteredBanquets[key].price} per plate
//                       </p>
//                       <Savebtn authUser={auth} id={key} />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div
//           className="row mb-2 mt-2 d-flex justify-content-center"
//           style={{ width: "100%" }}
//         >
//           <Link
//             className="btn btn-primary"
//             to={"/banquets/" + city + "/" + (parseInt(page, 10) + 1)}
//           >
//             next
//           </Link>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default withFirebase(ShowBanquets);




import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { withFirebase } from "./Firebase";
import Savebtn from './Savebtn';
import CityCover from './citycover';

const ShowBanquets = ({ firebase, city, page }) => {
  const [banquets, setBanquets] = useState({});
  const [auth, setAuth] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const authStateChanged = firebase.auth.onAuthStateChanged(authUser => {
      setAuth(authUser);
    });

    return () => authStateChanged();
  }, [firebase.auth]);

  useEffect(() => {
    fetch(`https://wp-database-d7c6f.firebaseio.com/public/weddingz/banquets/${city}/page${page}.json`)
      .then(res => res.json())
      .then(res => {
        setBanquets(res);
      });

    return () => {
      // Clean up if needed
    };
  }, [city, page]);

  const filterBanquets = () => {
    if (searchQuery.trim() === "") {
      return banquets;
    }

    return Object.keys(banquets)
      .filter((key) => {
        const banquet = banquets[key];
        return (
          banquet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          banquet.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
          banquet.address.toLowerCase().includes(searchQuery.toLowerCase())
        );
      })
      .reduce((filteredBanquets, key) => {
        filteredBanquets[key] = banquets[key];
        return filteredBanquets;
      }, {});
  };

  const filteredBanquets = filterBanquets();

  const handleBookingClick = () => {
    // Redirect to booking page
    console.log('Redirecting to booking page...');
  };

  return (
    <div>
      <CityCover city={city} />
      <div className="md-form active-pink-4 mt-0 mx-5">
        <input
          className="form-control"
          type="text"
          placeholder="Search"
          aria-label="Search"
          style={{
            borderTop: '0px',
            borderLeft: '0px',
            borderRight: '0px',
            borderColor: 'pink'
          }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div>
        <div id="banq" className="container-fluid row justify-content-center">
          {Object.keys(filteredBanquets).map((key) => (
            <div className="col-sm-12 col-xl-6 h-100 my-3" key={key}>
              <div className="card text-dark bg-light shadow" style={{ border: '0px', overflow: 'hidden' }}>
                <div className="row d-flex no-gutters">
                  <div className="col-sm-12 col-md-4" style={{ backgroundImage: `url('${filteredBanquets[key].image}')`, backgroundSize: 'cover', minHeight: '271px' }}></div>
                  <div className="col-sm-12 col-md-8" style={{ height: '271px' }}>
                    <div className="card-header bg-light" style={{ borderColor: 'pink' }}>
                      <h4>{filteredBanquets[key].name}</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text" style={{ height: '48px', overflow: 'hidden' }}>{filteredBanquets[key].desc}</p>
                      <p className="card-text" style={{ height: '48px', overflow: 'hidden' }}>{filteredBanquets[key].address}</p>
                      <p className="card-text" style={{ height: '48px' }}>Price : {filteredBanquets[key].price} per plate</p>
                      <Savebtn authUser={auth} id={key} />
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row mb-2 mt-2 d-flex justify-content-center" style={{ width: '100%' }}>
          <Link className="btn btn-primary" to={`/banquets/${city}/${parseInt(page, 10) + 1}`}>Next</Link>
        </div>
      </div>
    </div>
  );
}

export default withFirebase(ShowBanquets);
