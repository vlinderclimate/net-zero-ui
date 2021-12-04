import { IconProps } from "../../components/Icon"
import { iconArgTypes } from "./iconStories"

export interface AdornmentStoryProps {
  startAdornmentKey?: IconProps["iconKey"]
  startAdornmentColor?: IconProps["color"]
  startAdornmentRotation?: IconProps["rotate"]
  startAdornmentSize?: IconProps["size"]
  endAdornmentKey?: IconProps["iconKey"]
  endAdornmentColor?: IconProps["color"]
  endAdornmentRotation?: IconProps["rotate"]
  endAdornmentSize?: IconProps["size"]
}

export const adornmentStoryControls = {
  /**
   * startAdornment controls
   */
  startAdornmentProps: { table: { disable: true } },
  startAdornmentKey: {
    ...iconArgTypes.iconKey,
    defaultValue: undefined,
    table: { category: "Start Adornment" }
  },
  startAdornmentColor: {
    ...iconArgTypes.color,
    table: { category: "Start Adornment" }
  },
  startAdornmentRotation: {
    ...iconArgTypes.rotate,
    table: { category: "Start Adornment" }
  },
  startAdornmentSize: {
    ...iconArgTypes.size,
    table: { category: "Start Adornment" }
  },
  /**
   * endAdornment controls
   */
  endAdornmentProps: { table: { disable: true } },
  endAdornmentKey: {
    ...iconArgTypes.iconKey,
    defaultValue: undefined,
    table: { category: "End Adornment" }
  },
  endAdornmentColor: {
    ...iconArgTypes.color,
    table: { category: "End Adornment" }
  },
  endAdornmentRotation: {
    ...iconArgTypes.rotate,
    table: { category: "End Adornment" }
  },
  endAdornmentSize: {
    ...iconArgTypes.size,
    table: { category: "End Adornment" }
  }
}

export const getAdornmentIconProps = (args: AdornmentStoryProps, type: "start" | "end"): IconProps | undefined => {
  if ((type === "start" && !args.startAdornmentKey) || (type === "end" && !args.endAdornmentKey)) return undefined

  const argIconProps =
    type === "start"
      ? {
          iconKey: args.startAdornmentKey,
          color: args.startAdornmentColor,
          rotate: args.startAdornmentRotation,
          size: args.startAdornmentSize
        }
      : {
          iconKey: args.endAdornmentKey,
          color: args.endAdornmentColor,
          rotate: args.endAdornmentRotation,
          size: args.endAdornmentSize
        }

  return {
    iconKey: argIconProps.iconKey as IconProps["iconKey"],
    color: argIconProps.color,
    rotate: argIconProps.rotate,
    size: argIconProps.size
  }
}
