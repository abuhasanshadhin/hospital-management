(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["patient"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Webcam.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Webcam.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_webcam_easy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/webcam-easy */ "./resources/js/utils/webcam-easy.js");


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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      cameraShow: false,
      webCamObj: null,
      snapSound: "".concat(window.publicPath, "/audio/snap.wav")
    };
  },
  methods: {
    _webCam: function _webCam() {
      var webcamElement = document.getElementById("webcam");
      var canvasElement = document.getElementById("canvas");
      var snapSoundElement = document.getElementById("snapSound");
      var webcam = new _utils_webcam_easy__WEBPACK_IMPORTED_MODULE_1__["default"](webcamElement, "user", canvasElement, snapSoundElement);
      return webcam;
    },
    openCamera: function openCamera() {
      this.webCamObj = this._webCam();
      this.webCamObj.start().then(function (result) {
        console.log("Webcam working");
      })["catch"](function (err) {
        console.log(err);
      });
    },
    takePhoto: function takePhoto() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var picture, file;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this.webCamObj == null)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                picture = _this.webCamObj.snap();

                _this.webCamObj.stop();

                _this.cameraShow = false;
                _context.next = 7;
                return _this.dataUrlToFile(picture);

              case 7:
                file = _context.sent;

                _this.$parent.getCapturedFile(file);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    close: function close() {
      this.webCamObj.stop();
      this.cameraShow = false;
    },
    dataUrlToFile: function dataUrlToFile(dataUrl, FileName) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var res, blob;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetch(dataUrl);

              case 2:
                res = _context2.sent;
                _context2.next = 5;
                return res.blob();

              case 5:
                blob = _context2.sent;
                return _context2.abrupt("return", new File([blob], FileName || "NewFile.png", {
                  type: "image/png"
                }));

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/patient/Patient.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/patient/Patient.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Webcam__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Webcam */ "./resources/js/components/Webcam.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Webcam: _components_Webcam__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      patient: {
        name: "",
        gender: "",
        date_of_birth: "",
        age: null,
        blood_group: "",
        phone: "",
        address: "",
        email: "",
        note: "",
        status: 1
      },
      photo: null,
      photoPreview: null,
      notFoundImage: "".concat(window.publicPath, "/images/image-not-available.png")
    };
  },
  watch: {
    "patient.date_of_birth": function patientDate_of_birth(val) {
      if (!val) return;
      var dob = new Date(val).toISOString().slice(0, 10);
      this.patient.age = this.getAge(dob);
    }
  },
  methods: {
    onPhotoChange: function onPhotoChange() {
      if (event.target.files.length == 0) return;
      var file = event.target.files[0];
      console.log(file);
      this.photoPreview = URL.createObjectURL(file);
    },
    webCamEnable: function webCamEnable() {
      this.$refs.webCam.cameraShow = true;
      this.$refs.webCam.openCamera();
    },
    getCapturedFile: function getCapturedFile(file) {
      console.log(file);
      this.photoPreview = URL.createObjectURL(file);
    },
    getAge: function getAge(fromDate) {
      if (!fromDate) return null;
      var dob = new Date(fromDate);
      var monthDiff = Date.now() - dob.getTime();
      var ageDate = new Date(monthDiff);
      var year = ageDate.getUTCFullYear();
      var age = Math.abs(year - 1970);
      return age;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Webcam.vue?vue&type=style&index=0&id=6c8d3ca6&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Webcam.vue?vue&type=style&index=0&id=6c8d3ca6&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#webcam[data-v-6c8d3ca6] {\n  width: 100%;\n  height: 330px;\n  background: #000000;\n}\n.custom-modal-body[data-v-6c8d3ca6] {\n  height: 390px;\n  width: 460px;\n  padding: 10px;\n}\n.custom-modal-body .buttons[data-v-6c8d3ca6] {\n  padding-top: 3px;\n}\n.custom-modal-body .buttons button[data-v-6c8d3ca6] {\n  padding: 3px 15px;\n  border-radius: unset;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/patient/Patient.vue?vue&type=style&index=0&id=491993ac&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/patient/Patient.vue?vue&type=style&index=0&id=491993ac&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".patient-image-preview[data-v-491993ac] {\n  height: 150px;\n  width: 150px;\n  margin-top: 30px;\n  object-fit: contain;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Webcam.vue?vue&type=style&index=0&id=6c8d3ca6&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Webcam.vue?vue&type=style&index=0&id=6c8d3ca6&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Webcam.vue?vue&type=style&index=0&id=6c8d3ca6&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Webcam.vue?vue&type=style&index=0&id=6c8d3ca6&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/patient/Patient.vue?vue&type=style&index=0&id=491993ac&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/patient/Patient.vue?vue&type=style&index=0&id=491993ac&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Patient.vue?vue&type=style&index=0&id=491993ac&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/patient/Patient.vue?vue&type=style&index=0&id=491993ac&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Webcam.vue?vue&type=template&id=6c8d3ca6&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Webcam.vue?vue&type=template&id=6c8d3ca6&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.cameraShow,
            expression: "cameraShow"
          }
        ],
        staticClass: "custom-modal"
      },
      [
        _c("div", { staticClass: "custom-modal-body" }, [
          _c("video", { attrs: { id: "webcam", autoplay: "" } }),
          _vm._v(" "),
          _c("canvas", { staticClass: "d-none", attrs: { id: "canvas" } }),
          _vm._v(" "),
          _c("audio", {
            attrs: { id: "snapSound", src: _vm.snapSound, preload: "auto" }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "text-center buttons" }, [
            _c(
              "button",
              {
                staticClass: "btn-dark btn",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.close($event)
                  }
                }
              },
              [_vm._v("\n                    Close\n                ")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn-primary btn",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.takePhoto($event)
                  }
                }
              },
              [_vm._v("\n                    Take Photo\n                ")]
            )
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/patient/Patient.vue?vue&type=template&id=491993ac&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/patient/Patient.vue?vue&type=template&id=491993ac&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
                  staticClass: "btn btn-sm btn-dark",
                  attrs: { to: "/patients" }
                },
                [
                  _c("i", { staticClass: "fa fa-arrow-left" }),
                  _vm._v(" Back\n                    ")
                ]
              )
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card-body" },
        [
          _c("form", { attrs: { method: "POST" } }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-5" }, [
                _c("div", { staticClass: "form-group row" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-8" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.trim",
                          value: _vm.patient.name,
                          expression: "patient.name",
                          modifiers: { trim: true }
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text" },
                      domProps: { value: _vm.patient.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.patient,
                            "name",
                            $event.target.value.trim()
                          )
                        },
                        blur: function($event) {
                          return _vm.$forceUpdate()
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _vm._m(2),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-8" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "custom-control custom-radio d-inline-block mr-3"
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.patient.gender,
                              expression: "patient.gender",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: { type: "radio", value: "Male", id: "g1" },
                          domProps: {
                            checked: _vm._q(_vm.patient.gender, "Male")
                          },
                          on: {
                            change: function($event) {
                              return _vm.$set(_vm.patient, "gender", "Male")
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-control-label",
                            attrs: { for: "g1" }
                          },
                          [_vm._v("Male")]
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
                              rawName: "v-model.trim",
                              value: _vm.patient.gender,
                              expression: "patient.gender",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: { type: "radio", value: "Female", id: "g2" },
                          domProps: {
                            checked: _vm._q(_vm.patient.gender, "Female")
                          },
                          on: {
                            change: function($event) {
                              return _vm.$set(_vm.patient, "gender", "Female")
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-control-label",
                            attrs: { for: "g2" }
                          },
                          [_vm._v("Female")]
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "label",
                    { staticClass: "col-md-4 text-right", attrs: { for: "" } },
                    [_vm._v("Date of Birth")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-md-5" },
                    [
                      _c("date-picker", {
                        model: {
                          value: _vm.patient.date_of_birth,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.patient,
                              "date_of_birth",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "patient.date_of_birth"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-1 px-0" }, [_vm._v("Age")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 pl-0" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.patient.age,
                          expression: "patient.age",
                          modifiers: { number: true }
                        }
                      ],
                      staticClass: "form-control text-center",
                      attrs: { type: "number" },
                      domProps: { value: _vm.patient.age },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.patient,
                            "age",
                            _vm._n($event.target.value)
                          )
                        },
                        blur: function($event) {
                          return _vm.$forceUpdate()
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "label",
                    { staticClass: "col-md-4 text-right", attrs: { for: "" } },
                    [_vm._v("Blood Group")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-md-8" },
                    [
                      _c("v-select", {
                        attrs: {
                          options: [
                            "A+",
                            "A-",
                            "B+",
                            "B-",
                            "O+",
                            "O-",
                            "AB+",
                            "AB-"
                          ]
                        },
                        model: {
                          value: _vm.patient.blood_group,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.patient,
                              "blood_group",
                              typeof $$v === "string" ? $$v.trim() : $$v
                            )
                          },
                          expression: "patient.blood_group"
                        }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _vm._m(3),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-8" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.trim",
                          value: _vm.patient.phone,
                          expression: "patient.phone",
                          modifiers: { trim: true }
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text" },
                      domProps: { value: _vm.patient.phone },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.patient,
                            "phone",
                            $event.target.value.trim()
                          )
                        },
                        blur: function($event) {
                          return _vm.$forceUpdate()
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _vm._m(4),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-8" }, [
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.trim",
                          value: _vm.patient.address,
                          expression: "patient.address",
                          modifiers: { trim: true }
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { rows: "2" },
                      domProps: { value: _vm.patient.address },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.patient,
                            "address",
                            $event.target.value.trim()
                          )
                        },
                        blur: function($event) {
                          return _vm.$forceUpdate()
                        }
                      }
                    })
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-5" }, [
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "label",
                    { staticClass: "col-md-4 text-right", attrs: { for: "" } },
                    [_vm._v("Email")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-8" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.trim",
                          value: _vm.patient.email,
                          expression: "patient.email",
                          modifiers: { trim: true }
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "email" },
                      domProps: { value: _vm.patient.email },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.patient,
                            "email",
                            $event.target.value.trim()
                          )
                        },
                        blur: function($event) {
                          return _vm.$forceUpdate()
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c("label", { staticClass: "col-md-4 text-right" }, [
                    _vm._v("Photo")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("input", {
                      staticClass: "form-control",
                      attrs: { type: "file" },
                      on: { change: _vm.onPhotoChange }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn-webcam",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.webCamEnable($event)
                          }
                        }
                      },
                      [_c("i", { staticClass: "fa fa-camera fa-2x" })]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "label",
                    { staticClass: "col-md-4 text-right", attrs: { for: "" } },
                    [_vm._v("Note")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-8" }, [
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.trim",
                          value: _vm.patient.note,
                          expression: "patient.note",
                          modifiers: { trim: true }
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { rows: "3" },
                      domProps: { value: _vm.patient.note },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.patient,
                            "note",
                            $event.target.value.trim()
                          )
                        },
                        blur: function($event) {
                          return _vm.$forceUpdate()
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "label",
                    { staticClass: "col-md-4 text-right", attrs: { for: "" } },
                    [_vm._v("Status")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-8" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "custom-control custom-radio d-inline-block mr-3"
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.number",
                              value: _vm.patient.status,
                              expression: "patient.status",
                              modifiers: { number: true }
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: { type: "radio", value: "1", id: "s1" },
                          domProps: {
                            checked: _vm._q(_vm.patient.status, _vm._n("1"))
                          },
                          on: {
                            change: function($event) {
                              _vm.$set(_vm.patient, "status", _vm._n("1"))
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-control-label",
                            attrs: { for: "s1" }
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
                              rawName: "v-model.number",
                              value: _vm.patient.status,
                              expression: "patient.status",
                              modifiers: { number: true }
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: { type: "radio", value: "0", id: "s2" },
                          domProps: {
                            checked: _vm._q(_vm.patient.status, _vm._n("0"))
                          },
                          on: {
                            change: function($event) {
                              _vm.$set(_vm.patient, "status", _vm._n("0"))
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-control-label",
                            attrs: { for: "s2" }
                          },
                          [_vm._v("Inactive")]
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _vm._m(5)
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-2" }, [
                _c("img", {
                  staticClass: "patient-image-preview",
                  attrs: {
                    src: _vm.photoPreview
                      ? _vm.photoPreview
                      : _vm.notFoundImage,
                    alt: "Patient Photo Preview"
                  }
                })
              ])
            ])
          ]),
          _vm._v(" "),
          _c("webcam", { ref: "webCam" })
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "float-left" }, [
      _c("h4", { staticClass: "m-0 font-weight-bold text-primary" }, [
        _vm._v(
          "\n                        Add New Patient\n                    "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "col-md-4 text-right" }, [
      _vm._v("Full Name\n                                "),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "col-md-4 text-right", attrs: { for: "" } },
      [
        _vm._v("Gender\n                                "),
        _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "col-md-4 text-right", attrs: { for: "" } },
      [
        _vm._v("Phone No\n                                "),
        _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "col-md-4 text-right", attrs: { for: "" } },
      [
        _vm._v("Address\n                                "),
        _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group row" }, [
      _c("div", { staticClass: "col-md-8 offset-md-4 text-right" }, [
        _c("button", { staticClass: "btn btn-dark c-btn" }, [
          _c("i", { staticClass: "fa fa-undo" }),
          _vm._v(" Reset\n                                ")
        ]),
        _vm._v(" "),
        _c("button", { staticClass: "btn btn-primary c-btn" }, [
          _c("i", { staticClass: "fa fa-save" }),
          _vm._v(" Save\n                                ")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Webcam.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Webcam.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Webcam_vue_vue_type_template_id_6c8d3ca6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Webcam.vue?vue&type=template&id=6c8d3ca6&scoped=true& */ "./resources/js/components/Webcam.vue?vue&type=template&id=6c8d3ca6&scoped=true&");
/* harmony import */ var _Webcam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Webcam.vue?vue&type=script&lang=js& */ "./resources/js/components/Webcam.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Webcam_vue_vue_type_style_index_0_id_6c8d3ca6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Webcam.vue?vue&type=style&index=0&id=6c8d3ca6&lang=scss&scoped=true& */ "./resources/js/components/Webcam.vue?vue&type=style&index=0&id=6c8d3ca6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Webcam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Webcam_vue_vue_type_template_id_6c8d3ca6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Webcam_vue_vue_type_template_id_6c8d3ca6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6c8d3ca6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Webcam.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Webcam.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Webcam.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Webcam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Webcam.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Webcam.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Webcam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Webcam.vue?vue&type=style&index=0&id=6c8d3ca6&lang=scss&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Webcam.vue?vue&type=style&index=0&id=6c8d3ca6&lang=scss&scoped=true& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Webcam_vue_vue_type_style_index_0_id_6c8d3ca6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Webcam.vue?vue&type=style&index=0&id=6c8d3ca6&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Webcam.vue?vue&type=style&index=0&id=6c8d3ca6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Webcam_vue_vue_type_style_index_0_id_6c8d3ca6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Webcam_vue_vue_type_style_index_0_id_6c8d3ca6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Webcam_vue_vue_type_style_index_0_id_6c8d3ca6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Webcam_vue_vue_type_style_index_0_id_6c8d3ca6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Webcam.vue?vue&type=template&id=6c8d3ca6&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Webcam.vue?vue&type=template&id=6c8d3ca6&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Webcam_vue_vue_type_template_id_6c8d3ca6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Webcam.vue?vue&type=template&id=6c8d3ca6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Webcam.vue?vue&type=template&id=6c8d3ca6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Webcam_vue_vue_type_template_id_6c8d3ca6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Webcam_vue_vue_type_template_id_6c8d3ca6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/utils/webcam-easy.js":
/*!*******************************************!*\
  !*** ./resources/js/utils/webcam-easy.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Webcam; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Webcam = /*#__PURE__*/function () {
  function Webcam(webcamElement) {
    var facingMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'user';
    var canvasElement = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var snapSoundElement = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    _classCallCheck(this, Webcam);

    this._webcamElement = webcamElement;
    this._webcamElement.width = this._webcamElement.width || 640;
    this._webcamElement.height = this._webcamElement.height || this._webcamElement.width * (3 / 4);
    this._facingMode = facingMode;
    this._webcamList = [];
    this._streamList = [];
    this._selectedDeviceId = '';
    this._canvasElement = canvasElement;
    this._snapSoundElement = snapSoundElement;
  }

  _createClass(Webcam, [{
    key: "getVideoInputs",

    /* Get all video input devices info */
    value: function getVideoInputs(mediaDevices) {
      var _this = this;

      this._webcamList = [];
      mediaDevices.forEach(function (mediaDevice) {
        if (mediaDevice.kind === 'videoinput') {
          _this._webcamList.push(mediaDevice);
        }
      });

      if (this._webcamList.length == 1) {
        this._facingMode = 'user';
      }

      return this._webcamList;
    }
    /* Get media constraints */

  }, {
    key: "getMediaConstraints",
    value: function getMediaConstraints() {
      var videoConstraints = {};

      if (this._selectedDeviceId == '') {
        videoConstraints.facingMode = this._facingMode;
      } else {
        videoConstraints.deviceId = {
          exact: this._selectedDeviceId
        };
      }

      var constraints = {
        video: videoConstraints,
        audio: false
      };
      return constraints;
    }
    /* Select camera based on facingMode */

  }, {
    key: "selectCamera",
    value: function selectCamera() {
      var _iterator = _createForOfIteratorHelper(this._webcamList),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var webcam = _step.value;

          if (this._facingMode == 'user' && webcam.label.toLowerCase().includes('front') || this._facingMode == 'enviroment' && webcam.label.toLowerCase().includes('back')) {
            this._selectedDeviceId = webcam.deviceId;
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    /* Change Facing mode and selected camera */

  }, {
    key: "flip",
    value: function flip() {
      this._facingMode = this._facingMode == 'user' ? 'enviroment' : 'user';
      this._webcamElement.style.transform = "";
      this.selectCamera();
    }
    /*
      1. Get permission from user
      2. Get all video input devices info
      3. Select camera based on facingMode
      4. Start stream
    */

  }, {
    key: "start",
    value: function () {
      var _start = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this2 = this;

        var startStream,
            _args = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                startStream = _args.length > 0 && _args[0] !== undefined ? _args[0] : true;
                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  _this2.stop();

                  navigator.mediaDevices.getUserMedia(_this2.getMediaConstraints()) //get permisson from user
                  .then(function (stream) {
                    _this2._streamList.push(stream);

                    _this2.info() //get all video input devices info
                    .then(function (webcams) {
                      _this2.selectCamera(); //select camera based on facingMode


                      if (startStream) {
                        _this2.stream().then(function (facingMode) {
                          resolve(_this2._facingMode);
                        })["catch"](function (error) {
                          reject(error);
                        });
                      } else {
                        resolve(_this2._selectedDeviceId);
                      }
                    })["catch"](function (error) {
                      reject(error);
                    });
                  })["catch"](function (error) {
                    reject(error);
                  });
                }));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function start() {
        return _start.apply(this, arguments);
      }

      return start;
    }()
    /* Get all video input devices info */

  }, {
    key: "info",
    value: function () {
      var _info = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this3 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", new Promise(function (resolve, reject) {
                  navigator.mediaDevices.enumerateDevices().then(function (devices) {
                    _this3.getVideoInputs(devices);

                    resolve(_this3._webcamList);
                  })["catch"](function (error) {
                    reject(error);
                  });
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function info() {
        return _info.apply(this, arguments);
      }

      return info;
    }()
    /* Start streaming webcam to video element */

  }, {
    key: "stream",
    value: function () {
      var _stream = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _this4 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", new Promise(function (resolve, reject) {
                  navigator.mediaDevices.getUserMedia(_this4.getMediaConstraints()).then(function (stream) {
                    _this4._streamList.push(stream);

                    _this4._webcamElement.srcObject = stream;

                    if (_this4._facingMode == 'user') {
                      _this4._webcamElement.style.transform = "scale(-1,1)";
                    }

                    _this4._webcamElement.play();

                    resolve(_this4._facingMode);
                  })["catch"](function (error) {
                    console.log(error);
                    reject(error);
                  });
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function stream() {
        return _stream.apply(this, arguments);
      }

      return stream;
    }()
    /* Stop streaming webcam */

  }, {
    key: "stop",
    value: function stop() {
      this._streamList.forEach(function (stream) {
        stream.getTracks().forEach(function (track) {
          track.stop();
        });
      });
    }
  }, {
    key: "snap",
    value: function snap() {
      if (this._canvasElement != null) {
        if (this._snapSoundElement != null) {
          this._snapSoundElement.play();
        }

        this._canvasElement.height = this._webcamElement.scrollHeight;
        this._canvasElement.width = this._webcamElement.scrollWidth;

        var context = this._canvasElement.getContext('2d');

        if (this._facingMode == 'user') {
          context.translate(this._canvasElement.width, 0);
          context.scale(-1, 1);
        }

        context.clearRect(0, 0, this._canvasElement.width, this._canvasElement.height);
        context.drawImage(this._webcamElement, 0, 0, this._canvasElement.width, this._canvasElement.height);

        var data = this._canvasElement.toDataURL('image/png');

        return data;
      } else {
        throw "canvas element is missing";
      }
    }
  }, {
    key: "facingMode",
    get: function get() {
      return this._facingMode;
    },
    set: function set(value) {
      this._facingMode = value;
    }
  }, {
    key: "webcamList",
    get: function get() {
      return this._webcamList;
    }
  }, {
    key: "webcamCount",
    get: function get() {
      return this._webcamList.length;
    }
  }, {
    key: "selectedDeviceId",
    get: function get() {
      return this._selectedDeviceId;
    }
  }]);

  return Webcam;
}();



/***/ }),

/***/ "./resources/js/views/patient/Patient.vue":
/*!************************************************!*\
  !*** ./resources/js/views/patient/Patient.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Patient_vue_vue_type_template_id_491993ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Patient.vue?vue&type=template&id=491993ac&scoped=true& */ "./resources/js/views/patient/Patient.vue?vue&type=template&id=491993ac&scoped=true&");
/* harmony import */ var _Patient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Patient.vue?vue&type=script&lang=js& */ "./resources/js/views/patient/Patient.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Patient_vue_vue_type_style_index_0_id_491993ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Patient.vue?vue&type=style&index=0&id=491993ac&lang=scss&scoped=true& */ "./resources/js/views/patient/Patient.vue?vue&type=style&index=0&id=491993ac&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Patient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Patient_vue_vue_type_template_id_491993ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Patient_vue_vue_type_template_id_491993ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "491993ac",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/patient/Patient.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/patient/Patient.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/patient/Patient.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Patient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Patient.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/patient/Patient.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Patient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/patient/Patient.vue?vue&type=style&index=0&id=491993ac&lang=scss&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/views/patient/Patient.vue?vue&type=style&index=0&id=491993ac&lang=scss&scoped=true& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Patient_vue_vue_type_style_index_0_id_491993ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Patient.vue?vue&type=style&index=0&id=491993ac&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/patient/Patient.vue?vue&type=style&index=0&id=491993ac&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Patient_vue_vue_type_style_index_0_id_491993ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Patient_vue_vue_type_style_index_0_id_491993ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Patient_vue_vue_type_style_index_0_id_491993ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Patient_vue_vue_type_style_index_0_id_491993ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/patient/Patient.vue?vue&type=template&id=491993ac&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/patient/Patient.vue?vue&type=template&id=491993ac&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Patient_vue_vue_type_template_id_491993ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Patient.vue?vue&type=template&id=491993ac&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/patient/Patient.vue?vue&type=template&id=491993ac&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Patient_vue_vue_type_template_id_491993ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Patient_vue_vue_type_template_id_491993ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);