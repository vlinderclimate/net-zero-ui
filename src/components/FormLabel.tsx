import React, { FC } from "react"
import { styled } from "@mui/material/styles"
import FormLabelGroup, { FormLabelProps as FormLabelGroupProps } from "@mui/material/FormLabel"
import typography from "../theme/typography"

/**
 * Types
 */
export interface FormLabelProps extends FormLabelGroupProps {}

/**
 * Styles
 */
const StyledLabel = styled(FormLabelGroup)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3),
  color: `${theme.palette.text.primary} !important`,
  ...typography.heroParagraph.main,

  [theme.breakpoints.down("sm")]: {
    ...typography.heroParagraph.mobile,
    gap: theme.spacing(1),
    marginBottom: theme.spacing(2),
    flexDirection: "row-reverse",
    justifyContent: "space-between"
  }
}))

/**
 * Components
 */
const FormLabel: FC<FormLabelProps> = ({ children, ...rest }) => {
  return <StyledLabel {...rest}>{children}</StyledLabel>
}

export default FormLabel
