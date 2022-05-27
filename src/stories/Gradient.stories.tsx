import { Story, Meta } from "@storybook/react"
import Card from "../components/Card"
import Gradient, { GradientProps } from "../components/Gradient"

const argTypes = {
  component: { table: { disable: true } },
  ref: { table: { disable: true } },
  square: { table: { disable: true } },
  classes: { table: { disable: true } },
  elevation: { table: { disable: true } },
  variant: { table: { disable: true } },
  raised: { table: { disable: true } },
  sx: { table: { disable: true } }
}

const Template: Story<GradientProps> = (args) => {
  return (
    <Card sx={{ width: 200, height: 200 }}>
      <Gradient {...args} />
    </Card>
  )
}

export const Default = Template.bind({})

export default {
  title: "Components/Gradient",
  component: Gradient,
  argTypes
} as Meta
