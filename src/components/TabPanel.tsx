import React, { FC } from "react"
import { Box } from "@mui/material"

/**
 * Types
 */
export interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

/**
 * Components
 */
const TabPanel: FC<TabPanelProps> = (props) => {
  const { children, value, index, ...rest } = props

  return (
    <Box role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`} {...rest}>
      {value === index && children}
    </Box>
  )
}

export default TabPanel
