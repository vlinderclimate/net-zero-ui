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
    gradient: Gradients

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

  interface Gradients {
    violetToRed: string
    orangeToViolet: string
    violetToBlue: string
    violetToTurquoise: string
    blueToTurquoise: string
    yellowToTurquoise: string
    greenToOrange: string
    yellowToPink: string
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
    transparent: string
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
      pastel: string
      light: string
      main: string
    }
    turquoise: {
      pastel: string
      light: string
      main: string
    }
    green: {
      pastel: string
      light: string
      main: string
    }
    blue: {
      pastel: string
      light: string
      main: string
    }
    red: {
      pastel: string
      light: string
      main: string
    }
    pink: {
      pastel: string
      light: string
      main: string
    }
    yellow: {
      pastel: string
      light: string
      main: string
    }
    orange: {
      pastel: string
      light: string
      main: string
    }
    gray: {
      200: string
      300: string
      400: string
      500: string
      600: string
      700: string
      800: string
      white: string
      black: string
    }
    alpha: {
      transparent: string
      200: string
      300: string
      400: string
      500: string
      600: string
      700: string
      800: string
    }
  }
}
