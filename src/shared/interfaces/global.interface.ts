import React, { CSSProperties } from "react";

export interface ComponentProps {
  children?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}

export interface LocationsType {
  lat: number;
  long: number;
}
