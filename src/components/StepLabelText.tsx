import { ReactNode } from "react"
import { styled, Theme } from "@mui/material/styles"
import Typography, { TypographyProps } from "./Typography"

export interface StepLabelTextProps {
  /**
   * Type of the text component in a step.
   *
   * Title is the name of the step (ex: Stake Amount).
   * Subtitle is the index of the step (ex: Step 1).
   * Note is the minor message stacks under Title (ex: 0.1 ETH, Success).
   */
  variant?: "title" | "subtitle" | "note"
  /**
   * Text or other content in the step label.
   */
  children: string | number | JSX.Element | JSX.Element[] | ReactNode
  /**
   * Props of Typography component.
   */
  typographyProps?: Omit<TypographyProps, "variant">
}

// prettier-ignore
const typographyVariant: Record<Exclude<StepLabelTextProps["variant"], undefined>, Partial<TypographyProps["variant"]>> = {
  title: "heroParagraphBold",
  subtitle: "heroParagraph",
  note: "heroParagraph"
}

const Label = styled("div")(({ theme }: { theme: Theme }) => ({}))

const StepLabelText: React.FC<StepLabelTextProps> = ({ variant = "subtitle", children, typographyProps }) => {
  return (
    <Label className={`StepLabelText-${variant}`}>
      <Typography variant={typographyVariant[variant]} component="div" {...typographyProps}>
        {children}
      </Typography>
    </Label>
  )
}

export default StepLabelText
