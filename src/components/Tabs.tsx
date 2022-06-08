import React, { FC } from "react"
import { styled, Theme } from "@mui/material/styles"
import MuiTabs, { TabsProps as MuiTabsProps } from "@mui/material/Tabs"

/**
 * Types
 */
export interface TabsProps extends Omit<MuiTabsProps, "onChange"> {
  onChange: (event: React.SyntheticEvent, newValue: number) => void
}

/**
 * Styles
 */
const StyledTabs = styled(MuiTabs)(({ theme }) => ({
  "& .MuiTabs-flexContainer": {
    gap: theme.spacing(5)
  },
  "& .MuiTabScrollButton-root": {
    display: "none"
  },
  ".MuiTabs-flexContainerVertical": {
    gap: 0
  }
}))

/**
 * Components
 */
const Tabs: FC<TabsProps> = ({ value, onChange, children, ...rest }) => {
  return (
    <StyledTabs
      value={value}
      onChange={onChange}
      aria-label="nav tabs"
      textColor="inherit"
      indicatorColor="secondary"
      {...rest}
    >
      {children}
    </StyledTabs>
  )
}

export default Tabs
