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
  xs5: 11
  xs4: 12
  xs3: 13
  xs2: 15
  xs1: 18
  s: 21
  m: 32
  l: 40
  xl1: 64
} = {
  xs5: 11,
  xs4: 12,
  xs3: 13,
  xs2: 15,
  xs1: 18,
  s: 21,
  m: 32,
  l: 40,
  xl1: 64
}

export const lineHeight: {
  xs5: "16px"
  xs4: "18px"
  xs3: "20px"
  xs2: "24px"
  xs1: "28px"
  s: "30px"
  m: "38px"
  l: "44px"
  xl1: "64px"
} = {
  xs5: "16px",
  xs4: "18px",
  xs3: "20px",
  xs2: "24px",
  xs1: "28px",
  s: "30px",
  m: "38px",
  l: "44px",
  xl1: "64px"
}

export const fontSizeMobile: {
  xs4: 9
  xs3: 10
  xs2: 12
  xs1: 14
  s: 16
  m: 20
  l: 24
  xl1: 40
} = {
  xs4: 9,
  xs3: 10,
  xs2: 12,
  xs1: 14,
  s: 16,
  m: 20,
  l: 24,
  xl1: 40
}

export const lineHeightMobile: {
  xs4: "10px"
  xs3: "14px"
  xs2: "16px"
  xs1: "20px"
  s: "21px"
  m: "24px"
  l: "28px"
  xl1: "40px"
} = {
  xs4: "10px",
  xs3: "14px",
  xs2: "16px",
  xs1: "20px",
  s: "21px",
  m: "24px",
  l: "28px",
  xl1: "40px"
}

export const fontWeight: { light: 300; normal: 400; medium: 500; semi: 600; bold: 700; black: 800 } = {
  light: 300,
  normal: 400,
  medium: 500,
  semi: 600,
  bold: 700,
  black: 800
}

const typography = {
  hero: {
    main: {
      fontFamily: fontFamily.headline,
      fontWeight: fontWeight.bold,
      fontSize: fontSize.xl1,
      lineHeight: lineHeight.xl1,
      letterSpacing: -0.5
    },
    mobile: {
      fontSize: fontSizeMobile.xl1,
      lineHeight: lineHeightMobile.xl1
    }
  },
  h1: {
    main: {
      fontFamily: fontFamily.headline,
      fontWeight: fontWeight.bold,
      fontSize: fontSize.l,
      lineHeight: lineHeight.l,
      letterSpacing: -0.5
    },
    mobile: {
      fontSize: fontSizeMobile.l,
      lineHeight: lineHeightMobile.l
    }
  },
  h2: {
    main: {
      fontFamily: fontFamily.headline,
      fontWeight: fontWeight.bold,
      fontSize: fontSize.m,
      lineHeight: lineHeight.m,
      letterSpacing: -0.5
    },
    mobile: {
      fontSize: fontSizeMobile.m,
      lineHeight: lineHeightMobile.m
    }
  },
  h3: {
    main: {
      fontFamily: fontFamily.headline,
      fontWeight: fontWeight.normal,
      fontSize: fontSize.s,
      lineHeight: lineHeight.xs1,
      letterSpacing: -0.25
    },
    mobile: {
      fontSize: fontSizeMobile.s,
      lineHeight: lineHeightMobile.m
    }
  },
  heroParagraph: {
    main: {
      fontFamily: fontFamily.headline,
      fontWeight: fontWeight.normal,
      fontSize: fontSize.xs1,
      lineHeight: lineHeight.s,
      letterSpacing: 0.25
    },
    mobile: {
      fontSize: fontSizeMobile.xs1,
      lineHeight: lineHeightMobile.s
    }
  },
  caption: {
    main: {
      fontFamily: fontFamily.headline,
      fontWeight: fontWeight.normal,
      fontSize: fontSize.xs2,
      lineHeight: lineHeight.xs2
    },
    mobile: {
      fontSize: fontSizeMobile.xs2,
      lineHeight: lineHeightMobile.xs1
    }
  },
  description: {
    main: {
      fontFamily: fontFamily.body,
      fontWeight: fontWeight.normal,
      fontSize: fontSize.xs3,
      lineHeight: lineHeight.xs3
    },
    mobile: {
      fontSize: fontSizeMobile.xs3,
      lineHeight: lineHeightMobile.xs2
    }
  },
  callout: {
    main: {
      fontFamily: fontFamily.body,
      fontWeight: fontWeight.normal,
      fontSize: fontSize.xs4,
      lineHeight: lineHeight.xs5
    },
    mobile: {
      fontSize: fontSizeMobile.xs3,
      lineHeight: lineHeightMobile.xs2
    }
  },
  supporting: {
    main: {
      fontFamily: fontFamily.headline,
      fontWeight: fontWeight.medium,
      fontSize: fontSize.xs5,
      lineHeight: lineHeight.xs5,
      letterSpacing: 0.6
    },
    mobile: {
      fontSize: fontSizeMobile.xs3,
      lineHeight: lineHeightMobile.xs3
    }
  },

  // ????
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
      fontSize: fontSize.xs2,
      lineHeight: lineHeight.xs4
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
  button1: typography.title1.main,
  button2: typography.title3.main,
  button3: typography.title4.main,
  button4: typography.title5.main,
  button1Mobile: typography.title1.mobile,
  button2Mobile: typography.title3.mobile,
  button3Mobile: typography.title4.mobile,
  button4Mobile: typography.title5.mobile,
  supporting: typography.supporting.main,
  description: typography.description.main,
  callout: typography.callout.main,
  caption: typography.caption.main,

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
  fontSizeXs4Mobile: fontSizeMobile.xs4,
  fontSizeXs3Mobile: fontSizeMobile.xs3,
  fontSizeXs2Mobile: fontSizeMobile.xs2,
  fontSizeXs1Mobile: fontSizeMobile.xs1,
  fontSizeSMobile: fontSizeMobile.s,
  fontSizeMMobile: fontSizeMobile.m,
  fontSizeLMobile: fontSizeMobile.l,
  fontSizeXl1Mobile: fontSizeMobile.xl1,

  lineHeightXs5: lineHeight.xs5,
  lineHeightXs4: lineHeight.xs4,
  lineHeightXs3: lineHeight.xs3,
  lineHeightXs2: lineHeight.xs2,
  lineHeightXs1: lineHeight.xs1,
  lineHeightS: lineHeight.s,
  lineHeightM: lineHeight.m,
  lineHeightL: lineHeight.l,
  lineHeightXl1: lineHeight.xl1,
  lineHeightXs4Mobile: lineHeightMobile.xs4,
  lineHeightXs3Mobile: lineHeightMobile.xs3,
  lineHeightXs2Mobile: lineHeightMobile.xs2,
  lineHeightXs1Mobile: lineHeightMobile.xs1,
  lineHeightSMobile: lineHeightMobile.s,
  lineHeightMMobile: lineHeightMobile.m,
  lineHeightLMobile: lineHeightMobile.l,
  lineHeightXl1Mobile: lineHeightMobile.xl1,

  fontWeightLight: fontWeight.light,
  fontWeightNormal: fontWeight.normal,
  fontWeightMedium: fontWeight.medium,
  fontWeightSemi: fontWeight.semi,
  fontWeightBold: fontWeight.bold
}

export default typography
