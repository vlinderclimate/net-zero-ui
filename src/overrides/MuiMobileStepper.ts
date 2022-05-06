import colors from "../theme/colors"
import { borderRadius } from "../theme/borders"

const MuiMobileStepper = {
  root: {
    paddingLeft: 0,
    paddingRight: 0,

    "& .MuiLinearProgress-bar": {
      borderRadius: borderRadius.lg
    }
  },
  progress: {
    width: "100%",
    height: "8px",
    backgroundColor: colors.gray[200],
    borderRadius: borderRadius.lg
  },
  barColorPrimary: {
    backgroundColor: colors.green.light
  },
  dot: {
    backgroundColor: colors.gray[300],
    width: 4,
    height: 4
  },
  dotActive: {
    backgroundColor: colors.green.main
  }
}

export default MuiMobileStepper
