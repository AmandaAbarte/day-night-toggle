"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Toggle;
var _react = _interopRequireDefault(require("react"));
require("./toggle.css");
var _outer = _interopRequireDefault(require("./outer"));
var _sky = _interopRequireDefault(require("./sky.svg"));
function Toggle(_ref) {
  var darkmode = _ref.darkmode,
    toggleFunction = _ref.toggleFunction,
    light = _ref.light,
    dark = _ref.dark;
  var color = darkmode ? dark : light;
  var position = darkmode ? "0" : "100%";
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "toggle-container",
    onClick: toggleFunction,
    style: {
      backgroundImage: "url(" + _sky.default + ")",
      backgroundPositionX: position
    }
  }, /*#__PURE__*/_react.default.createElement(_outer.default, {
    color: color
  }));
}