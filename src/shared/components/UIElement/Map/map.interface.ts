import {
  ComponentProps,
  LocationsType,
} from "../../../interfaces/global.interface";

export interface GMapProps extends ComponentProps {
  center: LocationsType;
  zoom: number;
}
