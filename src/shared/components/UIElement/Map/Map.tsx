import React, { useEffect, useRef } from "react";

import "./Map.css";
import { GMapProps } from "./map.interface";

const GMap = (props: GMapProps) => {
  const mapRef = useRef(null);

  const { center, zoom } = props;

  useEffect(() => {
    const map = new (window as any).google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom,
    });

    new (window as any).google.maps.Marker({
      position: center,
      map: map,
    });
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default GMap;
