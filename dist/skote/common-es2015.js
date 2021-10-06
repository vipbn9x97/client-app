(self["webpackChunkskote_angular_vertical"] = self["webpackChunkskote_angular_vertical"] || []).push([["common"],{

/***/ 77420:
/*!******************************************!*\
  !*** ./src/app/shared/shared.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedService": function() { return /* binding */ SharedService; }
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _abstract_abstract_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract/abstract.service */ 67298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _core_services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/storage.service */ 22323);





class SharedService extends _abstract_abstract_service__WEBPACK_IMPORTED_MODULE_1__.AbstractService {
    constructor(httpClient, storeService) {
        super();
        this.httpClient = httpClient;
        this.shared = {
            listModel: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}/model`,
        };
    }
    getModelByDeptId(deptId) {
        return this.httpClient.get(this.shared.listModel + `/${deptId}`);
    }
}
SharedService.ɵfac = function SharedService_Factory(t) { return new (t || SharedService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core_services_storage_service__WEBPACK_IMPORTED_MODULE_2__.StoreService)); };
SharedService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: SharedService, factory: SharedService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map