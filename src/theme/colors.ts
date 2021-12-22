/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { TypeText, BaseColors, Palette, Gradients } from "@mui/material/styles/createPalette"

const colorPalette: BaseColors = {
  violet: {
    light: "#F0BAF9",
    main: "#C64EDC"
  },
  turquoise: {
    light: "#9CF3E3",
    main: "#32D5D1"
  },
  green: {
    light: "#90F1BA",
    main: "#20E486"
  },
  red: {
    light: "#FFB9B9",
    main: "#FF4545"
  },
  pink: {
    light: "#FFAFD9",
    main: "#FB54BB"
  },
  blue: {
    light: "#A3BBFF",
    main: "#445FFB"
  },
  yellow: {
    light: "#FFE478",
    main: "#FFD900"
  },
  orange: {
    light: "#FFC58E",
    main: "#FF6E0B"
  },
  gray: {
    white: "#FFFFFF",
    200: "#F7F7F7",
    300: "#F2F2F2",
    400: "#EBEBEB",
    500: "#D9D9D9",
    a500: "rgba(0, 0, 0, 0.15)",
    600: "#949494",
    a600: "rgba(0, 0, 0, 0.42)",
    700: "#707070",
    a700: "rgba(0, 0, 0, 0.56)",
    800: "#111111",
    black: "#000000"
  }
}

const readingColorSet: TypeText = {
  primary: colorPalette.gray[800],
  secondary: colorPalette.gray[700],
  supporting: colorPalette.gray.a700,
  inversePrimary: colorPalette.gray.white,
  inverseSecondary: colorPalette.gray[300],
  inverseSupporting: colorPalette.gray[200],
  positive: colorPalette.green.main,
  negative: colorPalette.red.main,
  brand: colorPalette.blue.main,
  transparent: "transparent",
  currentColor: "currentColor"
}

const gradientColorSet: Gradients = {
  violetToRed: `linear-gradient(180deg, ${colorPalette.violet.light as string} 0%, ${colorPalette.red.light as string} 100%)`,
  orangeToViolet: `linear-gradient(180deg, ${colorPalette.orange.light as string} 0%, ${colorPalette.violet.light as string} 100%)`,
  violetToBlue: `linear-gradient(180deg, ${colorPalette.violet.light as string} 0%, ${colorPalette.blue.light as string} 100%)`,
  violetToTurquoise: `linear-gradient(180deg, ${colorPalette.violet.light as string} 0%, ${colorPalette.turquoise.light as string} 100%)`,
  blueToTurquoise: `linear-gradient(180deg, ${colorPalette.blue.light as string} 0%, ${colorPalette.turquoise.light as string} 100%)`,
  yellowToTurquoise: `linear-gradient(180deg, ${colorPalette.yellow.light as string} 0%, ${colorPalette.turquoise.light as string} 100%)`,
  greenToOrange: `linear-gradient(180deg, ${colorPalette.green.light as string} 0%, ${colorPalette.orange.light as string} 100%)`,
  yellowToPink: `linear-gradient(180deg, ${colorPalette.yellow.light as string} 0%, ${colorPalette.pink.light as string} 100%)`
}

const colors: Palette = {
  ...colorPalette,
  primary: {
    light: colorPalette.blue.light,
    main: colorPalette.blue.main
  },
  primaryAlt: {
    light: colorPalette.turquoise.light,
    main: colorPalette.turquoise.main
  },
  secondary: {
    light: colorPalette.gray[500],
    main: colorPalette.gray[800]
  },
  positive: {
    light: colorPalette.green.light,
    main: colorPalette.green.main
  },
  negative: {
    light: colorPalette.red.light,
    main: colorPalette.red.main
  },
  text: readingColorSet,
  icon: readingColorSet,
  gradient: gradientColorSet
}

export const ReadingColorVariants = [
  "primary",
  "secondary",
  "supporting",
  "inversePrimary",
  "inverseSecondary",
  "inverseSupporting",
  "positive",
  "negative",
  "brand",
  "transparent",
  "currentColor"
] as const

export type ReadingColorVariant = typeof ReadingColorVariants[number]

export default colors
