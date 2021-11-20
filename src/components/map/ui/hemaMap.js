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
        {/* BBHF */}
        <a 
        target="_blank"
        href="https://www.google.com/maps/dir/?api=1&destination=39.616270,-79.931580">
        <img
        height={30}
          lat={39.616270}
          lng={-79.931580}
          src={Pin}
          text="My Marker"
        />
        </a>
        {/* steel city */}
        <img
        height={30}
          lat={40.484000}
          lng={-79.948630}
          src={Pin}
        />
         {/* columbus saber academy */}
         <img
        height={30}
          lat={40.114510}
          lng={-82.999310}
          src={Pin}
        />

         {/* Historical Combat Studies */}
         <img
        height={30}
          lat={44.901371}
          lng={-75.065529}
          src={Pin}
        />

        {/* California Sabre */}
        <img
        height={30}
          lat={36.790810}
          lng={-119.852000}
          src={Pin}
        />

        {/* Texas Armizare */}
        <img
        height={30}
          lat={29.7957932}
          lng={-95.4841621}
          src={Pin}
        />

        {/* Colorado Frontier Fighters */}
        <img
        height={30}
          lat={38.9251692}
          lng={-104.7923177}
          src={Pin}
        />
      </GoogleMapReact>
    </div>
    )
    :
    ('LOADING')
  );
}