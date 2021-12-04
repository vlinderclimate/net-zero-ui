import * as CreatePalette from "@mui/material/styles/createPalette"

declare module "@mui/material/styles/createPalette" {
  interface Palette extends BaseColors {
    // Tokens
    primary: PaletteColor
    primaryAlt: PaletteColor
    secondary: PaletteColor
    positive: PaletteColor
    negative: PaletteColor
    text: TypeText
    icon: TypeText

    // Unnecessary properties
    action?: undefined
    common?: undefined
    mode?: undefined
    contrastThreshold?: undefined
    tonalOffset?: undefined
    error?: undefined
    warning?: undefined
    info?: undefined
    success?: undefined
    grey?: undefined
    divider?: undefined
    background?: undefined
    getContrastText?: undefined
    augmentColor?: undefined
  }
  interface PaletteOptions extends BaseColors {
    // Tokens
    primary: PaletteColor
    primaryAlt: PaletteColor
    secondary: PaletteColor
    positive: PaletteColor
    negative: PaletteColor
    text: TypeText
    icon: TypeText

    // Unnecessary properties
    action?: undefined
    common?: undefined
    mode?: undefined
    contrastThreshold?: undefined
    tonalOffset?: undefined
    error?: undefined
    warning?: undefined
    info?: undefined
    success?: undefined
    grey?: undefined
    divider?: undefined
    background?: undefined
    getContrastText?: undefined
  }

  interface PaletteColor {
    light?: string
    main: string

    // Unnecessary properties
    dark?: string
    contrastText?: string
  }
  interface SimplePaletteColorOptions {
    light?: string
    main: string

    // Unnecessary properties
    dark?: undefined
    contrastText?: undefined
  }

  interface TypeText {
    primary: string
    secondary: string
    supporting: string
    inversePrimary: string
    inverseSecondary: string
    inverseSupporting: string
    positive: string
    negative: string
    brand: string
    transparent: "transparent"
    currentColor: "currentColor"

    // Unnecessary properties
    disabled?: undefined
  }
  interface TypeAction {
    active: string
    hover: string
    selected: string
    disabled: string
    focus: string

    // Unnecessary properties
    background?: string
    disabledBackground?: string
    hoverOpacity?: number
    selectedOpacity?: number
    disabledOpacity?: number
    focusOpacity?: number
    activatedOpacity?: number
  }

  interface BaseColors {
    violet: {
      main: string
    }
    green: {
      light: string
      main: string
    }
    blue: {
      light: string
      main: string
    }
    red: {
      light: string
      main: string
    }
    yellow: {
      light: string
      main: string
    }
    gray: {
      white: string
      100: string
      300: string
      500: string
      700: string
      900: string
      950: string
    }
  }
}
