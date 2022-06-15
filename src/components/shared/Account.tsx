import React from "react"
import { styled } from "@mui/material/styles"
import MuiBox from "@mui/material/Box"

export interface AccountProps {
  children: JSX.Element | JSX.Element[]
}

export const AccountBox = styled(MuiBox)(({ theme }) => ({
  margin: theme.spacing(0, 1)
}))

export const AccountImage = styled("img")(({ theme }) => ({
  width: theme.spacing(3.5),
  height: theme.spacing(3.5),
  borderRadius: "100%",
  margin: "-7px 0 -9px -14px",
  fontSize: 0,

  [theme.breakpoints.down("md")]: {
    display: "none"
  }
}))

export const AccountName = styled("span")(({ theme }) => ({
  marginLeft: theme.spacing(1),

  [theme.breakpoints.down("md")]: {
    marginLeft: 0
  }
}))

const Account: React.FC<AccountProps> = ({ children }) => {
  return <AccountBox>{children}</AccountBox>
}

export default Account
