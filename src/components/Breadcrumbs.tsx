import React from "react"
import { styled, Theme } from "@mui/material/styles"
import MuiBreadcrumbs, { BreadcrumbsProps as MuiBreadcrumbsProps } from "@mui/material/Breadcrumbs"

import Icon from "./Icon"

export interface BreadcrumbsProps extends MuiBreadcrumbsProps {}

interface StyledProps extends BreadcrumbsProps {
  theme?: Theme
}

const StyledBreadcrumbs = styled(MuiBreadcrumbs)(({ theme }: StyledProps) => ({
  padding: 0
}))

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ children, ...props }) => {
  return (
    <StyledBreadcrumbs separator={<Icon iconKey="chevronRight" size="sm" />} aria-label="breadcrumb" {...props}>
      {children}
    </StyledBreadcrumbs>
  )
}

export default Breadcrumbs
