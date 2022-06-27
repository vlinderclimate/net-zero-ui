import React, { FC } from "react"
import { styled } from "@mui/material/styles"
import FormControl, { FormControlProps as MuiFormControlProps } from "@mui/material/FormControl"

/**
 * Types
 */
export interface FieldsetProps extends MuiFormControlProps {}

/**
 * Styles
 */
const StyledLabel = styled(FormControl)(({ theme }) => ({
  paddingTop: theme.spacing(4.5),
  paddingBottom: theme.spacing(3.5),
  borderBottom: `1px solid ${theme.palette.gray[500]}`,

  ".MuiFormControl-root": {
    marginBottom: theme.spacing(1)
  },

  [theme.breakpoints.down("sm")]: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(1)
  }
}))

/**
 * Components
 */
const Fieldset: FC<FieldsetProps> = ({ children, ...rest }) => {
  return <StyledLabel {...rest}>{children}</StyledLabel>
}

export default Fieldset
