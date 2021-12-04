import { fontSize, lineHeight } from "../theme/typography"
import colors from "../theme/colors"
import boxShadow from "../theme/boxShadow"

const MuiTooltip = {
  tooltip: {
    boxShadow: boxShadow.md,
    fontSize: fontSize.xs3,
    lineHeight: lineHeight.s,
    color: colors.gray.white,
    backgroundColor: colors.text.primary
  }
}

export default MuiTooltip
