// import React, { Component } from "react";
// import { withFirebase } from "./Firebase";

// class CityImg extends Component {
//     state= {
//         img:null,
//         loaded:null
//     }
//     constructor() {
//         super()
//         this.found = this.found.bind(this)
//         this.notfound = this.notfound.bind(this)
//     }
//     componentDidMount() {
//         console.log('fetchimg')
//         if(this.state.loaded==null) {
//             this.props.firebase.storage.ref().child('/cities/'+this.props.city+'Compressed.jpg').getDownloadURL().then(this.found,this.notfound)
//         }
//     }
//     found(url) {
//         console.log('found')
//         this.setState({img:url})
//     }
//     notfound() {
//         console.log('not found"'+this.props.city+'"')
//     }
//     render() {
//         if(this.state.img) 
//         return(
//             <div class="embed-responsive embed-responsive-16by9">
//             <img class="card-img-top embed-responsive-item" style={{objectFit:'cover'}} src={this.state.img}></img>
//             </div>
//         )
//         return (
//             <img class="card-img-top" src="..." alt="image loading"></img>
//         )
//     }
// }
// export default withFirebase(CityImg)

import React, { useState, useEffect } from "react";
import { withFirebase } from "./Firebase";

function CityImg({ firebase, city }) {
    const [img, setImg] = useState(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const url = await firebase.storage
                    .ref(`/cities/${city}Compressed.jpg`)
                    .getDownloadURL();
                setImg(url);
                setLoaded(true);
            } catch (error) {
                console.error(`Error fetching image for ${city}:`, error);
                setLoaded(true);
            }
        };

        if (!loaded) {
            fetchImage();
        }
    }, [firebase.storage, city, loaded]);

    if (!loaded) {
        return <div>Loading...</div>;
    }

    if (!img) {
        return <div>No image found for {city}</div>;
    }

    return (
        <div className="embed-responsive embed-responsive-16by9">
            <img className="card-img-top embed-responsive-item" style={{ objectFit: 'cover' }} src={img} alt={`Image of ${city}`} />
        </div>
    );
}

export default withFirebase(CityImg);
