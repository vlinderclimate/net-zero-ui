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
  marginBottom: 0,

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
    color: theme.palette.gray.a700,
    transform: "translate(-50%, -50%)",

    "&[style='left: 0%;']": {
      transform: "translate(-2px, -50%)"
    },
    "&[style='left: 100%;']": {
      transform: "translate(-100%, -50%)",
      marginLeft: 1
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
  "&.MuiSlider-sizeMedium": {
    height: 32,
    padding: 0,
    marginTop: theme.spacing(5),

    "&:after": {
      content: "''",
      position: "absolute",
      backgroundColor: "#000",
      borderRadius: 0,
      height: "100%",
      width: 1,
      top: "0",
      left: "50%",
      zIndex: 1,
      transform: "translate(-2px, 0)",
      mixBlendMode: "overlay"
    },
    ".MuiSlider-rail, .MuiSlider-track": {
      height: 32,
      borderRadius: 0
    },
    ".MuiSlider-rail": {
      backgroundColor: theme.palette.gray[400]
    },
    ".MuiSlider-mark": {
      borderRadius: 0,
      height: 16,
      width: 1,
      backgroundColor: theme.palette.gray.a500,
      top: "-50%",
      marginTop: 2
    },
    "& .MuiSlider-thumb": {
      height: 16,
      width: 16,
      border: `3px solid ${theme.palette.primary.main}`,
      boxShadow: "none !important",
      top: "0",
      marginTop: -12,
      "&:after": {
        content: "''",
        width: 3,
        height: 39,
        backgroundColor: theme.palette.primary.main,
        position: "absolute",
        top: "100%",
        left: "50%",
        display: "block!important",
        borderRadius: 0,
        transform: "translate(-50%,0)"
      },
      "&.Mui-disabled": {
        height: 16,
        width: 16
      }
    },
    ".MuiSlider-markLabel": {
      top: "-100%",
      marginTop: -2,
      color: theme.palette.gray[600],
      ...typography.caption.main
    }
  },
  [theme.breakpoints.down("sm")]: {
    "&.MuiSlider-root .MuiSlider-markLabel": {
      fontSize: "9px",
      lineHeight: "14px"
    }
  },
  "@media (pointer: coarse)": {
    "&.MuiSlider-root": {
      padding: "13px 0"
    }
  }
}))

const RangeSlider: React.FC<RangeSliderProps> = ({ disabled, color = "primary", size, defaultValue, ...props }) => {
  return <StyledSlider size={size} color={color} defaultValue={defaultValue} disabled={disabled} {...props} />
}

export default RangeSlider
