import colors from "../theme/colors"
import { borderRadius } from "../theme/borders"

const MuiSelect = {
  root: {
    padding: "20px 44px 20px 24px",
    "&.MuiSelect-select": {
      paddingRight: 44
    }
  },
  select: {
    paddingRight: 44,
    "&.MuiSelect-select": {
      paddingRight: 44,
      "&:focus": {
        backgroundColor: colors.gray.white,
        borderRadius: borderRadius.sm
      }
    }
  },
  icon: {
    top: 0,
    height: "100%"
  }
}

export default MuiSelect
