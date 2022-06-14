import { forwardRef } from "react"
import { styled, Theme } from "@mui/material/styles"
import MuiInput, { InputProps as MuiInputProps } from "@mui/material/Input"
import EndAdornment, { EndAdornmentProps } from "./EndAdornment"

export interface InputProps extends Omit<MuiInputProps, "color" | "size"> {
  /**
   * The color of the component. The prop defaults to the value (`'primary'`)
   */
  color?: "primary" | "secondary"
  /**
   * The size of the component. The prop defaults to the value (`'md'`)
   */
  size?: "xs" | "sm" | "md" | "lg"
  /**
   * If `true`, `Input` element wouldn't render error icon in default.
   * The props defaults to the value `false`.
   */
  overrideErrorAdornment?: boolean
  /**
   * If not undefined, an action button is rendered as part of end adornment.
   */
  actionButtonProps?: EndAdornmentProps["actionButtonProps"]
}

interface StyledInputProps extends Omit<InputProps, "color" | "size"> {
  size?: InputProps["size"]
  $append?: boolean
}

interface ExtendedStyledInputProps extends StyledInputProps {
  theme: Theme
}

export const getFontSize = ({ size, theme }: ExtendedStyledInputProps) => {
  switch (size) {
    case "xs":
      return {
        main: theme.typography.fontSizeXs2,
        mobile: theme.typography.fontSizeXs2
      }
    case "sm":
      return {
        main: theme.typography.fontSizeXs1,
        mobile: theme.typography.fontSizeXs2
      }
    case "md":
      return {
        main: theme.typography.fontSizeS,
        mobile: theme.typography.fontSizeXs1
      }
    case "lg":
      return {
        main: theme.typography.fontSizeM,
        mobile: theme.typography.fontSizeS
      }
  }
}

export const getPadding = ({ size, theme, $append: append }: ExtendedStyledInputProps) => {
  switch (size) {
    case "xs":
      return {
        main: theme.spacing(1, 2, 1, 2),
        mobile: theme.spacing(1, 1.5, 1, 1.5)
      }
    case "sm":
      return {
        main: theme.spacing(1.5, 2, 1.5, 2),
        mobile: theme.spacing(1.25, 1.5, 1.25, 1.5)
      }
    case "md":
      return {
        main: theme.spacing(2, 3, 2, 3),
        mobile: theme.spacing(1.5, 2, 1.5, 2)
      }
    case "lg":
      return {
        main: theme.spacing(2, 3, 2, 3),
        mobile: theme.spacing(1.5, 2, 1.5, 2)
      }
  }
}

export const getLineHeight = ({ size, theme }: ExtendedStyledInputProps) => {
  switch (size) {
    case "xs":
      return {
        main: theme.typography.lineHeightXs1,
        mobile: theme.typography.lineHeightXs3
      }
    case "sm":
      return {
        main: theme.typography.lineHeightXs1,
        mobile: theme.typography.lineHeightXs3
      }
    case "md":
      return {
        main: theme.typography.lineHeightXs1,
        mobile: theme.typography.lineHeightXs1
      }
    case "lg":
      return {
        main: theme.typography.lineHeightXs1,
        mobile: theme.typography.lineHeightXs1
      }
  }
}

export const formCommonStyles = (theme: Theme) => ({
  caretColor: theme.palette.blue.main,
  backgroundColor: theme.palette.gray.white,
  transition: theme.transitions.create(["box-shadow"]),

  fieldset: {
    display: "none"
  },
  "&.MuiInputBase-colorSecondary": {
    backgroundColor: theme.palette.gray[200]
  },
  "& input": {
    height: "auto"
  },
  "&.Input-outlined": {
    boxShadow: `inset 0 0 0 1px ${theme.palette.gray[500]}`
  },
  "&.Mui-focused, &:hover": {
    boxShadow: `inset 0 0 0 1.5px ${theme.palette.gray[600]}`
  },
  "&.Mui-error": {
    boxShadow: `inset 0 0 0 1.5px ${theme.palette.negative.main}`
  },
  "&.Mui-disabled": {
    backgroundColor: theme.palette.gray[500]
  },
  "&.Input-standard": {
    backgroundColor: "transparent !important",
    borderRadius: 0,
    borderBottom: `1px solid ${theme.palette.gray[500]}`,
    boxShadow: "none !important",
    fontSize: theme.typography.fontSizeXs3,
    lineHeight: theme.typography.lineHeightXs3,
    marginTop: 0,
    "&.Mui-focused": {
      borderBottomColor: theme.palette.primary.main
    }
  },
  "& [type=number]": {
    appearance: "number"
  },
  [theme.breakpoints.down("sm")]: {
    "&.Mui-focused": {
      boxShadow: `0 0 0 2px ${theme.palette.primary.main}`
    },
    "&.Mui-error": {
      boxShadow: `0 0 0 2px ${theme.palette.negative.main}`
    }
  }
})

const StyledInput = styled(MuiInput)<StyledInputProps>(({ theme, ...props }) => {
  const { size, $append } = props

  return {
    ...formCommonStyles(theme),
    padding: getPadding({ size, theme, $append })?.main,
    fontSize: getFontSize({ size, theme })?.main,
    lineHeight: getLineHeight({ size, theme })?.main,

    [theme.breakpoints.down("sm")]: {
      padding: getPadding({ size, theme, $append })?.mobile,
      fontSize: getFontSize({ size, theme })?.mobile,
      lineHeight: getLineHeight({ size, theme })?.mobile
    }
  }
})

const Input: React.FC<InputProps> = forwardRef((props, ref) => {
  const {
    color = "primary",
    size = "md",
    endAdornment,
    error,
    overrideErrorAdornment = false,
    actionButtonProps,
    ...rest
  } = props
  const append = Boolean(endAdornment ?? actionButtonProps ?? !overrideErrorAdornment)

  return (
    <StyledInput
      inputRef={ref}
      color={color}
      size={size}
      $append={append}
      className={`Input-size-${size}`}
      endAdornment={
        <EndAdornment
          size={size}
          error={error && !overrideErrorAdornment}
          endAdornment={!overrideErrorAdornment ? endAdornment : undefined}
          actionButtonProps={actionButtonProps}
        />
      }
      {...rest}
    />
  )
})

export default Input
