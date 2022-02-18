import React from "react"
import { styled, Theme } from "@mui/material/styles"
import Slider, { SliderProps as MuiSliderProps } from "@mui/material/Slider"

import typography from "../theme/typography"

export interface RangeSliderProps extends Omit<MuiSliderProps, "disabled"> {
  disabled?: boolean
}

interface StyledProps extends RangeSliderProps {
  theme: Theme
}

const StyledSlider = styled(Slider)<RangeSliderProps>(({ theme, color }: StyledProps) => ({
  height: 4,
  marginBottom: theme.spacing(1),

  "*:after": {
    display: "none !important"
  },

  "&.MuiSlider-colorSecondary": {
    color: theme.palette.primary.main,

    "& $thumb": {
      backgroundColor: theme.palette.gray.white
    }
  },
  "&.MuiSlider-colorPrimary": {
    color: theme.palette.gray.white,
    "& .MuiSlider-rail": {
      backgroundColor: theme.palette.gray[500]
    },
    "& .MuiSlider-track": {
      backgroundColor: theme.palette.primary.main
    }
  },
  "&.Mui-disabled": {
    color: theme.palette.gray[500],
    "& $thumb": {
      backgroundColor: theme.palette.gray[500]
    }
  },
  "&.MuiSlider-root .MuiSlider-markLabel": {
    ...typography.supporting.main,
    textTransform: "uppercase",
    color: theme.palette.gray.a700,
    transform: "none",
    "&[data-index='1']": {
      transform: "translate(-100%, 0)"
    }
  },
  "& .MuiSlider-thumb": {
    height: 20,
    width: 20,
    border: `1px solid ${theme.palette.gray[500]}`,
    cursor: "ew-resize",
    boxShadow: "none !important",
    "&:before": {
      display: "none"
    },
    "&.Mui-disabled": {
      height: 20,
      width: 20,
      marginLeft: 0
    },
    "& .icon": {
      color: color === "primary" ? theme.palette.primary.main : theme.palette.text.primary
    }
  },
  "& .MuiSlider-track": {
    height: 2,
    borderRadius: 2,
    opacity: 1,
    border: 0
  },
  "& .MuiSlider-rail": {
    height: 2,
    borderRadius: 2,
    opacity: 1
  },
  [theme.breakpoints.down("sm")]: {
    "&.MuiSlider-root .MuiSlider-markLabel": {
      fontSize: "9px",
      lineHeight: "14px"
    }
  }
}))

const RangeSlider: React.FC<RangeSliderProps> = ({ disabled, color = "primary", defaultValue, ...props }) => {
  return <StyledSlider color={color} defaultValue={defaultValue} disabled={disabled} {...props} />
}

export default RangeSlider
