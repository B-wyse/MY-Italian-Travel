import React from "react";
import {useState, useEffect} from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";


function RentalsMap({ locations, google, setHighLight }) {
  const [center, setCenter] = useState();
  useEffect(() => {
    var arr = Object.keys(locations);
    var getLat = (key) => locations[key]["lat"];
    var avgLat = arr.reduce((a, c) => a + Number(getLat(c)), 0) / arr.length;

    var getLng = (key) => locations[key]["lng"];
    var avgLng = arr.reduce((a, c) => a + Number(getLng(c)), 0) / arr.length;

    setCenter({ lat: avgLat, lng: avgLng })

  }, [locations])

  return (
    <>
    {center && (
      <Map
        google={google}
        containerStyle={{
          width: "50vw",
          height: "calc(100vh - 135px)",
        }} 
        center={center}
        initialCenter={locations[0]}
        zoom={13}
        disableDefaultUI={true}
      >
        {locations.map((coords, i) => (
          <Marker position={coords} onClick={() => setHighLight(i)} />
        ))}
      </Map>
      )}
    </>
  );
          }
export default GoogleApiWrapper({
  apiKey: "AIzaSyAHboABldubIUGkJXIWIeCMgBz8E7GotAg"
})(RentalsMap);

