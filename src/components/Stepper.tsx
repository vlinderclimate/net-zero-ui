import { styled, Theme } from "@mui/material/styles"
import MuiStepper, { StepperProps as MuiStepperProps } from "@mui/material/Stepper"

import StepConnector from "./StepConnector"

export interface StepperProps extends Omit<MuiStepperProps, "disabled"> {
  disabled?: boolean
}

interface StyledProps {
  theme: Theme
}

const StepperBox = styled(MuiStepper)(({ theme }: StyledProps) => ({
  padding: 0,

  "& .MuiStep-root": {
    paddingBottom: 0
  },
  "& .MuiStepLabel-root": {
    alignItems: "flex-start",
    padding: theme.spacing(2, 0)
  },
  "& .MuiStep-root:last-of-type .MuiStepLabel-root": {
    "&::after": {
      display: "none"
    }
  },
  [theme.breakpoints.down("sm")]: {
    "& .MuiStepLabel-root": {
      padding: theme.spacing(1, 0)
    }
  }
}))

const Stepper: React.FC<StepperProps> = ({ children, activeStep, orientation = "vertical", ...rest }) => {
  return (
    <StepperBox activeStep={activeStep} orientation={orientation} connector={<StepConnector />} {...rest}>
      {children}
    </StepperBox>
  )
}

export default Stepper
