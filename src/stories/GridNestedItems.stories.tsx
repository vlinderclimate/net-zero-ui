import { Meta } from "@storybook/react"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme, styled, Theme } from "@mui/material/styles"

import { Item } from "./utils/gridStories"
import GridItem from "../components/GridItem"
import GridContainer from "../components/GridContainer"

interface StyledProps {
  theme: Theme
}

const NestedContainer = styled(GridContainer)(({ theme }: StyledProps) => ({
  "&": {
    backgroundColor: theme.palette.gray[300]
  }
}))

const Template = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <GridContainer>
      <NestedContainer item md={8} spacing={2}>
        <GridItem md={6}>
          <Item>{isMobile ? "xs=12" : "md=6"}</Item>
        </GridItem>
        <GridItem md={6}>
          <Item>{isMobile ? "xs=12" : "md=6"}</Item>
        </GridItem>
      </NestedContainer>

      <GridItem md={4}>
        <Item>{isMobile ? "xs=12" : "md=4"}</Item>
      </GridItem>
    </GridContainer>
  )
}

export const Default = Template.bind({})

export default {
  title: "Grid/Nested items",
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
