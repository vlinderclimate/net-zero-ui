import React, { forwardRef, ReactNode, useState } from "react"
import { styled, Theme } from "@mui/material/styles"
import FormControl, { FormControlProps as MuiFormControlProps } from "@mui/material/FormControl"
import { InputLabel } from "@mui/material"

import IconButton from "./IconButton"
import Select, { SelectProps } from "./Select"

type ExcludedProps = "onBlur" | "onChange" | "onFocus" | "onKeyDown" | "onKeyUp"

export interface SelectFieldProps extends Omit<MuiFormControlProps, ExcludedProps> {
  id: string
  label?: string | ReactNode | ReactNode[]
  helperText?: string
  fullWidth?: boolean
  selectProps: SelectProps
}

interface StyledProps {
  theme: Theme
}

const StyledFormControl = styled(FormControl)(({ theme }: StyledProps) => ({}))

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
        {label && <InputLabel>{label}</InputLabel>}
        <Select
          id={id}
          aria-describedby={`${id}-select`}
          endAdornment={
            <IconButton
              onClick={() => setIsOpen(!isOpen)}
              iconProps={{
                iconKey: "dropdown",
                color: isOpen ? "primary" : "secondary",
                rotate: isOpen ? -180 : 0,
                size: "xs"
              }}
            />
          }
          open={isOpen}
          onOpen={() => setIsOpen(true)}
          onClose={() => setIsOpen(false)}
          error={error}
          {...selectProps}
        >
          {children}
        </Select>
      </StyledFormControl>
    )
  }
)

export default SelectField
