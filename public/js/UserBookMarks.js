"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["UserBookMarks"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/posts/BookmarkedPosts.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/posts/BookmarkedPosts.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "BookmarkedPosts",
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        root = _ref.root;

    var bookmarkPost = function bookmarkPost(post) {
      post.is_bookmarked = !post.is_bookmarked;
      var reqType = post.is_bookmarked ? "post" : "delete";
      axios[reqType]("/api/bookmarks/".concat(post.slug)).then(function (data) {});
    };

    return {
      bookmarkPost: bookmarkPost
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/User/UserBookmarkedPost.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/User/UserBookmarkedPost.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _components_posts_BookmarkedPosts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/posts/BookmarkedPosts */ "./resources/js/components/posts/BookmarkedPosts.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "UserBookmarkedPost",
  components: {
    BookmarkedPosts: _components_posts_BookmarkedPosts__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  setup: function setup() {
    var posts = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
    var user = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__.ref)(null); // created hook

    axios.get("/api/bookmarked-posts").then(function (_ref) {
      var data = _ref.data;
      posts.value = data.posts;
      user.value = data.user;
    });
    return {
      posts: posts,
      user: user
    };
  }
});

/***/ }),

/***/ "./resources/js/components/posts/BookmarkedPosts.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/posts/BookmarkedPosts.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BookmarkedPosts_vue_vue_type_template_id_cd11b832___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BookmarkedPosts.vue?vue&type=template&id=cd11b832& */ "./resources/js/components/posts/BookmarkedPosts.vue?vue&type=template&id=cd11b832&");
/* harmony import */ var _BookmarkedPosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookmarkedPosts.vue?vue&type=script&lang=js& */ "./resources/js/components/posts/BookmarkedPosts.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BookmarkedPosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BookmarkedPosts_vue_vue_type_template_id_cd11b832___WEBPACK_IMPORTED_MODULE_0__.render,
  _BookmarkedPosts_vue_vue_type_template_id_cd11b832___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/posts/BookmarkedPosts.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/User/UserBookmarkedPost.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/User/UserBookmarkedPost.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserBookmarkedPost_vue_vue_type_template_id_025d7f56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserBookmarkedPost.vue?vue&type=template&id=025d7f56& */ "./resources/js/views/User/UserBookmarkedPost.vue?vue&type=template&id=025d7f56&");
/* harmony import */ var _UserBookmarkedPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserBookmarkedPost.vue?vue&type=script&lang=js& */ "./resources/js/views/User/UserBookmarkedPost.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserBookmarkedPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserBookmarkedPost_vue_vue_type_template_id_025d7f56___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserBookmarkedPost_vue_vue_type_template_id_025d7f56___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/User/UserBookmarkedPost.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/posts/BookmarkedPosts.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/posts/BookmarkedPosts.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookmarkedPosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BookmarkedPosts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/posts/BookmarkedPosts.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookmarkedPosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/User/UserBookmarkedPost.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/User/UserBookmarkedPost.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBookmarkedPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserBookmarkedPost.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/User/UserBookmarkedPost.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBookmarkedPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/posts/BookmarkedPosts.vue?vue&type=template&id=cd11b832&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/posts/BookmarkedPosts.vue?vue&type=template&id=cd11b832& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookmarkedPosts_vue_vue_type_template_id_cd11b832___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookmarkedPosts_vue_vue_type_template_id_cd11b832___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookmarkedPosts_vue_vue_type_template_id_cd11b832___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BookmarkedPosts.vue?vue&type=template&id=cd11b832& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/posts/BookmarkedPosts.vue?vue&type=template&id=cd11b832&");


/***/ }),

/***/ "./resources/js/views/User/UserBookmarkedPost.vue?vue&type=template&id=025d7f56&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/User/UserBookmarkedPost.vue?vue&type=template&id=025d7f56& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBookmarkedPost_vue_vue_type_template_id_025d7f56___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBookmarkedPost_vue_vue_type_template_id_025d7f56___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBookmarkedPost_vue_vue_type_template_id_025d7f56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserBookmarkedPost.vue?vue&type=template&id=025d7f56& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/User/UserBookmarkedPost.vue?vue&type=template&id=025d7f56&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/posts/BookmarkedPosts.vue?vue&type=template&id=cd11b832&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/posts/BookmarkedPosts.vue?vue&type=template&id=cd11b832& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "d-flex mb-10" }, [
    _c("div", { staticClass: "w-100" }, [
      _c("h3", { domProps: { innerHTML: _vm._s(_vm.data.title) } }),
      _vm._v(" "),
      _c("p", {
        staticClass: "body-2 grey--text my-4",
        domProps: { innerHTML: _vm._s(_vm.data.dec) }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "d-flex flex-row align-center" },
        [
          _c(
            "div",
            [
              _c(
                "v-list-item",
                [
                  _c(
                    "v-list-item-avatar",
                    [
                      _c("v-img", { attrs: { src: _vm.data.user.profile_src } })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-list-item-content", [
                    _c(
                      "div",
                      { staticClass: "body-2 dark--text font-weight-bold" },
                      [
                        _vm._v(
                          "\n                            " +
                            _vm._s(_vm.data.user.name) +
                            "\n                        "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "caption grey--text" }, [
                      _vm._v(
                        "\n                            " +
                          _vm._s(_vm.data.created_at) +
                          "\n                        "
                      )
                    ])
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { icon: "" },
              on: {
                click: function($event) {
                  return _vm.bookmarkPost(_vm.data)
                }
              }
            },
            [
              _c("v-icon", [
                _vm._v(
                  "\n                    " +
                    _vm._s(
                      _vm.data.is_bookmarked
                        ? "mdi-bookmark"
                        : "mdi-bookmark-outline"
                    ) +
                    "\n                "
                )
              ])
            ],
            1
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "mr-7" },
      [
        _c(
          "v-avatar",
          {
            staticClass: "profile",
            attrs: { color: "grey", size: "144", tile: "" }
          },
          [_c("v-img", { attrs: { src: _vm.data.banner_src } })],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/User/UserBookmarkedPost.vue?vue&type=template&id=025d7f56&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/User/UserBookmarkedPost.vue?vue&type=template&id=025d7f56& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.posts
    ? _c(
        "v-container",
        [
          _c(
            "v-row",
            { staticClass: "justify-center" },
            [
              _c("v-col", { attrs: { cols: "8" } }, [
                _c(
                  "div",
                  [
                    _c("h1", { staticClass: "my-15" }, [
                      _vm._v("پست‌های ذخیره شده")
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.posts.data, function(post, index) {
                      return _c("bookmarked-posts", {
                        key: index,
                        attrs: { data: post }
                      })
                    })
                  ],
                  2
                )
              ])
            ],
            1
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);