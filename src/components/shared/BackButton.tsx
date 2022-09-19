import { FC } from "react"
import Button from "../Button"
import Icon from "../Icon"

export interface BackButtonProps {
  isMobile?: boolean
  onClick?: any
}

const BackButton: FC<BackButtonProps> = ({ isMobile, onClick, ...rest }) => {
  return (
    <Button
      onClick={onClick}
      size={isMobile ? "md" : "lg"}
      variant="outlined"
      color="primary"
      startIcon={<Icon iconKey="arrowLeft" size={isMobile ? "md" : "md"} />}
      {...rest}
    />
  )
}

export default BackButton
