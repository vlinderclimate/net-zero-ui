<h1 align="center">Net Zero UI kit</h1>

<div align="center">

Scaffold [React](https://reactjs.org/) apps with beautiful net-zero-ui theme.

</div>

---

## Installation and usage

To install and save in your `package.json` dependencies, run:

```bash
# yarn
$ yarn add @vlinderclimate/net-zero-ui

# npm
$ npm i @vlinderclimate/net-zero-ui
```

To use the theme, add `ThemeProvider` at the root of your React application.

```js
// YourAppRootFile.js
// ...
import { ThemeProvider } from "@vlinderclimate/net-zero-ui"

const Root = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  )
}
```

More detailed instructions can be found at [Getting started with `@vlinderclimate/net-zero-ui`](/docs/getting-started.md).

## Contributing

Any contribution is welcome! Please read through our [Contribution guidelines](/docs/contribution-guidelines.md) for opening issues, PRs, and development notes.

## License

This project is licensed under the MIT License.
