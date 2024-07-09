import React, { useEffect, useRef, useState } from "react";

import Button from "../Button/Button.tsx";
import "./ImageUpload.css";

const ImageUpload = (props: any) => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState<string | undefined>();
  const [isValid, setIsValid] = useState(false);

  const filePickerRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result as string);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickedHandler = (event: any) => {
    let pickedFile: any;
    let fileIsValid = isValid;
    if (event.target.files || event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
    props.onInput(props.id, pickedFile, fileIsValid);
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
          {previewUrl && <img src={previewUrl} alt="preview" />}
          {!previewUrl && <p>Please pick an image.</p>}
        </div>
        <Button type="button" onClick={pickImageHandler}>
          PICK IMAGE
        </Button>
      </div>
      {!isValid && <p>{props.errorText}</p>}
    </div>
  );
};

export default ImageUpload;
