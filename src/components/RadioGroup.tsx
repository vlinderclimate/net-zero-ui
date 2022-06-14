import React, { FC } from "react"
import { styled } from "@mui/material/styles"
import MuiRadioGroup, { RadioGroupProps as MuiRadioGroupProps } from "@mui/material/RadioGroup"

/**
 * Types
 */
export interface RadioGroupProps extends MuiRadioGroupProps {}

/**
 * Styles
 */
const StyledGroup = styled(MuiRadioGroup)(({ theme }) => ({
  "&.MuiRadioGroup-row": {
    flexDirection: "row"
  },
  ".MuiFormControlLabel-root": {
    marginBottom: theme.spacing(1)
  }
}))

/**
 * Components
 */
const RadioGroup: FC<RadioGroupProps> = ({ children, row, ...rest }) => {
  return (
    <StyledGroup className={row ? "MuiRadioGroup-row" : ""} {...rest}>
      {children}
    </StyledGroup>
  )
}

export default RadioGroup
