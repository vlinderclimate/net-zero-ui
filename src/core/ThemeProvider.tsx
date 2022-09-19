import React from "react"
import CssBaseline from "@mui/material/CssBaseline"
import { createTheme, StyledEngineProvider, ThemeProvider as MuiThemeProvider } from "@mui/material/styles"

import { typographyTheme as typography } from "../theme/typography"
import { borderSize, borderRadius } from "../theme/borders"
import boxShadow from "../theme/boxShadow"
import colors from "../theme/colors"

import MuiCssBaseline from "../overrides/MuiCssBaseline"
import MuiButton from "../overrides/MuiButton"
import MuiIconButton from "../overrides/MuiIconButton"
import MuiCard from "../overrides/MuiCard"
import MuiTable from "../overrides/MuiTable"
import MuiTableCell from "../overrides/MuiTableCell"
import MuiTableRow from "../overrides/MuiTableRow"
import MuiInputBase from "../overrides/MuiInputBase"
import MuiInputLabel from "../overrides/MuiInputLabel"
import MuiTextField from "../overrides/MuiTextField"
import MuiSelect from "../overrides/MuiSelect"
import MuiFormHelperText from "../overrides/MuiFormHelperText"
import MuiList from "../overrides/MuiList"
import MuiListItem from "../overrides/MuiListItem"
import MuiMenuItem from "../overrides/MuiMenuItem"
import MuiBackdrop from "../overrides/MuiBackDrop"
import MuiLink from "../overrides/MuiLink"
import MuiTooltip from "../overrides/MuiTooltip"
import MuiBadge from "../overrides/MuiBadge"
import MuiTableContainer from "../overrides/MuiTableContainer"
import MuiMobileStepper from "../overrides/MuiMobileStepper"
import MuiTab from "../overrides/MuiTab"
import MuiTabs from "../overrides/MuiTabs"
import MuiMenu from "../overrides/MuiMenu"
import MuiPaper from "../overrides/MuiPaper"

/**
 * Types
 */
export interface ThemeProviderProps {
  children: JSX.Element | JSX.Element[]
}

/**
 * Setup
 */
export const theme = createTheme({
  palette: colors,
  typography,
  borders: {
    size: borderSize,
    radius: borderRadius
  },
  boxShadow: boxShadow,
  breakpoints: {
    values: {
      xs: 0,
      sm: 427,
      md: 767,
      lg: 1200,
      xl: 1536
    }
  },
  components: {
    MuiInput: {
      defaultProps: {
        disableUnderline: true
      },
      styleOverrides: MuiInputBase
    },
    MuiInputLabel: {
      defaultProps: {
        shrink: true, // keep the value `true` to keep `placeholder` shown
        disableAnimation: true
      },
      styleOverrides: MuiInputLabel
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true
      }
    },
    MuiCssBaseline: {
      styleOverrides: MuiCssBaseline
    },
    MuiTooltip: {
      styleOverrides: MuiTooltip
    },
    MuiButton: {
      styleOverrides: MuiButton
    },
    MuiIconButton: {
      styleOverrides: MuiIconButton
    },
    MuiCard: {
      styleOverrides: MuiCard
    },
    MuiTable: {
      styleOverrides: MuiTable
    },
    MuiTableCell: {
      styleOverrides: MuiTableCell
    },
    MuiTableRow: {
      styleOverrides: MuiTableRow
    },
    MuiTableContainer: {
      styleOverrides: MuiTableContainer
    },
    MuiFormHelperText: {
      styleOverrides: MuiFormHelperText
    },
    MuiInputBase: {
      styleOverrides: MuiInputBase
    },
    MuiTextField: {
      styleOverrides: MuiTextField
    },
    MuiSelect: {
      styleOverrides: MuiSelect
    },
    MuiList: {
      styleOverrides: MuiList
    },
    MuiListItem: {
      styleOverrides: MuiListItem
    },
    MuiMenu: {
      styleOverrides: MuiMenu
    },
    MuiMenuItem: {
      styleOverrides: MuiMenuItem
    },
    MuiBackdrop: {
      styleOverrides: MuiBackdrop
    },
    MuiLink: {
      styleOverrides: MuiLink
    },
    MuiBadge: {
      styleOverrides: MuiBadge
    },
    MuiMobileStepper: {
      styleOverrides: MuiMobileStepper
    },
    MuiTab: {
      styleOverrides: MuiTab
    },
    MuiTabs: {
      styleOverrides: MuiTabs
    },
    MuiPaper: {
      styleOverrides: MuiPaper
    }
  }
})

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </StyledEngineProvider>
  )
}

export default ThemeProvider
