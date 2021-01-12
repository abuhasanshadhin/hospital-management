(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["patients"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/patient/PatientDetails.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/patient/PatientDetails.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["patient"],
  data: function data() {
    return {
      isModalShow: false,
      apiPublicPath: window.publicPath
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/patient/PatientList.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/patient/PatientList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _document_Index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./document/Index */ "./resources/js/views/patient/document/Index.vue");
/* harmony import */ var _components_Confirm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Confirm */ "./resources/js/components/Confirm.vue");
/* harmony import */ var _PatientDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PatientDetails */ "./resources/js/views/patient/PatientDetails.vue");


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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    PatientDocument: _document_Index__WEBPACK_IMPORTED_MODULE_1__["default"],
    DeleteConfirm: _components_Confirm__WEBPACK_IMPORTED_MODULE_2__["default"],
    PatientDetails: _PatientDetails__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      patientInfo: null,
      patientDeleteId: null
    };
  },
  created: function created() {
    this.$store.dispatch("patient/getPatients");
  },
  methods: {
    showPatientDetails: function showPatientDetails(patient) {
      this.patientInfo = patient;
      this.$refs.patientDetails.isModalShow = true;
    },
    showDeleteDialog: function showDeleteDialog(patient_id) {
      this.patientDeleteId = patient_id;
      this.$refs.deleteConfirm.show = true;
    },
    deletePatient: function deletePatient() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.$refs.deleteConfirm.show = false;

                if (_this.patientDeleteId) {
                  _context.next = 4;
                  break;
                }

                snackbar.error("Something went wrong :(", "topRight");
                return _context.abrupt("return");

              case 4:
                _context.next = 6;
                return _this.$store.dispatch("patient/processPatient", {
                  url: "delete_patient",
                  data: {
                    id: _this.patientDeleteId
                  }
                });

              case 6:
                res = _context.sent;
                if (res) _this.patientDeleteId = null;

              case 8:
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/patient/document/Create.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/patient/document/Create.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    VueEditor: vue2_editor__WEBPACK_IMPORTED_MODULE_0__["VueEditor"]
  },
  data: function data() {
    return {
      isModalShow: false,
      doctors: []
    };
  },
  created: function created() {
    for (var i = 0; i < 5; i++) {
      this.doctors.push({
        id: i + 1,
        name: "Doctor ".concat(i + 1, " Name")
      });
    }
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/patient/document/Edit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/patient/document/Edit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    VueEditor: vue2_editor__WEBPACK_IMPORTED_MODULE_0__["VueEditor"]
  },
  data: function data() {
    return {
      isModalShow: false,
      doctors: []
    };
  },
  created: function created() {
    for (var i = 0; i < 5; i++) {
      this.doctors.push({
        id: i + 1,
        name: "Doctor ".concat(i + 1, " Name")
      });
    }
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/patient/document/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/patient/document/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_DataTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/DataTable */ "./resources/js/components/DataTable.vue");
/* harmony import */ var _Create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create */ "./resources/js/views/patient/document/Create.vue");
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Edit */ "./resources/js/views/patient/document/Edit.vue");
/* harmony import */ var _Show__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Show */ "./resources/js/views/patient/document/Show.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    DataTable: _components_DataTable__WEBPACK_IMPORTED_MODULE_0__["default"],
    DocumentCreate: _Create__WEBPACK_IMPORTED_MODULE_1__["default"],
    DocumentEdit: _Edit__WEBPACK_IMPORTED_MODULE_2__["default"],
    DocumentShow: _Show__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      isModalShow: false,
      documents: [{
        doctor: "Jhon Doe",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, eos?",
        date: "20-11-2020",
        added_by: "Abu H. Shadhin"
      }],
      headers: [{
        text: "SL",
        key: "sl"
      }, {
        text: "Doctor",
        key: "doctor",
        search: true
      }, {
        text: "Description",
        key: "description",
        search: true
      }, {
        text: "Date",
        key: "date"
      }, {
        text: "Added By",
        key: "added_by"
      }, {
        text: "Action",
        key: "action"
      }]
    };
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/patient/document/Show.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/patient/document/Show.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _doctor_DoctorDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../doctor/DoctorDetails */ "./resources/js/views/doctor/DoctorDetails.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    DoctorDetails: _doctor_DoctorDetails__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      isModalShow: false
    };
  },
  created: function created() {},
  methods: {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/patient/PatientDetails.vue?vue&type=style&index=0&id=3e1047b4&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/patient/PatientDetails.vue?vue&type=style&index=0&id=3e1047b4&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.patient-image[data-v-3e1047b4] {\n    height: 150px;\n    margin-bottom: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/patient/document/Index.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/patient/document/Index.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.av {\r\n  font-size: 18px;\r\n  padding-top: 8px;\n}\n.p-attr {\r\n  font-size: 20px;\r\n  font-weight: normal;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/patient/PatientDetails.vue?vue&type=style&index=0&id=3e1047b4&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/patient/PatientDetails.vue?vue&type=style&index=0&id=3e1047b4&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PatientDetails.vue?vue&type=style&index=0&id=3e1047b4&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/patient/PatientDetails.vue?vue&type=style&index=0&id=3e1047b4&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/patient/document/Index.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/patient/document/Index.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/patient/document/Index.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/patient/PatientDetails.vue?vue&type=template&id=3e1047b4&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/patient/PatientDetails.vue?vue&type=template&id=3e1047b4&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
      _c("transition", { attrs: { name: "scale" } }, [
        _vm.isModalShow
          ? _c("div", { staticClass: "custom-modal" }, [
              _c("div", { staticClass: "custom-modal-body col-md-8" }, [
                _c("div", { staticClass: "custom-modal-header" }, [
                  _c("div", { staticClass: "clearfix" }, [
                    _c("div", { staticClass: "custom-modal-title" }, [
                      _vm._v(
                        "\n                            Patient Details\n                        "
                      )
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
                  _c("div", { staticClass: "text-center" }, [
                    _vm.patient.photo
                      ? _c("img", {
                          staticClass: "patient-image",
                          attrs: {
                            src: _vm.apiPublicPath + "/" + _vm.patient.photo,
                            alt: "Patient Photo"
                          }
                        })
                      : _c("img", {
                          staticClass: "patient-image",
                          attrs: {
                            src:
                              _vm.apiPublicPath +
                              "/images/image-not-available.png",
                            alt: "Not Available"
                          }
                        })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "table",
                        { staticClass: "table table-sm table-borderless" },
                        [
                          _c("tr", [
                            _c("th", [_vm._v("Patient ID")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(":")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.patient.code))])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", [_vm._v("Full Name")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(":")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.patient.name))])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", [_vm._v("Gender")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(":")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.patient.gender))])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", [_vm._v("Date of Birth")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(":")]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(_vm._s(_vm.patient.date_of_birth))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", [_vm._v("Age")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(":")]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(
                                    _vm.patient.age_years
                                      ? _vm.patient.age_years + " year(s) "
                                      : ""
                                  ) +
                                  "\n                                        " +
                                  _vm._s(
                                    _vm.patient.age_months
                                      ? _vm.patient.age_months + " month(s) "
                                      : ""
                                  ) +
                                  "\n                                        " +
                                  _vm._s(
                                    _vm.patient.age_days
                                      ? _vm.patient.age_days + " day(s)"
                                      : ""
                                  ) +
                                  "\n                                    "
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", [_vm._v("Blood Group")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(":")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.patient.blood_group))])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", [_vm._v("Phone No.")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(":")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.patient.phone_number))])
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "table",
                        { staticClass: "table table-sm table-borderless" },
                        [
                          _c("tr", [
                            _c("th", [_vm._v("Phone No. 2")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(":")]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(_vm._s(_vm.patient.phone_number_2))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", [_vm._v("E-Mail")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(":")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.patient.email))])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", [_vm._v("Address")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(":")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.patient.address))])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", [_vm._v("Note")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(":")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.patient.note))])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", [_vm._v("Entry Date")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(":")]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(
                                    String(
                                      new Date(_vm.patient.created_at)
                                    ).slice(0, 25)
                                  ) +
                                  "\n                                    "
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", [_vm._v("Status")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(":")]),
                            _vm._v(" "),
                            _c("td", [
                              _vm.patient.status
                                ? _c(
                                    "div",
                                    { staticClass: "badge badge-success" },
                                    [
                                      _vm._v(
                                        "\n                                            Active\n                                        "
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              !_vm.patient.status
                                ? _c(
                                    "div",
                                    { staticClass: "badge badge-danger" },
                                    [
                                      _vm._v(
                                        "\n                                            Inactive\n                                        "
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", [_vm._v("Added By")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(":")]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(
                                    _vm.patient.created_by
                                      ? _vm.patient.created_by.name
                                      : ""
                                  ) +
                                  "\n                                    "
                              )
                            ])
                          ])
                        ]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/patient/PatientList.vue?vue&type=template&id=a07b012c&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/patient/PatientList.vue?vue&type=template&id=a07b012c&scoped=true& ***!
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
      _c("div", { staticClass: "card shadow mb-4" }, [
        _c("div", { staticClass: "card-header py-3" }, [
          _c("div", { staticClass: "clearfix" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "float-right" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-sm btn-primary",
                    attrs: { to: "/patient" }
                  },
                  [
                    _c("i", { staticClass: "fa fa-plus" }),
                    _vm._v(" Add New\n                    ")
                  ]
                )
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "table-responsive" }, [
            _c("table", { staticClass: "table table-bordered" }, [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.$store.getters["patient/patients"], function(
                  patient,
                  i
                ) {
                  return _c("tr", { key: i }, [
                    _c("td", [_vm._v(_vm._s(i + 1))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(patient.code))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(patient.name))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(patient.gender))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(patient.phone_number))]),
                    _vm._v(" "),
                    _c("td", [
                      patient.status
                        ? _c("div", { staticClass: "badge badge-success" }, [
                            _vm._v(
                              "\n                                    Active\n                                "
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !patient.status
                        ? _c("div", { staticClass: "badge badge-danger" }, [
                            _vm._v(
                              "\n                                    Inactive\n                                "
                            )
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _c("patient-document"),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn-action text-dark",
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.showPatientDetails(patient)
                              }
                            }
                          },
                          [_c("i", { staticClass: "fa fa-eye" })]
                        ),
                        _vm._v(" "),
                        _c(
                          "router-link",
                          {
                            staticClass: "btn-action text-info",
                            attrs: {
                              to: "/patient/" + patient.id,
                              title: "Edit"
                            }
                          },
                          [_c("i", { staticClass: "fa fa-edit" })]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn-action text-danger",
                            attrs: { type: "button", title: "Delete" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.showDeleteDialog(patient.id)
                              }
                            }
                          },
                          [_c("i", { staticClass: "fa fa-trash" })]
                        )
                      ],
                      1
                    )
                  ])
                }),
                0
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("patient-details", {
        ref: "patientDetails",
        attrs: { patient: _vm.patientInfo }
      }),
      _vm._v(" "),
      _c("delete-confirm", {
        ref: "deleteConfirm",
        on: { confirm: _vm.deletePatient }
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
        _vm._v("\n                        Patient List\n                    ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("SL")]),
        _vm._v(" "),
        _c("th", [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Gender")]),
        _vm._v(" "),
        _c("th", [_vm._v("Phone")]),
        _vm._v(" "),
        _c("th", [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/patient/document/Create.vue?vue&type=template&id=66cd4652&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/patient/document/Create.vue?vue&type=template&id=66cd4652&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
          staticClass: "btn btn-primary btn-sm mb-2",
          on: {
            click: function($event) {
              _vm.isModalShow = true
            }
          }
        },
        [_c("i", { staticClass: "fa fa-plus" }), _vm._v(" Add New\n  ")]
      ),
      _vm._v(" "),
      _c("transition", { attrs: { name: "scale" } }, [
        _vm.isModalShow
          ? _c("div", { staticClass: "custom-modal" }, [
              _c("div", { staticClass: "custom-modal-body col-md-7" }, [
                _c("div", { staticClass: "custom-modal-header" }, [
                  _c("div", { staticClass: "clearfix" }, [
                    _c("div", { staticClass: "custom-modal-title" }, [
                      _vm._v("Add New Document")
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
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      { staticClass: "col-md-2", attrs: { for: "" } },
                      [_vm._v("Attach Files")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-10" }, [
                      _c("input", {
                        staticClass: "form-control",
                        attrs: { type: "file", name: "", id: "", multiple: "" }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      { staticClass: "col-md-2", attrs: { for: "" } },
                      [_vm._v("Doctor")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-10" },
                      [
                        _c("v-select", {
                          attrs: { label: "name", options: _vm.doctors }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      { staticClass: "col-md-2", attrs: { for: "" } },
                      [_vm._v("Description")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-10" },
                      [_c("vue-editor")],
                      1
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "custom-modal-footer" }, [
                  _c("button", { staticClass: "btn btn-secondary" }, [
                    _vm._v("Reset")
                  ]),
                  _vm._v(" "),
                  _c("button", { staticClass: "btn btn-primary" }, [
                    _vm._v("Save")
                  ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/patient/document/Edit.vue?vue&type=template&id=877e30b6&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/patient/document/Edit.vue?vue&type=template&id=877e30b6&scoped=true& ***!
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
    { staticClass: "d-inline" },
    [
      _c(
        "button",
        {
          staticClass: "btn btn-info btn-sm",
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
              _c("div", { staticClass: "custom-modal-body col-md-7" }, [
                _c("div", { staticClass: "custom-modal-header" }, [
                  _c("div", { staticClass: "clearfix" }, [
                    _c("div", { staticClass: "custom-modal-title" }, [
                      _vm._v("Edit Document")
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
                _c("div", { staticClass: "custom-modal-content text-left" }, [
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      { staticClass: "col-md-2", attrs: { for: "" } },
                      [_vm._v("Attach Files")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-10" }, [
                      _c("input", {
                        staticClass: "form-control",
                        attrs: { type: "file", name: "", id: "", multiple: "" }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      { staticClass: "col-md-2", attrs: { for: "" } },
                      [_vm._v("Doctor")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-10" },
                      [
                        _c("v-select", {
                          attrs: { label: "name", options: _vm.doctors }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      { staticClass: "col-md-2", attrs: { for: "" } },
                      [_vm._v("Description")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-10" },
                      [_c("vue-editor")],
                      1
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "custom-modal-footer" }, [
                  _c("button", { staticClass: "btn btn-secondary" }, [
                    _vm._v("Reset")
                  ]),
                  _vm._v(" "),
                  _c("button", { staticClass: "btn btn-primary" }, [
                    _vm._v("Update")
                  ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/patient/document/Index.vue?vue&type=template&id=0d93c6c7&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/patient/document/Index.vue?vue&type=template&id=0d93c6c7& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "d-inline-block" },
    [
      _c(
        "button",
        {
          staticClass: "btn btn-dark btn-sm",
          on: {
            click: function($event) {
              _vm.isModalShow = true
            }
          }
        },
        [_c("i", { staticClass: "fa fa-file" })]
      ),
      _vm._v(" "),
      _c("transition", { attrs: { name: "scale" } }, [
        _vm.isModalShow
          ? _c("div", { staticClass: "custom-modal" }, [
              _c("div", { staticClass: "custom-modal-body col-md-10" }, [
                _c("div", { staticClass: "custom-modal-header" }, [
                  _c("div", { staticClass: "clearfix" }, [
                    _c("div", { staticClass: "custom-modal-title" }, [
                      _vm._v("Patient Documents")
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
                _c(
                  "div",
                  { staticClass: "custom-modal-content" },
                  [
                    _c("div", { staticClass: "clearfix" }, [
                      _c("div", { staticClass: "float-left" }, [
                        _c("div", { staticClass: "border px-2 pb-1" }, [
                          _c("i", { staticClass: "fa fa-wheelchair" }),
                          _vm._v(" "),
                          _c("b", [_vm._v("Patient ID :")]),
                          _vm._v(" x6sgms\n              ")
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "float-right" },
                        [_c("document-create")],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("data-table", {
                      attrs: { headers: _vm.headers, resources: _vm.documents },
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
                            key: "action",
                            fn: function() {
                              return [
                                _c("document-show"),
                                _vm._v(" "),
                                _c("document-edit"),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-sm btn-danger",
                                    attrs: { title: "Delete" }
                                  },
                                  [_c("i", { staticClass: "fa fa-trash" })]
                                )
                              ]
                            },
                            proxy: true
                          }
                        ],
                        null,
                        true
                      )
                    })
                  ],
                  1
                ),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/patient/document/Show.vue?vue&type=template&id=4891a318&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/patient/document/Show.vue?vue&type=template&id=4891a318&scoped=true& ***!
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
    { staticClass: "d-inline" },
    [
      _c(
        "button",
        {
          staticClass: "btn btn-dark btn-sm",
          on: {
            click: function($event) {
              _vm.isModalShow = true
            }
          }
        },
        [_c("i", { staticClass: "fa fa-eye" })]
      ),
      _vm._v(" "),
      _c("transition", { attrs: { name: "scale" } }, [
        _vm.isModalShow
          ? _c("div", { staticClass: "custom-modal" }, [
              _c("div", { staticClass: "custom-modal-body col-md-7" }, [
                _c("div", { staticClass: "custom-modal-header" }, [
                  _c("div", { staticClass: "clearfix" }, [
                    _c("div", { staticClass: "custom-modal-title" }, [
                      _vm._v(
                        "\n                            Patient Document Details\n                        "
                      )
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
                  _c(
                    "table",
                    { staticClass: "table table-sm table-borderless" },
                    [
                      _c("tr", [
                        _c("th", [_vm._v("Date")]),
                        _vm._v(" "),
                        _c("td", [_vm._v(":")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("20-09-2020")])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("th", [_vm._v("Doctor")]),
                        _vm._v(" "),
                        _c("td", [_vm._v(":")]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _c("doctor-details", {
                              attrs: { showName: "true" }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("th", [_vm._v("Description")]),
                        _vm._v(" "),
                        _c("td", [_vm._v(":")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            "\n                                Lorem ipsum dolor sit amet consectetur\n                                adipisicing elit. Minus fugit sint\n                                molestiae, possimus porro nihil nostrum\n                                perferendis enim facilis culpa est veritatis\n                                saepe autem quidem eligendi quia aperiam\n                                laboriosam iste.\n                            "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("th", [_vm._v("Attachments")]),
                        _vm._v(" "),
                        _c("td", [_vm._v(":")]),
                        _vm._v(" "),
                        _c("td", [
                          _c("i", { staticClass: "fa fa-download" }),
                          _vm._v(" "),
                          _c("i", { staticClass: "fa fa-download" }),
                          _vm._v(" "),
                          _c("i", { staticClass: "fa fa-download" })
                        ])
                      ])
                    ]
                  )
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

/***/ "./resources/js/views/patient/PatientDetails.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/patient/PatientDetails.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PatientDetails_vue_vue_type_template_id_3e1047b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PatientDetails.vue?vue&type=template&id=3e1047b4&scoped=true& */ "./resources/js/views/patient/PatientDetails.vue?vue&type=template&id=3e1047b4&scoped=true&");
/* harmony import */ var _PatientDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PatientDetails.vue?vue&type=script&lang=js& */ "./resources/js/views/patient/PatientDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PatientDetails_vue_vue_type_style_index_0_id_3e1047b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PatientDetails.vue?vue&type=style&index=0&id=3e1047b4&scoped=true&lang=css& */ "./resources/js/views/patient/PatientDetails.vue?vue&type=style&index=0&id=3e1047b4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PatientDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PatientDetails_vue_vue_type_template_id_3e1047b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PatientDetails_vue_vue_type_template_id_3e1047b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3e1047b4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/patient/PatientDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/patient/PatientDetails.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/patient/PatientDetails.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PatientDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PatientDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/patient/PatientDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PatientDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/patient/PatientDetails.vue?vue&type=style&index=0&id=3e1047b4&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/views/patient/PatientDetails.vue?vue&type=style&index=0&id=3e1047b4&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PatientDetails_vue_vue_type_style_index_0_id_3e1047b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PatientDetails.vue?vue&type=style&index=0&id=3e1047b4&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/patient/PatientDetails.vue?vue&type=style&index=0&id=3e1047b4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PatientDetails_vue_vue_type_style_index_0_id_3e1047b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PatientDetails_vue_vue_type_style_index_0_id_3e1047b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PatientDetails_vue_vue_type_style_index_0_id_3e1047b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PatientDetails_vue_vue_type_style_index_0_id_3e1047b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/patient/PatientDetails.vue?vue&type=template&id=3e1047b4&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/patient/PatientDetails.vue?vue&type=template&id=3e1047b4&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PatientDetails_vue_vue_type_template_id_3e1047b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PatientDetails.vue?vue&type=template&id=3e1047b4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/patient/PatientDetails.vue?vue&type=template&id=3e1047b4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PatientDetails_vue_vue_type_template_id_3e1047b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PatientDetails_vue_vue_type_template_id_3e1047b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/patient/PatientList.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/patient/PatientList.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PatientList_vue_vue_type_template_id_a07b012c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PatientList.vue?vue&type=template&id=a07b012c&scoped=true& */ "./resources/js/views/patient/PatientList.vue?vue&type=template&id=a07b012c&scoped=true&");
/* harmony import */ var _PatientList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PatientList.vue?vue&type=script&lang=js& */ "./resources/js/views/patient/PatientList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PatientList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PatientList_vue_vue_type_template_id_a07b012c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PatientList_vue_vue_type_template_id_a07b012c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a07b012c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/patient/PatientList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/patient/PatientList.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/patient/PatientList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PatientList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PatientList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/patient/PatientList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PatientList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/patient/PatientList.vue?vue&type=template&id=a07b012c&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/patient/PatientList.vue?vue&type=template&id=a07b012c&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PatientList_vue_vue_type_template_id_a07b012c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PatientList.vue?vue&type=template&id=a07b012c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/patient/PatientList.vue?vue&type=template&id=a07b012c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PatientList_vue_vue_type_template_id_a07b012c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PatientList_vue_vue_type_template_id_a07b012c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/patient/document/Create.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/patient/document/Create.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_66cd4652_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=66cd4652&scoped=true& */ "./resources/js/views/patient/document/Create.vue?vue&type=template&id=66cd4652&scoped=true&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/views/patient/document/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_66cd4652_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_66cd4652_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "66cd4652",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/patient/document/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/patient/document/Create.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/patient/document/Create.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/patient/document/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/patient/document/Create.vue?vue&type=template&id=66cd4652&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/patient/document/Create.vue?vue&type=template&id=66cd4652&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_66cd4652_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=66cd4652&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/patient/document/Create.vue?vue&type=template&id=66cd4652&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_66cd4652_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_66cd4652_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/patient/document/Edit.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/patient/document/Edit.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_877e30b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=877e30b6&scoped=true& */ "./resources/js/views/patient/document/Edit.vue?vue&type=template&id=877e30b6&scoped=true&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/views/patient/document/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_877e30b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_877e30b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "877e30b6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/patient/document/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/patient/document/Edit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/patient/document/Edit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/patient/document/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/patient/document/Edit.vue?vue&type=template&id=877e30b6&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/patient/document/Edit.vue?vue&type=template&id=877e30b6&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_877e30b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=877e30b6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/patient/document/Edit.vue?vue&type=template&id=877e30b6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_877e30b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_877e30b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/patient/document/Index.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/patient/document/Index.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_0d93c6c7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=0d93c6c7& */ "./resources/js/views/patient/document/Index.vue?vue&type=template&id=0d93c6c7&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/patient/document/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/patient/document/Index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_0d93c6c7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_0d93c6c7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/patient/document/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/patient/document/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/patient/document/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/patient/document/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/patient/document/Index.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/patient/document/Index.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/patient/document/Index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/patient/document/Index.vue?vue&type=template&id=0d93c6c7&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/patient/document/Index.vue?vue&type=template&id=0d93c6c7& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_0d93c6c7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=0d93c6c7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/patient/document/Index.vue?vue&type=template&id=0d93c6c7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_0d93c6c7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_0d93c6c7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/patient/document/Show.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/patient/document/Show.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_4891a318_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=4891a318&scoped=true& */ "./resources/js/views/patient/document/Show.vue?vue&type=template&id=4891a318&scoped=true&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/views/patient/document/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_4891a318_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_4891a318_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4891a318",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/patient/document/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/patient/document/Show.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/patient/document/Show.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/patient/document/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/patient/document/Show.vue?vue&type=template&id=4891a318&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/patient/document/Show.vue?vue&type=template&id=4891a318&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_4891a318_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=4891a318&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/patient/document/Show.vue?vue&type=template&id=4891a318&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_4891a318_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_4891a318_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);