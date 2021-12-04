import { Story, Meta } from "@storybook/react"
import Tooltip, { TooltipProps, TooltipSizeVariants } from "../components/Tooltip"
import Icon from "../components/Icon"
import Button from "../components/Button"

const argTypes = {
  title: {
    defaultValue: "Tootlip text",
    control: { type: "text" }
  },
  size: {
    name: "size",
    description: "The size (paddings) of the component.",
    defaultValue: TooltipSizeVariants.Medium,
    options: TooltipSizeVariants,
    control: {
      type: "select"
    },
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "medium" }
    }
  },
  ref: { table: { disable: true } }
}

const Template: Story<TooltipProps> = (args) => {
  return (
    <Tooltip {...args}>
      <Button variant="text" color="secondary" startIcon={<Icon iconKey="infoCircle" size="md" />} />
    </Tooltip>
  )
}

export const Default = Template.bind({})

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes
} as Meta
