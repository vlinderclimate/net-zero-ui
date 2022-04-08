import React from "react"
import { styled, useTheme } from "@mui/material/styles"

import MuiBox from "@mui/material/Box"
import MuiBadge from "@mui/material/Badge"
import useMediaQuery from "@mui/material/useMediaQuery"

import Menu, { MenuItemProps } from "./Menu"
import Container from "../Container"
import GridContainer from "../GridContainer"
import GridItem from "../GridItem"
import Button from "../Button"
import Icon from "../Icon"

export interface HeaderProps {
  children?: JSX.Element | JSX.Element[] | string
  logo: JSX.Element | JSX.Element[] | string
  links?: MenuItemProps[]
  isEmpty?: boolean
  cartHandler?: () => void
  menuHandler?: () => void
}

export const HeaderBox = styled("header")(({ theme }) => ({
  margin: "0 auto",
  padding: theme.spacing(2.5, 0),
  position: "absolute",
  zIndex: 100,
  width: "100%",

  ".Button-widthIcon.MuiButton-text": {
    padding: 0
  },

  [theme.breakpoints.down("lg")]: {
    padding: "12px 0",
    marginBottom: 0
  },
  [theme.breakpoints.down("md")]: {
    ".MuiBadge-badge": {
      top: theme.spacing(0.625),
      right: theme.spacing(0.625)
    }
  },
  [theme.breakpoints.down("sm")]: {
    "> .MuiBox-root": {
      paddingRight: theme.spacing(1.5)
    }
  }
}))

const HeaderComponent: React.FC<HeaderProps> = ({ children, logo, links, cartHandler, menuHandler, isEmpty }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <HeaderBox>
      <Container>
        <GridContainer justifyContent="space-between" alignItems="middle" direction={{ xs: "row", md: "row" }}>
          <GridItem xs={6} sm={3}>
            {logo}
          </GridItem>
          <GridItem xs={6} sm={9}>
            <MuiBox sx={{ display: "flex", alignItems: "center", height: "100%", justifyContent: "flex-end" }}>
              {!isMobile && <Menu list={links} />}
              {cartHandler && (
                <MuiBox sx={{ display: "flex", alignItems: "center" }}>
                  <MuiBadge color="error" variant="dot" sx={{ verticalAlign: "inherit" }} invisible={isEmpty}>
                    <Button
                      variant={isMobile ? "outlined" : "text"}
                      color="primary"
                      size={isMobile ? "md" : "sm"}
                      startIcon={<Icon iconKey="cart" size={isMobile ? "xs" : "md"} />}
                      onClick={cartHandler}
                      {...(!isMobile && { sx: { padding: "0 !important" } })}
                    />
                  </MuiBadge>
                </MuiBox>
              )}
              <MuiBox sx={{ display: "flex" }} ml={{ xs: 1.5, md: 1 }} gap={{ xs: 1.5, md: 0 }}>
                <>
                  {children}
                  {isMobile && (
                    <Button
                      variant="outlined"
                      color="primary"
                      size="md"
                      startIcon={<Icon iconKey="menu" size="xs" />}
                      onClick={menuHandler}
                    />
                  )}
                </>
              </MuiBox>
            </MuiBox>
          </GridItem>
        </GridContainer>
      </Container>
    </HeaderBox>
  )
}

export default HeaderComponent
