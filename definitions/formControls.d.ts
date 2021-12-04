// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { InputBaseProps } from "@mui/material/InputBase"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ButtonProps } from "@mui/material/Button"

declare module "@mui/material/InputBase" {
  interface InputBasePropsSizeOverrides {
    xs: true
    sm: true
    md: true
    lg: true
  }
}
declare module "@mui/material/TextField" {
  interface TextFieldPropsSizeOverrides {
    xs: true
    sm: true
    md: true
    lg: true
  }
}
declare module "@mui/material/Button" {
  interface ButtonPropsSizeOverrides {
    xxs: true
    xs: true
    sm: true
    md: true
    lg: true
  }
}
