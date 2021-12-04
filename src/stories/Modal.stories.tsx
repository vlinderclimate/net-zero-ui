import { useState } from "react"
import { Story, Meta } from "@storybook/react"
import Modal from "../components/Modal"

import Button from "../components/Button"
import Typography from "../components/Typography"

const argTypes = {
  size: {
    defaultValue: "sm",
    control: { type: "select" },
    options: ["sm", "md", "safeArea", "fullScreen"]
  },
  closeButton: {
    defaultValue: false,
    control: { type: "boolean" }
  },
  scrollable: {
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

const Template: Story = ({ size, closeButton, scrollable }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button color="primary" onClick={() => setOpen(true)}>
        Open Modal
      </Button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        scrollable={scrollable}
        size={size}
        closeButton={closeButton}
        titleId="transition-modal-title"
        descriptionId="transition-modal-description"
      >
        <>
          <Typography variant="h2" id="transition-modal-title">
            This is title of the modal.
          </Typography>
          <Typography variant="description" id="transition-modal-description">
            This is content of the modal. Consequat nullam imperdiet rhoncus nibh netus vel, pulvinar urna auctor
            euismod tortor class, risus congue ad quis nulla. Ligula quisque ridiculus lacus per maecenas pulvinar
            rhoncus velit platea, molestie montes tempor congue aenean tristique suscipit urna. Curae magna placerat
            sociosqu est netus convallis suspendisse viverra, morbi a aptent tortor ornare lorem dui, purus pulvinar
            odio rhoncus augue sit aliquam.
          </Typography>
        </>
      </Modal>
    </>
  )
}

export const Default = Template.bind({})

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes
} as Meta
