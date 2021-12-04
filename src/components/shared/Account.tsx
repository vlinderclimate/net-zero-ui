import React, { memo } from "react"
import { styled } from "@mui/material/styles"
import MuiBox from "@mui/material/Box"

export interface AccountProps {
  children: JSX.Element | JSX.Element[]
}

export const AccountBox = styled(MuiBox)(({ theme }) => ({
  margin: theme.spacing(0, 1)
}))

export const AccountImage = styled("img")(({ theme }) => ({
  width: theme.spacing(4),
  height: theme.spacing(4),
  borderRadius: "100%",
  margin: "-5px -11px -7px",

  [theme.breakpoints.down("lg")]: {
    margin: "-5px -13px -7px"
  }
}))

export const AccountName = styled("span")(({ theme }) => ({
  marginLeft: theme.spacing(3),

  [theme.breakpoints.down("lg")]: {
    display: "none"
  }
}))

const Account: React.FC<AccountProps> = ({ children }) => {
  return <AccountBox>{children}</AccountBox>
}

export default memo(Account)
