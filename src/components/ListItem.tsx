import React from "react"
import { styled } from "@mui/material/styles"
import MuiListItem, { ListItemProps as MuiListItemProps } from "@mui/material/ListItem"

export interface ListItemProps extends MuiListItemProps {
  as?: any
}

const StyledListItem = styled(MuiListItem)<ListItemProps>(({ theme }) => ({
  marginBottom: theme?.spacing(1.5),
  fontSize: theme?.typography.fontSizeXs2,
  lineHeight: theme?.typography.lineHeightXs4,

  ".MuiLink-root": {
    color: theme.palette.alpha[700],
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    transition: theme.transitions.create(["color"]),
    "&:hover": {
      color: theme.palette.text.primary,
      ".icon path": {
        fill: theme.palette.text.primary
      }
    }
  },
  [theme?.breakpoints.up("md")]: {
    "&:last-child": {
      marginBottom: 0
    }
  },
  [theme?.breakpoints.down("sm")]: {
    fontSize: theme?.typography.fontSizeXs4
  }
}))

const ListItem: React.FC<ListItemProps> = ({ as, ...props }) => {
  return <StyledListItem as={as} {...props} />
}

export default ListItem
