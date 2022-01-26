import React, { ReactNode } from "react"
import { styled } from "@mui/material/styles"
import MuiBox, { BoxProps } from "@mui/material/Box"

export interface ContainerProps extends BoxProps {
  children: string | number | JSX.Element | JSX.Element[] | ReactNode
}

const StyledContainer = styled(MuiBox)(({ theme }) => ({
  maxWidth: `calc(1160px + ${theme.spacing(10)})`,
  margin: "0 auto",
  paddingLeft: theme.spacing(5),
  paddingRight: theme.spacing(5),

  [theme.breakpoints.up(2080)]: {
    maxWidth: `calc(1400px + ${theme.spacing(10)})`
  },

  [theme.breakpoints.down("sm")]: {
    paddingLeft: "20px",
    paddingRight: "20px"
  }
}))

const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>
}

export default Container
