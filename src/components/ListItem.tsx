import React from "react"
import { styled } from "@mui/material/styles"
import MuiListItem, { ListItemProps as MuiListItemProps } from "@mui/material/ListItem"

const StyledListItem = styled(MuiListItem)<MuiListItemProps>(({ theme }) => ({
  marginBottom: theme?.spacing(1),
  fontSize: theme?.typography.fontSizeXs3,

  ".MuiLink-root": {
    color: theme.palette.gray[500],
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    transition: theme.transitions.create(["color"]),
    "&:hover": {
      color: theme.palette.primary.main,
      ".icon path": {
        fill: theme.palette.primary.main
      }
    }
  },
  [theme?.breakpoints.down("md")]: {
    fontSize: theme?.typography.fontSizeXs5
  }
}))

const ListItem: React.FC<MuiListItemProps> = ({ ...props }) => {
  return <StyledListItem {...props} />
}

export default ListItem
