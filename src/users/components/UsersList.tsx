import React from "react";
import { UserListProps } from "../interfaces/user.interface.ts";

import UserItems from "./UserItem.tsx";
import Card from "../../shared/components/UIElement/Card/Card.tsx";

import "./UsersList.css";

const UserList = (props: UserListProps) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No User Found</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map((user) => (
        <UserItems key={user.id} {...user} />
      ))}
    </ul>
  );
};

export default UserList;
