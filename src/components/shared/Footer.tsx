import React from "react"
import { styled } from "@mui/material/styles"
import MuiBox from "@mui/material/Box"

import Container from "../Container"
import GridContainer from "../GridContainer"
import GridItem from "../GridItem"
import Typography from "../Typography"

import footerBg from "../../assets/images/footer-bg.jpg"

export interface FooterProps {
  children?: JSX.Element | JSX.Element[] | string
  logo?: JSX.Element | JSX.Element[] | string
  copyright?: string
  list?: any
  $footerBg?: string
}

export const FooterBox = styled("footer")<FooterProps>(({ theme, $footerBg = footerBg }) => ({
  margin: "0 auto",
  padding: theme.spacing(10, 0, 4),
  position: "relative",

  "&:before": {
    content: "''",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "300vh",
    pointerEvents: "none",
    zIndex: "-1",
    background: $footerBg ? `url(${$footerBg as string}) no-repeat center bottom / contain` : "none"
  },

  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(5, 0)
  }
}))

export const LogoColumn = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  height: "100%",

  [theme.breakpoints.down("md")]: {
    display: "grid",
    gridAutoFlow: "column",
    alignItems: "center",
    marginTop: theme.spacing(2)
  }
}))

const FooterComponent: React.FC<FooterProps> = ({ children, logo, copyright, $footerBg, list, ...props }) => {
  return (
    <FooterBox $footerBg={$footerBg} {...props}>
      <Container>
        <GridContainer justifyContent="space-between" direction={{ xs: "column-reverse", md: "row" }}>
          <GridItem xs={12} sm={3}>
            <LogoColumn>
              {logo}
              <Typography variant="description" color="secondary" component="div">
                {copyright}
              </Typography>
            </LogoColumn>
          </GridItem>
          <GridItem xs={12} sm={6}>
            <GridContainer>{children}</GridContainer>
          </GridItem>
        </GridContainer>
      </Container>
    </FooterBox>
  )
}

export default FooterComponent