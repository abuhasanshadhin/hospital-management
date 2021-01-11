(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["department~doctor"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/department/Department.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/department/Department.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["data"],
  data: function data() {
    return {
      isModalShow: false,
      department: {
        name: "",
        description: "",
        status: 1
      },
      loading: false,
      btnDisabled: false,
      editId: null
    };
  },
  watch: {
    data: function data(dept) {
      var _this = this;

      if (dept == null) return;
      Object.keys(this.department).map(function (k) {
        return _this.department[k] = dept[k];
      });
      this.editId = this.data.id;
    }
  },
  methods: {
    resetForm: function resetForm() {
      var _this2 = this;

      Object.keys(this.department).map(function (k) {
        return _this2.department[k] = "";
      });
      this.department.status = 1;
      this.editId = null;
    },
    saveDepartment: function saveDepartment() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, department, _res;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this3.department.name) {
                  _context.next = 4;
                  break;
                }

                snackbar.warning("Department name is required", "topRight");
                _context.next = 19;
                break;

              case 4:
                _this3.btnDisabled = _this3.loading = true;

                if (!(_this3.editId == null)) {
                  _context.next = 12;
                  break;
                }

                _context.next = 8;
                return _this3.$store.dispatch("department/processDepartment", {
                  url: "add_department",
                  data: _this3.department
                });

              case 8:
                res = _context.sent;

                if (res) {
                  _this3.resetForm();

                  _this3.isModalShow = false;
                }

                _context.next = 18;
                break;

              case 12:
                department = _this3.department;
                department.id = _this3.editId;
                _context.next = 16;
                return _this3.$store.dispatch("department/processDepartment", {
                  url: "update_department",
                  data: department
                });

              case 16:
                _res = _context.sent;

                if (_res) {
                  _this3.resetForm();

                  _this3.isModalShow = false;
                }

              case 18:
                _this3.btnDisabled = _this3.loading = false;

              case 19:
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/department/Department.vue?vue&type=template&id=20c80940&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/department/Department.vue?vue&type=template&id=20c80940&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
      _c("transition", { attrs: { name: "scale" } }, [
        _vm.isModalShow
          ? _c("div", { staticClass: "custom-modal" }, [
              _c("div", { staticClass: "custom-modal-body col-md-4" }, [
                _c("div", { staticClass: "custom-modal-header" }, [
                  _c("div", { staticClass: "clearfix" }, [
                    _c(
                      "div",
                      { staticClass: "custom-modal-title" },
                      [
                        _vm.editId
                          ? [_vm._v("Edit Department")]
                          : [_vm._v("Add New Department")]
                      ],
                      2
                    ),
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
                _c(
                  "form",
                  {
                    attrs: { method: "post" },
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.saveDepartment($event)
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "custom-modal-content" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "name" } }, [
                          _vm._v("Name\n                                "),
                          _c("span", { staticClass: "text-danger" }, [
                            _vm._v("*")
                          ])
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
                              _vm.$set(
                                _vm.department,
                                "name",
                                $event.target.value
                              )
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
                          attrs: { id: "description", rows: "2" },
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
                        _c("label", { staticClass: "mr-3" }, [
                          _vm._v("Status")
                        ]),
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
                              attrs: { type: "radio", value: "1", id: "ds1" },
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
                                attrs: { for: "ds1" }
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
                              attrs: { type: "radio", value: "0", id: "ds2" },
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
                                attrs: { for: "ds2" }
                              },
                              [_vm._v("Inactive")]
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "custom-modal-footer" }, [
                      !_vm.editId
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-dark",
                              attrs: {
                                type: "button",
                                disabled: _vm.btnDisabled
                              },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.resetForm($event)
                                }
                              }
                            },
                            [
                              _c("i", { staticClass: "fa fa-undo" }),
                              _vm._v(" Reset\n                        ")
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          attrs: { type: "submit", disabled: _vm.btnDisabled }
                        },
                        [
                          _vm.loading
                            ? _c("i", { staticClass: "fa fa-spin fa-spinner" })
                            : _c(
                                "span",
                                [
                                  _c("i", { staticClass: "fa fa-save" }),
                                  _vm._v(
                                    " Save\n                                "
                                  ),
                                  _vm.editId ? [_vm._v("Changes")] : _vm._e()
                                ],
                                2
                              )
                        ]
                      )
                    ])
                  ]
                )
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

/***/ "./resources/js/views/department/Department.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/department/Department.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Department_vue_vue_type_template_id_20c80940_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Department.vue?vue&type=template&id=20c80940&scoped=true& */ "./resources/js/views/department/Department.vue?vue&type=template&id=20c80940&scoped=true&");
/* harmony import */ var _Department_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Department.vue?vue&type=script&lang=js& */ "./resources/js/views/department/Department.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Department_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Department_vue_vue_type_template_id_20c80940_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Department_vue_vue_type_template_id_20c80940_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "20c80940",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/department/Department.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/department/Department.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/department/Department.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Department_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Department.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/department/Department.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Department_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/department/Department.vue?vue&type=template&id=20c80940&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/department/Department.vue?vue&type=template&id=20c80940&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Department_vue_vue_type_template_id_20c80940_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Department.vue?vue&type=template&id=20c80940&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/department/Department.vue?vue&type=template&id=20c80940&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Department_vue_vue_type_template_id_20c80940_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Department_vue_vue_type_template_id_20c80940_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);