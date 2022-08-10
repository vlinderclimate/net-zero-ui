import { useCallback, forwardRef } from "react"
import { styled } from "@mui/material/styles"
import MuiBox from "@mui/material/Box"
import MuiSnackbar, { SnackbarProps as MuiSnackbarProps } from "@mui/material/Snackbar"
import Alert, { AlertProps } from "./Alert"
import IconButton from "./IconButton"

export interface SnackbarProps extends Omit<MuiSnackbarProps, "action" | "children"> {
  /**
   * Props for `Alert` element.
   */
  alertProps?: Omit<AlertProps, "children">
  /**
   * Element positioned at the end of the component.
   * If `close`, default close `IconButton` will be populated.
   * If `ReactNode`, it's a custom element.
   *
   * Either option, triggering the action element
   * executes `handleClose` callback to close the component.
   */
  action?: "close" | JSX.Element
  /**
   * Children element inside of `Alert` element.
   */
  children: AlertProps["children"]
}

const AlertBox = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 16,

  ".MuiPaper-root": {
    backgroundColor: theme.palette.gray[800],
    color: theme.palette.gray.white
  }
}))

const StyledAlert = styled(Alert)(({ theme }) => ({
  backgroundColor: theme.palette.gray[800],

  div: {
    color: theme.palette.gray.white
  },
  button: {
    "&:hover .icon path": {
      fill: theme.palette.gray.white
    }
  }
}))

const Snackbar: React.FC<SnackbarProps> = forwardRef(
  ({ open, onClose, alertProps, children, action, ...props }, ref) => {
    const handleClose = useCallback(
      (event, reason) => {
        if (onClose) onClose(event, reason)
      },
      [onClose]
    )

    const ActionElement = () => {
      if (action && action !== "close") return action
      return (
        <IconButton
          iconProps={{ iconKey: "close", size: "sm", color: "secondary" }}
          sx={{ padding: 0 }}
          onClick={(event) => handleClose(event, "closeAction")}
        />
      )
    }

    return (
      <MuiSnackbar
        open={open}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        {...props}
        onClose={onClose}
        ref={ref}
      >
        <StyledAlert rounded={false} {...alertProps}>
          <AlertBox>
            <MuiBox flexGrow={1}>{children}</MuiBox>
            {action && (
              <MuiBox display="flex" alignItems="center">
                <ActionElement />
              </MuiBox>
            )}
          </AlertBox>
        </StyledAlert>
      </MuiSnackbar>
    )
  }
)

export default Snackbar
