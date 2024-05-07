import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { withFirebase } from './Firebase';
import CityImg from './cityimg';
import Savebtn from './Savebtn';

const Banquets = ({ firebase }) => {
    const { v: vendor, c: city, p: page } = useParams();
    const [cities, setCities] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        if (!cities) {
            fetch("https://wp-database-d7c6f.firebaseio.com/public/cities.json")
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                    setCities(res);
                });
        }

        if (vendor && city && page && !data) {
            fetch(`https://wp-database-d7c6f.firebaseio.com/public/weddingz/${vendor}/${city}/page${page}.json`)
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                    setData(res);
                });
        }
    }, [vendor, city, page, cities, data]);

    if (!vendor) {
        return (
            <div className="row">
                <div className="col-6">
                    <div className="card embed-responsive embed-responsive-16by9">
                        <img className="card-img-top embed-responsive-item" alt='photographer' src="https://cdn.mos.cms.futurecdn.net/gvQ9NhQP8wbbM32jXy4V3j.jpg" style={{ objectFit: 'cover' }} />
                        <Link className="card-img-overlay text-white" style={{ textDecoration: 'none', fontSize: '6vw' }} to="/vendors/photographers">Photographers</Link>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card embed-responsive embed-responsive-16by9">
                        <img
                            className="card-img-top embed-responsive-item"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3OAxQrix5sP9vIXUe0T0vXMU_mB6VlMvr7g&s"
                            style={{ width: '30%', height: 'auto', objectFit: 'cover' }}
                            alt=""
                        />
                        <Link className="card-img-overlay text-white" style={{ textDecoration: 'none', fontSize: '6vw' }} to="/vendors/bridalmakeup">
                            Bridal Makeup
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    if (!city && cities) {
        return (
            <div className="row justify-content-center bg-light">
                {Object.keys(cities).map(key => (
                    <div className="col-6 col-sm-4 col-md-3 mb-5" key={key}>
                        <div className="card text-center border-light shadow-sm bg-white rounded">
                            <Link to={`/vendors/${vendor}/${cities[key]}/1`} className="">
                                <CityImg city={cities[key]} />
                            </Link>
                            <div className="card-body justify-content-center">
                                <h5 className="card-title">{cities[key]}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    if (vendor && city && data) {
        return (
            <div>
                {Object.keys(data).map(key => (
                    <div key={key}>
                        <div className="card text-dark bg-white mt-3 ml-3 mr-3">
                            <div className="row no-gutters">
                                <div className="col-md-4 overflow-hidden">
                                    <img src={data[key].image} alt="" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-header">
                                        <h4>{data[key].name}</h4>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">{data[key].desc}</p>
                                        <p className="card-text">{data[key].address}</p>
                                        <p className="card-text">Price : {data[key].price}</p>
                                        <Savebtn authUser={firebase.auth.currentUser} id={key} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return <div>Loading ...</div>;
};

export default withFirebase(Banquets);
