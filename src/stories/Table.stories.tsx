import { Story, Meta } from "@storybook/react"

import MuiTable from "@mui/material/Table"
import MuiTableRow from "@mui/material/TableRow"
import MuiTableBody from "@mui/material/TableBody"
import MuiTableCell from "@mui/material/TableCell"
import MuiTableHead from "@mui/material/TableHead"
import MuiTableContainer from "@mui/material/TableContainer"

const Template: Story = () => {
  return (
    <MuiTableContainer>
      <MuiTable>
        <MuiTableHead>
          <MuiTableRow>
            <MuiTableCell>heading 1</MuiTableCell>
            <MuiTableCell>heading 2</MuiTableCell>
          </MuiTableRow>
        </MuiTableHead>
        <MuiTableBody>
          <MuiTableRow>
            <MuiTableCell>1</MuiTableCell>
            <MuiTableCell>0.00%</MuiTableCell>
          </MuiTableRow>
          <MuiTableRow>
            <MuiTableCell>2</MuiTableCell>
            <MuiTableCell>0.24%</MuiTableCell>
          </MuiTableRow>
        </MuiTableBody>
      </MuiTable>
    </MuiTableContainer>
  )
}

export const Default = Template.bind({})

export default {
  title: "Table/Basic",
  component: MuiTableContainer,
  subcomponents: {
    MuiTable,
    MuiTableRow,
    MuiTableBody,
    MuiTableCell,
    MuiTableHead
  },
  parameters: {
    docs: {
      description: {
        component: "Use pieces of table components to compose a table."
      },
      source: {
        type: "code"
      }
    }
  }
} as Meta
