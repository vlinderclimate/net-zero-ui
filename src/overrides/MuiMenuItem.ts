import colors from "../theme/colors"

const MuiMenuItem = {
  root: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 24,
    paddingRight: 24,
    "&.Mui-selected": {
      backgroundColor: colors.primary.main,
      color: colors.gray.white,
      "&:hover": {
        backgroundColor: colors.primary.main,
        color: colors.gray.white
      }
    }
  }
}

export default MuiMenuItem
