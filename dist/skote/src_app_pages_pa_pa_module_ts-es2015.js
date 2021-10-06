(self["webpackChunkskote_angular_vertical"] = self["webpackChunkskote_angular_vertical"] || []).push([["src_app_pages_pa_pa_module_ts"],{

/***/ 9520:
/*!***********************************************!*\
  !*** ./src/app/pages/pa/pa-routing.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaRoutingModule": function() { return /* binding */ PaRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);



const routes = [
    { path: 'file', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_pa_files_files_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./files/files.module */ 84290)).then(m => m.FilesModule) },
];
class PaRoutingModule {
}
PaRoutingModule.ɵfac = function PaRoutingModule_Factory(t) { return new (t || PaRoutingModule)(); };
PaRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PaRoutingModule });
PaRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PaRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 50632:
/*!******************************************!*\
  !*** ./src/app/pages/pa/pa.component.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaComponent": function() { return /* binding */ PaComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class PaComponent {
    constructor() { }
    ngOnInit() {
    }
}
PaComponent.ɵfac = function PaComponent_Factory(t) { return new (t || PaComponent)(); };
PaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaComponent, selectors: [["app-pa"]], decls: 2, vars: 0, template: function PaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " pa works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ 42468:
/*!***************************************!*\
  !*** ./src/app/pages/pa/pa.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaModule": function() { return /* binding */ PaModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _pa_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pa.component */ 50632);
/* harmony import */ var _pa_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pa-routing.module */ 9520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




class PaModule {
}
PaModule.ɵfac = function PaModule_Factory(t) { return new (t || PaModule)(); };
PaModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PaModule });
PaModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _pa_routing_module__WEBPACK_IMPORTED_MODULE_1__.PaRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PaModule, { declarations: [_pa_component__WEBPACK_IMPORTED_MODULE_0__.PaComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _pa_routing_module__WEBPACK_IMPORTED_MODULE_1__.PaRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_pa_pa_module_ts-es2015.js.map