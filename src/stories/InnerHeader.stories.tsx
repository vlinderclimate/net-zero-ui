import { Story, Meta } from "@storybook/react"

import InnerHeader, { InnerHeaderProps } from "../components/shared/InnerHeader"
import MuiBox from "@mui/material/Box"
import Typography from "../components/Typography"
import Button from "../components/Button"
import Icon from "../components/Icon"

const argTypes = {
  headerBg: {
    name: "headerBg",
    defaultValue: "green",
    options: ["green", "blue"],
    control: { type: "select" }
  },
  title: {
    name: "title",
    defaultValue: "Vlinder Kenya Blue Carbon",
    control: { type: "text" }
  },
  image: {
    name: "",
    defaultValue:
      "https://images.ctfassets.net/xjhxiihvmjxq/392Qbn8RJ96idK2uOPOvNc/b4858279bb463e55ac35b907a8ffc758/kenya-card.jpg?h=250",
    control: { type: "text" }
  },
  imageWidth: {
    name: "imageWidth",
    defaultValue: "120",
    control: { type: "number" }
  }
}

interface DescriptionItem {
  title?: number | string
  value?: number | string
}

const description = [
  {
    value: 30,
    title: "USD"
  },

  {
    value: 1,
    title: "tCO2"
  }
]

const Template: Story<InnerHeaderProps> = (args) => {
  return (
    <InnerHeader
      backButton={
        <Button size="lg" variant="outlined" color="primary" startIcon={<Icon iconKey="arrowLeft" size="md" />} />
      }
      {...args}
    >
      <MuiBox display="flex" gap={1} alignItems="baseline">
        {description.map((item: DescriptionItem, i: number) => (
          <MuiBox display="flex" alignItems="baseline" position="relative">
            {i > 0 && (
              <Typography color="secondary" variant="heroParagraph">
                /
              </Typography>
            )}
            <Typography variant={i < 1 ? "h2" : "heroParagraph"} mr={0.5} color={i < 1 ? "primary" : "supporting"}>
              {item.value}
            </Typography>
            <Typography variant="heroParagraph" color={i < 1 ? "primary" : "supporting"}>
              {item.title}
            </Typography>
          </MuiBox>
        ))}
      </MuiBox>
    </InnerHeader>
  )
}

export const Default = Template.bind({})

export default {
  title: "Shared Components/InnerHeader",
  component: InnerHeader,
  argTypes
} as Meta
