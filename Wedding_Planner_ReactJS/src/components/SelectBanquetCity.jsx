import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withFirebase } from './Firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CityImg from './cityimg';

function SelectBanquetCity({ firebase }) {
    const [cities, setCities] = useState(null);

    useEffect(() => {
        if (!cities) {
            fetch("https://wp-database-d7c6f.firebaseio.com/public/cities.json")
                .then(res => res.json())
                .then(res => setCities(res));
        }
    }, [cities]);

    return (
        <div className="row justify-content-center bg-light">
            {cities !== null ? (
                Object.keys(cities).map((key) => (
                    <div key={key} className="col-6 col-sm-4 col-md-3 mb-5">
                        <div className="card text-center border-light shadow-sm bg-white rounded">
                            <CityImg city={cities[key]} />
                            <div className="card-body justify-content-center">
                                <h5 className="card-title">{cities[key]}</h5>
                                <Link to={`/banquets/${cities[key]}/1`} className="btn m-1 btn-primary">Banquets</Link>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div>Loading Cities</div>
            )}
        </div>
    );
}

export default withFirebase(SelectBanquetCity);
