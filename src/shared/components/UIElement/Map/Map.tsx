import React, { useEffect, useRef } from "react";

import "./Map.css";
import { GMapProps } from "./map.interface";
import { Loader } from "@googlemaps/js-api-loader";
import GOOGLE_MAP_KEY from "./maps-key.ts";

const GMap = (props: GMapProps) => {
  const mapRef = useRef(null);

  const { center, zoom } = props;

  useEffect(() => {
    const loader = new Loader({
      apiKey: GOOGLE_MAP_KEY,
      version: "weekly",
    });

    loader
      .importLibrary("maps")
      .then((google) => {
        new google.Map(
          document.getElementById("google-map-id") as HTMLElement,
          {
            center: center,
            zoom: zoom,
          }
        );
      })
      .catch((e) => {
        // do something
      });
  }, [center, zoom]);

  // useEffect(() => {
  //   const map = new (window as any).google.maps.Map(mapRef.current, {
  //     center: center,
  //     zoom: zoom,
  //   });

  //   new (window as any).google.maps.Marker({
  //     position: center,
  //     map: map,
  //   });
  // }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      id="google-map-id"
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default GMap;
