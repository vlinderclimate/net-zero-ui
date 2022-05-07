import React from "react"
import mapValues from "lodash/mapValues"
import MuiTypography, { TypographyProps as MuiTypographyProps } from "@mui/material/Typography"
import { Theme, styled } from "@mui/material/styles"
import typography from "../theme/typography"
import { ReadingColorVariant } from "../theme/colors"

export const TypographyVariants = [
  "hero",
  "h1",
  "h2",
  "h3",
  "h3Medium",
  "h3Bold",
  "h4",
  "h5",
  "h6",
  "heroParagraph",
  "heroParagraphBold",
  "heroParagraphMedium",
  "caption",
  "captionMedium",
  "captionBold",
  "button1",
  "button2",
  "button3",
  "button4",
  "description",
  "descriptionBold",
  "callout",
  "calloutBold",

  "supporting",
  "supportingUppercase"
] as const
type TypographyVariant = typeof TypographyVariants[number]

export interface TypographyProps extends Omit<MuiTypographyProps, "color" | "variant"> {
  noWrap?: boolean
  display?: "initial" | "block" | "inline"
  component?: React.ElementType
  dangerouslySetInnerHTML?: MuiTypographyProps["dangerouslySetInnerHTML"]
  variant?: TypographyVariant
  color?: ReadingColorVariant
}

const customizedVariants = {
  hero: {
    element: "h1",
    styles: (theme: Theme) => ({
      ...typography.hero.main,
      [theme.breakpoints.down("sm")]: {
        ...typography.hero.mobile
      }
    })
  },
  h1: {
    element: "h1",
    styles: (theme: Theme) => ({
      ...typography.h1.main,
      [theme.breakpoints.down("sm")]: {
        ...typography.h1.mobile
      }
    })
  },
  h2: {
    element: "h2",
    styles: (theme: Theme) => ({
      ...typography.h2.main,
      [theme.breakpoints.down("sm")]: {
        ...typography.h2.mobile
      }
    })
  },
  h3: {
    element: "h3",
    styles: (theme: Theme) => ({
      ...typography.h3.main,
      [theme.breakpoints.down("sm")]: {
        ...typography.h3.mobile
      }
    })
  },
  h3Medium: {
    element: "h3",
    styles: (theme: Theme) => ({
      ...typography.h3.main,
      fontWeight: theme.typography.fontWeightMedium,
      [theme.breakpoints.down("sm")]: {
        ...typography.h3.mobile
      }
    })
  },
  h3Bold: {
    element: "h3",
    styles: (theme: Theme) => ({
      ...typography.h3.main,
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.down("sm")]: {
        ...typography.h3.mobile
      }
    })
  },
  h4: {
    element: "h4",
    styles: (theme: Theme) => ({
      ...typography.title1.main,
      [theme.breakpoints.down("sm")]: {
        ...typography.title1.mobile
      }
    })
  },
  h5: {
    element: "h5",
    styles: (theme: Theme) => ({
      ...typography.title3.main,
      [theme.breakpoints.down("sm")]: {
        ...typography.title3.mobile
      }
    })
  },
  h6: {
    element: "h6",
    styles: (theme: Theme) => ({
      ...typography.title4.main,
      [theme.breakpoints.down("sm")]: {
        ...typography.title4.mobile
      }
    })
  },
  heroParagraph: {
    element: "p",
    styles: (theme: Theme) => ({
      ...typography.heroParagraph.main,
      [theme.breakpoints.down("sm")]: {
        ...typography.heroParagraph.mobile
      }
    })
  },
  heroParagraphBold: {
    element: "p",
    styles: (theme: Theme) => ({
      ...typography.heroParagraph.main,
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.down("sm")]: {
        ...typography.heroParagraph.mobile
      }
    })
  },
  heroParagraphMedium: {
    element: "p",
    styles: (theme: Theme) => ({
      ...typography.heroParagraph.main,
      fontWeight: theme.typography.fontWeightMedium,
      [theme.breakpoints.down("sm")]: {
        ...typography.heroParagraph.mobile
      }
    })
  },
  title1: {
    element: "h4",
    styles: (theme: Theme) => ({
      ...typography.title1.main,
      [theme.breakpoints.down("sm")]: {
        ...typography.title1.mobile
      }
    })
  },
  title2: {
    element: "h4",
    styles: (theme: Theme) => ({
      ...typography.title2.main,
      [theme.breakpoints.down("sm")]: {
        ...typography.title2.mobile
      }
    })
  },
  title3: {
    element: "h5",
    styles: (theme: Theme) => ({
      ...typography.title3.main,
      [theme.breakpoints.down("sm")]: {
        ...typography.title3.mobile
      }
    })
  },
  title4: {
    element: "h6",
    styles: (theme: Theme) => ({
      ...typography.title4.main,
      [theme.breakpoints.down("sm")]: {
        ...typography.title4.mobile
      }
    })
  },
  title5: {
    element: "p",
    styles: (theme: Theme) => ({
      ...typography.title5.main,
      [theme.breakpoints.down("sm")]: {
        ...typography.title5.mobile
      }
    })
  },
  button1: {
    element: "p",
    styles: (theme: Theme) => ({
      ...typography.title1.main,
      [theme.breakpoints.down("sm")]: {
        ...typography.title1.mobile
      }
    })
  },
  button2: {
    element: "p",
    styles: (theme: Theme) => ({
      ...typography.title3.main,
      [theme.breakpoints.down("sm")]: {
        ...typography.title3.mobile
      }
    })
  },
  button3: {
    element: "p",
    styles: (theme: Theme) => ({
      ...typography.title4.main,
      [theme.breakpoints.down("sm")]: {
        ...typography.title4.mobile
      }
    })
  },
  button4: {
    element: "p",
    styles: (theme: Theme) => ({
      ...typography.title5.main,
      [theme.breakpoints.down("sm")]: {
        ...typography.title5.mobile
      }
    })
  },
  description: {
    element: "p",
    styles: (theme: Theme) => ({
      ...typography.description.main,
      [theme.breakpoints.down("sm")]: {
        ...typography.description.mobile
      }
    })
  },
  descriptionBold: {
    element: "p",
    styles: (theme: Theme) => ({
      ...typography.description.main,
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.down("sm")]: {
        ...typography.description.mobile
      }
    })
  },
  caption: {
    element: "p",
    styles: (theme: Theme) => ({
      ...typography.caption.main,
      [theme.breakpoints.down("sm")]: {
        ...typography.caption.mobile
      }
    })
  },
  captionMedium: {
    element: "p",
    styles: (theme: Theme) => ({
      ...typography.caption.main,
      fontWeight: theme.typography.fontWeightMedium,
      [theme.breakpoints.down("sm")]: {
        ...typography.caption.mobile
      }
    })
  },
  captionBold: {
    element: "p",
    styles: (theme: Theme) => ({
      ...typography.caption.main,
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.down("sm")]: {
        ...typography.caption.mobile
      }
    })
  },
  callout: {
    element: "p",
    styles: (theme: Theme) => ({
      ...typography.callout.main,
      [theme.breakpoints.down("sm")]: {
        ...typography.callout.mobile
      }
    })
  },
  calloutBold: {
    element: "p",
    styles: (theme: Theme) => ({
      ...typography.callout.main,
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.down("sm")]: {
        ...typography.callout.mobile
      }
    })
  },
  supporting: {
    element: "p",
    styles: (theme: Theme) => ({
      ...typography.supporting.main,
      [theme.breakpoints.down("sm")]: {
        ...typography.supporting.mobile
      }
    })
  },
  supportingUppercase: {
    element: "p",
    styles: (theme: Theme) => ({
      ...typography.supporting.main,
      letterSpacing: 0.6,
      textTransform: "uppercase",
      [theme.breakpoints.down("sm")]: {
        ...typography.supporting.mobile
      }
    })
  }
}

interface TypographyStyleProps extends Omit<MuiTypographyProps, "color" | "variant"> {
  variant: TypographyVariant
  color: TypographyProps["color"]
  theme: Theme
}

const StyledTypography: any = styled(MuiTypography)(({ theme, color, variant }: TypographyStyleProps) => ({
  color: theme.palette.text[color ?? "primary"],
  ...customizedVariants[variant]?.styles(theme),

  "&a:not(.MuiButton-root), & a:not(.MuiButton-root)": {
    display: "inline-block",
    position: "relative",
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightBold,
    textDecoration: "none",
    background: `linear-gradient(${theme.palette.primary.main},${theme.palette.primary.main}) left bottom no-repeat`,
    backgroundPositionX: "center",
    backgroundSize: "100% 3px",
    transition: theme.transitions.create(["background"]),

    "&:active, &:hover, &:focus": {
      backgroundSize: "0% 3px"
    }
  }
}))

const variantMapping = {
  // customized
  ...mapValues(customizedVariants, "element")
}

const Typography: React.FC<TypographyProps> = ({
  variant = "description",
  align,
  color,
  noWrap,
  display,
  component,
  children,
  dangerouslySetInnerHTML,
  ...props
}) => {
  const typographyProps = {
    align,
    noWrap,
    display,
    color,
    variant,
    variantMapping,
    dangerouslySetInnerHTML,
    component: component ?? variantMapping[variant]
  }

  return (
    <StyledTypography {...typographyProps} {...props}>
      {children}
    </StyledTypography>
  )
}

export default Typography
