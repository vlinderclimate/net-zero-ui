import React from "react"
import { Story, Meta } from "@storybook/react"
import MuiInputAdornment from "@mui/material/InputAdornment"
import MuiBox from "@mui/material/Box"

import Icon from "../components/Icon"
import IconButton from "../components/IconButton"
import TextField, { TextFieldProps } from "../components/TextField"
import RangeSlider from "../components/RangeSlider"
import { textFieldArgTypes } from "./utils/formControlStories"
import { AdornmentStoryProps, getAdornmentIconProps } from "./utils/adornmentStories"

interface TextFieldStoryProps extends TextFieldProps, AdornmentStoryProps {
  actionButton: boolean
}

const Template: Story<TextFieldStoryProps> = (args) => {
  const startAdornmentIconProps = getAdornmentIconProps(args, "start")
  const endAdornmentIconProps = getAdornmentIconProps(args, "end")

  const { id, label, helperText, error, disabled, fullWidth, size, color, placeholder, actionButton, variant } = args

  return (
    <TextField
      id={id}
      label={label}
      helperText={helperText}
      placeholder={placeholder}
      size={size}
      color={color}
      error={error}
      disabled={disabled}
      fullWidth={fullWidth}
      variant={variant}
      actionButtonProps={
        actionButton
          ? {
              disabled: false,
              variant: "outlined",
              color: "primary",
              children: "Submit",
              onClick: () => console.log("clicked")
            }
          : undefined
      }
      InputProps={{
        startAdornment: startAdornmentIconProps ? (
          <MuiInputAdornment position="start">
            <Icon {...startAdornmentIconProps} />
          </MuiInputAdornment>
        ) : undefined,
        endAdornment: endAdornmentIconProps ? (
          <MuiInputAdornment position="end">
            <Icon {...endAdornmentIconProps} />
          </MuiInputAdornment>
        ) : undefined
      }}
    />
  )
}

/**
 * Stories
 */
export const Default = Template.bind({})

export const ClearText = () => {
  const [value, setValue] = React.useState("")
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <TextField
      id="clear-text"
      label="Find "
      helperText="Request should be shorter than 5 characters"
      placeholder="Please enter text"
      color="secondary"
      value={value}
      variant="filled"
      onChange={handleChange}
      error={value.length > 5}
      fullWidth
      InputProps={{
        startAdornment: (
          <MuiInputAdornment position="start">
            <Icon iconKey="search" size="md" />
          </MuiInputAdornment>
        ),
        endAdornment: (
          <MuiInputAdornment position="end">
            <IconButton iconProps={{ iconKey: "close", size: "md", color: "secondary" }} onClick={() => setValue("")} />
          </MuiInputAdornment>
        )
      }}
    />
  )
}

export const ActionButton = () => {
  const [value, setValue] = React.useState("")
  const [isError, setIsError] = React.useState(false)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    setIsError(value.length >= 1 && !value.includes("@"))
  }

  return (
    <TextField
      id="action-button"
      label="Email"
      helperText="Please enter valid email address"
      placeholder="Please enter email address"
      value={value}
      onChange={handleChange}
      variant="filled"
      error={isError}
      fullWidth
      actionButtonProps={{
        disabled: false,
        children: "Submit",

        onClick: () => console.log("clicked")
      }}
      InputProps={{
        endAdornment: !isError ? (
          <MuiInputAdornment position="end">
            <Icon iconKey="arrowRight" size="md" />
          </MuiInputAdornment>
        ) : undefined
      }}
    />
  )
}

export const WithRangeSlider = () => {
  const [value, setValue] = React.useState("")
  const [isError, setIsError] = React.useState(false)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    setIsError(value.length >= 1 && !value.includes("@"))
  }

  return (
    <>
      <TextField
        id="action-button"
        label="Coal"
        placeholder="Amount"
        helperText={
          <MuiBox mt={-2.6}>
            <RangeSlider min={0} max={100} color="primary" size="small" defaultValue={20} />
          </MuiBox>
        }
        value={value}
        onChange={handleChange}
        variant="outlined"
        color="primary"
        error={isError}
        size="xs"
        fullWidth
        actionButtonProps={{
          disabled: false,
          variant: "outlined",
          children: "Submit",
          onClick: () => console.log("clicked")
        }}
      />
    </>
  )
}

export default {
  title: "Form Controls/TextField",
  component: TextField,
  argTypes: textFieldArgTypes
} as Meta
