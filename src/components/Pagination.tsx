import { styled } from "@mui/material/styles"
import { fontSize } from "../theme/typography"
import MuiPagination, { PaginationProps as MuiPaginationProps } from "@mui/material/Pagination"
import MuiPaginationItem from "@mui/material/PaginationItem"
import Icon from "./Icon"

/**
 * Types
 */
export interface PaginationProps extends MuiPaginationProps {}

/**
 * Styles
 */
const StyledPagination = styled(MuiPagination)(({ theme }) => ({
  position: "relative",
  userSelect: "none",
  paddingInline: theme.spacing(6),

  ".MuiPagination-ul": {
    alignItems: "center",
    justifyContent: "center",
    lineHeight: 0,

    li: {
      "&:first-of-type, &:last-of-type": {
        position: "absolute",
        top: 0,
        marginInline: 0
      },
      "&:first-of-type": {
        left: 0
      },
      "&:last-of-type": {
        right: 0
      }
    }
  },
  ".MuiPaginationItem-root": {
    fontSize: fontSize.xs2,
    color: theme.palette.gray["700"]
  },
  ".MuiButtonBase-root": {
    "&.MuiPaginationItem-text": {
      "&.Mui-selected": {
        color: theme.palette.gray.white,
        backgroundColor: theme.palette.primary.main
      }
    },
    "&.MuiPaginationItem-outlined": {
      border: "1.5px solid",
      borderColor: theme.palette.gray["500"],

      "&.Mui-selected": {
        borderColor: theme.palette.gray["800"],
        color: theme.palette.gray["800"],
        backgroundColor: "transparent !important"
      }
    }
  },
  ".icon": {
    margin: -8
  }
}))

const ArrowLeftButton = () => <Icon iconKey="arrowLeft" size="md" />
const ArrowRightButton = () => <Icon iconKey="arrowRight" size="md" />

/**
 * Components
 */

const Pagination = ({ onChange, page, count, variant = "outlined", size = "large", ...props }: PaginationProps) => {
  return (
    <StyledPagination
      count={count}
      variant={variant}
      size={size}
      renderItem={(item) => (
        <MuiPaginationItem
          components={{
            previous: ArrowLeftButton,
            next: ArrowRightButton
          }}
          {...item}
        />
      )}
      {...props}
    />
  )
}

export default Pagination
