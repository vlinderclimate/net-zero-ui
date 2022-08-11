import React, { forwardRef, ReactNode, useState } from "react"
import { styled, Theme } from "@mui/material/styles"
import FormControl, { FormControlProps as MuiFormControlProps } from "@mui/material/FormControl"
import { ClickAwayListener, InputLabel } from "@mui/material"

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
      <ClickAwayListener onClickAway={() => setIsOpen(false)}>
        <StyledFormControl error={!!error} {...formControlProps}>
          {label && <InputLabel>{label}</InputLabel>}
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
      </ClickAwayListener>
    )
  }
)

export default SelectField
