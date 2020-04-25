// ---------------------
// Should pass through unaltered
// ---------------------
var f1 = function ({
  value
}) {
  return "somestring";
};

function f2({
  value
}) {
  return "somestring";
}

class f3 {
  method1() {
    return "whatever";
  }

}

var f4 = /*#__PURE__*/React.createElement("div", null, (() => /*#__PURE__*/React.createElement("span", null))()); // Known component which doesn't sit directly on the `Program` node get left alone

{
  var Component5c = function () {
    function Component5c() {}

    return Component5c;
  }();
} // ---------------------
// Not supported
// ---------------------
// High-order things will be hard to catch

var jsxChunk = /*#__PURE__*/React.createElement("div", null, value);

function UnsupportedComponent1({
  value
}) {
  return function () {
    return jsxChunk;
  };
}

var a = {
  smoke: function () {},
  Component1d: function ({
    value
  }) {
    return /*#__PURE__*/React.createElement("div", null, value);
  }
};

var external = function () {
  var internal = function () {
    return /*#__PURE__*/React.createElement("div", null);
  };

  return internal;
};