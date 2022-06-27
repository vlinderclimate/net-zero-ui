import colors from "../theme/colors"

const MuiListItem = {
  root: {
    backgroundColor: "transparent",
    padding: 0,
    marginBottom: "6px",
    "&.MuiLink-root": {
      backgroundColor: "transparent"
    },
    "&.Mui-selected": {
      "&:hover": {
        backgroundColor: "transparent"
      }
    },
    "&.Mui-selected, &.Mui-active, &.Mui-selected.Mui-focusVisible": {
      backgroundColor: colors.primary.main,
      color: colors.gray.white,
      "&:hover": {
        backgroundColor: colors.primary.main,
        color: colors.gray.white
      }
    }
  }
}

export default MuiListItem
