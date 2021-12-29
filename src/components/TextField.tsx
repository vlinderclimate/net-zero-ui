import React, { forwardRef } from "react"
import { styled } from "@mui/material/styles"
import MuiTextField, { FilledTextFieldProps as MuiTextFieldProps } from "@mui/material/TextField"
import colors from "../theme/colors"
import EndAdornment, { EndAdornmentProps } from "./EndAdornment"
import { InputProps, formCommonStyles, getPadding, getFontSize, getLineHeight } from "./Input"

export interface TextFieldProps extends Omit<MuiTextFieldProps, "color" | "variant" | "size" | "InputProps"> {
  /**
   * The color of the component. The prop defaults to the value (`'secondary'`)
   */
  color?: InputProps["color"]
  /**
   * The size of the component. The prop defaults to the value (`'md'`)
   */
  size?: InputProps["size"]
  /**
   * Props passing to the `InputProps` element.
   */
  InputProps?: Omit<InputProps, "overrideErrorAdornment">
  /**
   * If not undefined, an action button is rendered as part of end adornment.
   */
  actionButtonProps?: EndAdornmentProps["actionButtonProps"]
  /**
   * The variant of the component. The prop defaults to the value (`'filled'`)
   */
  variant?: "filled" | "outlined" | "standard"
}

interface StyledTextFieldProps extends Omit<TextFieldProps, "color" | "InputProps"> {
  $append?: boolean
}

const StyledTextField = styled(MuiTextField)<StyledTextFieldProps>(({ size, error, variant, $append, theme }) => {
  return {
    "& .MuiInputBase-root": {
      ...formCommonStyles(theme),
      padding: getPadding({ size, theme, $append })?.main,
      fontSize: getFontSize({ size, theme })?.main,
      lineHeight: getLineHeight({ size, theme })?.main
    },
    "& .MuiFormHelperText-root": {
      fontSize: theme.typography.fontSizeXs3,
      fontWeight: theme.typography.fontWeightNormal,
      color: error ? colors.text.negative : colors.text.secondary
    },
    "& .MuiFormLabel-root": {
      display: "block",
      color: theme.palette.gray[700],
      fontSize: theme.typography.fontSizeXs2,
      fontWeight: theme.typography.fontWeightNormal,
      lineHeight: theme.typography.lineHeightXs2,
      marginBottom: theme.spacing(1)
    },
    [theme.breakpoints.down("sm")]: {
      "& .MuiInputBase-root": {
        padding: getPadding({ size, theme, $append })?.mobile,
        fontSize: getFontSize({ size, theme })?.mobile,
        lineHeight: getLineHeight({ size, theme })?.mobile
      },
      "& .MuiFormHelperText-root": {
        fontSize: theme.typography.fontSizeXs4,
        lineHeight: theme.typography.lineHeightXs4
      }
    }
  }
})

const TextField: React.FC<TextFieldProps> = forwardRef(
  ({ color = "secondary", size = "md", error, disabled, InputProps, actionButtonProps, variant, ...props }, ref) => {
    const inputProps = (() => {
      if (InputProps) {
        const { endAdornment, ...rest } = InputProps
        return { endAdornment, InputProps: rest }
      }
      return undefined
    })()

    const append = Boolean(error ?? inputProps?.endAdornment ?? actionButtonProps)

    return (
      <StyledTextField
        ref={ref}
        size={size}
        error={error}
        variant={variant}
        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        $append={Boolean(error || inputProps?.endAdornment || actionButtonProps)}
        InputProps={{
          ...inputProps?.InputProps,
          error,
          color,
          disabled,
          className: `Input-${variant as string}`,
          endAdornment: append ? (
            <EndAdornment
              size={size}
              error={error}
              actionButtonProps={actionButtonProps}
              endAdornment={inputProps?.endAdornment}
            />
          ) : (
            false
          )
        }}
        {...props}
      />
    )
  }
)

export default TextField
