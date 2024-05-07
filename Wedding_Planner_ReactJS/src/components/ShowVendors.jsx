import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { withFirebase } from './Firebase';
import Savebtn from './Savebtn';

class ShowVendors extends Component {
    state = {
        banquets: {},
        auth: null,
    };

    componentDidMount() {
        this.props.firebase.auth.onAuthStateChanged(authUser => {
            authUser ? this.setState({ auth: authUser }) : this.setState({ auth: null });
        });
        this.fetchBanquetsData();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.page !== this.props.page || prevProps.city !== this.props.city) {
            this.fetchBanquetsData();
        }
    }

    fetchBanquetsData() {
        fetch(`https://wp-database-d7c6f.firebaseio.com/public/weddingz/${this.props.vendor}/${this.props.city}/page${this.props.page}.json`)
            .then(res => res.json())
            .then(banquets => this.setState({ banquets }));
    }

    render() {
        const { banquets, auth } = this.state;
        return (
            <div>
                {/* Search Bar */}
                <div className="row bg-secondary text-white">
                    {/* Location Search */}
                    <div className="col-md-4">
                        <div className="p-2 bg-secondary text-monospace">Location</div>
                        <div className="searchdiv">
                            <input id="searchlocation" type="text" className="searchbar" placeholder="search location" />
                        </div>
                    </div>
                    {/* Name Search */}
                    <div className="col-md-4">
                        <div className="p-2 bg-secondary text-monospace">Name</div>
                        <div className="searchdiv">
                            <input id="searchname" type="text" className="searchbar" placeholder="search by name" />
                        </div>
                    </div>
                    {/* Price Sort */}
                    <div className="col-md-4">
                        <div className="p-2 bg-secondary text-monospace">Price:</div>
                        <div className="btn-grp">
                            <button className="btn btn-secondary">High to Low</button>
                            <button className="btn btn-secondary">Low to High</button>
                        </div>
                    </div>
                </div>

                {/* Banquets */}
                <div id="banq">
                    {Object.keys(banquets).map((key) => (
                        <div key={key} className="card text-white bg-dark mt-3 ml-3 mr-3">
                            <div className="row no-gutters">
                                <div className="col-md-4 overflow-hidden">
                                    <img src={banquets[key].image} alt={banquets[key].name} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-header">
                                        <h4>{banquets[key].name}</h4>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">{banquets[key].desc}</p>
                                        <p className="card-text">{banquets[key].address}</p>
                                        <p className="card-text">Price : {banquets[key].price}</p>
                                        <Savebtn authUser={auth} id={key} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Next Page Button */}
                <div className="row mb-2 mt-2  d-flex justify-content-center">
                    <Link className="btn btn-primary" to={`/banquets/${this.props.city}/${parseInt(this.props.page, 10) + 1}`}>Next</Link>
                </div>
            </div>
        );
    }
}

export default withRouter(withFirebase(ShowVendors));










