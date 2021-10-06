(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkskote_angular_vertical"] = self["webpackChunkskote_angular_vertical"] || []).push([["src_app_pages_training_basic_basic_module_ts"], {
    /***/
    38357:
    /*!*********************************************************!*\
      !*** ./src/app/pages/training/basic/basic.component.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BasicComponent": function BasicComponent() {
          return (
            /* binding */
            _BasicComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _BasicComponent = /*#__PURE__*/function () {
        function _BasicComponent() {
          _classCallCheck(this, _BasicComponent);
        }

        _createClass(_BasicComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _BasicComponent;
      }();

      _BasicComponent.ɵfac = function BasicComponent_Factory(t) {
        return new (t || _BasicComponent)();
      };

      _BasicComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _BasicComponent,
        selectors: [["app-basic"]],
        decls: 2,
        vars: 0,
        template: function BasicComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " basic works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNpYy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    17226:
    /*!******************************************************!*\
      !*** ./src/app/pages/training/basic/basic.module.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BasicModule": function BasicModule() {
          return (
            /* binding */
            _BasicModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _basic_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./basic.component */
      38357);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _BasicModule = function _BasicModule() {
        _classCallCheck(this, _BasicModule);
      };

      _BasicModule.ɵfac = function BasicModule_Factory(t) {
        return new (t || _BasicModule)();
      };

      _BasicModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _BasicModule
      });
      _BasicModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_BasicModule, {
          declarations: [_basic_component__WEBPACK_IMPORTED_MODULE_0__.BasicComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_pages_training_basic_basic_module_ts-es5.js.map