import React from "react"

import Icon, { IconProps } from "./Icon"
import Button, { ButtonProps } from "./Button"
import { ReadingColorVariant } from "../theme/colors"

export enum SocialIconVariant {
  Telegram = "telegram",
  Twitter = "twitter",
  YouTube = "youTube",
  Instagram = "instagram",
  LinkedIn = "linkedIn",
  Medium = "medium",
  Reddit = "reddit"
}

export interface SocialIconProps {
  variant: SocialIconVariant
  url: string
  size: Exclude<ButtonProps["size"], undefined>
  color?: ReadingColorVariant
}

const iconSizeMap: Record<SocialIconProps["size"], Exclude<IconProps["size"], undefined>> = {
  xxs: "xs",
  xs: "sm",
  sm: "md",
  md: "md",
  lg: "lg"
}

const SocialIcon: React.FC<SocialIconProps> = ({ variant, size = "sm", color = "secondary", url, ...props }) => {
  return (
    <Button
      size={size}
      startIcon={<Icon color={color} iconKey={variant} rotate={0} size={iconSizeMap[size]} />}
      variant="outlined"
      href={url}
      {...props}
    />
  )
}

export default SocialIcon
