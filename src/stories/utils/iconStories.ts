import colors from "../../theme/colors"
import { IconKeyVariants, IconSizeVariants, IconProps } from "../../components/Icon"

export const iconColorKeys = [...Object.keys(colors.icon), ""]

export interface IconStoriesProps {
  iconKey: IconProps["iconKey"]
  color?: IconProps["color"]
  size?: IconProps["size"]
  rotate?: IconProps["rotate"]
}

export const iconArgTypes = {
  iconKey: {
    name: "icon key",
    description: "The key name of icon component.",
    defaultValue: IconKeyVariants[0],
    options: IconKeyVariants,
    control: { type: "select" }
  },
  color: {
    name: "color",
    defaultValue: iconColorKeys[0],
    options: iconColorKeys,
    control: { type: "select" }
  },
  size: {
    name: "size",
    defaultValue: IconSizeVariants[2],
    options: IconSizeVariants,
    control: { type: "select" }
  },
  rotate: {
    name: "rotate",
    defaultValue: 0,
    control: { type: "number" }
  },
  className: { table: { disable: true } }
}
