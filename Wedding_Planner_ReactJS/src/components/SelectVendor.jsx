import React, { Component } from 'react';
import { withFirebase } from "./Firebase";
import { withRouter, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CityImg from './cityimg';

class SelectVendor extends Component {
    state = {
        cities: null,
    };

    componentDidMount() {
        if (!this.state.cities) {
            this.fetchCitiesData();
        }
    }

    fetchCitiesData() {
        fetch("https://wp-database-d7c6f.firebaseio.com/public/cities.json")
            .then(res => res.json())
            .then(cities => this.setState({ cities }));
    }

    render() {
        const { cities } = this.state;

        return (
            <div className="row justify-content-center bg-light">
                {cities ? (
                    Object.keys(cities).map((key) => (
                        <div key={key} className="col-6 col-sm-4 col-md-3 mb-5">
                            <div className="card text-center border-light shadow-sm bg-white rounded">
                                <CityImg city={cities[key]} />
                                <div className="card-body justify-content-center">
                                    <h5 className="card-title">{cities[key]}</h5>
                                    <Link to={`/banquets/${cities[key]}/1`} className="btn m-1 btn-primary">Banquets</Link>
                                    <Link to={`/banquets/${cities[key]}/1`} className="btn m-1 btn-primary">More</Link>
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
}

export default withRouter(withFirebase(SelectVendor));
