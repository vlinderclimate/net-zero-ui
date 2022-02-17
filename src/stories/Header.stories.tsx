import { Story, Meta } from "@storybook/react"
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"

import Account, { AccountImage, AccountName } from "../components/shared/Account"
import Header, { HeaderProps } from "../components/shared/Header"
import Logo from "../components/shared/Logo"
import Button from "../components/Button"
import Icon from "../components/Icon"
import Typography from "../components/Typography"

interface LogoProps {
  monochrome?: boolean
  width?: string | number
  height?: string | number
  mobileWidth?: string | number
  mobileHeight?: string | number
}

// should be as reusable component in your project components folder
const LogoVlinder: React.FC<LogoProps> = ({
  width = "143px",
  height = "40px",
  mobileWidth = "86px",
  mobileHeight = "24px"
}) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

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
      <Typography variant="heroParagraphMedium" color="secondary" pl={1} pt={0.4}>
        Store
      </Typography>
    </Logo>
  )
}

const Template: Story<HeaderProps> = (args) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <Header
      logo={<LogoVlinder />}
      // links={links}
      cartHandler={() => console.log(">> open cart")}
      menuHandler={() => console.log(">> open menu")}
    >
      {isMobile ? (
        <Button
          variant="outlined"
          color="primary"
          size="md"
          startIcon={<Icon iconKey="user" size="xs" />}
          onClick={() => console.log(">> open user menu")}
        />
      ) : (
        <Account>
          <Button
            sx={{ display: "block" }}
            variant="outlined"
            color="primary"
            size="sm"
            onClick={() => console.log(">> open user menu")}
          >
            <AccountImage src="https://atomasolutions.gitlab.io/atoma.cash/vlinder-marketplace/_next/static/image/src/assets/images/user-empty.76b16152d61cce930535836c8292c293.svg" />
            <AccountName>valerii@atoma.at</AccountName>
          </Button>
        </Account>
      )}
    </Header>
  )
}

export const Default = Template.bind({})

export default {
  title: "Shared Components/Header",
  component: Header
} as Meta
