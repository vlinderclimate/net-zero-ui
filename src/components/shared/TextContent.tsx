import React from "react"
import { styled } from "@mui/material/styles"
import MuiBox from "@mui/material/Box"

const StyledText = styled(MuiBox)(({ theme }) => ({
  ol: {
    counterReset: "orderedlist",
    listStyle: "none",
    padding: 0,

    li: {
      position: "relative",
      paddingLeft: theme.spacing(6),

      "&:before": {
        ...theme.typography.caption,
        counterIncrement: "orderedlist",
        content: "counter(orderedlist)",
        backgroundColor: theme.palette.green.main,
        position: "absolute",
        width: theme.spacing(4),
        height: theme.spacing(4),
        lineHeight: theme.spacing(4),
        color: theme.palette.gray.white,
        textAlign: "center",
        borderRadius: "100%",
        left: 0
      },
      "& + li": {
        marginTop: theme.spacing(2)
      },
      [theme.breakpoints.down("sm")]: {
        paddingLeft: theme.spacing(4),
        "&:before": {
          width: theme.spacing(3),
          height: theme.spacing(3),
          lineHeight: theme.spacing(3),
          fontSize: 12
        },
        "& + li": {
          marginTop: theme.spacing(1.5)
        }
      }
    },
    ul: {
      padding: 0,

      li: {
        paddingLeft: theme.spacing(6),

        "& + li": {
          marginTop: theme.spacing(2)
        },
        [theme.breakpoints.down("sm")]: {
          paddingLeft: theme.spacing(4),
          "& + li": {
            marginTop: theme.spacing(1.5)
          }
        }
      }
    }
  },
  "ol + .MuiTableContainer-root": {
    paddingLeft: theme.spacing(6),

    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(4)
    }
  },
  ".MuiTableCell-root": {
    ...theme.typography.heroParagraph,
    fontWeight: "normal",
    paddingRight: theme.spacing(5),

    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      lineHeight: "21px"
    }
  },
  ".MuiTypography-h3Bold, .MuiTypography-h2": {
    marginBottom: theme.spacing(2.5),
    marginTop: theme.spacing(8),

    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(4.25),
      marginBottom: theme.spacing(2)
    }
  },
  ".MuiButton-text": {
    padding: "0 !important"
  },
  ".MuiAsset": {
    display: "block",
    marginBlock: theme.spacing(8),
    marginInline: theme.spacing(-10),

    img: {
      width: "100%"
    },
    [theme.breakpoints.down("md")]: {
      marginInline: 0,
      marginBlock: theme.spacing(4)
    }
  }
}))

const TextContent: React.FC = ({ children, ...props }) => {
  return <StyledText {...props}>{children}</StyledText>
}

export default TextContent
