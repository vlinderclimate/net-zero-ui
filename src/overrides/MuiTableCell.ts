import colors from "../theme/colors"
import typography from "../theme/typography"

const MuiTableCell = {
  root: {
    ...typography.description.main,
    paddingTop: "11px",
    paddingBottom: "11px",
    paddingRight: "24px",
    paddingLeft: "0",
    borderBottom: "1px solid #D9D9D9",
    backgroundColor: "transparent",
    transition: "border-color 0.2s ease, background-color 0.2s ease",
    fontFeatureSettings: "'pnum' on, 'lnum' on, 'liga' off",
    "&:not(:first-child)": {
      paddingLeft: 0
    },
    "&:first-child": {
    },
    "&:last-child": {
    }
  },
  head: {
    ...typography.supporting.main,
    color: colors.gray[500],
    paddingTop: "16px",
    paddingBottom: "16px",
    backgroundColor: "transparent"
  }
}

export default MuiTableCell
