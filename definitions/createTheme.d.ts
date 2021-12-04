// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Theme } from "@mui/material/styles"

declare module "@mui/material/styles" {
  interface Theme {
    borders: {
      size: BorderSize
      radius: BorderRadius
    },
    boxShadow: BoxShadow
  }

  interface ThemeOptions {
    borders?: {
      size?: BorderSize
      radius?: BorderRadius
    },
    boxShadow?: BoxShadow
  }
}
