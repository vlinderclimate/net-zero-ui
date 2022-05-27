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

const railSize = {
  desktop: {
    small: 3,
    medium: 32
  },
  mobile: {
    small: 3,
    medium: 24
  }
}

const StyledSlider = styled(Slider)<RangeSliderProps>(({ theme, color }: StyledProps) => ({
  height: railSize.desktop.small,
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
      backgroundColor: theme.palette.gray[400]
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
    color: theme.palette.alpha[700],
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
    height: 16,
    width: 16,
    border: `3px solid ${theme.palette.primary.main}`,
    boxShadow: `0 0 0 2px ${theme.palette.gray.white}`,
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
    height: railSize.desktop.small,
    borderRadius: 0,
    opacity: 1,
    border: 0
  },
  "& .MuiSlider-rail": {
    height: railSize.desktop.small,
    borderRadius: 2,
    opacity: 1,

    ".MuiFormControl-root &": {
      backgroundColor: "transparent !important"
    }
  },
  ".MuiSlider-valueLabel": {
    backgroundColor: theme.palette.gray.white,
    color: theme.palette.text.primary,
    ...typography.caption.main,
    padding: "0 2px",
    top: -5,
    "&:before": {
      display: "none"
    }
  },
  "&.MuiSlider-sizeMedium": {
    height: railSize.desktop.medium,
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
      height: railSize.desktop.medium,
      borderRadius: 0
    },
    ".MuiSlider-rail": {
      backgroundColor: theme.palette.gray[400]
    },
    ".MuiSlider-mark": {
      borderRadius: 0,
      height: 16,
      width: 1,
      backgroundColor: theme.palette.alpha[500],
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
        height: railSize.desktop.medium + 7,
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
    "&.MuiSlider-root .MuiSlider-markLabel, .MuiSlider-valueLabel": {
      fontSize: "12px",
      lineHeight: "14px"
    },
    ".MuiSlider-valueLabel": {
      display: "none"
    },
    ".MuiSlider-rail, .MuiSlider-track": {
      height: railSize.mobile.small
    },
    "&.MuiSlider-sizeMedium": {
      "&, .MuiSlider-rail, .MuiSlider-track": {
        height: railSize.mobile.medium
      },
      "& .MuiSlider-thumb": {
        "&:after": {
          height: railSize.mobile.medium + 7
        }
      },
      ".MuiSlider-mark": {
        height: 12
      }
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
