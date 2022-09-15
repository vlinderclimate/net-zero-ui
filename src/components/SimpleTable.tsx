import type { FC } from "react"
import { styled, Theme } from "@mui/material/styles"
import { Table as MuiTable, TableContainer as MuiTableContainer } from "@mui/material"

import { animation } from "./shared/Animate"

/**
 * Styles
 */
export const TableContainer = styled(MuiTableContainer)(({ theme }) => ({
  marginBottom: theme.spacing(4),

  ".animate__animated &": {
    overflow: "visible !important"
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: theme.spacing(2.5)
  }
}))

export const Table = styled(MuiTable)(({ theme, border = false }: { theme?: Theme; border: boolean }) => ({
  ".MuiTableCell-root": {
    border: border ? undefined : 0,
    padding: border ? theme?.spacing(1.8, 0) : theme?.spacing(0.375, 2, 0.375, 0),

    "&:last-child": {
      textAlign: "end",
      paddingRight: 0
    }
  },
  tr: {
    ...animation
  }
}))

/**
 * Types
 */
export interface SimpleTableProps {
  border?: boolean
  children?: JSX.Element | JSX.Element[] | string
}

/**
 * Components
 */
const SimpleTable: FC<SimpleTableProps> = ({ children, border = false, ...props }) => {
  return (
    <TableContainer {...props}>
      <Table border={border}>
        <tbody>{children}</tbody>
      </Table>
    </TableContainer>
  )
}

export default SimpleTable
