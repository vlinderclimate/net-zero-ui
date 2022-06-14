import { Story } from "@storybook/react"
import MenuItem from "@mui/material/MenuItem"
import SelectField, { SelectFieldProps } from "../components/SelectField"
import { SelectChangeEvent } from "@mui/material/Select"

import { inputArgTypes } from "./utils/formControlStories"
import React from "react"

interface SelectProps extends SelectFieldProps {}

// TODO: this component needs styling
// Waiting for design

const Template: Story<SelectProps> = (args: SelectProps) => {
  const [value, setValue] = React.useState("usd")

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value)
  }

  return (
    <SelectField
      label="Select currency"
      {...args}
      selectProps={{ value: value, onChange: (e) => handleChange(e as SelectChangeEvent) }}
      defaultValue="USD"
    >
      <MenuItem value="usd" selected>
        USD
      </MenuItem>
      <MenuItem value="eur">EUR</MenuItem>
      <MenuItem value="jpy">JPY</MenuItem>
    </SelectField>
  )
}

export const Default = Template.bind({})

export default {
  title: "Form Controls/Select",
  component: SelectField,
  argTypes: inputArgTypes
}
