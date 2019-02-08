"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrap = exports.useRenderProps = void 0;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var sharedObject = null;

var useRenderProps = function useRenderProps(WrapperComponent, wrapperProps) {
  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      args = _useState2[0],
      setArgs = _useState2[1];

  var updateFlag = (0, _react.useRef)(true);
  sharedObject = {
    setArgs: setArgs,
    updateFlag: updateFlag,
    WrapperComponent: WrapperComponent,
    wrapperProps: wrapperProps
  };
  (0, _react.useEffect)(function () {
    updateFlag.current = !updateFlag.current;
  });
  return args;
};

exports.useRenderProps = useRenderProps;

var wrap = function wrap(FunctionComponent) {
  return function (props) {
    sharedObject = null;
    var element = FunctionComponent(props);

    var _ref = sharedObject || {},
        setArgs = _ref.setArgs,
        updateFlag = _ref.updateFlag,
        WrapperComponent = _ref.WrapperComponent,
        wrapperProps = _ref.wrapperProps;

    if (!WrapperComponent) return element;
    return (0, _react.createElement)(WrapperComponent, wrapperProps, function () {
      if (updateFlag.current) {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        setArgs(args);
      }

      return element;
    });
  };
};

exports.wrap = wrap;