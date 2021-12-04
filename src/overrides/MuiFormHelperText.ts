import colors from "../theme/colors"
import { fontSize, fontWeight } from "../theme/typography"

const MuiFormHelperText = {
  root: {
    margin: 0,
    marginTop: 6,
    fontSize: fontSize.xs3,
    fontWeight: fontWeight.medium,
    color: colors.text.secondary,

    "&.Mui-error": {
      color: colors.text.negative
    }
  }
}

export default MuiFormHelperText
