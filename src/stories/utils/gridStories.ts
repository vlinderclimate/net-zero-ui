import { styled, Theme } from "@mui/material/styles"
import MuiPaper, { PaperProps } from "@mui/material/Paper"

interface StyledProps {
  theme: Theme
}

export const Item = styled(MuiPaper)<PaperProps>(({ theme }: StyledProps) => ({
  ...theme.typography.caption,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.gray[700],
  backgroundColor: theme.palette.green.light,
  boxShadow: "none"
}))
