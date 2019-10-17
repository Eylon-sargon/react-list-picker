"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormGroup = _interopRequireDefault(require("@material-ui/core/FormGroup"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _materialUiChipInput = _interopRequireDefault(require("material-ui-chip-input"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _reactFinalFormArrays = require("react-final-form-arrays");

var _Done = _interopRequireDefault(require("@material-ui/icons/Done"));

var _Chip = _interopRequireDefault(require("@material-ui/core/Chip"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ListPickerComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(ListPickerComponent, _Component);

  function ListPickerComponent(props) {
    var _this;

    _classCallCheck(this, ListPickerComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ListPickerComponent).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setPopup", function (isOpen) {
      console.log(_this.props.fields.value, " props");
      console.log(_this.state.selected, " state");

      if (!_this.state.isOpen && isOpen) {
        _this.setState({
          selected: _this.props.fields.value || []
        });
      }

      _this.setState({
        isOpen: isOpen
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isSelected", function (key) {
      return _this.state.selected.filter(function (data) {
        return data === key;
      }).length !== 0;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleCheckboxChange", function (key) {
      return function (event) {
        if (_this.props.isMulty) {
          _this.setState({
            selected: event.target.checked ? [].concat(_toConsumableArray(_this.state.selected), [key]) : _this.state.selected.filter(function (data) {
              return data !== key;
            })
          });
        } else {
          _this.setState({
            selected: _this.isSelected(key) ? [] : [key]
          });
        }
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChipDelete", function (chip) {
      return _this.setState({
        selected: _this.state.selected.filter(function (data) {
          return data !== chip;
        })
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit", function () {
      if (_this.props.fields.value) {
        for (var index = 0; index < _this.props.fields.value.length; index++) {
          _this.props.fields.remove(0);
        }
      }

      _this.state.selected.forEach(function (key) {
        _this.props.fields.push(key);
      });

      _this.setState({
        isOpen: false
      }); //  this.state.selected.foreach(key => console.log(key));

    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleReset", function () {
      if (_this.props.fields.value) {
        for (var i = 0; i < _this.props.fields.value.length; i++) {
          _this.props.fields.remove(0);
        }
      }

      _this.setState({
        selected: [],
        isOpen: true
      });
    });

    _this.state = {
      selected: [],
      isOpen: false,
      currentPage: 0
    };
    return _this;
  }
  /**
   * Change popup state (open or close)
   * @param isOpen : boolean
   */


  _createClass(ListPickerComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          classes = _this$props.classes,
          data = _this$props.data,
          _this$props$title = _this$props.title,
          title = _this$props$title === void 0 ? "Select fields" : _this$props$title,
          _this$props$buttonTex = _this$props.buttonText,
          buttonText = _this$props$buttonTex === void 0 ? "Select" : _this$props$buttonTex;
      var _this$props$pageBreak = this.props.pageBreak,
          pageBreak = _this$props$pageBreak === void 0 ? 0 : _this$props$pageBreak;

      if (data.length >= 50) {
        pageBreak = 10;
      }

      var totalPages = pageBreak ? Math.ceil(data.length / pageBreak) : 1;
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
        style: {
          display: "flex",
          justifyContent: "start"
        }
      }, _react.default.createElement(_Button.default, {
        variant: "outlined",
        color: "primary",
        onClick: function onClick() {
          return _this2.setPopup(true);
        }
      }, buttonText), this.props.fields.value && this.props.fields.value.map(function (val) {
        return _react.default.createElement(_Chip.default, {
          icon: _react.default.createElement(_Done.default, null),
          label: val,
          variant: "outlined"
        });
      })), _react.default.createElement(_Dialog.default, {
        open: this.state.isOpen,
        "aria-labelledby": "form-dialog-title",
        fullWidth: "md"
      }, _react.default.createElement(_DialogTitle.default, {
        id: "form-dialog-title"
      }, title), _react.default.createElement(_DialogContent.default, null, _react.default.createElement(_FormGroup.default, {
        className: classes.itemsWrapper
      }, _react.default.createElement(_FormControl.default, {
        component: "fieldset",
        className: classes.formControl
      }, data.filter(function (x, i) {
        if (!pageBreak) {
          return true;
        }

        if (i >= pageBreak * _this2.state.currentPage && i <= pageBreak * _this2.state.currentPage + pageBreak - 1) {
          return true;
        }

        return false;
      }).map(function (key) {
        return _react.default.createElement(_FormControlLabel.default, {
          control: _react.default.createElement(_Checkbox.default, {
            color: "primary",
            value: key,
            onChange: _this2.handleCheckboxChange(key),
            checked: _this2.isSelected(key)
          }),
          label: key
        });
      }))), _react.default.createElement(_FormGroup.default, null, _react.default.createElement(_materialUiChipInput.default, {
        value: this.state.selected,
        onDelete: function onDelete(chip) {
          return _this2.handleChipDelete(chip);
        },
        fullWidth: true
      }))), _react.default.createElement(_DialogActions.default, null, _react.default.createElement(_Button.default, {
        disabled: !pageBreak || this.state.currentPage === 0,
        onClick: function onClick() {
          return _this2.setState({
            currentPage: _this2.state.currentPage - 1
          });
        }
      }, "<"), _react.default.createElement(_Typography.default, null, this.state.currentPage + 1, " of ", totalPages), _react.default.createElement(_Button.default, {
        disabled: !pageBreak || this.state.currentPage >= totalPages - 1,
        onClick: function onClick() {
          return _this2.setState({
            currentPage: _this2.state.currentPage + 1
          });
        }
      }, ">")), _react.default.createElement(_DialogActions.default, null, _react.default.createElement(_Button.default, {
        onClick: function onClick() {
          return _this2.setState({
            isOpen: false
          });
        },
        color: "default"
      }, "Close"), _react.default.createElement(_Button.default, {
        onClick: this.handleReset,
        color: "default"
      }, "Clear"), _react.default.createElement(_Button.default, {
        onClick: this.handleSubmit,
        variant: "contained",
        color: "primary"
      }, "Save"))));
    }
  }]);

  return ListPickerComponent;
}(_react.Component);

ListPickerComponent.propTypes = {
  data: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
  onSubmit: _propTypes.default.func,
  isMulty: _propTypes.default.bool,
  fields: _propTypes.default.any,
  title: _propTypes.default.string,
  buttonText: _propTypes.default.string,
  pageBreak: _propTypes.default.number
};

function ListPicker(_ref) {
  var restProps = _extends({}, _ref);

  return _react.default.createElement(_reactFinalFormArrays.FieldArray, _extends({
    component: (0, _core.withStyles)(_styles.default)(ListPickerComponent)
  }, restProps));
}

ListPicker.propTypes = {
  name: _propTypes.default.string.isRequired,
  data: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
  isMulty: _propTypes.default.bool,
  title: _propTypes.default.string,
  buttonText: _propTypes.default.string,
  pageBreak: _propTypes.default.number
};
var _default = ListPicker;
exports.default = _default;