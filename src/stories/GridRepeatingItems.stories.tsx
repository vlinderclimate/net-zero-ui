import { Meta } from "@storybook/react"
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"

import { GridSize as MuiGridSize } from "@mui/material/Grid"
import { Item } from "./utils/gridStories"
import GridItem from "../components/GridItem"
import GridContainer from "../components/GridContainer"

const Template = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  const mdSize = Number.isInteger(12 / (3 as number)) ? 12 / (3 as number) : "auto"

  return (
    <GridContainer>
      {[...new Array(3)].map((num, index) => (
        <GridItem md={mdSize as MuiGridSize} key={index}>
          <Item>{isMobile ? "xs=12" : `md=${mdSize}`}</Item>
        </GridItem>
      ))}
    </GridContainer>
  )
}

export const Default = Template.bind({})

export default {
  title: "Grid/Repeating items",
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
