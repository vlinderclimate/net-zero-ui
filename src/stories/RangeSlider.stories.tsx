import { Story, Meta } from "@storybook/react"
import RangeSlider, { RangeSliderProps } from "../components/RangeSlider"

const argTypes = {
  disabled: {
    name: "disabled",
    description: "Set disabled prop",
    defaultValue: false,
    control: {
      type: "boolean"
    },
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: false }
    }
  },
  isRtl: { table: { disable: true } },
  disableSwap: { table: { disable: true } },
  componentsProps: { table: { disable: true } },
  components: { table: { disable: true } },
  tabIndex: { table: { disable: true } },
  sx: { table: { disable: true } },
  classes: { table: { disable: true } },
  size: { table: { disable: true } },
  track: { table: { disable: true } },
  defaultValue: { table: { disable: true } },
  ref: { table: { disable: true } },
  "aria-label": { table: { disable: true } },
  "aria-labelledby": { table: { disable: true } },
  "aria-valuetext": { table: { disable: true } },
  getAriaLabel: { table: { disable: true } },
  onChange: { table: { disable: true } },
  getAriaValueText: { table: { disable: true } },
  onChangeCommitted: { table: { disable: true } },
  scale: { table: { disable: true } },
  component: { table: { disable: true } },
  ThumbComponent: { table: { disable: true } },
  valueLabelDisplay: { table: { disable: true } },
  valueLabelFormat: { table: { disable: true } },
  ValueLabelComponent: { table: { disable: true } },
  marks: { table: { disable: true } },
  min: { table: { disable: true } },
  max: { table: { disable: true } },
  name: { table: { disable: true } },
  step: { table: { disable: true } },
  value: { table: { disable: true } },
  orientation: { table: { disable: true } }
}

const Template: Story<RangeSliderProps> = (args) => {
  return <RangeSlider color="primary" defaultValue={20} {...args} />
}

export const Default = Template.bind({})

export default {
  title: "Form Controls/RangeSlider",
  component: RangeSlider,
  argTypes
} as Meta