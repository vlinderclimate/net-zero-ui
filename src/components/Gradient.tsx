import React from "react"
import { styled } from "@mui/material/styles"

export interface GradientProps {
  baseColor: string
  sphereColor: string
}
interface StyledGradientProps {
  $baseColor: string
  $sphereColor: string
}

const StyledGradient = styled("div")<StyledGradientProps>(({ $baseColor, $sphereColor }) => ({
  margin: 0,
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: $baseColor,
  overflow: "hidden",

  "&:after": {
    content: "''",
    position: "absolute",
    top: "30%",
    left: "-30%",
    width: "100%",
    height: "100%",
    filter: "blur(56.25px)",
    backgroundColor: $sphereColor
  }
}))

const Gradient: React.FC<GradientProps> = (props) => {
  const { children, baseColor, sphereColor, ...rest } = props
  return <StyledGradient $baseColor={baseColor} $sphereColor={sphereColor} {...rest} />
}

export default Gradient
