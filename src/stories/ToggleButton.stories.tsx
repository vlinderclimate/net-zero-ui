import { Story, Meta } from "@storybook/react"
import React from "react"
import ToggleButtonGroup, { ToggleButtonGroupProps } from "../components/ToggleButtonGroup"

const argTypes = {
  onChange: { table: { disable: true } },
  value: { table: { disable: true } },
  list: { table: { disable: true } },
  component: { table: { disable: true } },
  ref: { table: { disable: true } },
  square: { table: { disable: true } },
  classes: { table: { disable: true } },
  elevation: { table: { disable: true } },
  children: { table: { disable: true } },
  tabIndex: { table: { disable: true } },
  raised: { table: { disable: true } },
  action: { table: { disable: true } },
  centerRipple: { table: { disable: true } },
  disableRipple: { table: { disable: true } },
  disableTouchRipple: { table: { disable: true } },
  disableFocusRipple: { table: { disable: true } },
  focusRipple: { table: { disable: true } },
  label: { table: { disable: true } },
  TouchRippleProps: { table: { disable: true } },
  onFocusVisible: { table: { disable: true } },
  focusVisibleClassName: { table: { disable: true } },
  LinkComponent: { table: { disable: true } },
  sx: { table: { disable: true } },
  allowScrollButtonsMobile: { table: { disable: true } },
  tabProps: { table: { disable: true } },
  "aria-label": { table: { disable: true } },
  "aria-labelledby": { table: { disable: true } },
  ScrollButtonComponent: { table: { disable: true } },
  scrollButtons: { table: { disable: true } },
  selectionFollowsFocus: { table: { disable: true } },
  TabIndicatorProps: { table: { disable: true } },
  textColor: { table: { disable: true } },
  TabScrollButtonProps: { table: { disable: true } },
  selectedValue: { table: { disable: true } }
}

const Template: Story<ToggleButtonGroupProps> = (args) => {
  const [value, setValue] = React.useState("buy")

  const handleChange = (event: React.MouseEvent<HTMLElement>, newValue: string) => {
    if (newValue !== null) {
      setValue(newValue)
    }
  }

  const list: ToggleButtonGroupProps["list"] = [
    { value: "buy", children: "Buy" },
    { value: "sell", children: "Sell" }
  ]

  return <ToggleButtonGroup {...args} selectedValue={value} list={list} onChange={handleChange} />
}

export const Default = Template.bind({})

export default {
  title: "Components/ToggleButtonGroup",
  component: ToggleButtonGroup,
  argTypes
} as Meta
