import React from "react"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme, styled } from "@mui/material/styles"
import MuiSwipeableDrawer, { SwipeableDrawerProps as MuiSwipeableDrawerProps } from "@mui/material/SwipeableDrawer"
import MuiBox from "@mui/material/Box"
import Icon, { IconProps } from "./Icon"
import Button from "./Button"

export type DrawerSize = "xs" | "sm" | "md" | "safeArea" | "fullScreen"

interface StyledDrawerProps {
  size: DrawerSize
}

export interface DrawerProps extends MuiSwipeableDrawerProps {
  /**
   * Make backdrop color transparent
   */
  transparentBackdrop?: boolean
  /**
   * Width of the drawer box.
   */
  size?: DrawerSize
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
}

const sizeMap = {
  xs: 440,
  sm: 580,
  md: 720,
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
  md: SizeLevel.Large,
  safeArea: SizeLevel.Large,
  fullScreen: SizeLevel.Large
}
const defaultSize = "md"

const StyledSwipeableDrawer = styled(MuiSwipeableDrawer)<StyledDrawerProps>(({ theme, size }) => ({
  "& .MuiPaper-root": {
    backgroundColor: theme.palette.gray.white,
    width: sizeMap[size],
    maxWidth: "100%",
    padding: theme.spacing(
      sizeLevelMap[size] === SizeLevel.Large ? 5.25 : 2,
      sizeLevelMap[size] === SizeLevel.Large ? 10 : 4
    ),
    boxShadow: "none",

    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
      width: `calc(100vw - ${theme.spacing(4)})`
    },
    [theme?.breakpoints.down("md")]: {
      fontSize: theme.typography.fontSizeXs5
    }
  }
}))

const CloseButton = styled(MuiBox)<StyledDrawerProps>(({ theme, size }) => ({
  position: "absolute",
  top: theme.spacing(2.5),
  right: theme.spacing(2.5),

  [theme.breakpoints.down("sm")]: {
    top: theme.spacing(1),
    right: theme.spacing(1)
  }
}))

const Content = styled(MuiBox)<{ scrollable: boolean }>(({ theme, scrollable }) => ({
  overflow: scrollable ? "auto" : "unset",
  maxHeight: `calc(100vh - ${theme.spacing(10)})`
}))

const Drawer: React.FC<DrawerProps> = ({
  children,
  transparentBackdrop = false,
  size = defaultSize,
  scrollable = false,
  onClose,
  closeButton,
  ...props
}) => {
  const handleClose: DrawerProps["onClose"] = (event) => {
    if (onClose) onClose(event)
  }
  const backdrop = { sx: { background: transparentBackdrop ? "transparent" : "rgba(235, 235, 235, 0.56)" } }
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <StyledSwipeableDrawer
      onClose={handleClose}
      size={size}
      anchor="right"
      BackdropProps={{ timeout: 500, ...backdrop }}
      {...props}
    >
      {closeButton && (
        <CloseButton size={size}>
          <Button
            startIcon={
              <Icon
                iconKey={typeof closeButton !== "string" ? "close" : closeButton}
                size={sizeLevelMap[size] === SizeLevel.Large && !isMobile ? "md" : "md"}
              />
            }
            variant="outlined"
            color="secondary"
            size="md"
            onClick={(event) => {
              if (onClose) onClose(event)
            }}
          />
        </CloseButton>
      )}
      <Content scrollable={scrollable}>{children}</Content>
    </StyledSwipeableDrawer>
  )
}

export default Drawer
