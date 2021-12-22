import { Story, Meta } from "@storybook/react"
import Link from "@mui/material/Link"
import Stack from "@mui/material/Stack"
import Typography from "../components/Typography"

import Breadcrumbs, { BreadcrumbsProps } from "../components/Breadcrumbs"

const links = [
  <Link href="/">
    <Typography variant="caption" color="primary">
      Home
    </Typography>
  </Link>,
  <Typography variant="caption" color="secondary">
    Projects
  </Typography>,
  <Typography variant="caption" color="secondary">
    Sri Lanka
  </Typography>
]

const Template: Story<BreadcrumbsProps> = (args) => {
  return (
    <Stack spacing={2}>
      <Breadcrumbs>{links}</Breadcrumbs>
    </Stack>
  )
}

export const Default = Template.bind({})

export default {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs
} as Meta
