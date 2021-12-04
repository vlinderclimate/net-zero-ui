import { TypeText, BaseColors, Palette } from "@mui/material/styles/createPalette"

const colorPalette: BaseColors = {
  violet: {
    main: "#445FFB"
  },
  green: {
    light: "#DEF8CC",
    main: "#59DC00"
  },
  red: {
    light: "#FFD9DC",
    main: "#FF4545"
  },
  blue: {
    light: "#CCF0FF",
    main: "#00B6FF"
  },
  yellow: {
    light: "#FFF3CC",
    main: "#FFC400"
  },
  gray: {
    white: "#FFFFFF",
    100: "#F5F5F5",
    300: "#D9D9D9",
    500: "#707070",
    700: "#313540",
    900: "#111111",
    950: "#0b0b0b"
  }
}

const readingColorSet: TypeText = {
  primary: colorPalette.gray[900],
  secondary: colorPalette.gray[500],
  supporting: colorPalette.gray[700],
  inversePrimary: colorPalette.gray.white,
  inverseSecondary: colorPalette.gray[300],
  inverseSupporting: colorPalette.gray[100],
  positive: colorPalette.green.main,
  negative: colorPalette.red.main,
  brand: colorPalette.violet.main,
  transparent: "transparent",
  currentColor: "currentColor"
}

const colors: Palette = {
  ...colorPalette,
  primary: {
    main: colorPalette.violet.main
  },
  primaryAlt: {
    light: colorPalette.green.light,
    main: colorPalette.green.main
  },
  secondary: {
    light: colorPalette.gray[500],
    main: colorPalette.gray[900]
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
  icon: readingColorSet
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
