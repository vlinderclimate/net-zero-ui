import { styled, Theme } from "@mui/material/styles"
import MuiStepConnector from "@mui/material/StepConnector"

const StepConnector = styled(MuiStepConnector)(({ theme }: { theme: Theme }) => ({
  "&.MuiStepConnector-vertical": {
    height: "100%",
    marginTop: theme.spacing(-1),
    marginBottom: theme.spacing(-1)
  },
  "& .MuiStepConnector-line": {
    borderColor: theme.palette.green.main,
    borderLeftWidth: 2
  },
  "& .MuiStepConnector-lineVertical": {
    borderLeftWidth: 2,
    position: "relative",
    height: "100%",
    marginLeft: "-1px"
  },
  "&.MuiStepConnector-root": {
    display: "none"
  }
}))

export default StepConnector
