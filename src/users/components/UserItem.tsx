import React from "react";
import { UserType } from "../interfaces/user.interface.ts";
import { Link } from "react-router-dom";

import Avatar from "../../shared/components/UIElement/Avatar/Avatar.tsx";
import Card from "../../shared/components/UIElement/Card/Card.tsx";
import "./UserItem.css";

const UserItems = (props: UserType) => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${props.id}/places`}>
          <div className="user-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.places} {props.places === 1 ? "place" : "places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItems;
