import React, { forwardRef, useState } from "react"
import { styled, Theme } from "@mui/material/styles"
import FormControl, { FormControlProps as MuiFormControlProps } from "@mui/material/FormControl"

import IconButton from "./IconButton"
import Select, { SelectProps } from "./Select"

type ExcludedProps = "onBlur" | "onChange" | "onFocus" | "onKeyDown" | "onKeyUp"

export interface SelectFieldProps extends Omit<MuiFormControlProps, ExcludedProps> {
  id: string
  label?: string
  helperText?: string
  fullWidth?: boolean
  selectProps: SelectProps
}

interface StyledProps {
  theme: Theme
}

const StyledFormControl = styled(FormControl)(({ theme }: StyledProps) => ({
  minWidth: "300px"
}))

const SelectField: React.FC<SelectFieldProps> = forwardRef(
  ({ id, label, helperText, error, selectProps, children, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false)

    const formControlProps = {
      ref,
      fullWidth: props.fullWidth,
      required: props.required
    }

    return (
      <StyledFormControl error={!!error} {...formControlProps}>
        <Select
          id={id}
          aria-describedby={`${id}-select`}
          endAdornment={
            <IconButton
              iconProps={{
                iconKey: "dropdown",
                color: isOpen ? "primary" : "secondary",
                rotate: isOpen ? -180 : 0,
                size: "xs"
              }}
            />
          }
          onOpen={() => setIsOpen(true)}
          onClose={() => setIsOpen(false)}
          {...selectProps}
        >
          {children}
        </Select>
      </StyledFormControl>
    )
  }
)

export default SelectField
