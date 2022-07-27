import { Story, Meta } from "@storybook/react"
import React from "react"
import Pagination, { PaginationProps } from "../components/Pagination"

const argTypes = {
  onChange: { table: { disable: true } },
  ref: { table: { disable: true } },
  count: {
    name: "count",
    defaultValue: 10,
    control: { type: "number" }
  },
  size: {
    name: "size",
    defaultValue: "medium",
    options: ["small", "medium", "large"],
    control: {
      type: "select"
    },
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "medium" }
    }
  },
  variant: {
    name: "variant",
    defaultValue: "outlined",
    options: ["outlined", "text"],
    control: {
      type: "select"
    },
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "text" }
    }
  }
}

const Template: Story<PaginationProps> = (args) => {
  const [page, setPage] = React.useState(1)
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  return <Pagination page={page} onChange={handleChange} {...args} />
}

export const Default = Template.bind({})

export default {
  title: "Components/Pagination",
  component: Pagination,
  argTypes
} as Meta
