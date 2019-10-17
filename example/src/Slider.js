"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Slider = _interopRequireDefault(require("@material-ui/core/Slider"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EnhancedSlider = (0, _core.withStyles)({
  root: {
    height: 4
  }
})(_Slider.default);
var _default = EnhancedSlider;
exports.default = _default;