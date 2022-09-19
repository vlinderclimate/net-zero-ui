import React, { FC } from "react"
import { styled } from "@mui/material/styles"
import MuiTab, { TabProps as MuiTabProps } from "@mui/material/Tab"
import { Typography } from "@mui/material"

/**
 * Types
 */
export interface TabProps extends MuiTabProps {
  index: number
}

/**
 * Utils
 */
const a11yProps = (index: number) => {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`
  }
}

/**
 * Styles
 */
const StyledTab = styled(MuiTab)(({ theme }) => ({
  padding: 0,
  textTransform: "none",
  opacity: 1
}))

/**
 * Component
 */
const Tab: FC<TabProps> = (props) => {
  const { label, index, ...rest } = props

  return <StyledTab label={<Typography variant="caption">{label}</Typography>} {...a11yProps(index)} {...rest} />
}

export default Tab
