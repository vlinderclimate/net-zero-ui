import React from "react"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme, styled } from "@mui/material/styles"
import MuiBox from "@mui/material/Box"
import MuiFade from "@mui/material/Fade"
import MuiModal, { ModalProps as MuiModalProps } from "@mui/material/Modal"
import Backdrop from "@mui/material/Backdrop"

import Container from "./Container"
import { IconProps } from "./Icon"
import IconButton from "./IconButton"

import boxShadow from "../theme/boxShadow"

export type ModalSize = "xs" | "sm" | "md" | "safeArea" | "fullScreen"

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
  /**
   * Is scrollable?
   */
  scrollable?: boolean
  /**
   * Make backdrop color transparent
   */
  transparentBackdrop?: boolean
}

const sizeMap = {
  xs: 440,
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
  xs: SizeLevel.Regular,
  sm: SizeLevel.Regular,
  md: SizeLevel.Regular,
  safeArea: SizeLevel.Large,
  fullScreen: SizeLevel.Large
}
const defaultSize = "md"

const Paper = styled(MuiBox)<StyledModalProps>(({ theme, size }) => ({
  position: "relative",
  width: sizeMap[size],
  maxWidth: "100%",
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

const CloseButton = styled(MuiBox)<StyledModalProps>(({ theme, size }) => ({
  position: "absolute",
  top: theme.spacing(sizeLevelMap[size] === SizeLevel.Large ? 2.5 : 1),
  right: theme.spacing(sizeLevelMap[size] === SizeLevel.Large ? 2.5 : 1),

  [theme.breakpoints.down("sm")]: {
    top: theme.spacing(1),
    right: theme.spacing(1)
  }
}))

const StyledModal = styled(MuiModal)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  [theme.breakpoints.down("sm")]: {
    alignItems: "flex-end",
    width: "100vw"
  }
}))

const Fade = styled(MuiFade)({
  // We disable the focus ring for mouse, touch and keyboard users.
  // At some point, it would be better to keep it for keyboard users.
  // :focus-ring CSS pseudo-class will help.
  outline: "none !important"
})

const Content = styled(MuiBox)<{ $scrollable: boolean }>(({ theme, $scrollable }) => ({
  overflow: $scrollable ? "auto" : "unset",
  maxHeight: `calc(100vh - ${theme.spacing(10)})`
}))

const BoxWrapper: React.FC<Partial<ModalProps>> = ({
  size = defaultSize,
  closeButton = false,
  scrollable = false,
  onClose,
  children
}) => {
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
      <Content $scrollable={scrollable}>{children}</Content>
    </Paper>
  )

  if (size !== "safeArea") return <ModalContent />

  return (
    <Container>
      <ModalContent />
    </Container>
  )
}

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  titleId,
  descriptionId,
  size = defaultSize,
  scrollable = false,
  transparentBackdrop,
  ...props
}) => {
  const handleClose: MuiModalProps["onClose"] = (event, reason) => {
    if (onClose) onClose(event, reason)
  }
  const backdrop = transparentBackdrop ? { sx: { background: "transparent" } } : undefined

  return (
    <StyledModal
      aria-labelledby={titleId ?? undefined}
      aria-describedby={descriptionId ?? undefined}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500, ...backdrop }}
    >
      <Fade in={open}>
        <div>
          <BoxWrapper size={size} scrollable={scrollable} onClose={handleClose} {...props} />
        </div>
      </Fade>
    </StyledModal>
  )
}

export default Modal
