import React from "react"
import { styled, Theme } from "@mui/material/styles"
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
  selected?: boolean
  $bubble?: boolean
  $rounded?: boolean
  disabled?: boolean
  size?: CardSizeVariants
}

interface StyledProps extends Omit<CardProps, "$bubble" | "$rounded"> {
  theme: Theme
  bubble?: boolean
  rounded?: boolean
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
  [CardSizeVariants.Medium, { y: 4, x: 5 }],
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

const StyledCard = styled(MuiCard)<CardProps>(
  ({
    color = CardColorVariants.Initial,
    size = CardSizeVariants.Medium,
    selected,
    bubble,
    rounded,
    theme
  }: StyledProps) => {
    const padding = sizeMap.get(size)
    const paddingMobile = sizeMobileMap.get(size)
    const bg = backgroundMap.get(color)

    return {
      padding: padding ? theme.spacing(padding.y, padding.x) : "0",
      marginBottom: theme.spacing(0.8),
      color: colorMap.get(color),
      backgroundColor: backgroundMap.get(color),
      position: "relative",
      overflow: "visible",
      boxShadow: selected ? `inset 0 0 0 3px ${theme.palette.primary.main}` : "none",
      borderRadius: rounded ? theme.borders.radius.m : 0,
      zIndex: 1,

      "&:after": {
        content: "''",
        top: -1,
        left: -24,
        position: "absolute",
        border: "0px solid",
        width: "38px",
        height: "26px",
        backgroundColor: "transparent",
        borderBottomLeftRadius: "50%",
        borderBottomRightRadius: "50%",
        boxShadow: bg ? `-14px 9px 0px 3px ${bg}` : "none",
        transform: "rotateY(180deg)",
        zIndex: 0,
        display: bubble ? "block" : "none"
      },

      [theme.breakpoints.down("sm")]: {
        padding: paddingMobile ? theme.spacing(paddingMobile.y, paddingMobile.x) : "0",
        borderRadius: rounded ? theme.borders.radius.s : 0
      }
    }
  }
)

const Overlay = styled("div")<CardProps>(() => {
  return {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    zIndex: 10
  }
})

const Card: React.FC<CardProps> = ({
  children,
  color,
  size,
  selected,
  disabled,
  $rounded = false,
  $bubble = false,
  ...props
}) => {
  const styleProps = { color, size, selected, disabled, $rounded, $bubble }

  return (
    <StyledCard {...styleProps} {...props}>
      {children}
      {disabled && <Overlay />}
    </StyledCard>
  )
}

export default Card
