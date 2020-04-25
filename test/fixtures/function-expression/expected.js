// Exported stateless component
export function Component1a(value) {
  return /*#__PURE__*/React.createElement("div", null, value);
}
Component1a.displayName = "Component1a (test/fixtures/function-expression/input.js)";

// Stateless component
function Component1b(value) {
  return /*#__PURE__*/React.createElement("div", null, value);
}

Component1b.displayName = "Component1b (test/fixtures/function-expression/input.js)";

// Stateless component used in a variable declaration
var Component1c = function (value) {
  return /*#__PURE__*/React.createElement("div", null, value);
};

Component1c.displayName = "Component1c (test/fixtures/function-expression/input.js)";
// Exported named stateless component used in variable declaration
export var Component1d = function (value) {
  return /*#__PURE__*/React.createElement("div", null, value);
};
Component1d.displayName = "Component1d (test/fixtures/function-expression/input.js)";
// Stateless component used in an assignment
var Component1e;

Component1e = function (value) {
  return /*#__PURE__*/React.createElement("div", null, value);
};

Component1e.displayName = "Component1e (test/fixtures/function-expression/input.js)";
// Exported default stateless *named* component used in variable declaration
export default function Component1f(value) {
  return /*#__PURE__*/React.createElement("div", null, value);
}
Component1f.displayName = "Component1f (test/fixtures/function-expression/input.js)";