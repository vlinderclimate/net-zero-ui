import { Story, Meta } from "@storybook/react"
import MuiBox from "@mui/material/Box"
import themeColors from "../theme/colors"
import Typography, { TypographyProps, TypographyVariants } from "../components/Typography"

const textColorKeys = [...Object.keys(themeColors.text), ""]

const argTypes = {
  children: {
    name: "children",
    description: "The content of the component.",
    defaultValue: "The quick brown fox jumps over the lazy dog.",
    control: {
      type: "text"
    },
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "-" }
    }
  },
  variant: {
    name: "variant",
    description: "Applies the theme typography styles.",
    defaultValue: "description",
    options: TypographyVariants,
    control: {
      type: "select"
    },
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "subtitle1" }
    }
  },
  color: {
    name: "color",
    description: "The color of the component. It supports those theme colors that make sense for this component.",
    defaultValue: themeColors.text.primary,
    options: textColorKeys,
    control: {
      type: "select"
    },
    table: {
      type: { summary: "string" },
      defaultValue: { summary: themeColors.text.primary }
    }
  },
  component: { table: { disable: true } }
}

const Template: Story<TypographyProps> = (args) => {
  return <Typography {...args} />
}

export const Specimen = () => {
  return (
    <MuiBox display="flex" gap={5}>
      <MuiBox>
        {TypographyVariants.slice(0, 19).map((item, index) => (
          <MuiBox mb={1} key={index}>
            <Typography variant={item}>{item}</Typography>
          </MuiBox>
        ))}
      </MuiBox>
      <MuiBox>
        {TypographyVariants.slice(19).map((item, index) => (
          <MuiBox mb={1} key={index}>
            <Typography variant={item}>{item}</Typography>
          </MuiBox>
        ))}
      </MuiBox>
    </MuiBox>
  )
}

export const Default = Template.bind({})

export default {
  title: "Components/Typography",
  component: Typography,
  argTypes
} as Meta
