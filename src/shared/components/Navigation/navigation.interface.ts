import React from 'react'
import { ComponentProps } from "../../interfaces/global.interface";

export interface SideDrawerProps extends ComponentProps {
  show?: boolean
  onClick?: React.ReactEventHandler
}