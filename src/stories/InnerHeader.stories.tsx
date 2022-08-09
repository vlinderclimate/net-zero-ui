import { Story, Meta } from "@storybook/react"

import InnerHeader, { InnerHeaderProps } from "../components/shared/InnerHeader"
import MuiBox from "@mui/material/Box"
import Typography from "../components/Typography"
import Button from "../components/Button"
import Icon from "../components/Icon"
import { styled } from "@mui/material"

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
  const Image = styled("img")(({ theme }) => ({
    maxWidth: "100%",
    display: "block",
    backgroundColor: theme.palette.gray[400],
    objectFit: "contain"
  }))

  return (
    <InnerHeader
      backButton={
        <Button size="lg" variant="outlined" color="primary" startIcon={<Icon iconKey="arrowLeft" size="md" />} />
      }
      image={
        <Image
          src="https://images.ctfassets.net/xjhxiihvmjxq/392Qbn8RJ96idK2uOPOvNc/b4858279bb463e55ac35b907a8ffc758/kenya-card.jpg?h=250"
          alt="alt"
          width={120}
          height={120}
        />
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
