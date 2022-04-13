import React from "react"
import { styled } from "@mui/material/styles"
import MuiBox from "@mui/material/Box"

import Container from "../Container"

export interface SectionProps {
  children?: JSX.Element | JSX.Element[] | string | number | Element[]
  noContainer?: boolean
  noPadding?: boolean
  topIndent?: boolean
  sx?: object
  id?: string
}

export const SectionBox = styled(MuiBox)<SectionProps>(({ theme, noPadding, topIndent }) => ({
  margin: "0 auto",
  padding: noPadding ? 0 : topIndent ? theme.spacing(18, 0, 7) : theme.spacing(7, 0),
  overflow: "hidden",
  position: "relative",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",

  "&:last-child": {
    paddingBottom: "0 !important"
  },
  [theme.breakpoints.down("md")]: {
    padding: noPadding ? 0 : topIndent ? theme.spacing(11, 0, 4) : theme.spacing(5, 0)
  },
  [theme.breakpoints.down("sm")]: {
    padding: noPadding ? 0 : topIndent ? theme.spacing(6, 0, 2) : theme.spacing(3, 0)
  }
}))

const SectionComponent: React.FC<SectionProps> = ({
  children,
  noPadding = false,
  noContainer = false,
  topIndent = false,
  ...props
}) => {
  return (
    <SectionBox as="section" noPadding={noPadding} topIndent={topIndent} {...props}>
      {noContainer ? children : <Container>{children}</Container>}
    </SectionBox>
  )
}

export default SectionComponent
