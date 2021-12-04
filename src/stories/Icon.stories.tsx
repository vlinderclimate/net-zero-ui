import { Story, Meta } from "@storybook/react"
import Icon from "../components/Icon"
import { iconArgTypes, IconStoriesProps } from "./utils/iconStories"

const Template: Story<IconStoriesProps> = (args) => {
  return <Icon {...args} />
}

export const Default = Template.bind({})

export default {
  title: "Components/Icons",
  component: Icon,
  argTypes: iconArgTypes
} as Meta
