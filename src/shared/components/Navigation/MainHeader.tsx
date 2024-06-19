import React from "react";

import { MainHeaderProps } from "./navigation.interface";
import "./MainHeader.css"

const MainHeader = (props: MainHeaderProps) => {
  return (
    <header className="main-header">
      {props.children}
    </header>
  )
}

export default MainHeader