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

interface StyledAlertProps extends Omit<AlertProps, "rounded"> {
  $rounded?: boolean
}

export const backgroundMap: Record<AlertColor, string> = {
  warning: `${colors.yellow.light}55`,
  success: `${colors.green.light}55`,
  error: `${colors.red.light}55`,
  info: `${colors.blue.light}55`
}

export const colorMap: Record<AlertColor, string> = {
  warning: colors.yellow.main,
  success: colors.text.positive,
  error: colors.text.negative,
  info: colors.blue.main
}

export const StyledAlert = styled(MuiAlert)<StyledAlertProps>(({ color, icon, $rounded: rounded, align, theme }) => ({
  fontSize: theme.typography.fontSizeXs2,
  lineHeight: theme.typography.lineHeightS,
  fontWeight: theme.typography.fontWeightMedium,
  padding: theme.spacing(1.4, 2.5, 1.5),
  alignItems: "flex-start",
  justifyContent: align ?? "flex-start",
  backgroundColor: backgroundMap[color ?? "info"],
  borderRadius: rounded ? theme.borders.radius.sm : 0,
  opacity: 1,

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
    padding: 0,
    color: colorMap[color ?? "info"]
  },

  "& .MuiAlert-icon": {
    display: icon ? "flex" : "none",
    alignItems: "center",
    padding: 0,
    marginRight: theme.spacing(1),
    height: theme.typography.lineHeightS,
    // color: colorMap[color ?? "info"],
    opacity: 1
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
        $rounded={rounded}
        align={align}
        {...props}
        elevation={0}
      />
    )
  }
)

export default Alert
