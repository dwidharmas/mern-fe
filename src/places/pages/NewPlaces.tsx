import React from "react";

import Input from "../../shared/components/FormElements/Input/Input.tsx";
import "./NewPlace.css";

const NewPlaces = () => {
  return (
    <form className="place-form">
      <Input element="input" type="text" label="Title" />
    </form>
  );
};

export default NewPlaces;