import { LocationsType } from "../../shared/interfaces/global.interface"
import { UserType } from "../../users/interfaces/user.interface"

export type PlaceItemType = {
  id: string
  imageUrl: string
  title: string
  description: string
  address: string
  creator: UserType['id']
  locations: LocationsType
}

export type PlaceListType = {
  items: PlaceItemType[]
}

export interface PlaceItemProps {
  id: string
  image: string
  title: string
  description: string
  address: string
  creatorId: UserType['id']
  coordinates: LocationsType
}
