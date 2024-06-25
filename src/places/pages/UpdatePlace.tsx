import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PlaceItemType } from "../interfaces/places.interface";
import Input from "../../shared/components/FormElements/Input/Input.tsx";
import Button from "../../shared/components/FormElements/Button/Button.tsx";
import Card from "../../shared/components/UIElement/Card/Card.tsx";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook.tsx";
import "./PlaceForm.css";

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
    title: "EMP STATE BUILDING",
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

const UpdatePlace = () => {
  const { placeId }: { placeId: string } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace?.title,
            isValid: true,
          },
          description: {
            value: identifiedPlace?.description,
            isValid: true,
          },
        },
        true
      );
    }
    setIsLoading(false);
  }, [identifiedPlace, setFormData]);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find place.</h2>
        </Card>
      </div>
    );
  }

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log("updates ", formState.inputs);
  };
  if (isLoading) {
    return <div className="center">Loading . . .</div>;
  }
  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="input"
        type="text"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description at least 5 character"
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
