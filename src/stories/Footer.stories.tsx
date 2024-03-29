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
    subtitle: "Contacts",
    modifier: "inline-list",
    text: "Vlinder Austria GmbH Wichtelhuberstraße 16/Top 15400 Hallein, Austria",
    list: [
      {
        title: "Support",
        link: "#"
      },
      {
        title: "Email us",
        link: "#"
      }
    ]
  }
]

const Template: Story<FooterProps> = (args) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <Footer
      logo={<LogoVlinder width="82px" height="23px" />}
      description="Vlinder is a marketplace for carbon offsets and impact investing that empowers people to act on climate. Our goal is to enable carbon mitigation of 10 million tonnes of CO2 every month, the combined footprint of Switzerland and Austria."
      copyright="© 2022 Vlinder Austria GmbH"
      security={
        <ListItem as="div" sx={{ marginBottom: 0 }}>
          <MuiLink
            href="#"
            sx={{
              color: "rgba(0, 0, 0, 0.56)",
              display: "flex",
              alignItems: "center",
              gap: 1,
              "&:hover": { color: "brand" }
            }}
          >
            Security & Privacy
          </MuiLink>
        </ListItem>
      }
    >
      <>
        {list?.map((item: any, i: number) => (
          <GridItem key={i} xs={6}>
            {!isMobile && (
              <Typography variant="heroParagraph" component="div" marginBottom={{ xs: 1, md: 2 }}>
                {item.subtitle}
              </Typography>
            )}

            {!isMobile && item.text && (
              <Typography variant="caption" component="div" marginBottom={{ xs: 1, md: 3 }}>
                {item.text}
              </Typography>
            )}

            <List className={item.modifier} sx={isMobile ? { flexDirection: "row", display: "flex" } : undefined}>
              {item?.list?.map((item: any, i: number) => (
                <ListItem key={i} sx={isMobile ? { width: "auto", marginRight: theme.spacing(2) } : undefined}>
                  <MuiLink href={item.fields?.link}>
                    {item.iconKey && <Icon color="supporting" iconKey={item.iconKey} rotate={0} size="sm" />}
                    {!isMobile && item.title}
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
