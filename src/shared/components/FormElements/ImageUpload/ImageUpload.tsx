import React, { useRef } from "react";

import Button from "../Button/Button.tsx";
import "./ImageUpload.css";

const ImageUpload = (props: any) => {
  const filePickerRef = useRef<HTMLInputElement | null>(null);

  const pickedHandler = (event: any) => {
    console.log("event ", event.target);
  };
  const pickImageHandler = () => {
    filePickerRef.current?.click();
  };

  return (
    <div className="form-control ">
      <input
        id={props.id}
        ref={filePickerRef}
        style={{ display: "none" }}
        type="file"
        accept=".jpeg,.jpg,.png"
        onChange={pickedHandler}
      />
      <div className={`image-upload ${props.center && "center"}`}>
        <div className="image-upload__preview">
          <img src="" alt="preview" />
        </div>
        <Button type="button" onClick={pickImageHandler}>
          PICK IMAGE
        </Button>
      </div>
    </div>
  );
};

export default ImageUpload;
