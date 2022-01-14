import Helmet from "react-helmet"
import ThemeProvider from "../src/core/ThemeProvider"

export const regularFonts = `
  @font-face {
    font-family: 'Moderat';
    font-style: normal;
    font-weight: normal;
    src: url(/fonts/moderat/Moderat-Regular.eot),
      url(/fonts/moderat/Moderat-Regular.eot?#iefix) format('embedded-opentype'),
      url(/fonts/moderat/Moderat-Regular.woff2) format('woff2'),
      url(/fonts/moderat/Moderat-Regular.woff) format('woff');
  }
  @font-face {
    font-family: 'Moderat';
    font-style: normal;
    font-weight: 500;
    src: url(/fonts/moderat/Moderat-Medium.eot),
      url(/fonts/moderat/Moderat-Medium.eot?#iefix) format('embedded-opentype'),
      url(/fonts/moderat/Moderat-Medium.woff2) format('woff2'),
      url(/fonts/moderat/Moderat-Medium.woff) format('woff');
  }
  @font-face {
    font-family: 'Moderat';
    font-style: normal;
    font-weight: 700;
    src: url(/fonts/moderat/Moderat-Bold.eot),
      url(/fonts/moderat/Moderat-Bold.eot?#iefix) format('embedded-opentype'),
      url(/fonts/moderat/Moderat-Bold.woff2) format('woff2'),
      url(/fonts/moderat/Moderat-Bold.woff) format('woff');
  }
  @font-face {
    font-family: 'Moderat';
    font-style: normal;
    font-weight: 800;
    src: url(/fonts/moderat/Moderat-Black.eot),
      url(/fonts/moderat/Moderat-Black.eot?#iefix) format('embedded-opentype'),
      url(/fonts/moderat/Moderat-Black.woff2) format('woff2'),
      url(/fonts/moderat/Moderat-Black.woff) format('woff');
  }
`

export const parameters = {
  actions: {
    argTypesRegex: "^on[A-Z].*"
  },
  controls: {
    matchers: {
      date: /Date$/,
      color: /(background|color)$/i
    }
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Helmet>
        <style>{regularFonts}</style>
      </Helmet>
      <Story />
    </ThemeProvider>
  )
]
