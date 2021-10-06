(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkskote_angular_vertical"] = self["webpackChunkskote_angular_vertical"] || []).push([["src_app_pages_pa_files_files_module_ts"], {
    /***/
    78256:
    /*!********************************************************!*\
      !*** ./src/app/pages/pa/files/files-routing.module.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FilesRoutingModule": function FilesRoutingModule() {
          return (
            /* binding */
            _FilesRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _images_images_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./images/images.component */
      6825);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: 'images',
        component: _images_images_component__WEBPACK_IMPORTED_MODULE_0__.ImagesComponent
      }];

      var _FilesRoutingModule = function _FilesRoutingModule() {
        _classCallCheck(this, _FilesRoutingModule);
      };

      _FilesRoutingModule.ɵfac = function FilesRoutingModule_Factory(t) {
        return new (t || _FilesRoutingModule)();
      };

      _FilesRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _FilesRoutingModule
      });
      _FilesRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_FilesRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    59843:
    /*!***************************************************!*\
      !*** ./src/app/pages/pa/files/files.component.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FilesComponent": function FilesComponent() {
          return (
            /* binding */
            _FilesComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _FilesComponent = /*#__PURE__*/function () {
        function _FilesComponent() {
          _classCallCheck(this, _FilesComponent);
        }

        _createClass(_FilesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _FilesComponent;
      }();

      _FilesComponent.ɵfac = function FilesComponent_Factory(t) {
        return new (t || _FilesComponent)();
      };

      _FilesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _FilesComponent,
        selectors: [["app-files"]],
        decls: 2,
        vars: 0,
        template: function FilesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " files works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWxlcy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    84290:
    /*!************************************************!*\
      !*** ./src/app/pages/pa/files/files.module.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FilesModule": function FilesModule() {
          return (
            /* binding */
            _FilesModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _files_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./files.component */
      59843);
      /* harmony import */


      var _images_images_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./images/images.component */
      6825);
      /* harmony import */


      var _files_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./files-routing.module */
      78256);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _FilesModule = function _FilesModule() {
        _classCallCheck(this, _FilesModule);
      };

      _FilesModule.ɵfac = function FilesModule_Factory(t) {
        return new (t || _FilesModule)();
      };

      _FilesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _FilesModule
      });
      _FilesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _files_routing_module__WEBPACK_IMPORTED_MODULE_2__.FilesRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_FilesModule, {
          declarations: [_files_component__WEBPACK_IMPORTED_MODULE_0__.FilesComponent, _images_images_component__WEBPACK_IMPORTED_MODULE_1__.ImagesComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _files_routing_module__WEBPACK_IMPORTED_MODULE_2__.FilesRoutingModule]
        });
      })();
      /***/

    },

    /***/
    49115:
    /*!*************************************************!*\
      !*** ./src/app/pages/pa/files/files.service.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FilesService": function FilesService() {
          return (
            /* binding */
            _FilesService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _FilesService = /*#__PURE__*/function () {
        function _FilesService(http) {
          _classCallCheck(this, _FilesService);

          this.http = http;
          this.file = {
            images: "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL, "/upload/images")
          };
        }

        _createClass(_FilesService, [{
          key: "uploadImages",
          value: function uploadImages(file) {
            var formData = new FormData();
            formData.append('file', file);
            var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpRequest('POST', this.file.images, formData, {
              reportProgress: true,
              responseType: 'json'
            });
            return this.http.request(req);
          }
        }, {
          key: "downloadImages",
          value: function downloadImages() {
            return this.http.get(this.file.images);
          }
        }]);

        return _FilesService;
      }();

      _FilesService.ɵfac = function FilesService_Factory(t) {
        return new (t || _FilesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
      };

      _FilesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _FilesService,
        factory: _FilesService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    6825:
    /*!***********************************************************!*\
      !*** ./src/app/pages/pa/files/images/images.component.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ImagesComponent": function ImagesComponent() {
          return (
            /* binding */
            _ImagesComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _files_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../files.service */
      49115);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _c0 = function _c0(a0) {
        return {
          width: a0
        };
      };

      function ImagesComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var progressInfo_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](progressInfo_r3.fileName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, progressInfo_r3.value + "%"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-valuenow", progressInfo_r3.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", progressInfo_r3.value, "% ");
        }
      }

      function ImagesComponent_div_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var preview_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", preview_r4.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](preview_r4.name);
        }
      }

      function ImagesComponent_div_37_ul_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var msg_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](msg_r6);
        }
      }

      function ImagesComponent_div_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ImagesComponent_div_37_ul_1_Template, 3, 1, "ul", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.message);
        }
      }

      var _ImagesComponent = /*#__PURE__*/function () {
        function _ImagesComponent(fileService) {
          _classCallCheck(this, _ImagesComponent);

          this.fileService = fileService;
          this.progressInfos = [];
          this.message = [];
          this.previews = [];
        }

        _createClass(_ImagesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "selectFiles",
          value: function selectFiles(event) {
            var _this = this;

            this.message = [];
            this.progressInfos = [];
            this.selectedFiles = event.target.files;
            this.previews = [];

            if (this.selectedFiles && this.selectedFiles[0]) {
              var numberOfFiles = this.selectedFiles.length;

              var _loop = function _loop(i) {
                var reader = new FileReader();
                console.log();

                reader.onload = function (e) {
                  _this.previews.push({
                    imgSrc: e.target.result,
                    name: _this.selectedFiles[i].name
                  });
                };

                reader.readAsDataURL(_this.selectedFiles[i]);
              };

              for (var i = 0; i < numberOfFiles; i++) {
                _loop(i);
              }
            }
          }
        }, {
          key: "uploadFiles",
          value: function uploadFiles() {
            this.message = [];

            if (this.selectedFiles) {
              for (var i = 0; i < this.selectedFiles.length; i++) {
                this.upload(i, this.selectedFiles[i]);
              }
            }
          }
        }, {
          key: "upload",
          value: function upload(idx, file) {
            var _this2 = this;

            this.progressInfos[idx] = {
              value: 0,
              fileName: file.name
            };

            if (file) {
              this.fileService.uploadImages(file).subscribe(function (event) {
                if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpEventType.UploadProgress) {
                  _this2.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
                } else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse) {
                  var msg = 'Uploaded the file successfully: ' + file.name;

                  _this2.message.push(msg);
                }
              }, function (err) {
                _this2.progressInfos[idx].value = 0;
                var msg = 'Không upload được file: ' + file.name;

                _this2.message.push(msg);
              });
            }
          }
        }]);

        return _ImagesComponent;
      }();

      _ImagesComponent.ɵfac = function ImagesComponent_Factory(t) {
        return new (t || _ImagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_files_service__WEBPACK_IMPORTED_MODULE_0__.FilesService));
      };

      _ImagesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _ImagesComponent,
        selectors: [["app-images"]],
        decls: 38,
        vars: 4,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "page-title-box", "d-flex", "align-items-center", "justify-content-between"], [1, "mb-0", "font-size-18"], [1, "page-title-right"], [1, "breadcrumb", "m-0"], [1, "breadcrumb-item"], [1, "breadcrumb-item", "active"], ["class", "mb-2", 4, "ngFor", "ngForOf"], [1, "col-sm-6"], [1, "mt-3"], ["for", "formFile", 1, "form-label"], ["type", "file", "accept", "image/*", "id", "formFile", "multiple", "", 1, "form-control", 3, "change"], [1, "btn", "btn-success", "btn-sm", "mt-3", "float-md-end", 3, "disabled", "click"], [2, "clear", "both"], [1, "chat-conversation", "mt-3"], [1, "conversation-list"], [1, "ctext-wrap"], [1, "conversation-name"], ["class", "col-sm-3", 4, "ngFor", "ngForOf"], ["class", "alert alert-secondary my-3", "role", "alert", 4, "ngIf"], [1, "mb-2"], [1, "progress"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-info", "progress-bar-striped", 3, "ngStyle"], [1, "col-sm-3"], [1, "rounded", "me-2", "preview", 3, "src"], ["role", "alert", 1, "alert", "alert-secondary", "my-3"], [4, "ngFor", "ngForOf"]],
        template: function ImagesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Upload Images");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ol", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "PA");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Upload");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ImagesComponent_div_12_Template, 6, 6, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Upload \u1EA3nh th\u1EBB C\xF4ng Nh\xE2n vi\xEAn t\u1EA1i \u0111\xE2y");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ImagesComponent_Template_input_change_19_listener($event) {
              return ctx.selectFiles($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImagesComponent_Template_button_click_20_listener() {
              return ctx.uploadFiles();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Upload ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "*L\u01B0u \xFD:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "- C\xF3 th\u1EC3 up nhi\u1EC1u \u1EA3nh c\xF9ng l\xFAc");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "- Khi up \u1EA3nh y\xEAu c\u1EA7u \u0111\u1EB7t t\xEAn \u1EA3nh \u0111\xFAng v\u1EDBi code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "- Ch\u1EC9 ch\u1EA5p nh\u1EADn \u0111\u1ECBnh d\u1EA1ng \u1EA3nh, sai kh\xF4ng ch\u1ECBu tr\xE1ch nhi\u1EC7m");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, ImagesComponent_div_36_Template, 4, 2, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, ImagesComponent_div_37_Template, 2, 1, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.progressInfos);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.selectedFiles);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.previews);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.message.length);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle],
        styles: [".preview[_ngcontent-%COMP%] {\n  max-width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0oiLCJmaWxlIjoiaW1hZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByZXZpZXcge1xyXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICB9Il19 */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_pa_files_files_module_ts-es5.js.map