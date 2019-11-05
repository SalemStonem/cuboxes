webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _custom_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../custom.scss */ "./custom.scss");
/* harmony import */ var _custom_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_custom_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Riku\\Desktop\\coboxes\\components\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var PostLink = function PostLink(dlinks) {
  return __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/p/[id]",
    as: "/p/".concat(dlinks.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, dlinks.id)));
};

var Header = function Header(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var toggle = function toggle() {
    return setIsOpen(!isOpen);
  };

  return __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    className: "align-items-center px-0",
    expand: "lg",
    id: "navbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarBrand"], {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("img", {
    src: "static/logo.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarToggler"], {
    onClick: toggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
    isOpen: isOpen,
    navbar: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    className: "ml-auto align-items-center",
    navbar: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/caracteristicas",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("a", {
    className: "mx-3 text-dark align-middle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Caracteristicas")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/precios",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("a", {
    className: "mx-3 text-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Precios")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/soporte",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("a", {
    className: "mx-3 text-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Soporte")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/cuboxer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("a", {
    className: "ml-3 text-white bg-danger px-3 py-2 rounded-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Quiero ser Cuboxer"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.0aa6c6bdc0d1018f17f8.hot-update.js.map