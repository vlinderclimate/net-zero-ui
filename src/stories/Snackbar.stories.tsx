import { useState } from "react"
import { Story } from "@storybook/react"
import Button from "../components/Button"
import { colorMap as AlertColorMap } from "../components/Alert"
import Snackbar, { SnackbarProps } from "../components/Snackbar"
import Icon from "../components/Icon"

export const NoAction: Story<SnackbarProps> = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button color="primary" onClick={() => setOpen(true)}>
        Open Snackbar with no action, but hides in 3 seconds
      </Button>
      <Snackbar autoHideDuration={3000} open={open} onClose={() => setOpen(false)}>
        Snackbar opened
      </Snackbar>
    </>
  )
}

export const NoActionClickAway: Story<SnackbarProps> = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button color="primary" onClick={() => setOpen(true)}>
        Open Snackbar with no action, but hides when click away
      </Button>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        ClickAwayListenerProps={{ onClickAway: () => setOpen(false) }}
        alertProps={{ icon: <Icon iconKey="infoCircle" size="sm" color="positive" /> }}
      >
        Snackbar opened
      </Snackbar>
    </>
  )
}

const DefaultAction: Story<SnackbarProps> = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button color="primary" onClick={() => setOpen(true)}>
        Open Snackbar with default close action
      </Button>
      <Snackbar open={open} onClose={() => setOpen(false)} action="close">
        Snackbar opened
      </Snackbar>
    </>
  )
}

export const CustomAction: Story<SnackbarProps> = (args) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button color="primary" onClick={() => setOpen(true)}>
        Open Snackbar with custom action, error color
      </Button>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        action={
          <Button
            size="sm"
            variant="text"
            sx={{ "&.MuiButton-text": { padding: 0, color: AlertColorMap.error, textDecoration: "underline" } }}
            onClick={() => setOpen(false)}
          >
            Change wallet
          </Button>
        }
        alertProps={{ color: "error" }}
      >
        We only support mainnet at this moment.
      </Snackbar>
    </>
  )
}

export const Default = DefaultAction.bind({})

export default {
  title: "Components/Snackbar",
  component: Snackbar
}
