(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkskote_angular_vertical"] = self["webpackChunkskote_angular_vertical"] || []).push([["src_app_pages_pa_pa_module_ts"], {
    /***/
    9520:
    /*!***********************************************!*\
      !*** ./src/app/pages/pa/pa-routing.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PaRoutingModule": function PaRoutingModule() {
          return (
            /* binding */
            _PaRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: 'file',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_pa_files_files_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./files/files.module */
          84290)).then(function (m) {
            return m.FilesModule;
          });
        }
      }];

      var _PaRoutingModule = function _PaRoutingModule() {
        _classCallCheck(this, _PaRoutingModule);
      };

      _PaRoutingModule.ɵfac = function PaRoutingModule_Factory(t) {
        return new (t || _PaRoutingModule)();
      };

      _PaRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _PaRoutingModule
      });
      _PaRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_PaRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    50632:
    /*!******************************************!*\
      !*** ./src/app/pages/pa/pa.component.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PaComponent": function PaComponent() {
          return (
            /* binding */
            _PaComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _PaComponent = /*#__PURE__*/function () {
        function _PaComponent() {
          _classCallCheck(this, _PaComponent);
        }

        _createClass(_PaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _PaComponent;
      }();

      _PaComponent.ɵfac = function PaComponent_Factory(t) {
        return new (t || _PaComponent)();
      };

      _PaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _PaComponent,
        selectors: [["app-pa"]],
        decls: 2,
        vars: 0,
        template: function PaComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " pa works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });
      /***/
    },

    /***/
    42468:
    /*!***************************************!*\
      !*** ./src/app/pages/pa/pa.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PaModule": function PaModule() {
          return (
            /* binding */
            _PaModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _pa_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./pa.component */
      50632);
      /* harmony import */


      var _pa_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pa-routing.module */
      9520);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _PaModule = function _PaModule() {
        _classCallCheck(this, _PaModule);
      };

      _PaModule.ɵfac = function PaModule_Factory(t) {
        return new (t || _PaModule)();
      };

      _PaModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _PaModule
      });
      _PaModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _pa_routing_module__WEBPACK_IMPORTED_MODULE_1__.PaRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_PaModule, {
          declarations: [_pa_component__WEBPACK_IMPORTED_MODULE_0__.PaComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _pa_routing_module__WEBPACK_IMPORTED_MODULE_1__.PaRoutingModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_pages_pa_pa_module_ts-es5.js.map