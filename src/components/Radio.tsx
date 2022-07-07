import type { FC } from "react"
import { styled } from "@mui/material/styles"
import MuiRadio, { RadioProps as MuiRadioProps } from "@mui/material/Radio"
import typography from "../theme/typography"

/**
 * Types
 */
export interface RadioProps extends Omit<MuiRadioProps, "children"> {
  variant?: "default" | "bordered"
  className?: string
}

/**
 * Styles
 */
const StyledRadio = styled(MuiRadio)(({ theme }) => ({
  ".MuiTypography-root": {
    ...typography.heroParagraph.main,

    [theme.breakpoints.down("sm")]: {
      ...typography.heroParagraph.mobile
    }
  },
  ".MuiSvgIcon-root": {
    width: 24,
    height: 24,
    "&:last-of-type": {
      width: 18,
      height: 18,
      margin: "3px 0 0 3px"
    }
  },
  [theme.breakpoints.down("sm")]: {
    ".MuiSvgIcon-root": {
      width: 19,
      height: 19,
      "&:last-of-type": {
        width: 12,
        height: 12,
        margin: "3.5px 0 0 3.5px"
      }
    }
  },
  "&.MuiRadio-root": {
    marginRight: 8,
    marginLeft: 0,
    padding: 0,
    backgroundColor: "transparent !important",
    color: `${theme.palette.gray[500]} !important`,
    position: "static",

    "&.Mui-checked": {
      color: `${theme.palette.text.primary} !important`,

      "& ~ .MuiFormControlLabel-label": {
        color: `${theme.palette.text.primary} !important`
      }
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0
    }
  },
  "&.MuiRadio-bordered.MuiRadio-root": {
    backgroundColor: "transparent !important",
    color: `${theme.palette.gray[500]} !important`,
    position: "static",
    padding: "10px 12px 10px 16px",
    marginRight: 0,

    "&:before": {
      content: "''",
      border: "1px solid",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    },
    "& ~ .MuiFormControlLabel-label": {
      padding: "10px 24px 10px 0"
    },
    "&.Mui-checked": {
      color: `${theme.palette.text.primary} !important`,

      "& ~ .MuiFormControlLabel-label": {
        color: `${theme.palette.text.primary} !important`
      }
    },
    [theme.breakpoints.down("sm")]: {
      padding: "10px 8px 10px 12px",

      "& ~ .MuiFormControlLabel-label": {
        padding: "8px 16px 8px 0"
      }
    }
  }
}))

/**
 * Components
 */
const Radio: FC<RadioProps> = ({ variant = "default", ...rest }) => {
  return <StyledRadio className={`MuiRadio-${variant}`} {...rest} />
}

export default Radio
