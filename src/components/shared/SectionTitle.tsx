import React from "react"
import MuiBox from "@mui/material/Box"

import Typography from "../Typography"

export interface SectionTitleProps {
  children?: JSX.Element | JSX.Element[] | string | number
  title?: string
  description?: string
  subtitle?: string
  align?: any
}

const SectionTitleComponent: React.FC<SectionTitleProps> = ({
  children,
  title,
  description,
  subtitle,
  align,
  ...props
}) => {
  const marginLeft = align === "center" ? "auto" : align === "right" ? "auto" : 0
  const marginRight = align === "center" ? "auto" : align === "right" ? 0 : 0
  return (
    <MuiBox {...props}>
      {subtitle && (
        <Typography
          variant="heroParagraph"
          sx={{ fontWeight: "bold" }}
          marginBottom={{ xs: 1, md: 2 }}
          textAlign={align || "left"}
        >
          {subtitle}
        </Typography>
      )}
      <Typography
        variant="h2"
        marginBottom={{ xs: 2, sm: 4 }}
        textAlign={align || "left"}
        sx={{
          maxWidth: "300px",
          marginLeft: marginLeft,
          marginRight: marginRight
        }}
      >
        {title}
      </Typography>

      {description && (
        <Typography
          variant="caption"
          component="p"
          marginBottom={1}
          sx={{
            lineHeight: "30px",
            maxWidth: "438px",
            letterSpacing: "0.25px",
            marginLeft: marginLeft,
            marginRight: marginRight
          }}
          textAlign={align || "left"}
        >
          {description}
        </Typography>
      )}

      {children}
    </MuiBox>
  )
}

export default SectionTitleComponent
