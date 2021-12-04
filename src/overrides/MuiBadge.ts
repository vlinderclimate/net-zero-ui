import colors from "../theme/colors"

const MuiMenuItem = {
  root: {
    "& .MuiBadge-dot": {
      minWidth: "4px",
      height: "4px",

      "&.MuiBadge-colorError": {
        backgroundColor: colors.red.main
      }
    }
  }
}

export default MuiMenuItem
