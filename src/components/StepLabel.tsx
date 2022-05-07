import { styled } from "@mui/material/styles"
import MuiStepLabel, { StepLabelProps as MuiStepLabelProps } from "@mui/material/StepLabel"
import { StepIconProps } from "@mui/material/StepIcon"

export interface StepLabelProps extends MuiStepLabelProps {
  loading?: boolean
}

const StepLabelBox = styled(MuiStepLabel)(({ theme }) => ({
  position: "relative",

  "&::after": {
    content: "''",
    border: 0,
    borderLeftWidth: 2,
    borderStyle: "solid",
    borderColor: theme.palette.green.main,
    position: "absolute",
    top: theme.spacing(2),
    bottom: theme.spacing(-2),
    marginLeft: "-1px",
    left: 12
  },
  ".MuiStepLabel-iconContainer": {
    paddingRight: theme.spacing(3)
  },
  [theme.breakpoints.down("sm")]: {
    "&::after": {
      borderLeftWidth: 1,
      top: theme.spacing(1),
      bottom: theme.spacing(-1),
      left: 8
    },
    ".MuiStepLabel-iconContainer": {
      paddingRight: 18
    }
  }
}))

const StepIcon = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean }
}>(({ theme, ownerState }) => ({
  zIndex: 1,
  width: 24,
  height: 24,
  borderRadius: "100%",
  boxShadow: `0 0 0 2px ${theme.palette.gray.white}`,
  backgroundColor: theme.palette.green.main,

  ...(ownerState.active && {}),
  ...(ownerState.completed && {}),

  [theme.breakpoints.down("sm")]: {
    width: 16,
    height: 16
  }
}))

const StepIconBox = (props: StepIconProps) => {
  const { active, completed, className } = props

  return <StepIcon ownerState={{ completed, active }} className={className} />
}

const StepLabel: React.FC<StepLabelProps> = ({ children, ...restProps }) => {
  return (
    <StepLabelBox StepIconComponent={StepIconBox} {...restProps}>
      {children}
    </StepLabelBox>
  )
}

export default StepLabel
