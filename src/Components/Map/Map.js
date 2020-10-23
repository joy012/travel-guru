import React from 'react';
import Iframe from '@trendmicro/react-iframe';



const Map = ({ placeName }) => {

    if(placeName === 'SUNDARBAN'){
        placeName = 'SUNDARBAN ECO RESORT LTD';
    }
   
    return (
        <Iframe
            src={`https://maps.google.com/maps?q=${placeName},BANGLADESH&t=&z=16&ie=UTF8&iwloc=&output=embed`}
            style={{height: '100vh', width: '100%', borderRadius: '20px'}}
        />
    )
};

export default Map;