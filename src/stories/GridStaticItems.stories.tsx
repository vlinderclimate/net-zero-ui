import { Meta } from "@storybook/react"
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"

import { Item } from "./utils/gridStories"
import GridItem from "../components/GridItem"
import GridContainer from "../components/GridContainer"

const Template = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <GridContainer>
      {[...new Array(12)].map((num, index) => (
        <GridItem md={1} key={index}>
          <Item>{isMobile ? "xs=12" : "md=1"}</Item>
        </GridItem>
      ))}

      <GridItem md={4}>
        <Item>{isMobile ? "xs=12" : "md=4"}</Item>
      </GridItem>
      <GridItem md={8}>
        <Item>{isMobile ? "xs=12" : "md=8"}</Item>
      </GridItem>

      <GridItem md={6}>
        <Item>{isMobile ? "xs=12" : "md=6"}</Item>
      </GridItem>
      <GridItem md={6}>
        <Item>{isMobile ? "xs=12" : "md=6"}</Item>
      </GridItem>

      <GridItem md={4}>
        <Item>{isMobile ? "xs=12" : "md=4"}</Item>
      </GridItem>
      <GridItem md={4}>
        <Item>{isMobile ? "xs=12" : "md=4"}</Item>
      </GridItem>
      <GridItem md={4}>
        <Item>{isMobile ? "xs=12" : "md=4"}</Item>
      </GridItem>
    </GridContainer>
  )
}

export const Default = Template.bind({})

export default {
  title: "Grid/Proportional items",
  component: GridContainer,
  subcomponents: { GridItem },
  parameters: {
    docs: {
      description: {
        component:
          "Both `GridContainer` and `GridItem` inherit Mui's `Grid` component, but preset with attributes that align with our design system."
      },
      source: {
        type: "code"
      }
    }
  }
} as Meta
