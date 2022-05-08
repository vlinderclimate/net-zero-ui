import React, { ReactNode } from "react"
import { styled, Theme } from "@mui/material/styles"
import { ReadingColorVariant } from "../theme/colors"
import * as I from "../icons"

/**
 * Types
 */
export const IconKeyVariants = [
  "arrowRight",
  "arrowLeft",
  "attention",
  "check",
  "checkCircle",
  "chevronLeft",
  "chevronRight",
  "closeCircle",
  "infoCircle",
  "errorCircle",
  "link",
  "triangleRight",
  "triangleLeft",
  "triangleUp",
  "triangleDown",
  "copy",
  "close",
  "search",
  "instagram",
  "linkedIn",
  "medium",
  "reddit",
  "telegram",
  "twitter",
  "youTube",
  "fail",
  "plus",
  "minus",
  "helpCircle",
  "help",
  "lock",
  "delete",
  "download",
  "key",
  "edit",
  "expand",
  "collapse",
  "success",
  "loading",
  "sort",
  "update",
  "facebook",
  "cart",
  "menu",
  "verify",
  "showPassword",
  "hidePassword",
  "sprout",
  "collection",
  "user"
] as const

export type IconKeyVariant = typeof IconKeyVariants[number]

export const IconSizeVariants = ["xs1", "xs", "sm", "md", "lg"] as const

export type IconSizeVariant = typeof IconSizeVariants[number]
export interface IconProps {
  iconKey: IconKeyVariant
  className?: string
  size?: IconSizeVariant
  color?: ReadingColorVariant
  rotate?: number
}
export interface IconStyleProps {
  size?: IconSizeVariant
  color?: ReadingColorVariant
  rotate?: number
}

/**
 * Constants
 */
export const iconMap: Record<IconKeyVariant, ReactNode> = {
  checkCircle: <I.CheckCircle />,
  closeCircle: <I.CloseCircle />,
  infoCircle: <I.InfoCircle />,
  errorCircle: <I.ErrorCircle />,
  helpCircle: <I.HelpCircle />,
  help: <I.Help />,
  attention: <I.Attention />,
  lock: <I.Lock />,
  delete: <I.Delete />,
  twitter: <I.Twitter />,
  telegram: <I.Telegram />,
  medium: <I.Medium />,
  instagram: <I.Instagram />,
  linkedIn: <I.LinkedIn />,
  reddit: <I.Reddit />,
  youTube: <I.YouTube />,
  triangleRight: <I.TriangleRight />,
  triangleLeft: <I.TriangleLeft />,
  triangleUp: <I.TriangleUp />,
  triangleDown: <I.TriangleDown />,
  sort: <I.Sort />,
  download: <I.Download />,
  key: <I.Key />,
  edit: <I.Edit />,
  link: <I.Link />,
  expand: <I.Expand />,
  collapse: <I.Collapse />,
  copy: <I.Copy />,
  success: <I.Success />,
  fail: <I.Fail />,
  loading: <I.Loading />,
  check: <I.Check />,
  close: <I.Close />,
  plus: <I.Plus />,
  minus: <I.Minus />,
  chevronLeft: <I.ChevronLeft />,
  chevronRight: <I.ChevronRight />,
  arrowLeft: <I.ArrowLeft />,
  arrowRight: <I.ArrowRight />,
  search: <I.Search />,
  update: <I.Update />,
  facebook: <I.Facebook />,
  cart: <I.Cart />,
  menu: <I.Menu />,
  verify: <I.Verify />,
  sprout: <I.Sprout />,
  showPassword: <I.ShowPassword />,
  hidePassword: <I.HidePassword />,
  collection: <I.Collection />,
  user: <I.User />
}

export const iconSizeMap: Record<IconSizeVariant, number> = {
  xs1: 12,
  xs: 16,
  sm: 20,
  md: 24,
  lg: 32
}

export const iconMobileSizeMap: Record<IconSizeVariant, number> = {
  xs1: 12,
  xs: 16,
  sm: 16,
  md: 20,
  lg: 24
}

/**
 * Styles
 */
const StyledIcon = styled("i")<IconStyleProps>(({ size, color, rotate, theme }: { theme: Theme } & IconStyleProps) => ({
  display: "inline-block",
  verticalAlign: "middle",
  height: `${iconSizeMap[size ?? "xs"]}px`,
  textAlign: "center",
  color: "inherit",
  fontFamily: "inherit !important",

  [theme.breakpoints.down("sm")]: {
    height: `${iconMobileSizeMap[size ?? "sm"]}px`
  },

  "&:before": {
    display: "none !important"
  },

  "& svg": {
    display: "inline-block",
    verticalAlign: "top",
    height: "100%",
    color: "inherit",
    transform: `rotate(${rotate ?? 0}deg)`
  },

  "& path": {
    fill: theme.palette.icon[color ?? "currentColor"],
    transition: theme?.transitions.create(["fill"])
  }
}))

/**
 * Main
 */
const Icon: React.FC<IconProps> = ({ iconKey, className, size, color, rotate, ...props }) => {
  const stylingProps = { size, color, rotate }

  return (
    <StyledIcon className={`icon icon--${iconKey} ${className ?? ""}`} {...stylingProps} {...props}>
      {iconMap[iconKey]}
    </StyledIcon>
  )
}

export default Icon
