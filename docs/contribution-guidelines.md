# Contribution guidelines

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## Development

We recommend `yarn` as package manger for this project.

```bash
$ yarn
$ yarn storybook
```

But if you prefer using `npm`, following commands work as well.

```bash
$ npm install
$ npm run storybook
```

## Report bugs using Github's [issues](/)

Report a bug by [opening a new issue](); it's that easy!

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can.
- What you expected would happen.
- What actually happens.
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work).

## Creating Pull Requests (PR)

We Use [Github Flow](https://guides.github.com/introduction/flow/index.html), so all code changes happen through PRs. We actively welcome your pull requests:

1. Fork the repo and create your branch from `main`.
2. Follow our coding style.
3. Make sure your code lints.
4. Issue that pull request and add a reviewer :)

## Code style patterns and rules

- For styled-components, always return Object type instead of interpolation.
- For major exporting components, always use `React.FC` to declare props types.
- Use prefix `Styled` for styled-components.
- Use prefix `Mui` for imported components from `Material-ui`.
- Declare components as `const`, export using `export default` at the end.
