import React, { forwardRef } from "react"
import { styled } from "@mui/material/styles"
import MuiAlert, { AlertProps as MuiAlertProps, AlertColor } from "@mui/material/Alert"
import colors from "../theme/colors"

export interface AlertProps extends Omit<MuiAlertProps, "color"> {
  /**
   * Main color of the Alert.
   * Background with opacity and typography is solid.
   */
  color?: AlertColor
  /**
   * If filled is true, background color will be solid.
   */
  filled?: boolean
  /**
   * If rounded is false, the corners will be flat.
   */
  rounded?: boolean
  /**
   * Text alignment inside the Alert.
   */
  align?: "flex-start" | "center" | "flex-end"
}

export const backgroundMap: Record<AlertColor, string> = {
  warning: colors.yellow.light,
  success: colors.green.light,
  error: colors.red.light,
  info: colors.blue.light
}

export const colorMap: Record<AlertColor, string> = {
  warning: colors.yellow.main,
  success: colors.text.positive,
  error: colors.text.negative,
  info: colors.blue.main
}

const StyledAlert = styled(MuiAlert)<AlertProps>(({ color, icon, rounded, align, theme }) => ({
  fontSize: theme.typography.fontSizeXs2,
  lineHeight: theme.typography.lineHeightS,
  fontWeight: theme.typography.fontWeightBold,
  padding: theme.spacing(1.5, 2),
  alignItems: "flex-start",
  justifyContent: align ?? "flex-start",
  backgroundColor: backgroundMap[color ?? "info"],
  borderRadius: rounded ? theme.borders.radius.sm : 0,
  opacity: 1,

  "& *": {
    color: colorMap[color ?? "info"]
  },

  "&.MuiAlert-filled": {
    backgroundColor: colorMap[color ?? "info"],
    color: theme.palette.text.inversePrimary,

    "& *": {
      color: theme.palette.text.inversePrimary
    },

    "& .MuiAlert-icon": {
      color: theme.palette.text.inversePrimary
    }
  },

  "& .MuiAlert-message": {
    padding: 0
  },

  "& .MuiAlert-icon": {
    display: icon ? "flex" : "none",
    alignItems: "center",
    padding: 0,
    marginRight: theme.spacing(1),
    height: theme.typography.lineHeightS,
    color: colorMap[color ?? "info"],
    opacity: 1,

    "& path": {
      fill: "currentColor"
    }
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
    lineHeight: "15px",
    borderRadius: rounded ? theme.borders.radius.xs1 : 0
  }
}))

const Alert: React.FC<AlertProps> = forwardRef(
  ({ icon, filled = false, rounded = true, align, color, ...props }, ref) => {
    const className = filled ? "MuiAlert-filled" : undefined
    return (
      <StyledAlert
        ref={ref}
        className={className}
        color={color}
        icon={icon}
        rounded={rounded}
        align={align}
        {...props}
        elevation={0}
      />
    )
  }
)

export default Alert
