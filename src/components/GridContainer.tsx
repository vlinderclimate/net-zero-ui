import React from "react"
import MuiGrid, { GridProps as MuiGridProps } from "@mui/material/Grid"

export interface GridContainerProps extends Omit<MuiGridProps, "container"> {}

const GridContainer: React.FC<GridContainerProps> = ({ children, ...props }) => {
  return (
    <MuiGrid spacing={{ xs: "10px", md: 3 }} direction={{ xs: "row" }} container {...props}>
      {children}
    </MuiGrid>
  )
}

export default GridContainer
