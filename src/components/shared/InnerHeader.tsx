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
  children?: JSX.Element | JSX.Element[] | string
  headerBg?: "green" | "blue"
}

export const HeaderBox = styled(MuiBox)<InnerHeaderProps>(({ theme, headerBg }) => ({
  background: headerBg ? `url(${headerBg}) no-repeat center bottom / cover` : "none",
  paddingTop: theme.spacing(7),

  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2, 0)
  }
}))

export const Item = styled(MuiBox)(({ theme }) => ({}))

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
  display: "block"
}))

const InnerHeader: React.FC<InnerHeaderProps> = ({ title, image, imageWidth = 120, children, headerBg }) => {
  return (
    <HeaderBox headerBg={headerBg}>
      <Section topIndent>
        <GridContainer justifyContent="center">
          <GridItem xs={12} md={11}>
            <MuiBox display="flex" alignItems="center" flexWrap="nowrap">
              {image && (
                <Item>
                  <Image src={image} alt={title} width={imageWidth} />
                </Item>
              )}
              <Item pl={{ xs: 2, sm: 5 }} sx={{ flexBasis: "78%", maxWidth: "78%", flexGrow: 1 }}>
                <Typography variant="h1" component="div" marginBottom={{ xs: 1, md: 2 }}>
                  {title}
                </Typography>
                {children}
              </Item>
            </MuiBox>
          </GridItem>
        </GridContainer>
      </Section>
    </HeaderBox>
  )
}

export default InnerHeader
