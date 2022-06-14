import React, { FC } from "react"
import { styled } from "@mui/material/styles"
import MuiRadio, { RadioProps as MuiRadioProps } from "@mui/material/Radio"
import typography from "../theme/typography"

/**
 * Types
 */
export interface RadioProps extends MuiRadioProps {}

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
    padding: 4,
    marginRight: 8,
    marginLeft: -16,
    backgroundColor: "transparent !important",
    color: `${theme.palette.gray[500]} !important`,
    position: "static",
    "&:before": {
      content: "''",
      border: "1px solid",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    },
    "&.Mui-checked": {
      color: `${theme.palette.text.primary} !important`,

      "& ~ .MuiFormControlLabel-label": {
        color: `${theme.palette.text.primary} !important`
      }
    },
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      marginLeft: -8
    }
  }
}))

/**
 * Components
 */
const Radio: FC<RadioProps> = ({ children, ...rest }) => {
  return <StyledRadio {...rest}>{children}</StyledRadio>
}

export default Radio
