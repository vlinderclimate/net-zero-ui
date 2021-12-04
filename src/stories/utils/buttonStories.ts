import { ButtonProps, ButtonColorVariants } from "../../components/Button"

import { iconArgTypes, IconStoriesProps } from "./iconStories"

export interface ButtonStoriesProps {
  variant?: ButtonProps["variant"]
  color?: ButtonProps["color"]
  size?: ButtonProps["size"]
  fullWidth?: ButtonProps["fullWidth"]
  href?: ButtonProps["href"]
  children?: ButtonProps["children"]
  align?: ButtonProps["align"]
  startIconKey?: IconStoriesProps["iconKey"]
  startIconColor?: IconStoriesProps["color"]
  startIconSize?: IconStoriesProps["size"]
  startIconRotate?: IconStoriesProps["rotate"]
  endIconKey?: IconStoriesProps["iconKey"]
  endIconColor?: IconStoriesProps["color"]
  endIconSize?: IconStoriesProps["size"]
  endIconRotate?: IconStoriesProps["rotate"]
  disabled?: ButtonProps["disabled"]
}

export const buttonArgTypes = {
  variant: {
    name: "variant",
    defaultValue: "contained",
    options: ["text", "outlined", "contained", "underline"],
    control: { type: "select" }
  },
  color: {
    name: "color",
    description: "The color of the component. It supports those theme colors that make sense for this component.",
    defaultValue: ButtonColorVariants[0],
    options: ButtonColorVariants,
    control: { type: "select" }
  },
  size: {
    name: "size",
    defaultValue: "md",
    options: ["xs", "sm", "md", "lg"],
    control: { type: "select" }
  },
  fullWidth: {
    name: "fullWidth",
    defaultValue: false,
    control: { type: "boolean" }
  },
  href: {
    name: "href",
    defaultValue: "",
    control: { type: "text" }
  },
  children: {
    name: "children",
    defaultValue: "Button text",
    control: { type: "text" }
  },
  align: {
    name: "text align",
    description: "Button text alignment",
    defaultValue: "center",
    options: ["center", "left", "right"],
    control: { type: "select" }
  },
  startIcon: { table: { disable: true } },
  startIconKey: {
    ...iconArgTypes.iconKey,
    defaultValue: undefined,
    table: { category: "startIcon" }
  },
  startIconColor: {
    ...iconArgTypes.color,
    table: { category: "startIcon" }
  },
  startIconRotate: {
    ...iconArgTypes.rotate,
    table: { category: "startIcon" }
  },
  startIconSize: {
    ...iconArgTypes.size,
    table: { category: "startIcon" }
  },
  endIcon: { table: { disable: true } },
  endIconKey: {
    ...iconArgTypes.iconKey,
    defaultValue: undefined,
    table: { category: "endIcon" }
  },
  endIconColor: {
    ...iconArgTypes.color,
    table: { category: "endIcon" }
  },
  endIconRotate: {
    ...iconArgTypes.rotate,
    table: { category: "endIcon" }
  },
  endIconSize: {
    ...iconArgTypes.size,
    table: { category: "endIcon" }
  },
  disabled: {
    name: "disabled",
    defaultValue: false,
    control: { type: "boolean" }
  },
  TouchRippleProps: { table: { disable: true } },
  onFocusVisible: { table: { disable: true } },
  focusVisibleClassName: { table: { disable: true } },
  focusRipple: { table: { disable: true } },
  disableTouchRipple: { table: { disable: true } },
  centerRipple: { table: { disable: true } },
  action: { table: { disable: true } },
  disableFocusRipple: { table: { disable: true } },
  disableElevation: { table: { disable: true } },
  disableRipple: { table: { disable: true } },
  ref: { table: { disable: true } },
  tabIndex: { table: { disable: true } },
  onlyIcon: { table: { disable: true } },
  sx: { table: { disable: true } },
  classes: { table: { disable: true } },
  LinkComponent: { table: { disable: true } }
}
