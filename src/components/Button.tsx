import React from "react"
import clsx from "clsx"

import { Theme, styled } from "@mui/material/styles"
import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button"

import colors from "../theme/colors"
import { fontWeight, lineHeight, lineHeightMobile, fontSize, fontSizeMobile } from "../theme/typography"

/**
 * Types
 */
export const ButtonColorVariants = [
  "primary",
  "primaryAlt",
  "secondary",
  "secondaryAlt",
  "inverse",
  "positive",
  "negative",
  "disabled",
  "muted"
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
interface StyledButtonProps extends Omit<ButtonProps, "color" | "onlyIcon"> {
  $align: ButtonProps["align"]
  $onlyIcon?: boolean
  $color: ButtonProps["color"]
  theme?: Theme
}

interface ColorMap {
  background: Record<ButtonColorVariant, string>
  outlined: Record<ButtonColorVariant, string>
  color: Record<ButtonColorVariant, string>
  text: Record<ButtonColorVariant, string>
}

/**
 * Constants
 */
const colorMap: ColorMap = {
  background: {
    primary: colors.primary.main,
    primaryAlt: colors.primary.main,
    secondary: colors.text.primary,
    secondaryAlt: colors.gray[300],
    inverse: colors.gray.white,
    positive: colors.positive.main,
    negative: colors.negative.main,
    disabled: colors.gray[400],
    muted: colors.gray[400]
  },
  color: {
    primary: colors.text.inversePrimary,
    primaryAlt: colors.text.inversePrimary,
    secondary: colors.text.inversePrimary,
    secondaryAlt: colors.gray[800],
    inverse: colors.text.primary,
    positive: colors.text.inversePrimary,
    negative: colors.text.inversePrimary,
    disabled: colors.gray[600],
    muted: colors.gray[700]
  },
  outlined: {
    primary: colors.text.primary,
    primaryAlt: colors.text.primary,
    secondary: colors.gray[500],
    secondaryAlt: colors.gray[700],
    inverse: colors.gray.white,
    positive: colors.positive.main,
    negative: colors.negative.main,
    disabled: colors.gray.a500,
    muted: colors.gray[400]
  },
  text: {
    primary: colors.text.primary,
    primaryAlt: colors.text.primary,
    secondary: colors.text.brand,
    secondaryAlt: colors.gray[700],
    inverse: colors.gray.white,
    positive: colors.positive.main,
    negative: colors.negative.main,
    disabled: colors.gray.a500,
    muted: colors.gray[700]
  }
}

const getFontSize = ({ size, theme }: ExtendedStyledButtonProps) => {
  if (size === "xs") return fontSize.xs4
  if (size === "sm") return fontSize.xs2
  if (size === "lg") return fontSize.xs1
  return fontSizeMobile.xs1
}

const getFontSizeMobile = ({ size, theme }: ExtendedStyledButtonProps) => {
  if (size === "xs") return fontSize.xs4
  if (size === "sm") return fontSize.xs4
  if (size === "lg") return fontSizeMobile.xs1
  return fontSizeMobile.xs1
}

const getLineHeight = ({ size, theme }: ExtendedStyledButtonProps) => {
  if (size === "xs") return lineHeight.xs3
  if (size === "sm") return lineHeight.xs2
  if (size === "lg") return lineHeight.s
  return lineHeightMobile.s
}

const getLineHeightMobile = ({ size, theme }: ExtendedStyledButtonProps) => {
  if (size === "xs") return lineHeight.xs3
  if (size === "sm") return lineHeight.xs3
  if (size === "lg") return lineHeightMobile.s
  return lineHeightMobile.m
}

const getPadding = ({ size, onlyIcon }: ExtendedStyledButtonProps) => {
  if (size === "xs") return onlyIcon ? "3px" : "3px 16px 5px 16px"
  if (size === "sm") return onlyIcon ? "5px" : "3px 16px 5px 16px"
  if (size === "lg") return onlyIcon ? "8px" : "6px 36px 8px 36px"
  return onlyIcon ? "7px" : "7px 20px 8px 20px"
}

const getPaddingMobile = ({ size, theme, onlyIcon }: ExtendedStyledButtonProps) => {
  if (size === "xs") return onlyIcon ? "3px" : "3px 16px 5px 16px"
  if (size === "sm") return onlyIcon ? "3px" : "3px 16px 5px 16px"
  if (size === "lg") return onlyIcon ? "8px" : "7px 20px 8px 20px"
  return onlyIcon ? "5px" : "3px 16px 5px 16px"
}

const PREFIX = "Button"

const classes = {
  root: `${PREFIX}-root`,
  withIcon: `${PREFIX}-widthIcon`,
  underline: `${PREFIX}-underline`
}

const ButtonText = styled("span")(({ theme, ...props }) => {
  return {
    transitionProperty: "transform",
    display: "block",
    position: "relative",
    transition: theme.transitions.create(["transform"])
  }
})

const StyledButton = styled(MuiButton)<StyledButtonProps>(({ theme, ...props }) => {
  const { size, $align: align, $color, $onlyIcon: onlyIcon } = props
  const color = $color ?? "primary"

  return {
    fontSize: getFontSize({ size, theme }),
    lineHeight: getLineHeight({ size, theme }),
    fontWeight: fontWeight.normal,
    padding: getPadding({ size, theme, onlyIcon }),
    borderRadius: theme?.borders.radius.rounded,
    justifyContent: align === "left" ? "flex-start" : align === "right" ? "flex-end" : "center",
    transition: theme?.transitions.create(["box-shadow", "transform", "background", "color", "border"]),
    position: "relative",
    textTransform: "none",
    whiteSpace: "nowrap",
    willChange: "transform",
    fontFeatureSettings: "'pnum' on, 'lnum' on, 'liga' off",
    [theme.breakpoints.down("sm")]: {
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
      boxShadow: "none",
      willChange: "transform",

      "& .icon svg path": {
        fill: "currentColor !important"
      },
      "&:hover": {
        boxShadow: "none"
      },
      "&:active": {
        boxShadow: "none",
        transform: "scale(0.98)"
      },
      "&.Mui-disabled": {
        backgroundColor: `${theme.palette.gray[200]} !important`,
        color: `${theme.palette.gray.a500} !important`,
        boxShadow: "none !important"
      }
    },
    [`&.${classes.withIcon}`]: {
      "&.MuiButton-text": {
        "& .MuiButton-endIcon": {
          width: 0,
          opacity: 0,
          transform: "translate(-8px, 0)",
          transition: theme.transitions.create(["all"])
        },
        [theme.breakpoints.up("md")]: {
          "&:hover": {
            "& .MuiButton-endIcon": {
              opacity: 1,
              transform: "translate(0px, 0)"
            }
          }
        }
      },
      "&.MuiButton-contained": {
        "& .MuiButton-endIcon": {
          width: 0,
          opacity: 0,
          transform: "translate(-12px, 0)",
          transition: theme.transitions.create(["all"])
        },
        [theme.breakpoints.up("md")]: {
          "&:hover": {
            "& .Button-innerText, & .MuiButton-endIcon": {
              opacity: 1,
              transform: "translate(-8px, 0)"
            }
          }
        }
      }
    },
    "&.MuiButton-outlined": {
      border: 0,
      color: colorMap.outlined[color],
      backgroundColor: "transparent",
      boxShadow: `inset 0 0 0 1px ${colorMap.outlined[color]}`,
      [`&.${PREFIX}-primary`]: {
        boxShadow: `inset 0 0 0 1px ${theme.palette.gray[500]}`,
        color: theme.palette.gray[800],
        "&:hover": {
          boxShadow: `inset 0 0 0 1.5px ${theme.palette.gray.a600}`,
          color: theme.palette.gray[800]
        },
        "&:active": {
          boxShadow: `inset 0 0 0 1.5px ${theme.palette.gray[800]}`,
          color: theme.palette.gray[800]
        }
      },
      [`&.${PREFIX}-primaryAlt`]: {
        boxShadow: `inset 0 0 0 1px ${theme.palette.gray.a500}`,
        color: theme.palette.gray[800],
        "&:hover": {
          color: theme.palette.gray.a700
        }
      },
      [`&.${PREFIX}-secondary`]: {
        boxShadow: `inset 0 0 0 1px ${theme.palette.gray[500]}`,
        color: theme.palette.gray.a700,
        "&:hover": {
          color: theme.palette.gray.a600
        }
      },
      [`&.${PREFIX}-secondaryAlt`]: {
        boxShadow: `inset 0 0 0 1px ${theme.palette.blue.main}`,
        color: theme.palette.blue.main
      },
      [`&.${PREFIX}-muted`]: {
        boxShadow: `inset 0 0 0 1px ${theme.palette.gray.a500}`,
        backgroundColor: theme.palette.gray[400],
        color: theme.palette.gray[700],
        "&:hover, &:focus": {
          boxShadow: `inset 0 0 0 1px ${theme.palette.gray.a600}`,
          color: theme.palette.gray[700]
        }
      },
      "&.Mui-disabled": {
        backgroundColor: `${theme.palette.gray[200]} !important`,
        color: `${theme.palette.gray.a500} !important`,
        boxShadow: "none !important"
      }
    },
    "&.MuiButton-text": {
      color: colorMap.text[color],
      backgroundColor: "transparent !important",
      boxShadow: "none !important",
      padding: theme.spacing(0, 2),
      "&.Mui-disabled": {
        color: `${theme.palette.gray.a500} !important`
      },
      [theme.breakpoints.down("sm")]: {
        padding: 0
      }
    },
    "&.Mui-disabled": {
      transform: "none !important"
    },
    "& .MuiButton-startIcon": {
      marginLeft: onlyIcon ? 0 : theme?.spacing(-1),
      marginRight: onlyIcon ? 0 : theme?.spacing(1),
      marginTop: onlyIcon ? 0 : 1,
      [theme.breakpoints.down("sm")]: {
        marginRight: onlyIcon ? 0 : theme?.spacing(1),
        marginLeft: onlyIcon ? 0 : theme?.spacing(-1)
      }
    },
    "& .MuiButton-endIcon": {
      marginLeft: onlyIcon ? 0 : theme?.spacing(1),
      marginRight: onlyIcon ? 0 : theme?.spacing(-1),
      marginTop: onlyIcon ? 0 : 1,
      [theme.breakpoints.down("sm")]: {
        marginLeft: onlyIcon ? 0 : theme?.spacing(1),
        marginRight: onlyIcon ? 0 : theme?.spacing(-1)
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
        borderBottom: `${theme?.borders.size.secondary as number}px solid ${colors.primary.main}`,
        transition: theme?.transitions.create(["width"])
      },
      "&:active, &:hover, &:focus": {
        "&:after": {
          width: 0
        }
      },
      "&.Mui-disabled": {
        color: `${theme.palette.gray.a500} !important`,
        "&:after": {
          borderBottom: `${theme?.borders.size.secondary as number}px solid ${theme.palette.gray.a500}`
        }
      }
    }
  }
})

const Button: React.FC<ButtonProps> = ({
  value,
  align = "center",
  placeholder,
  color = "primary",
  variant = "contained",
  size = "md",
  disabled = false,
  startIcon,
  endIcon,
  onClick,
  href,
  linkProps,
  children,
  ...props
}) => {
  const onlyIcon = Boolean(!children) && (Boolean(startIcon) ?? Boolean(endIcon))
  const className = clsx([
    classes.root,
    variant === "underline" && classes.underline,
    `${PREFIX}-${color}`,
    (endIcon ?? startIcon) && classes.withIcon
  ])
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
    >
      <ButtonText className={`${PREFIX}-innerText`}>{children}</ButtonText>
    </StyledButton>
  )
}
export default Button
