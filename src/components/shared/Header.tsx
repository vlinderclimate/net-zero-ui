import React from "react"
import { styled, useTheme } from "@mui/material/styles"

import MuiBox from "@mui/material/Box"
import MuiBadge from "@mui/material/Badge"
import useMediaQuery from "@mui/material/useMediaQuery"

import Menu, { MenuItemProps } from "./Menu"
import Account, { AccountImage, AccountName } from "./Account"
import Container from "../Container"
import GridContainer from "../GridContainer"
import GridItem from "../GridItem"
import Button from "../Button"
import Icon from "../Icon"

export interface ActionButton {
  url: string
  title: string
}

export interface HeaderProps {
  children?: JSX.Element | JSX.Element[] | string
  logo: JSX.Element | JSX.Element[] | string
  userName?: string
  userAvatar?: string
  links?: MenuItemProps[]
  actionButton?: ActionButton
  cartHandler?: () => void
  userHandler?: () => void
}

export const HeaderBox = styled("header")(({ theme }) => ({
  margin: "0 auto 2px auto",
  padding: theme.spacing(4, 0),
  position: "absolute",
  zIndex: 100,
  width: "100%",

  [theme.breakpoints.down("lg")]: {
    padding: "12px 0",
    marginBottom: 0
  }
}))

const HeaderComponent: React.FC<HeaderProps> = ({
  children,
  logo,
  links,
  userName,
  userAvatar,
  actionButton,
  cartHandler,
  userHandler
}) => {
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
                  <MuiBadge color="error" variant="dot" sx={{ verticalAlign: "inherit" }}>
                    <Button
                      variant="text"
                      color="primary"
                      size="sm"
                      startIcon={<Icon iconKey="cart" size="sm" />}
                      onClick={cartHandler}
                    />
                  </MuiBadge>
                </MuiBox>
              )}
              <MuiBox sx={{ display: "flex" }} ml={{ xs: 2, md: 1 }}>
                {isMobile ? (
                  <Button variant="text" color="primary" size="sm" startIcon={<Icon iconKey="menu" size="md" />} />
                ) : (
                  <>
                    {userName && (
                      <Account>
                        <Button variant="outlined" color="secondary" size="sm" onClick={userHandler}>
                          {userAvatar && <AccountImage src={userAvatar} />}
                          <AccountName>{userName}</AccountName>
                        </Button>
                      </Account>
                    )}
                    {actionButton && (
                      <Button
                        variant="outlined"
                        size="sm"
                        color="secondary"
                        endIcon={<Icon iconKey="chevronRight" size="sm" />}
                        href={actionButton.url}
                        linkProps={{ target: "_blank", rel: "noopener noreferrer" }}
                      >
                        {actionButton.title}
                      </Button>
                    )}
                    {children}
                  </>
                )}
              </MuiBox>
            </MuiBox>
          </GridItem>
        </GridContainer>
      </Container>
    </HeaderBox>
  )
}

export default HeaderComponent
