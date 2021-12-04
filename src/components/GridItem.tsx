import React from "react"
import MuiGrid, { GridProps as MuiGridProps } from "@mui/material/Grid"

export interface GridItemProps extends Omit<MuiGridProps, "container" | "item" | "spacing"> {}

const GridItem: React.FC<GridItemProps> = ({ children, ...props }) => {
  return (
    <MuiGrid item xs={12} {...props} sx={{ flexGrow: 1 }}>
      {children}
    </MuiGrid>
  )
}

export default GridItem
