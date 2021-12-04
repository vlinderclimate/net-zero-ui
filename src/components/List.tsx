import React from "react"
import { styled, Theme } from "@mui/material/styles"
import MuiList, { ListProps as MuiListProps } from "@mui/material/List"

export interface SwitchProps {
  disabled?: boolean
}

export interface ListProps extends Omit<MuiListProps, "disabled">, SwitchProps {}

interface StyledProps extends ListProps {
  theme?: Theme
}

const StyledList = styled(MuiList)(({ theme }: StyledProps) => ({
  padding: 0
}))

const List: React.FC<ListProps> = ({ ...props }) => {
  return <StyledList {...props} />
}

export default List
