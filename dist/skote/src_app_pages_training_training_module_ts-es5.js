(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkskote_angular_vertical"] = self["webpackChunkskote_angular_vertical"] || []).push([["src_app_pages_training_training_module_ts"], {
    /***/
    33371:
    /*!***********************************************************!*\
      !*** ./src/app/pages/training/training-routing.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TrainingRoutingModule": function TrainingRoutingModule() {
          return (
            /* binding */
            _TrainingRoutingModule
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
        path: 'basic',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_training_basic_basic_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./basic/basic.module */
          17226)).then(function (m) {
            return m.BasicModule;
          });
        }
      }, {
        path: 'cell',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_training_cell_cell_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./cell/cell.module */
          77580)).then(function (m) {
            return m.CellModule;
          });
        }
      }, {
        path: 'course',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_training_course_course_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./course/course.module */
          63823)).then(function (m) {
            return m.CourseModule;
          });
        }
      }];

      var _TrainingRoutingModule = function _TrainingRoutingModule() {
        _classCallCheck(this, _TrainingRoutingModule);
      };

      _TrainingRoutingModule.ɵfac = function TrainingRoutingModule_Factory(t) {
        return new (t || _TrainingRoutingModule)();
      };

      _TrainingRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _TrainingRoutingModule
      });
      _TrainingRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_TrainingRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    23747:
    /*!******************************************************!*\
      !*** ./src/app/pages/training/training.component.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TrainingComponent": function TrainingComponent() {
          return (
            /* binding */
            _TrainingComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _TrainingComponent = /*#__PURE__*/function () {
        function _TrainingComponent() {
          _classCallCheck(this, _TrainingComponent);
        }

        _createClass(_TrainingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _TrainingComponent;
      }();

      _TrainingComponent.ɵfac = function TrainingComponent_Factory(t) {
        return new (t || _TrainingComponent)();
      };

      _TrainingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _TrainingComponent,
        selectors: [["app-training"]],
        decls: 2,
        vars: 0,
        template: function TrainingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " training works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFpbmluZy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    4737:
    /*!***************************************************!*\
      !*** ./src/app/pages/training/training.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TrainingModule": function TrainingModule() {
          return (
            /* binding */
            _TrainingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _training_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./training.component */
      23747);
      /* harmony import */


      var _training_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./training-routing.module */
      33371);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _TrainingModule = function _TrainingModule() {
        _classCallCheck(this, _TrainingModule);
      };

      _TrainingModule.ɵfac = function TrainingModule_Factory(t) {
        return new (t || _TrainingModule)();
      };

      _TrainingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _TrainingModule
      });
      _TrainingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _training_routing_module__WEBPACK_IMPORTED_MODULE_1__.TrainingRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_TrainingModule, {
          declarations: [_training_component__WEBPACK_IMPORTED_MODULE_0__.TrainingComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _training_routing_module__WEBPACK_IMPORTED_MODULE_1__.TrainingRoutingModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_pages_training_training_module_ts-es5.js.map