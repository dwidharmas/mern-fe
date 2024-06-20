import React from "react"

export interface ButtonProps {
  size?: string
  inverse?: boolean
  danger?: boolean
  href?: string
  to?: string
  children?: React.ReactNode
  type?: "button" | "submit" | "reset" | undefined
  onClick?: React.ReactEventHandler
  disabled?: boolean
}