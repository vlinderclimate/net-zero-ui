import React, { FC } from "react"
import { styled } from "@mui/material/styles"
import FormControlLabelGroup, {
  FormControlLabelProps as FormControlLabelGroupProps
} from "@mui/material/FormControlLabel"
import typography from "../theme/typography"

/**
 * Types
 */
export interface FormControlLabelProps extends FormControlLabelGroupProps {}

/**
 * Styles
 */
const StyledLabel = styled(FormControlLabelGroup)(({ theme }) => ({
  color: `${theme.palette.gray[700]} !important`,
  position: "relative",
  marginRight: 0,
  marginLeft: 0,

  ".MuiFormControlLabel-label": {
    ...typography.caption.main,
    color: "inherit !important",

    [theme.breakpoints.down("sm")]: {
      ...typography.caption.mobile
    }
  },
  [theme.breakpoints.down("sm")]: {}
}))

/**
 * Components
 */
const FormControlLabel: FC<FormControlLabelProps> = ({ children, ...rest }) => {
  return <StyledLabel {...rest}>{children}</StyledLabel>
}

export default FormControlLabel
