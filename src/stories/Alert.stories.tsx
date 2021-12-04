import { Story, Meta } from "@storybook/react"
import Alert, { AlertProps } from "../components/Alert"

import { iconArgTypes, IconStoriesProps } from "./utils/iconStories"
import Icon from "../components/Icon"

export interface AlertStoriesProps {
  color?: AlertProps["color"]
  rounded?: AlertProps["rounded"]
  children?: AlertProps["children"]
  iconKey: IconStoriesProps["iconKey"]
  iconColor?: IconStoriesProps["color"]
  iconSize?: IconStoriesProps["size"]
  iconRotate?: IconStoriesProps["rotate"]
}

const argTypes = {
  children: {
    defaultValue: "Alert message",
    control: { type: "text" }
  },
  rounded: {
    name: "rounded",
    description: "Set the rounded style for the component.",
    defaultValue: true,
    control: {
      type: "boolean"
    },
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: true }
    }
  },
  icon: { table: { disable: true } },
  iconKey: {
    ...iconArgTypes.iconKey,
    defaultValue: undefined,
    table: { category: "icon" }
  },
  iconColor: {
    ...iconArgTypes.color,
    table: { category: "icon" }
  },
  iconRotate: {
    ...iconArgTypes.rotate,
    table: { category: "icon" }
  },
  iconSize: {
    ...iconArgTypes.size,
    table: { category: "icon" }
  },
  component: { table: { disable: true } },
  ref: { table: { disable: true } },
  elevation: { table: { disable: true } },
  filled: { table: { disable: true } },
  square: { table: { disable: true } }
}

const Template: Story<AlertStoriesProps> = (args) => {
  const { children, color, rounded, iconKey, iconColor, iconRotate, iconSize, ...rest } = args

  return (
    <Alert
      color={color}
      rounded={rounded}
      {...rest}
      icon={iconKey ? <Icon iconKey={iconKey} size={iconSize} color={iconColor} rotate={iconRotate} /> : false}
    >
      {children}
    </Alert>
  )
}

export const Default = Template.bind({})

export default {
  title: "Components/Alert",
  component: Alert,
  argTypes
} as Meta
