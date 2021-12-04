import { Story, Meta } from "@storybook/react"
// import { withDesign } from "storybook-addon-designs"

import { buttonArgTypes, ButtonStoriesProps } from "./utils/buttonStories"
import Icon from "../components/Icon"
import Button from "../components/Button"

const Template: Story<ButtonStoriesProps> = (args: ButtonStoriesProps) => {
  const {
    variant,
    color,
    size,
    fullWidth,
    href,
    children,
    align,
    disabled,
    startIconKey,
    startIconColor,
    startIconRotate,
    startIconSize,
    endIconKey,
    endIconColor,
    endIconRotate,
    endIconSize
  } = args

  return (
    <Button
      variant={variant}
      startIcon={
        startIconKey ? (
          <Icon iconKey={startIconKey} size={startIconSize} color={startIconColor} rotate={startIconRotate} />
        ) : undefined
      }
      endIcon={
        endIconKey ? (
          <Icon iconKey={endIconKey} size={endIconSize} color={endIconColor} rotate={endIconRotate} />
        ) : undefined
      }
      color={color}
      size={size}
      fullWidth={fullWidth}
      children={children}
      align={align}
      disabled={disabled}
      href={href}
      linkProps={{ target: "_blank", rel: "noopener noreferrer" }}
      LinkComponent="a"
    />
  )
}

export const Default = Template.bind({})

// 🎨 TODO: add Figma board
// Default.parameters = {
//   design: {
//     type: "figma",
//     url: "https://www.figma.com/file/BGreZg0shWoCpJm6hnmIiP/Sketch-temporary-imported-views?node-id=142%3A5"
//   }
// }

export default {
  title: "Components/Buttons",
  component: Button,
  argTypes: buttonArgTypes
  // decorators: [withDesign] // 🎨 TODO: add Figma board
} as Meta
