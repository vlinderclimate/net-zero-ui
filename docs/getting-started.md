# Getting started

This library is vlinder's open source design system, the library is at the core of our UI products.
Each component works in isolation. They are self-supporting, and will only inject the styles they need to display.

> 💡 A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications.

# Quick start

Here's a quick example to get you started, it's literally all you need:

## Installation

To install and save in your `package.json` dependencies, run:

```bash
# npm
$ npm i @vlinder/ui

# yarn
$ yarn add @vlinder/ui
```

## Usage

Add `ThemeProvider` at the root of your React application.
This is a component that provides a theme to all React components underneath itself via the context API.

> ⚠️ `<ThemeProvider />` should be _ALWAYS_ at the root of your React rendering tree.

```js
// YourAppRootFile.js
// ...
import { ThemeProvider } from "@vlinder/ui";

const Root = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};
```

Yes, this really is all you need to get started.

## Components

All the components that the library provides are documented using [Storybook](https://storybook.js.org/).

## Usage with Typescript

The library is written in TypeScript with complete type definitions that are available in the same package as the components.

The naming convention is `ComponentName` suffixed by `Props`. For example the type name of `Typography` will be `TypographyProps`.

```ts
// CustomTypography.tsx
// ...
import React from "react";
import { Typography, TypographyProps } from "@vlinder/ui";

const CustomTypography: React.FC<TypographyProps> = (customTypographyProps: TypographyProps) => {
  return <Typography {...customTypographyprops} />;
};
```

## Component customization

The easiest way to add style overrides for a one-off situation is to use the `sx` prop available on all MUI components.

The second option is to use styled-components to override nested styles from your component

> More about customization: https://mui.com/customization/how-to-customize/ and https://mui.com/system/the-sx-prop/

```js
// Component.js
// ...
import styled from "styled-components"
import { Typography, Card } from "@vlinder/ui"

export const OverrideWithStyledComponents = styled(Typography)`
  color: pink;
`

export const OverrideWithSxProp = () => (
  <Card sx={{ color: "pink" }}></Card>
))
```

> ⚠️ Use this with caution and only if absolutely necessary.
