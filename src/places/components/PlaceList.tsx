import React from "react";

import Card from "../../shared/components/UIElement/Card/Card.tsx";
import Button from "../../shared/components/FormElements/Button/Button.tsx";
import PlaceItem from "./PlaceItem.tsx";
import "./PlaceList.css";
import { PlaceItemType, PlaceListType } from "../interfaces/places.interface";

const PlaceList = (props: PlaceListType) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No places found. maybe create one?</h2>
          <Button to="/places/new">Share Place</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map((place: PlaceItemType) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.locations}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
