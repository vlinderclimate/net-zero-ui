import React from "react"
import { styled } from "@mui/material/styles"
import MuiBox from "@mui/material/Box"

import Section from "./Section"
import GridContainer from "../GridContainer"
import GridItem from "../GridItem"
import Typography from "../Typography"

export interface InnerHeaderProps {
  title?: string
  image?: string
  imageWidth?: string | number
  backButton?: JSX.Element | JSX.Element[] | string
  rightItem?: JSX.Element | JSX.Element[] | string
  scrollButton?: JSX.Element | JSX.Element[] | string
  children?: JSX.Element | JSX.Element[] | string
  headerBg?: string
}

interface StyledInnerHeaderProps extends Omit<InnerHeaderProps, "headerBg"> {
  $headerBg?: string
}

export const HeaderBox = styled(MuiBox)<StyledInnerHeaderProps>(({ theme, $headerBg }) => ({
  background: $headerBg
    ? `${theme.palette.gray[400]} url(${$headerBg}) no-repeat center bottom / cover`
    : theme.palette.gray[400],

  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2, 0)
  }
}))

export const Item = styled(MuiBox)(() => ({}))

export const Divider = styled(GridItem)(({ theme }) => ({
  borderLeft: "1px solid rgba(0, 0, 0, 0.15)",
  height: "100%",
  transform: "rotate(20deg)",
  position: "absolute",
  top: 2,
  left: theme.spacing(-2)
}))

export const Image = styled("img")(({ theme }) => ({
  maxWidth: "100%",
  display: "block",
  backgroundColor: theme.palette.gray[400],
  objectFit: "contain"
}))

const InnerHeader: React.FC<InnerHeaderProps> = ({
  title,
  image,
  rightItem,
  backButton,
  scrollButton,
  imageWidth = 120,
  children,
  headerBg
}) => {
  return (
    <HeaderBox $headerBg={headerBg}>
      <Section topIndent>
        <GridContainer alignItems="center" spacing={1} mt={{ xs: 1, md: rightItem ? -6 : 1 }}>
          {backButton && <GridItem xs={1}>{backButton}</GridItem>}
          <GridItem xs={rightItem ? 12 : 10} md={rightItem ? 7 : 11}>
            <MuiBox
              display="flex"
              alignItems="center"
              justifyContent={{ xs: "center", md: "flex-start" }}
              flexDirection={{ xs: "column", md: "unset" }}
              flexWrap={{ xs: "wrap", md: "nowrap" }}
              textAlign={{ xs: "center", md: "left" }}
            >
              {image && (
                <Item pr={{ xs: 0, md: 5 }} mb={{ xs: 3, sm: 4, md: 0 }}>
                  <Image src={image} alt={title} width={imageWidth} height={imageWidth} />
                </Item>
              )}
              <Item sx={{ flexBasis: "78%", maxWidth: "78%", flexGrow: 1 }}>
                <Typography variant="h1" component="div" marginBottom={{ xs: 1, md: 2 }}>
                  {title}
                </Typography>
                {children}
              </Item>
            </MuiBox>
          </GridItem>
          {scrollButton && <GridItem xs={1}>{scrollButton}</GridItem>}
          {rightItem && (
            <GridItem xs={12} md={5}>
              {rightItem}
            </GridItem>
          )}
        </GridContainer>
      </Section>
    </HeaderBox>
  )
}

export default InnerHeader
