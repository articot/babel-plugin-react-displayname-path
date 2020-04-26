# babel-plugin-react-displayname-path

Babel plugin to display React components names with file path prefix. Automatically detects and sets `displayName` property for React components.
This is useful for having meaningful component names show up in production builds of React apps.

The plugin adds support for the following components definitions:

- Function Components that return JSX.
- Class Components.

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
