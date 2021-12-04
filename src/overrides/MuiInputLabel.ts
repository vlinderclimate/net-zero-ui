import colors from "../theme/colors"
import { fontSize, fontWeight, fontFamily } from "../theme/typography"

const MuiInputLabel = {
  root: {
    "&.MuiInputLabel-formControl": {
      position: "relative",
      fontFamily: fontFamily.headline,
      fontSize: fontSize.s,
      fontWeight: fontWeight.medium,
      color: colors.text.primary,
      marginBottom: 6
    }
  },
  animated: {
    transform: "none"
  },
  formControl: {
    transform: "none"
  },
  shrink: {
    transform: "none"
  }
}

export default MuiInputLabel
