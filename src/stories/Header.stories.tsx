import { Story, Meta } from "@storybook/react"
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"

import Header, { HeaderProps } from "../components/shared/Header"
import Logo from "../components/shared/Logo"

const links = [
  {
    url: "#",
    title: "Home"
  },
  {
    url: "#",
    title: "About"
  },
  {
    url: "#",
    title: "FAQ"
  }
]

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
          src="https://atomasolutions.gitlab.io/atoma.cash/vlinder-marketplace/_next/static/image/src/assets/images/logo.ba8fa0f21fb5a90529ca06864dce4433.svg"
        />
      </a>
    </Logo>
  )
}

const Template: Story<HeaderProps> = (args) => {
  return (
    <Header
      logo={<LogoVlinder />}
      links={links}
      userAvatar="https://atomasolutions.gitlab.io/atoma.cash/vlinder-marketplace/_next/static/image/src/assets/images/user-empty.76b16152d61cce930535836c8292c293.svg"
      userName="valerii@atoma.at"
      actionButton={{ title: "Exchange", url: "" }}
      cartHandler={() => console.log(">> open cart")}
      userHandler={() => console.log(">> open user menu")}
    />
  )
}

export const Default = Template.bind({})

export default {
  title: "Shared Components/Header",
  component: Header
} as Meta
