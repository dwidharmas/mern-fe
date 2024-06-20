export type UserType = {
  id: string,
  name: string,
  places: number,
  image?: string,
}

export type UserListProps = {
  items: UserType[]
}