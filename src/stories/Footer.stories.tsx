import { Story, Meta } from "@storybook/react"
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import MuiLink from "@mui/material/Link"

import GridItem from "../components/GridItem"
import Typography from "../components/Typography"
import List from "../components/List"
import Icon from "../components/Icon"
import ListItem from "../components/ListItem"

import Footer, { FooterProps } from "../components/shared/Footer"
import Logo from "../components/shared/Logo"

interface LogoProps {
  monochrome?: boolean
  width?: string | number
  height?: string | number
  mobileWidth?: string | number
  mobileHeight?: string | number
}

// should be as reusable component in your project components folder
const LogoVlinder: React.FC<LogoProps> = ({
  width = "228px",
  height = "64px",
  mobileWidth = "86px",
  mobileHeight = "24px"
}) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const imageWidth = isMobile ? mobileWidth : width
  const imageHeight = isMobile ? mobileHeight : height

  return (
    <Logo>
      <a href="https://vlinderclimate.com">
        <img
          alt="Vlinder"
          width={imageWidth}
          height={imageHeight}
          src="https://atomasolutions.gitlab.io/atoma.cash/vlinder-marketplace/_next/static/image/src/assets/images/inverse-logo.321ba6976e32931337b2e915f72c5935.svg"
        />
      </a>
    </Logo>
  )
}

const list = [
  {
    subtitle: "Carbon",
    list: [
      {
        title: "Sell carbon",
        link: "#"
      },
      {
        title: "Buy carbon",
        link: "#"
      }
    ]
  },
  {
    subtitle: "Follow us",
    list: [
      {
        title: "Twitter",
        link: "https://www.twitter.com/",
        iconKey: "twitter"
      },
      {
        title: "Medium",
        link: "https://www.twitter.com/",
        iconKey: "medium"
      },
      {
        title: "Twitter",
        link: "https://www.twitter.com/",
        iconKey: "twitter"
      },
      {
        title: "Medium",
        link: "https://www.twitter.com/",
        iconKey: "medium"
      }
    ]
  },
  {
    subtitle: "Company",
    list: [
      {
        title: "About",
        link: "#"
      },
      {
        title: "FAQ",
        link: "#"
      }
    ]
  }
]

const Template: Story<FooterProps> = (args) => {
  return (
    <Footer logo={<LogoVlinder width="95px" height="26px" />} copyright="Copyright © 2021 Vlinder AG">
      <>
        {list?.map((item: any, i: number) => (
          <GridItem key={i} xs={6} sm={4}>
            <Typography variant="title5" component="div" marginBottom={{ xs: 1, md: 2 }}>
              {item.subtitle}
            </Typography>

            <List>
              {item?.list?.map((item: any, i: number) => (
                <ListItem key={i}>
                  <MuiLink
                    href={item.link}
                    sx={{
                      color: "rgba(0, 0, 0, 0.56)",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      "&:hover": { color: "brand" }
                    }}
                  >
                    {item.iconKey && <Icon color="secondary" iconKey={item.iconKey} rotate={0} size="xs" />}
                    {item.title}
                  </MuiLink>
                </ListItem>
              ))}
            </List>
          </GridItem>
        ))}
      </>
    </Footer>
  )
}

export const Default = Template.bind({})

export default {
  title: "Shared Components/Footer",
  component: Footer
} as Meta
