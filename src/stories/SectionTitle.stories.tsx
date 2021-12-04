import { Story, Meta } from "@storybook/react"

import SectionTitle, { SectionTitleProps } from "../components/shared/SectionTitle"
import Section from "../components/shared/Section"

const argTypes = {
  align: {
    name: "align",
    defaultValue: "left",
    options: ["left", "center", "right"],
    control: { type: "select" }
  },
  title: {
    name: "Title",
    defaultValue: "This is title",
    control: { type: "text" }
  },
  description: {
    name: "description",
    defaultValue: "This is description",
    control: { type: "text" }
  },
  subtitle: {
    name: "subtitle",
    defaultValue: "This is subtitle",
    control: { type: "text" }
  }
}

const Template: Story<SectionTitleProps> = (args) => {
  return (
    <Section topIndent>
      <SectionTitle {...args} />
    </Section>
  )
}

export const Default = Template.bind({})

export default {
  title: "Shared Components/SectionTitle",
  component: SectionTitle,
  argTypes
} as Meta
