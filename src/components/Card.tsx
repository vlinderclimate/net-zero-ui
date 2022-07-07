import React from "react"
import { styled } from "@mui/material/styles"
import MuiCard, { CardProps as MuiCardProps } from "@mui/material/Card"

import colors from "../theme/colors"

export enum CardSizeVariants {
  Initial = "initial",
  Small = "small",
  Medium = "medium",
  Large = "large"
}

export enum CardColorVariants {
  Initial = "initial",
  Muted = "muted",
  Primary = "primary",
  Secondary = "secondary",
  Positive = "positive",
  Negative = "negative"
}

export interface CardProps extends Omit<MuiCardProps, "color"> {
  color?: CardColorVariants
  bordered?: boolean
  rounded?: boolean | number
  disabled?: boolean
  size?: CardSizeVariants
}

interface StyledCardProps extends Omit<CardProps, "color" | "bordered" | "rounded" | "size"> {
  $color?: CardColorVariants
  $bordered?: boolean
  $rounded?: boolean | number
  $size?: CardSizeVariants
}

export const sizeMap = new Map<CardSizeVariants, { x: number; y: number }>([
  [CardSizeVariants.Initial, { y: 0, x: 0 }],
  [CardSizeVariants.Small, { y: 2, x: 3 }],
  [CardSizeVariants.Medium, { y: 3.75, x: 4 }],
  [CardSizeVariants.Large, { y: 10, x: 15 }]
])

export const sizeMobileMap = new Map<CardSizeVariants, { x: number; y: number }>([
  [CardSizeVariants.Initial, { y: 0, x: 0 }],
  [CardSizeVariants.Small, { y: 1, x: 2 }],
  [CardSizeVariants.Medium, { y: 2, x: 3 }],
  [CardSizeVariants.Large, { y: 3, x: 4 }]
])

export const colorMap = new Map<CardColorVariants, string>([
  [CardColorVariants.Initial, colors.text.primary],
  [CardColorVariants.Muted, colors.text.primary],
  [CardColorVariants.Primary, colors.text.primary],
  [CardColorVariants.Secondary, colors.text.inversePrimary],
  [CardColorVariants.Positive, colors.text.primary],
  [CardColorVariants.Negative, colors.text.primary]
])

export const backgroundMap = new Map<CardColorVariants, string>([
  [CardColorVariants.Initial, colors.gray.white],
  [CardColorVariants.Muted, colors.gray[200]],
  [CardColorVariants.Primary, colors.primary.main],
  [CardColorVariants.Secondary, colors.secondary.main],
  [CardColorVariants.Positive, colors.green.light],
  [CardColorVariants.Negative, colors.red.light]
])

const StyledCard = styled(MuiCard)<StyledCardProps>(
  ({ $color = CardColorVariants.Initial, $size = CardSizeVariants.Medium, $bordered, $rounded, theme }) => {
    const padding = sizeMap.get($size)
    const paddingMobile = sizeMobileMap.get($size)
    const bg = backgroundMap.get($color)

    return {
      padding: padding ? theme.spacing(padding.y, padding.x) : "0",
      marginBottom: theme.spacing(0.8),
      color: colorMap.get($color),
      backgroundColor: bg,
      position: "relative",
      overflow: "visible",
      boxShadow: $bordered ? `inset 0 0 0 1px ${theme.palette.gray[400]}` : "none",
      borderRadius: $rounded ? theme.borders.radius.m : 0,
      zIndex: 1,

      "a &": {
        boxShadow: $bordered ? `inset 0 0 0 1px ${theme.palette.gray[400]},  0px 2px 1px rgba(0, 0, 0, 0.04)` : "none"
      },

      [theme.breakpoints.down("sm")]: {
        padding: paddingMobile ? theme.spacing(paddingMobile.y, paddingMobile.x) : "0",
        borderRadius: $rounded ? theme.borders.radius.s : 0
      }
    }
  }
)

const Overlay = styled("div")<CardProps>(({ color = CardColorVariants.Initial }) => {
  const bg = backgroundMap.get(color)

  return {
    position: "absolute",
    left: -8,
    right: -8,
    top: -8,
    bottom: -8,
    backgroundColor: bg,
    opacity: 0.8,
    zIndex: 10
  }
})

const Card: React.FC<CardProps> = ({ children, color, size, bordered, disabled, rounded = false, ...props }) => {
  const styleProps = { $color: color, $size: size, $bordered: bordered, disabled, $rounded: rounded ? 1 : 0 }

  return (
    <StyledCard {...styleProps} {...props}>
      {children}
      {disabled && <Overlay color={color} />}
    </StyledCard>
  )
}

export default Card
