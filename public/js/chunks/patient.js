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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      webCamList: [],
      isWebCamStarted: false,
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
    init: function init() {
      this.webCamObj = this._webCam();
      this.openCamera();
    },
    openCamera: function openCamera() {
      var _this = this;

      if (this.webCamObj == null) return;
      this.webCamObj.start().then(function (result) {
        _this.webCamList = _this.webCamObj.webcamList;
        _this.isWebCamStarted = true;
        console.log("Webcam Started");
      })["catch"](function (err) {
        console.log(err);
      });
    },
    onChangeCamera: function onChangeCamera(e) {
      if (this.webCamObj == null) return;
      var _deviceId = e.target.value;
      this.webCamObj._selectedDeviceId = _deviceId;
      this.webCamObj.stop();
      this.isWebCamStarted = false;
      this.openCamera();
    },
    flipWebCam: function flipWebCam() {
      if (this.webCamObj == null) return;
      this.webCamObj.flip();
      this.stopWebCam();
      this.openCamera();
    },
    takePhoto: function takePhoto() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var picture, file;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this2.webCamObj == null || !_this2.isWebCamStarted)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                picture = _this2.webCamObj.snap();

                _this2.closeWebCam();

                _context.next = 6;
                return _this2.dataUrlToFile(picture);

              case 6:
                file = _context.sent;

                _this2.$parent.getCapturedFile(file); // parent component method called


              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    stopWebCam: function stopWebCam() {
      if (this.webCamObj == null) return;
      this.webCamObj.stop();
      this.isWebCamStarted = false;
    },
    closeWebCam: function closeWebCam() {
      this.stopWebCam();
      this.webCamList = [];
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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Webcam__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Webcam */ "./resources/js/components/Webcam.vue");
/* harmony import */ var _utils_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/validation */ "./resources/js/utils/validation.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Webcam: _components_Webcam__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      patient: {
        name: "",
        gender: "",
        date_of_birth: "",
        age: 0,
        blood_group: "",
        phone_number: "",
        phone_number_2: "",
        address: "",
        email: "",
        note: "",
        status: 1
      },
      photo: null,
      photoPreview: null,
      notFoundImage: "".concat(window.publicPath, "/images/image-not-available.png"),
      loading: false,
      btnDisabled: false,
      patientEditId: null
    };
  },
  watch: {
    "patient.date_of_birth": function patientDate_of_birth(val) {
      if (!val) return;
      var dob = moment__WEBPACK_IMPORTED_MODULE_1___default()(val).format("YYYY-MM-DD");
      this.patient.age = this.getAge(dob);
    }
  },
  created: function created() {
    var patientId = this.$route.params.id;
    if (patientId != undefined) this.editPatient(patientId);
  },
  methods: {
    savePatient: function savePatient() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var props, patientInfo, patientForm, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                props = ["name", "gender", "age", "phone_number", "address"];

                if (!_utils_validation__WEBPACK_IMPORTED_MODULE_3__["default"].empty(props, _this.patient)) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                _this.loading = _this.btnDisabled = true;
                patientInfo = _objectSpread({}, _this.patient);

                if (patientInfo.date_of_birth) {
                  patientInfo.date_of_birth = moment__WEBPACK_IMPORTED_MODULE_1___default()(patientInfo.date_of_birth).format("YYYY-MM-DD");
                }

                patientForm = new FormData();
                Object.keys(patientInfo).map(function (k) {
                  if (patientInfo[k]) patientForm.append(k, patientInfo[k]);
                });
                if (_this.photo) patientForm.append("photo", _this.photo);

                if (!_this.patientEditId) {
                  _context.next = 15;
                  break;
                }

                patientForm.append("id", _this.patientEditId);
                _context.next = 13;
                return _this.$store.dispatch("patient/processPatient", {
                  url: "update_patient",
                  data: patientForm
                });

              case 13:
                _context.next = 19;
                break;

              case 15:
                _context.next = 17;
                return _this.$store.dispatch("patient/processPatient", {
                  url: "add_patient",
                  data: patientForm
                });

              case 17:
                res = _context.sent;
                if (res) _this.resetForm();

              case 19:
                _this.loading = _this.btnDisabled = false;

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    editPatient: function editPatient(patient_id) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var patient;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.$store.dispatch("patient/getPatient", patient_id);

              case 2:
                patient = _context2.sent;

                if (!(patient == null)) {
                  _context2.next = 6;
                  break;
                }

                _this2.$router.push("/patients");

                return _context2.abrupt("return");

              case 6:
                _this2.patientEditId = patient_id;
                Object.keys(_this2.patient).map(function (k) {
                  return _this2.patient[k] = patient[k];
                });

                if (patient.photo) {
                  _this2.photoPreview = "".concat(window.publicPath, "/").concat(patient.photo);
                }

                if (patient.date_of_birth) {
                  _this2.patient.date_of_birth = new Date(patient.date_of_birth);
                }

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    resetForm: function resetForm() {
      var _this3 = this;

      Object.keys(this.patient).map(function (k) {
        return _this3.patient[k] = "";
      });
      this.patient.age = 0;
      this.patient.status = 1;
      this.photo = this.photoPreview = null;
    },
    onPhotoChange: function onPhotoChange() {
      if (event.target.files.length == 0) return;
      var file = event.target.files[0];
      this.photo = file;
      this.photoPreview = URL.createObjectURL(file);
    },
    webCamEnable: function webCamEnable() {
      this.$refs.webCam.cameraShow = true;
      this.$refs.webCam.init();
    },
    // This method called from Webcam component
    getCapturedFile: function getCapturedFile(file) {
      this.photo = file;
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
    },
    disabledAfterToday: function disabledAfterToday(date) {
      var today = new Date();
      today.setHours(0, 0, 0, 0);
      return date > today;
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
exports.push([module.i, ".custom-modal-body[data-v-6c8d3ca6] {\n  height: 390px;\n  width: 460px;\n  padding: 10px;\n}\n.custom-modal-body video[data-v-6c8d3ca6] {\n  width: 100%;\n  height: 330px;\n  background: black;\n}\n.custom-modal-body .v-wrapper[data-v-6c8d3ca6] {\n  position: relative;\n}\n.custom-modal-body .v-wrapper .flip-webcam[data-v-6c8d3ca6] {\n  position: absolute;\n  left: 0;\n  bottom: 6px;\n  border: none;\n  color: #fff;\n  background: rgba(0, 0, 0, 0.6);\n  padding-top: 3px;\n}\n.custom-modal-body .v-wrapper .flip-webcam[data-v-6c8d3ca6]:focus {\n  outline: 0;\n}\n.custom-modal-body .buttons[data-v-6c8d3ca6] {\n  padding-top: 3px;\n}\n.custom-modal-body .buttons button[data-v-6c8d3ca6] {\n  padding: 3px 15px;\n  border-radius: unset;\n}\n.custom-modal-body .webcam-list[data-v-6c8d3ca6] {\n  margin-top: 3px;\n  padding: 5px 10px;\n}\n", ""]);

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

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

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
          _c("div", { staticClass: "v-wrapper" }, [
            _c("video", {
              attrs: {
                id: "webcam",
                autoplay: "",
                playsinline: "",
                oncontextmenu: "return false"
              }
            }),
            _vm._v(" "),
            _c("canvas", { staticClass: "d-none", attrs: { id: "canvas" } }),
            _vm._v(" "),
            _c("audio", {
              attrs: { id: "snapSound", src: _vm.snapSound, preload: "auto" }
            }),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "flip-webcam",
                attrs: { type: "button", disabled: !_vm.isWebCamStarted },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.flipWebCam($event)
                  }
                }
              },
              [_c("i", { staticClass: "fab fa-flipboard fa-2x" })]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "clearfix" }, [
            _c("div", { staticClass: "float-left" }, [
              _c(
                "select",
                {
                  staticClass: "form-control form-control-sm webcam-list",
                  attrs: { disabled: !_vm.webCamList.length },
                  on: {
                    change: function($event) {
                      return _vm.onChangeCamera($event)
                    }
                  }
                },
                _vm._l(_vm.webCamList, function(_webCam, i) {
                  return _c(
                    "option",
                    { key: i, domProps: { value: _webCam.deviceId } },
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(_webCam.label) +
                          "\n                        "
                      )
                    ]
                  )
                }),
                0
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "float-right buttons" }, [
              _c(
                "button",
                {
                  staticClass: "btn-dark btn",
                  attrs: { type: "button", disabled: !_vm.isWebCamStarted },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.closeWebCam($event)
                    }
                  }
                },
                [
                  _vm._v(
                    "\n                        Close\n                    "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn-primary btn",
                  attrs: { type: "button", disabled: !_vm.isWebCamStarted },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.takePhoto($event)
                    }
                  }
                },
                [
                  _vm._v(
                    "\n                        Take Photo\n                    "
                  )
                ]
              )
            ])
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
          _c("div", { staticClass: "float-left" }, [
            _c(
              "h4",
              { staticClass: "m-0 font-weight-bold text-primary" },
              [
                _vm.patientEditId
                  ? [_vm._v("Edit Patient")]
                  : [_vm._v("Add New Patient")]
              ],
              2
            )
          ]),
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
          _c(
            "form",
            {
              attrs: { method: "POST" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.savePatient($event)
                }
              }
            },
            [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-5" }, [
                  _c("div", { staticClass: "form-group row" }, [
                    _vm._m(0),
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
                    _vm._m(1),
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
                      {
                        staticClass: "col-md-4 text-right",
                        attrs: { for: "" }
                      },
                      [_vm._v("Date of Birth")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-4 pr-0" },
                      [
                        _c("date-picker", {
                          attrs: {
                            "disabled-date": _vm.disabledAfterToday,
                            editable: false
                          },
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
                    _vm._m(2),
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
                      {
                        staticClass: "col-md-4 text-right",
                        attrs: { for: "" }
                      },
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
                            value: _vm.patient.phone_number,
                            expression: "patient.phone_number",
                            modifiers: { trim: true }
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.patient.phone_number },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.patient,
                              "phone_number",
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
                      {
                        staticClass: "col-md-4 text-right",
                        attrs: { for: "" }
                      },
                      [_vm._v("Phone No 2")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-8" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.trim",
                            value: _vm.patient.phone_number_2,
                            expression: "patient.phone_number_2",
                            modifiers: { trim: true }
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.patient.phone_number_2 },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.patient,
                              "phone_number_2",
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
                      {
                        staticClass: "col-md-4 text-right",
                        attrs: { for: "" }
                      },
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
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-5" }, [
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
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c("label", { staticClass: "col-md-4 text-right" }, [
                      _vm._v("Photo")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6 pr-0" }, [
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
                      {
                        staticClass: "col-md-4 text-right",
                        attrs: { for: "" }
                      },
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
                      {
                        staticClass: "col-md-4 text-right",
                        attrs: { for: "" }
                      },
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
                                rawName: "v-model",
                                value: _vm.patient.status,
                                expression: "patient.status"
                              }
                            ],
                            staticClass: "custom-control-input",
                            attrs: { type: "radio", value: "1", id: "s1" },
                            domProps: {
                              checked: _vm._q(_vm.patient.status, "1")
                            },
                            on: {
                              change: function($event) {
                                return _vm.$set(_vm.patient, "status", "1")
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
                                rawName: "v-model",
                                value: _vm.patient.status,
                                expression: "patient.status"
                              }
                            ],
                            staticClass: "custom-control-input",
                            attrs: { type: "radio", value: "0", id: "s2" },
                            domProps: {
                              checked: _vm._q(_vm.patient.status, "0")
                            },
                            on: {
                              change: function($event) {
                                return _vm.$set(_vm.patient, "status", "0")
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
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "div",
                      { staticClass: "col-md-8 offset-md-4 text-right" },
                      [
                        !_vm.patientEditId
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-dark c-btn",
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
                                _vm._v(
                                  " Reset\n                                "
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary c-btn",
                            attrs: { type: "submit", disabled: _vm.btnDisabled }
                          },
                          [
                            _vm.loading
                              ? _c("i", {
                                  staticClass: "fa fa-spinner fa-spin"
                                })
                              : [
                                  _c("i", { staticClass: "fa fa-save" }),
                                  _vm._v(
                                    " Save\n                                        "
                                  ),
                                  _vm.patientEditId
                                    ? [_vm._v("Changes")]
                                    : _vm._e()
                                ]
                          ],
                          2
                        )
                      ]
                    )
                  ])
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
            ]
          ),
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
      {
        staticClass: "col-md-4 text-right",
        staticStyle: { "margin-bottom": "3px" },
        attrs: { for: "" }
      },
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
    return _c("div", { staticClass: "col-md-2 text-right" }, [
      _vm._v("\n                                Age "),
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

/***/ "./resources/js/utils/validation.js":
/*!******************************************!*\
  !*** ./resources/js/utils/validation.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  empty: function empty(propsArray, dataObject) {
    var hasError = 0;

    for (var i = 0; i < propsArray.length; i++) {
      var prop = propsArray[i];

      if (!dataObject[prop]) {
        hasError++;
        var propName = prop.replace("_id", "");
        propName = prop.replace("_", " ");
        var message = "The ".concat(propName, " field is required");
        snackbar.warning(message, "topRight");
        break;
      }
    }

    return hasError ? true : false;
  }
});

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