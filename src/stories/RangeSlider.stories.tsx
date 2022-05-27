import { Story, Meta } from "@storybook/react"
import RangeSlider, { RangeSliderProps } from "../components/RangeSlider"

interface StoryRangeSliderProps extends RangeSliderProps {
  valueFormat: string
}

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
  size: {
    name: "size",
    defaultValue: "small"
  },
  valueFormat: {
    name: "valueFormat",
    defaultValue: " t",
    control: {
      type: "text"
    },
    table: { category: "Value Format" }
  },
  isRtl: { table: { disable: true } },
  disableSwap: { table: { disable: true } },
  componentsProps: { table: { disable: true } },
  components: { table: { disable: true } },
  tabIndex: { table: { disable: true } },
  sx: { table: { disable: true } },
  classes: { table: { disable: true } },
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

const MIN = 1
const MAX = 180

const marks = [
  {
    value: MIN,
    label: "min"
  },
  {
    value: MAX / 2,
    label: MAX / 2
  },
  {
    value: MAX,
    label: "max"
  }
]

const valueLabelFormat = (value: number, format: string) => {
  return `${value}${format}`
}

const Template: Story<StoryRangeSliderProps> = (args) => {
  return (
    <RangeSlider
      min={MIN}
      max={MAX}
      marks={marks}
      valueLabelDisplay="auto"
      getAriaValueText={(val) => valueLabelFormat(val, args.valueFormat)}
      valueLabelFormat={(val) => valueLabelFormat(val, args.valueFormat)}
      color="primary"
      defaultValue={20}
      {...args}
    />
  )
}

export const Default = Template.bind({})

export default {
  title: "Form Controls/RangeSlider",
  component: RangeSlider,
  argTypes
} as Meta
