import React, { Component } from 'react'; 
import Picture from './../../data/headshot.png';
import './Headshot.css'

class Headshot extends Component {
    render() {
        return(
            <div className="img-container">
                <img className="headshot" src={Picture}
                    alt={"Me on route to the Grand Coulee Dam in Washington"} />
            </div>
        );
    }
}

export default Headshot;