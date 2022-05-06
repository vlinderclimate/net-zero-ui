import { Story } from "@storybook/react"
import { Step } from "@mui/material"
import StepLabel from "../components/StepLabel"
import StepLabelText from "../components/StepLabelText"
import Stepper, { StepperProps } from "../components/Stepper"

interface ArgTypesProps extends StepperProps {
  simulateError?: boolean
  simulateLoading?: boolean
}

const argTypes = {
  disabled: { table: { disable: true } },
  component: { table: { disable: true } },
  elevation: { table: { disable: true } },
  square: { table: { disable: true } },
  variant: { table: { disable: true } },
  ref: { table: { disable: true } }
}

const getStepsTitle = () => {
  return ["November 2008", "September 2011", "September 2020"]
}

const getStepContent = () => {
  return [
    "The project start and VCS validation",
    "CCB validation. SD Vista validation with the highest possible rating of contributing to all 17 UN SDGs. SD Vista validation with the highest possible rating of contributing to all 17 UN SDGs. SD Vista validation with the highest possible rating of contributing to all 17 UN SDGs",
    "SD Vista validation with the highest possible rating of contributing to all 17 UN SDGs  "
  ]
}

const Template: Story<ArgTypesProps> = (args) => {
  const steps = getStepsTitle()
  const stepContent = getStepContent()

  return (
    <>
      <Stepper orientation={args.orientation}>
        {stepContent.map((label, index) => {
          return (
            <Step key={label}>
              <StepLabel>
                <StepLabelText variant="title">{steps[index]}</StepLabelText>
                <StepLabelText>{label}</StepLabelText>
              </StepLabel>
            </Step>
          )
        })}
      </Stepper>
    </>
  )
}

export const Default = Template.bind({})

export default {
  title: "Components/Stepper",
  component: Stepper,
  argTypes
}
