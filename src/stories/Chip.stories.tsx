import { Story, Meta } from "@storybook/react"
import Chip, { ChipProps } from "../components/Chip"

const argTypes = {
  onDelete: { table: { disable: true } },
  clickable: { table: { disable: true } },
  label: { table: { disable: true } },
  children: { table: { disable: true } },
  avatar: { table: { disable: true } },
  classes: { table: { disable: true } },
  sx: { table: { disable: true } },
  ref: { table: { disable: true } },
  icon: { table: { disable: true } },
  deleteIcon: { table: { disable: true } }
}

const Template: Story<ChipProps> = (args) => {
  return <Chip label="Chip" {...args} />
}

export const Default = Template.bind({})

export default {
  title: "Components/Chip",
  component: Chip,
  argTypes
} as Meta
