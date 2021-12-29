import colors from "../theme/colors"
import { fontSize } from "../theme/typography"

// TODO: use Input styles
const MuiTextField = {
  root: {
    "& .MuiInputBase-root": {
      borderRadius: 0,

      // size
      fontSize: fontSize.l,
      padding: "16px 24px",
      "&.MuiInputBase-sizeSmall": {
        fontSize: fontSize.s,
        padding: "12px 16px"
      },

      // color
      backgroundColor: `${colors.gray.white} !important`,
      "&.MuiInputBase-colorSecondary": {
        backgroundColor: `${colors.gray[200]} !important`
      },
      "&.Mui-focused": {
        boxShadow: `0 0 0 3px ${colors.primary.main}`
      },
      "&.Mui-error": {
        boxShadow: `0 0 0 3px ${colors.negative.main}`
      },
      "&.Mui-disabled": {
        backgroundColor: colors.gray[300]
      },

      "&:before, &:after": {
        content: "none"
      }
    },
    "& .MuiInputAdornment-positionStart": {
      marginTop: "0 !important"
    },
    "& .MuiInputBase-adornedStart": {
      paddingLeft: "24px",

      "&.MuiInputBase-sizeSmall": {
        paddingLeft: "16px"
      }
    }
  }
}

export default MuiTextField
