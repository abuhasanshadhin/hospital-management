(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["doctors~patients"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/doctor/DoctorDetails.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/doctor/DoctorDetails.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["showName", "doctor"],
  data: function data() {
    return {
      isModalShow: false,
      apiPublicPath: window.publicPath
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/doctor/DoctorDetails.vue?vue&type=template&id=1acf3712&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/doctor/DoctorDetails.vue?vue&type=template&id=1acf3712&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
          class: _vm.showName
            ? "btn btn-sm btn-primary"
            : "btn-action text-dark",
          on: {
            click: function($event) {
              _vm.isModalShow = true
            }
          }
        },
        [
          _vm.showName
            ? _c("span", [_vm._v("Dr. Jhon Doe")])
            : _c("i", { staticClass: "fa fa-eye" })
        ]
      ),
      _vm._v(" "),
      _c("transition", { attrs: { name: "scale" } }, [
        _vm.isModalShow
          ? _c("div", { staticClass: "custom-modal" }, [
              _c("div", { staticClass: "custom-modal-body col-md-7" }, [
                _c("div", { staticClass: "custom-modal-header" }, [
                  _c("div", { staticClass: "clearfix" }, [
                    _c("div", { staticClass: "custom-modal-title" }, [
                      _vm._v("Doctor Details")
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
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-5" }, [
                      _c("div", { staticClass: "text-center" }, [
                        _vm.doctor.photo
                          ? _c("img", {
                              staticClass: "doctor-image",
                              attrs: {
                                src: _vm.apiPublicPath + "/" + _vm.doctor.photo,
                                alt: "Doctor Photo"
                              }
                            })
                          : _c("img", {
                              staticClass: "doctor-image",
                              attrs: {
                                src:
                                  _vm.apiPublicPath +
                                  "/images/image-not-available.png",
                                alt: "Not Available"
                              }
                            })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-7" }, [
                      _c(
                        "table",
                        { staticClass: "table table-sm table-borderless" },
                        [
                          _c("tr", [
                            _c("th", [_vm._v("Full Name")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(":")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.doctor.name))])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", [_vm._v("Department")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(":")]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(_vm._s(_vm.doctor.department_name))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", [_vm._v("Specialization")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(":")]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(_vm._s(_vm.doctor.specialization))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", [_vm._v("Phone No")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(":")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.doctor.phone))])
                          ]),
                          _vm._v(" "),
                          _vm.doctor.email
                            ? _c("tr", [
                                _c("th", [_vm._v("E-Mail")]),
                                _vm._v(" "),
                                _c("td", [_vm._v(":")]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                                        " +
                                      _vm._s(_vm.doctor.email) +
                                      "\n                                    "
                                  )
                                ])
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", { staticStyle: { width: "120px" } }, [
                              _vm._v(
                                "\n                                        Date of Birth\n                                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(":")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.doctor.date_of_birth))])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", [_vm._v("Gender")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(":")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.doctor.gender))])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", [_vm._v("B. Group")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(":")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.doctor.blood_group))])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", [_vm._v("Address")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(":")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.doctor.address))])
                          ])
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "px-1 mt-3" }, [
                    _c("div", { staticClass: "text-center" }, [
                      _c("b", [_c("u", [_vm._v("Education / Degree")])])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "education text-center" }, [
                      _vm._v(
                        "\n                            " +
                          _vm._s(_vm.doctor.education) +
                          "\n                        "
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "custom-modal-footer" })
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

/***/ "./resources/js/views/doctor/DoctorDetails.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/doctor/DoctorDetails.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DoctorDetails_vue_vue_type_template_id_1acf3712_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DoctorDetails.vue?vue&type=template&id=1acf3712&scoped=true& */ "./resources/js/views/doctor/DoctorDetails.vue?vue&type=template&id=1acf3712&scoped=true&");
/* harmony import */ var _DoctorDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DoctorDetails.vue?vue&type=script&lang=js& */ "./resources/js/views/doctor/DoctorDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DoctorDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DoctorDetails_vue_vue_type_template_id_1acf3712_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DoctorDetails_vue_vue_type_template_id_1acf3712_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1acf3712",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/doctor/DoctorDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/doctor/DoctorDetails.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/doctor/DoctorDetails.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DoctorDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DoctorDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/doctor/DoctorDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DoctorDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/doctor/DoctorDetails.vue?vue&type=template&id=1acf3712&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/doctor/DoctorDetails.vue?vue&type=template&id=1acf3712&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DoctorDetails_vue_vue_type_template_id_1acf3712_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DoctorDetails.vue?vue&type=template&id=1acf3712&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/doctor/DoctorDetails.vue?vue&type=template&id=1acf3712&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DoctorDetails_vue_vue_type_template_id_1acf3712_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DoctorDetails_vue_vue_type_template_id_1acf3712_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);