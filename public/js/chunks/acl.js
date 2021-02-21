(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["acl"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Confirm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Confirm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      show: false
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Message.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Message.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    show: {
      "default": false
    },
    message: {
      "default": null
    },
    icon: {
      "default": "fa-info-circle"
    },
    iconColor: {
      "default": "text-info"
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/settings/acl/Create.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/settings/acl/Create.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["circleBtn"],
  data: function data() {
    return {
      isModalShow: false,
      department: {
        name: "",
        description: "",
        status: 1
      },
      loading: false,
      selectedPermission: [],
      permissions: []
    };
  },
  methods: {
    resetForm: function resetForm() {
      var _this = this;

      Object.keys(this.department).map(function (k) {
        return _this.department[k] = "";
      });
    },
    saveDepartment: function saveDepartment() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this2.department.name) {
                  _context.next = 4;
                  break;
                }

                snackbar.error("Department name is required");
                _context.next = 14;
                break;

              case 4:
                if (_this2.department.status) {
                  _context.next = 8;
                  break;
                }

                snackbar.error("Department status is required");
                _context.next = 14;
                break;

              case 8:
                _this2.loading = true;
                _context.next = 11;
                return _this2.$store.dispatch("department/addDepartment", _this2.department);

              case 11:
                res = _context.sent;
                _this2.loading = false;

                if (res) {
                  _this2.resetForm();

                  _this2.isModalShow = false;
                }

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/settings/acl/Edit.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/settings/acl/Edit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["data"],
  data: function data() {
    return {
      isModalShow: false,
      department: {
        id: "",
        name: "",
        description: "",
        status: ""
      },
      loading: false
    };
  },
  created: function created() {
    var _this = this;

    Object.keys(this.department).map(function (k) {
      return _this.department[k] = _this.data[k];
    });
  },
  methods: {
    updateDepartment: function updateDepartment() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this2.department.name) {
                  _context.next = 4;
                  break;
                }

                snackbar.error("Department name is required");
                _context.next = 15;
                break;

              case 4:
                if (!(_this2.department.status === "")) {
                  _context.next = 8;
                  break;
                }

                snackbar.error("Department status is required");
                _context.next = 15;
                break;

              case 8:
                _this2.loading = true;
                _context.next = 11;
                return _this2.$store.dispatch("department/updateDepartment", _this2.department);

              case 11:
                res = _context.sent;
                _this2.loading = false;
                console.log(res);
                if (res) _this2.isModalShow = false;

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/settings/acl/Index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/settings/acl/Index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create */ "./resources/js/pages/settings/acl/Create.vue");
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Edit */ "./resources/js/pages/settings/acl/Edit.vue");
/* harmony import */ var _components_DataTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/DataTable */ "./resources/js/components/DataTable.vue");
/* harmony import */ var _components_Confirm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Confirm */ "./resources/js/components/Confirm.vue");
/* harmony import */ var _components_Message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Message */ "./resources/js/components/Message.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    CreateModal: _Create__WEBPACK_IMPORTED_MODULE_1__["default"],
    EditModal: _Edit__WEBPACK_IMPORTED_MODULE_2__["default"],
    DataTable: _components_DataTable__WEBPACK_IMPORTED_MODULE_3__["default"],
    DeleteConfirm: _components_Confirm__WEBPACK_IMPORTED_MODULE_4__["default"],
    Message: _components_Message__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      posts: [],
      headers: [{
        text: "SL",
        key: "sl"
      }, {
        text: "Role",
        key: "name",
        search: true
      }, {
        text: "Permissions",
        key: "permissions"
      }, {
        text: "Status",
        key: "status"
      }, {
        text: "Action",
        key: "action"
      }],
      roles: [{
        id: 1,
        name: "Doctor",
        permissions: [{
          id: 1,
          name: "Patient Entry"
        }, {
          id: 2,
          name: "Patient Edit"
        }, {
          id: 3,
          name: "Patient Delete"
        }]
      }],
      deleteId: null,
      messageShow: false,
      message: ""
    };
  },
  created: function created() {},
  methods: {
    showDeleteConfirm: function showDeleteConfirm(id) {
      this.deleteId = id;
      this.$refs.deleteConfirm.show = true;
    },
    deleteDepartment: function deleteDepartment() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.$refs.deleteConfirm.show = false;

                if (!(_this.deleteId == null)) {
                  _context.next = 5;
                  break;
                }

                _this.message = "Something went wrong!";
                _this.messageShow = true;
                return _context.abrupt("return");

              case 5:
                _context.next = 7;
                return _this.$store.dispatch("department/deleteDepartment", {
                  id: _this.deleteId
                });

              case 7:
                res = _context.sent;
                if (res) _this.deleteId = null;

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Confirm.vue?vue&type=template&id=27f69fb6&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Confirm.vue?vue&type=template&id=27f69fb6& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.show
      ? _c("div", { staticClass: "custom-modal" }, [
          _c("div", { staticClass: "custom-modal-body rounded col-md-4" }, [
            _c("div", { staticClass: "custom-modal-content py-5" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("h3", { staticClass: "text-center text-dark mt-2" }, [
                _vm._v("Are you sure?")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-center mt-4" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-sm btn-success px-3 mr-2",
                    on: {
                      click: function($event) {
                        return _vm.$emit("confirm")
                      }
                    }
                  },
                  [_vm._v("\n            Yes\n          ")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-sm btn-dark px-3",
                    on: {
                      click: function($event) {
                        _vm.show = false
                      }
                    }
                  },
                  [_vm._v("\n            Cancel\n          ")]
                )
              ])
            ])
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center text-danger" }, [
      _c("i", { staticClass: "fa fa-question-circle fa-3x" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Message.vue?vue&type=template&id=b91a6428&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Message.vue?vue&type=template&id=b91a6428& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.show
      ? _c("div", { staticClass: "custom-modal" }, [
          _c("div", { staticClass: "custom-modal-body rounded col-md-4" }, [
            _c("div", { staticClass: "custom-modal-content py-5" }, [
              _c(
                "div",
                { staticClass: "text-center" },
                [
                  _vm._t("icon", [
                    _c("i", {
                      staticClass: "fa fa-3x",
                      class: [_vm.icon, _vm.iconColor]
                    })
                  ])
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "h3",
                { staticClass: "text-center text-dark mt-3" },
                [_vm._t("content", [_vm._v(_vm._s(_vm.message))])],
                2
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "text-center mt-4" },
                [
                  _vm._t("buttons", [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-primary px-3",
                        on: {
                          click: function($event) {
                            return _vm.$emit("ok")
                          }
                        }
                      },
                      [_vm._v("\n              OK\n            ")]
                    )
                  ])
                ],
                2
              )
            ])
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/settings/acl/Create.vue?vue&type=template&id=08c68b54&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/settings/acl/Create.vue?vue&type=template&id=08c68b54&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "button",
        {
          staticClass: "btn btn-primary btn-sm text-center",
          class: { "btn-icon": _vm.circleBtn },
          on: {
            click: function($event) {
              _vm.isModalShow = true
            }
          }
        },
        [
          _c("i", { staticClass: "fa fa-plus" }),
          _vm._v(" "),
          !_vm.circleBtn ? [_vm._v("Add New")] : _vm._e()
        ],
        2
      ),
      _vm._v(" "),
      _c("transition", { attrs: { name: "scale" } }, [
        _vm.isModalShow
          ? _c("div", { staticClass: "custom-modal" }, [
              _c("div", { staticClass: "custom-modal-body col-md-10" }, [
                _c("div", { staticClass: "custom-modal-header" }, [
                  _c("div", { staticClass: "clearfix" }, [
                    _c("div", { staticClass: "custom-modal-title" }, [
                      _vm._v("Add New Role")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "custom-close",
                        on: {
                          click: function($event) {
                            _vm.isModalShow = false
                          }
                        }
                      },
                      [_c("i", { staticClass: "fa fa-times" })]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "custom-modal-content" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "name" } }, [
                      _vm._v("Role Name")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.department.name,
                          expression: "department.name"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", id: "name" },
                      domProps: { value: _vm.department.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.department, "name", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v("Permissions")]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "custom-control custom-checkbox ml-2 mb-2"
                      },
                      [
                        _c("input", {
                          staticClass: "custom-control-input",
                          attrs: { type: "checkbox", id: "select-all`" }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass:
                              "custom-control-label font-weight-bold",
                            attrs: { for: "select-all`" }
                          },
                          [_vm._v("Select All")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "row ml-3" },
                      _vm._l(12, function(pp, i) {
                        return _c(
                          "div",
                          { key: i, staticClass: "col-md-3 mb-2" },
                          [
                            _c(
                              "div",
                              { staticClass: "custom-control custom-checkbox" },
                              [
                                _c("input", {
                                  staticClass: "custom-control-input",
                                  attrs: { type: "checkbox", id: "pp-" + i }
                                }),
                                _vm._v(" "),
                                _c(
                                  "label",
                                  {
                                    staticClass:
                                      "custom-control-label font-weight-bold",
                                    attrs: { for: "pp-" + i }
                                  },
                                  [_vm._v("Patient")]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "ml-4" },
                              _vm._l(3, function(p, j) {
                                return _c(
                                  "div",
                                  {
                                    key: j,
                                    staticClass:
                                      "custom-control custom-checkbox"
                                  },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.selectedPermission,
                                          expression: "selectedPermission"
                                        }
                                      ],
                                      staticClass: "custom-control-input",
                                      attrs: { type: "checkbox", id: "p-" + j },
                                      domProps: {
                                        value: i + j + pp,
                                        checked: Array.isArray(
                                          _vm.selectedPermission
                                        )
                                          ? _vm._i(
                                              _vm.selectedPermission,
                                              i + j + pp
                                            ) > -1
                                          : _vm.selectedPermission
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$a = _vm.selectedPermission,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = i + j + pp,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                (_vm.selectedPermission = $$a.concat(
                                                  [$$v]
                                                ))
                                            } else {
                                              $$i > -1 &&
                                                (_vm.selectedPermission = $$a
                                                  .slice(0, $$i)
                                                  .concat($$a.slice($$i + 1)))
                                            }
                                          } else {
                                            _vm.selectedPermission = $$c
                                          }
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "label",
                                      {
                                        staticClass: "custom-control-label",
                                        attrs: { for: "p-" + j }
                                      },
                                      [_vm._v("Add Patient")]
                                    )
                                  ]
                                )
                              }),
                              0
                            )
                          ]
                        )
                      }),
                      0
                    )
                  ]),
                  _vm._v(
                    "\n\n          " +
                      _vm._s(_vm.selectedPermission) +
                      "\n\n          "
                  ),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { staticClass: "mr-3" }, [_vm._v("Status")]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "custom-control custom-radio d-inline-block mr-2"
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.department.status,
                              expression: "department.status"
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: { type: "radio", value: "1", id: "cr1" },
                          domProps: {
                            checked: _vm._q(_vm.department.status, "1")
                          },
                          on: {
                            change: function($event) {
                              return _vm.$set(_vm.department, "status", "1")
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-control-label",
                            attrs: { for: "cr1" }
                          },
                          [_vm._v("Active")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "custom-control custom-radio d-inline-block"
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.department.status,
                              expression: "department.status"
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: { type: "radio", value: "0", id: "cr2" },
                          domProps: {
                            checked: _vm._q(_vm.department.status, "0")
                          },
                          on: {
                            change: function($event) {
                              return _vm.$set(_vm.department, "status", "0")
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-control-label",
                            attrs: { for: "cr2" }
                          },
                          [_vm._v("Inactive")]
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "custom-modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-secondary",
                      on: { click: _vm.resetForm }
                    },
                    [_vm._v("Reset")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      on: { click: _vm.saveDepartment }
                    },
                    [
                      _vm.loading
                        ? _c("i", { staticClass: "fa fa-spin fa-spinner" })
                        : _c("span", [_vm._v("Save")])
                    ]
                  )
                ])
              ])
            ])
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/settings/acl/Edit.vue?vue&type=template&id=bc1cdd3c&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/settings/acl/Edit.vue?vue&type=template&id=bc1cdd3c&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "d-inline" },
    [
      _c(
        "button",
        {
          staticClass: "btn btn-sm btn-info",
          on: {
            click: function($event) {
              _vm.isModalShow = true
            }
          }
        },
        [_c("i", { staticClass: "fa fa-edit" })]
      ),
      _vm._v(" "),
      _c("transition", { attrs: { name: "scale" } }, [
        _vm.isModalShow
          ? _c("div", { staticClass: "custom-modal" }, [
              _c("div", { staticClass: "custom-modal-body col-md-6" }, [
                _c("div", { staticClass: "custom-modal-header" }, [
                  _c("div", { staticClass: "clearfix" }, [
                    _c("div", { staticClass: "custom-modal-title" }, [
                      _vm._v("Edit Department")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "custom-close",
                        on: {
                          click: function($event) {
                            _vm.isModalShow = false
                          }
                        }
                      },
                      [_c("i", { staticClass: "fa fa-times" })]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "custom-modal-content" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "name" } }, [_vm._v("Name")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.department.name,
                          expression: "department.name"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", id: "name" },
                      domProps: { value: _vm.department.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.department, "name", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "description" } }, [
                      _vm._v("Description")
                    ]),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.department.description,
                          expression: "department.description"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { id: "description", rows: "4" },
                      domProps: { value: _vm.department.description },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.department,
                            "description",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { staticClass: "mr-3" }, [_vm._v("Status")]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "custom-control custom-radio d-inline-block mr-2"
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.department.status,
                              expression: "department.status"
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: { type: "radio", value: "1", id: "cr1" },
                          domProps: {
                            checked: _vm._q(_vm.department.status, "1")
                          },
                          on: {
                            change: function($event) {
                              return _vm.$set(_vm.department, "status", "1")
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-control-label",
                            attrs: { for: "cr1" }
                          },
                          [_vm._v("Active")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "custom-control custom-radio d-inline-block"
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.department.status,
                              expression: "department.status"
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: { type: "radio", value: "0", id: "cr2" },
                          domProps: {
                            checked: _vm._q(_vm.department.status, "0")
                          },
                          on: {
                            change: function($event) {
                              return _vm.$set(_vm.department, "status", "0")
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-control-label",
                            attrs: { for: "cr2" }
                          },
                          [_vm._v("Inactive")]
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "custom-modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      on: { click: _vm.updateDepartment }
                    },
                    [
                      _vm.loading
                        ? _c("i", { staticClass: "fa fa-spin fa-spinner" })
                        : _c("span", [_vm._v("Update")])
                    ]
                  )
                ])
              ])
            ])
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/settings/acl/Index.vue?vue&type=template&id=440f56ac&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/settings/acl/Index.vue?vue&type=template&id=440f56ac&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "card shadow mb-4" }, [
        _c("div", { staticClass: "card-header py-3" }, [
          _c("div", { staticClass: "clearfix" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "float-right" }, [_c("create-modal")], 1)
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "card-body" },
          [
            _c("data-table", {
              attrs: { headers: _vm.headers, resources: _vm.roles },
              scopedSlots: _vm._u(
                [
                  {
                    key: "sl",
                    fn: function(ref) {
                      var i = ref.i
                      var start = ref.start
                      return [_vm._v(_vm._s(i + start + 1))]
                    }
                  },
                  {
                    key: "permissions",
                    fn: function(ref) {
                      var item = ref.item
                      return _vm._l(item.permissions, function(permission, i) {
                        return _c(
                          "div",
                          { key: i, staticClass: "badge badge-info mr-1" },
                          [
                            _vm._v(
                              "\n            " +
                                _vm._s(permission.name) +
                                "\n          "
                            )
                          ]
                        )
                      })
                    }
                  },
                  {
                    key: "status",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        item.status
                          ? _c("div", { staticClass: "badge badge-success" }, [
                              _vm._v("Active")
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        !item.status
                          ? _c("div", { staticClass: "badge badge-danger" }, [
                              _vm._v("Inactive")
                            ])
                          : _vm._e()
                      ]
                    }
                  },
                  {
                    key: "action",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _c("edit-modal", { attrs: { data: item } }),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-sm btn-danger",
                            on: {
                              click: function($event) {
                                return _vm.showDeleteConfirm(item.id)
                              }
                            }
                          },
                          [_c("i", { staticClass: "fa fa-trash" })]
                        )
                      ]
                    }
                  }
                ],
                null,
                true
              )
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("delete-confirm", {
        ref: "deleteConfirm",
        on: { confirm: _vm.deleteDepartment }
      }),
      _vm._v(" "),
      _c("message", {
        attrs: {
          message: _vm.message,
          show: _vm.messageShow,
          iconColor: "text-danger"
        },
        on: {
          ok: function($event) {
            _vm.messageShow = false
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "float-left" }, [
      _c("h4", { staticClass: "m-0 font-weight-bold text-primary" }, [
        _vm._v("Role List")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Confirm.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Confirm.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Confirm_vue_vue_type_template_id_27f69fb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Confirm.vue?vue&type=template&id=27f69fb6& */ "./resources/js/components/Confirm.vue?vue&type=template&id=27f69fb6&");
/* harmony import */ var _Confirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Confirm.vue?vue&type=script&lang=js& */ "./resources/js/components/Confirm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Confirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Confirm_vue_vue_type_template_id_27f69fb6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Confirm_vue_vue_type_template_id_27f69fb6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Confirm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Confirm.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Confirm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Confirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Confirm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Confirm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Confirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Confirm.vue?vue&type=template&id=27f69fb6&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Confirm.vue?vue&type=template&id=27f69fb6& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Confirm_vue_vue_type_template_id_27f69fb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Confirm.vue?vue&type=template&id=27f69fb6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Confirm.vue?vue&type=template&id=27f69fb6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Confirm_vue_vue_type_template_id_27f69fb6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Confirm_vue_vue_type_template_id_27f69fb6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Message.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Message.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Message_vue_vue_type_template_id_b91a6428___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Message.vue?vue&type=template&id=b91a6428& */ "./resources/js/components/Message.vue?vue&type=template&id=b91a6428&");
/* harmony import */ var _Message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Message.vue?vue&type=script&lang=js& */ "./resources/js/components/Message.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Message_vue_vue_type_template_id_b91a6428___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Message_vue_vue_type_template_id_b91a6428___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Message.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Message.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Message.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Message.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Message.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Message.vue?vue&type=template&id=b91a6428&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Message.vue?vue&type=template&id=b91a6428& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_template_id_b91a6428___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Message.vue?vue&type=template&id=b91a6428& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Message.vue?vue&type=template&id=b91a6428&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_template_id_b91a6428___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_template_id_b91a6428___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/settings/acl/Create.vue":
/*!****************************************************!*\
  !*** ./resources/js/pages/settings/acl/Create.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_08c68b54_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=08c68b54&scoped=true& */ "./resources/js/pages/settings/acl/Create.vue?vue&type=template&id=08c68b54&scoped=true&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/pages/settings/acl/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_08c68b54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_08c68b54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "08c68b54",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/settings/acl/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/settings/acl/Create.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/settings/acl/Create.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/settings/acl/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/settings/acl/Create.vue?vue&type=template&id=08c68b54&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/pages/settings/acl/Create.vue?vue&type=template&id=08c68b54&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_08c68b54_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=08c68b54&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/settings/acl/Create.vue?vue&type=template&id=08c68b54&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_08c68b54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_08c68b54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/settings/acl/Edit.vue":
/*!**************************************************!*\
  !*** ./resources/js/pages/settings/acl/Edit.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_bc1cdd3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=bc1cdd3c&scoped=true& */ "./resources/js/pages/settings/acl/Edit.vue?vue&type=template&id=bc1cdd3c&scoped=true&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/pages/settings/acl/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_bc1cdd3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_bc1cdd3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "bc1cdd3c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/settings/acl/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/settings/acl/Edit.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/settings/acl/Edit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/settings/acl/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/settings/acl/Edit.vue?vue&type=template&id=bc1cdd3c&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/pages/settings/acl/Edit.vue?vue&type=template&id=bc1cdd3c&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_bc1cdd3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=bc1cdd3c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/settings/acl/Edit.vue?vue&type=template&id=bc1cdd3c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_bc1cdd3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_bc1cdd3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/settings/acl/Index.vue":
/*!***************************************************!*\
  !*** ./resources/js/pages/settings/acl/Index.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_440f56ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=440f56ac&scoped=true& */ "./resources/js/pages/settings/acl/Index.vue?vue&type=template&id=440f56ac&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/settings/acl/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_440f56ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_440f56ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "440f56ac",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/settings/acl/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/settings/acl/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/settings/acl/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/settings/acl/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/settings/acl/Index.vue?vue&type=template&id=440f56ac&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/pages/settings/acl/Index.vue?vue&type=template&id=440f56ac&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_440f56ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=440f56ac&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/settings/acl/Index.vue?vue&type=template&id=440f56ac&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_440f56ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_440f56ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);