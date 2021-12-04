export const fontFamily = {
  // overrides
  sans: "'Moderat', 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif",
  serif:
    "'Moderat', 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif",
  monospace:
    "'Moderat', 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif",
  // customized
  body: "'Moderat', 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif",
  headline:
    "'Moderat', 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif"
}

export const fontSize: {
  xs5: 10
  xs4: 11
  xs3: 15
  xs2: 18
  xs1: 19
  s: 21
  m: 24
  l: 27
  xl1: 28
  xl2: 30
  xl3: 32
  xl4: 40
  xl5: 64
  xl6: 120
} = {
  xs5: 10,
  xs4: 11,
  xs3: 15,
  xs2: 18,
  xs1: 19,
  s: 21,
  m: 24,
  l: 27,
  xl1: 28,
  xl2: 30,
  xl3: 32,
  xl4: 40,
  xl5: 64,
  xl6: 120
}

export const fontWeight: { light: 300; normal: 400; medium: 500; semi: 600; bold: 700; black: 800 } = {
  light: 300,
  normal: 400,
  medium: 500,
  semi: 600,
  bold: 700,
  black: 800
}

export const lineHeight: {
  xs5: "12px"
  xs4: "16px"
  xs3: "20px"
  xs2: "22px"
  xs1: "25px"
  s: "28px"
  m: "32px"
  l: "36px"
  xl1: "38px"
  xl2: "48px"
  xl3: "60px"
  xl4: "68px"
  xl5: "100px"
} = {
  xs5: "12px",
  xs4: "16px",
  xs3: "20px",
  xs2: "22px",
  xs1: "25px",
  s: "28px",
  m: "32px",
  l: "36px",
  xl1: "38px",
  xl2: "48px",
  xl3: "60px",
  xl4: "68px",
  xl5: "100px"
}

const typography = {
  hero: {
    main: {
      fontFamily: fontFamily.headline,
      fontWeight: fontWeight.bold,
      fontSize: fontSize.xl5,
      lineHeight: lineHeight.xl4,
      letterSpacing: -5
    },
    mobile: {
      fontSize: fontSize.m,
      lineHeight: lineHeight.s,
      letterSpacing: "normal"
    }
  },
  h1: {
    main: {
      fontFamily: fontFamily.headline,
      fontWeight: fontWeight.bold,
      fontSize: fontSize.xl5,
      lineHeight: lineHeight.xl4,
      letterSpacing: -2
    },
    mobile: {
      fontSize: fontSize.xl4,
      lineHeight: lineHeight.xl3,
      letterSpacing: "normal"
    }
  },
  h2: {
    main: {
      fontFamily: fontFamily.headline,
      fontWeight: fontWeight.bold,
      fontSize: fontSize.xl4,
      lineHeight: lineHeight.xl2,
      letterSpacing: -1
    },
    mobile: {
      fontSize: fontSize.m,
      lineHeight: lineHeight.m,
      letterSpacing: -0.5
    }
  },
  h3: {
    main: {
      fontFamily: fontFamily.headline,
      fontWeight: fontWeight.bold,
      fontSize: fontSize.xl3,
      lineHeight: lineHeight.xl1,
      letterSpacing: -1
    },
    mobile: {
      fontSize: fontSize.s,
      lineHeight: lineHeight.s,
      letterSpacing: "normal"
    }
  },
  heroParagraph: {
    main: {
      fontFamily: fontFamily.headline,
      fontWeight: fontWeight.normal,
      fontSize: fontSize.xl1,
      lineHeight: lineHeight.l,
      letterSpacing: -1
    },
    mobile: {
      fontSize: fontSize.s,
      lineHeight: lineHeight.s,
      letterSpacing: "normal"
    }
  },
  title1: {
    main: {
      fontFamily: fontFamily.headline,
      fontWeight: fontWeight.medium,
      fontSize: fontSize.l,
      lineHeight: lineHeight.xl1
    },
    mobile: {
      fontSize: fontSize.s,
      lineHeight: lineHeight.s
    }
  },
  title2: {
    main: {
      fontFamily: fontFamily.headline,
      fontWeight: fontWeight.bold,
      fontSize: fontSize.m,
      lineHeight: lineHeight.m
    },
    mobile: {
      fontSize: fontSize.xs1,
      lineHeight: lineHeight.xs1
    }
  },
  title3: {
    main: {
      fontFamily: fontFamily.headline,
      fontWeight: fontWeight.medium,
      fontSize: fontSize.s,
      lineHeight: lineHeight.xs1
    },
    mobile: {
      fontSize: 14,
      lineHeight: lineHeight.xs3
    }
  },
  title4: {
    main: {
      fontFamily: fontFamily.headline,
      fontWeight: fontWeight.medium,
      fontSize: fontSize.xs1,
      lineHeight: lineHeight.xs1
    },
    mobile: {
      fontSize: fontSize.xs2,
      lineHeight: lineHeight.xs1
    }
  },
  title5: {
    main: {
      fontFamily: fontFamily.headline,
      fontWeight: fontWeight.medium,
      fontSize: fontSize.xs2,
      lineHeight: lineHeight.xs1
    },
    mobile: {
      fontSize: fontSize.xs3,
      lineHeight: lineHeight.xs2
    }
  },
  supporting: {
    main: {
      fontFamily: fontFamily.headline,
      fontWeight: fontWeight.medium,
      fontSize: fontSize.xs4,
      lineHeight: lineHeight.xs4,
      letterSpacing: "0.03em"
    },
    mobile: {
      fontSize: 9,
      lineHeight: "11px"
    }
  },
  subtitle1: {
    main: {
      fontFamily: fontFamily.body,
      fontWeight: fontWeight.normal,
      fontSize: fontSize.xl2,
      lineHeight: lineHeight.xl2
    },
    mobile: {
      fontSize: fontSize.xl1,
      lineHeight: lineHeight.l
    }
  },
  subtitle2: {
    main: {
      fontFamily: fontFamily.body,
      fontWeight: fontWeight.normal,
      fontSize: fontSize.xl1,
      lineHeight: lineHeight.l
    },
    mobile: {
      fontSize: fontSize.l,
      lineHeight: lineHeight.l
    }
  },
  subtitle3: {
    main: {
      fontFamily: fontFamily.body,
      fontWeight: fontWeight.normal,
      fontSize: fontSize.l,
      lineHeight: lineHeight.l
    },
    mobile: {
      fontSize: fontSize.m,
      lineHeight: lineHeight.l
    }
  },
  subtitle4: {
    main: {
      fontFamily: fontFamily.body,
      fontWeight: fontWeight.normal,
      fontSize: fontSize.m,
      lineHeight: lineHeight.l
    },
    mobile: {
      fontSize: fontSize.s,
      lineHeight: lineHeight.m
    }
  },
  description: {
    main: {
      fontFamily: fontFamily.body,
      fontWeight: fontWeight.normal,
      fontSize: fontSize.xs3,
      lineHeight: lineHeight.xs1
    },
    mobile: {
      fontSize: fontSize.xs5,
      lineHeight: lineHeight.xs4
    }
  },
  callout: {
    main: {
      fontFamily: fontFamily.body,
      fontWeight: fontWeight.normal,
      fontSize: fontSize.xs1,
      lineHeight: lineHeight.s
    },
    mobile: {
      fontSize: fontSize.xs2,
      lineHeight: lineHeight.xs1
    }
  },
  caption: {
    main: {
      fontFamily: fontFamily.body,
      fontWeight: fontWeight.normal,
      fontSize: fontSize.xs2,
      lineHeight: lineHeight.xs2,
      letterSpacing: "0.25px"
    },
    mobile: {
      fontSize: fontSize.xs3,
      lineHeight: lineHeight.xs2
    }
  }
}

export const typographyTheme = {
  // overrides
  fontFamily: fontFamily.sans,
  fontSize: fontSize.m,
  htmlFontSize: fontSize.s,
  fontFamilyHeadline: fontFamily.headline,
  fontFamilyMonospace: fontFamily.monospace,

  // customized variants
  hero: typography.hero.main,
  h1: typography.h1.main,
  h2: typography.h2.main,
  h3: typography.h3.main,
  h4: typography.title1.main,
  h5: typography.title3.main,
  h6: typography.title4.main,
  heroParagraph: typography.heroParagraph.main,
  title1: typography.title1.main,
  title2: typography.title2.main,
  title3: typography.title3.main,
  title4: typography.title4.main,
  title5: typography.title5.main,
  button1: typography.title1.main,
  button2: typography.title3.main,
  button3: typography.title4.main,
  button4: typography.title5.main,
  supporting: typography.supporting.main,
  supportingBold: {
    ...typography.supporting.main,
    fontWeight: fontWeight.bold
  },
  subtitle1: typography.subtitle1.main,
  subtitle1Bold: {
    ...typography.subtitle1.main,
    fontWeight: fontWeight.bold
  },
  subtitle2: typography.subtitle2.main,
  subtitle2Bold: {
    ...typography.subtitle2.main,
    fontWeight: fontWeight.bold
  },
  subtitle3: typography.subtitle3.main,
  subtitle3Bold: {
    ...typography.subtitle3.main,
    fontWeight: fontWeight.bold
  },
  subtitle4: typography.subtitle4.main,
  subtitle4Bold: {
    ...typography.subtitle4.main,
    fontWeight: fontWeight.bold
  },
  description: typography.description.main,
  descriptionBold: {
    ...typography.description.main,
    fontWeight: fontWeight.bold
  },
  callout: typography.callout.main,
  calloutBold: {
    ...typography.callout.main,
    fontWeight: fontWeight.bold
  },
  caption: typography.caption.main,
  captionBold: {
    ...typography.caption.main,
    fontWeight: fontWeight.bold
  },

  // customized values
  fontSizeXs5: fontSize.xs5,
  fontSizeXs4: fontSize.xs4,
  fontSizeXs3: fontSize.xs3,
  fontSizeXs2: fontSize.xs2,
  fontSizeXs1: fontSize.xs1,
  fontSizeS: fontSize.s,
  fontSizeM: fontSize.m,
  fontSizeL: fontSize.l,
  fontSizeXl1: fontSize.xl1,
  fontSizeXl2: fontSize.xl2,
  fontSizeXl3: fontSize.xl3,
  fontSizeXl4: fontSize.xl4,
  fontSizeXl5: fontSize.xl5,
  fontSizeXl6: fontSize.xl6,

  fontWeightLight: fontWeight.light,
  fontWeightNormal: fontWeight.normal,
  fontWeightMedium: fontWeight.medium,
  fontWeightSemi: fontWeight.semi,
  fontWeightBold: fontWeight.bold,

  lineHeightXs5: lineHeight.xs5,
  lineHeightXs4: lineHeight.xs4,
  lineHeightXs3: lineHeight.xs3,
  lineHeightXs2: lineHeight.xs2,
  lineHeightXs1: lineHeight.xs1,
  lineHeightS: lineHeight.s,
  lineHeightM: lineHeight.m,
  lineHeightL: lineHeight.m,
  lineHeightXl1: lineHeight.xl1,
  lineHeightXl2: lineHeight.xl3,
  lineHeightXl3: lineHeight.xl4,
  lineHeightXl4: lineHeight.xl4,
  lineHeightXl5: lineHeight.xl5
}

export default typography
