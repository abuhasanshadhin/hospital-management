(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["appointment-report"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/appointment/Report.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/appointment/Report.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      assignBy: "All",
      fromDate: new Date("2020-10-31"),
      toDate: new Date("2020-10-31"),
      doctor: "Select Doctor",
      representative: "Select Representative"
    };
  },
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/appointment/Report.vue?vue&type=template&id=18e1c1fa&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/appointment/Report.vue?vue&type=template&id=18e1c1fa& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "card shadow mb-4" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("div", { staticClass: "mb-2 bg-light p-2" }, [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-md-3" },
              [
                _c("v-select", {
                  attrs: { options: ["All", "Doctor", "Representative"] },
                  model: {
                    value: _vm.assignBy,
                    callback: function($$v) {
                      _vm.assignBy = $$v
                    },
                    expression: "assignBy"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _vm.assignBy == "Doctor"
              ? _c(
                  "div",
                  { staticClass: "col-md-3" },
                  [
                    _c("v-select", {
                      attrs: {
                        options: ["Jhon Doe", "Joe Biden", "Donald Trump"]
                      },
                      model: {
                        value: _vm.doctor,
                        callback: function($$v) {
                          _vm.doctor = $$v
                        },
                        expression: "doctor"
                      }
                    })
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.assignBy == "Representative"
              ? _c(
                  "div",
                  { staticClass: "col-md-3" },
                  [
                    _c("v-select", {
                      attrs: {
                        options: ["Abdul Hamid", "Sheikh Hasina", "Khaleda Zia"]
                      },
                      model: {
                        value: _vm.representative,
                        callback: function($$v) {
                          _vm.representative = $$v
                        },
                        expression: "representative"
                      }
                    })
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-md-2" },
              [
                _c("date-picker", {
                  model: {
                    value: _vm.fromDate,
                    callback: function($$v) {
                      _vm.fromDate = $$v
                    },
                    expression: "fromDate"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-md-2" },
              [
                _c("date-picker", {
                  model: {
                    value: _vm.toDate,
                    callback: function($$v) {
                      _vm.toDate = $$v
                    },
                    expression: "toDate"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _vm._m(1)
          ])
        ]),
        _vm._v(" "),
        false
          ? undefined
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "table-responsive" }, [
          _c(
            "table",
            { staticClass: "table table-bordered table-striped text-center" },
            [
              _vm._m(2),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(15, function(i) {
                  return _c("tr", { key: i }, [
                    _c("td", [_vm._v(_vm._s(i))]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Rakib Islam")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("01345678901")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Jhon Doe")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("08-11-20")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("13")])
                  ])
                }),
                0
              )
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header py-3" }, [
      _c("div", { staticClass: "clearfix" }, [
        _c("div", { staticClass: "float-left" }, [
          _c("h4", { staticClass: "m-0 font-weight-bold text-primary" }, [
            _vm._v("\n            Appointment Report\n          ")
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c(
        "button",
        { staticClass: "btn btn-info px-4", attrs: { type: "button" } },
        [
          _c("i", { staticClass: "fa fa-search" }),
          _vm._v(" Filter\n            ")
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Patient Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Patient Phone")]),
        _vm._v(" "),
        _c("th", [_vm._v("Doctor Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Serial")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/appointment/Report.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/appointment/Report.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Report_vue_vue_type_template_id_18e1c1fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Report.vue?vue&type=template&id=18e1c1fa& */ "./resources/js/views/appointment/Report.vue?vue&type=template&id=18e1c1fa&");
/* harmony import */ var _Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Report.vue?vue&type=script&lang=js& */ "./resources/js/views/appointment/Report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Report_vue_vue_type_template_id_18e1c1fa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Report_vue_vue_type_template_id_18e1c1fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/appointment/Report.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/appointment/Report.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/appointment/Report.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Report.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/appointment/Report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/appointment/Report.vue?vue&type=template&id=18e1c1fa&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/appointment/Report.vue?vue&type=template&id=18e1c1fa& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_template_id_18e1c1fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Report.vue?vue&type=template&id=18e1c1fa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/appointment/Report.vue?vue&type=template&id=18e1c1fa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_template_id_18e1c1fa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_template_id_18e1c1fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);