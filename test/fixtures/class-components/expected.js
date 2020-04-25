function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { Component } from 'react';
export class Component3a extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null);
  }

}
Component3a.displayName = "Component3a (test/fixtures/class-components/input.js)";
export default class Component3b extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null);
  }

}
Component3b.displayName = "Component3b (test/fixtures/class-components/input.js)";
export class Component3c extends Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null);
  }

}
Component3c.displayName = "Component3c (test/fixtures/class-components/input.js)";

class Component3d extends Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null);
  }

}

_defineProperty(Component3d, "get", () => {
  return /*#__PURE__*/React.createElement("div", null);
});

Component3d.displayName = "Component3d (test/fixtures/class-components/input.js)";