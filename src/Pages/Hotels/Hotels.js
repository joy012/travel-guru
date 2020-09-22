import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import HotelDetail from '../../Components/HotelDetail/HotelDetail';
import Map from '../../Components/Map/Map';


const Hotels = () => {
    const placeName = useParams();
    const randomHotelNumber = Math.round(Math.random() * 100) + 100;
    return (
        <>
            <Header/>
            <div className="container mt-5">
                <h5 className="text-muted">{randomHotelNumber} hotels are available right now! </h5>
                <h3 className="text-lg-left text-center">Stay In {placeName.place}</h3>
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-7">
                        <HotelDetail/>
                    </div>
                    <div className="col-lg-5">
                        <Map placeName={placeName.place}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hotels;