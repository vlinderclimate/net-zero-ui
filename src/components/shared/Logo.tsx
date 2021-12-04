import React from "react"
import { styled } from "@mui/material/styles"

export interface LogoProps {
  children?: JSX.Element | JSX.Element[]
}

const Logo = styled("div")(({ theme }) => ({
  display: "inline-block",
  fontSize: 0,
  lineHeight: 0
}))

const LogoComponent: React.FC<LogoProps> = ({ children, ...props }) => {
  return (
    <div style={{ fontSize: 0 }}>
      <Logo {...props} style={{ cursor: "pointer" }}>
        {children}
      </Logo>
    </div>
  )
}

export default LogoComponent
