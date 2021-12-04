import { Story, Meta } from "@storybook/react"

import InnerHeader, { InnerHeaderProps, Divider } from "../components/shared/InnerHeader"
import MuiBox from "@mui/material/Box"
import GridItem from "../components/GridItem"
import Typography from "../components/Typography"
import GridContainer from "../components/GridContainer"

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
    <InnerHeader {...args}>
      <GridContainer spacing={5}>
        {description.map((item: DescriptionItem, i: number) => (
          <GridItem xs sm="auto" key={i}>
            <MuiBox display="flex" alignItems="baseline" position="relative">
              <Typography variant="h3" mr={1} color={i < 1 ? "brand" : "primary"}>
                {item.value}
              </Typography>
              <Typography variant="title5" color={i < 1 ? "brand" : "primary"}>
                {item.title}
              </Typography>
              {i > 0 && <Divider />}
            </MuiBox>
          </GridItem>
        ))}
      </GridContainer>
    </InnerHeader>
  )
}

export const Default = Template.bind({})

export default {
  title: "Shared Components/InnerHeader",
  component: InnerHeader,
  argTypes
} as Meta
