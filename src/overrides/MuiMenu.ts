import colors from "../theme/colors"
import typography from "../theme/typography"

const MuiMenu = {
  root: {},
  paper: {
    border: 0,
    borderRadius: 0,
    background: "#FFFFFF",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.15)",
    ".MuiButtonBase-root": {
      ...typography.caption.main,
      padding: "6px 16px",
      "&:hover": {
        backgroundColor: colors.gray[200]
      }
    },
    ".Mui-selected, .Mui-active, .Mui-focused": {
      backgroundColor: colors.primary.main,
      color: colors.gray.white,
      "&:hover": {
        backgroundColor: colors.primary.main,
        color: colors.gray.white
      }
    }
  }
}

export default MuiMenu
