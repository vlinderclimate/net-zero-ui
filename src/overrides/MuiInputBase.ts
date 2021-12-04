import { fontFamily } from "../theme/typography"

const MuiInputBase = {
  root: {
    fontFamily: fontFamily.headline,

    "& input": {
      padding: 0,

      /* Chrome, Safari, Edge, Opera */
      "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
        "-webkit-appearance": "none",
        margin: 0
      },
      /* Firefox */
      "&[type=number]": {
        "-moz-appearance": "textfield"
      }
    }
  }
}

export default MuiInputBase
