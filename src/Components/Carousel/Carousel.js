import React, { useState } from 'react';
import './Carousel.css';
import { Fade } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import { Link } from 'react-router-dom';
import { allPlaces } from '../../FakeData/PlaceDetails';


const Carousel = () => {
    const [places, setPlaces] = useState(allPlaces);

    const properties = {
        autoplay: true,
        transitionDuration: 500,
        infinite: true,
    }
    
    return (
        <>
            <div className="slide-container">
                <Fade {...properties}>
                    {
                        places.map(place => 
                            <div className="each-slide">
                                <div className="row align-items-center text-white">
                                    <div className="col-md-5 ml-auto">
                                        <h1>{place.placeName}</h1>
                                        <p>{place.placeDetail}</p>
                                        <Link to={`booking/${place.placeName.toLocaleLowerCase()}`}>
                                            <button className="btn">Book Now &nbsp;
                                            <i class="fas fa-long-arrow-alt-right"></i>
                                            </button>
                                        </Link>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <div>
                                            <Link to={`booking/${place.placeName.toLocaleLowerCase()}`}>
                                                <img className="d-block mx-auto" src={place.image} alt=""/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    )}
                </Fade>
            </div>
        </>
    );
};

export default Carousel;