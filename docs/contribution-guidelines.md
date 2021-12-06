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

## Commit message format

We adopt [Angular Commit Message Conventions](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format) to format our commit messages. [commitlint](https://github.com/conventional-changelog/commitlint) and [husky](https://github.com/typicode/husky) scripts check all commits against the conventions before the messages are submitted.

### Commit message header

Following diagram is revised from [Angular Commit Message Conventions](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit-message-header).

```
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: Optional. `net-zero-ui` discourages contributors from adding scope.
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test
```

### Type

We follow the type variations from [Angular Commit Message Conventions](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#type).

> - **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
> - **ci**: Changes to our CI configuration files and scripts (examples: CircleCi, SauceLabs)
> - **docs**: Documentation only changes
> - **feat**: A new feature
> - **fix**: A bug fix
> - **perf**: A code change that improves performance
> - **refactor**: A code change that neither fixes a bug nor adds a feature
> - **test**: Adding missing tests or correcting existing tests

### Scope

Because usage of scope is not yet defined, we discourage from using scope in commit messages at this moment.

### Summary

We follow the summary rules from [Angular Commit Message Conventions](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#summary).

> - Use the imperative, present tense: "change" not "changed" nor "changes"
> - Don't capitalize the first letter
> - No dot (.) at the end
