import { Story, Meta } from "@storybook/react"
import Radio from "../components/Radio"
import RadioGroup from "../components/RadioGroup"
import FormControlLabel from "../components/FormControlLabel"
import Fieldset from "../components/Fieldset"
import FormLabel from "../components/FormLabel"

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
  size: { table: { disable: true } },
  ref: { table: { disable: true } },
  sx: { table: { disable: true } },
  classes: { table: { disable: true } },
  closeAfterTransition: { table: { disable: true } },
  componentsProps: { table: { disable: true } },
  container: { table: { disable: true } },
  disableAutoFocus: { table: { disable: true } },
  onFocusVisible: { table: { disable: true } },
  TouchRippleProps: { table: { disable: true } },
  hideBackdrop: { table: { disable: true } },
  keepMounted: { table: { disable: true } },
  onBackdropClick: { table: { disable: true } },
  onClose: { table: { disable: true } },
  action: { table: { disable: true } },
  centerRipple: { table: { disable: true } },
  disableTouchRipple: { table: { disable: true } },
  focusRipple: { table: { disable: true } },
  focusVisibleClassName: { table: { disable: true } },
  LinkComponent: { table: { disable: true } },
  children: { table: { disable: true } }
}

const Template: Story = (args) => {
  const icon = (
    <svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26 9V14C26 18.97 20.18 23 13 23V9H26Z" fill="#111111" />
      <path d="M13 18C5.82 18 0 13.97 0 9V14C0 18.97 5.82 23 13 23H25V18H13Z" fill="#FFD800" />
      <path
        d="M13 18C20.1797 18 26 13.9706 26 9C26 4.02944 20.1797 0 13 0C5.8203 0 0 4.02944 0 9C0 13.9706 5.8203 18 13 18Z"
        fill="#FF6E0B"
      />
      <path
        d="M13 14C16.866 14 20 11.7614 20 9C20 6.23858 16.866 4 13 4C9.13401 4 6 6.23858 6 9C6 11.7614 9.13401 14 13 14Z"
        fill="white"
      />
      <path d="M30 18H25V23H30V18Z" fill="#D8D8D8" />
      <path
        d="M27.5 21.25C27.9142 21.25 28.25 20.9142 28.25 20.5C28.25 20.0858 27.9142 19.75 27.5 19.75C27.0858 19.75 26.75 20.0858 26.75 20.5C26.75 20.9142 27.0858 21.25 27.5 21.25Z"
        fill="#111111"
      />
      <path d="M22.5 19.5H21.5V23H22.5V19.5Z" fill="#111111" />
      <path d="M16.5 19.5H15.5V23H16.5V19.5Z" fill="#111111" />
      <path d="M19.5 20.5H18.5V23H19.5V20.5Z" fill="#111111" />
      <path d="M13.5 20.5H12.5V23H13.5V20.5Z" fill="#111111" />
      <path d="M9.5 22.66C9.83 22.72 10.16 22.78 10.5 22.83V19.5H9.5V22.66Z" fill="#111111" />
    </svg>
  )

  return (
    <>
      <Fieldset>
        <FormLabel id="demo-row-radio-buttons-group-label">{icon} Units of measurement</FormLabel>
        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label">
          <FormControlLabel value="metric" control={<Radio {...args} />} label="Metric system" />
          <FormControlLabel value="imperial" control={<Radio {...args} />} label="Imperial system" />
        </RadioGroup>
      </Fieldset>
    </>
  )
}

export const Default = Template.bind({})

export default {
  title: "Form Controls/Radio",
  component: Radio,
  argTypes
} as Meta
