import React from "react"
import { styled } from "@mui/material/styles"
import { animation } from "./Animate"

const StyledImage = styled("div")<{ size: "sm" | "md"; width?: number | string }>(({ theme, size = "sm", width }) => ({
  padding: size === "sm" ? theme.spacing(2.5) : theme.spacing(4.75, 6),
  border: "1px solid #EBEBEB",
  display: "inline-block",
  fontSize: 0,
  margin: "0 0 -1px -1px",
  maxWidth: "100%",
  textAlign: "center",
  width: width,
  ...animation,

  img: {
    maxWidth: "100%",
    objectFit: "contain"
  },
  "@media all and (max-width: 426.95px)": {
    padding: size === "sm" ? theme.spacing(1) : theme.spacing(3.75, 3)
  }
}))

export interface ImageBoxProps {
  children?: JSX.Element | JSX.Element[] | string | number
  size?: "sm" | "md"
  href?: string
  width?: any
  style?: any
}

const ImageBox: React.FC<ImageBoxProps> = ({ children, size = "sm", width, href, ...props }) => {
  return (
    <StyledImage
      size={size}
      width={width}
      {...(href && { as: "a", href: href, target: "_blank", rel: "noopener noreferrer" })}
      {...props}
    >
      {children}
    </StyledImage>
  )
}

export default ImageBox
