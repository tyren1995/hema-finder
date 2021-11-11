import React from "react";
import GoogleMapReact from 'google-map-react';
import HemaMapLogic from "../logic/hemaMapLogic";
import Pin from '../../../misc/location-pin.png' ;


export default function SimpleMap(){
    const {userLat,userLong} = HemaMapLogic();

  return (
    // Important! Always set the container height explicitly
    userLat && userLong ? (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD6Hak_dqyUSpKnqqQ-6OaKnNI-qSQasp8" }}
        defaultCenter={{lat: userLat,
            lng: userLong}}
        defaultZoom={11}
      >
        <img
        height={30}
          lat={userLat}
          lng={userLong}
          src={Pin}
        />
      </GoogleMapReact>
    </div>
    )
    :
    ('LOADING')
  );
}