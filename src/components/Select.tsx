import React, { forwardRef } from "react"
import { styled, Theme } from "@mui/material/styles"
import MuiSelect, { SelectProps as MuiSelectProps } from "@mui/material/Select"
import Input from "./Input"

export interface SelectProps extends MuiSelectProps {}

const StyledMuiSelect = styled(MuiSelect)<SelectProps>(({ theme }: { theme: Theme }) => ({
  position: "relative",
  padding: 0,
  boxShadow: `inset 0 0 0 1px ${theme.palette.gray[500]}`,
  transition: theme.transitions.create(["box-shadow"]),
  backgroundColor: theme.palette.gray.white,

  "&.Mui-focused": {
    boxShadow: `inset 0 0 0 1px ${theme.palette.gray[500]}`
  },
  "&:hover": {
    boxShadow: `inset 0 0 0 1.5px ${theme.palette.gray[600]}`
  },
  // lineHeight: theme.spacing(3),
  // color: theme.palette.icon.secondary,
  // backgroundColor: `${theme.palette.gray.white} !important`,
  // border: 0,
  // ".MuiSelect-icon": {
  //   display: "none"
  // },
  // ".MuiOutlinedInput-notchedOutline": {
  //   border: 0,
  //   outline: "none"
  // },
  // ".MuiInputBase-input": {
  //   padding: theme.spacing(2)
  // },
  // ".MuiSelect-nativeInput": {
  //   border: 0,
  //   clip: "rect(0 0 0 0)",
  //   height: 1,
  //   margin: -1,
  //   overflow: "hidden",
  //   padding: 0,
  //   position: "absolute",
  //   top: "20",
  //   width: 1
  // }
  ".MuiSelect-outlined": {},
  ".MuiSelect-select": {
    padding: "8px 16px 8px 16px"
  },
  ".MuiSelect-iconOpen": {
    right: 0
  },
  ".MuiSvgIcon-root": {
    display: "none"
  },
  ".MuiInputAdornment-positionEnd": {
    position: "absolute",
    right: 3,
    top: 0,
    height: "100%",
    margin: 0,
    maxHeight: "none",
    color: theme.palette.gray[700]
  }
}))

const Select: React.FC<SelectProps> = forwardRef(
  (
    { id, value, placeholder, disabled = false, onChange, onBlur, inputProps, variant, endAdornment, ...props },
    ref
  ) => {
    return (
      // TODO: use TextField component (input prop https://mui.com/components/selects/#customization)
      <StyledMuiSelect
        value={value}
        placeholder={placeholder}
        inputProps={{ id, ...inputProps }}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        inputRef={ref}
        input={<Input {...{ size: "xs", variant: variant, color: "primary", endAdornment: endAdornment }} />}
        MenuProps={{
          id: `menu-${id ?? ""}`,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left"
          },
          hideBackdrop: true
        }}
        {...props}
      />
    )
  }
)

export default Select
