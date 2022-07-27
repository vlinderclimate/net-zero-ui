import React from "react"
import { styled } from "@mui/material/styles"
import MuiToggleButton, { ToggleButtonProps as MuiToggleButtonProps } from "@mui/material/ToggleButton"
import MuiToggleButtonGroup, {
  ToggleButtonGroupProps as MuiToggleButtonGroupProps
} from "@mui/material/ToggleButtonGroup"
import { fontSize, lineHeight } from "../theme/typography"

/**
 * Types
 */

export interface ToggleButtonGroupProps extends Omit<MuiToggleButtonGroupProps, "value"> {
  selectedValue: string
  list: MuiToggleButtonProps[]
}

/**
 * Styles
 */
const StyledToggleButtonGroup = styled(MuiToggleButtonGroup)(({ theme }) => ({}))
const StyledToggleButton = styled(MuiToggleButton)(({ theme }) => ({
  border: "1.5px solid",
  borderRadius: "0 !important",
  color: theme.palette.gray["700"],
  borderColor: theme.palette.gray["500"],
  fontSize: fontSize.xs3,
  lineHeight: lineHeight.xs4,
  paddingBlock: theme.spacing(0.5),
  paddingInline: theme.spacing(1.5),
  textTransform: "none",
  letterSpacing: "normal",

  "&.MuiToggleButtonGroup-grouped:not(:first-of-type)": {
    borderWidth: "1.5px !important",
    marginLeft: -1.5
  },
  "&.Mui-selected": {
    borderColor: theme.palette.gray["800"],
    color: theme.palette.gray["800"],
    zIndex: 5,
    backgroundColor: "transparent !important",

    "&.MuiToggleButtonGroup-grouped:not(:first-of-type)": {
      borderColor: theme.palette.gray["800"]
    }
  }
}))

/**
 * Components
 */

const ToggleButtonGroup = ({ onChange, selectedValue, list, ...props }: ToggleButtonGroupProps) => {
  return (
    <StyledToggleButtonGroup value={selectedValue} exclusive onChange={onChange} {...props}>
      {list.map((item, i: number) => (
        <StyledToggleButton value={item.value} key={i}>
          {item.children}
        </StyledToggleButton>
      ))}
    </StyledToggleButtonGroup>
  )
}

export default ToggleButtonGroup
