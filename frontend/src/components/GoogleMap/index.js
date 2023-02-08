import React, { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
// import GoogleMapReact from 'google-map-react';
import "./GoogleMap.css"

export default function Home({latitude, longitude}) {
   
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyDC9jFgU_W8HjyX9IHYq5k28Mqo-QEv_Qg"
    })
    

    if (!isLoaded) return <h1>Loading Map...</h1>;
    

    return(
        <>
            <Map latitude={latitude} longitude={longitude}/>
        </>
    )
}

function Map({latitude, longitude}) {
    const LAT = latitude;
    const LONG = longitude;
    const center = useMemo(()=> ({lat: LAT, lng: LONG}), []);
    return <GoogleMap 
                zoom={15} 
                center={center} 
                mapContainerClassName="map-container"
                >
                    <Marker position={{ lat: LAT, lng: LONG}}/>
                </GoogleMap>;
}
