import React from 'react';
import { hotels } from '../../FakeData/PlaceDetails';

const HotelDetail = () => {
    return (
        <>
            {
                hotels.map(hotel =>
                    <div className="container">
                        <div className="row align-items-center justify-content-between my-4">
                            <div className="col-md-6">
                                <div>
                                    <img className="w-100" src={hotel.img} alt="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div>
                                    <h5>{hotel.name}</h5>
                                    <p className="text-muted">4 guests, 2 bedrooms, 2beds, 2 baths</p>
                                    <p className="text-muted">Wifi, Air Conditioning, Kitchen</p>
                                    <p className="text-muted">Cancellation flexibility available</p>
                                    <p>
                                        <i className="fa fa-star orange-text"></i>
                                        <span className="h6">{hotel.rating}</span> &nbsp; &nbsp;
                                    <span className="h5">${hotel.price}</span>/<span className='text-muted'>night  &nbsp; $167 total</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
        </>
    );
};

export default HotelDetail;