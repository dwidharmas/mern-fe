import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList.tsx";
import { PlaceItemType } from "../interfaces/places.interface";

const DUMMY_PLACES: PlaceItemType[] = [
  {
    id: "p1",
    title: "EMPIRE STATE BUILDING",
    description: "One of the most famouse sky scrapper in the world",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg",
    address: "Fifth Avenue (351) 34th Street (west, 20)",
    locations: {
      lat: 40.748817,
      lng: -73.985428,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "EMPIRE STATE BUILDING",
    description: "One of the most famouse sky scrapper in the world",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg",
    address: "Fifth Avenue (351) 34th Street (west, 20)",
    locations: {
      lat: 40.748817,
      lng: -73.985428,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const { uid }: { uid: string } = useParams();

  const places = DUMMY_PLACES.filter((place) => place.creator === uid);

  return <PlaceList items={places} />;
};

export default UserPlaces;
