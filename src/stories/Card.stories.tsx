import { Story, Meta } from "@storybook/react"
import Card, { CardProps, CardColorVariants, CardSizeVariants } from "../components/Card"

const argTypes = {
  children: {
    defaultValue: "Card text",
    control: { type: "text" }
  },
  color: {
    name: "color",
    description: "The color of the component. It supports those theme colors that make sense for this component.",
    defaultValue: CardColorVariants.Initial,
    options: CardColorVariants,
    control: {
      type: "select"
    },
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "initial" }
    }
  },
  size: {
    name: "size",
    description: "The size (paddings) of the component.",
    defaultValue: CardSizeVariants.Medium,
    options: CardSizeVariants,
    control: {
      type: "select"
    },
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "medium" }
    }
  },
  selected: {
    name: "selected",
    description: "Add selected state.",
    defaultValue: false,
    control: {
      type: "boolean"
    },
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: false }
    }
  },
  $bubble: {
    name: "$bubble",
    description: "Add bubble style.",
    defaultValue: false,
    control: {
      type: "boolean"
    },
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: false }
    }
  },
  component: { table: { disable: true } },
  ref: { table: { disable: true } },
  square: { table: { disable: true } },
  classes: { table: { disable: true } },
  elevation: { table: { disable: true } },
  variant: { table: { disable: true } },
  raised: { table: { disable: true } },
  sx: { table: { disable: true } }
}

const Template: Story<CardProps> = (args) => {
  return <Card {...args} />
}

export const Default = Template.bind({})

export default {
  title: "Components/Card",
  component: Card,
  argTypes
} as Meta
