import React from "react"

import { styled } from "@mui/material/styles"
import MuiBox from "@mui/material/Box"

import Section from "./Section"
import GridContainer from "../GridContainer"
import GridItem from "../GridItem"
import Typography from "../Typography"

export type BgVariant = "green" | "blue" | "transparent"

export interface SimplePageHeaderProps {
  title?: JSX.Element | JSX.Element[] | string
  description?: JSX.Element | JSX.Element[] | string
  image?: string
  imageWidth?: string | number
  backButton?: JSX.Element | JSX.Element[] | string
  actionButton?: JSX.Element | JSX.Element[] | string | boolean
  children?: JSX.Element | JSX.Element[] | string
  textAlign?: "left" | "center" | "right"
  headerBg?: BgVariant
}

interface StyledPageHeaderProps extends Omit<SimplePageHeaderProps, "headerBg"> {
  $headerBg?: BgVariant
}

export const bgVariant = {
  green: "#9CF3E3",
  blue: "#A3BBFF",
  transparent: "transparent"
}

export const HeaderBox = styled(MuiBox)<StyledPageHeaderProps>(({ theme, $headerBg = "green" }) => ({
  backgroundColor: bgVariant[$headerBg],

  img: {
    width: "100%"
  },
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2, 0)
  }
}))

const PageHeader: React.FC<SimplePageHeaderProps> = ({
  title,
  description,
  children,
  backButton = true,
  actionButton = false,
  textAlign = "left",
  headerBg
}) => {
  return (
    <HeaderBox $headerBg={headerBg}>
      <Section topIndent sx={{ paddingBottom: children ? "0 !important" : "40px" }}>
        <>
          <GridContainer alignItems="flex-start" spacing={1} mt={{ xs: 0, md: children ? 0 : -4 }}>
            <GridItem xs={1} mt={1}>
              {backButton}
            </GridItem>
            <GridItem xs={10} md={10}>
              <MuiBox
                display="flex"
                justifyContent={{ xs: "center", md: "flex-start" }}
                flexDirection={{ xs: "column", md: "column" }}
                flexWrap={{ xs: "wrap", md: "nowrap" }}
                textAlign={{ xs: "center", md: textAlign }}
              >
                <MuiBox
                  px={textAlign === "center" ? 2 : 0}
                  margin={textAlign === "center" ? "auto" : 0}
                  maxWidth={textAlign === "center" ? 710 : 840}
                >
                  <Typography variant="h1" component="h1" mt={{ xs: description ? 1 : 0, md: description ? 3 : 0 }}>
                    {title}
                  </Typography>

                  {description && (
                    <MuiBox mt={{ xs: 2, md: 3 }} mx={{ xs: -5, md: 0 }}>
                      {description}
                    </MuiBox>
                  )}
                </MuiBox>

                {actionButton && <MuiBox mt={{ xs: 3, md: 5 }}>{actionButton}</MuiBox>}
              </MuiBox>
            </GridItem>
          </GridContainer>
          {children && (
            <GridContainer alignItems="center" spacing={1} mt={{ xs: 4, md: 7 }}>
              <GridItem xs={1} />
              <GridItem xs={12} md={11}>
                {children}
              </GridItem>
            </GridContainer>
          )}
        </>
      </Section>
    </HeaderBox>
  )
}

export default PageHeader
