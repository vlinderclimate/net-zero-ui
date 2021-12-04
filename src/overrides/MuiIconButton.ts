import colors from "../theme/colors"

const MuiFormIconButton = {
  root: {
    color: "currentColor",
    "&:hover": {
      color: "currentColor",
      backgroundColor: "transparent",

      "& .icon path": {
        fill: colors.text.primary
      }
    }
  }
}

export default MuiFormIconButton
