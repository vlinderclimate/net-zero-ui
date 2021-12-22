// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Theme } from "@mui/material/styles"

declare module "@mui/material/styles" {
  interface TypographyVariants {
    fontFamilyHeadline: string
    fontFamilyMonospace: string

    hero: React.CSSProperties
    h1: React.CSSProperties
    h2: React.CSSProperties
    h3: React.CSSProperties
    // not in design system, but keeping it here for best practice
    // uses style of title1
    h4: React.CSSProperties
    // not in design system, but keeping it here for best practice
    // uses style of title3
    h5: React.CSSProperties
    // not in design system, but keeping it here for best practice
    // uses style of title4
    h6: React.CSSProperties
    heroParagraph: React.CSSProperties
    title1: React.CSSProperties
    title2: React.CSSProperties
    title3: React.CSSProperties
    title4: React.CSSProperties
    title5: React.CSSProperties
    // not in design system, but keeping it here for best practice
    // uses style of title1
    button1: React.CSSProperties
    // not in design system, but keeping it here for best practice
    // uses style of title3
    button2: React.CSSProperties
    // not in design system, but keeping it here for best practice
    // uses style of title4
    button3: React.CSSProperties
    // not in design system, but keeping it here for best practice
    // uses style of title5
    button4: React.CSSProperties
    supporting: React.CSSProperties
    supportingBold: React.CSSProperties
    subtitle1: React.CSSProperties
    subtitle1Bold: React.CSSProperties
    subtitle2: React.CSSProperties
    subtitle2Bold: React.CSSProperties
    subtitle3: React.CSSProperties
    subtitle3Bold: React.CSSProperties
    subtitle4: React.CSSProperties
    subtitle4Bold: React.CSSProperties
    description: React.CSSProperties
    descriptionBold: React.CSSProperties
    callout: React.CSSProperties
    calloutBold: React.CSSProperties
    caption: React.CSSProperties
    captionBold: React.CSSProperties

    fontSizeXs5: 10
    fontSizeXs4: 11
    fontSizeXs3: 15
    fontSizeXs2: 18
    fontSizeXs1: 19
    fontSizeS: 21
    fontSizeM: 23
    fontSizeL: 27
    fontSizeXl1: 28

    fontWeightLight: 300
    fontWeightNormal: 400
    fontWeightMedium: 500
    fontWeightSemi: 600
    fontWeightBold: 700
    fontWeightBlack: 800

    lineHeightXs5: "12px"
    lineHeightXs4: "16px"
    lineHeightXs3: "20px"
    lineHeightXs2: "22px"
    lineHeightXs1: "24px"
    lineHeightS: "28px"
    lineHeightM: "32px"
    lineHeightL: "36px"
    lineHeightXl1: "40px"
  }
  interface TypographyVariantsOptions {
    fontFamilyHeadline?: string
    fontFamilyMonospace?: string

    hero?: React.CSSProperties
    h1?: React.CSSProperties
    h2?: React.CSSProperties
    h3?: React.CSSProperties
    h4?: React.CSSProperties
    h5?: React.CSSProperties
    h6?: React.CSSProperties
    heroParagraph?: React.CSSProperties
    title1?: React.CSSProperties
    title2?: React.CSSProperties
    title3?: React.CSSProperties
    title4?: React.CSSProperties
    title5?: React.CSSProperties
    button1?: React.CSSProperties
    button2?: React.CSSProperties
    button3?: React.CSSProperties
    button4?: React.CSSProperties
    button1Mobile?: React.CSSProperties
    button2Mobile?: React.CSSProperties
    button3Mobile?: React.CSSProperties
    button4Mobile?: React.CSSProperties
    supporting?: React.CSSProperties
    supportingBold?: React.CSSProperties
    description?: React.CSSProperties
    callout?: React.CSSProperties
    caption?: React.CSSProperties

    fontSizeXs5?: number
    fontSizeXs4?: number
    fontSizeXs3?: number
    fontSizeXs2?: number
    fontSizeXs1?: number
    fontSizeS?: number
    fontSizeM?: number
    fontSizeL?: number
    fontSizeXl1?: number
    fontSizeXs4Mobile?: number
    fontSizeXs3Mobile?: number
    fontSizeXs2Mobile?: number
    fontSizeXs1Mobile?: number
    fontSizeSMobile?: number
    fontSizeMMobile?: number
    fontSizeLMobile?: number
    fontSizeXl1Mobile?: number

    fontWeightLight?: number
    fontWeightNormal?: number
    fontWeightMedium?: number
    fontWeightSemi?: number
    fontWeightBold?: number

    lineHeightXs5?: string
    lineHeightXs4?: string
    lineHeightXs3?: string
    lineHeightXs2?: string
    lineHeightXs1?: string
    lineHeightS?: string
    lineHeightM?: string
    lineHeightL?: string
    lineHeightXl1?: string
    lineHeightXs4Mobile?: string
    lineHeightXs3Mobile?: string
    lineHeightXs2Mobile?: string
    lineHeightXs1Mobile?: string
    lineHeightSMobile?: string
    lineHeightMMobile?: string
    lineHeightLMobile?: string
    lineHeightXl1Mobile?: string
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    /**
     * Customized tokens
     */
    hero: true
    h1: true
    h2: true
    h3: true
    h4: true
    h5: true
    h6: true
    heroParagraph: true
    title1: true
    title2: true
    title3: true
    title4: true
    title5: true
    button1: true
    button2: true
    button3: true
    button4: true
    button1Mobile: true
    button2Mobile: true
    button3Mobile: true
    button4Mobile: true
    supporting: true
    supportingBold: true
    description: true
    descriptionBold: true
    callout: true
    calloutBold: true
    caption: true
    captionBold: true

    /**
     * Overridden tokens
     */
    body1: false
    body2: false
    button: false
    overline: false
  }
}
