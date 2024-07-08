import { LocationsType } from "../../shared/interfaces/global.interface";
import { UserType } from "../../users/interfaces/user.interface";

export type PlaceItemType = {
  id: string;
  image: string;
  title: string;
  description: string;
  address: string;
  creator: UserType["id"];
  location: LocationsType;
};

export type PlaceListType = {
  items: PlaceItemType[];
  onDeletePlace: (id: string) => void;
};

export interface PlaceItemProps {
  id: string;
  image: string;
  title: string;
  description: string;
  address: string;
  creatorId: UserType["id"];
  coordinates: LocationsType;
  onDelete: (id: string) => void;
}
