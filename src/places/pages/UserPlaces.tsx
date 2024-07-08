import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHttpClient } from "../../shared/hooks/http-hook.tsx";

import PlaceList from "../components/PlaceList.tsx";
import ErrorModal from "../../shared/components/UIElement/ErrorModal/ErrorModal.tsx";
import LoadingSpinner from "../../shared/components/UIElement/Spinner/LoadingSpinner.tsx";

const UserPlaces = () => {
  const { uid }: { uid: string } = useParams();
  const [loadedPlaces, setLoadedPlaces] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:8000/api/places/user/${uid}`
        );
        setLoadedPlaces(responseData.places);
      } catch (error) {}
    };
    fetchPlaces();
  }, [sendRequest, uid]);

  const placeDeletedHandler = (deletedPlace: string) => {
    setLoadedPlaces((prevPlace: any) =>
      prevPlace.filter((place) => place.id !== deletedPlace)
    );
  };

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedPlaces && (
        <PlaceList items={loadedPlaces} onDeletePlace={placeDeletedHandler} />
      )}
    </>
  );
};

export default UserPlaces;
