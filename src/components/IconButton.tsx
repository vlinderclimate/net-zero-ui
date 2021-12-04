import React from "react"
import MuiIconButton, { IconButtonProps as MuiIconButtonProps } from "@mui/material/IconButton"

import Icon, { IconProps } from "./Icon"

export interface IconButtonProps extends Omit<MuiIconButtonProps, "color" | "size"> {
  ariaLabel?: string
  iconProps: IconProps
}

// TODO: add more event listeners
const IconButton: React.FC<IconButtonProps> = ({ ariaLabel, onClick, disabled, iconProps, ...props }) => {
  return (
    <MuiIconButton
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
      disableFocusRipple
      disableRipple
      {...props}
    >
      <Icon {...iconProps} />
    </MuiIconButton>
  )
}

export default IconButton
