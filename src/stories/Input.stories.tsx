import { Story, Meta } from "@storybook/react"
import MuiInputAdornment from "@mui/material/InputAdornment"

import Icon from "../components/Icon"
import Input, { InputProps } from "../components/Input"
import { inputArgTypes } from "./utils/formControlStories"
import { AdornmentStoryProps, getAdornmentIconProps } from "./utils/adornmentStories"

interface InputStoryProps extends AdornmentStoryProps, InputProps {
  actionButton: boolean
}

const Template: Story<InputStoryProps> = (args: InputStoryProps) => {
  const startAdornmentIconProps = getAdornmentIconProps(args, "start")
  const endAdornmentIconProps = getAdornmentIconProps(args, "end")

  const {
    startAdornmentKey,
    startAdornmentColor,
    startAdornmentRotation,
    startAdornmentSize,
    endAdornmentKey,
    endAdornmentColor,
    endAdornmentRotation,
    endAdornmentSize,
    actionButton,
    ...inputProps
  } = args

  return (
    <Input
      {...inputProps}
      actionButtonProps={
        actionButton
          ? {
              disabled: inputProps.disabled,
              color: "inverse",
              children: "Click",
              onClick: () => console.log("clicked")
            }
          : undefined
      }
      startAdornment={
        startAdornmentIconProps ? (
          <MuiInputAdornment position="start">
            <Icon {...startAdornmentIconProps} />
          </MuiInputAdornment>
        ) : undefined
      }
      endAdornment={
        endAdornmentIconProps ? (
          <MuiInputAdornment position="end">
            <Icon {...endAdornmentIconProps} />
          </MuiInputAdornment>
        ) : undefined
      }
    />
  )
}

export const Default = Template.bind({})

export default {
  title: "Form Controls/Input",
  component: Input,
  argTypes: inputArgTypes
} as Meta
