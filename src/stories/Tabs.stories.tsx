import { Story, Meta } from "@storybook/react"
import React from "react"
import Tab from "../components/Tab"
import Tabs, { TabsProps } from "../components/Tabs"
import TabPanel from "../components/TabPanel"
import Card, { CardColorVariants, CardSizeVariants } from "../components/Card"
import Container from "../components/Container"

const argTypes = {
  onChange: { table: { disable: true } },
  value: { table: { disable: true } },
  list: { table: { disable: true } },
  component: { table: { disable: true } },
  ref: { table: { disable: true } },
  square: { table: { disable: true } },
  classes: { table: { disable: true } },
  elevation: { table: { disable: true } },
  children: { table: { disable: true } },
  tabIndex: { table: { disable: true } },
  raised: { table: { disable: true } },
  action: { table: { disable: true } },
  centerRipple: { table: { disable: true } },
  disableRipple: { table: { disable: true } },
  disableTouchRipple: { table: { disable: true } },
  disableFocusRipple: { table: { disable: true } },
  focusRipple: { table: { disable: true } },
  label: { table: { disable: true } },
  TouchRippleProps: { table: { disable: true } },
  onFocusVisible: { table: { disable: true } },
  focusVisibleClassName: { table: { disable: true } },
  LinkComponent: { table: { disable: true } },
  sx: { table: { disable: true } },
  allowScrollButtonsMobile: { table: { disable: true } },
  tabProps: { table: { disable: true } },
  "aria-label": { table: { disable: true } },
  "aria-labelledby": { table: { disable: true } },
  ScrollButtonComponent: { table: { disable: true } },
  scrollButtons: { table: { disable: true } },
  selectionFollowsFocus: { table: { disable: true } },
  TabIndicatorProps: { table: { disable: true } },
  textColor: { table: { disable: true } },
  TabScrollButtonProps: { table: { disable: true } },
  visibleScrollbar: {
    defaultValue: false,
    control: { type: "boolean" }
  },
  disabled: {
    defaultValue: false,
    control: { type: "boolean" }
  },
  variant: {
    defaultValue: "standard",
    control: { type: "select" },
    options: ["standard", "scrollable", "fullWidth"]
  },
  centered: {
    defaultValue: false,
    control: { type: "boolean" }
  }
}

const Template: Story<TabsProps> = (args) => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const list = ["General", "Fuel and energy", "Travel", "Shipping", "Materials & Inventory", "Services"]

  return (
    <>
      <Card color={CardColorVariants.Muted} size={CardSizeVariants.Initial}>
        <Container>
          <Tabs {...args} value={value} onChange={handleChange}>
            {list.map((item, i) => (
              <Tab label={item} index={i} key={i} />
            ))}
          </Tabs>
        </Container>
      </Card>

      <Container>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Container>
    </>
  )
}

export const Default = Template.bind({})

export default {
  title: "Components/Tabs",
  component: Tabs,
  argTypes
} as Meta
