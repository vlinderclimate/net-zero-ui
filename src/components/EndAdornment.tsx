import React from "react"
import { styled } from "@mui/material/styles"
import MuiBox from "@mui/material/Box"
import MuiInputAdornment from "@mui/material/InputAdornment"
import Icon, { IconProps } from "./Icon"
import { TextFieldProps } from "./TextField"
import Button, { ButtonProps } from "./Button"
import { InputProps } from "./Input"

export interface EndAdornmentProps {
  /**
   * The size of the component. The prop defaults to the value (`'md'`)
   */
  size: TextFieldProps["size"]
  /**
   * The error icon.
   */
  error?: TextFieldProps["error"]
  /**
   * The ending adornment that's neither error icon nor action button.
   */
  endAdornment?: InputProps["endAdornment"]
  /**
   * If not undefined, an action button is rendered as part of end adornment.
   */
  actionButtonProps?: {
    disabled: ButtonProps["disabled"]
    children: ButtonProps["children"]
    color?: ButtonProps["color"]
    onClick: ButtonProps["onClick"]
  }
}

const errorIconSizeMap: Record<Exclude<InputProps["size"], undefined>, IconProps["size"]> = {
  xs: "sm",
  sm: "sm",
  md: "md",
  lg: "lg"
}

const buttonSizeMap: Record<Exclude<InputProps["size"], undefined>, ButtonProps["size"]> = {
  xs: "xs",
  sm: "xs",
  md: "sm",
  lg: "sm"
}

const EndAdornmentBox = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1)
}))

const EndAdornment: React.FC<EndAdornmentProps> = ({ size = "md", error, actionButtonProps, endAdornment }) => {
  return (
    <MuiInputAdornment position="end">
      <EndAdornmentBox>
        {error && <Icon iconKey="infoCircle" size={errorIconSizeMap[size]} color="negative" />}
        {endAdornment && endAdornment}
        {actionButtonProps && <Button {...actionButtonProps} size={buttonSizeMap[size]} />}
      </EndAdornmentBox>
    </MuiInputAdornment>
  )
}

export default EndAdornment
