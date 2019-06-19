// Specifically configured to set name on Component5a and Component5b
function Component5a() {
  return "some string";
}

Component5a.displayName = "Component5a (test/fixtures/knownComponents/input.js)";

var Component5b = function () {
  return "some string";
};

Component5b.displayName = "Component5b (test/fixtures/knownComponents/input.js)";

// Known component's name used inside another function
var Component5c = function () {
  function Component5c() {}

  return Component5c;
}();

Component5c.displayName = "Component5c (test/fixtures/knownComponents/input.js)";