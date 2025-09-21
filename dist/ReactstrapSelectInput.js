"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactstrap = require("reactstrap");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["field", "form", "disabled"];
/*let handleBlur = event => {
    if (this.ignoreNextBlur === true) {
        // The parent components are relying on the bubbling of the event.
        event.stopPropagation();
        this.ignoreNextBlur = false;
        event.target.name = this.props.name;
        return;
    }
};*/
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
var ReactstrapSelectInput = function ReactstrapSelectInput(_ref) {
  var field = _ref.field,
    _ref$form = _ref.form,
    isSubmitting = _ref$form.isSubmitting,
    touched = _ref$form.touched,
    errors = _ref$form.errors,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    props = _objectWithoutProperties(_ref, _excluded);
  var error = errors[field.name];
  var touch = touched[field.name];
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactstrap.FormGroup, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactstrap.Label, {
      "for": props.inputprops.id,
      className: "label-color",
      children: props.label
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactstrap.Input, _objectSpread(_objectSpread(_objectSpread({
      id: props.inputprops.id
    }, field), props), {}, {
      type: "select",
      invalid: Boolean(touched[field.name] && errors[field.name]),
      placeholder: "Test",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
        value: "",
        children: props.inputprops.defaultOption
      }), props.inputprops.options.map(function (option, index) {
        if (option.name) return /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
          value: option.id,
          children: option.name
        }, index);
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
          value: option,
          children: option
        }, index);
      })]
    })), touch && error && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactstrap.FormFeedback, {
      children: error
    })]
  });
};
var _default = exports["default"] = ReactstrapSelectInput;