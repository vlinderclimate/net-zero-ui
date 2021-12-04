import React from "react"
import clsx from "clsx"

import { Theme, styled } from "@mui/material/styles"
import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button"

import colors from "../theme/colors"

/**
 * Types
 */
export const ButtonColorVariants = [
  "primary",
  "primaryAlt",
  "secondary",
  "inverse",
  "info",
  "positive",
  "negative",
  "disabled"
] as const

export type ButtonColorVariant = typeof ButtonColorVariants[number]
export interface ButtonProps extends Omit<MuiButtonProps, "color" | "variant" | "align"> {
  align?: "center" | "left" | "right"
  color?: ButtonColorVariant
  variant?: "text" | "outlined" | "contained" | "underline"
  size?: Exclude<MuiButtonProps["size"], "small" | "medium" | "large">
  linkProps?: Object
}
export interface ExtendedStyledButtonProps {
  onlyIcon?: boolean
  size?: string
  theme: Theme
}
interface StyledButtonProps extends Omit<ButtonProps, "color"> {
  $align: ButtonProps["align"]
  $onlyIcon?: boolean
  $color: ButtonProps["color"]
  theme?: Theme
}

interface ColorMap {
  background: Record<ButtonColorVariant, string>
  color: Record<ButtonColorVariant, string>
  text: Record<ButtonColorVariant, string>
}

/**
 * Constants
 */
const colorMap: ColorMap = {
  background: {
    primary: colors.primary.main,
    primaryAlt: colors.blue.main,
    secondary: colors.secondary.main,
    inverse: colors.gray.white,
    info: colors.gray[100],
    positive: colors.positive.main,
    negative: colors.negative.main,
    disabled: colors.gray[300]
  },
  color: {
    primary: colors.text.inversePrimary,
    primaryAlt: colors.text.inversePrimary,
    secondary: colors.text.inversePrimary,
    inverse: colors.text.primary,
    info: colors.text.primary,
    positive: colors.text.inversePrimary,
    negative: colors.text.inversePrimary,
    disabled: colors.text.secondary
  },
  text: {
    primary: colors.text.primary,
    primaryAlt: colors.primary.main,
    secondary: colors.gray[500],
    inverse: colors.gray.white,
    info: colors.gray[500],
    positive: colors.positive.main,
    negative: colors.negative.main,
    disabled: colors.gray[300]
  }
}

const getFontSize = ({ size, theme }: ExtendedStyledButtonProps) => {
  if (size === "xs") return theme.typography.fontSizeXs3
  if (size === "sm") return theme.typography.fontSizeXs2
  if (size === "lg") return theme.typography.fontSizeXs2
  return theme.typography.fontSizeXs3
}

const getFontSizeMobile = ({ size, theme }: ExtendedStyledButtonProps) => {
  if (size === "xs") return 13
  if (size === "sm") return 13
  if (size === "lg") return theme.typography.fontSizeXs1
  return theme.typography.fontSizeXs3
}

const getLineHeight = ({ size, theme }: ExtendedStyledButtonProps) => {
  if (size === "xs") return theme.typography.lineHeightXs5
  if (size === "sm") return theme.typography.lineHeightXs2
  if (size === "lg") return theme.typography.lineHeightS
  return theme.typography.lineHeightXs1
}

const getLineHeightMobile = ({ size, theme }: ExtendedStyledButtonProps) => {
  if (size === "xs") return theme.typography.lineHeightXs4
  if (size === "sm") return theme.typography.lineHeightXs4
  if (size === "lg") return theme.typography.lineHeightS
  return theme.typography.lineHeightXs3
}

const getPadding = ({ size, theme, onlyIcon }: ExtendedStyledButtonProps) => {
  if (size === "xs") return theme.spacing(0.75, onlyIcon ? 0.7 : 1.5, onlyIcon ? 0.7 : 1, onlyIcon ? 0.7 : 1.5)
  if (size === "sm") return theme.spacing(1, onlyIcon ? 1 : 2, onlyIcon ? 1 : 1.25, onlyIcon ? 1 : 2)
  if (size === "lg") return theme.spacing(onlyIcon ? 2 : 1.75, onlyIcon ? 2 : 4)
  return theme.spacing(1.4, onlyIcon ? 1.4 : 4, 1.5)
}

const getPaddingMobile = ({ size, theme, onlyIcon }: ExtendedStyledButtonProps) => {
  if (size === "xs") return theme.spacing(0.75, onlyIcon ? 0.75 : 1.5, onlyIcon ? 0.75 : 1, onlyIcon ? 0.75 : 1.5)
  if (size === "sm") return theme.spacing(1, onlyIcon ? 1 : 2, onlyIcon ? 1 : 1.25, onlyIcon ? 1 : 2)
  if (size === "lg") return theme.spacing(onlyIcon ? 2 : 1.75, onlyIcon ? 2 : 4)
  return theme.spacing(1.3, onlyIcon ? 1.3 : 3)
}

const PREFIX = "Button"

const classes = {
  root: `${PREFIX}-root`,
  underline: `${PREFIX}-underline`
}

const StyledButton = styled(MuiButton)<StyledButtonProps>(({ theme, ...props }) => {
  const { size, $align: align, $color, $onlyIcon: onlyIcon } = props
  const color = $color ?? "primary"

  return {
    fontSize: getFontSize({ size, theme }),
    lineHeight: getLineHeight({ size, theme }),
    padding: getPadding({ size, theme, onlyIcon }),
    borderRadius: theme?.borders.radius.rounded,
    justifyContent: align === "left" ? "flex-start" : align === "right" ? "flex-end" : "center",
    transition: theme?.transitions.create(["box-shadow", "transform", "background", "color", "border"]),
    position: "relative",
    textTransform: "none",
    whiteSpace: "nowrap",
    [theme.breakpoints.down("md")]: {
      fontSize: getFontSizeMobile({ size, theme }),
      lineHeight: getLineHeightMobile({ size, theme }),
      padding: getPaddingMobile({ size, theme, onlyIcon })
    },

    "&:active, &:hover, &:focus": {
      outline: "none"
    },
    "&.MuiButton-contained": {
      color: colorMap.color[color],
      backgroundColor: colorMap.background[color],
      boxShadow: size === "lg" ? theme?.boxShadow.lg : theme?.boxShadow.md,
      willChange: "transform",

      "&:hover": {
        boxShadow: theme?.boxShadow.md,
        transform: "scale(1.02)"
      },
      "&:active": {
        boxShadow: size === "lg" ? theme?.boxShadow.lg : theme?.boxShadow.md,
        transform: "scale(0.99)"
      },
      "& .icon svg path": {
        fill: "currentColor !important"
      }
    },
    "&.MuiButton-outlined": {
      border: 0,
      color: colors.text.primary,
      backgroundColor: "transparent",
      boxShadow: `inset 0 0 0 ${theme?.borders.size.small as number}px rgba(0, 0, 0, 0.15)`
    },
    "&.MuiButton-text": {
      color: colorMap.text[color],
      backgroundColor: "transparent !important",
      boxShadow: "none !important",
      padding: 0,

      "& .MuiButton-endIcon": {
        position: "relative",
        transform: "translate(0, 0)",
        display: "inline-blok",
        top: "2px",
        transition: theme.transitions.create(["transform"])
      },
      "&:hover": {
        "& .MuiButton-endIcon": {
          transform: "translate(4px, 0)"
        }
      }
    },
    "&.Mui-disabled": {
      transform: "none !important"
    },
    "&.MuiButton-fullWidth": {
      "& .MuiButton-endIcon": {
        position: onlyIcon ? "static" : "absolute",
        right: theme?.spacing(3),
        top: "50%",
        transform: onlyIcon ? "none" : "translate(0, -50%)"
      }
    },
    "& .MuiButton-startIcon": {
      marginLeft: onlyIcon ? 0 : theme?.spacing(-1),
      marginRight: onlyIcon ? 0 : theme?.spacing(0.5),
      [theme.breakpoints.down("sm")]: {
        marginRight: onlyIcon ? 0 : theme?.spacing(0.5),
        marginLeft: onlyIcon ? 0 : theme?.spacing(-0.5)
      }
    },
    "& .MuiButton-endIcon": {
      marginLeft: onlyIcon ? 0 : theme?.spacing(0.5),
      marginRight: onlyIcon ? 0 : theme?.spacing(-0.5),
      [theme.breakpoints.down("sm")]: {
        marginLeft: onlyIcon ? 0 : theme?.spacing(0.5),
        marginRight: onlyIcon ? 0 : theme?.spacing(-0.5)
      }
    },
    [`&.${classes.underline}`]: {
      padding: "0 !important",
      color: `${colors.text.primary} !important`,

      "&:after": {
        content: "''",
        position: "absolute",
        left: 0,
        right: 0,
        bottom: -1,
        width: "100%",
        margin: "auto",
        borderBottom: `3px solid ${colors.primary.main}`,
        transition: theme?.transitions.create(["width"])
      },
      "&:active, &:hover, &:focus": {
        "&:after": {
          width: 0
        }
      }
    },
    [`&.${PREFIX}-info`]: {
      boxShadow: "none !important"
    }
  }
})

const Button: React.FC<ButtonProps> = ({
  value,
  align = "center",
  placeholder,
  color = "primary",
  variant = "contained",
  size,
  disabled = false,
  startIcon,
  endIcon,
  onClick,
  href,
  linkProps,
  ...props
}) => {
  const onlyIcon = Boolean(!props.children) && (Boolean(startIcon) ?? Boolean(endIcon))
  const className = clsx([classes.root, variant === "underline" && classes.underline, `${PREFIX}-${color}`])
  const stylingProps = { $onlyIcon: onlyIcon, $color: color, size, $align: align }

  return (
    <StyledButton
      value={value}
      className={className}
      variant={variant !== "underline" ? variant : undefined}
      disabled={disabled}
      onClick={onClick}
      startIcon={startIcon}
      endIcon={endIcon}
      {...stylingProps}
      {...(href && { href, ...linkProps })}
      {...props}
    />
  )
}
export default Button
