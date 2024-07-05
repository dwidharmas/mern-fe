export type UserType = {
  id: string;
  name: string;
  places: string[];
  image?: string;
};

export type UserListProps = {
  items: UserType[];
};
