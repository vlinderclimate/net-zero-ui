import colors from "../theme/colors"
import { fontSize, fontWeight, lineHeight, fontFamily } from "../theme/typography"

const MuiInputLabel = {
  root: {
    "&.MuiInputLabel-formControl": {
      position: "relative",
      fontFamily: fontFamily.headline,
      color: colors.gray[700],
      fontSize: fontSize.xs2,
      fontWeight: fontWeight.normal,
      lineHeight: lineHeight.xs2,
      marginBottom: 8
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
