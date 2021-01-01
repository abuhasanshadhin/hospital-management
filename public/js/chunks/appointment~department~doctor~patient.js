(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["appointment~department~doctor~patient"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DataTable.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DataTable.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["headers", "resources"],
  data: function data() {
    return {
      startLength: 0,
      endLength: 0,
      showEntries: 10,
      searchQuery: "",
      totalLength: 0,
      currentPage: 1,
      searchKeys: []
    };
  },
  watch: {
    showEntries: function showEntries(val) {
      this.startLength = 0;
      this.endLength = val == "All" ? this.resources.length : val;
      this.currentPage = 1;
    },
    searchQuery: function searchQuery(val) {
      if (val) {
        this.startLength = 0;
        this.endLength = this.showEntries;
        this.currentPage = 1;
      }
    }
  },
  computed: {
    _resources: function _resources() {
      this.endLength = this.endLength > 0 ? this.endLength : this.showEntries;
      var fr = this.filteredResources(this.resources, this.startLength, this.endLength, this.searchQuery);
      this.totalLength = fr._length;
      return fr._data;
    },
    _totalPage: function _totalPage() {
      return Math.ceil(this.totalLength / this.showEntries);
    }
  },
  created: function created() {
    this.searchKeys = this.headers.map(function (h) {
      if (h.search != undefined && h.search == true) return h.key;
    });
    this.searchKeys = this.searchKeys.filter(function (k) {
      return k != undefined;
    });
    if (!this.searchKeys.length) this.searchKeys = this.headers.map(function (h) {
      return h.key;
    });
  },
  methods: {
    paginate: function paginate(pageNumber) {
      var sE = this.showEntries;
      this.currentPage = pageNumber;
      this.startLength = sE * (pageNumber - 1);
      this.endLength = this.startLength + sE;
    },
    filteredResources: function filteredResources(data, startLength, showEntries, searchQuery) {
      if (searchQuery) {
        var filteredData = this.searchData(data, searchQuery);
        return {
          _data: filteredData.slice(startLength, showEntries),
          _length: filteredData.length
        };
      } else {
        return {
          _data: data.slice(startLength, showEntries),
          _length: data.length
        };
      }
    },
    searchData: function searchData(data, query) {
      var _query = query.toLowerCase();

      var searchKeys = this.searchKeys;
      return data.filter(function (item) {
        for (var i = 0; i < searchKeys.length; i++) {
          var _item = String(item[searchKeys[i]]).toLowerCase();

          if (_item.indexOf(_query) !== -1) return true;
        }

        return false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DataTable.vue?vue&type=template&id=4b997e69&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DataTable.vue?vue&type=template&id=4b997e69& ***!
  \************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row mb-3" }, [
      _c("div", { staticClass: "col-md-4" }, [
        _c("div", { staticClass: "d-flex" }, [
          _c("div", { staticClass: "mr-2 mt-1" }, [_vm._v("Show :")]),
          _vm._v(" "),
          _c("div", { staticClass: "mr-2" }, [
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model.number",
                    value: _vm.showEntries,
                    expression: "showEntries",
                    modifiers: { number: true }
                  }
                ],
                staticClass: "form-control",
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return _vm._n(val)
                      })
                    _vm.showEntries = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  }
                }
              },
              _vm._l([10, 25, 50, 100, "All"], function(i) {
                return _c("option", { key: i, domProps: { value: i } }, [
                  _vm._v("\n              " + _vm._s(i) + "\n            ")
                ])
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mt-1" }, [_vm._v("entries")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4 ml-auto" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.searchQuery,
              expression: "searchQuery"
            }
          ],
          staticClass: "form-control",
          attrs: { type: "text", placeholder: "Search" },
          domProps: { value: _vm.searchQuery },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.searchQuery = $event.target.value
            }
          }
        })
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "table-responsive" }, [
      _c("table", { staticClass: "table table-bordered" }, [
        _c("thead", [
          _c(
            "tr",
            _vm._l(_vm.headers, function(header, hInd) {
              return _c("th", { key: hInd }, [
                _vm._v("\n            " + _vm._s(header.text) + "\n          ")
              ])
            }),
            0
          )
        ]),
        _vm._v(" "),
        _c(
          "tbody",
          [
            _vm._resources.length
              ? _vm._l(_vm._resources, function(resource, ind) {
                  return _c(
                    "tr",
                    { key: ind },
                    _vm._l(_vm.headers, function(_header, _hInd) {
                      return _c(
                        "td",
                        { key: _hInd },
                        [
                          _vm._t(
                            _header.key,
                            [
                              _vm._v(
                                "\n                " +
                                  _vm._s(resource[_header.key]) +
                                  "\n              "
                              )
                            ],
                            { item: resource, i: ind, start: _vm.startLength }
                          )
                        ],
                        2
                      )
                    }),
                    0
                  )
                })
              : [
                  _c("tr", [
                    _c("td", { attrs: { colspan: _vm.headers.length } }, [
                      _c("div", { staticClass: "text-center" }, [
                        _vm._v("No data available in this table")
                      ])
                    ])
                  ])
                ]
          ],
          2
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "clearfix" }, [
      _c("div", { staticClass: "float-left" }, [
        _vm._v(
          "\n      Showing " +
            _vm._s(_vm.startLength + 1) +
            " to\n      " +
            _vm._s(_vm.startLength + _vm._resources.length) +
            " of " +
            _vm._s(_vm.totalLength) +
            " entries\n    "
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "float-right" }, [
        _vm._totalPage > 1
          ? _c("nav", { attrs: { "aria-label": "Page navigation example" } }, [
              _c(
                "ul",
                { staticClass: "pagination" },
                [
                  _c(
                    "li",
                    {
                      staticClass: "page-item",
                      class: { disabled: _vm.currentPage < 2 }
                    },
                    [
                      _c(
                        "a",
                        {
                          staticClass: "page-link",
                          attrs: {
                            href: "javascript:",
                            "aria-label": "Previous"
                          },
                          on: {
                            click: function($event) {
                              return _vm.paginate(_vm.currentPage - 1)
                            }
                          }
                        },
                        [
                          _c(
                            "span",
                            { staticStyle: { "user-select": "none" } },
                            [_vm._v("Previous")]
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _vm._l(_vm._totalPage, function(page, ind) {
                    return _c(
                      "li",
                      {
                        key: ind,
                        staticClass: "page-item",
                        class: { active: page == _vm.currentPage }
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "page-link",
                            attrs: { href: "javascript:" },
                            on: {
                              click: function($event) {
                                return _vm.paginate(page)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n              " +
                                _vm._s(page) +
                                "\n            "
                            )
                          ]
                        )
                      ]
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "page-item",
                      class: { disabled: _vm.currentPage > _vm._totalPage - 1 }
                    },
                    [
                      _c(
                        "a",
                        {
                          staticClass: "page-link",
                          attrs: { href: "javascript:", "aria-label": "Next" },
                          on: {
                            click: function($event) {
                              return _vm.paginate(_vm.currentPage + 1)
                            }
                          }
                        },
                        [
                          _c(
                            "span",
                            { staticStyle: { "user-select": "none" } },
                            [_vm._v("Next")]
                          )
                        ]
                      )
                    ]
                  )
                ],
                2
              )
            ])
          : _vm._e()
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/DataTable.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/DataTable.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DataTable_vue_vue_type_template_id_4b997e69___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataTable.vue?vue&type=template&id=4b997e69& */ "./resources/js/components/DataTable.vue?vue&type=template&id=4b997e69&");
/* harmony import */ var _DataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataTable.vue?vue&type=script&lang=js& */ "./resources/js/components/DataTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DataTable_vue_vue_type_template_id_4b997e69___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DataTable_vue_vue_type_template_id_4b997e69___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/DataTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/DataTable.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/DataTable.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DataTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DataTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/DataTable.vue?vue&type=template&id=4b997e69&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/DataTable.vue?vue&type=template&id=4b997e69& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_template_id_4b997e69___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DataTable.vue?vue&type=template&id=4b997e69& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DataTable.vue?vue&type=template&id=4b997e69&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_template_id_4b997e69___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_template_id_4b997e69___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);