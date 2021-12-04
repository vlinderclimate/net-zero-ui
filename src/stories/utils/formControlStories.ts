import { adornmentStoryControls } from "./adornmentStories"

export const validatorOptions = [
  {
    thumbnailUrl: "https://s3.amazonaws.com/keybase_processed_uploads/a084e1a96ecc3f24bd57dfec517a9205_360_360.jpg",
    thumbnailAlt: "Bi23 Labs",
    title: "Bi23 Labs",
    subtitle: "cosmosvaloper1hctafaqveg7dxad8aedf32aq2j877rrec2f5au"
  },
  {
    thumbnailUrl: "https://s3.amazonaws.com/keybase_processed_uploads/0896b54e305b3817c20ee844066ae905_360_360.jpg",
    thumbnailAlt: "cosmosave",
    title: "cosmosave",
    subtitle: "cosmosvaloper18fuhq6r933854432m0692m05ddqdvzm2gysypr"
  },
  {
    thumbnailUrl: "https://s3.amazonaws.com/keybase_processed_uploads/e7aca2c60e1b658db8cc8f175ce9aa05_360_360.jpg",
    thumbnailAlt: "Swiss Staking",
    title: "Swiss Staking",
    subtitle: "cosmosvaloper1y0us8xvsvfvqkk9c6nt5cfyu5au5tww2ztve7q"
  }
]

export const inputArgTypes = {
  size: {
    name: "size",
    defaultValue: "md",
    description: "The size of the component.",
    options: ["xs", "sm", "md", "lg"],
    control: { type: "select" },
    table: { category: "Input Props" }
  },
  color: {
    name: "color",
    defaultValue: "secondary",
    options: ["primary", "secondary"],
    control: {
      type: "select"
    },
    table: { category: "Input Props" }
  },
  disabled: {
    name: "disabled",
    defaultValue: false,
    control: {
      type: "boolean"
    },
    table: { category: "Input Props" }
  },
  error: {
    name: "error",
    defaultValue: false,
    control: {
      type: "boolean"
    },
    table: { category: "Input Props" }
  },
  overrideErrorAdornment: {
    name: "overrideErrorAdornment",
    defaultValue: false,
    control: {
      type: "boolean"
    },
    table: { category: "Input Props" }
  },
  actionButton: {
    name: "actionButton",
    defaultValue: false,
    control: {
      type: "boolean"
    },
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: false }
    }
  },
  fullWidth: {
    name: "fullWidth",
    defaultValue: false,
    control: {
      type: "boolean"
    },
    table: { category: "Input Props" }
  },
  placeholder: {
    name: "placeholder",
    defaultValue: "Text placeholder",
    control: {
      type: "text"
    },
    table: { category: "Input Props" }
  },
  ref: { table: { disable: true } },
  min: { table: { disable: true } },
  max: { table: { disable: true } },
  step: { table: { disable: true } },
  focused: { table: { disable: true } },
  required: { table: { disable: true } },
  actionButtonProps: { table: { disable: true } },
  ...adornmentStoryControls
}

export const textFieldArgTypes = {
  id: {
    name: "id",
    defaultValue: "default-textfield-story",
    control: {
      type: "text"
    },
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "default-textfield-story" }
    }
  },
  variant: {
    name: "variant",
    defaultValue: "filled",
    options: ["filled", "outlined", "standard"],
    control: {
      type: "select"
    }
  },
  label: {
    name: "label",
    defaultValue: "Label",
    control: {
      type: "text"
    },
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "text" }
    }
  },
  helperText: {
    name: "helperText",
    defaultValue: "Helper text",
    control: {
      type: "text"
    },
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "text" }
    }
  },
  ...inputArgTypes,
  inputProps: { table: { disable: true } },
  children: { table: { disable: true } },
  hiddenLabel: { table: { disable: true } },
  margin: { table: { disable: true } },
  ref: { table: { disable: true } },
  type: { table: { disable: true } },
  stepperProps: { table: { disable: true } },
  overrideErrorAdornment: { table: { disable: true } },
  InputProps: { table: { disable: true } }
}

export const numericFieldArgTypes = {
  ...textFieldArgTypes,
  min: {
    name: "min",
    defaultValue: 0.1,
    control: {
      type: "number"
    },
    table: {
      type: { summary: "number" },
      defaultValue: { summary: 0.1 }
    }
  },
  max: {
    name: "max",
    defaultValue: 32,
    control: {
      type: "number"
    },
    table: {
      type: { summary: "number" },
      defaultValue: { summary: 32 }
    }
  },
  step: {
    name: "step",
    defaultValue: 0.1,
    control: {
      type: "number"
    },
    table: {
      type: { summary: "number" },
      defaultValue: { summary: 0.1 }
    }
  },
  endAdornmentKey: { table: { disable: true } },
  endAdornmentSize: { table: { disable: true } },
  endAdornmentColor: { table: { disable: true } },
  endAdornmentRotation: { table: { disable: true } }
}
