# babel-plugin-react-displayname-path

Babel plugin for React to display name with file path prefix. Automatically detects and sets `displayName` for React components.
This is useful for having meaningful component names show up in production builds of React apps.

Babel already does this for `React.createClass` style components, this adds support for the two other kinds of component definitions:

- ES6-classes style components.
- Stateless components that return JSX.

## Install
 - `yarn add babel-plugin-react-displayname-path`
 - Add `react-displayname-path` to your `babel.config.js` file:

```js
const plugins = ["react-displayname-path"];
```

## Troubleshooting

If `displayName` isn't added, make sure the plugin placed _before_ other plugins in your plugins list.

## Motivation
[Component stack traces](https://reactjs.org/docs/error-boundaries.html#component-stack-traces) are useless in production build:
```
    in b
    in li
    in ul
    in v
    in div
    in div
    in i
    in div
    in Unknown
    in t…
```
