import React from "react"
import { styled } from "@mui/material/styles"

import Button from "../Button"
import Icon from "../Icon"

export interface CardSliderProps {
  children?: JSX.Element | JSX.Element[] | string | number
}

export const SliderBox = styled("div")(({ theme }) => ({
  ".slick-slider": {
    position: "static"
  },
  ".slick-list": {
    overflow: "visible",
    marginRight: theme.spacing(-5)
  },
  ".slick-slide": {
    paddingRight: theme.spacing(5)
  },
  ".project-card": {
    maxWidth: "none"
  },
  [theme.breakpoints.down("sm")]: {
    paddingRight: theme.spacing(1),
    marginBottom: theme.spacing(2),
    ".slick-slider": {
      position: "relative"
    },
    ".slick-list": {
      marginRight: theme.spacing(-1.75)
    },
    ".slick-slide": {
      paddingRight: theme.spacing(1.75)
    }
  }
}))

export const SlickNextArrow = styled(Button)(({ theme }) => ({
  width: "auto !important",
  height: "auto !important",
  position: "absolute",
  zIndex: 11,
  opacity: "1",
  right: `${theme.spacing(2)} !important`,
  padding: `${theme.spacing(1)} !important`,
  "&:before": {
    display: "none"
  },
  "&:hover, &:after, &:focus": {
    transform: "translate(0, -50%) scale(1.05) !important",
    backgroundColor: `${theme.palette.gray.white} !important`,
    color: `${theme.palette.text.primary} !important`
  },
  "&.MuiButton-root.slick-disabled": {
    opacity: "0 !important"
  },
  [theme.breakpoints.down("sm")]: {
    top: "100% !important",
    margin: "0 !important",
    transform: "translate(-50%, -55%) !important",
    left: "58% !important",
    right: "auto !important",

    "&:hover, &:after, &:focus": {
      transform: "translate(-50%, -55%) !important"
    },
    "&.MuiButton-root": {
      backgroundColor: "#F7F7F7 !important",
      boxShadow: "none !important"
    },
    "&.MuiButton-root.slick-disabled": {
      opacity: "0.8 !important"
    }
  }
}))

export const SlickPrevArrow = styled(SlickNextArrow)(({ theme }) => ({
  left: `${theme.spacing(2)} !important`,
  right: "auto !important",

  [theme.breakpoints.down("sm")]: {
    right: "46% !important",
    left: "auto !important"
  }
}))

export const SampleNextArrow = (props: any) => {
  const { className, style, onClick } = props
  return (
    <SlickNextArrow
      variant="contained"
      color="inverse"
      style={{ ...style }}
      onClick={onClick}
      className={className}
      size="sm"
      startIcon={<Icon iconKey="chevronRight" color="primary" size="sm" />}
    />
  )
}

export const SamplePrevArrow = (props: any) => {
  const { className, style, onClick } = props
  return (
    <SlickPrevArrow
      variant="contained"
      color="inverse"
      style={{ ...style }}
      onClick={onClick}
      className={className}
      size="sm"
      startIcon={<Icon iconKey="chevronLeft" color="primary" size="sm" />}
    />
  )
}

export const defaultSettings = {
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  draggable: false,
  arrows: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 2080,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
}

const CardSliderComponent: React.FC<CardSliderProps> = ({ children, ...props }) => {
  return <SliderBox {...props}>{children}</SliderBox>
}

export default CardSliderComponent
