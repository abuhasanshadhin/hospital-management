(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["doctor"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/doctor/Doctor.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/doctor/Doctor.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _department_Department__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../department/Department */ "./resources/js/pages/department/Department.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    DepartmentModal: _department_Department__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      selectedDepartment: null,
      doctor: {
        name: "",
        phone: "",
        email: "",
        date_of_birth: new Date(),
        gender: "",
        blood_group: "",
        address: "",
        department_id: null,
        specialization: "",
        education: "",
        photo: null,
        joining_date: null,
        status: 1
      },
      photoPreview: null,
      notFoundImage: "".concat(window.publicPath, "/images/doctor-image-not-available.png"),
      loading: false,
      btnDisabled: false,
      doctorEditId: null
    };
  },
  watch: {
    selectedDepartment: function selectedDepartment(department) {
      if (department == null) return;
      this.doctor.department_id = department.id;
    }
  },
  created: function created() {
    var doctorEditId = this.$route.params.id;
    if (doctorEditId != undefined) this.editDoctor(doctorEditId);
  },
  methods: {
    showDepartmentAddModal: function showDepartmentAddModal() {
      this.$refs.departmentAddModal.isModalShow = true;
    },
    onPhotoChange: function onPhotoChange() {
      if (event.target.files.length == 0) return;
      var file = event.target.files[0];
      this.photoPreview = URL.createObjectURL(file);
      this.doctor.photo = file;
    },
    saveDoctor: function saveDoctor() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var props, doctorData, doctorForm, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                props = ["name", "phone", "gender", "address", "department_id", "specialization"];

                if (!_utils_validation__WEBPACK_IMPORTED_MODULE_3__["default"].empty(props, _this.doctor)) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                _this.loading = _this.btnDisabled = true;
                doctorData = _objectSpread({}, _this.doctor);

                if (doctorData.date_of_birth) {
                  doctorData.date_of_birth = moment__WEBPACK_IMPORTED_MODULE_1___default()(doctorData.date_of_birth).format("YYYY-MM-DD");
                }

                if (doctorData.joining_date) {
                  doctorData.joining_date = moment__WEBPACK_IMPORTED_MODULE_1___default()(doctorData.joining_date).format("YYYY-MM-DD");
                }

                doctorForm = new FormData();
                Object.keys(doctorData).map(function (k) {
                  if (doctorData[k] == null) {
                    doctorForm.append(k, "");
                  } else {
                    doctorForm.append(k, doctorData[k]);
                  }
                });

                if (!_this.doctorEditId) {
                  _context.next = 15;
                  break;
                }

                doctorForm.append("id", _this.doctorEditId);
                _context.next = 13;
                return _this.$store.dispatch("doctor/processDoctor", {
                  url: "update_doctor",
                  data: doctorForm
                });

              case 13:
                _context.next = 19;
                break;

              case 15:
                _context.next = 17;
                return _this.$store.dispatch("doctor/processDoctor", {
                  url: "add_doctor",
                  data: doctorForm
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
    resetForm: function resetForm() {
      var _this2 = this;

      Object.keys(this.doctor).map(function (k) {
        return _this2.doctor[k] = "";
      });
      this.selectedDepartment = this.doctor.department_id = null;
      this.doctor.photo = this.photoPreview = null;
      this.$refs.doctorPhoto.value = null;
      this.doctor.date_of_birth = new Date();
      this.doctor.status = 1;
    },
    editDoctor: function editDoctor(doctor_id) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var doctor;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this3.$store.dispatch("doctor/getDoctor", doctor_id);

              case 2:
                doctor = _context2.sent;

                if (!(doctor == null)) {
                  _context2.next = 6;
                  break;
                }

                _this3.$router.push("/doctors");

                return _context2.abrupt("return");

              case 6:
                _this3.doctorEditId = doctor_id;
                _context2.next = 9;
                return _this3.$store.dispatch("department/getDepartments");

              case 9:
                Object.keys(_this3.doctor).map(function (k) {
                  return _this3.doctor[k] = doctor[k];
                });

                if (_this3.doctor.photo) {
                  _this3.photoPreview = "".concat(window.publicPath, "/").concat(_this3.doctor.photo);
                  _this3.doctor.photo = null;
                }

                _this3.$store.getters["department/departments"].forEach(function (dept) {
                  if (dept.id == doctor.department_id) _this3.selectedDepartment = dept;
                });

                if (doctor.date_of_birth) {
                  _this3.doctor.date_of_birth = new Date(doctor.date_of_birth);
                }

                if (doctor.joining_date) {
                  _this3.doctor.joining_date = new Date(doctor.joining_date);
                }

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    disabledAfterToday: function disabledAfterToday(date) {
      var today = new Date();
      today.setHours(0, 0, 0, 0);
      return date > today;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/doctor/Doctor.vue?vue&type=style&index=0&id=054cd616&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/doctor/Doctor.vue?vue&type=style&index=0&id=054cd616&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".doctor-image-preview[data-v-054cd616] {\n  height: 150px;\n  width: 150px;\n  margin-top: 50px;\n  object-fit: contain;\n}\n", ""]);

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/doctor/Doctor.vue?vue&type=style&index=0&id=054cd616&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/doctor/Doctor.vue?vue&type=style&index=0&id=054cd616&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Doctor.vue?vue&type=style&index=0&id=054cd616&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/doctor/Doctor.vue?vue&type=style&index=0&id=054cd616&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/doctor/Doctor.vue?vue&type=template&id=054cd616&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/doctor/Doctor.vue?vue&type=template&id=054cd616&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "card-header py-2" }, [
          _c("div", { staticClass: "clearfix" }, [
            _c("div", { staticClass: "float-left" }, [
              _c(
                "h5",
                { staticClass: "m-0 font-weight-bold text-primary" },
                [
                  _vm.doctorEditId
                    ? [
                        _vm._v(
                          "\n                            Edit Doctor\n                        "
                        )
                      ]
                    : [_vm._v(" Add New Doctor ")]
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
                    attrs: { to: "/doctors" }
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
        _c("div", { staticClass: "card-body" }, [
          _c(
            "form",
            {
              attrs: { method: "POST" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.saveDoctor($event)
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
                            value: _vm.doctor.name,
                            expression: "doctor.name",
                            modifiers: { trim: true }
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.doctor.name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.doctor,
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
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.trim",
                            value: _vm.doctor.phone,
                            expression: "doctor.phone",
                            modifiers: { trim: true }
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.doctor.phone },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.doctor,
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
                    _c("label", { staticClass: "col-md-4 text-right" }, [
                      _vm._v("Email")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-8" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.trim",
                            value: _vm.doctor.email,
                            expression: "doctor.email",
                            modifiers: { trim: true }
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.doctor.email },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.doctor,
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
                      _vm._v("Date of Birth")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-8" },
                      [
                        _c("date-picker", {
                          attrs: {
                            "disabled-date": _vm.disabledAfterToday,
                            editable: false
                          },
                          model: {
                            value: _vm.doctor.date_of_birth,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.doctor,
                                "date_of_birth",
                                typeof $$v === "string" ? $$v.trim() : $$v
                              )
                            },
                            expression: "doctor.date_of_birth"
                          }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row mb-1" }, [
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
                                rawName: "v-model",
                                value: _vm.doctor.gender,
                                expression: "doctor.gender"
                              }
                            ],
                            staticClass: "custom-control-input",
                            attrs: { type: "radio", value: "Male", id: "cr1" },
                            domProps: {
                              checked: _vm._q(_vm.doctor.gender, "Male")
                            },
                            on: {
                              change: function($event) {
                                return _vm.$set(_vm.doctor, "gender", "Male")
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
                                rawName: "v-model",
                                value: _vm.doctor.gender,
                                expression: "doctor.gender"
                              }
                            ],
                            staticClass: "custom-control-input",
                            attrs: {
                              type: "radio",
                              value: "Female",
                              id: "cr2"
                            },
                            domProps: {
                              checked: _vm._q(_vm.doctor.gender, "Female")
                            },
                            on: {
                              change: function($event) {
                                return _vm.$set(_vm.doctor, "gender", "Female")
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
                            [_vm._v("Female")]
                          )
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c("label", { staticClass: "col-md-4 text-right" }, [
                      _vm._v("Blood Group")
                    ]),
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
                            value: _vm.doctor.blood_group,
                            callback: function($$v) {
                              _vm.$set(_vm.doctor, "blood_group", $$v)
                            },
                            expression: "doctor.blood_group"
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
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.trim",
                            value: _vm.doctor.address,
                            expression: "doctor.address",
                            modifiers: { trim: true }
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { rows: "2" },
                        domProps: { value: _vm.doctor.address },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.doctor,
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
                    _vm._m(4),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-7 pr-1" },
                      [
                        _c("v-select", {
                          attrs: {
                            options:
                              _vm.$store.getters["department/departments"],
                            label: "name"
                          },
                          on: {
                            "search:focus": function($event) {
                              return _vm.$store.dispatch(
                                "department/getDepartments",
                                { status: true }
                              )
                            }
                          },
                          model: {
                            value: _vm.selectedDepartment,
                            callback: function($$v) {
                              _vm.selectedDepartment = $$v
                            },
                            expression: "selectedDepartment"
                          }
                        }),
                        _vm._v(" "),
                        _vm.$store.getters["department/loading"]
                          ? _c("div", { staticClass: "slider slider-sm" }, [
                              _c("div", { staticClass: "line" }),
                              _vm._v(" "),
                              _c("div", { staticClass: "sub-line inc" }),
                              _vm._v(" "),
                              _c("div", { staticClass: "sub-line dec" })
                            ])
                          : _vm._e()
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-1 pl-0" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary btn-sm rounded-circle",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.showDepartmentAddModal($event)
                            }
                          }
                        },
                        [_c("i", { staticClass: "fa fa-plus" })]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c("label", { staticClass: "col-md-4 text-right" }, [
                      _vm._v("Joining Date")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-8" },
                      [
                        _c("date-picker", {
                          attrs: { editable: false },
                          model: {
                            value: _vm.doctor.joining_date,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.doctor,
                                "joining_date",
                                typeof $$v === "string" ? $$v.trim() : $$v
                              )
                            },
                            expression: "doctor.joining_date"
                          }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _vm._m(5),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-8" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.trim",
                            value: _vm.doctor.specialization,
                            expression: "doctor.specialization",
                            modifiers: { trim: true }
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.doctor.specialization },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.doctor,
                              "specialization",
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
                      _vm._v("Education")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-8" }, [
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.trim",
                            value: _vm.doctor.education,
                            expression: "doctor.education",
                            modifiers: { trim: true }
                          }
                        ],
                        staticClass: "form-control",
                        staticStyle: { height: "60px" },
                        domProps: { value: _vm.doctor.education },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.doctor,
                              "education",
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
                    _c("div", { staticClass: "col-md-8" }, [
                      _c("input", {
                        ref: "doctorPhoto",
                        staticClass: "form-control",
                        attrs: { type: "file" },
                        on: { change: _vm.onPhotoChange }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c("label", { staticClass: "col-md-4 text-right" }, [
                      _vm._v("Status")
                    ]),
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
                                value: _vm.doctor.status,
                                expression: "doctor.status"
                              }
                            ],
                            staticClass: "custom-control-input",
                            attrs: { type: "radio", value: "1", id: "s1" },
                            domProps: {
                              checked: _vm._q(_vm.doctor.status, "1")
                            },
                            on: {
                              change: function($event) {
                                return _vm.$set(_vm.doctor, "status", "1")
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
                                value: _vm.doctor.status,
                                expression: "doctor.status"
                              }
                            ],
                            staticClass: "custom-control-input",
                            attrs: { type: "radio", value: "0", id: "s2" },
                            domProps: {
                              checked: _vm._q(_vm.doctor.status, "0")
                            },
                            on: {
                              change: function($event) {
                                return _vm.$set(_vm.doctor, "status", "0")
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
                        !_vm.doctorEditId
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
                                  _vm.doctorEditId
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
                    staticClass: "doctor-image-preview",
                    attrs: {
                      src: _vm.photoPreview
                        ? _vm.photoPreview
                        : _vm.notFoundImage,
                      alt: "Doctor Photo Preview"
                    }
                  })
                ])
              ])
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("department-modal", { ref: "departmentAddModal" })
    ],
    1
  )
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
    return _c("label", { staticClass: "col-md-4 text-right" }, [
      _vm._v("Phone No\n                                "),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "col-md-4 text-right" }, [
      _vm._v("Gender\n                                "),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "col-md-4 text-right" }, [
      _vm._v("Address\n                                "),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "col-md-4 text-right" }, [
      _vm._v("Department\n                                "),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "col-md-4 text-right" }, [
      _vm._v("Specialization\n                                "),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/doctor/Doctor.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/doctor/Doctor.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Doctor_vue_vue_type_template_id_054cd616_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Doctor.vue?vue&type=template&id=054cd616&scoped=true& */ "./resources/js/pages/doctor/Doctor.vue?vue&type=template&id=054cd616&scoped=true&");
/* harmony import */ var _Doctor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Doctor.vue?vue&type=script&lang=js& */ "./resources/js/pages/doctor/Doctor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Doctor_vue_vue_type_style_index_0_id_054cd616_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Doctor.vue?vue&type=style&index=0&id=054cd616&lang=scss&scoped=true& */ "./resources/js/pages/doctor/Doctor.vue?vue&type=style&index=0&id=054cd616&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Doctor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Doctor_vue_vue_type_template_id_054cd616_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Doctor_vue_vue_type_template_id_054cd616_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "054cd616",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/doctor/Doctor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/doctor/Doctor.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/doctor/Doctor.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Doctor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Doctor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/doctor/Doctor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Doctor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/doctor/Doctor.vue?vue&type=style&index=0&id=054cd616&lang=scss&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/pages/doctor/Doctor.vue?vue&type=style&index=0&id=054cd616&lang=scss&scoped=true& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Doctor_vue_vue_type_style_index_0_id_054cd616_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Doctor.vue?vue&type=style&index=0&id=054cd616&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/doctor/Doctor.vue?vue&type=style&index=0&id=054cd616&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Doctor_vue_vue_type_style_index_0_id_054cd616_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Doctor_vue_vue_type_style_index_0_id_054cd616_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Doctor_vue_vue_type_style_index_0_id_054cd616_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Doctor_vue_vue_type_style_index_0_id_054cd616_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/doctor/Doctor.vue?vue&type=template&id=054cd616&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/pages/doctor/Doctor.vue?vue&type=template&id=054cd616&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Doctor_vue_vue_type_template_id_054cd616_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Doctor.vue?vue&type=template&id=054cd616&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/doctor/Doctor.vue?vue&type=template&id=054cd616&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Doctor_vue_vue_type_template_id_054cd616_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Doctor_vue_vue_type_template_id_054cd616_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
        propName = propName.replace("_", " ");
        var message = "The ".concat(propName, " field is required");
        snackbar.warning(message, "topRight");
        break;
      }
    }

    return hasError ? true : false;
  }
});

/***/ })

}]);