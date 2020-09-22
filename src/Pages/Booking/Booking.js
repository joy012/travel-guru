import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import BookingForm from '../../Components/BookingForm/BookingForm';
import { useParams } from 'react-router-dom';
import { allPlaces } from '../../FakeData/PlaceDetails';

const Booking = () => {
    const [place, setPlace] = useState({});
    const placeName = useParams();

    useEffect(() => {
        setPlace(allPlaces.find(place => (place.placeName) === (placeName.name).toUpperCase()));
    }, [])
 
    return (
        <div className='App-background'>
          <Header/>
          <div className="container mt-5">
              <div className="row justify-content-center align-items-center">
                  <div className="col-md-7 text-white">
                      <h1>{place.placeName}</h1>
                      <p>{place.placeDetail}</p>
                  </div>
                  <div className="col-md-5">
                      <BookingForm placeName={place.placeName}/>
                  </div>
              </div>
          </div> 
        </div>
    );
};

export default Booking;