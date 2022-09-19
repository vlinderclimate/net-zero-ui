import React from "react"
import { styled } from "@mui/material/styles"
import MuiBox from "@mui/material/Box"

const StyledList = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  padding: 0,
  margin: "0 auto",
  listStyle: "none",
  textAlign: "center",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: theme.spacing(1),
  maxWidth: 600,

  li: {
    display: "inline-block",
    position: "relative",

    "&:before": {
      content: "'∙'",
      marginRight: theme.spacing(0.8),
      color: theme.palette.gray[700],
      fontSize: 15
    },
    "&:first-child": {
      "&:before": {
        display: "none"
      }
    }
  },
  a: {
    textDecoration: "none",
    transition: theme.transitions.create(["color"]),
    "&:hover": {
      color: theme.palette.text.primary
    }
  },
  [theme.breakpoints.down("md")]: {
    lineHeight: "20px",

    ".MuiLink-root": {
      fontSize: 12,
      lineHeight: 1
    }
  }
}))

export interface InlineListProps {
  children?: JSX.Element | JSX.Element[] | string | number
}

const InlineList: React.FC<InlineListProps> = ({ children, ...props }) => {
  return (
    <StyledList component="ul" {...props}>
      {children}
    </StyledList>
  )
}

export default InlineList
