import { useEffect, useState } from "react";
import UserList from "../components/UsersList.tsx";
import ErrorModal from "../../shared/components/UIElement/ErrorModal/ErrorModal.tsx";
import LoadingSpinner from "../../shared/components/UIElement/Spinner/LoadingSpinner.tsx";
import { useHttpClient } from "../../shared/hooks/http-hook.tsx";

const Users = () => {
  const [loadedUsers, setLoadedUsers] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:8000/api/users"
        );

        setLoadedUsers(responseData.users);
      } catch (error) {}
    };
    fetchUsers();
  }, [sendRequest]);

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedUsers && <UserList items={loadedUsers} />}
    </>
  );
};

export default Users;
