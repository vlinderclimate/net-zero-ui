import React from "react"
import { styled, Theme } from "@mui/material/styles"
import MuiTooltip, { TooltipProps as MuiTooltipProps, tooltipClasses } from "@mui/material/Tooltip"

import { borderRadius } from "../theme/borders"

export enum TooltipSizeVariants {
  Small = "small",
  Medium = "medium",
  Large = "large"
}

export interface TooltipProps extends Omit<MuiTooltipProps, "disabled"> {
  size: TooltipSizeVariants
}

interface StyledProps extends TooltipProps {
  theme?: Theme
}

export const sizeMap = new Map<TooltipSizeVariants, { x: number; y: number }>([
  [TooltipSizeVariants.Small, { y: 0.5, x: 2 }],
  [TooltipSizeVariants.Medium, { y: 1, x: 3 }],
  [TooltipSizeVariants.Large, { y: 2.6, x: 4 }]
])

const StyledTooltip = styled(({ className, size, ...props }: TooltipProps) => (
  <MuiTooltip {...props} classes={{ popper: className }} />
))(({ theme, size }: StyledProps) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    padding: theme?.spacing(sizeMap.get(size)?.y ?? 0, sizeMap.get(size)?.x ?? 0),
    borderRadius: size === TooltipSizeVariants.Small ? borderRadius.primary : borderRadius.xlarge
  }
}))

const Tooltip: React.FC<TooltipProps> = ({ children, ...props }) => {
  return <StyledTooltip {...props}>{children}</StyledTooltip>
}

export default Tooltip
