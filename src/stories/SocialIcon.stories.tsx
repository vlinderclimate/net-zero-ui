import { Story, Meta } from "@storybook/react"
import SocialIcon, { SocialIconProps, SocialIconVariant } from "../components/SocialIcon"

const argTypes = {
  size: {
    name: "size",
    defaultValue: "md",
    options: ["xs", "sm", "md", "lg"],
    control: { type: "select" }
  },
  variant: {
    name: "variant",
    defaultValue: SocialIconVariant.Instagram,
    options: [
      SocialIconVariant.Telegram,
      SocialIconVariant.Twitter,
      SocialIconVariant.YouTube,
      SocialIconVariant.Instagram,
      SocialIconVariant.LinkedIn,
      SocialIconVariant.Medium,
      SocialIconVariant.Reddit
    ],
    control: { type: "select" }
  },

  url: {
    name: "URL",
    defaultValue: "https://www.instagram.com/jucoder_/",
    control: { type: "text" }
  }
}

const Template: Story<SocialIconProps> = (args) => {
  return <SocialIcon {...args} />
}

export const Default = Template.bind({})

export default {
  title: "Components/SocialIcon",
  component: SocialIcon,
  argTypes
} as Meta
