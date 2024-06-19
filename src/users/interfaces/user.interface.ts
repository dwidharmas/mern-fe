export type User = {
  id: string,
  name: string,
  places: number,
  image?: string,
}

export type UserListProps = {
  items: User[]
}