import { styled, Theme } from "@mui/material/styles"
import MuiChip, { ChipProps as MuiChipProps } from "@mui/material/Chip"
import typography from "../theme/typography"
import colors from "../theme/colors"

export interface ChipProps extends Omit<MuiChipProps, "color"> {
  color: "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning"
}

export const backgroundMap: Record<ChipProps["color"], string> = {
  default: colors.gray[400],
  primary: "#E3EDFF",
  secondary: colors.green.pastel,
  warning: `${colors.yellow.light}55`,
  success: `${colors.green.light}55`,
  error: `${colors.red.light}55`,
  info: `${colors.blue.light}55`
}

export const colorMap: Record<ChipProps["color"], string> = {
  default: colors.gray[800],
  primary: colors.blue.main,
  secondary: colors.green.main,
  warning: colors.yellow.main,
  success: colors.text.positive,
  error: colors.text.negative,
  info: colors.blue.main
}

interface StyledChipProps extends Pick<ChipProps, "color"> {
  theme: Theme
}

const StyledChip = styled(MuiChip)(({ theme, color }: StyledChipProps) => ({
  ...typography.caption.main,
  fontWeight: 500,
  color: colorMap[color ?? "default"],
  backgroundColor: backgroundMap[color ?? "default"],

  ".MuiChip-label": {
    paddingInline: theme.spacing(2)
  },
  "&.MuiChip-outlined": {
    borderColor: colorMap[color ?? "default"],
    backgroundColor: "transparent"
  },
  ".MuiChip-deleteIcon, .MuiChip-deleteIcon:hover": {
    color: colorMap[color ?? "default"]
  }
}))

const Chip: React.FC<ChipProps> = ({ color = "default", ...props }) => {
  return <StyledChip color={color} {...props} />
}
export default Chip
