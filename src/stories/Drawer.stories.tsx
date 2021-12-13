import { useState } from "react"
import { Story, Meta } from "@storybook/react"
import Drawer from "../components/Drawer"
import Button from "../components/Button"
import Typography from "../components/Typography"

const argTypes = {
  size: {
    defaultValue: "sm",
    control: { type: "select" },
    options: ["sm", "md", "safeArea", "fullScreen"]
  },
  transparentBackdrop: {
    defaultValue: false,
    control: { type: "boolean" }
  },
  closeButton: {
    defaultValue: false,
    control: { type: "boolean" }
  },
  titleId: { table: { disable: true } },
  descriptionId: { table: { disable: true } },
  ref: { table: { disable: true } },
  sx: { table: { disable: true } },
  classes: { table: { disable: true } },
  closeAfterTransition: { table: { disable: true } },
  componentsProps: { table: { disable: true } },
  container: { table: { disable: true } },
  disableAutoFocus: { table: { disable: true } },
  disableEnforceFocus: { table: { disable: true } },
  disableEscapeKeyDown: { table: { disable: true } },
  hideBackdrop: { table: { disable: true } },
  keepMounted: { table: { disable: true } },
  onBackdropClick: { table: { disable: true } },
  onClose: { table: { disable: true } },
  disableScrollLock: { table: { disable: true } },
  disableRestoreFocus: { table: { disable: true } },
  disablePortal: { table: { disable: true } },
  components: { table: { disable: true } },
  BackdropComponent: { table: { disable: true } },
  BackdropProps: { table: { disable: true } },
  children: { table: { disable: true } },
  open: { table: { disable: true } }
}

const Template: Story = ({ size, closeButton, transparentBackdrop }) => {
  const [open, setOpen] = useState(false)

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
    ) {
      return
    }

    setOpen(open)
  }

  console.log(open)

  return (
    <>
      <Button color="primary" onClick={toggleDrawer(true)}>
        Open Aside
      </Button>

      <Drawer
        open={open}
        size={size}
        closeButton={closeButton}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        transparentBackdrop={transparentBackdrop}
      >
        <Typography variant="h2">This is title of the drawer.</Typography>
        <Typography variant="description">
          This is content of the drawer. Consequat nullam imperdiet rhoncus nibh netus vel, pulvinar urna auctor euismod
          tortor class, risus congue ad quis nulla. Ligula quisque ridiculus lacus per maecenas pulvinar rhoncus velit
          platea, molestie montes tempor congue aenean tristique suscipit urna. Curae magna placerat sociosqu est netus
          convallis suspendisse viverra, morbi a aptent tortor ornare lorem dui, purus pulvinar odio rhoncus augue sit
          aliquam.
        </Typography>
      </Drawer>
    </>
  )
}

export const Default = Template.bind({})

export default {
  title: "Components/Drawer",
  component: Drawer,
  argTypes
} as Meta
