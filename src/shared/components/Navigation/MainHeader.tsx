import React from "react";

import { ComponentProps as MainHeaderProps } from "../../interfaces/global.interface";
import "./MainHeader.css"

const MainHeader = (props: MainHeaderProps) => {
  return (
    <header className="main-header">
      {props.children}
    </header>
  )
}

export default MainHeader