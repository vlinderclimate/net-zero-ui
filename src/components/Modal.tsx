import React from "react"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme, styled, Theme } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Fade from "@mui/material/Fade"
import MuiModal, { ModalProps as MuiModalProps } from "@mui/material/Modal"
import Backdrop from "@mui/material/Backdrop"

import Container from "./Container"
import { IconProps } from "./Icon"
import IconButton from "./IconButton"

import boxShadow from "../theme/boxShadow"

export type ModalSize = "sm" | "md" | "safeArea" | "fullScreen"

interface StyledModalProps {
  size: ModalSize
}

export interface ModalProps extends MuiModalProps {
  /**
   * Value that will be used as `aria-labelledby`.
   * Identifies the element (or elements) that labels the current element.
   * @see aria-describedby.
   */
  titleId?: string
  /**
   * Value that will be used as `aria-describedby`.
   * Identifies the element (or elements) that describes the object.
   * @see aria-labelledby
   */
  descriptionId?: string
  /**
   * Width of the modal box.
   */
  size?: ModalSize
  /**
   * Render a close button at top-right corner.
   * If `true`, a default `closeCircle` icon will be applied.
   * Or changing the icon with iconKey.
   */
  closeButton?: boolean | IconProps["iconKey"]
}

const sizeMap = {
  sm: 590,
  md: 700,
  safeArea: "100%",
  fullScreen: "100%"
}
enum SizeLevel {
  Regular,
  Large
}
const sizeLevelMap = {
  sm: SizeLevel.Regular,
  md: SizeLevel.Regular,
  safeArea: SizeLevel.Large,
  fullScreen: SizeLevel.Large
}
const defaultSize = "md"

interface StyledProps {
  theme: Theme
  size: ModalSize
}

const Paper = styled(Box)<StyledModalProps>(({ theme, size }: StyledProps) => ({
  position: "relative",
  width: sizeMap[size],
  backgroundColor: theme.palette.gray.white,
  boxShadow: boxShadow.md,
  borderRadius: theme.borders.radius.xlarge,
  padding: theme.spacing(sizeLevelMap[size] === SizeLevel.Large ? 8 : 4),

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
    width: `calc(100vw - ${theme.spacing(2)})`,
    maxHeight: `calc(100vh - ${theme.spacing(8)})`,
    bottom: theme.spacing(2)
  }
}))

const CloseButton = styled(Box)<StyledModalProps>(({ theme, size }: StyledProps) => ({
  position: "absolute",
  top: theme.spacing(sizeLevelMap[size] === SizeLevel.Large ? 2.5 : 1),
  right: theme.spacing(sizeLevelMap[size] === SizeLevel.Large ? 2.5 : 1),

  [theme.breakpoints.down("sm")]: {
    top: theme.spacing(1),
    right: theme.spacing(1)
  }
}))

const StyledModal = styled(MuiModal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  height: "100vh"
})

const BoxWrapper: React.FC<Partial<ModalProps>> = ({ size = defaultSize, closeButton = false, onClose, children }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  const ModalContent = () => (
    <Paper size={size}>
      {closeButton && (
        <CloseButton size={size}>
          <IconButton
            iconProps={{
              iconKey: typeof closeButton !== "string" ? "closeCircle" : closeButton,
              size: sizeLevelMap[size] === SizeLevel.Large && !isMobile ? "md" : "sm",
              color: "secondary"
            }}
            onClick={(event) => {
              if (onClose) onClose(event, "escapeKeyDown")
            }}
          />
        </CloseButton>
      )}
      <Box>{children}</Box>
    </Paper>
  )

  if (size !== "safeArea") return <ModalContent />

  return (
    <Container>
      <ModalContent />
    </Container>
  )
}

const Modal: React.FC<ModalProps> = ({ open, onClose, titleId, descriptionId, size = defaultSize, ...props }) => {
  const handleClose: MuiModalProps["onClose"] = (event, reason) => {
    if (onClose) onClose(event, reason)
  }

  return (
    <StyledModal
      aria-labelledby={titleId ?? undefined}
      aria-describedby={descriptionId ?? undefined}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
    >
      <Fade in={open}>
        <div>
          <BoxWrapper size={size} onClose={handleClose} {...props} />
        </div>
      </Fade>
    </StyledModal>
  )
}

export default Modal
