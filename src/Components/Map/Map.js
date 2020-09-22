import React, { useCallback, useState } from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { allPlaces } from '../../FakeData/PlaceDetails';

const containerStyle = {
    width: '500px',
    height: '620px',
    borderRadius: '12px'
};

const Map = ({placeName}) => {
    const place = allPlaces.find(place => place.placeName === placeName);
    const [map, setMap] = useState(null)

    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    return (
        <LoadScript
            googleMapsApiKey= "AIzaSyACF4giTrmoQJaPDhdi4gVtfmwmzhA2FK0" 
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={place.coordinate}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
            </GoogleMap>
        </LoadScript>
    )
};

export default Map;