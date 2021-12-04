import React, { memo } from "react"
import { styled } from "@mui/material/styles"
import MuiBox from "@mui/material/Box"
import MuiLink from "@mui/material/Link"
import MuiMenuItem from "@mui/material/MenuItem"

export interface MenuItemProps {
  url: string
  title: string
}

export interface MenuProps {
  list?: MenuItemProps[]
}

const MenuBox = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  height: "100%"
}))

const MenuItem = styled(MuiMenuItem)(({ theme }) => ({
  backgroundColor: "transparent",
  padding: 0,
  marginRight: theme.spacing(1),

  "&:hover": {
    backgroundColor: "transparent"
  },
  "& .MuiLink-root": {
    padding: theme.spacing(1, 2.5),
    fontSize: theme.typography.fontSizeXs2,
    fontWeight: theme.typography.fontWeightMedium,
    transition: theme.transitions.create(["color"]),

    "&:hover": {
      color: theme.palette.primary.main,
      ".icon path": {
        fill: theme.palette.primary.main
      }
    },
    [theme.breakpoints.down("lg")]: {
      padding: theme.spacing(0.5, 1.5)
    }
  },
  "& .MuiButton-text": {
    "&:hover": {
      color: theme.palette.primary.main
    }
  }
}))

const MenuComponent: React.FC<MenuProps> = ({ list }) => {
  return (
    <MenuBox>
      {list?.map((item: any, i: number) => (
        <MenuItem key={i}>
          <MuiLink href={item.link}>{item.title}</MuiLink>
        </MenuItem>
      ))}
    </MenuBox>
  )
}

export default memo(MenuComponent)
