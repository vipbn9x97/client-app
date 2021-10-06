(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkskote_angular_vertical"] = self["webpackChunkskote_angular_vertical"] || []).push([["src_app_account_account_module_ts"], {
    /***/
    78439:
    /*!*************************************************************************!*\
      !*** ./node_modules/ng-particles/__ivy_ngcc__/fesm2015/ng-particles.js ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NgParticlesComponent": function NgParticlesComponent() {
          return (
            /* binding */
            _NgParticlesComponent
          );
        },

        /* harmony export */
        "NgParticlesModule": function NgParticlesModule() {
          return (
            /* binding */
            _NgParticlesModule
          );
        },

        /* harmony export */
        "ParticlesComponent": function ParticlesComponent() {
          return (
            /* binding */
            _ParticlesComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var tsparticles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tsparticles */
      88425);
      /* harmony import */


      var tsparticles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tsparticles__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony reexport (unknown) */


      var __WEBPACK_REEXPORT_OBJECT__ = {};
      /* harmony reexport (unknown) */

      for (var __WEBPACK_IMPORT_KEY__ in tsparticles__WEBPACK_IMPORTED_MODULE_0__) {
        if (["default", "NgParticlesComponent", "NgParticlesModule", "ParticlesComponent"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function (key) {
          return tsparticles__WEBPACK_IMPORTED_MODULE_0__[key];
        }.bind(0, __WEBPACK_IMPORT_KEY__);
      }
      /* harmony reexport (unknown) */


      __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

      var _NgParticlesComponent = /*#__PURE__*/function () {
        function _NgParticlesComponent() {
          _classCallCheck(this, _NgParticlesComponent);

          this.particlesLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
          this.particlesInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        }

        _createClass(_NgParticlesComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            tsparticles__WEBPACK_IMPORTED_MODULE_0__.tsParticles.init();
            this.particlesInit.emit(tsparticles__WEBPACK_IMPORTED_MODULE_0__.tsParticles);

            var cb = function cb(container) {
              _this.particlesLoaded.emit(container);
            };

            if (this.url) {
              tsparticles__WEBPACK_IMPORTED_MODULE_0__.tsParticles.loadJSON(this.id, this.url).then(cb);
            } else if (this.options) {
              tsparticles__WEBPACK_IMPORTED_MODULE_0__.tsParticles.load(this.id, this.options).then(cb);
            } else {
              console.error('You must specify options or url to load tsParticles');
            }
          }
        }]);

        return _NgParticlesComponent;
      }();

      _NgParticlesComponent.ɵfac = function NgParticlesComponent_Factory(t) {
        return new (t || _NgParticlesComponent)();
      };

      _NgParticlesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _NgParticlesComponent,
        selectors: [["ng-particles"]],
        inputs: {
          options: "options",
          url: "url",
          id: "id"
        },
        outputs: {
          particlesLoaded: "particlesLoaded",
          particlesInit: "particlesInit"
        },
        decls: 1,
        vars: 1,
        consts: [[3, "id"]],
        template: function NgParticlesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.id);
          }
        },
        encapsulation: 2
      });
      _NgParticlesComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }],
        url: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }],
        particlesLoaded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }],
        particlesInit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_NgParticlesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
          args: [{
            selector: 'ng-particles',
            template: "\n        <div [id]=\"id\"></div> "
          }]
        }], function () {
          return [];
        }, {
          particlesLoaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
          }],
          particlesInit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
          }],
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }]
        });
      })();

      var _ParticlesComponent = /*#__PURE__*/function (_NgParticlesComponent2) {
        _inherits(_ParticlesComponent, _NgParticlesComponent2);

        var _super = _createSuper(_ParticlesComponent);

        function _ParticlesComponent() {
          var _this2;

          _classCallCheck(this, _ParticlesComponent);

          _this2 = _super.apply(this, arguments);
          _this2.particlesLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
          _this2.particlesInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
          return _this2;
        }

        return _ParticlesComponent;
      }(_NgParticlesComponent);

      _ParticlesComponent.ɵfac = /*@__PURE__*/function () {
        var ɵParticlesComponent_BaseFactory;
        return function ParticlesComponent_Factory(t) {
          return (ɵParticlesComponent_BaseFactory || (ɵParticlesComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](_ParticlesComponent)))(t || _ParticlesComponent);
        };
      }();

      _ParticlesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _ParticlesComponent,
        selectors: [["Particles"]],
        inputs: {
          options: "options",
          url: "url",
          id: "id"
        },
        outputs: {
          particlesLoaded: "particlesLoaded",
          particlesInit: "particlesInit"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 1,
        consts: [[3, "id"]],
        template: function ParticlesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.id);
          }
        },
        encapsulation: 2
      });
      _ParticlesComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }],
        url: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }],
        particlesLoaded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }],
        particlesInit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_ParticlesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
          args: [{
            selector: 'Particles',
            template: "\n        <div [id]=\"id\"></div> "
          }]
        }], null, {
          particlesLoaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
          }],
          particlesInit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
          }],
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }]
        });
      })();

      var _NgParticlesModule = function _NgParticlesModule() {
        _classCallCheck(this, _NgParticlesModule);
      };

      _NgParticlesModule.ɵfac = function NgParticlesModule_Factory(t) {
        return new (t || _NgParticlesModule)();
      };

      _NgParticlesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _NgParticlesModule
      });
      _NgParticlesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_NgParticlesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
          args: [{
            declarations: [_NgParticlesComponent, _ParticlesComponent],
            imports: [],
            exports: [_NgParticlesComponent, _ParticlesComponent]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_NgParticlesModule, {
          declarations: [_NgParticlesComponent, _ParticlesComponent],
          exports: [_NgParticlesComponent, _ParticlesComponent]
        });
      })();
      /*
       * Public API Surface of ng-particles
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ng-particles.js.map

      /***/

    },

    /***/
    53722:
    /*!*************************************************!*\
      !*** ./node_modules/tsparticles/Core/Canvas.js ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Canvas = void 0;

      var Utils_1 = __webpack_require__(
      /*! ../Utils */
      18942);

      var Utils_2 = __webpack_require__(
      /*! ../Utils */
      18942);

      var Canvas = /*#__PURE__*/function () {
        function Canvas(container) {
          _classCallCheck(this, Canvas);

          this.container = container;
          this.size = {
            height: 0,
            width: 0
          };
          this.context = null;
          this.generatedCanvas = false;
        }

        _createClass(Canvas, [{
          key: "init",
          value: function init() {
            this.resize();
            this.initStyle();
            this.initCover();
            this.initTrail();
            this.initBackground();
            this.paint();
          }
        }, {
          key: "loadCanvas",
          value: function loadCanvas(canvas, generatedCanvas) {
            var _a;

            if (!canvas.className) {
              canvas.className = Utils_1.Constants.canvasClass;
            }

            if (this.generatedCanvas) {
              (_a = this.element) === null || _a === void 0 ? void 0 : _a.remove();
            }

            this.generatedCanvas = generatedCanvas !== null && generatedCanvas !== void 0 ? generatedCanvas : this.generatedCanvas;
            this.element = canvas;
            this.originalStyle = (0, Utils_1.deepExtend)({}, this.element.style);
            this.size.height = canvas.offsetHeight;
            this.size.width = canvas.offsetWidth;
            this.context = this.element.getContext("2d");
            this.container.retina.init();
            this.initBackground();
          }
        }, {
          key: "destroy",
          value: function destroy() {
            var _this3 = this;

            var _a;

            if (this.generatedCanvas) {
              (_a = this.element) === null || _a === void 0 ? void 0 : _a.remove();
            }

            this.draw(function (ctx) {
              (0, Utils_2.clear)(ctx, _this3.size);
            });
          }
        }, {
          key: "paint",
          value: function paint() {
            var _this4 = this;

            var options = this.container.actualOptions;
            this.draw(function (ctx) {
              if (options.backgroundMask.enable && options.backgroundMask.cover && _this4.coverColor) {
                (0, Utils_2.clear)(ctx, _this4.size);

                _this4.paintBase((0, Utils_1.getStyleFromRgb)(_this4.coverColor, _this4.coverColor.a));
              } else {
                _this4.paintBase();
              }
            });
          }
        }, {
          key: "clear",
          value: function clear() {
            var _this5 = this;

            var options = this.container.actualOptions;
            var trail = options.particles.move.trail;

            if (options.backgroundMask.enable) {
              this.paint();
            } else if (trail.enable && trail.length > 0 && this.trailFillColor) {
              this.paintBase((0, Utils_1.getStyleFromRgb)(this.trailFillColor, 1 / trail.length));
            } else {
              this.draw(function (ctx) {
                (0, Utils_2.clear)(ctx, _this5.size);
              });
            }
          }
        }, {
          key: "windowResize",
          value: function windowResize() {
            var _a;

            if (!this.element) {
              return;
            }

            var container = this.container;
            this.resize();

            if (((_a = this.resizeFactor) === null || _a === void 0 ? void 0 : _a.width) === 1 && this.resizeFactor.height === 1) {
              delete this.resizeFactor;
              return;
            }

            container.updateActualOptions();
            container.particles.setDensity();

            var _iterator = _createForOfIteratorHelper(container.plugins),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _step$value = _slicedToArray(_step.value, 2),
                    plugin = _step$value[1];

                if (plugin.resize !== undefined) {
                  plugin.resize();
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "resize",
          value: function resize() {
            if (!this.element) {
              return;
            }

            var container = this.container;
            var pxRatio = container.retina.pixelRatio;
            var size = container.canvas.size;
            var oldSize = {
              width: size.width,
              height: size.height
            };
            size.width = this.element.offsetWidth * pxRatio;
            size.height = this.element.offsetHeight * pxRatio;
            this.element.width = size.width;
            this.element.height = size.height;

            if (this.container.started) {
              this.resizeFactor = {
                width: size.width / oldSize.width,
                height: size.height / oldSize.height
              };
            }
          }
        }, {
          key: "drawConnectLine",
          value: function drawConnectLine(p1, p2) {
            var _this6 = this;

            this.draw(function (ctx) {
              var _a;

              var lineStyle = _this6.lineStyle(p1, p2);

              if (!lineStyle) {
                return;
              }

              var pos1 = p1.getPosition();
              var pos2 = p2.getPosition();
              (0, Utils_1.drawConnectLine)(ctx, (_a = p1.retina.linksWidth) !== null && _a !== void 0 ? _a : _this6.container.retina.linksWidth, lineStyle, pos1, pos2);
            });
          }
        }, {
          key: "drawGrabLine",
          value: function drawGrabLine(particle, lineColor, opacity, mousePos) {
            var container = this.container;
            this.draw(function (ctx) {
              var _a;

              var beginPos = particle.getPosition();
              (0, Utils_1.drawGrabLine)(ctx, (_a = particle.retina.linksWidth) !== null && _a !== void 0 ? _a : container.retina.linksWidth, beginPos, mousePos, lineColor, opacity);
            });
          }
        }, {
          key: "drawParticle",
          value: function drawParticle(particle, delta) {
            var _this7 = this;

            var _a, _b, _c, _d, _e, _f;

            if (particle.spawning || particle.destroyed) {
              return;
            }

            var pfColor = particle.getFillColor();
            var psColor = (_a = particle.getStrokeColor()) !== null && _a !== void 0 ? _a : pfColor;

            if (!pfColor && !psColor) {
              return;
            }

            var _this$getPluginPartic = this.getPluginParticleColors(particle),
                _this$getPluginPartic2 = _slicedToArray(_this$getPluginPartic, 2),
                fColor = _this$getPluginPartic2[0],
                sColor = _this$getPluginPartic2[1];

            var pOptions = particle.options;
            var twinkle = pOptions.twinkle.particles;
            var twinkling = twinkle.enable && Math.random() < twinkle.frequency;

            if (!fColor || !sColor) {
              var twinkleRgb = (0, Utils_1.colorToHsl)(twinkle.color);

              if (!fColor) {
                fColor = twinkling && twinkleRgb !== undefined ? twinkleRgb : pfColor ? pfColor : undefined;
              }

              if (!sColor) {
                sColor = twinkling && twinkleRgb !== undefined ? twinkleRgb : psColor ? psColor : undefined;
              }
            }

            var options = this.container.actualOptions;
            var zIndexOptions = particle.options.zIndex;
            var zOpacityFactor = Math.pow(1 - particle.zIndexFactor, zIndexOptions.opacityRate);
            var radius = particle.getRadius();
            var opacity = twinkling ? twinkle.opacity : (_d = (_b = particle.bubble.opacity) !== null && _b !== void 0 ? _b : (_c = particle.opacity) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : 1;
            var strokeOpacity = (_f = (_e = particle.stroke) === null || _e === void 0 ? void 0 : _e.opacity) !== null && _f !== void 0 ? _f : opacity;
            var zOpacity = opacity * zOpacityFactor;
            var fillColorValue = fColor ? (0, Utils_1.getStyleFromHsl)(fColor, zOpacity) : undefined;

            if (!fillColorValue && !sColor) {
              return;
            }

            this.draw(function (ctx) {
              var zSizeFactor = Math.pow(1 - particle.zIndexFactor, zIndexOptions.sizeRate);
              var zStrokeOpacity = strokeOpacity * zOpacityFactor;
              var strokeColorValue = sColor ? (0, Utils_1.getStyleFromHsl)(sColor, zStrokeOpacity) : fillColorValue;

              if (radius <= 0) {
                return;
              }

              var container = _this7.container;

              var _iterator2 = _createForOfIteratorHelper(container.particles.updaters),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var updater = _step2.value;

                  if (updater.beforeDraw) {
                    updater.beforeDraw(particle);
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              (0, Utils_1.drawParticle)(_this7.container, ctx, particle, delta, fillColorValue, strokeColorValue, options.backgroundMask.enable, options.backgroundMask.composite, radius * zSizeFactor, zOpacity, particle.options.shadow, particle.gradient);

              var _iterator3 = _createForOfIteratorHelper(container.particles.updaters),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var _updater = _step3.value;

                  if (_updater.afterDraw) {
                    _updater.afterDraw(particle);
                  }
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            });
          }
        }, {
          key: "drawPlugin",
          value: function drawPlugin(plugin, delta) {
            this.draw(function (ctx) {
              (0, Utils_1.drawPlugin)(ctx, plugin, delta);
            });
          }
        }, {
          key: "drawParticlePlugin",
          value: function drawParticlePlugin(plugin, particle, delta) {
            this.draw(function (ctx) {
              (0, Utils_1.drawParticlePlugin)(ctx, plugin, particle, delta);
            });
          }
        }, {
          key: "initBackground",
          value: function initBackground() {
            var options = this.container.actualOptions;
            var background = options.background;
            var element = this.element;
            var elementStyle = element === null || element === void 0 ? void 0 : element.style;

            if (!elementStyle) {
              return;
            }

            if (background.color) {
              var color = (0, Utils_1.colorToRgb)(background.color);
              elementStyle.backgroundColor = color ? (0, Utils_1.getStyleFromRgb)(color, background.opacity) : "";
            } else {
              elementStyle.backgroundColor = "";
            }

            elementStyle.backgroundImage = background.image || "";
            elementStyle.backgroundPosition = background.position || "";
            elementStyle.backgroundRepeat = background.repeat || "";
            elementStyle.backgroundSize = background.size || "";
          }
        }, {
          key: "draw",
          value: function draw(cb) {
            if (!this.context) {
              return;
            }

            return cb(this.context);
          }
        }, {
          key: "initCover",
          value: function initCover() {
            var options = this.container.actualOptions;
            var cover = options.backgroundMask.cover;
            var color = cover.color;
            var coverRgb = (0, Utils_1.colorToRgb)(color);

            if (coverRgb) {
              this.coverColor = {
                r: coverRgb.r,
                g: coverRgb.g,
                b: coverRgb.b,
                a: cover.opacity
              };
            }
          }
        }, {
          key: "initTrail",
          value: function initTrail() {
            var options = this.container.actualOptions;
            var trail = options.particles.move.trail;
            var fillColor = (0, Utils_1.colorToRgb)(trail.fillColor);

            if (fillColor) {
              var _trail = options.particles.move.trail;
              this.trailFillColor = {
                r: fillColor.r,
                g: fillColor.g,
                b: fillColor.b,
                a: 1 / _trail.length
              };
            }
          }
        }, {
          key: "getPluginParticleColors",
          value: function getPluginParticleColors(particle) {
            var fColor;
            var sColor;

            var _iterator4 = _createForOfIteratorHelper(this.container.plugins),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var _step4$value = _slicedToArray(_step4.value, 2),
                    plugin = _step4$value[1];

                if (!fColor && plugin.particleFillColor) {
                  fColor = (0, Utils_1.colorToHsl)(plugin.particleFillColor(particle));
                }

                if (!sColor && plugin.particleStrokeColor) {
                  sColor = (0, Utils_1.colorToHsl)(plugin.particleStrokeColor(particle));
                }

                if (fColor && sColor) {
                  break;
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            return [fColor, sColor];
          }
        }, {
          key: "initStyle",
          value: function initStyle() {
            var element = this.element,
                options = this.container.actualOptions;

            if (!element) {
              return;
            }

            var originalStyle = this.originalStyle;

            if (options.fullScreen.enable) {
              this.originalStyle = (0, Utils_1.deepExtend)({}, element.style);
              element.style.position = "fixed";
              element.style.zIndex = options.fullScreen.zIndex.toString(10);
              element.style.top = "0";
              element.style.left = "0";
              element.style.width = "100%";
              element.style.height = "100%";
            } else if (originalStyle) {
              element.style.position = originalStyle.position;
              element.style.zIndex = originalStyle.zIndex;
              element.style.top = originalStyle.top;
              element.style.left = originalStyle.left;
              element.style.width = originalStyle.width;
              element.style.height = originalStyle.height;
            }
          }
        }, {
          key: "paintBase",
          value: function paintBase(baseColor) {
            var _this8 = this;

            this.draw(function (ctx) {
              (0, Utils_1.paintBase)(ctx, _this8.size, baseColor);
            });
          }
        }, {
          key: "lineStyle",
          value: function lineStyle(p1, p2) {
            var _this9 = this;

            return this.draw(function (ctx) {
              var options = _this9.container.actualOptions;
              var connectOptions = options.interactivity.modes.connect;
              return (0, Utils_1.gradient)(ctx, p1, p2, connectOptions.links.opacity);
            });
          }
        }]);

        return Canvas;
      }();

      exports.Canvas = Canvas;
      /***/
    },

    /***/
    48894:
    /*!****************************************************!*\
      !*** ./node_modules/tsparticles/Core/Container.js ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Container = void 0;

      var Canvas_1 = __webpack_require__(
      /*! ./Canvas */
      53722);

      var Particles_1 = __webpack_require__(
      /*! ./Particles */
      18094);

      var Retina_1 = __webpack_require__(
      /*! ./Retina */
      31962);

      var FrameManager_1 = __webpack_require__(
      /*! ./FrameManager */
      41894);

      var Options_1 = __webpack_require__(
      /*! ../Options/Classes/Options */
      30093);

      var Utils_1 = __webpack_require__(
      /*! ../Utils */
      18942);

      var Vector_1 = __webpack_require__(
      /*! ./Particle/Vector */
      27440);

      var Container = /*#__PURE__*/function () {
        function Container(id, sourceOptions) {
          var _this10 = this;

          _classCallCheck(this, Container);

          this.id = id;
          this.fpsLimit = 60;
          this.duration = 0;
          this.lifeTime = 0;
          this.firstStart = true;
          this.started = false;
          this.destroyed = false;
          this.paused = true;
          this.lastFrameTime = 0;
          this.zLayers = 100;
          this.pageHidden = false;
          this._sourceOptions = sourceOptions;
          this.retina = new Retina_1.Retina(this);
          this.canvas = new Canvas_1.Canvas(this);
          this.particles = new Particles_1.Particles(this);
          this.drawer = new FrameManager_1.FrameManager(this);
          this.pathGenerator = {
            generate: function generate() {
              var v = Vector_1.Vector.create(0, 0);
              v.length = Math.random();
              v.angle = Math.random() * Math.PI * 2;
              return v;
            },
            init: function init() {},
            update: function update() {}
          };
          this.interactivity = {
            mouse: {
              clicking: false,
              inside: false
            }
          };
          this.bubble = {};
          this.repulse = {
            particles: []
          };
          this.attract = {
            particles: []
          };
          this.plugins = new Map();
          this.drawers = new Map();
          this.density = 1;
          this._options = new Options_1.Options();
          this.actualOptions = new Options_1.Options();

          for (var _len = arguments.length, presets = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            presets[_key - 2] = arguments[_key];
          }

          for (var _i2 = 0, _presets = presets; _i2 < _presets.length; _i2++) {
            var preset = _presets[_i2];

            this._options.load(Utils_1.Plugins.getPreset(preset));
          }

          var shapes = Utils_1.Plugins.getSupportedShapes();

          var _iterator5 = _createForOfIteratorHelper(shapes),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var type = _step5.value;
              var drawer = Utils_1.Plugins.getShapeDrawer(type);

              if (drawer) {
                this.drawers.set(type, drawer);
              }
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }

          this._options.load(this._sourceOptions);

          this.eventListeners = new Utils_1.EventListeners(this);

          if (typeof IntersectionObserver !== "undefined" && IntersectionObserver) {
            this.intersectionObserver = new IntersectionObserver(function (entries) {
              return _this10.intersectionManager(entries);
            });
          }
        }

        _createClass(Container, [{
          key: "options",
          get: function get() {
            return this._options;
          }
        }, {
          key: "sourceOptions",
          get: function get() {
            return this._sourceOptions;
          }
        }, {
          key: "play",
          value: function play(force) {
            var needsUpdate = this.paused || force;

            if (this.firstStart && !this.actualOptions.autoPlay) {
              this.firstStart = false;
              return;
            }

            if (this.paused) {
              this.paused = false;
            }

            if (needsUpdate) {
              var _iterator6 = _createForOfIteratorHelper(this.plugins),
                  _step6;

              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var _step6$value = _slicedToArray(_step6.value, 2),
                      plugin = _step6$value[1];

                  if (plugin.play) {
                    plugin.play();
                  }
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }
            }

            this.draw(needsUpdate || false);
          }
        }, {
          key: "pause",
          value: function pause() {
            if (this.drawAnimationFrame !== undefined) {
              (0, Utils_1.cancelAnimation)()(this.drawAnimationFrame);
              delete this.drawAnimationFrame;
            }

            if (this.paused) {
              return;
            }

            var _iterator7 = _createForOfIteratorHelper(this.plugins),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var _step7$value = _slicedToArray(_step7.value, 2),
                    plugin = _step7$value[1];

                if (plugin.pause) {
                  plugin.pause();
                }
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }

            if (!this.pageHidden) {
              this.paused = true;
            }
          }
        }, {
          key: "draw",
          value: function draw(force) {
            var _this11 = this;

            var refreshTime = force;
            this.drawAnimationFrame = (0, Utils_1.animate)()(function (timestamp) {
              if (refreshTime) {
                _this11.lastFrameTime = undefined;
                refreshTime = false;
              }

              _this11.drawer.nextFrame(timestamp);
            });
          }
        }, {
          key: "getAnimationStatus",
          value: function getAnimationStatus() {
            return !this.paused && !this.pageHidden;
          }
        }, {
          key: "setNoise",
          value: function setNoise(noiseOrGenerator, init, update) {
            this.setPath(noiseOrGenerator, init, update);
          }
        }, {
          key: "setPath",
          value: function setPath(pathOrGenerator, init, update) {
            if (!pathOrGenerator) {
              return;
            }

            if (typeof pathOrGenerator === "function") {
              this.pathGenerator.generate = pathOrGenerator;

              if (init) {
                this.pathGenerator.init = init;
              }

              if (update) {
                this.pathGenerator.update = update;
              }
            } else {
              if (pathOrGenerator.generate) {
                this.pathGenerator.generate = pathOrGenerator.generate;
              }

              if (pathOrGenerator.init) {
                this.pathGenerator.init = pathOrGenerator.init;
              }

              if (pathOrGenerator.update) {
                this.pathGenerator.update = pathOrGenerator.update;
              }
            }
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this.stop();
            this.canvas.destroy();

            var _iterator8 = _createForOfIteratorHelper(this.drawers),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var _step8$value = _slicedToArray(_step8.value, 2),
                    drawer = _step8$value[1];

                if (drawer.destroy) {
                  drawer.destroy(this);
                }
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }

            var _iterator9 = _createForOfIteratorHelper(this.drawers.keys()),
                _step9;

            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var key = _step9.value;
                this.drawers["delete"](key);
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }

            this.destroyed = true;
          }
        }, {
          key: "exportImg",
          value: function exportImg(callback) {
            this.exportImage(callback);
          }
        }, {
          key: "exportImage",
          value: function exportImage(callback, type, quality) {
            var _a;

            return (_a = this.canvas.element) === null || _a === void 0 ? void 0 : _a.toBlob(callback, type !== null && type !== void 0 ? type : "image/png", quality);
          }
        }, {
          key: "exportConfiguration",
          value: function exportConfiguration() {
            return JSON.stringify(this.actualOptions, undefined, 2);
          }
        }, {
          key: "refresh",
          value: function refresh() {
            this.stop();
            return this.start();
          }
        }, {
          key: "reset",
          value: function reset() {
            this._options = new Options_1.Options();
            return this.refresh();
          }
        }, {
          key: "stop",
          value: function stop() {
            if (!this.started) {
              return;
            }

            this.firstStart = true;
            this.started = false;
            this.eventListeners.removeListeners();
            this.pause();
            this.particles.clear();
            this.canvas.clear();

            if (this.interactivity.element instanceof HTMLElement && this.intersectionObserver) {
              this.intersectionObserver.observe(this.interactivity.element);
            }

            var _iterator10 = _createForOfIteratorHelper(this.plugins),
                _step10;

            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var _step10$value = _slicedToArray(_step10.value, 2),
                    plugin = _step10$value[1];

                if (plugin.stop) {
                  plugin.stop();
                }
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }

            var _iterator11 = _createForOfIteratorHelper(this.plugins.keys()),
                _step11;

            try {
              for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                var key = _step11.value;
                this.plugins["delete"](key);
              }
            } catch (err) {
              _iterator11.e(err);
            } finally {
              _iterator11.f();
            }

            this.particles.linksColors = new Map();
            delete this.particles.grabLineColor;
            delete this.particles.linksColor;
          }
        }, {
          key: "loadTheme",
          value: function () {
            var _loadTheme = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(name) {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.currentTheme = name;
                      _context.next = 3;
                      return this.refresh();

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function loadTheme(_x) {
              return _loadTheme.apply(this, arguments);
            }

            return loadTheme;
          }()
        }, {
          key: "start",
          value: function () {
            var _start = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _iterator12, _step12, _step12$value, plugin;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!this.started) {
                        _context2.next = 2;
                        break;
                      }

                      return _context2.abrupt("return");

                    case 2:
                      _context2.next = 4;
                      return this.init();

                    case 4:
                      this.started = true;
                      this.eventListeners.addListeners();

                      if (this.interactivity.element instanceof HTMLElement && this.intersectionObserver) {
                        this.intersectionObserver.observe(this.interactivity.element);
                      }

                      _iterator12 = _createForOfIteratorHelper(this.plugins);
                      _context2.prev = 8;

                      _iterator12.s();

                    case 10:
                      if ((_step12 = _iterator12.n()).done) {
                        _context2.next = 20;
                        break;
                      }

                      _step12$value = _slicedToArray(_step12.value, 2), plugin = _step12$value[1];

                      if (!(plugin.startAsync !== undefined)) {
                        _context2.next = 17;
                        break;
                      }

                      _context2.next = 15;
                      return plugin.startAsync();

                    case 15:
                      _context2.next = 18;
                      break;

                    case 17:
                      if (plugin.start !== undefined) {
                        plugin.start();
                      }

                    case 18:
                      _context2.next = 10;
                      break;

                    case 20:
                      _context2.next = 25;
                      break;

                    case 22:
                      _context2.prev = 22;
                      _context2.t0 = _context2["catch"](8);

                      _iterator12.e(_context2.t0);

                    case 25:
                      _context2.prev = 25;

                      _iterator12.f();

                      return _context2.finish(25);

                    case 28:
                      this.play();

                    case 29:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[8, 22, 25, 28]]);
            }));

            function start() {
              return _start.apply(this, arguments);
            }

            return start;
          }()
        }, {
          key: "addClickHandler",
          value: function addClickHandler(callback) {
            var _this12 = this;

            var el = this.interactivity.element;

            if (!el) {
              return;
            }

            var clickOrTouchHandler = function clickOrTouchHandler(e, pos, radius) {
              if (_this12.destroyed) {
                return;
              }

              var pxRatio = _this12.retina.pixelRatio,
                  posRetina = {
                x: pos.x * pxRatio,
                y: pos.y * pxRatio
              },
                  particles = _this12.particles.quadTree.queryCircle(posRetina, radius * pxRatio);

              callback(e, particles);
            };

            var clickHandler = function clickHandler(e) {
              if (_this12.destroyed) {
                return;
              }

              var mouseEvent = e;
              var pos = {
                x: mouseEvent.offsetX || mouseEvent.clientX,
                y: mouseEvent.offsetY || mouseEvent.clientY
              };
              clickOrTouchHandler(e, pos, 1);
            };

            var touchStartHandler = function touchStartHandler() {
              if (_this12.destroyed) {
                return;
              }

              touched = true;
              touchMoved = false;
            };

            var touchMoveHandler = function touchMoveHandler() {
              if (_this12.destroyed) {
                return;
              }

              touchMoved = true;
            };

            var touchEndHandler = function touchEndHandler(e) {
              var _a, _b, _c;

              if (_this12.destroyed) {
                return;
              }

              if (touched && !touchMoved) {
                var touchEvent = e;
                var lastTouch = touchEvent.touches[touchEvent.touches.length - 1];

                if (!lastTouch) {
                  lastTouch = touchEvent.changedTouches[touchEvent.changedTouches.length - 1];

                  if (!lastTouch) {
                    return;
                  }
                }

                var canvasRect = (_a = _this12.canvas.element) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
                var pos = {
                  x: lastTouch.clientX - ((_b = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.left) !== null && _b !== void 0 ? _b : 0),
                  y: lastTouch.clientY - ((_c = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.top) !== null && _c !== void 0 ? _c : 0)
                };
                clickOrTouchHandler(e, pos, Math.max(lastTouch.radiusX, lastTouch.radiusY));
              }

              touched = false;
              touchMoved = false;
            };

            var touchCancelHandler = function touchCancelHandler() {
              if (_this12.destroyed) {
                return;
              }

              touched = false;
              touchMoved = false;
            };

            var touched = false;
            var touchMoved = false;
            el.addEventListener("click", clickHandler);
            el.addEventListener("touchstart", touchStartHandler);
            el.addEventListener("touchmove", touchMoveHandler);
            el.addEventListener("touchend", touchEndHandler);
            el.addEventListener("touchcancel", touchCancelHandler);
          }
        }, {
          key: "updateActualOptions",
          value: function updateActualOptions() {
            this.actualOptions.setResponsive(this.canvas.size.width, this.retina.pixelRatio, this._options);
            this.actualOptions.setTheme(this.currentTheme);
          }
        }, {
          key: "init",
          value: function () {
            var _init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var availablePlugins, _iterator13, _step13, _step13$value, id, plugin, _iterator14, _step14, _step14$value, drawer, _iterator15, _step15, _step15$value, _plugin, pathOptions, customGenerator, _iterator16, _step16, _step16$value, _plugin2;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.actualOptions = new Options_1.Options();
                      this.actualOptions.load(this._options);
                      this.retina.init();
                      this.canvas.init();
                      this.updateActualOptions();
                      this.canvas.initBackground();
                      this.canvas.resize();
                      this.zLayers = this.actualOptions.zLayers;
                      this.duration = (0, Utils_1.getRangeValue)(this.actualOptions.duration);
                      this.lifeTime = 0;
                      this.fpsLimit = this.actualOptions.fpsLimit > 0 ? this.actualOptions.fpsLimit : 60;
                      availablePlugins = Utils_1.Plugins.getAvailablePlugins(this);
                      _iterator13 = _createForOfIteratorHelper(availablePlugins);

                      try {
                        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                          _step13$value = _slicedToArray(_step13.value, 2), id = _step13$value[0], plugin = _step13$value[1];
                          this.plugins.set(id, plugin);
                        }
                      } catch (err) {
                        _iterator13.e(err);
                      } finally {
                        _iterator13.f();
                      }

                      _iterator14 = _createForOfIteratorHelper(this.drawers);
                      _context3.prev = 15;

                      _iterator14.s();

                    case 17:
                      if ((_step14 = _iterator14.n()).done) {
                        _context3.next = 24;
                        break;
                      }

                      _step14$value = _slicedToArray(_step14.value, 2), drawer = _step14$value[1];

                      if (!drawer.init) {
                        _context3.next = 22;
                        break;
                      }

                      _context3.next = 22;
                      return drawer.init(this);

                    case 22:
                      _context3.next = 17;
                      break;

                    case 24:
                      _context3.next = 29;
                      break;

                    case 26:
                      _context3.prev = 26;
                      _context3.t0 = _context3["catch"](15);

                      _iterator14.e(_context3.t0);

                    case 29:
                      _context3.prev = 29;

                      _iterator14.f();

                      return _context3.finish(29);

                    case 32:
                      _iterator15 = _createForOfIteratorHelper(this.plugins);
                      _context3.prev = 33;

                      _iterator15.s();

                    case 35:
                      if ((_step15 = _iterator15.n()).done) {
                        _context3.next = 46;
                        break;
                      }

                      _step15$value = _slicedToArray(_step15.value, 2), _plugin = _step15$value[1];

                      if (!_plugin.init) {
                        _context3.next = 41;
                        break;
                      }

                      _plugin.init(this.actualOptions);

                      _context3.next = 44;
                      break;

                    case 41:
                      if (!(_plugin.initAsync !== undefined)) {
                        _context3.next = 44;
                        break;
                      }

                      _context3.next = 44;
                      return _plugin.initAsync(this.actualOptions);

                    case 44:
                      _context3.next = 35;
                      break;

                    case 46:
                      _context3.next = 51;
                      break;

                    case 48:
                      _context3.prev = 48;
                      _context3.t1 = _context3["catch"](33);

                      _iterator15.e(_context3.t1);

                    case 51:
                      _context3.prev = 51;

                      _iterator15.f();

                      return _context3.finish(51);

                    case 54:
                      pathOptions = this.actualOptions.particles.move.path;

                      if (pathOptions.generator) {
                        customGenerator = Utils_1.Plugins.getPathGenerator(pathOptions.generator);

                        if (customGenerator) {
                          if (customGenerator.init) {
                            this.pathGenerator.init = customGenerator.init;
                          }

                          if (customGenerator.generate) {
                            this.pathGenerator.generate = customGenerator.generate;
                          }

                          if (customGenerator.update) {
                            this.pathGenerator.update = customGenerator.update;
                          }
                        }
                      }

                      this.particles.init();
                      this.particles.setDensity();
                      _iterator16 = _createForOfIteratorHelper(this.plugins);

                      try {
                        for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                          _step16$value = _slicedToArray(_step16.value, 2), _plugin2 = _step16$value[1];

                          if (_plugin2.particlesSetup !== undefined) {
                            _plugin2.particlesSetup();
                          }
                        }
                      } catch (err) {
                        _iterator16.e(err);
                      } finally {
                        _iterator16.f();
                      }

                    case 60:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[15, 26, 29, 32], [33, 48, 51, 54]]);
            }));

            function init() {
              return _init.apply(this, arguments);
            }

            return init;
          }()
        }, {
          key: "intersectionManager",
          value: function intersectionManager(entries) {
            if (!this.actualOptions.pauseOnOutsideViewport) {
              return;
            }

            var _iterator17 = _createForOfIteratorHelper(entries),
                _step17;

            try {
              for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                var entry = _step17.value;

                if (entry.target !== this.interactivity.element) {
                  continue;
                }

                if (entry.isIntersecting) {
                  this.play();
                } else {
                  this.pause();
                }
              }
            } catch (err) {
              _iterator17.e(err);
            } finally {
              _iterator17.f();
            }
          }
        }]);

        return Container;
      }();

      exports.Container = Container;
      /***/
    },

    /***/
    11377:
    /*!*****************************************************************!*\
      !*** ./node_modules/tsparticles/Core/ExternalInteractorBase.js ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ExternalInteractorBase = void 0;

      var Enums_1 = __webpack_require__(
      /*! ../Enums */
      39666);

      var ExternalInteractorBase = function ExternalInteractorBase(container) {
        _classCallCheck(this, ExternalInteractorBase);

        this.container = container;
        this.type = Enums_1.InteractorType.External;
      };

      exports.ExternalInteractorBase = ExternalInteractorBase;
      /***/
    },

    /***/
    41894:
    /*!*******************************************************!*\
      !*** ./node_modules/tsparticles/Core/FrameManager.js ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.FrameManager = void 0;

      var FrameManager = /*#__PURE__*/function () {
        function FrameManager(container) {
          _classCallCheck(this, FrameManager);

          this.container = container;
        }

        _createClass(FrameManager, [{
          key: "nextFrame",
          value: function nextFrame(timestamp) {
            var _a;

            try {
              var container = this.container;

              if (container.lastFrameTime !== undefined && timestamp < container.lastFrameTime + 1000 / container.fpsLimit) {
                container.draw(false);
                return;
              }

              (_a = container.lastFrameTime) !== null && _a !== void 0 ? _a : container.lastFrameTime = timestamp;
              var deltaValue = timestamp - container.lastFrameTime;
              var delta = {
                value: deltaValue,
                factor: 60 * deltaValue / 1000
              };
              container.lifeTime += delta.value;
              container.lastFrameTime = timestamp;

              if (deltaValue > 1000) {
                container.draw(false);
                return;
              }

              container.particles.draw(delta);

              if (container.duration > 0 && container.lifeTime > container.duration) {
                container.destroy();
                return;
              }

              if (container.getAnimationStatus()) {
                container.draw(false);
              }
            } catch (e) {
              console.error("tsParticles error in animation loop", e);
            }
          }
        }]);

        return FrameManager;
      }();

      exports.FrameManager = FrameManager;
      /***/
    },

    /***/
    75978:
    /*!*************************************************************!*\
      !*** ./node_modules/tsparticles/Core/InteractionManager.js ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.InteractionManager = void 0;

      var Utils_1 = __webpack_require__(
      /*! ../Utils */
      18942);

      var Enums_1 = __webpack_require__(
      /*! ../Enums */
      39666);

      var InteractionManager = /*#__PURE__*/function () {
        function InteractionManager(container) {
          _classCallCheck(this, InteractionManager);

          this.container = container;
          var interactors = Utils_1.Plugins.getInteractors(container);
          this.externalInteractors = [];
          this.particleInteractors = [];

          var _iterator18 = _createForOfIteratorHelper(interactors),
              _step18;

          try {
            for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
              var interactor = _step18.value;

              switch (interactor.type) {
                case Enums_1.InteractorType.External:
                  this.externalInteractors.push(interactor);
                  break;

                case Enums_1.InteractorType.Particles:
                  this.particleInteractors.push(interactor);
                  break;
              }
            }
          } catch (err) {
            _iterator18.e(err);
          } finally {
            _iterator18.f();
          }
        }

        _createClass(InteractionManager, [{
          key: "externalInteract",
          value: function externalInteract(delta) {
            var _iterator19 = _createForOfIteratorHelper(this.externalInteractors),
                _step19;

            try {
              for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                var interactor = _step19.value;

                if (interactor.isEnabled()) {
                  interactor.interact(delta);
                }
              }
            } catch (err) {
              _iterator19.e(err);
            } finally {
              _iterator19.f();
            }
          }
        }, {
          key: "particlesInteract",
          value: function particlesInteract(particle, delta) {
            var _iterator20 = _createForOfIteratorHelper(this.externalInteractors),
                _step20;

            try {
              for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                var interactor = _step20.value;
                interactor.reset(particle);
              }
            } catch (err) {
              _iterator20.e(err);
            } finally {
              _iterator20.f();
            }

            var _iterator21 = _createForOfIteratorHelper(this.particleInteractors),
                _step21;

            try {
              for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                var _interactor = _step21.value;

                if (_interactor.isEnabled(particle)) {
                  _interactor.interact(particle, delta);
                }
              }
            } catch (err) {
              _iterator21.e(err);
            } finally {
              _iterator21.f();
            }
          }
        }]);

        return InteractionManager;
      }();

      exports.InteractionManager = InteractionManager;
      /***/
    },

    /***/
    99723:
    /*!************************************************************!*\
      !*** ./node_modules/tsparticles/Core/Interfaces/Colors.js ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /***/
    },

    /***/
    51239:
    /*!***************************************************************!*\
      !*** ./node_modules/tsparticles/Core/Interfaces/Gradients.js ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /***/
    },

    /***/
    81909:
    /*!**************************************************************!*\
      !*** ./node_modules/tsparticles/Core/Interfaces/IAttract.js ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /***/
    },

    /***/
    24503:
    /*!*************************************************************!*\
      !*** ./node_modules/tsparticles/Core/Interfaces/IBounds.js ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /***/
    },

    /***/
    51157:
    /*!*************************************************************!*\
      !*** ./node_modules/tsparticles/Core/Interfaces/IBubble.js ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /***/
    },

    /***/
    35321:
    /*!*************************************************************************!*\
      !*** ./node_modules/tsparticles/Core/Interfaces/IBubbleParticleData.js ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /***/
    },

    /***/
    29681:
    /*!********************************************************************!*\
      !*** ./node_modules/tsparticles/Core/Interfaces/ICircleBouncer.js ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /***/
    },

    /***/
    92907:
    /*!*****************************************************************************!*\
      !*** ./node_modules/tsparticles/Core/Interfaces/IContainerInteractivity.js ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /***/
    },

    /***/
    47854:
    /*!**********************************************************************!*\
      !*** ./node_modules/tsparticles/Core/Interfaces/IContainerPlugin.js ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /***/
    },

    /***/
    96471:
    /*!******************************************************************!*\
      !*** ./node_modules/tsparticles/Core/Interfaces/ICoordinates.js ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /***/
    },

    /***/
    45422:
    /*!************************************************************!*\
      !*** ./node_modules/tsparticles/Core/Interfaces/IDelta.js ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /***/
    },

    /***/
    87058:
    /*!****************************************************************!*\
      !*** ./node_modules/tsparticles/Core/Interfaces/IDimension.js ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /***/
    },

    /***/
    97293:
    /*!***************************************************************!*\
      !*** ./node_modules/tsparticles/Core/Interfaces/IDistance.js ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /***/
    },

    /***/
    70135:
    /*!*************************************************************************!*\
      !*** ./node_modules/tsparticles/Core/Interfaces/IExternalInteractor.js ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /***/
    },

    /***/
    22382:
    /*!*****************************************************************!*\
      !*** ./node_modules/tsparticles/Core/Interfaces/IInteractor.js ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /***/
    },

    /***/
    59597:
    /*!****************************************************************!*\
      !*** ./node_modules/tsparticles/Core/Interfaces/IMouseData.js ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /***/
    },

    /***/
    75557:
    /*!************************************************************************!*\
      !*** ./node_modules/tsparticles/Core/Interfaces/IMovePathGenerator.js ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /***/
    },

    /***/
    71736:
    /*!***************************************************************!*\
      !*** ./node_modules/tsparticles/Core/Interfaces/IParticle.js ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /***/
    },

    /***/
    66086:
    /*!********************************************************************************!*\
      !*** ./node_modules/tsparticles/Core/Interfaces/IParticleGradientAnimation.js ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /***/
    },

    /***/
    22645:
    /*!*************************************************************************************!*\
      !*** ./node_modules/tsparticles/Core/Interfaces/IParticleGradientColorAnimation.js ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /***/
    },

    /***/
    66303:
    /*!***************************************************************************!*\
      !*** ./node_modules/tsparticles/Core/Interfaces/IParticleHslAnimation.js ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /***/
    },

    /***/
    13737:
    /*!*******************************************************************!*\
      !*** ./node_modules/tsparticles/Core/Interfaces/IParticleLife.js ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /***/
    },

    /***/
    28750:
    /*!********************************************************************!*\
      !*** ./node_modules/tsparticles/Core/Interfaces/IParticleLoops.js ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /***/
    },

    /***/
    77130:
    /*!**************************************************************************!*\
      !*** ./node_modules/tsparticles/Core/Interfaces/IParticleRetinaProps.js ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /***/
    },

    /***/
    48075:
    /*!*******************************************************************!*\
      !*** ./node_modules/tsparticles/Core/Interfaces/IParticleSpin.js ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /***/
    },

    /***/
    36271:
    /*!**********************************************************************!*\
      !*** ./node_modules/tsparticles/Core/Interfaces/IParticleUpdater.js ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /***/
    },

    /***/
    46127:
    /*!*****************************************************************************!*\
      !*** ./node_modules/tsparticles/Core/Interfaces/IParticleValueAnimation.js ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /***/
    },

    /***/
    67144:
    /*!**************************************************************************!*\
      !*** ./node_modules/tsparticles/Core/Interfaces/IParticlesInteractor.js ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /***/
    },

    /***/
    9854:
    /*!*************************************************************!*\
      !*** ./node_modules/tsparticles/Core/Interfaces/IPlugin.js ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /***/
    },

    /***/
    2058:
    /*!*****************************************************************!*\
      !*** ./node_modules/tsparticles/Core/Interfaces/IRangeValue.js ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /***/
    },

    /***/
    42826:
    /*!*********************************************************************!*\
      !*** ./node_modules/tsparticles/Core/Interfaces/IRectSideResult.js ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /***/
    },

    /***/
    69286:
    /*!**************************************************************!*\
      !*** ./node_modules/tsparticles/Core/Interfaces/IRepulse.js ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /***/
    },

    /***/
    29211:
    /*!******************************************************************!*\
      !*** ./node_modules/tsparticles/Core/Interfaces/IShapeDrawer.js ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /***/
    },

    /***/
    79725:
    /*!******************************************************************!*\
      !*** ./node_modules/tsparticles/Core/Interfaces/IShapeValues.js ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /***/
    },

    /***/
    71835:
    /*!***********************************************************!*\
      !*** ./node_modules/tsparticles/Core/Interfaces/index.js ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function get() {
            return m[k];
          }
        });
      } : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });

      var __exportStar = this && this.__exportStar || function (m, exports) {
        for (var p in m) {
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
        }
      };

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __exportStar(__webpack_require__(
      /*! ./Colors */
      99723), exports);

      __exportStar(__webpack_require__(
      /*! ./Gradients */
      51239), exports);

      __exportStar(__webpack_require__(
      /*! ./IAttract */
      81909), exports);

      __exportStar(__webpack_require__(
      /*! ./IBounds */
      24503), exports);

      __exportStar(__webpack_require__(
      /*! ./IBubble */
      51157), exports);

      __exportStar(__webpack_require__(
      /*! ./IBubbleParticleData */
      35321), exports);

      __exportStar(__webpack_require__(
      /*! ./ICircleBouncer */
      29681), exports);

      __exportStar(__webpack_require__(
      /*! ./IContainerInteractivity */
      92907), exports);

      __exportStar(__webpack_require__(
      /*! ./IContainerPlugin */
      47854), exports);

      __exportStar(__webpack_require__(
      /*! ./ICoordinates */
      96471), exports);

      __exportStar(__webpack_require__(
      /*! ./IDelta */
      45422), exports);

      __exportStar(__webpack_require__(
      /*! ./IDimension */
      87058), exports);

      __exportStar(__webpack_require__(
      /*! ./IDistance */
      97293), exports);

      __exportStar(__webpack_require__(
      /*! ./IExternalInteractor */
      70135), exports);

      __exportStar(__webpack_require__(
      /*! ./IInteractor */
      22382), exports);

      __exportStar(__webpack_require__(
      /*! ./IMouseData */
      59597), exports);

      __exportStar(__webpack_require__(
      /*! ./IMovePathGenerator */
      75557), exports);

      __exportStar(__webpack_require__(
      /*! ./IParticle */
      71736), exports);

      __exportStar(__webpack_require__(
      /*! ./IParticleGradientAnimation */
      66086), exports);

      __exportStar(__webpack_require__(
      /*! ./IParticleGradientColorAnimation */
      22645), exports);

      __exportStar(__webpack_require__(
      /*! ./IParticleHslAnimation */
      66303), exports);

      __exportStar(__webpack_require__(
      /*! ./IParticleLife */
      13737), exports);

      __exportStar(__webpack_require__(
      /*! ./IParticleLoops */
      28750), exports);

      __exportStar(__webpack_require__(
      /*! ./IParticleRetinaProps */
      77130), exports);

      __exportStar(__webpack_require__(
      /*! ./IParticleSpin */
      48075), exports);

      __exportStar(__webpack_require__(
      /*! ./IParticleUpdater */
      36271), exports);

      __exportStar(__webpack_require__(
      /*! ./IParticleValueAnimation */
      46127), exports);

      __exportStar(__webpack_require__(
      /*! ./IParticlesInteractor */
      67144), exports);

      __exportStar(__webpack_require__(
      /*! ./IPlugin */
      9854), exports);

      __exportStar(__webpack_require__(
      /*! ./IRangeValue */
      2058), exports);

      __exportStar(__webpack_require__(
      /*! ./IRectSideResult */
      42826), exports);

      __exportStar(__webpack_require__(
      /*! ./IRepulse */
      69286), exports);

      __exportStar(__webpack_require__(
      /*! ./IShapeDrawer */
      29211), exports);

      __exportStar(__webpack_require__(
      /*! ./IShapeValues */
      79725), exports);
      /***/

    },

    /***/
    7372:
    /*!*************************************************!*\
      !*** ./node_modules/tsparticles/Core/Loader.js ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Loader = void 0;

      var Container_1 = __webpack_require__(
      /*! ./Container */
      48894);

      var Utils_1 = __webpack_require__(
      /*! ../Utils */
      18942);

      var tsParticlesDom = [];

      function fetchError(statusCode) {
        console.error("Error tsParticles - fetch status: ".concat(statusCode));
        console.error("Error tsParticles - File config not found");
      }

      var Loader = /*#__PURE__*/function () {
        function Loader() {
          _classCallCheck(this, Loader);
        }

        _createClass(Loader, null, [{
          key: "dom",
          value: function dom() {
            return tsParticlesDom;
          }
        }, {
          key: "domItem",
          value: function domItem(index) {
            var dom = Loader.dom();
            var item = dom[index];

            if (item && !item.destroyed) {
              return item;
            }

            dom.splice(index, 1);
          }
        }, {
          key: "load",
          value: function () {
            var _load = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(tagId, options, index) {
              var domContainer;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      domContainer = document.getElementById(tagId);

                      if (!domContainer) {
                        domContainer = document.createElement("div");
                        domContainer.id = tagId;
                        document.append(domContainer);
                      }

                      return _context4.abrupt("return", Loader.set(tagId, domContainer, options, index));

                    case 3:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4);
            }));

            function load(_x2, _x3, _x4) {
              return _load.apply(this, arguments);
            }

            return load;
          }()
        }, {
          key: "set",
          value: function () {
            var _set = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(id, domContainer, options, index) {
              var currentOptions, dom, oldIndex, old, canvasEl, generatedCanvas, existingCanvases, newItem;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      currentOptions = options instanceof Array ? (0, Utils_1.itemFromArray)(options, index) : options;
                      dom = Loader.dom();
                      oldIndex = dom.findIndex(function (v) {
                        return v.id === id;
                      });

                      if (oldIndex >= 0) {
                        old = Loader.domItem(oldIndex);

                        if (old && !old.destroyed) {
                          old.destroy();
                          dom.splice(oldIndex, 1);
                        }
                      }

                      if (domContainer.tagName.toLowerCase() === "canvas") {
                        canvasEl = domContainer;
                        generatedCanvas = false;
                      } else {
                        existingCanvases = domContainer.getElementsByTagName("canvas");

                        if (existingCanvases.length) {
                          canvasEl = existingCanvases[0];

                          if (!canvasEl.className) {
                            canvasEl.className = Utils_1.Constants.canvasClass;
                          }

                          generatedCanvas = false;
                        } else {
                          generatedCanvas = true;
                          canvasEl = document.createElement("canvas");
                          canvasEl.className = Utils_1.Constants.canvasClass;
                          canvasEl.style.width = "100%";
                          canvasEl.style.height = "100%";
                          domContainer.appendChild(canvasEl);
                        }
                      }

                      newItem = new Container_1.Container(id, currentOptions);

                      if (oldIndex >= 0) {
                        dom.splice(oldIndex, 0, newItem);
                      } else {
                        dom.push(newItem);
                      }

                      newItem.canvas.loadCanvas(canvasEl, generatedCanvas);
                      _context5.next = 10;
                      return newItem.start();

                    case 10:
                      return _context5.abrupt("return", newItem);

                    case 11:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            }));

            function set(_x5, _x6, _x7, _x8) {
              return _set.apply(this, arguments);
            }

            return set;
          }()
        }, {
          key: "loadJSON",
          value: function () {
            var _loadJSON = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(tagId, jsonUrl, index) {
              var url, response;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      url = jsonUrl instanceof Array ? (0, Utils_1.itemFromArray)(jsonUrl, index) : jsonUrl;
                      _context6.next = 3;
                      return fetch(url);

                    case 3:
                      response = _context6.sent;

                      if (!response.ok) {
                        _context6.next = 13;
                        break;
                      }

                      _context6.t0 = Loader;
                      _context6.t1 = tagId;
                      _context6.next = 9;
                      return response.json();

                    case 9:
                      _context6.t2 = _context6.sent;
                      return _context6.abrupt("return", _context6.t0.load.call(_context6.t0, _context6.t1, _context6.t2));

                    case 13:
                      fetchError(response.status);

                    case 14:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6);
            }));

            function loadJSON(_x9, _x10, _x11) {
              return _loadJSON.apply(this, arguments);
            }

            return loadJSON;
          }()
        }, {
          key: "setJSON",
          value: function () {
            var _setJSON = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(id, domContainer, jsonUrl, index) {
              var url, response, options;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      url = jsonUrl instanceof Array ? (0, Utils_1.itemFromArray)(jsonUrl, index) : jsonUrl;
                      _context7.next = 3;
                      return fetch(url);

                    case 3:
                      response = _context7.sent;

                      if (!response.ok) {
                        _context7.next = 11;
                        break;
                      }

                      _context7.next = 7;
                      return response.json();

                    case 7:
                      options = _context7.sent;
                      return _context7.abrupt("return", Loader.set(id, domContainer, options));

                    case 11:
                      fetchError(response.status);

                    case 12:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7);
            }));

            function setJSON(_x12, _x13, _x14, _x15) {
              return _setJSON.apply(this, arguments);
            }

            return setJSON;
          }()
        }, {
          key: "setOnClickHandler",
          value: function setOnClickHandler(callback) {
            var dom = Loader.dom();

            if (dom.length === 0) {
              throw new Error("Can only set click handlers after calling tsParticles.load() or tsParticles.loadJSON()");
            }

            var _iterator22 = _createForOfIteratorHelper(dom),
                _step22;

            try {
              for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                var domItem = _step22.value;
                domItem.addClickHandler(callback);
              }
            } catch (err) {
              _iterator22.e(err);
            } finally {
              _iterator22.f();
            }
          }
        }]);

        return Loader;
      }();

      exports.Loader = Loader;
      /***/
    },

    /***/
    37563:
    /*!***************************************************!*\
      !*** ./node_modules/tsparticles/Core/Particle.js ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Particle = void 0;

      var ParticlesOptions_1 = __webpack_require__(
      /*! ../Options/Classes/Particles/ParticlesOptions */
      13599);

      var Shape_1 = __webpack_require__(
      /*! ../Options/Classes/Particles/Shape/Shape */
      9011);

      var Enums_1 = __webpack_require__(
      /*! ../Enums */
      39666);

      var Utils_1 = __webpack_require__(
      /*! ../Utils */
      18942);

      var Vector_1 = __webpack_require__(
      /*! ./Particle/Vector */
      27440);

      var Vector3d_1 = __webpack_require__(
      /*! ./Particle/Vector3d */
      44813);

      var fixOutMode = function fixOutMode(data) {
        if ((0, Utils_1.isInArray)(data.outMode, data.checkModes) || (0, Utils_1.isInArray)(data.outMode, data.checkModes)) {
          if (data.coord > data.maxCoord - data.radius * 2) {
            data.setCb(-data.radius);
          } else if (data.coord < data.radius * 2) {
            data.setCb(data.radius);
          }
        }
      };

      var Particle = /*#__PURE__*/function () {
        function Particle(id, container, position, overrideOptions, group) {
          _classCallCheck(this, Particle);

          var _a, _b, _c, _d, _e, _f, _g, _h, _j;

          this.id = id;
          this.container = container;
          this.group = group;
          this.fill = true;
          this.close = true;
          this.lastPathTime = 0;
          this.destroyed = false;
          this.unbreakable = false;
          this.splitCount = 0;
          this.misplaced = false;
          this.retina = {
            maxDistance: {}
          };
          var pxRatio = container.retina.pixelRatio;
          var mainOptions = container.actualOptions;
          var particlesOptions = new ParticlesOptions_1.ParticlesOptions();
          particlesOptions.load(mainOptions.particles);
          var shapeType = particlesOptions.shape.type;
          var reduceDuplicates = particlesOptions.reduceDuplicates;
          this.shape = shapeType instanceof Array ? (0, Utils_1.itemFromArray)(shapeType, this.id, reduceDuplicates) : shapeType;

          if (overrideOptions === null || overrideOptions === void 0 ? void 0 : overrideOptions.shape) {
            if (overrideOptions.shape.type) {
              var overrideShapeType = overrideOptions.shape.type;
              this.shape = overrideShapeType instanceof Array ? (0, Utils_1.itemFromArray)(overrideShapeType, this.id, reduceDuplicates) : overrideShapeType;
            }

            var shapeOptions = new Shape_1.Shape();
            shapeOptions.load(overrideOptions.shape);

            if (this.shape) {
              this.shapeData = this.loadShapeData(shapeOptions, reduceDuplicates);
            }
          } else {
            this.shapeData = this.loadShapeData(particlesOptions.shape, reduceDuplicates);
          }

          if (overrideOptions !== undefined) {
            particlesOptions.load(overrideOptions);
          }

          if (((_a = this.shapeData) === null || _a === void 0 ? void 0 : _a.particles) !== undefined) {
            particlesOptions.load((_b = this.shapeData) === null || _b === void 0 ? void 0 : _b.particles);
          }

          this.fill = (_d = (_c = this.shapeData) === null || _c === void 0 ? void 0 : _c.fill) !== null && _d !== void 0 ? _d : this.fill;
          this.close = (_f = (_e = this.shapeData) === null || _e === void 0 ? void 0 : _e.close) !== null && _f !== void 0 ? _f : this.close;
          this.options = particlesOptions;
          this.pathDelay = (0, Utils_1.getValue)(this.options.move.path.delay) * 1000;
          var zIndexValue = (0, Utils_1.getRangeValue)(this.options.zIndex.value);
          container.retina.initParticle(this);
          var sizeOptions = this.options.size,
              sizeRange = sizeOptions.value;
          this.size = {
            enable: sizeOptions.animation.enable,
            value: (0, Utils_1.getValue)(sizeOptions) * container.retina.pixelRatio,
            max: (0, Utils_1.getRangeMax)(sizeRange) * pxRatio,
            min: (0, Utils_1.getRangeMin)(sizeRange) * pxRatio,
            loops: 0,
            maxLoops: sizeOptions.animation.count
          };
          var sizeAnimation = sizeOptions.animation;

          if (sizeAnimation.enable) {
            this.size.status = Enums_1.AnimationStatus.increasing;

            switch (sizeAnimation.startValue) {
              case Enums_1.StartValueType.min:
                this.size.value = this.size.min;
                this.size.status = Enums_1.AnimationStatus.increasing;
                break;

              case Enums_1.StartValueType.random:
                this.size.value = (0, Utils_1.randomInRange)(this.size) * pxRatio;
                this.size.status = Math.random() >= 0.5 ? Enums_1.AnimationStatus.increasing : Enums_1.AnimationStatus.decreasing;
                break;

              case Enums_1.StartValueType.max:
              default:
                this.size.value = this.size.max;
                this.size.status = Enums_1.AnimationStatus.decreasing;
                break;
            }

            this.size.velocity = ((_g = this.retina.sizeAnimationSpeed) !== null && _g !== void 0 ? _g : container.retina.sizeAnimationSpeed) / 100 * container.retina.reduceFactor;

            if (!sizeAnimation.sync) {
              this.size.velocity *= Math.random();
            }
          }

          this.direction = (0, Utils_1.getParticleDirectionAngle)(this.options.move.direction);
          this.bubble = {
            inRange: false
          };
          this.initialVelocity = this.calculateVelocity();
          this.velocity = this.initialVelocity.copy();
          this.moveDecay = 1 - (0, Utils_1.getRangeValue)(this.options.move.decay);
          this.position = this.calcPosition(container, position, (0, Utils_1.clamp)(zIndexValue, 0, container.zLayers));
          this.initialPosition = this.position.copy();
          this.offset = Vector_1.Vector.origin;
          var particles = container.particles;
          particles.needsSort = particles.needsSort || particles.lastZIndex < this.position.z;
          particles.lastZIndex = this.position.z;
          this.zIndexFactor = this.position.z / container.zLayers;
          this.sides = 24;
          var drawer = container.drawers.get(this.shape);

          if (!drawer) {
            drawer = Utils_1.Plugins.getShapeDrawer(this.shape);

            if (drawer) {
              container.drawers.set(this.shape, drawer);
            }
          }

          if (drawer === null || drawer === void 0 ? void 0 : drawer.loadShape) {
            drawer === null || drawer === void 0 ? void 0 : drawer.loadShape(this);
          }

          var sideCountFunc = drawer === null || drawer === void 0 ? void 0 : drawer.getSidesCount;

          if (sideCountFunc) {
            this.sides = sideCountFunc(this);
          }

          this.life = this.loadLife();
          this.spawning = this.life.delay > 0;

          if (this.options.move.spin.enable) {
            var spinPos = (_h = this.options.move.spin.position) !== null && _h !== void 0 ? _h : {
              x: 50,
              y: 50
            };
            var spinCenter = {
              x: spinPos.x / 100 * container.canvas.size.width,
              y: spinPos.y / 100 * container.canvas.size.height
            };
            var pos = this.getPosition();
            var distance = (0, Utils_1.getDistance)(pos, spinCenter);
            this.spin = {
              center: spinCenter,
              direction: this.velocity.x >= 0 ? Enums_1.RotateDirection.clockwise : Enums_1.RotateDirection.counterClockwise,
              angle: this.velocity.angle,
              radius: distance,
              acceleration: (_j = this.retina.spinAcceleration) !== null && _j !== void 0 ? _j : (0, Utils_1.getRangeValue)(this.options.move.spin.acceleration)
            };
          }

          this.shadowColor = (0, Utils_1.colorToRgb)(this.options.shadow.color);

          var _iterator23 = _createForOfIteratorHelper(container.particles.updaters),
              _step23;

          try {
            for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
              var updater = _step23.value;

              if (updater.init) {
                updater.init(this);
              }
            }
          } catch (err) {
            _iterator23.e(err);
          } finally {
            _iterator23.f();
          }

          if (drawer && drawer.particleInit) {
            drawer.particleInit(container, this);
          }

          var _iterator24 = _createForOfIteratorHelper(container.plugins),
              _step24;

          try {
            for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
              var _step24$value = _slicedToArray(_step24.value, 2),
                  plugin = _step24$value[1];

              if (plugin.particleCreated) {
                plugin.particleCreated(this);
              }
            }
          } catch (err) {
            _iterator24.e(err);
          } finally {
            _iterator24.f();
          }
        }

        _createClass(Particle, [{
          key: "isVisible",
          value: function isVisible() {
            return !this.destroyed && !this.spawning && this.isInsideCanvas();
          }
        }, {
          key: "isInsideCanvas",
          value: function isInsideCanvas() {
            var radius = this.getRadius();
            var canvasSize = this.container.canvas.size;
            return this.position.x >= -radius && this.position.y >= -radius && this.position.y <= canvasSize.height + radius && this.position.x <= canvasSize.width + radius;
          }
        }, {
          key: "draw",
          value: function draw(delta) {
            var container = this.container;

            var _iterator25 = _createForOfIteratorHelper(container.plugins),
                _step25;

            try {
              for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                var _step25$value = _slicedToArray(_step25.value, 2),
                    plugin = _step25$value[1];

                container.canvas.drawParticlePlugin(plugin, this, delta);
              }
            } catch (err) {
              _iterator25.e(err);
            } finally {
              _iterator25.f();
            }

            container.canvas.drawParticle(this, delta);
          }
        }, {
          key: "getPosition",
          value: function getPosition() {
            return {
              x: this.position.x + this.offset.x,
              y: this.position.y + this.offset.y,
              z: this.position.z
            };
          }
        }, {
          key: "getRadius",
          value: function getRadius() {
            var _a;

            return (_a = this.bubble.radius) !== null && _a !== void 0 ? _a : this.size.value;
          }
        }, {
          key: "getMass",
          value: function getMass() {
            return Math.pow(this.getRadius(), 2) * Math.PI / 2;
          }
        }, {
          key: "getFillColor",
          value: function getFillColor() {
            var _a, _b, _c;

            var color = (_a = this.bubble.color) !== null && _a !== void 0 ? _a : (0, Utils_1.getHslFromAnimation)(this.color);

            if (color && this.roll && (this.backColor || this.roll.alter)) {
              var rolled = Math.floor(((_c = (_b = this.roll) === null || _b === void 0 ? void 0 : _b.angle) !== null && _c !== void 0 ? _c : 0) / (Math.PI / 2)) % 2;

              if (rolled) {
                if (this.backColor) {
                  return this.backColor;
                }

                if (this.roll.alter) {
                  return (0, Utils_1.alterHsl)(color, this.roll.alter.type, this.roll.alter.value);
                }
              }
            }

            return color;
          }
        }, {
          key: "getStrokeColor",
          value: function getStrokeColor() {
            var _a, _b;

            return (_b = (_a = this.bubble.color) !== null && _a !== void 0 ? _a : (0, Utils_1.getHslFromAnimation)(this.strokeColor)) !== null && _b !== void 0 ? _b : this.getFillColor();
          }
        }, {
          key: "destroy",
          value: function destroy(override) {
            this.destroyed = true;
            this.bubble.inRange = false;

            if (this.unbreakable) {
              return;
            }

            this.destroyed = true;
            this.bubble.inRange = false;

            var _iterator26 = _createForOfIteratorHelper(this.container.plugins),
                _step26;

            try {
              for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                var _step26$value = _slicedToArray(_step26.value, 2),
                    plugin = _step26$value[1];

                if (plugin.particleDestroyed) {
                  plugin.particleDestroyed(this, override);
                }
              }
            } catch (err) {
              _iterator26.e(err);
            } finally {
              _iterator26.f();
            }

            if (override) {
              return;
            }

            var destroyOptions = this.options.destroy;

            if (destroyOptions.mode === Enums_1.DestroyMode.split) {
              this.split();
            }
          }
        }, {
          key: "reset",
          value: function reset() {
            if (this.opacity) {
              this.opacity.loops = 0;
            }

            this.size.loops = 0;
          }
        }, {
          key: "split",
          value: function split() {
            var splitOptions = this.options.destroy.split;

            if (splitOptions.count >= 0 && this.splitCount++ > splitOptions.count) {
              return;
            }

            var rate = (0, Utils_1.getRangeValue)(splitOptions.rate.value);

            for (var i = 0; i < rate; i++) {
              this.container.particles.addSplitParticle(this);
            }
          }
        }, {
          key: "calcPosition",
          value: function calcPosition(container, position, zIndex) {
            var tryCount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

            var _a, _b, _c, _d, _e, _f;

            var _iterator27 = _createForOfIteratorHelper(container.plugins),
                _step27;

            try {
              for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
                var _step27$value = _slicedToArray(_step27.value, 2),
                    plugin = _step27$value[1];

                var pluginPos = plugin.particlePosition !== undefined ? plugin.particlePosition(position, this) : undefined;

                if (pluginPos !== undefined) {
                  return Vector3d_1.Vector3d.create(pluginPos.x, pluginPos.y, zIndex);
                }
              }
            } catch (err) {
              _iterator27.e(err);
            } finally {
              _iterator27.f();
            }

            var canvasSize = container.canvas.size;
            var pos = Vector3d_1.Vector3d.create((_a = position === null || position === void 0 ? void 0 : position.x) !== null && _a !== void 0 ? _a : Math.random() * canvasSize.width, (_b = position === null || position === void 0 ? void 0 : position.y) !== null && _b !== void 0 ? _b : Math.random() * canvasSize.height, zIndex);
            var radius = this.getRadius();

            var outModes = this.options.move.outModes,
                fixHorizontal = function fixHorizontal(outMode) {
              fixOutMode({
                outMode: outMode,
                checkModes: [Enums_1.OutMode.bounce, Enums_1.OutMode.bounceHorizontal],
                coord: pos.x,
                maxCoord: container.canvas.size.width,
                setCb: function setCb(value) {
                  return pos.x += value;
                },
                radius: radius
              });
            },
                fixVertical = function fixVertical(outMode) {
              fixOutMode({
                outMode: outMode,
                checkModes: [Enums_1.OutMode.bounce, Enums_1.OutMode.bounceVertical],
                coord: pos.y,
                maxCoord: container.canvas.size.height,
                setCb: function setCb(value) {
                  return pos.y += value;
                },
                radius: radius
              });
            };

            fixHorizontal((_c = outModes.left) !== null && _c !== void 0 ? _c : outModes["default"]);
            fixHorizontal((_d = outModes.right) !== null && _d !== void 0 ? _d : outModes["default"]);
            fixVertical((_e = outModes.top) !== null && _e !== void 0 ? _e : outModes["default"]);
            fixVertical((_f = outModes.bottom) !== null && _f !== void 0 ? _f : outModes["default"]);

            if (this.checkOverlap(pos, tryCount)) {
              return this.calcPosition(container, undefined, zIndex, tryCount + 1);
            }

            return pos;
          }
        }, {
          key: "checkOverlap",
          value: function checkOverlap(pos) {
            var tryCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var collisionsOptions = this.options.collisions;
            var radius = this.getRadius();

            if (!collisionsOptions.enable) {
              return false;
            }

            var overlapOptions = collisionsOptions.overlap;

            if (overlapOptions.enable) {
              return false;
            }

            var retries = overlapOptions.retries;

            if (retries >= 0 && tryCount > retries) {
              throw new Error("Particle is overlapping and can't be placed");
            }

            var overlaps = false;

            var _iterator28 = _createForOfIteratorHelper(this.container.particles.array),
                _step28;

            try {
              for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
                var particle = _step28.value;

                if ((0, Utils_1.getDistance)(pos, particle.position) < radius + particle.getRadius()) {
                  overlaps = true;
                  break;
                }
              }
            } catch (err) {
              _iterator28.e(err);
            } finally {
              _iterator28.f();
            }

            return overlaps;
          }
        }, {
          key: "calculateVelocity",
          value: function calculateVelocity() {
            var baseVelocity = (0, Utils_1.getParticleBaseVelocity)(this.direction);
            var res = baseVelocity.copy();
            var moveOptions = this.options.move;
            var rad = Math.PI / 180 * moveOptions.angle.value;
            var radOffset = Math.PI / 180 * moveOptions.angle.offset;
            var range = {
              left: radOffset - rad / 2,
              right: radOffset + rad / 2
            };

            if (!moveOptions.straight) {
              res.angle += (0, Utils_1.randomInRange)((0, Utils_1.setRangeValue)(range.left, range.right));
            }

            if (moveOptions.random && typeof moveOptions.speed === "number") {
              res.length *= Math.random();
            }

            return res;
          }
        }, {
          key: "loadShapeData",
          value: function loadShapeData(shapeOptions, reduceDuplicates) {
            var shapeData = shapeOptions.options[this.shape];

            if (shapeData) {
              return (0, Utils_1.deepExtend)({}, shapeData instanceof Array ? (0, Utils_1.itemFromArray)(shapeData, this.id, reduceDuplicates) : shapeData);
            }
          }
        }, {
          key: "loadLife",
          value: function loadLife() {
            var container = this.container;
            var particlesOptions = this.options;
            var lifeOptions = particlesOptions.life;
            var life = {
              delay: container.retina.reduceFactor ? (0, Utils_1.getRangeValue)(lifeOptions.delay.value) * (lifeOptions.delay.sync ? 1 : Math.random()) / container.retina.reduceFactor * 1000 : 0,
              delayTime: 0,
              duration: container.retina.reduceFactor ? (0, Utils_1.getRangeValue)(lifeOptions.duration.value) * (lifeOptions.duration.sync ? 1 : Math.random()) / container.retina.reduceFactor * 1000 : 0,
              time: 0,
              count: particlesOptions.life.count
            };

            if (life.duration <= 0) {
              life.duration = -1;
            }

            if (life.count <= 0) {
              life.count = -1;
            }

            return life;
          }
        }]);

        return Particle;
      }();

      exports.Particle = Particle;
      /***/
    },

    /***/
    46977:
    /*!*********************************************************!*\
      !*** ./node_modules/tsparticles/Core/Particle/Mover.js ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Mover = void 0;

      var Utils_1 = __webpack_require__(
      /*! ../../Utils */
      18942);

      var Enums_1 = __webpack_require__(
      /*! ../../Enums */
      39666);

      function applyDistance(particle) {
        var initialPosition = particle.initialPosition;

        var _ref = (0, Utils_1.getDistances)(initialPosition, particle.position),
            dx = _ref.dx,
            dy = _ref.dy;

        var dxFixed = Math.abs(dx),
            dyFixed = Math.abs(dy);
        var hDistance = particle.retina.maxDistance.horizontal;
        var vDistance = particle.retina.maxDistance.vertical;

        if (!hDistance && !vDistance) {
          return;
        }

        if ((hDistance && dxFixed >= hDistance || vDistance && dyFixed >= vDistance) && !particle.misplaced) {
          particle.misplaced = !!hDistance && dxFixed > hDistance || !!vDistance && dyFixed > vDistance;

          if (hDistance) {
            particle.velocity.x = particle.velocity.y / 2 - particle.velocity.x;
          }

          if (vDistance) {
            particle.velocity.y = particle.velocity.x / 2 - particle.velocity.y;
          }
        } else if ((!hDistance || dxFixed < hDistance) && (!vDistance || dyFixed < vDistance) && particle.misplaced) {
          particle.misplaced = false;
        } else if (particle.misplaced) {
          var pos = particle.position,
              vel = particle.velocity;

          if (hDistance && (pos.x < initialPosition.x && vel.x < 0 || pos.x > initialPosition.x && vel.x > 0)) {
            vel.x *= -Math.random();
          }

          if (vDistance && (pos.y < initialPosition.y && vel.y < 0 || pos.y > initialPosition.y && vel.y > 0)) {
            vel.y *= -Math.random();
          }
        }
      }

      var Mover = /*#__PURE__*/function () {
        function Mover(container) {
          _classCallCheck(this, Mover);

          this.container = container;
        }

        _createClass(Mover, [{
          key: "move",
          value: function move(particle, delta) {
            if (particle.destroyed) {
              return;
            }

            this.moveParticle(particle, delta);
            this.moveParallax(particle);
          }
        }, {
          key: "moveParticle",
          value: function moveParticle(particle, delta) {
            var _a, _b, _c;

            var _d, _e;

            var particleOptions = particle.options;
            var moveOptions = particleOptions.move;

            if (!moveOptions.enable) {
              return;
            }

            var container = this.container,
                slowFactor = this.getProximitySpeedFactor(particle),
                baseSpeed = ((_a = (_d = particle.retina).moveSpeed) !== null && _a !== void 0 ? _a : _d.moveSpeed = (0, Utils_1.getRangeValue)(moveOptions.speed) * container.retina.pixelRatio) * container.retina.reduceFactor,
                moveDrift = (_b = (_e = particle.retina).moveDrift) !== null && _b !== void 0 ? _b : _e.moveDrift = (0, Utils_1.getRangeValue)(particle.options.move.drift) * container.retina.pixelRatio,
                maxSize = (0, Utils_1.getRangeMax)(particleOptions.size.value) * container.retina.pixelRatio,
                sizeFactor = moveOptions.size ? particle.getRadius() / maxSize : 1,
                diffFactor = 2,
                speedFactor = sizeFactor * slowFactor * (delta.factor || 1) / diffFactor,
                moveSpeed = baseSpeed * speedFactor;
            this.applyPath(particle, delta);
            var gravityOptions = moveOptions.gravity;
            var gravityFactor = gravityOptions.enable && gravityOptions.inverse ? -1 : 1;

            if (gravityOptions.enable && moveSpeed) {
              particle.velocity.y += gravityFactor * (gravityOptions.acceleration * delta.factor) / (60 * moveSpeed);
            }

            if (moveDrift && moveSpeed) {
              particle.velocity.x += moveDrift * delta.factor / (60 * moveSpeed);
            }

            var decay = particle.moveDecay;

            if (decay != 1) {
              particle.velocity.multTo(decay);
            }

            var velocity = particle.velocity.mult(moveSpeed);
            var maxSpeed = (_c = particle.retina.maxSpeed) !== null && _c !== void 0 ? _c : container.retina.maxSpeed;

            if (gravityOptions.enable && gravityOptions.maxSpeed > 0 && (!gravityOptions.inverse && velocity.y >= 0 && velocity.y >= maxSpeed || gravityOptions.inverse && velocity.y <= 0 && velocity.y <= -maxSpeed)) {
              velocity.y = gravityFactor * maxSpeed;

              if (moveSpeed) {
                particle.velocity.y = velocity.y / moveSpeed;
              }
            }

            var zIndexOptions = particle.options.zIndex,
                zVelocityFactor = Math.pow(1 - particle.zIndexFactor, zIndexOptions.velocityRate);

            if (moveOptions.spin.enable) {
              this.spin(particle, moveSpeed);
            } else {
              if (zVelocityFactor != 1) {
                velocity.multTo(zVelocityFactor);
              }

              particle.position.addTo(velocity);

              if (moveOptions.vibrate) {
                particle.position.x += Math.sin(particle.position.x * Math.cos(particle.position.y));
                particle.position.y += Math.cos(particle.position.y * Math.sin(particle.position.x));
              }
            }

            applyDistance(particle);
          }
        }, {
          key: "spin",
          value: function spin(particle, moveSpeed) {
            var container = this.container;

            if (!particle.spin) {
              return;
            }

            var updateFunc = {
              x: particle.spin.direction === Enums_1.RotateDirection.clockwise ? Math.cos : Math.sin,
              y: particle.spin.direction === Enums_1.RotateDirection.clockwise ? Math.sin : Math.cos
            };
            particle.position.x = particle.spin.center.x + particle.spin.radius * updateFunc.x(particle.spin.angle);
            particle.position.y = particle.spin.center.y + particle.spin.radius * updateFunc.y(particle.spin.angle);
            particle.spin.radius += particle.spin.acceleration;
            var maxCanvasSize = Math.max(container.canvas.size.width, container.canvas.size.height);

            if (particle.spin.radius > maxCanvasSize / 2) {
              particle.spin.radius = maxCanvasSize / 2;
              particle.spin.acceleration *= -1;
            } else if (particle.spin.radius < 0) {
              particle.spin.radius = 0;
              particle.spin.acceleration *= -1;
            }

            particle.spin.angle += moveSpeed / 100 * (1 - particle.spin.radius / maxCanvasSize);
          }
        }, {
          key: "applyPath",
          value: function applyPath(particle, delta) {
            var particlesOptions = particle.options;
            var pathOptions = particlesOptions.move.path;
            var pathEnabled = pathOptions.enable;

            if (!pathEnabled) {
              return;
            }

            var container = this.container;

            if (particle.lastPathTime <= particle.pathDelay) {
              particle.lastPathTime += delta.value;
              return;
            }

            var path = container.pathGenerator.generate(particle);
            particle.velocity.addTo(path);

            if (pathOptions.clamp) {
              particle.velocity.x = (0, Utils_1.clamp)(particle.velocity.x, -1, 1);
              particle.velocity.y = (0, Utils_1.clamp)(particle.velocity.y, -1, 1);
            }

            particle.lastPathTime -= particle.pathDelay;
          }
        }, {
          key: "moveParallax",
          value: function moveParallax(particle) {
            var container = this.container;
            var options = container.actualOptions;

            if ((0, Utils_1.isSsr)() || !options.interactivity.events.onHover.parallax.enable) {
              return;
            }

            var parallaxForce = options.interactivity.events.onHover.parallax.force;
            var mousePos = container.interactivity.mouse.position;

            if (!mousePos) {
              return;
            }

            var canvasCenter = {
              x: container.canvas.size.width / 2,
              y: container.canvas.size.height / 2
            };
            var parallaxSmooth = options.interactivity.events.onHover.parallax.smooth;
            var factor = particle.getRadius() / parallaxForce;
            var tmp = {
              x: (mousePos.x - canvasCenter.x) * factor,
              y: (mousePos.y - canvasCenter.y) * factor
            };
            particle.offset.x += (tmp.x - particle.offset.x) / parallaxSmooth;
            particle.offset.y += (tmp.y - particle.offset.y) / parallaxSmooth;
          }
        }, {
          key: "getProximitySpeedFactor",
          value: function getProximitySpeedFactor(particle) {
            var container = this.container;
            var options = container.actualOptions;
            var active = (0, Utils_1.isInArray)(Enums_1.HoverMode.slow, options.interactivity.events.onHover.mode);

            if (!active) {
              return 1;
            }

            var mousePos = this.container.interactivity.mouse.position;

            if (!mousePos) {
              return 1;
            }

            var particlePos = particle.getPosition();
            var dist = (0, Utils_1.getDistance)(mousePos, particlePos);
            var radius = container.retina.slowModeRadius;

            if (dist > radius) {
              return 1;
            }

            var proximityFactor = dist / radius || 0;
            var slowFactor = options.interactivity.modes.slow.factor;
            return proximityFactor / slowFactor;
          }
        }]);

        return Mover;
      }();

      exports.Mover = Mover;
      /***/
    },

    /***/
    27440:
    /*!**********************************************************!*\
      !*** ./node_modules/tsparticles/Core/Particle/Vector.js ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Vector = void 0;

      var Vector = /*#__PURE__*/function () {
        function Vector(x, y) {
          _classCallCheck(this, Vector);

          var defX, defY;

          if (y === undefined) {
            if (typeof x === "number") {
              throw new Error("tsParticles - Vector not initialized correctly");
            }

            var coords = x;
            var _ref2 = [coords.x, coords.y];
            defX = _ref2[0];
            defY = _ref2[1];
          } else {
            defX = x;
            defY = y;
          }

          this.x = defX;
          this.y = defY;
        }

        _createClass(Vector, [{
          key: "angle",
          get: function get() {
            return Math.atan2(this.y, this.x);
          },
          set: function set(angle) {
            this.updateFromAngle(angle, this.length);
          }
        }, {
          key: "length",
          get: function get() {
            return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
          },
          set: function set(length) {
            this.updateFromAngle(this.angle, length);
          }
        }, {
          key: "add",
          value: function add(v) {
            return Vector.create(this.x + v.x, this.y + v.y);
          }
        }, {
          key: "addTo",
          value: function addTo(v) {
            this.x += v.x;
            this.y += v.y;
          }
        }, {
          key: "sub",
          value: function sub(v) {
            return Vector.create(this.x - v.x, this.y - v.y);
          }
        }, {
          key: "subFrom",
          value: function subFrom(v) {
            this.x -= v.x;
            this.y -= v.y;
          }
        }, {
          key: "mult",
          value: function mult(n) {
            return Vector.create(this.x * n, this.y * n);
          }
        }, {
          key: "multTo",
          value: function multTo(n) {
            this.x *= n;
            this.y *= n;
          }
        }, {
          key: "div",
          value: function div(n) {
            return Vector.create(this.x / n, this.y / n);
          }
        }, {
          key: "divTo",
          value: function divTo(n) {
            this.x /= n;
            this.y /= n;
          }
        }, {
          key: "distanceTo",
          value: function distanceTo(v) {
            return this.sub(v).length;
          }
        }, {
          key: "getLengthSq",
          value: function getLengthSq() {
            return Math.pow(this.x, 2) + Math.pow(this.y, 2);
          }
        }, {
          key: "distanceToSq",
          value: function distanceToSq(v) {
            return this.sub(v).getLengthSq();
          }
        }, {
          key: "manhattanDistanceTo",
          value: function manhattanDistanceTo(v) {
            return Math.abs(v.x - this.x) + Math.abs(v.y - this.y);
          }
        }, {
          key: "copy",
          value: function copy() {
            return Vector.clone(this);
          }
        }, {
          key: "setTo",
          value: function setTo(velocity) {
            this.x = velocity.x;
            this.y = velocity.y;
          }
        }, {
          key: "rotate",
          value: function rotate(angle) {
            return Vector.create(this.x * Math.cos(angle) - this.y * Math.sin(angle), this.x * Math.sin(angle) + this.y * Math.cos(angle));
          }
        }, {
          key: "updateFromAngle",
          value: function updateFromAngle(angle, length) {
            this.x = Math.cos(angle) * length;
            this.y = Math.sin(angle) * length;
          }
        }], [{
          key: "clone",
          value: function clone(source) {
            return Vector.create(source.x, source.y);
          }
        }, {
          key: "create",
          value: function create(x, y) {
            return new Vector(x, y);
          }
        }, {
          key: "origin",
          get: function get() {
            return Vector.create(0, 0);
          }
        }]);

        return Vector;
      }();

      exports.Vector = Vector;
      /***/
    },

    /***/
    44813:
    /*!************************************************************!*\
      !*** ./node_modules/tsparticles/Core/Particle/Vector3d.js ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Vector3d = void 0;

      var Vector_1 = __webpack_require__(
      /*! ./Vector */
      27440);

      var Vector3d = /*#__PURE__*/function (_Vector_1$Vector) {
        _inherits(Vector3d, _Vector_1$Vector);

        var _super2 = _createSuper(Vector3d);

        function Vector3d(x, y, z) {
          var _this13;

          _classCallCheck(this, Vector3d);

          _this13 = _super2.call(this, x, y);
          _this13.z = z === undefined ? x.z : z;
          return _this13;
        }

        _createClass(Vector3d, [{
          key: "add",
          value: function add(v) {
            return v instanceof Vector3d ? Vector3d.create(this.x + v.x, this.y + v.y, this.z + v.z) : _get(_getPrototypeOf(Vector3d.prototype), "add", this).call(this, v);
          }
        }, {
          key: "addTo",
          value: function addTo(v) {
            _get(_getPrototypeOf(Vector3d.prototype), "addTo", this).call(this, v);

            if (v instanceof Vector3d) {
              this.z += v.z;
            }
          }
        }, {
          key: "sub",
          value: function sub(v) {
            return v instanceof Vector3d ? Vector3d.create(this.x - v.x, this.y - v.y, this.z - v.z) : _get(_getPrototypeOf(Vector3d.prototype), "sub", this).call(this, v);
          }
        }, {
          key: "subFrom",
          value: function subFrom(v) {
            _get(_getPrototypeOf(Vector3d.prototype), "subFrom", this).call(this, v);

            if (v instanceof Vector3d) {
              this.z -= v.z;
            }
          }
        }, {
          key: "mult",
          value: function mult(n) {
            return Vector3d.create(this.x * n, this.y * n, this.z * n);
          }
        }, {
          key: "multTo",
          value: function multTo(n) {
            _get(_getPrototypeOf(Vector3d.prototype), "multTo", this).call(this, n);

            this.z *= n;
          }
        }, {
          key: "div",
          value: function div(n) {
            return Vector3d.create(this.x / n, this.y / n, this.z / n);
          }
        }, {
          key: "divTo",
          value: function divTo(n) {
            _get(_getPrototypeOf(Vector3d.prototype), "divTo", this).call(this, n);

            this.z /= n;
          }
        }, {
          key: "copy",
          value: function copy() {
            return Vector3d.clone(this);
          }
        }, {
          key: "setTo",
          value: function setTo(v) {
            _get(_getPrototypeOf(Vector3d.prototype), "setTo", this).call(this, v);

            if (v instanceof Vector3d) {
              this.z = v.z;
            }
          }
        }], [{
          key: "clone",
          value: function clone(source) {
            return Vector3d.create(source.x, source.y, source.z);
          }
        }, {
          key: "create",
          value: function create(x, y, z) {
            return new Vector3d(x, y, z);
          }
        }]);

        return Vector3d;
      }(Vector_1.Vector);

      exports.Vector3d = Vector3d;
      /***/
    },

    /***/
    18094:
    /*!****************************************************!*\
      !*** ./node_modules/tsparticles/Core/Particles.js ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Particles = void 0;

      var Particle_1 = __webpack_require__(
      /*! ./Particle */
      37563);

      var Utils_1 = __webpack_require__(
      /*! ../Utils */
      18942);

      var InteractionManager_1 = __webpack_require__(
      /*! ./InteractionManager */
      75978);

      var ParticlesOptions_1 = __webpack_require__(
      /*! ../Options/Classes/Particles/ParticlesOptions */
      13599);

      var Mover_1 = __webpack_require__(
      /*! ./Particle/Mover */
      46977);

      var Particles = /*#__PURE__*/function () {
        function Particles(container) {
          _classCallCheck(this, Particles);

          this.container = container;
          this.nextId = 0;
          this.array = [];
          this.zArray = [];
          this.mover = new Mover_1.Mover(container);
          this.limit = 0;
          this.needsSort = false;
          this.lastZIndex = 0;
          this.freqs = {
            links: new Map(),
            triangles: new Map()
          };
          this.interactionManager = new InteractionManager_1.InteractionManager(container);
          var canvasSize = this.container.canvas.size;
          this.linksColors = new Map();
          this.quadTree = new Utils_1.QuadTree(new Utils_1.Rectangle(-canvasSize.width / 4, -canvasSize.height / 4, canvasSize.width * 3 / 2, canvasSize.height * 3 / 2), 4);
          this.updaters = Utils_1.Plugins.getUpdaters(container);
        }

        _createClass(Particles, [{
          key: "count",
          get: function get() {
            return this.array.length;
          }
        }, {
          key: "init",
          value: function init() {
            var _a;

            var container = this.container;
            var options = container.actualOptions;
            this.lastZIndex = 0;
            this.needsSort = false;
            this.freqs.links = new Map();
            this.freqs.triangles = new Map();
            var handled = false;

            var _iterator29 = _createForOfIteratorHelper(container.plugins),
                _step29;

            try {
              for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
                var _step29$value = _slicedToArray(_step29.value, 2),
                    plugin = _step29$value[1];

                if (plugin.particlesInitialization !== undefined) {
                  handled = plugin.particlesInitialization();
                }

                if (handled) {
                  break;
                }
              }
            } catch (err) {
              _iterator29.e(err);
            } finally {
              _iterator29.f();
            }

            this.addManualParticles();

            if (!handled) {
              for (var group in options.particles.groups) {
                var groupOptions = options.particles.groups[group];

                for (var i = this.count, j = 0; j < ((_a = groupOptions.number) === null || _a === void 0 ? void 0 : _a.value) && i < options.particles.number.value; i++, j++) {
                  this.addParticle(undefined, groupOptions, group);
                }
              }

              for (var _i3 = this.count; _i3 < options.particles.number.value; _i3++) {
                this.addParticle();
              }
            }

            container.pathGenerator.init(container);
          }
        }, {
          key: "redraw",
          value: function redraw() {
            this.clear();
            this.init();
            this.draw({
              value: 0,
              factor: 0
            });
          }
        }, {
          key: "removeAt",
          value: function removeAt(index) {
            var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            var group = arguments.length > 2 ? arguments[2] : undefined;
            var override = arguments.length > 3 ? arguments[3] : undefined;

            if (!(index >= 0 && index <= this.count)) {
              return;
            }

            var deleted = 0;

            for (var i = index; deleted < quantity && i < this.count; i++) {
              var particle = this.array[i];

              if (!particle || particle.group !== group) {
                continue;
              }

              particle.destroy(override);
              this.array.splice(i--, 1);
              var zIdx = this.zArray.indexOf(particle);
              this.zArray.splice(zIdx, 1);
              deleted++;
            }
          }
        }, {
          key: "remove",
          value: function remove(particle, group, override) {
            this.removeAt(this.array.indexOf(particle), undefined, group, override);
          }
        }, {
          key: "update",
          value: function update(delta) {
            var container = this.container;
            var particlesToDelete = [];
            container.pathGenerator.update();

            var _iterator30 = _createForOfIteratorHelper(container.plugins),
                _step30;

            try {
              for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
                var _step30$value = _slicedToArray(_step30.value, 2),
                    plugin = _step30$value[1];

                if (plugin.update !== undefined) {
                  plugin.update(delta);
                }
              }
            } catch (err) {
              _iterator30.e(err);
            } finally {
              _iterator30.f();
            }

            var _iterator31 = _createForOfIteratorHelper(this.array),
                _step31;

            try {
              for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
                var _particle = _step31.value;
                var resizeFactor = container.canvas.resizeFactor;

                if (resizeFactor) {
                  _particle.position.x *= resizeFactor.width;
                  _particle.position.y *= resizeFactor.height;
                }

                _particle.bubble.inRange = false;

                var _iterator33 = _createForOfIteratorHelper(this.container.plugins),
                    _step33;

                try {
                  for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
                    var _step33$value = _slicedToArray(_step33.value, 2),
                        _plugin3 = _step33$value[1];

                    if (_particle.destroyed) {
                      break;
                    }

                    if (_plugin3.particleUpdate) {
                      _plugin3.particleUpdate(_particle, delta);
                    }
                  }
                } catch (err) {
                  _iterator33.e(err);
                } finally {
                  _iterator33.f();
                }

                this.mover.move(_particle, delta);

                if (_particle.destroyed) {
                  particlesToDelete.push(_particle);
                  continue;
                }

                this.quadTree.insert(new Utils_1.Point(_particle.getPosition(), _particle));
              }
            } catch (err) {
              _iterator31.e(err);
            } finally {
              _iterator31.f();
            }

            for (var _i4 = 0, _particlesToDelete = particlesToDelete; _i4 < _particlesToDelete.length; _i4++) {
              var particle = _particlesToDelete[_i4];
              this.remove(particle);
            }

            this.interactionManager.externalInteract(delta);

            var _iterator32 = _createForOfIteratorHelper(container.particles.array),
                _step32;

            try {
              for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
                var _particle2 = _step32.value;

                var _iterator34 = _createForOfIteratorHelper(this.updaters),
                    _step34;

                try {
                  for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
                    var updater = _step34.value;
                    updater.update(_particle2, delta);
                  }
                } catch (err) {
                  _iterator34.e(err);
                } finally {
                  _iterator34.f();
                }

                if (!_particle2.destroyed && !_particle2.spawning) {
                  this.interactionManager.particlesInteract(_particle2, delta);
                }
              }
            } catch (err) {
              _iterator32.e(err);
            } finally {
              _iterator32.f();
            }

            delete container.canvas.resizeFactor;
          }
        }, {
          key: "draw",
          value: function draw(delta) {
            var container = this.container;
            container.canvas.clear();
            var canvasSize = this.container.canvas.size;
            this.quadTree = new Utils_1.QuadTree(new Utils_1.Rectangle(-canvasSize.width / 4, -canvasSize.height / 4, canvasSize.width * 3 / 2, canvasSize.height * 3 / 2), 4);
            this.update(delta);

            if (this.needsSort) {
              this.zArray.sort(function (a, b) {
                return b.position.z - a.position.z || a.id - b.id;
              });
              this.lastZIndex = this.zArray[this.zArray.length - 1].position.z;
              this.needsSort = false;
            }

            var _iterator35 = _createForOfIteratorHelper(container.plugins),
                _step35;

            try {
              for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
                var _step35$value = _slicedToArray(_step35.value, 2),
                    plugin = _step35$value[1];

                container.canvas.drawPlugin(plugin, delta);
              }
            } catch (err) {
              _iterator35.e(err);
            } finally {
              _iterator35.f();
            }

            var _iterator36 = _createForOfIteratorHelper(this.zArray),
                _step36;

            try {
              for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
                var p = _step36.value;
                p.draw(delta);
              }
            } catch (err) {
              _iterator36.e(err);
            } finally {
              _iterator36.f();
            }
          }
        }, {
          key: "clear",
          value: function clear() {
            this.array = [];
            this.zArray = [];
          }
        }, {
          key: "push",
          value: function push(nb, mouse, overrideOptions, group) {
            this.pushing = true;

            for (var i = 0; i < nb; i++) {
              this.addParticle(mouse === null || mouse === void 0 ? void 0 : mouse.position, overrideOptions, group);
            }

            this.pushing = false;
          }
        }, {
          key: "addParticle",
          value: function addParticle(position, overrideOptions, group) {
            var container = this.container;
            var options = container.actualOptions;
            var limit = options.particles.number.limit * container.density;

            if (limit > 0) {
              var countToRemove = this.count + 1 - limit;

              if (countToRemove > 0) {
                this.removeQuantity(countToRemove);
              }
            }

            return this.pushParticle(position, overrideOptions, group);
          }
        }, {
          key: "addSplitParticle",
          value: function addSplitParticle(parent) {
            var splitOptions = parent.options.destroy.split;
            var options = new ParticlesOptions_1.ParticlesOptions();
            options.load(parent.options);
            var factor = (0, Utils_1.getRangeValue)(splitOptions.factor.value);
            options.color.load({
              value: {
                hsl: parent.getFillColor()
              }
            });

            if (typeof options.size.value === "number") {
              options.size.value /= factor;
            } else {
              options.size.value.min /= factor;
              options.size.value.max /= factor;
            }

            options.load(splitOptions.particles);
            var offset = splitOptions.sizeOffset ? (0, Utils_1.setRangeValue)(-parent.size.value, parent.size.value) : 0;
            var position = {
              x: parent.position.x + (0, Utils_1.randomInRange)(offset),
              y: parent.position.y + (0, Utils_1.randomInRange)(offset)
            };
            return this.pushParticle(position, options, parent.group, function (particle) {
              if (particle.size.value < 0.5) {
                return false;
              }

              particle.velocity.length = (0, Utils_1.randomInRange)((0, Utils_1.setRangeValue)(parent.velocity.length, particle.velocity.length));
              particle.splitCount = parent.splitCount + 1;
              particle.unbreakable = true;
              setTimeout(function () {
                particle.unbreakable = false;
              }, 500);
              return true;
            });
          }
        }, {
          key: "removeQuantity",
          value: function removeQuantity(quantity, group) {
            this.removeAt(0, quantity, group);
          }
        }, {
          key: "getLinkFrequency",
          value: function getLinkFrequency(p1, p2) {
            var key = "".concat(Math.min(p1.id, p2.id), "_").concat(Math.max(p1.id, p2.id));
            var res = this.freqs.links.get(key);

            if (res === undefined) {
              res = Math.random();
              this.freqs.links.set(key, res);
            }

            return res;
          }
        }, {
          key: "getTriangleFrequency",
          value: function getTriangleFrequency(p1, p2, p3) {
            var _ref3 = [p1.id, p2.id, p3.id],
                id1 = _ref3[0],
                id2 = _ref3[1],
                id3 = _ref3[2];

            if (id1 > id2) {
              var _ref4 = [id1, id2];
              id2 = _ref4[0];
              id1 = _ref4[1];
            }

            if (id2 > id3) {
              var _ref5 = [id2, id3];
              id3 = _ref5[0];
              id2 = _ref5[1];
            }

            if (id1 > id3) {
              var _ref6 = [id1, id3];
              id3 = _ref6[0];
              id1 = _ref6[1];
            }

            var key = "".concat(id1, "_").concat(id2, "_").concat(id3);
            var res = this.freqs.triangles.get(key);

            if (res === undefined) {
              res = Math.random();
              this.freqs.triangles.set(key, res);
            }

            return res;
          }
        }, {
          key: "addManualParticles",
          value: function addManualParticles() {
            var container = this.container;
            var options = container.actualOptions;

            var _iterator37 = _createForOfIteratorHelper(options.manualParticles),
                _step37;

            try {
              for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
                var particle = _step37.value;
                var pos = particle.position ? {
                  x: particle.position.x * container.canvas.size.width / 100,
                  y: particle.position.y * container.canvas.size.height / 100
                } : undefined;
                this.addParticle(pos, particle.options);
              }
            } catch (err) {
              _iterator37.e(err);
            } finally {
              _iterator37.f();
            }
          }
        }, {
          key: "setDensity",
          value: function setDensity() {
            var options = this.container.actualOptions;

            for (var group in options.particles.groups) {
              this.applyDensity(options.particles.groups[group], 0, group);
            }

            this.applyDensity(options.particles, options.manualParticles.length);
          }
        }, {
          key: "applyDensity",
          value: function applyDensity(options, manualCount, group) {
            var _a;

            if (!((_a = options.number.density) === null || _a === void 0 ? void 0 : _a.enable)) {
              return;
            }

            var numberOptions = options.number;
            var densityFactor = this.initDensityFactor(numberOptions.density);
            var optParticlesNumber = numberOptions.value;
            var optParticlesLimit = numberOptions.limit > 0 ? numberOptions.limit : optParticlesNumber;
            var particlesNumber = Math.min(optParticlesNumber, optParticlesLimit) * densityFactor + manualCount;
            var particlesCount = Math.min(this.count, this.array.filter(function (t) {
              return t.group === group;
            }).length);
            this.limit = numberOptions.limit * densityFactor;

            if (particlesCount < particlesNumber) {
              this.push(Math.abs(particlesNumber - particlesCount), undefined, options, group);
            } else if (particlesCount > particlesNumber) {
              this.removeQuantity(particlesCount - particlesNumber, group);
            }
          }
        }, {
          key: "initDensityFactor",
          value: function initDensityFactor(densityOptions) {
            var container = this.container;

            if (!container.canvas.element || !densityOptions.enable) {
              return 1;
            }

            var canvas = container.canvas.element;
            var pxRatio = container.retina.pixelRatio;
            return canvas.width * canvas.height / (densityOptions.factor * Math.pow(pxRatio, 2) * densityOptions.area);
          }
        }, {
          key: "pushParticle",
          value: function pushParticle(position, overrideOptions, group, initializer) {
            try {
              var particle = new Particle_1.Particle(this.nextId, this.container, position, overrideOptions, group);
              var canAdd = true;

              if (initializer) {
                canAdd = initializer(particle);
              }

              if (!canAdd) {
                return;
              }

              this.array.push(particle);
              this.zArray.push(particle);
              this.nextId++;
              return particle;
            } catch (e) {
              console.warn("error adding particle: ".concat(e));
              return;
            }
          }
        }]);

        return Particles;
      }();

      exports.Particles = Particles;
      /***/
    },

    /***/
    77077:
    /*!******************************************************************!*\
      !*** ./node_modules/tsparticles/Core/ParticlesInteractorBase.js ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ParticlesInteractorBase = void 0;

      var Enums_1 = __webpack_require__(
      /*! ../Enums */
      39666);

      var ParticlesInteractorBase = function ParticlesInteractorBase(container) {
        _classCallCheck(this, ParticlesInteractorBase);

        this.container = container;
        this.type = Enums_1.InteractorType.Particles;
      };

      exports.ParticlesInteractorBase = ParticlesInteractorBase;
      /***/
    },

    /***/
    31962:
    /*!*************************************************!*\
      !*** ./node_modules/tsparticles/Core/Retina.js ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Retina = void 0;

      var Utils_1 = __webpack_require__(
      /*! ../Utils */
      18942);

      var Retina = /*#__PURE__*/function () {
        function Retina(container) {
          _classCallCheck(this, Retina);

          this.container = container;
        }

        _createClass(Retina, [{
          key: "init",
          value: function init() {
            var _this14 = this;

            var container = this.container;
            var options = container.actualOptions;
            this.pixelRatio = !options.detectRetina || (0, Utils_1.isSsr)() ? 1 : window.devicePixelRatio;
            var motionOptions = this.container.actualOptions.motion;

            if (motionOptions && (motionOptions.disable || motionOptions.reduce.value)) {
              if ((0, Utils_1.isSsr)() || typeof matchMedia === "undefined" || !matchMedia) {
                this.reduceFactor = 1;
              } else {
                var mediaQuery = matchMedia("(prefers-reduced-motion: reduce)");

                if (mediaQuery) {
                  this.handleMotionChange(mediaQuery);

                  var handleChange = function handleChange() {
                    _this14.handleMotionChange(mediaQuery);

                    container.refresh()["catch"](function () {});
                  };

                  if (mediaQuery.addEventListener !== undefined) {
                    mediaQuery.addEventListener("change", handleChange);
                  } else if (mediaQuery.addListener !== undefined) {
                    mediaQuery.addListener(handleChange);
                  }
                }
              }
            } else {
              this.reduceFactor = 1;
            }

            var ratio = this.pixelRatio;

            if (container.canvas.element) {
              var element = container.canvas.element;
              container.canvas.size.width = element.offsetWidth * ratio;
              container.canvas.size.height = element.offsetHeight * ratio;
            }

            var particles = options.particles;
            this.attractDistance = particles.move.attract.distance * ratio;
            this.linksDistance = particles.links.distance * ratio;
            this.linksWidth = particles.links.width * ratio;
            this.sizeAnimationSpeed = particles.size.animation.speed * ratio;
            this.maxSpeed = particles.move.gravity.maxSpeed * ratio;

            if (particles.orbit.radius !== undefined) {
              this.orbitRadius = particles.orbit.radius * this.container.retina.pixelRatio;
            }

            var modes = options.interactivity.modes;
            this.connectModeDistance = modes.connect.distance * ratio;
            this.connectModeRadius = modes.connect.radius * ratio;
            this.grabModeDistance = modes.grab.distance * ratio;
            this.repulseModeDistance = modes.repulse.distance * ratio;
            this.bounceModeDistance = modes.bounce.distance * ratio;
            this.attractModeDistance = modes.attract.distance * ratio;
            this.slowModeRadius = modes.slow.radius * ratio;
            this.bubbleModeDistance = modes.bubble.distance * ratio;

            if (modes.bubble.size) {
              this.bubbleModeSize = modes.bubble.size * ratio;
            }
          }
        }, {
          key: "initParticle",
          value: function initParticle(particle) {
            var options = particle.options;
            var ratio = this.pixelRatio;
            var moveDistance = options.move.distance;
            var props = particle.retina;
            props.attractDistance = options.move.attract.distance * ratio;
            props.linksDistance = options.links.distance * ratio;
            props.linksWidth = options.links.width * ratio;
            props.moveDrift = (0, Utils_1.getRangeValue)(options.move.drift) * ratio;
            props.moveSpeed = (0, Utils_1.getRangeValue)(options.move.speed) * ratio;
            props.sizeAnimationSpeed = options.size.animation.speed * ratio;

            if (particle.spin) {
              props.spinAcceleration = (0, Utils_1.getRangeValue)(options.move.spin.acceleration) * ratio;
            }

            var maxDistance = props.maxDistance;
            maxDistance.horizontal = moveDistance.horizontal !== undefined ? moveDistance.horizontal * ratio : undefined;
            maxDistance.vertical = moveDistance.vertical !== undefined ? moveDistance.vertical * ratio : undefined;
            props.maxSpeed = options.move.gravity.maxSpeed * ratio;
          }
        }, {
          key: "handleMotionChange",
          value: function handleMotionChange(mediaQuery) {
            var options = this.container.actualOptions;

            if (mediaQuery.matches) {
              var motion = options.motion;
              this.reduceFactor = motion.disable ? 0 : motion.reduce.value ? 1 / motion.reduce.factor : 1;
            } else {
              this.reduceFactor = 1;
            }
          }
        }]);

        return Retina;
      }();

      exports.Retina = Retina;
      /***/
    },

    /***/
    30068:
    /*!***********************************************************!*\
      !*** ./node_modules/tsparticles/Enums/AnimationStatus.js ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.AnimationStatus = void 0;
      var AnimationStatus;

      (function (AnimationStatus) {
        AnimationStatus[AnimationStatus["increasing"] = 0] = "increasing";
        AnimationStatus[AnimationStatus["decreasing"] = 1] = "decreasing";
      })(AnimationStatus = exports.AnimationStatus || (exports.AnimationStatus = {}));
      /***/

    },

    /***/
    26663:
    /*!********************************************************************!*\
      !*** ./node_modules/tsparticles/Enums/Directions/MoveDirection.js ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.MoveDirection = void 0;
      var MoveDirection;

      (function (MoveDirection) {
        MoveDirection["bottom"] = "bottom";
        MoveDirection["bottomLeft"] = "bottom-left";
        MoveDirection["bottomRight"] = "bottom-right";
        MoveDirection["left"] = "left";
        MoveDirection["none"] = "none";
        MoveDirection["right"] = "right";
        MoveDirection["top"] = "top";
        MoveDirection["topLeft"] = "top-left";
        MoveDirection["topRight"] = "top-right";
      })(MoveDirection = exports.MoveDirection || (exports.MoveDirection = {}));
      /***/

    },

    /***/
    86884:
    /*!***********************************************************************!*\
      !*** ./node_modules/tsparticles/Enums/Directions/OutModeDirection.js ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.OutModeDirection = void 0;
      var OutModeDirection;

      (function (OutModeDirection) {
        OutModeDirection["bottom"] = "bottom";
        OutModeDirection["left"] = "left";
        OutModeDirection["right"] = "right";
        OutModeDirection["top"] = "top";
      })(OutModeDirection = exports.OutModeDirection || (exports.OutModeDirection = {}));
      /***/

    },

    /***/
    30751:
    /*!**********************************************************************!*\
      !*** ./node_modules/tsparticles/Enums/Directions/RotateDirection.js ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.RotateDirection = void 0;
      var RotateDirection;

      (function (RotateDirection) {
        RotateDirection["clockwise"] = "clockwise";
        RotateDirection["counterClockwise"] = "counter-clockwise";
        RotateDirection["random"] = "random";
      })(RotateDirection = exports.RotateDirection || (exports.RotateDirection = {}));
      /***/

    },

    /***/
    34996:
    /*!********************************************************************!*\
      !*** ./node_modules/tsparticles/Enums/Directions/TiltDirection.js ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TiltDirection = void 0;
      var TiltDirection;

      (function (TiltDirection) {
        TiltDirection["clockwise"] = "clockwise";
        TiltDirection["counterClockwise"] = "counter-clockwise";
        TiltDirection["random"] = "random";
      })(TiltDirection = exports.TiltDirection || (exports.TiltDirection = {}));
      /***/

    },

    /***/
    31631:
    /*!************************************************************!*\
      !*** ./node_modules/tsparticles/Enums/Directions/index.js ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function get() {
            return m[k];
          }
        });
      } : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });

      var __exportStar = this && this.__exportStar || function (m, exports) {
        for (var p in m) {
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
        }
      };

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __exportStar(__webpack_require__(
      /*! ./MoveDirection */
      26663), exports);

      __exportStar(__webpack_require__(
      /*! ./RotateDirection */
      30751), exports);

      __exportStar(__webpack_require__(
      /*! ./OutModeDirection */
      86884), exports);

      __exportStar(__webpack_require__(
      /*! ./TiltDirection */
      34996), exports);
      /***/

    },

    /***/
    85729:
    /*!***************************************************************!*\
      !*** ./node_modules/tsparticles/Enums/InteractivityDetect.js ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.InteractivityDetect = void 0;
      var InteractivityDetect;

      (function (InteractivityDetect) {
        InteractivityDetect["canvas"] = "canvas";
        InteractivityDetect["parent"] = "parent";
        InteractivityDetect["window"] = "window";
      })(InteractivityDetect = exports.InteractivityDetect || (exports.InteractivityDetect = {}));
      /***/

    },

    /***/
    34866:
    /*!***********************************************************!*\
      !*** ./node_modules/tsparticles/Enums/Modes/ClickMode.js ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ClickMode = void 0;
      var ClickMode;

      (function (ClickMode) {
        ClickMode["attract"] = "attract";
        ClickMode["bubble"] = "bubble";
        ClickMode["push"] = "push";
        ClickMode["remove"] = "remove";
        ClickMode["repulse"] = "repulse";
        ClickMode["pause"] = "pause";
        ClickMode["trail"] = "trail";
      })(ClickMode = exports.ClickMode || (exports.ClickMode = {}));
      /***/

    },

    /***/
    20445:
    /*!***************************************************************!*\
      !*** ./node_modules/tsparticles/Enums/Modes/CollisionMode.js ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CollisionMode = void 0;
      var CollisionMode;

      (function (CollisionMode) {
        CollisionMode["absorb"] = "absorb";
        CollisionMode["bounce"] = "bounce";
        CollisionMode["destroy"] = "destroy";
      })(CollisionMode = exports.CollisionMode || (exports.CollisionMode = {}));
      /***/

    },

    /***/
    81991:
    /*!*************************************************************!*\
      !*** ./node_modules/tsparticles/Enums/Modes/DestroyMode.js ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DestroyMode = void 0;
      var DestroyMode;

      (function (DestroyMode) {
        DestroyMode["none"] = "none";
        DestroyMode["split"] = "split";
      })(DestroyMode = exports.DestroyMode || (exports.DestroyMode = {}));
      /***/

    },

    /***/
    20006:
    /*!*********************************************************!*\
      !*** ./node_modules/tsparticles/Enums/Modes/DivMode.js ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DivMode = void 0;
      var DivMode;

      (function (DivMode) {
        DivMode["bounce"] = "bounce";
        DivMode["bubble"] = "bubble";
        DivMode["repulse"] = "repulse";
      })(DivMode = exports.DivMode || (exports.DivMode = {}));
      /***/

    },

    /***/
    90898:
    /*!***********************************************************!*\
      !*** ./node_modules/tsparticles/Enums/Modes/HoverMode.js ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.HoverMode = void 0;
      var HoverMode;

      (function (HoverMode) {
        HoverMode["attract"] = "attract";
        HoverMode["bounce"] = "bounce";
        HoverMode["bubble"] = "bubble";
        HoverMode["connect"] = "connect";
        HoverMode["grab"] = "grab";
        HoverMode["light"] = "light";
        HoverMode["repulse"] = "repulse";
        HoverMode["slow"] = "slow";
        HoverMode["trail"] = "trail";
      })(HoverMode = exports.HoverMode || (exports.HoverMode = {}));
      /***/

    },

    /***/
    40524:
    /*!*********************************************************!*\
      !*** ./node_modules/tsparticles/Enums/Modes/OutMode.js ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.OutMode = void 0;
      var OutMode;

      (function (OutMode) {
        OutMode["bounce"] = "bounce";
        OutMode["bounceHorizontal"] = "bounce-horizontal";
        OutMode["bounceVertical"] = "bounce-vertical";
        OutMode["none"] = "none";
        OutMode["out"] = "out";
        OutMode["destroy"] = "destroy";
        OutMode["split"] = "split";
      })(OutMode = exports.OutMode || (exports.OutMode = {}));
      /***/

    },

    /***/
    52964:
    /*!**********************************************************!*\
      !*** ./node_modules/tsparticles/Enums/Modes/RollMode.js ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.RollMode = void 0;
      var RollMode;

      (function (RollMode) {
        RollMode["both"] = "both";
        RollMode["horizontal"] = "horizontal";
        RollMode["vertical"] = "vertical";
      })(RollMode = exports.RollMode || (exports.RollMode = {}));
      /***/

    },

    /***/
    31472:
    /*!**********************************************************!*\
      !*** ./node_modules/tsparticles/Enums/Modes/SizeMode.js ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SizeMode = void 0;
      var SizeMode;

      (function (SizeMode) {
        SizeMode["precise"] = "precise";
        SizeMode["percent"] = "percent";
      })(SizeMode = exports.SizeMode || (exports.SizeMode = {}));
      /***/

    },

    /***/
    43926:
    /*!***********************************************************!*\
      !*** ./node_modules/tsparticles/Enums/Modes/ThemeMode.js ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ThemeMode = void 0;
      var ThemeMode;

      (function (ThemeMode) {
        ThemeMode["any"] = "any";
        ThemeMode["dark"] = "dark";
        ThemeMode["light"] = "light";
      })(ThemeMode = exports.ThemeMode || (exports.ThemeMode = {}));
      /***/

    },

    /***/
    95196:
    /*!*******************************************************!*\
      !*** ./node_modules/tsparticles/Enums/Modes/index.js ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function get() {
            return m[k];
          }
        });
      } : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });

      var __exportStar = this && this.__exportStar || function (m, exports) {
        for (var p in m) {
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
        }
      };

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __exportStar(__webpack_require__(
      /*! ./ClickMode */
      34866), exports);

      __exportStar(__webpack_require__(
      /*! ./DestroyMode */
      81991), exports);

      __exportStar(__webpack_require__(
      /*! ./DivMode */
      20006), exports);

      __exportStar(__webpack_require__(
      /*! ./HoverMode */
      90898), exports);

      __exportStar(__webpack_require__(
      /*! ./CollisionMode */
      20445), exports);

      __exportStar(__webpack_require__(
      /*! ./OutMode */
      40524), exports);

      __exportStar(__webpack_require__(
      /*! ./RollMode */
      52964), exports);

      __exportStar(__webpack_require__(
      /*! ./SizeMode */
      31472), exports);

      __exportStar(__webpack_require__(
      /*! ./ThemeMode */
      43926), exports);
      /***/

    },

    /***/
    1245:
    /*!***********************************************************!*\
      !*** ./node_modules/tsparticles/Enums/Types/AlterType.js ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.AlterType = void 0;
      var AlterType;

      (function (AlterType) {
        AlterType["darken"] = "darken";
        AlterType["enlighten"] = "enlighten";
      })(AlterType = exports.AlterType || (exports.AlterType = {}));
      /***/

    },

    /***/
    56835:
    /*!*************************************************************!*\
      !*** ./node_modules/tsparticles/Enums/Types/DestroyType.js ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DestroyType = void 0;
      var DestroyType;

      (function (DestroyType) {
        DestroyType["none"] = "none";
        DestroyType["max"] = "max";
        DestroyType["min"] = "min";
      })(DestroyType = exports.DestroyType || (exports.DestroyType = {}));
      /***/

    },

    /***/
    5517:
    /*!*********************************************************!*\
      !*** ./node_modules/tsparticles/Enums/Types/DivType.js ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DivType = void 0;
      var DivType;

      (function (DivType) {
        DivType["circle"] = "circle";
        DivType["rectangle"] = "rectangle";
      })(DivType = exports.DivType || (exports.DivType = {}));
      /***/

    },

    /***/
    5816:
    /*!************************************************************!*\
      !*** ./node_modules/tsparticles/Enums/Types/EasingType.js ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.EasingType = void 0;
      var EasingType;

      (function (EasingType) {
        EasingType["easeOutBack"] = "ease-out-back";
        EasingType["easeOutCirc"] = "ease-out-circ";
        EasingType["easeOutCubic"] = "ease-out-cubic";
        EasingType["easeOutQuad"] = "ease-out-quad";
        EasingType["easeOutQuart"] = "ease-out-quart";
        EasingType["easeOutQuint"] = "ease-out-quint";
        EasingType["easeOutExpo"] = "ease-out-expo";
        EasingType["easeOutSine"] = "ease-out-sine";
      })(EasingType = exports.EasingType || (exports.EasingType = {}));
      /***/

    },

    /***/
    20288:
    /*!**************************************************************!*\
      !*** ./node_modules/tsparticles/Enums/Types/GradientType.js ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.GradientType = void 0;
      var GradientType;

      (function (GradientType) {
        GradientType["linear"] = "linear";
        GradientType["radial"] = "radial";
        GradientType["random"] = "random";
      })(GradientType = exports.GradientType || (exports.GradientType = {}));
      /***/

    },

    /***/
    32783:
    /*!****************************************************************!*\
      !*** ./node_modules/tsparticles/Enums/Types/InteractorType.js ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.InteractorType = void 0;
      var InteractorType;

      (function (InteractorType) {
        InteractorType[InteractorType["External"] = 0] = "External";
        InteractorType[InteractorType["Particles"] = 1] = "Particles";
      })(InteractorType = exports.InteractorType || (exports.InteractorType = {}));
      /***/

    },

    /***/
    75117:
    /*!***********************************************************!*\
      !*** ./node_modules/tsparticles/Enums/Types/OrbitType.js ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.OrbitType = void 0;
      var OrbitType;

      (function (OrbitType) {
        OrbitType["front"] = "front";
        OrbitType["back"] = "back";
      })(OrbitType = exports.OrbitType || (exports.OrbitType = {}));
      /***/

    },

    /***/
    90384:
    /*!***********************************************************!*\
      !*** ./node_modules/tsparticles/Enums/Types/ShapeType.js ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ShapeType = void 0;
      var ShapeType;

      (function (ShapeType) {
        ShapeType["char"] = "char";
        ShapeType["character"] = "character";
        ShapeType["circle"] = "circle";
        ShapeType["edge"] = "edge";
        ShapeType["image"] = "image";
        ShapeType["images"] = "images";
        ShapeType["line"] = "line";
        ShapeType["polygon"] = "polygon";
        ShapeType["square"] = "square";
        ShapeType["star"] = "star";
        ShapeType["triangle"] = "triangle";
      })(ShapeType = exports.ShapeType || (exports.ShapeType = {}));
      /***/

    },

    /***/
    73708:
    /*!****************************************************************!*\
      !*** ./node_modules/tsparticles/Enums/Types/StartValueType.js ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.StartValueType = void 0;
      var StartValueType;

      (function (StartValueType) {
        StartValueType["max"] = "max";
        StartValueType["min"] = "min";
        StartValueType["random"] = "random";
      })(StartValueType = exports.StartValueType || (exports.StartValueType = {}));
      /***/

    },

    /***/
    24973:
    /*!*******************************************************!*\
      !*** ./node_modules/tsparticles/Enums/Types/index.js ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function get() {
            return m[k];
          }
        });
      } : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });

      var __exportStar = this && this.__exportStar || function (m, exports) {
        for (var p in m) {
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
        }
      };

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __exportStar(__webpack_require__(
      /*! ./AlterType */
      1245), exports);

      __exportStar(__webpack_require__(
      /*! ./DestroyType */
      56835), exports);

      __exportStar(__webpack_require__(
      /*! ./GradientType */
      20288), exports);

      __exportStar(__webpack_require__(
      /*! ./InteractorType */
      32783), exports);

      __exportStar(__webpack_require__(
      /*! ./ShapeType */
      90384), exports);

      __exportStar(__webpack_require__(
      /*! ./StartValueType */
      73708), exports);

      __exportStar(__webpack_require__(
      /*! ./DivType */
      5517), exports);

      __exportStar(__webpack_require__(
      /*! ./EasingType */
      5816), exports);

      __exportStar(__webpack_require__(
      /*! ./OrbitType */
      75117), exports);
      /***/

    },

    /***/
    39666:
    /*!*************************************************!*\
      !*** ./node_modules/tsparticles/Enums/index.js ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function get() {
            return m[k];
          }
        });
      } : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });

      var __exportStar = this && this.__exportStar || function (m, exports) {
        for (var p in m) {
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
        }
      };

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __exportStar(__webpack_require__(
      /*! ./Directions */
      31631), exports);

      __exportStar(__webpack_require__(
      /*! ./Modes */
      95196), exports);

      __exportStar(__webpack_require__(
      /*! ./AnimationStatus */
      30068), exports);

      __exportStar(__webpack_require__(
      /*! ./Types */
      24973), exports);

      __exportStar(__webpack_require__(
      /*! ./InteractivityDetect */
      85729), exports);
      /***/

    },

    /***/
    77266:
    /*!*****************************************************************************!*\
      !*** ./node_modules/tsparticles/Interactions/External/Attract/Attractor.js ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Attractor = void 0;

      var Enums_1 = __webpack_require__(
      /*! ../../../Enums */
      39666);

      var Utils_1 = __webpack_require__(
      /*! ../../../Utils */
      18942);

      var ExternalInteractorBase_1 = __webpack_require__(
      /*! ../../../Core/ExternalInteractorBase */
      11377);

      var Vector_1 = __webpack_require__(
      /*! ../../../Core/Particle/Vector */
      27440);

      var Attractor = /*#__PURE__*/function (_ExternalInteractorBa) {
        _inherits(Attractor, _ExternalInteractorBa);

        var _super3 = _createSuper(Attractor);

        function Attractor(container) {
          _classCallCheck(this, Attractor);

          return _super3.call(this, container);
        }

        _createClass(Attractor, [{
          key: "isEnabled",
          value: function isEnabled() {
            var container = this.container,
                options = container.actualOptions,
                mouse = container.interactivity.mouse,
                events = options.interactivity.events;

            if ((!mouse.position || !events.onHover.enable) && (!mouse.clickPosition || !events.onClick.enable)) {
              return false;
            }

            var hoverMode = events.onHover.mode,
                clickMode = events.onClick.mode;
            return (0, Utils_1.isInArray)(Enums_1.HoverMode.attract, hoverMode) || (0, Utils_1.isInArray)(Enums_1.ClickMode.attract, clickMode);
          }
        }, {
          key: "reset",
          value: function reset() {}
        }, {
          key: "interact",
          value: function interact() {
            var container = this.container,
                options = container.actualOptions,
                mouseMoveStatus = container.interactivity.status === Utils_1.Constants.mouseMoveEvent,
                events = options.interactivity.events,
                hoverEnabled = events.onHover.enable,
                hoverMode = events.onHover.mode,
                clickEnabled = events.onClick.enable,
                clickMode = events.onClick.mode;

            if (mouseMoveStatus && hoverEnabled && (0, Utils_1.isInArray)(Enums_1.HoverMode.attract, hoverMode)) {
              this.hoverAttract();
            } else if (clickEnabled && (0, Utils_1.isInArray)(Enums_1.ClickMode.attract, clickMode)) {
              this.clickAttract();
            }
          }
        }, {
          key: "hoverAttract",
          value: function hoverAttract() {
            var container = this.container;
            var mousePos = container.interactivity.mouse.position;

            if (!mousePos) {
              return;
            }

            var attractRadius = container.retina.attractModeDistance;
            this.processAttract(mousePos, attractRadius, new Utils_1.Circle(mousePos.x, mousePos.y, attractRadius));
          }
        }, {
          key: "processAttract",
          value: function processAttract(position, attractRadius, area) {
            var container = this.container;
            var attractOptions = container.actualOptions.interactivity.modes.attract;
            var query = container.particles.quadTree.query(area);

            var _iterator38 = _createForOfIteratorHelper(query),
                _step38;

            try {
              for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
                var particle = _step38.value;

                var _ref7 = (0, Utils_1.getDistances)(particle.position, position),
                    dx = _ref7.dx,
                    dy = _ref7.dy,
                    distance = _ref7.distance;

                var velocity = attractOptions.speed * attractOptions.factor;
                var attractFactor = (0, Utils_1.clamp)((0, Utils_1.calcEasing)(1 - distance / attractRadius, attractOptions.easing) * velocity, 0, attractOptions.maxSpeed);
                var normVec = Vector_1.Vector.create(distance === 0 ? velocity : dx / distance * attractFactor, distance === 0 ? velocity : dy / distance * attractFactor);
                particle.position.subFrom(normVec);
              }
            } catch (err) {
              _iterator38.e(err);
            } finally {
              _iterator38.f();
            }
          }
        }, {
          key: "clickAttract",
          value: function clickAttract() {
            var container = this.container;

            if (!container.attract.finish) {
              if (!container.attract.count) {
                container.attract.count = 0;
              }

              container.attract.count++;

              if (container.attract.count === container.particles.count) {
                container.attract.finish = true;
              }
            }

            if (container.attract.clicking) {
              var mousePos = container.interactivity.mouse.clickPosition;

              if (!mousePos) {
                return;
              }

              var attractRadius = container.retina.attractModeDistance;
              this.processAttract(mousePos, attractRadius, new Utils_1.Circle(mousePos.x, mousePos.y, attractRadius));
            } else if (container.attract.clicking === false) {
              container.attract.particles = [];
            }

            return;
          }
        }]);

        return Attractor;
      }(ExternalInteractorBase_1.ExternalInteractorBase);

      exports.Attractor = Attractor;
      /***/
    },

    /***/
    26113:
    /*!*************************************************************************!*\
      !*** ./node_modules/tsparticles/Interactions/External/Attract/index.js ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.loadExternalAttractInteraction = void 0;

      var Attractor_1 = __webpack_require__(
      /*! ./Attractor */
      77266);

      function loadExternalAttractInteraction(tsParticles) {
        tsParticles.addInteractor("externalAttract", function (container) {
          return new Attractor_1.Attractor(container);
        });
      }

      exports.loadExternalAttractInteraction = loadExternalAttractInteraction;
      /***/
    },

    /***/
    57672:
    /*!**************************************************************************!*\
      !*** ./node_modules/tsparticles/Interactions/External/Bounce/Bouncer.js ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Bouncer = void 0;

      var Utils_1 = __webpack_require__(
      /*! ../../../Utils */
      18942);

      var Enums_1 = __webpack_require__(
      /*! ../../../Enums */
      39666);

      var Vector_1 = __webpack_require__(
      /*! ../../../Core/Particle/Vector */
      27440);

      var ExternalInteractorBase_1 = __webpack_require__(
      /*! ../../../Core/ExternalInteractorBase */
      11377);

      var Bouncer = /*#__PURE__*/function (_ExternalInteractorBa2) {
        _inherits(Bouncer, _ExternalInteractorBa2);

        var _super4 = _createSuper(Bouncer);

        function Bouncer(container) {
          _classCallCheck(this, Bouncer);

          return _super4.call(this, container);
        }

        _createClass(Bouncer, [{
          key: "isEnabled",
          value: function isEnabled() {
            var container = this.container,
                options = container.actualOptions,
                mouse = container.interactivity.mouse,
                events = options.interactivity.events,
                divs = events.onDiv;
            return mouse.position && events.onHover.enable && (0, Utils_1.isInArray)(Enums_1.HoverMode.bounce, events.onHover.mode) || (0, Utils_1.isDivModeEnabled)(Enums_1.DivMode.bounce, divs);
          }
        }, {
          key: "interact",
          value: function interact() {
            var _this15 = this;

            var container = this.container,
                options = container.actualOptions,
                events = options.interactivity.events,
                mouseMoveStatus = container.interactivity.status === Utils_1.Constants.mouseMoveEvent,
                hoverEnabled = events.onHover.enable,
                hoverMode = events.onHover.mode,
                divs = events.onDiv;

            if (mouseMoveStatus && hoverEnabled && (0, Utils_1.isInArray)(Enums_1.HoverMode.bounce, hoverMode)) {
              this.processMouseBounce();
            } else {
              (0, Utils_1.divModeExecute)(Enums_1.DivMode.bounce, divs, function (selector, div) {
                return _this15.singleSelectorBounce(selector, div);
              });
            }
          }
        }, {
          key: "reset",
          value: function reset() {}
        }, {
          key: "processMouseBounce",
          value: function processMouseBounce() {
            var container = this.container,
                pxRatio = container.retina.pixelRatio,
                tolerance = 10 * pxRatio,
                mousePos = container.interactivity.mouse.position,
                radius = container.retina.bounceModeDistance;

            if (mousePos) {
              this.processBounce(mousePos, radius, new Utils_1.Circle(mousePos.x, mousePos.y, radius + tolerance));
            }
          }
        }, {
          key: "singleSelectorBounce",
          value: function singleSelectorBounce(selector, div) {
            var _this16 = this;

            var container = this.container;
            var query = document.querySelectorAll(selector);

            if (!query.length) {
              return;
            }

            query.forEach(function (item) {
              var elem = item,
                  pxRatio = container.retina.pixelRatio,
                  pos = {
                x: (elem.offsetLeft + elem.offsetWidth / 2) * pxRatio,
                y: (elem.offsetTop + elem.offsetHeight / 2) * pxRatio
              },
                  radius = elem.offsetWidth / 2 * pxRatio,
                  tolerance = 10 * pxRatio;
              var area = div.type === Enums_1.DivType.circle ? new Utils_1.Circle(pos.x, pos.y, radius + tolerance) : new Utils_1.Rectangle(elem.offsetLeft * pxRatio - tolerance, elem.offsetTop * pxRatio - tolerance, elem.offsetWidth * pxRatio + tolerance * 2, elem.offsetHeight * pxRatio + tolerance * 2);

              _this16.processBounce(pos, radius, area);
            });
          }
        }, {
          key: "processBounce",
          value: function processBounce(position, radius, area) {
            var query = this.container.particles.quadTree.query(area);

            var _iterator39 = _createForOfIteratorHelper(query),
                _step39;

            try {
              for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
                var particle = _step39.value;

                if (area instanceof Utils_1.Circle) {
                  (0, Utils_1.circleBounce)((0, Utils_1.circleBounceDataFromParticle)(particle), {
                    position: position,
                    radius: radius,
                    mass: Math.pow(radius, 2) * Math.PI / 2,
                    velocity: Vector_1.Vector.origin,
                    factor: Vector_1.Vector.origin
                  });
                } else if (area instanceof Utils_1.Rectangle) {
                  (0, Utils_1.rectBounce)(particle, (0, Utils_1.calculateBounds)(position, radius));
                }
              }
            } catch (err) {
              _iterator39.e(err);
            } finally {
              _iterator39.f();
            }
          }
        }]);

        return Bouncer;
      }(ExternalInteractorBase_1.ExternalInteractorBase);

      exports.Bouncer = Bouncer;
      /***/
    },

    /***/
    84943:
    /*!************************************************************************!*\
      !*** ./node_modules/tsparticles/Interactions/External/Bounce/index.js ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.loadExternalBounceInteraction = void 0;

      var Bouncer_1 = __webpack_require__(
      /*! ./Bouncer */
      57672);

      function loadExternalBounceInteraction(tsParticles) {
        tsParticles.addInteractor("externalBounce", function (container) {
          return new Bouncer_1.Bouncer(container);
        });
      }

      exports.loadExternalBounceInteraction = loadExternalBounceInteraction;
      /***/
    },

    /***/
    68850:
    /*!**************************************************************************!*\
      !*** ./node_modules/tsparticles/Interactions/External/Bubble/Bubbler.js ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Bubbler = void 0;

      var Utils_1 = __webpack_require__(
      /*! ../../../Utils */
      18942);

      var Enums_1 = __webpack_require__(
      /*! ../../../Enums */
      39666);

      var ExternalInteractorBase_1 = __webpack_require__(
      /*! ../../../Core/ExternalInteractorBase */
      11377);

      var ProcessBubbleType_1 = __webpack_require__(
      /*! ./ProcessBubbleType */
      47780);

      function calculateBubbleValue(particleValue, modeValue, optionsValue, ratio) {
        if (modeValue >= optionsValue) {
          var value = particleValue + (modeValue - optionsValue) * ratio;
          return (0, Utils_1.clamp)(value, particleValue, modeValue);
        } else if (modeValue < optionsValue) {
          var _value2 = particleValue - (optionsValue - modeValue) * ratio;

          return (0, Utils_1.clamp)(_value2, modeValue, particleValue);
        }
      }

      var Bubbler = /*#__PURE__*/function (_ExternalInteractorBa3) {
        _inherits(Bubbler, _ExternalInteractorBa3);

        var _super5 = _createSuper(Bubbler);

        function Bubbler(container) {
          _classCallCheck(this, Bubbler);

          return _super5.call(this, container);
        }

        _createClass(Bubbler, [{
          key: "isEnabled",
          value: function isEnabled() {
            var container = this.container,
                options = container.actualOptions,
                mouse = container.interactivity.mouse,
                events = options.interactivity.events,
                divs = events.onDiv,
                divBubble = (0, Utils_1.isDivModeEnabled)(Enums_1.DivMode.bubble, divs);

            if (!(divBubble || events.onHover.enable && mouse.position || events.onClick.enable && mouse.clickPosition)) {
              return false;
            }

            var hoverMode = events.onHover.mode;
            var clickMode = events.onClick.mode;
            return (0, Utils_1.isInArray)(Enums_1.HoverMode.bubble, hoverMode) || (0, Utils_1.isInArray)(Enums_1.ClickMode.bubble, clickMode) || divBubble;
          }
        }, {
          key: "reset",
          value: function reset(particle, force) {
            if (!(!particle.bubble.inRange || force)) {
              return;
            }

            delete particle.bubble.div;
            delete particle.bubble.opacity;
            delete particle.bubble.radius;
            delete particle.bubble.color;
          }
        }, {
          key: "interact",
          value: function interact() {
            var _this17 = this;

            var options = this.container.actualOptions,
                events = options.interactivity.events,
                onHover = events.onHover,
                onClick = events.onClick,
                hoverEnabled = onHover.enable,
                hoverMode = onHover.mode,
                clickEnabled = onClick.enable,
                clickMode = onClick.mode,
                divs = events.onDiv;

            if (hoverEnabled && (0, Utils_1.isInArray)(Enums_1.HoverMode.bubble, hoverMode)) {
              this.hoverBubble();
            } else if (clickEnabled && (0, Utils_1.isInArray)(Enums_1.ClickMode.bubble, clickMode)) {
              this.clickBubble();
            } else {
              (0, Utils_1.divModeExecute)(Enums_1.DivMode.bubble, divs, function (selector, div) {
                return _this17.singleSelectorHover(selector, div);
              });
            }
          }
        }, {
          key: "singleSelectorHover",
          value: function singleSelectorHover(selector, div) {
            var _this18 = this;

            var container = this.container,
                selectors = document.querySelectorAll(selector);

            if (!selectors.length) {
              return;
            }

            selectors.forEach(function (item) {
              var elem = item,
                  pxRatio = container.retina.pixelRatio,
                  pos = {
                x: (elem.offsetLeft + elem.offsetWidth / 2) * pxRatio,
                y: (elem.offsetTop + elem.offsetHeight / 2) * pxRatio
              },
                  repulseRadius = elem.offsetWidth / 2 * pxRatio,
                  area = div.type === Enums_1.DivType.circle ? new Utils_1.Circle(pos.x, pos.y, repulseRadius) : new Utils_1.Rectangle(elem.offsetLeft * pxRatio, elem.offsetTop * pxRatio, elem.offsetWidth * pxRatio, elem.offsetHeight * pxRatio),
                  query = container.particles.quadTree.query(area);

              var _iterator40 = _createForOfIteratorHelper(query),
                  _step40;

              try {
                for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
                  var particle = _step40.value;

                  if (!area.contains(particle.getPosition())) {
                    continue;
                  }

                  particle.bubble.inRange = true;
                  var divs = container.actualOptions.interactivity.modes.bubble.divs;
                  var divBubble = (0, Utils_1.divMode)(divs, elem);

                  if (!particle.bubble.div || particle.bubble.div !== elem) {
                    _this18.reset(particle, true);

                    particle.bubble.div = elem;
                  }

                  _this18.hoverBubbleSize(particle, 1, divBubble);

                  _this18.hoverBubbleOpacity(particle, 1, divBubble);

                  _this18.hoverBubbleColor(particle, 1, divBubble);
                }
              } catch (err) {
                _iterator40.e(err);
              } finally {
                _iterator40.f();
              }
            });
          }
        }, {
          key: "process",
          value: function process(particle, distMouse, timeSpent, data) {
            var container = this.container,
                bubbleParam = data.bubbleObj.optValue;

            if (bubbleParam === undefined) {
              return;
            }

            var options = container.actualOptions,
                bubbleDuration = options.interactivity.modes.bubble.duration,
                bubbleDistance = container.retina.bubbleModeDistance,
                particlesParam = data.particlesObj.optValue,
                pObjBubble = data.bubbleObj.value,
                pObj = data.particlesObj.value || 0,
                type = data.type;

            if (bubbleParam === particlesParam) {
              return;
            }

            if (!container.bubble.durationEnd) {
              if (distMouse <= bubbleDistance) {
                var obj = pObjBubble !== null && pObjBubble !== void 0 ? pObjBubble : pObj;

                if (obj !== bubbleParam) {
                  var value = pObj - timeSpent * (pObj - bubbleParam) / bubbleDuration;

                  if (type === ProcessBubbleType_1.ProcessBubbleType.size) {
                    particle.bubble.radius = value;
                  }

                  if (type === ProcessBubbleType_1.ProcessBubbleType.opacity) {
                    particle.bubble.opacity = value;
                  }
                }
              } else {
                if (type === ProcessBubbleType_1.ProcessBubbleType.size) {
                  delete particle.bubble.radius;
                }

                if (type === ProcessBubbleType_1.ProcessBubbleType.opacity) {
                  delete particle.bubble.opacity;
                }
              }
            } else if (pObjBubble) {
              if (type === ProcessBubbleType_1.ProcessBubbleType.size) {
                delete particle.bubble.radius;
              }

              if (type === ProcessBubbleType_1.ProcessBubbleType.opacity) {
                delete particle.bubble.opacity;
              }
            }
          }
        }, {
          key: "clickBubble",
          value: function clickBubble() {
            var _a, _b;

            var container = this.container,
                options = container.actualOptions,
                mouseClickPos = container.interactivity.mouse.clickPosition;

            if (!mouseClickPos) {
              return;
            }

            var distance = container.retina.bubbleModeDistance,
                query = container.particles.quadTree.queryCircle(mouseClickPos, distance);

            var _iterator41 = _createForOfIteratorHelper(query),
                _step41;

            try {
              for (_iterator41.s(); !(_step41 = _iterator41.n()).done;) {
                var particle = _step41.value;

                if (!container.bubble.clicking) {
                  continue;
                }

                particle.bubble.inRange = !container.bubble.durationEnd;
                var pos = particle.getPosition(),
                    distMouse = (0, Utils_1.getDistance)(pos, mouseClickPos),
                    timeSpent = (new Date().getTime() - (container.interactivity.mouse.clickTime || 0)) / 1000;

                if (timeSpent > options.interactivity.modes.bubble.duration) {
                  container.bubble.durationEnd = true;
                }

                if (timeSpent > options.interactivity.modes.bubble.duration * 2) {
                  container.bubble.clicking = false;
                  container.bubble.durationEnd = false;
                }

                var sizeData = {
                  bubbleObj: {
                    optValue: container.retina.bubbleModeSize,
                    value: particle.bubble.radius
                  },
                  particlesObj: {
                    optValue: (0, Utils_1.getRangeMax)(particle.options.size.value) * container.retina.pixelRatio,
                    value: particle.size.value
                  },
                  type: ProcessBubbleType_1.ProcessBubbleType.size
                };
                this.process(particle, distMouse, timeSpent, sizeData);
                var opacityData = {
                  bubbleObj: {
                    optValue: options.interactivity.modes.bubble.opacity,
                    value: particle.bubble.opacity
                  },
                  particlesObj: {
                    optValue: (0, Utils_1.getRangeMax)(particle.options.opacity.value),
                    value: (_b = (_a = particle.opacity) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : 1
                  },
                  type: ProcessBubbleType_1.ProcessBubbleType.opacity
                };
                this.process(particle, distMouse, timeSpent, opacityData);

                if (!container.bubble.durationEnd) {
                  if (distMouse <= container.retina.bubbleModeDistance) {
                    this.hoverBubbleColor(particle, distMouse);
                  } else {
                    delete particle.bubble.color;
                  }
                } else {
                  delete particle.bubble.color;
                }
              }
            } catch (err) {
              _iterator41.e(err);
            } finally {
              _iterator41.f();
            }
          }
        }, {
          key: "hoverBubble",
          value: function hoverBubble() {
            var container = this.container,
                mousePos = container.interactivity.mouse.position;

            if (mousePos === undefined) {
              return;
            }

            var distance = container.retina.bubbleModeDistance,
                query = container.particles.quadTree.queryCircle(mousePos, distance);

            var _iterator42 = _createForOfIteratorHelper(query),
                _step42;

            try {
              for (_iterator42.s(); !(_step42 = _iterator42.n()).done;) {
                var particle = _step42.value;
                particle.bubble.inRange = true;
                var pos = particle.getPosition(),
                    pointDistance = (0, Utils_1.getDistance)(pos, mousePos),
                    ratio = 1 - pointDistance / distance;

                if (pointDistance <= distance) {
                  if (ratio >= 0 && container.interactivity.status === Utils_1.Constants.mouseMoveEvent) {
                    this.hoverBubbleSize(particle, ratio);
                    this.hoverBubbleOpacity(particle, ratio);
                    this.hoverBubbleColor(particle, ratio);
                  }
                } else {
                  this.reset(particle);
                }

                if (container.interactivity.status === Utils_1.Constants.mouseLeaveEvent) {
                  this.reset(particle);
                }
              }
            } catch (err) {
              _iterator42.e(err);
            } finally {
              _iterator42.f();
            }
          }
        }, {
          key: "hoverBubbleSize",
          value: function hoverBubbleSize(particle, ratio, divBubble) {
            var container = this.container,
                modeSize = (divBubble === null || divBubble === void 0 ? void 0 : divBubble.size) ? divBubble.size * container.retina.pixelRatio : container.retina.bubbleModeSize;

            if (modeSize === undefined) {
              return;
            }

            var optSize = (0, Utils_1.getRangeMax)(particle.options.size.value) * container.retina.pixelRatio;
            var pSize = particle.size.value;
            var size = calculateBubbleValue(pSize, modeSize, optSize, ratio);

            if (size !== undefined) {
              particle.bubble.radius = size;
            }
          }
        }, {
          key: "hoverBubbleOpacity",
          value: function hoverBubbleOpacity(particle, ratio, divBubble) {
            var _a, _b, _c;

            var container = this.container,
                options = container.actualOptions,
                modeOpacity = (_a = divBubble === null || divBubble === void 0 ? void 0 : divBubble.opacity) !== null && _a !== void 0 ? _a : options.interactivity.modes.bubble.opacity;

            if (!modeOpacity) {
              return;
            }

            var optOpacity = particle.options.opacity.value;
            var pOpacity = (_c = (_b = particle.opacity) === null || _b === void 0 ? void 0 : _b.value) !== null && _c !== void 0 ? _c : 1;
            var opacity = calculateBubbleValue(pOpacity, modeOpacity, (0, Utils_1.getRangeMax)(optOpacity), ratio);

            if (opacity !== undefined) {
              particle.bubble.opacity = opacity;
            }
          }
        }, {
          key: "hoverBubbleColor",
          value: function hoverBubbleColor(particle, ratio, divBubble) {
            var options = this.container.actualOptions;
            var bubbleOptions = divBubble !== null && divBubble !== void 0 ? divBubble : options.interactivity.modes.bubble;

            if (!particle.bubble.finalColor) {
              var modeColor = bubbleOptions.color;

              if (!modeColor) {
                return;
              }

              var bubbleColor = modeColor instanceof Array ? (0, Utils_1.itemFromArray)(modeColor) : modeColor;
              particle.bubble.finalColor = (0, Utils_1.colorToHsl)(bubbleColor);
            }

            if (!particle.bubble.finalColor) {
              return;
            }

            if (bubbleOptions.mix) {
              particle.bubble.color = undefined;
              var pColor = particle.getFillColor();
              particle.bubble.color = pColor ? (0, Utils_1.rgbToHsl)((0, Utils_1.colorMix)(pColor, particle.bubble.finalColor, 1 - ratio, ratio)) : particle.bubble.finalColor;
            } else {
              particle.bubble.color = particle.bubble.finalColor;
            }
          }
        }]);

        return Bubbler;
      }(ExternalInteractorBase_1.ExternalInteractorBase);

      exports.Bubbler = Bubbler;
      /***/
    },

    /***/
    47780:
    /*!************************************************************************************!*\
      !*** ./node_modules/tsparticles/Interactions/External/Bubble/ProcessBubbleType.js ***!
      \************************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ProcessBubbleType = void 0;
      var ProcessBubbleType;

      (function (ProcessBubbleType) {
        ProcessBubbleType["color"] = "color";
        ProcessBubbleType["opacity"] = "opacity";
        ProcessBubbleType["size"] = "size";
      })(ProcessBubbleType = exports.ProcessBubbleType || (exports.ProcessBubbleType = {}));
      /***/

    },

    /***/
    8714:
    /*!************************************************************************!*\
      !*** ./node_modules/tsparticles/Interactions/External/Bubble/index.js ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.loadExternalBubbleInteraction = void 0;

      var Bubbler_1 = __webpack_require__(
      /*! ./Bubbler */
      68850);

      function loadExternalBubbleInteraction(tsParticles) {
        tsParticles.addInteractor("externalBubble", function (container) {
          return new Bubbler_1.Bubbler(container);
        });
      }

      exports.loadExternalBubbleInteraction = loadExternalBubbleInteraction;
      /***/
    },

    /***/
    32382:
    /*!*****************************************************************************!*\
      !*** ./node_modules/tsparticles/Interactions/External/Connect/Connector.js ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Connector = void 0;

      var Utils_1 = __webpack_require__(
      /*! ../../../Utils */
      18942);

      var Enums_1 = __webpack_require__(
      /*! ../../../Enums */
      39666);

      var ExternalInteractorBase_1 = __webpack_require__(
      /*! ../../../Core/ExternalInteractorBase */
      11377);

      var Connector = /*#__PURE__*/function (_ExternalInteractorBa4) {
        _inherits(Connector, _ExternalInteractorBa4);

        var _super6 = _createSuper(Connector);

        function Connector(container) {
          _classCallCheck(this, Connector);

          return _super6.call(this, container);
        }

        _createClass(Connector, [{
          key: "isEnabled",
          value: function isEnabled() {
            var container = this.container,
                mouse = container.interactivity.mouse,
                events = container.actualOptions.interactivity.events;

            if (!(events.onHover.enable && mouse.position)) {
              return false;
            }

            return (0, Utils_1.isInArray)(Enums_1.HoverMode.connect, events.onHover.mode);
          }
        }, {
          key: "reset",
          value: function reset() {}
        }, {
          key: "interact",
          value: function interact() {
            var container = this.container,
                options = container.actualOptions;

            if (options.interactivity.events.onHover.enable && container.interactivity.status === "mousemove") {
              var mousePos = container.interactivity.mouse.position;

              if (!mousePos) {
                return;
              }

              var distance = Math.abs(container.retina.connectModeRadius),
                  query = container.particles.quadTree.queryCircle(mousePos, distance);
              var i = 0;

              var _iterator43 = _createForOfIteratorHelper(query),
                  _step43;

              try {
                for (_iterator43.s(); !(_step43 = _iterator43.n()).done;) {
                  var p1 = _step43.value;
                  var pos1 = p1.getPosition();

                  var _iterator44 = _createForOfIteratorHelper(query.slice(i + 1)),
                      _step44;

                  try {
                    for (_iterator44.s(); !(_step44 = _iterator44.n()).done;) {
                      var p2 = _step44.value;
                      var pos2 = p2.getPosition(),
                          distMax = Math.abs(container.retina.connectModeDistance),
                          xDiff = Math.abs(pos1.x - pos2.x),
                          yDiff = Math.abs(pos1.y - pos2.y);

                      if (xDiff < distMax && yDiff < distMax) {
                        container.canvas.drawConnectLine(p1, p2);
                      }
                    }
                  } catch (err) {
                    _iterator44.e(err);
                  } finally {
                    _iterator44.f();
                  }

                  ++i;
                }
              } catch (err) {
                _iterator43.e(err);
              } finally {
                _iterator43.f();
              }
            }
          }
        }]);

        return Connector;
      }(ExternalInteractorBase_1.ExternalInteractorBase);

      exports.Connector = Connector;
      /***/
    },

    /***/
    17294:
    /*!*************************************************************************!*\
      !*** ./node_modules/tsparticles/Interactions/External/Connect/index.js ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.loadExternalConnectInteraction = void 0;

      var Connector_1 = __webpack_require__(
      /*! ./Connector */
      32382);

      function loadExternalConnectInteraction(tsParticles) {
        tsParticles.addInteractor("externalConnect", function (container) {
          return new Connector_1.Connector(container);
        });
      }

      exports.loadExternalConnectInteraction = loadExternalConnectInteraction;
      /***/
    },

    /***/
    33312:
    /*!************************************************************************!*\
      !*** ./node_modules/tsparticles/Interactions/External/Grab/Grabber.js ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Grabber = void 0;

      var Utils_1 = __webpack_require__(
      /*! ../../../Utils */
      18942);

      var Enums_1 = __webpack_require__(
      /*! ../../../Enums */
      39666);

      var ExternalInteractorBase_1 = __webpack_require__(
      /*! ../../../Core/ExternalInteractorBase */
      11377);

      var Grabber = /*#__PURE__*/function (_ExternalInteractorBa5) {
        _inherits(Grabber, _ExternalInteractorBa5);

        var _super7 = _createSuper(Grabber);

        function Grabber(container) {
          _classCallCheck(this, Grabber);

          return _super7.call(this, container);
        }

        _createClass(Grabber, [{
          key: "isEnabled",
          value: function isEnabled() {
            var container = this.container,
                mouse = container.interactivity.mouse,
                events = container.actualOptions.interactivity.events;
            return events.onHover.enable && !!mouse.position && (0, Utils_1.isInArray)(Enums_1.HoverMode.grab, events.onHover.mode);
          }
        }, {
          key: "reset",
          value: function reset() {}
        }, {
          key: "interact",
          value: function interact() {
            var _a;

            var container = this.container,
                options = container.actualOptions,
                interactivity = options.interactivity;

            if (interactivity.events.onHover.enable && container.interactivity.status === Utils_1.Constants.mouseMoveEvent) {
              var mousePos = container.interactivity.mouse.position;

              if (!mousePos) {
                return;
              }

              var distance = container.retina.grabModeDistance,
                  query = container.particles.quadTree.queryCircle(mousePos, distance);

              var _iterator45 = _createForOfIteratorHelper(query),
                  _step45;

              try {
                for (_iterator45.s(); !(_step45 = _iterator45.n()).done;) {
                  var particle = _step45.value;
                  var pos = particle.getPosition(),
                      pointDistance = (0, Utils_1.getDistance)(pos, mousePos);

                  if (pointDistance <= distance) {
                    var grabLineOptions = interactivity.modes.grab.links,
                        lineOpacity = grabLineOptions.opacity,
                        opacityLine = lineOpacity - pointDistance * lineOpacity / distance;

                    if (opacityLine <= 0) {
                      continue;
                    }

                    var optColor = (_a = grabLineOptions.color) !== null && _a !== void 0 ? _a : particle.options.links.color;

                    if (!container.particles.grabLineColor) {
                      var linksOptions = options.interactivity.modes.grab.links;
                      container.particles.grabLineColor = (0, Utils_1.getLinkRandomColor)(optColor, linksOptions.blink, linksOptions.consent);
                    }

                    var colorLine = (0, Utils_1.getLinkColor)(particle, undefined, container.particles.grabLineColor);

                    if (!colorLine) {
                      return;
                    }

                    container.canvas.drawGrabLine(particle, colorLine, opacityLine, mousePos);
                  }
                }
              } catch (err) {
                _iterator45.e(err);
              } finally {
                _iterator45.f();
              }
            }
          }
        }]);

        return Grabber;
      }(ExternalInteractorBase_1.ExternalInteractorBase);

      exports.Grabber = Grabber;
      /***/
    },

    /***/
    39169:
    /*!**********************************************************************!*\
      !*** ./node_modules/tsparticles/Interactions/External/Grab/index.js ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.loadExternalGrabInteraction = void 0;

      var Grabber_1 = __webpack_require__(
      /*! ./Grabber */
      33312);

      function loadExternalGrabInteraction(tsParticles) {
        tsParticles.addInteractor("externalGrab", function (container) {
          return new Grabber_1.Grabber(container);
        });
      }

      exports.loadExternalGrabInteraction = loadExternalGrabInteraction;
      /***/
    },

    /***/
    50424:
    /*!****************************************************************************!*\
      !*** ./node_modules/tsparticles/Interactions/External/Repulse/Repulser.js ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Repulser = void 0;

      var Enums_1 = __webpack_require__(
      /*! ../../../Enums */
      39666);

      var Utils_1 = __webpack_require__(
      /*! ../../../Utils */
      18942);

      var Vector_1 = __webpack_require__(
      /*! ../../../Core/Particle/Vector */
      27440);

      var ExternalInteractorBase_1 = __webpack_require__(
      /*! ../../../Core/ExternalInteractorBase */
      11377);

      var Repulser = /*#__PURE__*/function (_ExternalInteractorBa6) {
        _inherits(Repulser, _ExternalInteractorBa6);

        var _super8 = _createSuper(Repulser);

        function Repulser(container) {
          _classCallCheck(this, Repulser);

          return _super8.call(this, container);
        }

        _createClass(Repulser, [{
          key: "isEnabled",
          value: function isEnabled() {
            var container = this.container,
                options = container.actualOptions,
                mouse = container.interactivity.mouse,
                events = options.interactivity.events,
                divs = events.onDiv,
                divRepulse = (0, Utils_1.isDivModeEnabled)(Enums_1.DivMode.repulse, divs);

            if (!(divRepulse || events.onHover.enable && mouse.position || events.onClick.enable && mouse.clickPosition)) {
              return false;
            }

            var hoverMode = events.onHover.mode,
                clickMode = events.onClick.mode;
            return (0, Utils_1.isInArray)(Enums_1.HoverMode.repulse, hoverMode) || (0, Utils_1.isInArray)(Enums_1.ClickMode.repulse, clickMode) || divRepulse;
          }
        }, {
          key: "reset",
          value: function reset() {}
        }, {
          key: "interact",
          value: function interact() {
            var _this19 = this;

            var container = this.container,
                options = container.actualOptions,
                mouseMoveStatus = container.interactivity.status === Utils_1.Constants.mouseMoveEvent,
                events = options.interactivity.events,
                hoverEnabled = events.onHover.enable,
                hoverMode = events.onHover.mode,
                clickEnabled = events.onClick.enable,
                clickMode = events.onClick.mode,
                divs = events.onDiv;

            if (mouseMoveStatus && hoverEnabled && (0, Utils_1.isInArray)(Enums_1.HoverMode.repulse, hoverMode)) {
              this.hoverRepulse();
            } else if (clickEnabled && (0, Utils_1.isInArray)(Enums_1.ClickMode.repulse, clickMode)) {
              this.clickRepulse();
            } else {
              (0, Utils_1.divModeExecute)(Enums_1.DivMode.repulse, divs, function (selector, div) {
                return _this19.singleSelectorRepulse(selector, div);
              });
            }
          }
        }, {
          key: "singleSelectorRepulse",
          value: function singleSelectorRepulse(selector, div) {
            var _this20 = this;

            var container = this.container,
                query = document.querySelectorAll(selector);

            if (!query.length) {
              return;
            }

            query.forEach(function (item) {
              var elem = item,
                  pxRatio = container.retina.pixelRatio,
                  pos = {
                x: (elem.offsetLeft + elem.offsetWidth / 2) * pxRatio,
                y: (elem.offsetTop + elem.offsetHeight / 2) * pxRatio
              },
                  repulseRadius = elem.offsetWidth / 2 * pxRatio,
                  area = div.type === Enums_1.DivType.circle ? new Utils_1.Circle(pos.x, pos.y, repulseRadius) : new Utils_1.Rectangle(elem.offsetLeft * pxRatio, elem.offsetTop * pxRatio, elem.offsetWidth * pxRatio, elem.offsetHeight * pxRatio),
                  divs = container.actualOptions.interactivity.modes.repulse.divs,
                  divRepulse = (0, Utils_1.divMode)(divs, elem);

              _this20.processRepulse(pos, repulseRadius, area, divRepulse);
            });
          }
        }, {
          key: "hoverRepulse",
          value: function hoverRepulse() {
            var container = this.container,
                mousePos = container.interactivity.mouse.position;

            if (!mousePos) {
              return;
            }

            var repulseRadius = container.retina.repulseModeDistance;
            this.processRepulse(mousePos, repulseRadius, new Utils_1.Circle(mousePos.x, mousePos.y, repulseRadius));
          }
        }, {
          key: "processRepulse",
          value: function processRepulse(position, repulseRadius, area, divRepulse) {
            var _a;

            var container = this.container,
                query = container.particles.quadTree.query(area),
                repulseOptions = container.actualOptions.interactivity.modes.repulse;

            var _iterator46 = _createForOfIteratorHelper(query),
                _step46;

            try {
              for (_iterator46.s(); !(_step46 = _iterator46.n()).done;) {
                var particle = _step46.value;

                var _ref8 = (0, Utils_1.getDistances)(particle.position, position),
                    dx = _ref8.dx,
                    dy = _ref8.dy,
                    distance = _ref8.distance,
                    velocity = ((_a = divRepulse === null || divRepulse === void 0 ? void 0 : divRepulse.speed) !== null && _a !== void 0 ? _a : repulseOptions.speed) * repulseOptions.factor,
                    repulseFactor = (0, Utils_1.clamp)((0, Utils_1.calcEasing)(1 - distance / repulseRadius, repulseOptions.easing) * velocity, 0, repulseOptions.maxSpeed),
                    normVec = Vector_1.Vector.create(distance === 0 ? velocity : dx / distance * repulseFactor, distance === 0 ? velocity : dy / distance * repulseFactor);

                particle.position.addTo(normVec);
              }
            } catch (err) {
              _iterator46.e(err);
            } finally {
              _iterator46.f();
            }
          }
        }, {
          key: "clickRepulse",
          value: function clickRepulse() {
            var container = this.container;

            if (!container.repulse.finish) {
              if (!container.repulse.count) {
                container.repulse.count = 0;
              }

              container.repulse.count++;

              if (container.repulse.count === container.particles.count) {
                container.repulse.finish = true;
              }
            }

            if (container.repulse.clicking) {
              var repulseDistance = container.retina.repulseModeDistance,
                  repulseRadius = Math.pow(repulseDistance / 6, 3),
                  mouseClickPos = container.interactivity.mouse.clickPosition;

              if (mouseClickPos === undefined) {
                return;
              }

              var range = new Utils_1.Circle(mouseClickPos.x, mouseClickPos.y, repulseRadius),
                  query = container.particles.quadTree.query(range);

              var _iterator47 = _createForOfIteratorHelper(query),
                  _step47;

              try {
                for (_iterator47.s(); !(_step47 = _iterator47.n()).done;) {
                  var particle = _step47.value;

                  var _ref9 = (0, Utils_1.getDistances)(mouseClickPos, particle.position),
                      dx = _ref9.dx,
                      dy = _ref9.dy,
                      distance = _ref9.distance,
                      d = Math.pow(distance, 2),
                      velocity = container.actualOptions.interactivity.modes.repulse.speed,
                      force = -repulseRadius * velocity / d;

                  if (d <= repulseRadius) {
                    container.repulse.particles.push(particle);
                    var vect = Vector_1.Vector.create(dx, dy);
                    vect.length = force;
                    particle.velocity.setTo(vect);
                  }
                }
              } catch (err) {
                _iterator47.e(err);
              } finally {
                _iterator47.f();
              }
            } else if (container.repulse.clicking === false) {
              var _iterator48 = _createForOfIteratorHelper(container.repulse.particles),
                  _step48;

              try {
                for (_iterator48.s(); !(_step48 = _iterator48.n()).done;) {
                  var _particle3 = _step48.value;

                  _particle3.velocity.setTo(_particle3.initialVelocity);
                }
              } catch (err) {
                _iterator48.e(err);
              } finally {
                _iterator48.f();
              }

              container.repulse.particles = [];
            }
          }
        }]);

        return Repulser;
      }(ExternalInteractorBase_1.ExternalInteractorBase);

      exports.Repulser = Repulser;
      /***/
    },

    /***/
    90974:
    /*!*************************************************************************!*\
      !*** ./node_modules/tsparticles/Interactions/External/Repulse/index.js ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.loadExternalRepulseInteraction = void 0;

      var Repulser_1 = __webpack_require__(
      /*! ./Repulser */
      50424);

      function loadExternalRepulseInteraction(tsParticles) {
        tsParticles.addInteractor("externalRepulse", function (container) {
          return new Repulser_1.Repulser(container);
        });
      }

      exports.loadExternalRepulseInteraction = loadExternalRepulseInteraction;
      /***/
    },

    /***/
    99292:
    /*!****************************************************************************!*\
      !*** ./node_modules/tsparticles/Interactions/External/Trail/TrailMaker.js ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TrailMaker = void 0;

      var Utils_1 = __webpack_require__(
      /*! ../../../Utils */
      18942);

      var Enums_1 = __webpack_require__(
      /*! ../../../Enums */
      39666);

      var ExternalInteractorBase_1 = __webpack_require__(
      /*! ../../../Core/ExternalInteractorBase */
      11377);

      var TrailMaker = /*#__PURE__*/function (_ExternalInteractorBa7) {
        _inherits(TrailMaker, _ExternalInteractorBa7);

        var _super9 = _createSuper(TrailMaker);

        function TrailMaker(container) {
          var _this21;

          _classCallCheck(this, TrailMaker);

          _this21 = _super9.call(this, container);
          _this21.delay = 0;
          return _this21;
        }

        _createClass(TrailMaker, [{
          key: "interact",
          value: function interact(delta) {
            var _a, _b, _c, _d;

            if (!this.container.retina.reduceFactor) {
              return;
            }

            var container = this.container,
                options = container.actualOptions,
                trailOptions = options.interactivity.modes.trail,
                optDelay = trailOptions.delay * 1000 / this.container.retina.reduceFactor;

            if (this.delay < optDelay) {
              this.delay += delta.value;
            }

            if (this.delay < optDelay) {
              return;
            }

            var canEmit = true;

            if (trailOptions.pauseOnStop) {
              if (container.interactivity.mouse.position === this.lastPosition || ((_a = container.interactivity.mouse.position) === null || _a === void 0 ? void 0 : _a.x) === ((_b = this.lastPosition) === null || _b === void 0 ? void 0 : _b.x) && ((_c = container.interactivity.mouse.position) === null || _c === void 0 ? void 0 : _c.y) === ((_d = this.lastPosition) === null || _d === void 0 ? void 0 : _d.y)) {
                canEmit = false;
              }
            }

            if (container.interactivity.mouse.position) {
              this.lastPosition = {
                x: container.interactivity.mouse.position.x,
                y: container.interactivity.mouse.position.y
              };
            } else {
              delete this.lastPosition;
            }

            if (canEmit) {
              container.particles.push(trailOptions.quantity, container.interactivity.mouse, trailOptions.particles);
            }

            this.delay -= optDelay;
          }
        }, {
          key: "isEnabled",
          value: function isEnabled() {
            var container = this.container,
                options = container.actualOptions,
                mouse = container.interactivity.mouse,
                events = options.interactivity.events;
            return mouse.clicking && mouse.inside && !!mouse.position && (0, Utils_1.isInArray)(Enums_1.ClickMode.trail, events.onClick.mode) || mouse.inside && !!mouse.position && (0, Utils_1.isInArray)(Enums_1.HoverMode.trail, events.onHover.mode);
          }
        }, {
          key: "reset",
          value: function reset() {}
        }]);

        return TrailMaker;
      }(ExternalInteractorBase_1.ExternalInteractorBase);

      exports.TrailMaker = TrailMaker;
      /***/
    },

    /***/
    84738:
    /*!***********************************************************************!*\
      !*** ./node_modules/tsparticles/Interactions/External/Trail/index.js ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.loadExternalTrailInteraction = void 0;

      var TrailMaker_1 = __webpack_require__(
      /*! ./TrailMaker */
      99292);

      function loadExternalTrailInteraction(tsParticles) {
        tsParticles.addInteractor("externalTrail", function (container) {
          return new TrailMaker_1.TrailMaker(container);
        });
      }

      exports.loadExternalTrailInteraction = loadExternalTrailInteraction;
      /***/
    },

    /***/
    95042:
    /*!******************************************************************************!*\
      !*** ./node_modules/tsparticles/Interactions/Particles/Attract/Attractor.js ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Attractor = void 0;

      var Utils_1 = __webpack_require__(
      /*! ../../../Utils */
      18942);

      var ParticlesInteractorBase_1 = __webpack_require__(
      /*! ../../../Core/ParticlesInteractorBase */
      77077);

      var Attractor = /*#__PURE__*/function (_ParticlesInteractorB) {
        _inherits(Attractor, _ParticlesInteractorB);

        var _super10 = _createSuper(Attractor);

        function Attractor(container) {
          _classCallCheck(this, Attractor);

          return _super10.call(this, container);
        }

        _createClass(Attractor, [{
          key: "interact",
          value: function interact(p1) {
            var _a;

            var container = this.container,
                distance = (_a = p1.retina.attractDistance) !== null && _a !== void 0 ? _a : container.retina.attractDistance,
                pos1 = p1.getPosition(),
                query = container.particles.quadTree.queryCircle(pos1, distance);

            var _iterator49 = _createForOfIteratorHelper(query),
                _step49;

            try {
              for (_iterator49.s(); !(_step49 = _iterator49.n()).done;) {
                var p2 = _step49.value;

                if (p1 === p2 || !p2.options.move.attract.enable || p2.destroyed || p2.spawning) {
                  continue;
                }

                var pos2 = p2.getPosition(),
                    _ref10 = (0, Utils_1.getDistances)(pos1, pos2),
                    dx = _ref10.dx,
                    dy = _ref10.dy,
                    rotate = p1.options.move.attract.rotate,
                    ax = dx / (rotate.x * 1000),
                    ay = dy / (rotate.y * 1000),
                    p1Factor = p2.size.value / p1.size.value,
                    p2Factor = 1 / p1Factor;

                p1.velocity.x -= ax * p1Factor;
                p1.velocity.y -= ay * p1Factor;
                p2.velocity.x += ax * p2Factor;
                p2.velocity.y += ay * p2Factor;
              }
            } catch (err) {
              _iterator49.e(err);
            } finally {
              _iterator49.f();
            }
          }
        }, {
          key: "isEnabled",
          value: function isEnabled(particle) {
            return particle.options.move.attract.enable;
          }
        }, {
          key: "reset",
          value: function reset() {}
        }]);

        return Attractor;
      }(ParticlesInteractorBase_1.ParticlesInteractorBase);

      exports.Attractor = Attractor;
      /***/
    },

    /***/
    61823:
    /*!**************************************************************************!*\
      !*** ./node_modules/tsparticles/Interactions/Particles/Attract/index.js ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.loadParticlesAttractInteraction = void 0;

      var Attractor_1 = __webpack_require__(
      /*! ./Attractor */
      95042);

      function loadParticlesAttractInteraction(tsParticles) {
        tsParticles.addInteractor("particlesAttract", function (container) {
          return new Attractor_1.Attractor(container);
        });
      }

      exports.loadParticlesAttractInteraction = loadParticlesAttractInteraction;
      /***/
    },

    /***/
    28164:
    /*!********************************************************************************!*\
      !*** ./node_modules/tsparticles/Interactions/Particles/Collisions/Collider.js ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Collider = void 0;

      var Enums_1 = __webpack_require__(
      /*! ../../../Enums */
      39666);

      var Utils_1 = __webpack_require__(
      /*! ../../../Utils */
      18942);

      var ParticlesInteractorBase_1 = __webpack_require__(
      /*! ../../../Core/ParticlesInteractorBase */
      77077);

      function bounce(p1, p2) {
        (0, Utils_1.circleBounce)((0, Utils_1.circleBounceDataFromParticle)(p1), (0, Utils_1.circleBounceDataFromParticle)(p2));
      }

      function destroy(p1, p2) {
        if (!p1.unbreakable && !p2.unbreakable) {
          bounce(p1, p2);
        }

        if (p1.getRadius() === undefined && p2.getRadius() !== undefined) {
          p1.destroy();
        } else if (p1.getRadius() !== undefined && p2.getRadius() === undefined) {
          p2.destroy();
        } else if (p1.getRadius() !== undefined && p2.getRadius() !== undefined) {
          if (p1.getRadius() >= p2.getRadius()) {
            p2.destroy();
          } else {
            p1.destroy();
          }
        }
      }

      var Collider = /*#__PURE__*/function (_ParticlesInteractorB2) {
        _inherits(Collider, _ParticlesInteractorB2);

        var _super11 = _createSuper(Collider);

        function Collider(container) {
          _classCallCheck(this, Collider);

          return _super11.call(this, container);
        }

        _createClass(Collider, [{
          key: "isEnabled",
          value: function isEnabled(particle) {
            return particle.options.collisions.enable;
          }
        }, {
          key: "reset",
          value: function reset() {}
        }, {
          key: "interact",
          value: function interact(p1) {
            var container = this.container;
            var pos1 = p1.getPosition();
            var radius1 = p1.getRadius();
            var query = container.particles.quadTree.queryCircle(pos1, radius1 * 2);

            var _iterator50 = _createForOfIteratorHelper(query),
                _step50;

            try {
              for (_iterator50.s(); !(_step50 = _iterator50.n()).done;) {
                var p2 = _step50.value;

                if (p1 === p2 || !p2.options.collisions.enable || p1.options.collisions.mode !== p2.options.collisions.mode || p2.destroyed || p2.spawning) {
                  continue;
                }

                var pos2 = p2.getPosition();

                if (Math.round(pos1.z) !== Math.round(pos2.z)) {
                  continue;
                }

                var dist = (0, Utils_1.getDistance)(pos1, pos2);
                var radius2 = p2.getRadius();
                var distP = radius1 + radius2;

                if (dist <= distP) {
                  this.resolveCollision(p1, p2);
                }
              }
            } catch (err) {
              _iterator50.e(err);
            } finally {
              _iterator50.f();
            }
          }
        }, {
          key: "resolveCollision",
          value: function resolveCollision(p1, p2) {
            switch (p1.options.collisions.mode) {
              case Enums_1.CollisionMode.absorb:
                {
                  this.absorb(p1, p2);
                  break;
                }

              case Enums_1.CollisionMode.bounce:
                {
                  bounce(p1, p2);
                  break;
                }

              case Enums_1.CollisionMode.destroy:
                {
                  destroy(p1, p2);
                  break;
                }
            }
          }
        }, {
          key: "absorb",
          value: function absorb(p1, p2) {
            var container = this.container;
            var fps = container.fpsLimit / 1000;

            if (p1.getRadius() === undefined && p2.getRadius() !== undefined) {
              p1.destroy();
            } else if (p1.getRadius() !== undefined && p2.getRadius() === undefined) {
              p2.destroy();
            } else if (p1.getRadius() !== undefined && p2.getRadius() !== undefined) {
              if (p1.getRadius() >= p2.getRadius()) {
                var factor = (0, Utils_1.clamp)(p1.getRadius() / p2.getRadius(), 0, p2.getRadius()) * fps;
                p1.size.value += factor;
                p2.size.value -= factor;

                if (p2.getRadius() <= container.retina.pixelRatio) {
                  p2.size.value = 0;
                  p2.destroy();
                }
              } else {
                var _factor = (0, Utils_1.clamp)(p2.getRadius() / p1.getRadius(), 0, p1.getRadius()) * fps;

                p1.size.value -= _factor;
                p2.size.value += _factor;

                if (p1.getRadius() <= container.retina.pixelRatio) {
                  p1.size.value = 0;
                  p1.destroy();
                }
              }
            }
          }
        }]);

        return Collider;
      }(ParticlesInteractorBase_1.ParticlesInteractorBase);

      exports.Collider = Collider;
      /***/
    },

    /***/
    66840:
    /*!*****************************************************************************!*\
      !*** ./node_modules/tsparticles/Interactions/Particles/Collisions/index.js ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.loadParticlesCollisionsInteraction = void 0;

      var Collider_1 = __webpack_require__(
      /*! ./Collider */
      28164);

      function loadParticlesCollisionsInteraction(tsParticles) {
        tsParticles.addInteractor("particlesCollisions", function (container) {
          return new Collider_1.Collider(container);
        });
      }

      exports.loadParticlesCollisionsInteraction = loadParticlesCollisionsInteraction;
      /***/
    },

    /***/
    5437:
    /*!*******************************************************************************!*\
      !*** ./node_modules/tsparticles/Interactions/Particles/Links/LinkInstance.js ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LinkInstance = void 0;

      var Utils_1 = __webpack_require__(
      /*! ../../../Utils */
      18942);

      var LinkInstance = /*#__PURE__*/function () {
        function LinkInstance(container) {
          _classCallCheck(this, LinkInstance);

          this.container = container;
        }

        _createClass(LinkInstance, [{
          key: "particleCreated",
          value: function particleCreated(particle) {
            var linkParticle = particle;
            linkParticle.links = [];
          }
        }, {
          key: "particleDestroyed",
          value: function particleDestroyed(particle) {
            var linkParticle = particle;
            linkParticle.links = [];
          }
        }, {
          key: "drawParticle",
          value: function drawParticle(context, particle) {
            var _this22 = this;

            var linkParticle = particle;
            var container = this.container;
            var particles = container.particles;
            var pOptions = particle.options;

            if (linkParticle.links.length > 0) {
              context.save();
              var p1Links = linkParticle.links.filter(function (l) {
                var linkFreq = container.particles.getLinkFrequency(linkParticle, l.destination);
                return linkFreq <= pOptions.links.frequency;
              });

              var _iterator51 = _createForOfIteratorHelper(p1Links),
                  _step51;

              try {
                var _loop = function _loop() {
                  var link = _step51.value;
                  var p2 = link.destination;

                  if (pOptions.links.triangles.enable) {
                    var links = p1Links.map(function (l) {
                      return l.destination;
                    });
                    var vertices = p2.links.filter(function (t) {
                      var linkFreq = container.particles.getLinkFrequency(p2, t.destination);
                      return linkFreq <= p2.options.links.frequency && links.indexOf(t.destination) >= 0;
                    });

                    if (vertices.length) {
                      var _iterator52 = _createForOfIteratorHelper(vertices),
                          _step52;

                      try {
                        for (_iterator52.s(); !(_step52 = _iterator52.n()).done;) {
                          var vertex = _step52.value;
                          var p3 = vertex.destination;
                          var triangleFreq = particles.getTriangleFrequency(linkParticle, p2, p3);

                          if (triangleFreq > pOptions.links.triangles.frequency) {
                            continue;
                          }

                          _this22.drawLinkTriangle(linkParticle, link, vertex);
                        }
                      } catch (err) {
                        _iterator52.e(err);
                      } finally {
                        _iterator52.f();
                      }
                    }
                  }

                  if (link.opacity > 0 && container.retina.linksWidth > 0) {
                    _this22.drawLinkLine(linkParticle, link);
                  }
                };

                for (_iterator51.s(); !(_step51 = _iterator51.n()).done;) {
                  _loop();
                }
              } catch (err) {
                _iterator51.e(err);
              } finally {
                _iterator51.f();
              }

              context.restore();
            }
          }
        }, {
          key: "drawLinkTriangle",
          value: function drawLinkTriangle(p1, link1, link2) {
            var _a;

            var container = this.container;
            var options = container.actualOptions;
            var p2 = link1.destination;
            var p3 = link2.destination;
            var triangleOptions = p1.options.links.triangles;
            var opacityTriangle = (_a = triangleOptions.opacity) !== null && _a !== void 0 ? _a : (link1.opacity + link2.opacity) / 2;

            if (opacityTriangle <= 0) {
              return;
            }

            var pos1 = p1.getPosition();
            var pos2 = p2.getPosition();
            var pos3 = p3.getPosition();
            container.canvas.draw(function (ctx) {
              if ((0, Utils_1.getDistance)(pos1, pos2) > container.retina.linksDistance || (0, Utils_1.getDistance)(pos3, pos2) > container.retina.linksDistance || (0, Utils_1.getDistance)(pos3, pos1) > container.retina.linksDistance) {
                return;
              }

              var colorTriangle = (0, Utils_1.colorToRgb)(triangleOptions.color);

              if (!colorTriangle) {
                var linksOptions = p1.options.links;
                var linkColor = linksOptions.id !== undefined ? container.particles.linksColors.get(linksOptions.id) : container.particles.linksColor;
                colorTriangle = (0, Utils_1.getLinkColor)(p1, p2, linkColor);
              }

              if (!colorTriangle) {
                return;
              }

              (0, Utils_1.drawLinkTriangle)(ctx, pos1, pos2, pos3, options.backgroundMask.enable, options.backgroundMask.composite, colorTriangle, opacityTriangle);
            });
          }
        }, {
          key: "drawLinkLine",
          value: function drawLinkLine(p1, link) {
            var container = this.container;
            var options = container.actualOptions;
            var p2 = link.destination;
            var opacity = link.opacity;
            var pos1 = p1.getPosition();
            var pos2 = p2.getPosition();
            container.canvas.draw(function (ctx) {
              var _a, _b;

              var colorLine;
              var twinkle = p1.options.twinkle.lines;

              if (twinkle.enable) {
                var twinkleFreq = twinkle.frequency;
                var twinkleRgb = (0, Utils_1.colorToRgb)(twinkle.color);
                var twinkling = Math.random() < twinkleFreq;

                if (twinkling && twinkleRgb !== undefined) {
                  colorLine = twinkleRgb;
                  opacity = twinkle.opacity;
                }
              }

              if (!colorLine) {
                var linksOptions = p1.options.links;
                var linkColor = linksOptions.id !== undefined ? container.particles.linksColors.get(linksOptions.id) : container.particles.linksColor;
                colorLine = (0, Utils_1.getLinkColor)(p1, p2, linkColor);
              }

              if (!colorLine) {
                return;
              }

              var width = (_a = p1.retina.linksWidth) !== null && _a !== void 0 ? _a : container.retina.linksWidth;
              var maxDistance = (_b = p1.retina.linksDistance) !== null && _b !== void 0 ? _b : container.retina.linksDistance;
              (0, Utils_1.drawLinkLine)(ctx, width, pos1, pos2, maxDistance, container.canvas.size, p1.options.links.warp, options.backgroundMask.enable, options.backgroundMask.composite, colorLine, opacity, p1.options.links.shadow);
            });
          }
        }]);

        return LinkInstance;
      }();

      exports.LinkInstance = LinkInstance;
      /***/
    },

    /***/
    32124:
    /*!*************************************************************************!*\
      !*** ./node_modules/tsparticles/Interactions/Particles/Links/Linker.js ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Linker = void 0;

      var Utils_1 = __webpack_require__(
      /*! ../../../Utils */
      18942);

      var ParticlesInteractorBase_1 = __webpack_require__(
      /*! ../../../Core/ParticlesInteractorBase */
      77077);

      function getLinkDistance(pos1, pos2, optDistance, canvasSize, warp) {
        var distance = (0, Utils_1.getDistance)(pos1, pos2);

        if (!warp || distance <= optDistance) {
          return distance;
        }

        var pos2NE = {
          x: pos2.x - canvasSize.width,
          y: pos2.y
        };
        distance = (0, Utils_1.getDistance)(pos1, pos2NE);

        if (distance <= optDistance) {
          return distance;
        }

        var pos2SE = {
          x: pos2.x - canvasSize.width,
          y: pos2.y - canvasSize.height
        };
        distance = (0, Utils_1.getDistance)(pos1, pos2SE);

        if (distance <= optDistance) {
          return distance;
        }

        var pos2SW = {
          x: pos2.x,
          y: pos2.y - canvasSize.height
        };
        distance = (0, Utils_1.getDistance)(pos1, pos2SW);
        return distance;
      }

      var Linker = /*#__PURE__*/function (_ParticlesInteractorB3) {
        _inherits(Linker, _ParticlesInteractorB3);

        var _super12 = _createSuper(Linker);

        function Linker(container) {
          _classCallCheck(this, Linker);

          return _super12.call(this, container);
        }

        _createClass(Linker, [{
          key: "isEnabled",
          value: function isEnabled(particle) {
            return particle.options.links.enable;
          }
        }, {
          key: "reset",
          value: function reset() {}
        }, {
          key: "interact",
          value: function interact(p1) {
            var _a;

            p1.links = [];
            var pos1 = p1.getPosition();
            var container = this.container;
            var canvasSize = container.canvas.size;

            if (pos1.x < 0 || pos1.y < 0 || pos1.x > canvasSize.width || pos1.y > canvasSize.height) {
              return;
            }

            var linkOpt1 = p1.options.links;
            var optOpacity = linkOpt1.opacity;
            var optDistance = (_a = p1.retina.linksDistance) !== null && _a !== void 0 ? _a : container.retina.linksDistance;
            var warp = linkOpt1.warp;
            var range = warp ? new Utils_1.CircleWarp(pos1.x, pos1.y, optDistance, canvasSize) : new Utils_1.Circle(pos1.x, pos1.y, optDistance);
            var query = container.particles.quadTree.query(range);

            var _iterator53 = _createForOfIteratorHelper(query),
                _step53;

            try {
              for (_iterator53.s(); !(_step53 = _iterator53.n()).done;) {
                var p2 = _step53.value;
                var linkOpt2 = p2.options.links;

                if (p1 === p2 || !linkOpt2.enable || linkOpt1.id !== linkOpt2.id || p2.spawning || p2.destroyed || p1.links.map(function (t) {
                  return t.destination;
                }).indexOf(p2) !== -1 || p2.links.map(function (t) {
                  return t.destination;
                }).indexOf(p1) !== -1) {
                  continue;
                }

                var pos2 = p2.getPosition();

                if (pos2.x < 0 || pos2.y < 0 || pos2.x > canvasSize.width || pos2.y > canvasSize.height) {
                  continue;
                }

                var distance = getLinkDistance(pos1, pos2, optDistance, canvasSize, warp && linkOpt2.warp);

                if (distance > optDistance) {
                  return;
                }

                var opacityLine = (1 - distance / optDistance) * optOpacity;
                this.setColor(p1);
                p1.links.push({
                  destination: p2,
                  opacity: opacityLine
                });
              }
            } catch (err) {
              _iterator53.e(err);
            } finally {
              _iterator53.f();
            }
          }
        }, {
          key: "setColor",
          value: function setColor(p1) {
            var container = this.container;
            var linksOptions = p1.options.links;
            var linkColor = linksOptions.id === undefined ? container.particles.linksColor : container.particles.linksColors.get(linksOptions.id);

            if (!linkColor) {
              var optColor = linksOptions.color;
              linkColor = (0, Utils_1.getLinkRandomColor)(optColor, linksOptions.blink, linksOptions.consent);

              if (linksOptions.id === undefined) {
                container.particles.linksColor = linkColor;
              } else {
                container.particles.linksColors.set(linksOptions.id, linkColor);
              }
            }
          }
        }]);

        return Linker;
      }(ParticlesInteractorBase_1.ParticlesInteractorBase);

      exports.Linker = Linker;
      /***/
    },

    /***/
    17468:
    /*!************************************************************************!*\
      !*** ./node_modules/tsparticles/Interactions/Particles/Links/index.js ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.loadParticlesLinksInteraction = exports.loadInteraction = void 0;

      var Linker_1 = __webpack_require__(
      /*! ./Linker */
      32124);

      var plugin_1 = __webpack_require__(
      /*! ./plugin */
      19622);

      function loadInteraction(tsParticles) {
        tsParticles.addInteractor("particlesLinks", function (container) {
          return new Linker_1.Linker(container);
        });
      }

      exports.loadInteraction = loadInteraction;

      function loadParticlesLinksInteraction(tsParticles) {
        loadInteraction(tsParticles);
        (0, plugin_1.loadPlugin)(tsParticles);
      }

      exports.loadParticlesLinksInteraction = loadParticlesLinksInteraction;
      /***/
    },

    /***/
    19622:
    /*!*************************************************************************!*\
      !*** ./node_modules/tsparticles/Interactions/Particles/Links/plugin.js ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.loadPlugin = void 0;

      var LinkInstance_1 = __webpack_require__(
      /*! ./LinkInstance */
      5437);

      var Plugin = /*#__PURE__*/function () {
        function Plugin() {
          _classCallCheck(this, Plugin);

          this.id = "links";
        }

        _createClass(Plugin, [{
          key: "getPlugin",
          value: function getPlugin(container) {
            return new LinkInstance_1.LinkInstance(container);
          }
        }, {
          key: "needsPlugin",
          value: function needsPlugin() {
            return true;
          }
        }, {
          key: "loadOptions",
          value: function loadOptions() {}
        }]);

        return Plugin;
      }();

      function loadPlugin(tsParticles) {
        var plugin = new Plugin();
        tsParticles.addPlugin(plugin);
      }

      exports.loadPlugin = loadPlugin;
      /***/
    },

    /***/
    76498:
    /*!*********************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/AnimatableColor.js ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.AnimatableColor = void 0;

      var OptionsColor_1 = __webpack_require__(
      /*! ./OptionsColor */
      14963);

      var HslAnimation_1 = __webpack_require__(
      /*! ./HslAnimation */
      33187);

      var AnimatableColor = /*#__PURE__*/function (_OptionsColor_1$Optio) {
        _inherits(AnimatableColor, _OptionsColor_1$Optio);

        var _super13 = _createSuper(AnimatableColor);

        function AnimatableColor() {
          var _this23;

          _classCallCheck(this, AnimatableColor);

          _this23 = _super13.call(this);
          _this23.animation = new HslAnimation_1.HslAnimation();
          return _this23;
        }

        _createClass(AnimatableColor, [{
          key: "load",
          value: function load(data) {
            _get(_getPrototypeOf(AnimatableColor.prototype), "load", this).call(this, data);

            if (!data) {
              return;
            }

            var colorAnimation = data.animation;

            if (colorAnimation !== undefined) {
              if (colorAnimation.enable !== undefined) {
                this.animation.h.load(colorAnimation);
              } else {
                this.animation.load(data.animation);
              }
            }
          }
        }], [{
          key: "create",
          value: function create(source, data) {
            var color = new AnimatableColor();
            color.load(source);

            if (data !== undefined) {
              if (typeof data === "string" || data instanceof Array) {
                color.load({
                  value: data
                });
              } else {
                color.load(data);
              }
            }

            return color;
          }
        }]);

        return AnimatableColor;
      }(OptionsColor_1.OptionsColor);

      exports.AnimatableColor = AnimatableColor;
      /***/
    },

    /***/
    58600:
    /*!************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/AnimatableGradient.js ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.GradientColorOpacityAnimation = exports.GradientAngleAnimation = exports.AnimatableGradientColor = exports.GradientColorOpacity = exports.GradientAngle = exports.AnimatableGradient = void 0;

      var Enums_1 = __webpack_require__(
      /*! ../../Enums */
      39666);

      var AnimatableColor_1 = __webpack_require__(
      /*! ./AnimatableColor */
      76498);

      var Utils_1 = __webpack_require__(
      /*! ../../Utils */
      18942);

      var AnimatableGradient = /*#__PURE__*/function () {
        function AnimatableGradient() {
          _classCallCheck(this, AnimatableGradient);

          this.angle = new GradientAngle();
          this.colors = [];
          this.type = Enums_1.GradientType.random;
        }

        _createClass(AnimatableGradient, [{
          key: "load",
          value: function load(data) {
            if (!data) {
              return;
            }

            this.angle.load(data.angle);

            if (data.colors !== undefined) {
              this.colors = data.colors.map(function (s) {
                var tmp = new AnimatableGradientColor();
                tmp.load(s);
                return tmp;
              });
            }

            if (data.type !== undefined) {
              this.type = data.type;
            }
          }
        }]);

        return AnimatableGradient;
      }();

      exports.AnimatableGradient = AnimatableGradient;

      var GradientAngle = /*#__PURE__*/function () {
        function GradientAngle() {
          _classCallCheck(this, GradientAngle);

          this.value = 0;
          this.animation = new GradientAngleAnimation();
          this.direction = Enums_1.RotateDirection.clockwise;
        }

        _createClass(GradientAngle, [{
          key: "load",
          value: function load(data) {
            if (!data) {
              return;
            }

            this.animation.load(data.animation);

            if (data.value !== undefined) {
              this.value = data.value;
            }

            if (data.direction !== undefined) {
              this.direction = data.direction;
            }
          }
        }]);

        return GradientAngle;
      }();

      exports.GradientAngle = GradientAngle;

      var GradientColorOpacity = /*#__PURE__*/function () {
        function GradientColorOpacity() {
          _classCallCheck(this, GradientColorOpacity);

          this.value = 0;
          this.animation = new GradientColorOpacityAnimation();
        }

        _createClass(GradientColorOpacity, [{
          key: "load",
          value: function load(data) {
            if (!data) {
              return;
            }

            this.animation.load(data.animation);

            if (data.value !== undefined) {
              this.value = (0, Utils_1.setRangeValue)(data.value);
            }
          }
        }]);

        return GradientColorOpacity;
      }();

      exports.GradientColorOpacity = GradientColorOpacity;

      var AnimatableGradientColor = /*#__PURE__*/function () {
        function AnimatableGradientColor() {
          _classCallCheck(this, AnimatableGradientColor);

          this.stop = 0;
          this.value = new AnimatableColor_1.AnimatableColor();
        }

        _createClass(AnimatableGradientColor, [{
          key: "load",
          value: function load(data) {
            if (!data) {
              return;
            }

            if (data.stop !== undefined) {
              this.stop = data.stop;
            }

            this.value = AnimatableColor_1.AnimatableColor.create(this.value, data.value);

            if (data.opacity !== undefined) {
              this.opacity = new GradientColorOpacity();

              if (typeof data.opacity === "number") {
                this.opacity.value = data.opacity;
              } else {
                this.opacity.load(data.opacity);
              }
            }
          }
        }]);

        return AnimatableGradientColor;
      }();

      exports.AnimatableGradientColor = AnimatableGradientColor;

      var GradientAngleAnimation = /*#__PURE__*/function () {
        function GradientAngleAnimation() {
          _classCallCheck(this, GradientAngleAnimation);

          this.count = 0;
          this.enable = false;
          this.speed = 0;
          this.sync = false;
        }

        _createClass(GradientAngleAnimation, [{
          key: "load",
          value: function load(data) {
            if (!data) {
              return;
            }

            if (data.count !== undefined) {
              this.count = data.count;
            }

            if (data.enable !== undefined) {
              this.enable = data.enable;
            }

            if (data.speed !== undefined) {
              this.speed = data.speed;
            }

            if (data.sync !== undefined) {
              this.sync = data.sync;
            }
          }
        }]);

        return GradientAngleAnimation;
      }();

      exports.GradientAngleAnimation = GradientAngleAnimation;

      var GradientColorOpacityAnimation = /*#__PURE__*/function () {
        function GradientColorOpacityAnimation() {
          _classCallCheck(this, GradientColorOpacityAnimation);

          this.count = 0;
          this.enable = false;
          this.speed = 0;
          this.sync = false;
          this.startValue = Enums_1.StartValueType.random;
        }

        _createClass(GradientColorOpacityAnimation, [{
          key: "load",
          value: function load(data) {
            if (!data) {
              return;
            }

            if (data.count !== undefined) {
              this.count = data.count;
            }

            if (data.enable !== undefined) {
              this.enable = data.enable;
            }

            if (data.speed !== undefined) {
              this.speed = data.speed;
            }

            if (data.sync !== undefined) {
              this.sync = data.sync;
            }

            if (data.startValue !== undefined) {
              this.startValue = data.startValue;
            }
          }
        }]);

        return GradientColorOpacityAnimation;
      }();

      exports.GradientColorOpacityAnimation = GradientColorOpacityAnimation;
      /***/
    },

    /***/
    15128:
    /*!**********************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/AnimationOptions.js ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.AnimationOptions = void 0;

      var AnimationOptions = /*#__PURE__*/function () {
        function AnimationOptions() {
          _classCallCheck(this, AnimationOptions);

          this.count = 0;
          this.enable = false;
          this.speed = 1;
          this.sync = false;
        }

        _createClass(AnimationOptions, [{
          key: "load",
          value: function load(data) {
            if (!data) {
              return;
            }

            if (data.count !== undefined) {
              this.count = data.count;
            }

            if (data.enable !== undefined) {
              this.enable = data.enable;
            }

            if (data.speed !== undefined) {
              this.speed = data.speed;
            }

            if (data.sync !== undefined) {
              this.sync = data.sync;
            }
          }
        }]);

        return AnimationOptions;
      }();

      exports.AnimationOptions = AnimationOptions;
      /***/
    },

    /***/
    43678:
    /*!***********************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/BackgroundMask/BackgroundMask.js ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.BackgroundMask = void 0;

      var BackgroundMaskCover_1 = __webpack_require__(
      /*! ./BackgroundMaskCover */
      28660);

      var BackgroundMask = /*#__PURE__*/function () {
        function BackgroundMask() {
          _classCallCheck(this, BackgroundMask);

          this.composite = "destination-out";
          this.cover = new BackgroundMaskCover_1.BackgroundMaskCover();
          this.enable = false;
        }

        _createClass(BackgroundMask, [{
          key: "load",
          value: function load(data) {
            if (data === undefined) {
              return;
            }

            if (data.composite !== undefined) {
              this.composite = data.composite;
            }

            if (data.cover !== undefined) {
              var cover = data.cover;
              var color = typeof data.cover === "string" ? {
                color: data.cover
              } : data.cover;
              this.cover.load(cover.color !== undefined ? cover : {
                color: color
              });
            }

            if (data.enable !== undefined) {
              this.enable = data.enable;
            }
          }
        }]);

        return BackgroundMask;
      }();

      exports.BackgroundMask = BackgroundMask;
      /***/
    },

    /***/
    28660:
    /*!****************************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/BackgroundMask/BackgroundMaskCover.js ***!
      \****************************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.BackgroundMaskCover = void 0;

      var OptionsColor_1 = __webpack_require__(
      /*! ../OptionsColor */
      14963);

      var BackgroundMaskCover = /*#__PURE__*/function () {
        function BackgroundMaskCover() {
          _classCallCheck(this, BackgroundMaskCover);

          this.color = new OptionsColor_1.OptionsColor();
          this.opacity = 1;
        }

        _createClass(BackgroundMaskCover, [{
          key: "load",
          value: function load(data) {
            if (data === undefined) {
              return;
            }

            if (data.color !== undefined) {
              this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            }

            if (data.opacity !== undefined) {
              this.opacity = data.opacity;
            }
          }
        }]);

        return BackgroundMaskCover;
      }();

      exports.BackgroundMaskCover = BackgroundMaskCover;
      /***/
    },

    /***/
    92372:
    /*!***************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Background/Background.js ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Background = void 0;

      var OptionsColor_1 = __webpack_require__(
      /*! ../OptionsColor */
      14963);

      var Background = /*#__PURE__*/function () {
        function Background() {
          _classCallCheck(this, Background);

          this.color = new OptionsColor_1.OptionsColor();
          this.color.value = "";
          this.image = "";
          this.position = "";
          this.repeat = "";
          this.size = "";
          this.opacity = 1;
        }

        _createClass(Background, [{
          key: "load",
          value: function load(data) {
            if (data === undefined) {
              return;
            }

            if (data.color !== undefined) {
              this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            }

            if (data.image !== undefined) {
              this.image = data.image;
            }

            if (data.position !== undefined) {
              this.position = data.position;
            }

            if (data.repeat !== undefined) {
              this.repeat = data.repeat;
            }

            if (data.size !== undefined) {
              this.size = data.size;
            }

            if (data.opacity !== undefined) {
              this.opacity = data.opacity;
            }
          }
        }]);

        return Background;
      }();

      exports.Background = Background;
      /***/
    },

    /***/
    96752:
    /*!********************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/ColorAnimation.js ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ColorAnimation = void 0;

      var Utils_1 = __webpack_require__(
      /*! ../../Utils */
      18942);

      var ColorAnimation = /*#__PURE__*/function () {
        function ColorAnimation() {
          _classCallCheck(this, ColorAnimation);

          this.count = 0;
          this.enable = false;
          this.offset = 0;
          this.speed = 1;
          this.sync = true;
        }

        _createClass(ColorAnimation, [{
          key: "load",
          value: function load(data) {
            if (data === undefined) {
              return;
            }

            if (data.count !== undefined) {
              this.count = data.count;
            }

            if (data.enable !== undefined) {
              this.enable = data.enable;
            }

            if (data.offset !== undefined) {
              this.offset = (0, Utils_1.setRangeValue)(data.offset);
            }

            if (data.speed !== undefined) {
              this.speed = data.speed;
            }

            if (data.sync !== undefined) {
              this.sync = data.sync;
            }
          }
        }]);

        return ColorAnimation;
      }();

      exports.ColorAnimation = ColorAnimation;
      /***/
    },

    /***/
    70896:
    /*!***************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/FullScreen/FullScreen.js ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.FullScreen = void 0;

      var FullScreen = /*#__PURE__*/function () {
        function FullScreen() {
          _classCallCheck(this, FullScreen);

          this.enable = false;
          this.zIndex = -1;
        }

        _createClass(FullScreen, [{
          key: "load",
          value: function load(data) {
            if (!data) {
              return;
            }

            if (data.enable !== undefined) {
              this.enable = data.enable;
            }

            if (data.zIndex !== undefined) {
              this.zIndex = data.zIndex;
            }
          }
        }]);

        return FullScreen;
      }();

      exports.FullScreen = FullScreen;
      /***/
    },

    /***/
    33187:
    /*!******************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/HslAnimation.js ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.HslAnimation = void 0;

      var ColorAnimation_1 = __webpack_require__(
      /*! ./ColorAnimation */
      96752);

      var HslAnimation = /*#__PURE__*/function () {
        function HslAnimation() {
          _classCallCheck(this, HslAnimation);

          this.h = new ColorAnimation_1.ColorAnimation();
          this.s = new ColorAnimation_1.ColorAnimation();
          this.l = new ColorAnimation_1.ColorAnimation();
        }

        _createClass(HslAnimation, [{
          key: "load",
          value: function load(data) {
            if (!data) {
              return;
            }

            this.h.load(data.h);
            this.s.load(data.s);
            this.l.load(data.l);
          }
        }]);

        return HslAnimation;
      }();

      exports.HslAnimation = HslAnimation;
      /***/
    },

    /***/
    65805:
    /*!*************************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Interactivity/Events/ClickEvent.js ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ClickEvent = void 0;

      var ClickEvent = /*#__PURE__*/function () {
        function ClickEvent() {
          _classCallCheck(this, ClickEvent);

          this.enable = false;
          this.mode = [];
        }

        _createClass(ClickEvent, [{
          key: "load",
          value: function load(data) {
            if (data === undefined) {
              return;
            }

            if (data.enable !== undefined) {
              this.enable = data.enable;
            }

            if (data.mode !== undefined) {
              this.mode = data.mode;
            }
          }
        }]);

        return ClickEvent;
      }();

      exports.ClickEvent = ClickEvent;
      /***/
    },

    /***/
    66993:
    /*!***********************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Interactivity/Events/DivEvent.js ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DivEvent = void 0;

      var Enums_1 = __webpack_require__(
      /*! ../../../../Enums */
      39666);

      var DivEvent = /*#__PURE__*/function () {
        function DivEvent() {
          _classCallCheck(this, DivEvent);

          this.selectors = [];
          this.enable = false;
          this.mode = [];
          this.type = Enums_1.DivType.circle;
        }

        _createClass(DivEvent, [{
          key: "elementId",
          get: function get() {
            return this.ids;
          },
          set: function set(value) {
            this.ids = value;
          }
        }, {
          key: "el",
          get: function get() {
            return this.elementId;
          },
          set: function set(value) {
            this.elementId = value;
          }
        }, {
          key: "ids",
          get: function get() {
            return this.selectors instanceof Array ? this.selectors.map(function (t) {
              return t.replace("#", "");
            }) : this.selectors.replace("#", "");
          },
          set: function set(value) {
            this.selectors = value instanceof Array ? value.map(function (t) {
              return "#".concat(t);
            }) : "#".concat(value);
          }
        }, {
          key: "load",
          value: function load(data) {
            var _a, _b;

            if (data === undefined) {
              return;
            }

            var ids = (_b = (_a = data.ids) !== null && _a !== void 0 ? _a : data.elementId) !== null && _b !== void 0 ? _b : data.el;

            if (ids !== undefined) {
              this.ids = ids;
            }

            if (data.selectors !== undefined) {
              this.selectors = data.selectors;
            }

            if (data.enable !== undefined) {
              this.enable = data.enable;
            }

            if (data.mode !== undefined) {
              this.mode = data.mode;
            }

            if (data.type !== undefined) {
              this.type = data.type;
            }
          }
        }]);

        return DivEvent;
      }();

      exports.DivEvent = DivEvent;
      /***/
    },

    /***/
    96697:
    /*!*********************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Interactivity/Events/Events.js ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Events = void 0;

      var ClickEvent_1 = __webpack_require__(
      /*! ./ClickEvent */
      65805);

      var DivEvent_1 = __webpack_require__(
      /*! ./DivEvent */
      66993);

      var HoverEvent_1 = __webpack_require__(
      /*! ./HoverEvent */
      26785);

      var Events = /*#__PURE__*/function () {
        function Events() {
          _classCallCheck(this, Events);

          this.onClick = new ClickEvent_1.ClickEvent();
          this.onDiv = new DivEvent_1.DivEvent();
          this.onHover = new HoverEvent_1.HoverEvent();
          this.resize = true;
        }

        _createClass(Events, [{
          key: "onclick",
          get: function get() {
            return this.onClick;
          },
          set: function set(value) {
            this.onClick = value;
          }
        }, {
          key: "ondiv",
          get: function get() {
            return this.onDiv;
          },
          set: function set(value) {
            this.onDiv = value;
          }
        }, {
          key: "onhover",
          get: function get() {
            return this.onHover;
          },
          set: function set(value) {
            this.onHover = value;
          }
        }, {
          key: "load",
          value: function load(data) {
            var _a, _b, _c;

            if (data === undefined) {
              return;
            }

            this.onClick.load((_a = data.onClick) !== null && _a !== void 0 ? _a : data.onclick);
            var onDiv = (_b = data.onDiv) !== null && _b !== void 0 ? _b : data.ondiv;

            if (onDiv !== undefined) {
              if (onDiv instanceof Array) {
                this.onDiv = onDiv.map(function (div) {
                  var tmp = new DivEvent_1.DivEvent();
                  tmp.load(div);
                  return tmp;
                });
              } else {
                this.onDiv = new DivEvent_1.DivEvent();
                this.onDiv.load(onDiv);
              }
            }

            this.onHover.load((_c = data.onHover) !== null && _c !== void 0 ? _c : data.onhover);

            if (data.resize !== undefined) {
              this.resize = data.resize;
            }
          }
        }]);

        return Events;
      }();

      exports.Events = Events;
      /***/
    },

    /***/
    26785:
    /*!*************************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Interactivity/Events/HoverEvent.js ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.HoverEvent = void 0;

      var Parallax_1 = __webpack_require__(
      /*! ./Parallax */
      37072);

      var HoverEvent = /*#__PURE__*/function () {
        function HoverEvent() {
          _classCallCheck(this, HoverEvent);

          this.enable = false;
          this.mode = [];
          this.parallax = new Parallax_1.Parallax();
        }

        _createClass(HoverEvent, [{
          key: "load",
          value: function load(data) {
            if (data === undefined) {
              return;
            }

            if (data.enable !== undefined) {
              this.enable = data.enable;
            }

            if (data.mode !== undefined) {
              this.mode = data.mode;
            }

            this.parallax.load(data.parallax);
          }
        }]);

        return HoverEvent;
      }();

      exports.HoverEvent = HoverEvent;
      /***/
    },

    /***/
    37072:
    /*!***********************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Interactivity/Events/Parallax.js ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Parallax = void 0;

      var Parallax = /*#__PURE__*/function () {
        function Parallax() {
          _classCallCheck(this, Parallax);

          this.enable = false;
          this.force = 2;
          this.smooth = 10;
        }

        _createClass(Parallax, [{
          key: "load",
          value: function load(data) {
            if (data === undefined) {
              return;
            }

            if (data.enable !== undefined) {
              this.enable = data.enable;
            }

            if (data.force !== undefined) {
              this.force = data.force;
            }

            if (data.smooth !== undefined) {
              this.smooth = data.smooth;
            }
          }
        }]);

        return Parallax;
      }();

      exports.Parallax = Parallax;
      /***/
    },

    /***/
    47555:
    /*!*********************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Interactivity/Interactivity.js ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Interactivity = void 0;

      var Enums_1 = __webpack_require__(
      /*! ../../../Enums */
      39666);

      var Events_1 = __webpack_require__(
      /*! ./Events/Events */
      96697);

      var Modes_1 = __webpack_require__(
      /*! ./Modes/Modes */
      20090);

      var Interactivity = /*#__PURE__*/function () {
        function Interactivity() {
          _classCallCheck(this, Interactivity);

          this.detectsOn = Enums_1.InteractivityDetect.canvas;
          this.events = new Events_1.Events();
          this.modes = new Modes_1.Modes();
        }

        _createClass(Interactivity, [{
          key: "detect_on",
          get: function get() {
            return this.detectsOn;
          },
          set: function set(value) {
            this.detectsOn = value;
          }
        }, {
          key: "load",
          value: function load(data) {
            var _a, _b, _c;

            if (data === undefined) {
              return;
            }

            var detectsOn = (_a = data.detectsOn) !== null && _a !== void 0 ? _a : data.detect_on;

            if (detectsOn !== undefined) {
              this.detectsOn = detectsOn;
            }

            this.events.load(data.events);
            this.modes.load(data.modes);

            if (((_c = (_b = data.modes) === null || _b === void 0 ? void 0 : _b.slow) === null || _c === void 0 ? void 0 : _c.active) === true) {
              if (this.events.onHover.mode instanceof Array) {
                if (this.events.onHover.mode.indexOf(Enums_1.HoverMode.slow) < 0) {
                  this.events.onHover.mode.push(Enums_1.HoverMode.slow);
                }
              } else if (this.events.onHover.mode !== Enums_1.HoverMode.slow) {
                this.events.onHover.mode = [this.events.onHover.mode, Enums_1.HoverMode.slow];
              }
            }
          }
        }]);

        return Interactivity;
      }();

      exports.Interactivity = Interactivity;
      /***/
    },

    /***/
    84298:
    /*!*********************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Interactivity/Modes/Attract.js ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Attract = void 0;

      var Enums_1 = __webpack_require__(
      /*! ../../../../Enums */
      39666);

      var Attract = /*#__PURE__*/function () {
        function Attract() {
          _classCallCheck(this, Attract);

          this.distance = 200;
          this.duration = 0.4;
          this.easing = Enums_1.EasingType.easeOutQuad;
          this.factor = 1;
          this.maxSpeed = 50;
          this.speed = 1;
        }

        _createClass(Attract, [{
          key: "load",
          value: function load(data) {
            if (!data) {
              return;
            }

            if (data.distance !== undefined) {
              this.distance = data.distance;
            }

            if (data.duration !== undefined) {
              this.duration = data.duration;
            }

            if (data.easing !== undefined) {
              this.easing = data.easing;
            }

            if (data.factor !== undefined) {
              this.factor = data.factor;
            }

            if (data.maxSpeed !== undefined) {
              this.maxSpeed = data.maxSpeed;
            }

            if (data.speed !== undefined) {
              this.speed = data.speed;
            }
          }
        }]);

        return Attract;
      }();

      exports.Attract = Attract;
      /***/
    },

    /***/
    16335:
    /*!********************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Interactivity/Modes/Bounce.js ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Bounce = void 0;

      var Bounce = /*#__PURE__*/function () {
        function Bounce() {
          _classCallCheck(this, Bounce);

          this.distance = 200;
        }

        _createClass(Bounce, [{
          key: "load",
          value: function load(data) {
            if (!data) {
              return;
            }

            if (data.distance !== undefined) {
              this.distance = data.distance;
            }
          }
        }]);

        return Bounce;
      }();

      exports.Bounce = Bounce;
      /***/
    },

    /***/
    11166:
    /*!********************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Interactivity/Modes/Bubble.js ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Bubble = void 0;

      var BubbleDiv_1 = __webpack_require__(
      /*! ./BubbleDiv */
      88961);

      var BubbleBase_1 = __webpack_require__(
      /*! ./BubbleBase */
      14356);

      var Bubble = /*#__PURE__*/function (_BubbleBase_1$BubbleB) {
        _inherits(Bubble, _BubbleBase_1$BubbleB);

        var _super14 = _createSuper(Bubble);

        function Bubble() {
          _classCallCheck(this, Bubble);

          return _super14.apply(this, arguments);
        }

        _createClass(Bubble, [{
          key: "load",
          value: function load(data) {
            _get(_getPrototypeOf(Bubble.prototype), "load", this).call(this, data);

            if (!(data !== undefined && data.divs !== undefined)) {
              return;
            }

            if (data.divs instanceof Array) {
              this.divs = data.divs.map(function (s) {
                var tmp = new BubbleDiv_1.BubbleDiv();
                tmp.load(s);
                return tmp;
              });
            } else {
              if (this.divs instanceof Array || !this.divs) {
                this.divs = new BubbleDiv_1.BubbleDiv();
              }

              this.divs.load(data.divs);
            }
          }
        }]);

        return Bubble;
      }(BubbleBase_1.BubbleBase);

      exports.Bubble = Bubble;
      /***/
    },

    /***/
    14356:
    /*!************************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Interactivity/Modes/BubbleBase.js ***!
      \************************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.BubbleBase = void 0;

      var OptionsColor_1 = __webpack_require__(
      /*! ../../OptionsColor */
      14963);

      var BubbleBase = /*#__PURE__*/function () {
        function BubbleBase() {
          _classCallCheck(this, BubbleBase);

          this.distance = 200;
          this.duration = 0.4;
          this.mix = false;
        }

        _createClass(BubbleBase, [{
          key: "load",
          value: function load(data) {
            if (data === undefined) {
              return;
            }

            if (data.distance !== undefined) {
              this.distance = data.distance;
            }

            if (data.duration !== undefined) {
              this.duration = data.duration;
            }

            if (data.mix !== undefined) {
              this.mix = data.mix;
            }

            if (data.opacity !== undefined) {
              this.opacity = data.opacity;
            }

            if (data.color !== undefined) {
              if (data.color instanceof Array) {
                this.color = data.color.map(function (s) {
                  return OptionsColor_1.OptionsColor.create(undefined, s);
                });
              } else {
                if (this.color instanceof Array) {
                  this.color = new OptionsColor_1.OptionsColor();
                }

                this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
              }
            }

            if (data.size !== undefined) {
              this.size = data.size;
            }
          }
        }]);

        return BubbleBase;
      }();

      exports.BubbleBase = BubbleBase;
      /***/
    },

    /***/
    88961:
    /*!***********************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Interactivity/Modes/BubbleDiv.js ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.BubbleDiv = void 0;

      var BubbleBase_1 = __webpack_require__(
      /*! ./BubbleBase */
      14356);

      var BubbleDiv = /*#__PURE__*/function (_BubbleBase_1$BubbleB2) {
        _inherits(BubbleDiv, _BubbleBase_1$BubbleB2);

        var _super15 = _createSuper(BubbleDiv);

        function BubbleDiv() {
          var _this24;

          _classCallCheck(this, BubbleDiv);

          _this24 = _super15.call(this);
          _this24.selectors = [];
          return _this24;
        }

        _createClass(BubbleDiv, [{
          key: "ids",
          get: function get() {
            return this.selectors instanceof Array ? this.selectors.map(function (t) {
              return t.replace("#", "");
            }) : this.selectors.replace("#", "");
          },
          set: function set(value) {
            this.selectors = value instanceof Array ? value.map(function (t) {
              return "#".concat(t);
            }) : "#".concat(value);
          }
        }, {
          key: "load",
          value: function load(data) {
            _get(_getPrototypeOf(BubbleDiv.prototype), "load", this).call(this, data);

            if (data === undefined) {
              return;
            }

            if (data.ids !== undefined) {
              this.ids = data.ids;
            }

            if (data.selectors !== undefined) {
              this.selectors = data.selectors;
            }
          }
        }]);

        return BubbleDiv;
      }(BubbleBase_1.BubbleBase);

      exports.BubbleDiv = BubbleDiv;
      /***/
    },

    /***/
    43126:
    /*!*********************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Interactivity/Modes/Connect.js ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Connect = void 0;

      var ConnectLinks_1 = __webpack_require__(
      /*! ./ConnectLinks */
      19069);

      var Connect = /*#__PURE__*/function () {
        function Connect() {
          _classCallCheck(this, Connect);

          this.distance = 80;
          this.links = new ConnectLinks_1.ConnectLinks();
          this.radius = 60;
        }

        _createClass(Connect, [{
          key: "line_linked",
          get: function get() {
            return this.links;
          },
          set: function set(value) {
            this.links = value;
          }
        }, {
          key: "lineLinked",
          get: function get() {
            return this.links;
          },
          set: function set(value) {
            this.links = value;
          }
        }, {
          key: "load",
          value: function load(data) {
            var _a, _b;

            if (data === undefined) {
              return;
            }

            if (data.distance !== undefined) {
              this.distance = data.distance;
            }

            this.links.load((_b = (_a = data.links) !== null && _a !== void 0 ? _a : data.lineLinked) !== null && _b !== void 0 ? _b : data.line_linked);

            if (data.radius !== undefined) {
              this.radius = data.radius;
            }
          }
        }]);

        return Connect;
      }();

      exports.Connect = Connect;
      /***/
    },

    /***/
    19069:
    /*!**************************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Interactivity/Modes/ConnectLinks.js ***!
      \**************************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ConnectLinks = void 0;

      var ConnectLinks = /*#__PURE__*/function () {
        function ConnectLinks() {
          _classCallCheck(this, ConnectLinks);

          this.opacity = 0.5;
        }

        _createClass(ConnectLinks, [{
          key: "load",
          value: function load(data) {
            if (!(data !== undefined && data.opacity !== undefined)) {
              return;
            }

            this.opacity = data.opacity;
          }
        }]);

        return ConnectLinks;
      }();

      exports.ConnectLinks = ConnectLinks;
      /***/
    },

    /***/
    46173:
    /*!******************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Interactivity/Modes/Grab.js ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Grab = void 0;

      var GrabLinks_1 = __webpack_require__(
      /*! ./GrabLinks */
      86525);

      var Grab = /*#__PURE__*/function () {
        function Grab() {
          _classCallCheck(this, Grab);

          this.distance = 100;
          this.links = new GrabLinks_1.GrabLinks();
        }

        _createClass(Grab, [{
          key: "line_linked",
          get: function get() {
            return this.links;
          },
          set: function set(value) {
            this.links = value;
          }
        }, {
          key: "lineLinked",
          get: function get() {
            return this.links;
          },
          set: function set(value) {
            this.links = value;
          }
        }, {
          key: "load",
          value: function load(data) {
            var _a, _b;

            if (data === undefined) {
              return;
            }

            if (data.distance !== undefined) {
              this.distance = data.distance;
            }

            this.links.load((_b = (_a = data.links) !== null && _a !== void 0 ? _a : data.lineLinked) !== null && _b !== void 0 ? _b : data.line_linked);
          }
        }]);

        return Grab;
      }();

      exports.Grab = Grab;
      /***/
    },

    /***/
    86525:
    /*!***********************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Interactivity/Modes/GrabLinks.js ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.GrabLinks = void 0;

      var OptionsColor_1 = __webpack_require__(
      /*! ../../OptionsColor */
      14963);

      var GrabLinks = /*#__PURE__*/function () {
        function GrabLinks() {
          _classCallCheck(this, GrabLinks);

          this.blink = false;
          this.consent = false;
          this.opacity = 1;
        }

        _createClass(GrabLinks, [{
          key: "load",
          value: function load(data) {
            if (data === undefined) {
              return;
            }

            if (data.blink !== undefined) {
              this.blink = data.blink;
            }

            if (data.color !== undefined) {
              this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            }

            if (data.consent !== undefined) {
              this.consent = data.consent;
            }

            if (data.opacity !== undefined) {
              this.opacity = data.opacity;
            }
          }
        }]);

        return GrabLinks;
      }();

      exports.GrabLinks = GrabLinks;
      /***/
    },

    /***/
    47988:
    /*!*******************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Interactivity/Modes/Light.js ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Light = void 0;

      var LightArea_1 = __webpack_require__(
      /*! ./LightArea */
      88298);

      var LightShadow_1 = __webpack_require__(
      /*! ./LightShadow */
      24215);

      var Light = /*#__PURE__*/function () {
        function Light() {
          _classCallCheck(this, Light);

          this.area = new LightArea_1.LightArea();
          this.shadow = new LightShadow_1.LightShadow();
        }

        _createClass(Light, [{
          key: "load",
          value: function load(data) {
            if (data === undefined) {
              return;
            }

            this.area.load(data.area);
            this.shadow.load(data.shadow);
          }
        }]);

        return Light;
      }();

      exports.Light = Light;
      /***/
    },

    /***/
    88298:
    /*!***********************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Interactivity/Modes/LightArea.js ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LightArea = void 0;

      var LightGradient_1 = __webpack_require__(
      /*! ./LightGradient */
      92886);

      var LightArea = /*#__PURE__*/function () {
        function LightArea() {
          _classCallCheck(this, LightArea);

          this.gradient = new LightGradient_1.LightGradient();
          this.radius = 1000;
        }

        _createClass(LightArea, [{
          key: "load",
          value: function load(data) {
            if (data === undefined) {
              return;
            }

            this.gradient.load(data.gradient);

            if (data.radius !== undefined) {
              this.radius = data.radius;
            }
          }
        }]);

        return LightArea;
      }();

      exports.LightArea = LightArea;
      /***/
    },

    /***/
    92886:
    /*!***************************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Interactivity/Modes/LightGradient.js ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LightGradient = void 0;

      var OptionsColor_1 = __webpack_require__(
      /*! ../../OptionsColor */
      14963);

      var LightGradient = /*#__PURE__*/function () {
        function LightGradient() {
          _classCallCheck(this, LightGradient);

          this.start = new OptionsColor_1.OptionsColor();
          this.stop = new OptionsColor_1.OptionsColor();
          this.start.value = "#ffffff";
          this.stop.value = "#000000";
        }

        _createClass(LightGradient, [{
          key: "load",
          value: function load(data) {
            if (data === undefined) {
              return;
            }

            this.start = OptionsColor_1.OptionsColor.create(this.start, data.start);
            this.stop = OptionsColor_1.OptionsColor.create(this.stop, data.stop);
          }
        }]);

        return LightGradient;
      }();

      exports.LightGradient = LightGradient;
      /***/
    },

    /***/
    24215:
    /*!*************************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Interactivity/Modes/LightShadow.js ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LightShadow = void 0;

      var OptionsColor_1 = __webpack_require__(
      /*! ../../OptionsColor */
      14963);

      var LightShadow = /*#__PURE__*/function () {
        function LightShadow() {
          _classCallCheck(this, LightShadow);

          this.color = new OptionsColor_1.OptionsColor();
          this.color.value = "#000000";
          this.length = 2000;
        }

        _createClass(LightShadow, [{
          key: "load",
          value: function load(data) {
            if (data === undefined) {
              return;
            }

            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);

            if (data.length !== undefined) {
              this.length = data.length;
            }
          }
        }]);

        return LightShadow;
      }();

      exports.LightShadow = LightShadow;
      /***/
    },

    /***/
    20090:
    /*!*******************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Interactivity/Modes/Modes.js ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Modes = void 0;

      var Bubble_1 = __webpack_require__(
      /*! ./Bubble */
      11166);

      var Connect_1 = __webpack_require__(
      /*! ./Connect */
      43126);

      var Grab_1 = __webpack_require__(
      /*! ./Grab */
      46173);

      var Remove_1 = __webpack_require__(
      /*! ./Remove */
      19902);

      var Push_1 = __webpack_require__(
      /*! ./Push */
      37325);

      var Repulse_1 = __webpack_require__(
      /*! ./Repulse */
      19519);

      var Slow_1 = __webpack_require__(
      /*! ./Slow */
      5754);

      var Trail_1 = __webpack_require__(
      /*! ./Trail */
      80931);

      var Attract_1 = __webpack_require__(
      /*! ./Attract */
      84298);

      var Light_1 = __webpack_require__(
      /*! ./Light */
      47988);

      var Bounce_1 = __webpack_require__(
      /*! ./Bounce */
      16335);

      var Modes = /*#__PURE__*/function () {
        function Modes() {
          _classCallCheck(this, Modes);

          this.attract = new Attract_1.Attract();
          this.bounce = new Bounce_1.Bounce();
          this.bubble = new Bubble_1.Bubble();
          this.connect = new Connect_1.Connect();
          this.grab = new Grab_1.Grab();
          this.light = new Light_1.Light();
          this.push = new Push_1.Push();
          this.remove = new Remove_1.Remove();
          this.repulse = new Repulse_1.Repulse();
          this.slow = new Slow_1.Slow();
          this.trail = new Trail_1.Trail();
        }

        _createClass(Modes, [{
          key: "load",
          value: function load(data) {
            if (data === undefined) {
              return;
            }

            this.attract.load(data.attract);
            this.bubble.load(data.bubble);
            this.connect.load(data.connect);
            this.grab.load(data.grab);
            this.light.load(data.light);
            this.push.load(data.push);
            this.remove.load(data.remove);
            this.repulse.load(data.repulse);
            this.slow.load(data.slow);
            this.trail.load(data.trail);
          }
        }]);

        return Modes;
      }();

      exports.Modes = Modes;
      /***/
    },

    /***/
    37325:
    /*!******************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Interactivity/Modes/Push.js ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Push = void 0;

      var Push = /*#__PURE__*/function () {
        function Push() {
          _classCallCheck(this, Push);

          this["default"] = true;
          this.groups = [];
          this.quantity = 4;
        }

        _createClass(Push, [{
          key: "particles_nb",
          get: function get() {
            return this.quantity;
          },
          set: function set(value) {
            this.quantity = value;
          }
        }, {
          key: "load",
          value: function load(data) {
            var _a;

            if (data === undefined) {
              return;
            }

            if (data["default"] !== undefined) {
              this["default"] = data["default"];
            }

            if (data.groups !== undefined) {
              this.groups = data.groups.map(function (t) {
                return t;
              });
            }

            if (!this.groups.length) {
              this["default"] = true;
            }

            var quantity = (_a = data.quantity) !== null && _a !== void 0 ? _a : data.particles_nb;

            if (quantity !== undefined) {
              this.quantity = quantity;
            }
          }
        }]);

        return Push;
      }();

      exports.Push = Push;
      /***/
    },

    /***/
    19902:
    /*!********************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Interactivity/Modes/Remove.js ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Remove = void 0;

      var Remove = /*#__PURE__*/function () {
        function Remove() {
          _classCallCheck(this, Remove);

          this.quantity = 2;
        }

        _createClass(Remove, [{
          key: "particles_nb",
          get: function get() {
            return this.quantity;
          },
          set: function set(value) {
            this.quantity = value;
          }
        }, {
          key: "load",
          value: function load(data) {
            var _a;

            if (data === undefined) {
              return;
            }

            var quantity = (_a = data.quantity) !== null && _a !== void 0 ? _a : data.particles_nb;

            if (quantity !== undefined) {
              this.quantity = quantity;
            }
          }
        }]);

        return Remove;
      }();

      exports.Remove = Remove;
      /***/
    },

    /***/
    19519:
    /*!*********************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Interactivity/Modes/Repulse.js ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Repulse = void 0;

      var RepulseDiv_1 = __webpack_require__(
      /*! ./RepulseDiv */
      39010);

      var RepulseBase_1 = __webpack_require__(
      /*! ./RepulseBase */
      10981);

      var Repulse = /*#__PURE__*/function (_RepulseBase_1$Repuls) {
        _inherits(Repulse, _RepulseBase_1$Repuls);

        var _super16 = _createSuper(Repulse);

        function Repulse() {
          _classCallCheck(this, Repulse);

          return _super16.apply(this, arguments);
        }

        _createClass(Repulse, [{
          key: "load",
          value: function load(data) {
            _get(_getPrototypeOf(Repulse.prototype), "load", this).call(this, data);

            if ((data === null || data === void 0 ? void 0 : data.divs) === undefined) {
              return;
            }

            if (data.divs instanceof Array) {
              this.divs = data.divs.map(function (s) {
                var tmp = new RepulseDiv_1.RepulseDiv();
                tmp.load(s);
                return tmp;
              });
            } else {
              if (this.divs instanceof Array || !this.divs) {
                this.divs = new RepulseDiv_1.RepulseDiv();
              }

              this.divs.load(data.divs);
            }
          }
        }]);

        return Repulse;
      }(RepulseBase_1.RepulseBase);

      exports.Repulse = Repulse;
      /***/
    },

    /***/
    10981:
    /*!*************************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Interactivity/Modes/RepulseBase.js ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.RepulseBase = void 0;

      var Enums_1 = __webpack_require__(
      /*! ../../../../Enums */
      39666);

      var RepulseBase = /*#__PURE__*/function () {
        function RepulseBase() {
          _classCallCheck(this, RepulseBase);

          this.distance = 200;
          this.duration = 0.4;
          this.factor = 100;
          this.speed = 1;
          this.maxSpeed = 50;
          this.easing = Enums_1.EasingType.easeOutQuad;
        }

        _createClass(RepulseBase, [{
          key: "load",
          value: function load(data) {
            if (!data) {
              return;
            }

            if (data.distance !== undefined) {
              this.distance = data.distance;
            }

            if (data.duration !== undefined) {
              this.duration = data.duration;
            }

            if (data.easing !== undefined) {
              this.easing = data.easing;
            }

            if (data.factor !== undefined) {
              this.factor = data.factor;
            }

            if (data.speed !== undefined) {
              this.speed = data.speed;
            }

            if (data.maxSpeed !== undefined) {
              this.maxSpeed = data.maxSpeed;
            }
          }
        }]);

        return RepulseBase;
      }();

      exports.RepulseBase = RepulseBase;
      /***/
    },

    /***/
    39010:
    /*!************************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Interactivity/Modes/RepulseDiv.js ***!
      \************************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.RepulseDiv = void 0;

      var RepulseBase_1 = __webpack_require__(
      /*! ./RepulseBase */
      10981);

      var RepulseDiv = /*#__PURE__*/function (_RepulseBase_1$Repuls2) {
        _inherits(RepulseDiv, _RepulseBase_1$Repuls2);

        var _super17 = _createSuper(RepulseDiv);

        function RepulseDiv() {
          var _this25;

          _classCallCheck(this, RepulseDiv);

          _this25 = _super17.call(this);
          _this25.selectors = [];
          return _this25;
        }

        _createClass(RepulseDiv, [{
          key: "ids",
          get: function get() {
            if (this.selectors instanceof Array) {
              return this.selectors.map(function (t) {
                return t.replace("#", "");
              });
            } else {
              return this.selectors.replace("#", "");
            }
          },
          set: function set(value) {
            if (value instanceof Array) {
              this.selectors = value.map(function () {
                return "#".concat(value);
              });
            } else {
              this.selectors = "#".concat(value);
            }
          }
        }, {
          key: "load",
          value: function load(data) {
            _get(_getPrototypeOf(RepulseDiv.prototype), "load", this).call(this, data);

            if (data === undefined) {
              return;
            }

            if (data.ids !== undefined) {
              this.ids = data.ids;
            }

            if (data.selectors !== undefined) {
              this.selectors = data.selectors;
            }
          }
        }]);

        return RepulseDiv;
      }(RepulseBase_1.RepulseBase);

      exports.RepulseDiv = RepulseDiv;
      /***/
    },

    /***/
    5754:
    /*!******************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Interactivity/Modes/Slow.js ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Slow = void 0;

      var Slow = /*#__PURE__*/function () {
        function Slow() {
          _classCallCheck(this, Slow);

          this.factor = 3;
          this.radius = 200;
        }

        _createClass(Slow, [{
          key: "active",
          get: function get() {
            return false;
          },
          set: function set(_value) {}
        }, {
          key: "load",
          value: function load(data) {
            if (data === undefined) {
              return;
            }

            if (data.factor !== undefined) {
              this.factor = data.factor;
            }

            if (data.radius !== undefined) {
              this.radius = data.radius;
            }
          }
        }]);

        return Slow;
      }();

      exports.Slow = Slow;
      /***/
    },

    /***/
    80931:
    /*!*******************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Interactivity/Modes/Trail.js ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Trail = void 0;

      var Utils_1 = __webpack_require__(
      /*! ../../../../Utils */
      18942);

      var Trail = /*#__PURE__*/function () {
        function Trail() {
          _classCallCheck(this, Trail);

          this.delay = 1;
          this.pauseOnStop = false;
          this.quantity = 1;
        }

        _createClass(Trail, [{
          key: "load",
          value: function load(data) {
            if (data === undefined) {
              return;
            }

            if (data.delay !== undefined) {
              this.delay = data.delay;
            }

            if (data.quantity !== undefined) {
              this.quantity = data.quantity;
            }

            if (data.particles !== undefined) {
              this.particles = (0, Utils_1.deepExtend)({}, data.particles);
            }

            if (data.pauseOnStop !== undefined) {
              this.pauseOnStop = data.pauseOnStop;
            }
          }
        }]);

        return Trail;
      }();

      exports.Trail = Trail;
      /***/
    },

    /***/
    8706:
    /*!********************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/ManualParticle.js ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ManualParticle = void 0;

      var Utils_1 = __webpack_require__(
      /*! ../../Utils */
      18942);

      var ManualParticle = /*#__PURE__*/function () {
        function ManualParticle() {
          _classCallCheck(this, ManualParticle);
        }

        _createClass(ManualParticle, [{
          key: "load",
          value: function load(data) {
            var _a, _b;

            if (!data) {
              return;
            }

            if (data.position !== undefined) {
              this.position = {
                x: (_a = data.position.x) !== null && _a !== void 0 ? _a : 50,
                y: (_b = data.position.y) !== null && _b !== void 0 ? _b : 50
              };
            }

            if (data.options !== undefined) {
              this.options = (0, Utils_1.deepExtend)({}, data.options);
            }
          }
        }]);

        return ManualParticle;
      }();

      exports.ManualParticle = ManualParticle;
      /***/
    },

    /***/
    90226:
    /*!*******************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Motion/Motion.js ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Motion = void 0;

      var MotionReduce_1 = __webpack_require__(
      /*! ./MotionReduce */
      74138);

      var Motion = /*#__PURE__*/function () {
        function Motion() {
          _classCallCheck(this, Motion);

          this.disable = false;
          this.reduce = new MotionReduce_1.MotionReduce();
        }

        _createClass(Motion, [{
          key: "load",
          value: function load(data) {
            if (!data) {
              return;
            }

            if (data.disable !== undefined) {
              this.disable = data.disable;
            }

            this.reduce.load(data.reduce);
          }
        }]);

        return Motion;
      }();

      exports.Motion = Motion;
      /***/
    },

    /***/
    74138:
    /*!*************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Motion/MotionReduce.js ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.MotionReduce = void 0;

      var MotionReduce = /*#__PURE__*/function () {
        function MotionReduce() {
          _classCallCheck(this, MotionReduce);

          this.factor = 4;
          this.value = true;
        }

        _createClass(MotionReduce, [{
          key: "load",
          value: function load(data) {
            if (!data) {
              return;
            }

            if (data.factor !== undefined) {
              this.factor = data.factor;
            }

            if (data.value !== undefined) {
              this.value = data.value;
            }
          }
        }]);

        return MotionReduce;
      }();

      exports.MotionReduce = MotionReduce;
      /***/
    },

    /***/
    30093:
    /*!*************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Options.js ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      var __classPrivateFieldGet = this && this.__classPrivateFieldGet || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      };

      var _Options_instances, _Options_findDefaultTheme;

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Options = void 0;

      var Interactivity_1 = __webpack_require__(
      /*! ./Interactivity/Interactivity */
      47555);

      var ParticlesOptions_1 = __webpack_require__(
      /*! ./Particles/ParticlesOptions */
      13599);

      var BackgroundMask_1 = __webpack_require__(
      /*! ./BackgroundMask/BackgroundMask */
      43678);

      var Background_1 = __webpack_require__(
      /*! ./Background/Background */
      92372);

      var Utils_1 = __webpack_require__(
      /*! ../../Utils */
      18942);

      var Theme_1 = __webpack_require__(
      /*! ./Theme/Theme */
      79543);

      var Enums_1 = __webpack_require__(
      /*! ../../Enums */
      39666);

      var FullScreen_1 = __webpack_require__(
      /*! ./FullScreen/FullScreen */
      70896);

      var Motion_1 = __webpack_require__(
      /*! ./Motion/Motion */
      90226);

      var ManualParticle_1 = __webpack_require__(
      /*! ./ManualParticle */
      8706);

      var Responsive_1 = __webpack_require__(
      /*! ./Responsive */
      92670);

      var Options = /*#__PURE__*/function () {
        function Options() {
          _classCallCheck(this, Options);

          _Options_instances.add(this);

          this.autoPlay = true;
          this.background = new Background_1.Background();
          this.backgroundMask = new BackgroundMask_1.BackgroundMask();
          this.fullScreen = new FullScreen_1.FullScreen();
          this.detectRetina = true;
          this.duration = 0;
          this.fpsLimit = 60;
          this.interactivity = new Interactivity_1.Interactivity();
          this.manualParticles = [];
          this.motion = new Motion_1.Motion();
          this.particles = new ParticlesOptions_1.ParticlesOptions();
          this.pauseOnBlur = true;
          this.pauseOnOutsideViewport = true;
          this.responsive = [];
          this.themes = [];
          this.zLayers = 100;
        }

        _createClass(Options, [{
          key: "fps_limit",
          get: function get() {
            return this.fpsLimit;
          },
          set: function set(value) {
            this.fpsLimit = value;
          }
        }, {
          key: "retina_detect",
          get: function get() {
            return this.detectRetina;
          },
          set: function set(value) {
            this.detectRetina = value;
          }
        }, {
          key: "backgroundMode",
          get: function get() {
            return this.fullScreen;
          },
          set: function set(value) {
            this.fullScreen.load(value);
          }
        }, {
          key: "load",
          value: function load(data) {
            var _a, _b, _c, _d, _e;

            if (data === undefined) {
              return;
            }

            if (data.preset !== undefined) {
              if (data.preset instanceof Array) {
                var _iterator54 = _createForOfIteratorHelper(data.preset),
                    _step54;

                try {
                  for (_iterator54.s(); !(_step54 = _iterator54.n()).done;) {
                    var preset = _step54.value;
                    this.importPreset(preset);
                  }
                } catch (err) {
                  _iterator54.e(err);
                } finally {
                  _iterator54.f();
                }
              } else {
                this.importPreset(data.preset);
              }
            }

            if (data.autoPlay !== undefined) {
              this.autoPlay = data.autoPlay;
            }

            var detectRetina = (_a = data.detectRetina) !== null && _a !== void 0 ? _a : data.retina_detect;

            if (detectRetina !== undefined) {
              this.detectRetina = detectRetina;
            }

            if (data.duration !== undefined) {
              this.duration = data.duration;
            }

            var fpsLimit = (_b = data.fpsLimit) !== null && _b !== void 0 ? _b : data.fps_limit;

            if (fpsLimit !== undefined) {
              this.fpsLimit = fpsLimit;
            }

            if (data.pauseOnBlur !== undefined) {
              this.pauseOnBlur = data.pauseOnBlur;
            }

            if (data.pauseOnOutsideViewport !== undefined) {
              this.pauseOnOutsideViewport = data.pauseOnOutsideViewport;
            }

            if (data.zLayers !== undefined) {
              this.zLayers = data.zLayers;
            }

            this.background.load(data.background);
            var fullScreen = (_c = data.fullScreen) !== null && _c !== void 0 ? _c : data.backgroundMode;

            if (typeof fullScreen === "boolean") {
              this.fullScreen.enable = fullScreen;
            } else {
              this.fullScreen.load(fullScreen);
            }

            this.backgroundMask.load(data.backgroundMask);
            this.interactivity.load(data.interactivity);

            if (data.manualParticles !== undefined) {
              this.manualParticles = data.manualParticles.map(function (t) {
                var tmp = new ManualParticle_1.ManualParticle();
                tmp.load(t);
                return tmp;
              });
            }

            this.motion.load(data.motion);
            this.particles.load(data.particles);
            Utils_1.Plugins.loadOptions(this, data);

            if (data.responsive !== undefined) {
              var _iterator55 = _createForOfIteratorHelper(data.responsive),
                  _step55;

              try {
                for (_iterator55.s(); !(_step55 = _iterator55.n()).done;) {
                  var responsive = _step55.value;
                  var optResponsive = new Responsive_1.Responsive();
                  optResponsive.load(responsive);
                  this.responsive.push(optResponsive);
                }
              } catch (err) {
                _iterator55.e(err);
              } finally {
                _iterator55.f();
              }
            }

            this.responsive.sort(function (a, b) {
              return a.maxWidth - b.maxWidth;
            });

            if (data.themes !== undefined) {
              var _iterator56 = _createForOfIteratorHelper(data.themes),
                  _step56;

              try {
                for (_iterator56.s(); !(_step56 = _iterator56.n()).done;) {
                  var theme = _step56.value;
                  var optTheme = new Theme_1.Theme();
                  optTheme.load(theme);
                  this.themes.push(optTheme);
                }
              } catch (err) {
                _iterator56.e(err);
              } finally {
                _iterator56.f();
              }
            }

            this.defaultDarkTheme = (_d = __classPrivateFieldGet(this, _Options_instances, "m", _Options_findDefaultTheme).call(this, Enums_1.ThemeMode.dark)) === null || _d === void 0 ? void 0 : _d.name;
            this.defaultLightTheme = (_e = __classPrivateFieldGet(this, _Options_instances, "m", _Options_findDefaultTheme).call(this, Enums_1.ThemeMode.light)) === null || _e === void 0 ? void 0 : _e.name;
          }
        }, {
          key: "setTheme",
          value: function setTheme(name) {
            if (name) {
              var chosenTheme = this.themes.find(function (theme) {
                return theme.name === name;
              });

              if (chosenTheme) {
                this.load(chosenTheme.options);
              }
            } else {
              var mediaMatch = typeof matchMedia !== "undefined" && matchMedia("(prefers-color-scheme: dark)"),
                  clientDarkMode = mediaMatch && mediaMatch.matches,
                  defaultTheme = __classPrivateFieldGet(this, _Options_instances, "m", _Options_findDefaultTheme).call(this, clientDarkMode ? Enums_1.ThemeMode.dark : Enums_1.ThemeMode.light);

              if (defaultTheme) {
                this.load(defaultTheme.options);
              }
            }
          }
        }, {
          key: "setResponsive",
          value: function setResponsive(width, pxRatio, defaultOptions) {
            var _a;

            this.load(defaultOptions);
            this.load((_a = this.responsive.find(function (t) {
              return t.maxWidth * pxRatio > width;
            })) === null || _a === void 0 ? void 0 : _a.options);
          }
        }, {
          key: "importPreset",
          value: function importPreset(preset) {
            this.load(Utils_1.Plugins.getPreset(preset));
          }
        }]);

        return Options;
      }();

      exports.Options = Options;
      _Options_instances = new WeakSet(), _Options_findDefaultTheme = function _Options_findDefaultTheme(mode) {
        var _a;

        return (_a = this.themes.find(function (theme) {
          return theme["default"].value && theme["default"].mode === mode;
        })) !== null && _a !== void 0 ? _a : this.themes.find(function (theme) {
          return theme["default"].value && theme["default"].mode === Enums_1.ThemeMode.any;
        });
      };
      /***/
    },

    /***/
    14963:
    /*!******************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/OptionsColor.js ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.OptionsColor = void 0;

      var OptionsColor = /*#__PURE__*/function () {
        function OptionsColor() {
          _classCallCheck(this, OptionsColor);

          this.value = "#fff";
        }

        _createClass(OptionsColor, [{
          key: "load",
          value: function load(data) {
            if ((data === null || data === void 0 ? void 0 : data.value) === undefined) {
              return;
            }

            this.value = data.value;
          }
        }], [{
          key: "create",
          value: function create(source, data) {
            var color = new OptionsColor();
            color.load(source);

            if (data !== undefined) {
              if (typeof data === "string" || data instanceof Array) {
                color.load({
                  value: data
                });
              } else {
                color.load(data);
              }
            }

            return color;
          }
        }]);

        return OptionsColor;
      }();

      exports.OptionsColor = OptionsColor;
      /***/
    },

    /***/
    25610:
    /*!*****************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/Bounce/Bounce.js ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Bounce = void 0;

      var BounceFactor_1 = __webpack_require__(
      /*! ./BounceFactor */
      48180);

      var Bounce = /*#__PURE__*/function () {
        function Bounce() {
          _classCallCheck(this, Bounce);

          this.horizontal = new BounceFactor_1.BounceFactor();
          this.vertical = new BounceFactor_1.BounceFactor();
        }

        _createClass(Bounce, [{
          key: "load",
          value: function load(data) {
            if (!data) {
              return;
            }

            this.horizontal.load(data.horizontal);
            this.vertical.load(data.vertical);
          }
        }]);

        return Bounce;
      }();

      exports.Bounce = Bounce;
      /***/
    },

    /***/
    48180:
    /*!***********************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/Bounce/BounceFactor.js ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.BounceFactor = void 0;

      var ValueWithRandom_1 = __webpack_require__(
      /*! ../../ValueWithRandom */
      34794);

      var BounceFactor = /*#__PURE__*/function (_ValueWithRandom_1$Va) {
        _inherits(BounceFactor, _ValueWithRandom_1$Va);

        var _super18 = _createSuper(BounceFactor);

        function BounceFactor() {
          var _this26;

          _classCallCheck(this, BounceFactor);

          _this26 = _super18.call(this);
          _this26.random.minimumValue = 0.1;
          _this26.value = 1;
          return _this26;
        }

        return BounceFactor;
      }(ValueWithRandom_1.ValueWithRandom);

      exports.BounceFactor = BounceFactor;
      /***/
    },

    /***/
    95321:
    /*!*************************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/Collisions/Collisions.js ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Collisions = void 0;

      var Enums_1 = __webpack_require__(
      /*! ../../../../Enums */
      39666);

      var Bounce_1 = __webpack_require__(
      /*! ../Bounce/Bounce */
      25610);

      var CollisionsOverlap_1 = __webpack_require__(
      /*! ./CollisionsOverlap */
      851);

      var Collisions = /*#__PURE__*/function () {
        function Collisions() {
          _classCallCheck(this, Collisions);

          this.bounce = new Bounce_1.Bounce();
          this.enable = false;
          this.mode = Enums_1.CollisionMode.bounce;
          this.overlap = new CollisionsOverlap_1.CollisionsOverlap();
        }

        _createClass(Collisions, [{
          key: "load",
          value: function load(data) {
            if (data === undefined) {
              return;
            }

            this.bounce.load(data.bounce);

            if (data.enable !== undefined) {
              this.enable = data.enable;
            }

            if (data.mode !== undefined) {
              this.mode = data.mode;
            }

            this.overlap.load(data.overlap);
          }
        }]);

        return Collisions;
      }();

      exports.Collisions = Collisions;
      /***/
    },

    /***/
    851:
    /*!********************************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/Collisions/CollisionsOverlap.js ***!
      \********************************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CollisionsOverlap = void 0;

      var CollisionsOverlap = /*#__PURE__*/function () {
        function CollisionsOverlap() {
          _classCallCheck(this, CollisionsOverlap);

          this.enable = true;
          this.retries = 0;
        }

        _createClass(CollisionsOverlap, [{
          key: "load",
          value: function load(data) {
            if (!data) {
              return;
            }

            if (data.enable !== undefined) {
              this.enable = data.enable;
            }

            if (data.retries !== undefined) {
              this.retries = data.retries;
            }
          }
        }]);

        return CollisionsOverlap;
      }();

      exports.CollisionsOverlap = CollisionsOverlap;
      /***/
    },

    /***/
    18274:
    /*!*******************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/Destroy/Destroy.js ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Destroy = void 0;

      var Enums_1 = __webpack_require__(
      /*! ../../../../Enums */
      39666);

      var Split_1 = __webpack_require__(
      /*! ./Split */
      66184);

      var Destroy = /*#__PURE__*/function () {
        function Destroy() {
          _classCallCheck(this, Destroy);

          this.mode = Enums_1.DestroyMode.none;
          this.split = new Split_1.Split();
        }

        _createClass(Destroy, [{
          key: "load",
          value: function load(data) {
            if (!data) {
              return;
            }

            if (data.mode !== undefined) {
              this.mode = data.mode;
            }

            this.split.load(data.split);
          }
        }]);

        return Destroy;
      }();

      exports.Destroy = Destroy;
      /***/
    },

    /***/
    66184:
    /*!*****************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/Destroy/Split.js ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Split = void 0;

      var SplitFactor_1 = __webpack_require__(
      /*! ./SplitFactor */
      6285);

      var SplitRate_1 = __webpack_require__(
      /*! ./SplitRate */
      88343);

      var Utils_1 = __webpack_require__(
      /*! ../../../../Utils */
      18942);

      var Split = /*#__PURE__*/function () {
        function Split() {
          _classCallCheck(this, Split);

          this.count = 1;
          this.factor = new SplitFactor_1.SplitFactor();
          this.rate = new SplitRate_1.SplitRate();
          this.sizeOffset = true;
        }

        _createClass(Split, [{
          key: "load",
          value: function load(data) {
            if (!data) {
              return;
            }

            if (data.count !== undefined) {
              this.count = data.count;
            }

            this.factor.load(data.factor);
            this.rate.load(data.rate);

            if (data.particles !== undefined) {
              this.particles = (0, Utils_1.deepExtend)({}, data.particles);
            }

            if (data.sizeOffset !== undefined) {
              this.sizeOffset = data.sizeOffset;
            }
          }
        }]);

        return Split;
      }();

      exports.Split = Split;
      /***/
    },

    /***/
    6285:
    /*!***********************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/Destroy/SplitFactor.js ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SplitFactor = void 0;

      var ValueWithRandom_1 = __webpack_require__(
      /*! ../../ValueWithRandom */
      34794);

      var SplitFactor = /*#__PURE__*/function (_ValueWithRandom_1$Va2) {
        _inherits(SplitFactor, _ValueWithRandom_1$Va2);

        var _super19 = _createSuper(SplitFactor);

        function SplitFactor() {
          var _this27;

          _classCallCheck(this, SplitFactor);

          _this27 = _super19.call(this);
          _this27.value = 3;
          return _this27;
        }

        return SplitFactor;
      }(ValueWithRandom_1.ValueWithRandom);

      exports.SplitFactor = SplitFactor;
      /***/
    },

    /***/
    88343:
    /*!*********************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/Destroy/SplitRate.js ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SplitRate = void 0;

      var ValueWithRandom_1 = __webpack_require__(
      /*! ../../ValueWithRandom */
      34794);

      var SplitRate = /*#__PURE__*/function (_ValueWithRandom_1$Va3) {
        _inherits(SplitRate, _ValueWithRandom_1$Va3);

        var _super20 = _createSuper(SplitRate);

        function SplitRate() {
          var _this28;

          _classCallCheck(this, SplitRate);

          _this28 = _super20.call(this);
          _this28.value = {
            min: 4,
            max: 9
          };
          return _this28;
        }

        return SplitRate;
      }(ValueWithRandom_1.ValueWithRandom);

      exports.SplitRate = SplitRate;
      /***/
    },

    /***/
    32357:
    /*!*************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/Life/Life.js ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Life = void 0;

      var LifeDelay_1 = __webpack_require__(
      /*! ./LifeDelay */
      25297);

      var LifeDuration_1 = __webpack_require__(
      /*! ./LifeDuration */
      63109);

      var Life = /*#__PURE__*/function () {
        function Life() {
          _classCallCheck(this, Life);

          this.count = 0;
          this.delay = new LifeDelay_1.LifeDelay();
          this.duration = new LifeDuration_1.LifeDuration();
        }

        _createClass(Life, [{
          key: "load",
          value: function load(data) {
            if (data === undefined) {
              return;
            }

            if (data.count !== undefined) {
              this.count = data.count;
            }

            this.delay.load(data.delay);
            this.duration.load(data.duration);
          }
        }]);

        return Life;
      }();

      exports.Life = Life;
      /***/
    },

    /***/
    25297:
    /*!******************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/Life/LifeDelay.js ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LifeDelay = void 0;

      var ValueWithRandom_1 = __webpack_require__(
      /*! ../../ValueWithRandom */
      34794);

      var LifeDelay = /*#__PURE__*/function (_ValueWithRandom_1$Va4) {
        _inherits(LifeDelay, _ValueWithRandom_1$Va4);

        var _super21 = _createSuper(LifeDelay);

        function LifeDelay() {
          var _this29;

          _classCallCheck(this, LifeDelay);

          _this29 = _super21.call(this);
          _this29.sync = false;
          return _this29;
        }

        _createClass(LifeDelay, [{
          key: "load",
          value: function load(data) {
            if (!data) {
              return;
            }

            _get(_getPrototypeOf(LifeDelay.prototype), "load", this).call(this, data);

            if (data.sync !== undefined) {
              this.sync = data.sync;
            }
          }
        }]);

        return LifeDelay;
      }(ValueWithRandom_1.ValueWithRandom);

      exports.LifeDelay = LifeDelay;
      /***/
    },

    /***/
    63109:
    /*!*********************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/Life/LifeDuration.js ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LifeDuration = void 0;

      var ValueWithRandom_1 = __webpack_require__(
      /*! ../../ValueWithRandom */
      34794);

      var LifeDuration = /*#__PURE__*/function (_ValueWithRandom_1$Va5) {
        _inherits(LifeDuration, _ValueWithRandom_1$Va5);

        var _super22 = _createSuper(LifeDuration);

        function LifeDuration() {
          var _this30;

          _classCallCheck(this, LifeDuration);

          _this30 = _super22.call(this);
          _this30.random.minimumValue = 0.0001;
          _this30.sync = false;
          return _this30;
        }

        _createClass(LifeDuration, [{
          key: "load",
          value: function load(data) {
            if (data === undefined) {
              return;
            }

            _get(_getPrototypeOf(LifeDuration.prototype), "load", this).call(this, data);

            if (data.sync !== undefined) {
              this.sync = data.sync;
            }
          }
        }]);

        return LifeDuration;
      }(ValueWithRandom_1.ValueWithRandom);

      exports.LifeDuration = LifeDuration;
      /***/
    },

    /***/
    48109:
    /*!***************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/Links/Links.js ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Links = void 0;

      var LinksShadow_1 = __webpack_require__(
      /*! ./LinksShadow */
      52841);

      var LinksTriangle_1 = __webpack_require__(
      /*! ./LinksTriangle */
      52464);

      var OptionsColor_1 = __webpack_require__(
      /*! ../../OptionsColor */
      14963);

      var Links = /*#__PURE__*/function () {
        function Links() {
          _classCallCheck(this, Links);

          this.blink = false;
          this.color = new OptionsColor_1.OptionsColor();
          this.consent = false;
          this.distance = 100;
          this.enable = false;
          this.frequency = 1;
          this.opacity = 1;
          this.shadow = new LinksShadow_1.LinksShadow();
          this.triangles = new LinksTriangle_1.LinksTriangle();
          this.width = 1;
          this.warp = false;
        }

        _createClass(Links, [{
          key: "load",
          value: function load(data) {
            if (data === undefined) {
              return;
            }

            if (data.id !== undefined) {
              this.id = data.id;
            }

            if (data.blink !== undefined) {
              this.blink = data.blink;
            }

            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);

            if (data.consent !== undefined) {
              this.consent = data.consent;
            }

            if (data.distance !== undefined) {
              this.distance = data.distance;
            }

            if (data.enable !== undefined) {
              this.enable = data.enable;
            }

            if (data.frequency !== undefined) {
              this.frequency = data.frequency;
            }

            if (data.opacity !== undefined) {
              this.opacity = data.opacity;
            }

            this.shadow.load(data.shadow);
            this.triangles.load(data.triangles);

            if (data.width !== undefined) {
              this.width = data.width;
            }

            if (data.warp !== undefined) {
              this.warp = data.warp;
            }
          }
        }]);

        return Links;
      }();

      exports.Links = Links;
      /***/
    },

    /***/
    52841:
    /*!*********************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/Links/LinksShadow.js ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LinksShadow = void 0;

      var OptionsColor_1 = __webpack_require__(
      /*! ../../OptionsColor */
      14963);

      var LinksShadow = /*#__PURE__*/function () {
        function LinksShadow() {
          _classCallCheck(this, LinksShadow);

          this.blur = 5;
          this.color = new OptionsColor_1.OptionsColor();
          this.enable = false;
          this.color.value = "#00ff00";
        }

        _createClass(LinksShadow, [{
          key: "load",
          value: function load(data) {
            if (data === undefined) {
              return;
            }

            if (data.blur !== undefined) {
              this.blur = data.blur;
            }

            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);

            if (data.enable !== undefined) {
              this.enable = data.enable;
            }
          }
        }]);

        return LinksShadow;
      }();

      exports.LinksShadow = LinksShadow;
      /***/
    },

    /***/
    52464:
    /*!***********************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/Links/LinksTriangle.js ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LinksTriangle = void 0;

      var OptionsColor_1 = __webpack_require__(
      /*! ../../OptionsColor */
      14963);

      var LinksTriangle = /*#__PURE__*/function () {
        function LinksTriangle() {
          _classCallCheck(this, LinksTriangle);

          this.enable = false;
          this.frequency = 1;
        }

        _createClass(LinksTriangle, [{
          key: "load",
          value: function load(data) {
            if (data === undefined) {
              return;
            }

            if (data.color !== undefined) {
              this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            }

            if (data.enable !== undefined) {
              this.enable = data.enable;
            }

            if (data.frequency !== undefined) {
              this.frequency = data.frequency;
            }

            if (data.opacity !== undefined) {
              this.opacity = data.opacity;
            }
          }
        }]);

        return LinksTriangle;
      }();

      exports.LinksTriangle = LinksTriangle;
      /***/
    },

    /***/
    75151:
    /*!****************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/Move/Attract.js ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Attract = void 0;

      var Attract = /*#__PURE__*/function () {
        function Attract() {
          _classCallCheck(this, Attract);

          this.distance = 200;
          this.enable = false;
          this.rotate = {
            x: 3000,
            y: 3000
          };
        }

        _createClass(Attract, [{
          key: "rotateX",
          get: function get() {
            return this.rotate.x;
          },
          set: function set(value) {
            this.rotate.x = value;
          }
        }, {
          key: "rotateY",
          get: function get() {
            return this.rotate.y;
          },
          set: function set(value) {
            this.rotate.y = value;
          }
        }, {
          key: "load",
          value: function load(data) {
            var _a, _b, _c, _d;

            if (!data) {
              return;
            }

            if (data.distance !== undefined) {
              this.distance = data.distance;
            }

            if (data.enable !== undefined) {
              this.enable = data.enable;
            }

            var rotateX = (_b = (_a = data.rotate) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : data.rotateX;

            if (rotateX !== undefined) {
              this.rotate.x = rotateX;
            }

            var rotateY = (_d = (_c = data.rotate) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : data.rotateY;

            if (rotateY !== undefined) {
              this.rotate.y = rotateY;
            }
          }
        }]);

        return Attract;
      }();

      exports.Attract = Attract;
      /***/
    },

    /***/
    26449:
    /*!*************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/Move/Move.js ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Move = void 0;

      var Attract_1 = __webpack_require__(
      /*! ./Attract */
      75151);

      var Enums_1 = __webpack_require__(
      /*! ../../../../Enums */
      39666);

      var Trail_1 = __webpack_require__(
      /*! ./Trail */
      1133);

      var Path_1 = __webpack_require__(
      /*! ./Path/Path */
      6262);

      var MoveAngle_1 = __webpack_require__(
      /*! ./MoveAngle */
      37183);

      var MoveGravity_1 = __webpack_require__(
      /*! ./MoveGravity */
      49703);

      var OutModes_1 = __webpack_require__(
      /*! ./OutModes */
      2898);

      var Utils_1 = __webpack_require__(
      /*! ../../../../Utils */
      18942);

      var Spin_1 = __webpack_require__(
      /*! ./Spin */
      13999);

      var Move = /*#__PURE__*/function () {
        function Move() {
          _classCallCheck(this, Move);

          this.angle = new MoveAngle_1.MoveAngle();
          this.attract = new Attract_1.Attract();
          this.decay = 0;
          this.distance = {};
          this.direction = Enums_1.MoveDirection.none;
          this.drift = 0;
          this.enable = false;
          this.gravity = new MoveGravity_1.MoveGravity();
          this.path = new Path_1.Path();
          this.outModes = new OutModes_1.OutModes();
          this.random = false;
          this.size = false;
          this.speed = 2;
          this.spin = new Spin_1.Spin();
          this.straight = false;
          this.trail = new Trail_1.Trail();
          this.vibrate = false;
          this.warp = false;
        }

        _createClass(Move, [{
          key: "collisions",
          get: function get() {
            return false;
          },
          set: function set(value) {}
        }, {
          key: "bounce",
          get: function get() {
            return this.collisions;
          },
          set: function set(value) {
            this.collisions = value;
          }
        }, {
          key: "out_mode",
          get: function get() {
            return this.outMode;
          },
          set: function set(value) {
            this.outMode = value;
          }
        }, {
          key: "outMode",
          get: function get() {
            return this.outModes["default"];
          },
          set: function set(value) {
            this.outModes["default"] = value;
          }
        }, {
          key: "noise",
          get: function get() {
            return this.path;
          },
          set: function set(value) {
            this.path = value;
          }
        }, {
          key: "load",
          value: function load(data) {
            var _a, _b, _c;

            if (data === undefined) {
              return;
            }

            if (data.angle !== undefined) {
              if (typeof data.angle === "number") {
                this.angle.value = data.angle;
              } else {
                this.angle.load(data.angle);
              }
            }

            this.attract.load(data.attract);

            if (data.decay !== undefined) {
              this.decay = data.decay;
            }

            if (data.direction !== undefined) {
              this.direction = data.direction;
            }

            if (data.distance !== undefined) {
              this.distance = typeof data.distance === "number" ? {
                horizontal: data.distance,
                vertical: data.distance
              } : (0, Utils_1.deepExtend)({}, data.distance);
            }

            if (data.drift !== undefined) {
              this.drift = (0, Utils_1.setRangeValue)(data.drift);
            }

            if (data.enable !== undefined) {
              this.enable = data.enable;
            }

            this.gravity.load(data.gravity);
            var outMode = (_a = data.outMode) !== null && _a !== void 0 ? _a : data.out_mode;

            if (data.outModes !== undefined || outMode !== undefined) {
              if (typeof data.outModes === "string" || data.outModes === undefined && outMode !== undefined) {
                this.outModes.load({
                  "default": (_b = data.outModes) !== null && _b !== void 0 ? _b : outMode
                });
              } else {
                this.outModes.load(data.outModes);
              }
            }

            this.path.load((_c = data.path) !== null && _c !== void 0 ? _c : data.noise);

            if (data.random !== undefined) {
              this.random = data.random;
            }

            if (data.size !== undefined) {
              this.size = data.size;
            }

            if (data.speed !== undefined) {
              this.speed = (0, Utils_1.setRangeValue)(data.speed);
            }

            this.spin.load(data.spin);

            if (data.straight !== undefined) {
              this.straight = data.straight;
            }

            this.trail.load(data.trail);

            if (data.vibrate !== undefined) {
              this.vibrate = data.vibrate;
            }

            if (data.warp !== undefined) {
              this.warp = data.warp;
            }
          }
        }]);

        return Move;
      }();

      exports.Move = Move;
      /***/
    },

    /***/
    37183:
    /*!******************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/Move/MoveAngle.js ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.MoveAngle = void 0;

      var MoveAngle = /*#__PURE__*/function () {
        function MoveAngle() {
          _classCallCheck(this, MoveAngle);

          this.offset = 0;
          this.value = 90;
        }

        _createClass(MoveAngle, [{
          key: "load",
          value: function load(data) {
            if (data === undefined) {
              return;
            }

            if (data.offset !== undefined) {
              this.offset = data.offset;
            }

            if (data.value !== undefined) {
              this.value = data.value;
            }
          }
        }]);

        return MoveAngle;
      }();

      exports.MoveAngle = MoveAngle;
      /***/
    },

    /***/
    49703:
    /*!********************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/Move/MoveGravity.js ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.MoveGravity = void 0;

      var MoveGravity = /*#__PURE__*/function () {
        function MoveGravity() {
          _classCallCheck(this, MoveGravity);

          this.acceleration = 9.81;
          this.enable = false;
          this.inverse = false;
          this.maxSpeed = 50;
        }

        _createClass(MoveGravity, [{
          key: "load",
          value: function load(data) {
            if (!data) {
              return;
            }

            if (data.acceleration !== undefined) {
              this.acceleration = data.acceleration;
            }

            if (data.enable !== undefined) {
              this.enable = data.enable;
            }

            if (data.inverse !== undefined) {
              this.inverse = data.inverse;
            }

            if (data.maxSpeed !== undefined) {
              this.maxSpeed = data.maxSpeed;
            }
          }
        }]);

        return MoveGravity;
      }();

      exports.MoveGravity = MoveGravity;
      /***/
    },

    /***/
    2898:
    /*!*****************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/Move/OutModes.js ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.OutModes = void 0;

      var Modes_1 = __webpack_require__(
      /*! ../../../../Enums/Modes */
      95196);

      var OutModes = /*#__PURE__*/function () {
        function OutModes() {
          _classCallCheck(this, OutModes);

          this["default"] = Modes_1.OutMode.out;
        }

        _createClass(OutModes, [{
          key: "load",
          value: function load(data) {
            var _a, _b, _c, _d;

            if (!data) {
              return;
            }

            if (data["default"] !== undefined) {
              this["default"] = data["default"];
            }

            this.bottom = (_a = data.bottom) !== null && _a !== void 0 ? _a : data["default"];
            this.left = (_b = data.left) !== null && _b !== void 0 ? _b : data["default"];
            this.right = (_c = data.right) !== null && _c !== void 0 ? _c : data["default"];
            this.top = (_d = data.top) !== null && _d !== void 0 ? _d : data["default"];
          }
        }]);

        return OutModes;
      }();

      exports.OutModes = OutModes;
      /***/
    },

    /***/
    6262:
    /*!******************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/Move/Path/Path.js ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Path = void 0;

      var PathDelay_1 = __webpack_require__(
      /*! ./PathDelay */
      25849);

      var Utils_1 = __webpack_require__(
      /*! ../../../../../Utils */
      18942);

      var Path = /*#__PURE__*/function () {
        function Path() {
          _classCallCheck(this, Path);

          this.clamp = true;
          this.delay = new PathDelay_1.PathDelay();
          this.enable = false;
          this.options = {};
        }

        _createClass(Path, [{
          key: "load",
          value: function load(data) {
            if (data === undefined) {
              return;
            }

            if (data.clamp !== undefined) {
              this.clamp = data.clamp;
            }

            this.delay.load(data.delay);

            if (data.enable !== undefined) {
              this.enable = data.enable;
            }

            this.generator = data.generator;

            if (data.options) {
              this.options = (0, Utils_1.deepExtend)(this.options, data.options);
            }
          }
        }]);

        return Path;
      }();

      exports.Path = Path;
      /***/
    },

    /***/
    25849:
    /*!***********************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/Move/Path/PathDelay.js ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PathDelay = void 0;

      var ValueWithRandom_1 = __webpack_require__(
      /*! ../../../ValueWithRandom */
      34794);

      var PathDelay = /*#__PURE__*/function (_ValueWithRandom_1$Va6) {
        _inherits(PathDelay, _ValueWithRandom_1$Va6);

        var _super23 = _createSuper(PathDelay);

        function PathDelay() {
          _classCallCheck(this, PathDelay);

          return _super23.call(this);
        }

        return PathDelay;
      }(ValueWithRandom_1.ValueWithRandom);

      exports.PathDelay = PathDelay;
      /***/
    },

    /***/
    13999:
    /*!*************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/Move/Spin.js ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Spin = void 0;

      var Utils_1 = __webpack_require__(
      /*! ../../../../Utils */
      18942);

      var Spin = /*#__PURE__*/function () {
        function Spin() {
          _classCallCheck(this, Spin);

          this.acceleration = 0;
          this.enable = false;
        }

        _createClass(Spin, [{
          key: "load",
          value: function load(data) {
            if (!data) {
              return;
            }

            if (data.acceleration !== undefined) {
              this.acceleration = (0, Utils_1.setRangeValue)(data.acceleration);
            }

            if (data.enable !== undefined) {
              this.enable = data.enable;
            }

            this.position = data.position ? (0, Utils_1.deepExtend)({}, data.position) : undefined;
          }
        }]);

        return Spin;
      }();

      exports.Spin = Spin;
      /***/
    },

    /***/
    1133:
    /*!**************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/Move/Trail.js ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Trail = void 0;

      var OptionsColor_1 = __webpack_require__(
      /*! ../../OptionsColor */
      14963);

      var Trail = /*#__PURE__*/function () {
        function Trail() {
          _classCallCheck(this, Trail);

          this.enable = false;
          this.length = 10;
          this.fillColor = new OptionsColor_1.OptionsColor();
          this.fillColor.value = "#000000";
        }

        _createClass(Trail, [{
          key: "load",
          value: function load(data) {
            if (data === undefined) {
              return;
            }

            if (data.enable !== undefined) {
              this.enable = data.enable;
            }

            this.fillColor = OptionsColor_1.OptionsColor.create(this.fillColor, data.fillColor);

            if (data.length !== undefined) {
              this.length = data.length;
            }
          }
        }]);

        return Trail;
      }();

      exports.Trail = Trail;
      /***/
    },

    /***/
    21651:
    /*!******************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/Number/Density.js ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Density = void 0;

      var Density = /*#__PURE__*/function () {
        function Density() {
          _classCallCheck(this, Density);

          this.enable = false;
          this.area = 800;
          this.factor = 1000;
        }

        _createClass(Density, [{
          key: "value_area",
          get: function get() {
            return this.area;
          },
          set: function set(value) {
            this.area = value;
          }
        }, {
          key: "load",
          value: function load(data) {
            var _a;

            if (data === undefined) {
              return;
            }

            if (data.enable !== undefined) {
              this.enable = data.enable;
            }

            var area = (_a = data.area) !== null && _a !== void 0 ? _a : data.value_area;

            if (area !== undefined) {
              this.area = area;
            }

            if (data.factor !== undefined) {
              this.factor = data.factor;
            }
          }
        }]);

        return Density;
      }();

      exports.Density = Density;
      /***/
    },

    /***/
    20017:
    /*!**************************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/Number/ParticlesNumber.js ***!
      \**************************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ParticlesNumber = void 0;

      var Density_1 = __webpack_require__(
      /*! ./Density */
      21651);

      var ParticlesNumber = /*#__PURE__*/function () {
        function ParticlesNumber() {
          _classCallCheck(this, ParticlesNumber);

          this.density = new Density_1.Density();
          this.limit = 0;
          this.value = 100;
        }

        _createClass(ParticlesNumber, [{
          key: "max",
          get: function get() {
            return this.limit;
          },
          set: function set(value) {
            this.limit = value;
          }
        }, {
          key: "load",
          value: function load(data) {
            var _a;

            if (data === undefined) {
              return;
            }

            this.density.load(data.density);
            var limit = (_a = data.limit) !== null && _a !== void 0 ? _a : data.max;

            if (limit !== undefined) {
              this.limit = limit;
            }

            if (data.value !== undefined) {
              this.value = data.value;
            }
          }
        }]);

        return ParticlesNumber;
      }();

      exports.ParticlesNumber = ParticlesNumber;
      /***/
    },

    /***/
    94175:
    /*!*******************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/Opacity/Opacity.js ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Opacity = void 0;

      var OpacityAnimation_1 = __webpack_require__(
      /*! ./OpacityAnimation */
      881);

      var ValueWithRandom_1 = __webpack_require__(
      /*! ../../ValueWithRandom */
      34794);

      var Utils_1 = __webpack_require__(
      /*! ../../../../Utils */
      18942);

      var Opacity = /*#__PURE__*/function (_ValueWithRandom_1$Va7) {
        _inherits(Opacity, _ValueWithRandom_1$Va7);

        var _super24 = _createSuper(Opacity);

        function Opacity() {
          var _this31;

          _classCallCheck(this, Opacity);

          _this31 = _super24.call(this);
          _this31.animation = new OpacityAnimation_1.OpacityAnimation();
          _this31.random.minimumValue = 0.1;
          _this31.value = 1;
          return _this31;
        }

        _createClass(Opacity, [{
          key: "anim",
          get: function get() {
            return this.animation;
          },
          set: function set(value) {
            this.animation = value;
          }
        }, {
          key: "load",
          value: function load(data) {
            var _a;

            if (!data) {
              return;
            }

            _get(_getPrototypeOf(Opacity.prototype), "load", this).call(this, data);

            var animation = (_a = data.animation) !== null && _a !== void 0 ? _a : data.anim;

            if (animation !== undefined) {
              this.animation.load(animation);
              this.value = (0, Utils_1.setRangeValue)(this.value, this.animation.enable ? this.animation.minimumValue : undefined);
            }
          }
        }]);

        return Opacity;
      }(ValueWithRandom_1.ValueWithRandom);

      exports.Opacity = Opacity;
      /***/
    },

    /***/
    881:
    /*!****************************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/Opacity/OpacityAnimation.js ***!
      \****************************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.OpacityAnimation = void 0;

      var Enums_1 = __webpack_require__(
      /*! ../../../../Enums */
      39666);

      var AnimationOptions_1 = __webpack_require__(
      /*! ../../AnimationOptions */
      15128);

      var OpacityAnimation = /*#__PURE__*/function (_AnimationOptions_1$A) {
        _inherits(OpacityAnimation, _AnimationOptions_1$A);

        var _super25 = _createSuper(OpacityAnimation);

        function OpacityAnimation() {
          var _this32;

          _classCallCheck(this, OpacityAnimation);

          _this32 = _super25.call(this);
          _this32.destroy = Enums_1.DestroyType.none;
          _this32.enable = false;
          _this32.speed = 2;
          _this32.startValue = Enums_1.StartValueType.random;
          _this32.sync = false;
          return _this32;
        }

        _createClass(OpacityAnimation, [{
          key: "opacity_min",
          get: function get() {
            return this.minimumValue;
          },
          set: function set(value) {
            this.minimumValue = value;
          }
        }, {
          key: "load",
          value: function load(data) {
            var _a;

            if (data === undefined) {
              return;
            }

            _get(_getPrototypeOf(OpacityAnimation.prototype), "load", this).call(this, data);

            if (data.destroy !== undefined) {
              this.destroy = data.destroy;
            }

            if (data.enable !== undefined) {
              this.enable = data.enable;
            }

            this.minimumValue = (_a = data.minimumValue) !== null && _a !== void 0 ? _a : data.opacity_min;

            if (data.speed !== undefined) {
              this.speed = data.speed;
            }

            if (data.startValue !== undefined) {
              this.startValue = data.startValue;
            }

            if (data.sync !== undefined) {
              this.sync = data.sync;
            }
          }
        }]);

        return OpacityAnimation;
      }(AnimationOptions_1.AnimationOptions);

      exports.OpacityAnimation = OpacityAnimation;
      /***/
    },

    /***/
    61889:
    /*!***************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/Orbit/Orbit.js ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Orbit = void 0;

      var OrbitRotation_1 = __webpack_require__(
      /*! ./OrbitRotation */
      34861);

      var OptionsColor_1 = __webpack_require__(
      /*! ../../OptionsColor */
      14963);

      var AnimationOptions_1 = __webpack_require__(
      /*! ../../AnimationOptions */
      15128);

      var Orbit = /*#__PURE__*/function () {
        function Orbit() {
          _classCallCheck(this, Orbit);

          this.animation = new AnimationOptions_1.AnimationOptions();
          this.enable = false;
          this.opacity = 1;
          this.rotation = new OrbitRotation_1.OrbitRotation();
          this.width = 1;
        }

        _createClass(Orbit, [{
          key: "load",
          value: function load(data) {
            if (data === undefined) {
              return;
            }

            this.animation.load(data.animation);
            this.rotation.load(data.rotation);

            if (data.enable !== undefined) {
              this.enable = data.enable;
            }

            if (data.opacity !== undefined) {
              this.opacity = data.opacity;
            }

            if (data.width !== undefined) {
              this.width = data.width;
            }

            if (data.radius !== undefined) {
              this.radius = data.radius;
            }

            if (data.color !== undefined) {
              this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            }
          }
        }]);

        return Orbit;
      }();

      exports.Orbit = Orbit;
      /***/
    },

    /***/
    34861:
    /*!***********************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/Orbit/OrbitRotation.js ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.OrbitRotation = void 0;

      var ValueWithRandom_1 = __webpack_require__(
      /*! ../../ValueWithRandom */
      34794);

      var OrbitRotation = /*#__PURE__*/function (_ValueWithRandom_1$Va8) {
        _inherits(OrbitRotation, _ValueWithRandom_1$Va8);

        var _super26 = _createSuper(OrbitRotation);

        function OrbitRotation() {
          var _this33;

          _classCallCheck(this, OrbitRotation);

          _this33 = _super26.call(this);
          _this33.value = 45;
          _this33.random.enable = false;
          _this33.random.minimumValue = 0;
          return _this33;
        }

        _createClass(OrbitRotation, [{
          key: "load",
          value: function load(data) {
            if (data === undefined) {
              return;
            }

            _get(_getPrototypeOf(OrbitRotation.prototype), "load", this).call(this, data);
          }
        }]);

        return OrbitRotation;
      }(ValueWithRandom_1.ValueWithRandom);

      exports.OrbitRotation = OrbitRotation;
      /***/
    },

    /***/
    13599:
    /*!********************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/ParticlesOptions.js ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ParticlesOptions = void 0;

      var Links_1 = __webpack_require__(
      /*! ./Links/Links */
      48109);

      var Move_1 = __webpack_require__(
      /*! ./Move/Move */
      26449);

      var ParticlesNumber_1 = __webpack_require__(
      /*! ./Number/ParticlesNumber */
      20017);

      var Opacity_1 = __webpack_require__(
      /*! ./Opacity/Opacity */
      94175);

      var Shape_1 = __webpack_require__(
      /*! ./Shape/Shape */
      9011);

      var Size_1 = __webpack_require__(
      /*! ./Size/Size */
      49959);

      var Rotate_1 = __webpack_require__(
      /*! ./Rotate/Rotate */
      37041);

      var Shadow_1 = __webpack_require__(
      /*! ./Shadow */
      72678);

      var Stroke_1 = __webpack_require__(
      /*! ./Stroke */
      41615);

      var Collisions_1 = __webpack_require__(
      /*! ./Collisions/Collisions */
      95321);

      var Twinkle_1 = __webpack_require__(
      /*! ./Twinkle/Twinkle */
      3145);

      var AnimatableColor_1 = __webpack_require__(
      /*! ../AnimatableColor */
      76498);

      var Life_1 = __webpack_require__(
      /*! ./Life/Life */
      32357);

      var Bounce_1 = __webpack_require__(
      /*! ./Bounce/Bounce */
      25610);

      var Destroy_1 = __webpack_require__(
      /*! ./Destroy/Destroy */
      18274);

      var Wobble_1 = __webpack_require__(
      /*! ./Wobble/Wobble */
      18842);

      var Tilt_1 = __webpack_require__(
      /*! ./Tilt/Tilt */
      11370);

      var Roll_1 = __webpack_require__(
      /*! ./Roll/Roll */
      1539);

      var ZIndex_1 = __webpack_require__(
      /*! ./ZIndex/ZIndex */
      47380);

      var Utils_1 = __webpack_require__(
      /*! ../../../Utils */
      18942);

      var Orbit_1 = __webpack_require__(
      /*! ./Orbit/Orbit */
      61889);

      var Repulse_1 = __webpack_require__(
      /*! ./Repulse/Repulse */
      48082);

      var AnimatableGradient_1 = __webpack_require__(
      /*! ../AnimatableGradient */
      58600);

      var ParticlesOptions = /*#__PURE__*/function () {
        function ParticlesOptions() {
          _classCallCheck(this, ParticlesOptions);

          this.bounce = new Bounce_1.Bounce();
          this.collisions = new Collisions_1.Collisions();
          this.color = new AnimatableColor_1.AnimatableColor();
          this.destroy = new Destroy_1.Destroy();
          this.gradient = [];
          this.groups = {};
          this.life = new Life_1.Life();
          this.links = new Links_1.Links();
          this.move = new Move_1.Move();
          this.number = new ParticlesNumber_1.ParticlesNumber();
          this.opacity = new Opacity_1.Opacity();
          this.orbit = new Orbit_1.Orbit();
          this.reduceDuplicates = false;
          this.repulse = new Repulse_1.Repulse();
          this.roll = new Roll_1.Roll();
          this.rotate = new Rotate_1.Rotate();
          this.shadow = new Shadow_1.Shadow();
          this.shape = new Shape_1.Shape();
          this.size = new Size_1.Size();
          this.stroke = new Stroke_1.Stroke();
          this.tilt = new Tilt_1.Tilt();
          this.twinkle = new Twinkle_1.Twinkle();
          this.wobble = new Wobble_1.Wobble();
          this.zIndex = new ZIndex_1.ZIndex();
        }

        _createClass(ParticlesOptions, [{
          key: "line_linked",
          get: function get() {
            return this.links;
          },
          set: function set(value) {
            this.links = value;
          }
        }, {
          key: "lineLinked",
          get: function get() {
            return this.links;
          },
          set: function set(value) {
            this.links = value;
          }
        }, {
          key: "load",
          value: function load(data) {
            var _a, _b, _c, _d, _e, _f, _g, _h;

            if (data === undefined) {
              return;
            }

            this.bounce.load(data.bounce);
            this.color.load(AnimatableColor_1.AnimatableColor.create(this.color, data.color));
            this.destroy.load(data.destroy);
            this.life.load(data.life);
            var links = (_b = (_a = data.links) !== null && _a !== void 0 ? _a : data.lineLinked) !== null && _b !== void 0 ? _b : data.line_linked;

            if (links !== undefined) {
              this.links.load(links);
            }

            if (data.groups !== undefined) {
              for (var group in data.groups) {
                var item = data.groups[group];

                if (item !== undefined) {
                  this.groups[group] = (0, Utils_1.deepExtend)((_c = this.groups[group]) !== null && _c !== void 0 ? _c : {}, item);
                }
              }
            }

            this.move.load(data.move);
            this.number.load(data.number);
            this.opacity.load(data.opacity);
            this.orbit.load(data.orbit);

            if (data.reduceDuplicates !== undefined) {
              this.reduceDuplicates = data.reduceDuplicates;
            }

            this.repulse.load(data.repulse);
            this.roll.load(data.roll);
            this.rotate.load(data.rotate);
            this.shape.load(data.shape);
            this.size.load(data.size);
            this.shadow.load(data.shadow);
            this.tilt.load(data.tilt);
            this.twinkle.load(data.twinkle);
            this.wobble.load(data.wobble);
            this.zIndex.load(data.zIndex);
            var collisions = (_e = (_d = data.move) === null || _d === void 0 ? void 0 : _d.collisions) !== null && _e !== void 0 ? _e : (_f = data.move) === null || _f === void 0 ? void 0 : _f.bounce;

            if (collisions !== undefined) {
              this.collisions.enable = collisions;
            }

            this.collisions.load(data.collisions);
            var strokeToLoad = (_g = data.stroke) !== null && _g !== void 0 ? _g : (_h = data.shape) === null || _h === void 0 ? void 0 : _h.stroke;

            if (strokeToLoad) {
              if (strokeToLoad instanceof Array) {
                this.stroke = strokeToLoad.map(function (s) {
                  var tmp = new Stroke_1.Stroke();
                  tmp.load(s);
                  return tmp;
                });
              } else {
                if (this.stroke instanceof Array) {
                  this.stroke = new Stroke_1.Stroke();
                }

                this.stroke.load(strokeToLoad);
              }
            }

            var gradientToLoad = data.gradient;

            if (gradientToLoad) {
              if (gradientToLoad instanceof Array) {
                this.gradient = gradientToLoad.map(function (s) {
                  var tmp = new AnimatableGradient_1.AnimatableGradient();
                  tmp.load(s);
                  return tmp;
                });
              } else {
                if (this.gradient instanceof Array) {
                  this.gradient = new AnimatableGradient_1.AnimatableGradient();
                }

                this.gradient.load(gradientToLoad);
              }
            }
          }
        }]);

        return ParticlesOptions;
      }();

      exports.ParticlesOptions = ParticlesOptions;
      /***/
    },

    /***/
    48082:
    /*!*******************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/Repulse/Repulse.js ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Repulse = void 0;

      var ValueWithRandom_1 = __webpack_require__(
      /*! ../../ValueWithRandom */
      34794);

      var Repulse = /*#__PURE__*/function (_ValueWithRandom_1$Va9) {
        _inherits(Repulse, _ValueWithRandom_1$Va9);

        var _super27 = _createSuper(Repulse);

        function Repulse() {
          var _this34;

          _classCallCheck(this, Repulse);

          _this34 = _super27.call(this);
          _this34.enabled = false;
          _this34.distance = 1;
          _this34.duration = 1;
          _this34.factor = 1;
          _this34.speed = 1;
          return _this34;
        }

        _createClass(Repulse, [{
          key: "load",
          value: function load(data) {
            _get(_getPrototypeOf(Repulse.prototype), "load", this).call(this, data);

            if (!data) {
              return;
            }

            if (data.enabled !== undefined) {
              this.enabled = data.enabled;
            }

            if (data.distance !== undefined) {
              this.distance = data.distance;
            }

            if (data.duration !== undefined) {
              this.duration = data.duration;
            }

            if (data.factor !== undefined) {
              this.factor = data.factor;
            }

            if (data.speed !== undefined) {
              this.speed = data.speed;
            }
          }
        }]);

        return Repulse;
      }(ValueWithRandom_1.ValueWithRandom);

      exports.Repulse = Repulse;
      /***/
    },

    /***/
    1539:
    /*!*************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/Roll/Roll.js ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Roll = void 0;

      var OptionsColor_1 = __webpack_require__(
      /*! ../../OptionsColor */
      14963);

      var RollLight_1 = __webpack_require__(
      /*! ./RollLight */
      76178);

      var Utils_1 = __webpack_require__(
      /*! ../../../../Utils */
      18942);

      var Enums_1 = __webpack_require__(
      /*! ../../../../Enums */
      39666);

      var Roll = /*#__PURE__*/function () {
        function Roll() {
          _classCallCheck(this, Roll);

          this.darken = new RollLight_1.RollLight();
          this.enable = false;
          this.enlighten = new RollLight_1.RollLight();
          this.mode = Enums_1.RollMode.vertical;
          this.speed = 25;
        }

        _createClass(Roll, [{
          key: "load",
          value: function load(data) {
            if (!data) {
              return;
            }

            if (data.backColor !== undefined) {
              this.backColor = OptionsColor_1.OptionsColor.create(this.backColor, data.backColor);
            }

            this.darken.load(data.darken);

            if (data.enable !== undefined) {
              this.enable = data.enable;
            }

            this.enlighten.load(data.enlighten);

            if (data.mode !== undefined) {
              this.mode = data.mode;
            }

            if (data.speed !== undefined) {
              this.speed = (0, Utils_1.setRangeValue)(data.speed);
            }
          }
        }]);

        return Roll;
      }();

      exports.Roll = Roll;
      /***/
    },

    /***/
    76178:
    /*!******************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/Roll/RollLight.js ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.RollLight = void 0;

      var RollLight = /*#__PURE__*/function () {
        function RollLight() {
          _classCallCheck(this, RollLight);

          this.enable = false;
          this.value = 0;
        }

        _createClass(RollLight, [{
          key: "load",
          value: function load(data) {
            if (!data) {
              return;
            }

            if (data.enable !== undefined) {
              this.enable = data.enable;
            }

            if (data.value !== undefined) {
              this.value = data.value;
            }
          }
        }]);

        return RollLight;
      }();

      exports.RollLight = RollLight;
      /***/
    },

    /***/
    37041:
    /*!*****************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/Rotate/Rotate.js ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Rotate = void 0;

      var RotateAnimation_1 = __webpack_require__(
      /*! ./RotateAnimation */
      86585);

      var Enums_1 = __webpack_require__(
      /*! ../../../../Enums */
      39666);

      var ValueWithRandom_1 = __webpack_require__(
      /*! ../../ValueWithRandom */
      34794);

      var Rotate = /*#__PURE__*/function (_ValueWithRandom_1$Va10) {
        _inherits(Rotate, _ValueWithRandom_1$Va10);

        var _super28 = _createSuper(Rotate);

        function Rotate() {
          var _this35;

          _classCallCheck(this, Rotate);

          _this35 = _super28.call(this);
          _this35.animation = new RotateAnimation_1.RotateAnimation();
          _this35.direction = Enums_1.RotateDirection.clockwise;
          _this35.path = false;
          _this35.value = 0;
          return _this35;
        }

        _createClass(Rotate, [{
          key: "load",
          value: function load(data) {
            if (!data) {
              return;
            }

            _get(_getPrototypeOf(Rotate.prototype), "load", this).call(this, data);

            if (data.direction !== undefined) {
              this.direction = data.direction;
            }

            this.animation.load(data.animation);

            if (data.path !== undefined) {
              this.path = data.path;
            }
          }
        }]);

        return Rotate;
      }(ValueWithRandom_1.ValueWithRandom);

      exports.Rotate = Rotate;
      /***/
    },

    /***/
    86585:
    /*!**************************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/Rotate/RotateAnimation.js ***!
      \**************************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.RotateAnimation = void 0;

      var RotateAnimation = /*#__PURE__*/function () {
        function RotateAnimation() {
          _classCallCheck(this, RotateAnimation);

          this.enable = false;
          this.speed = 0;
          this.sync = false;
        }

        _createClass(RotateAnimation, [{
          key: "load",
          value: function load(data) {
            if (data === undefined) {
              return;
            }

            if (data.enable !== undefined) {
              this.enable = data.enable;
            }

            if (data.speed !== undefined) {
              this.speed = data.speed;
            }

            if (data.sync !== undefined) {
              this.sync = data.sync;
            }
          }
        }]);

        return RotateAnimation;
      }();

      exports.RotateAnimation = RotateAnimation;
      /***/
    },

    /***/
    72678:
    /*!**********************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/Shadow.js ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Shadow = void 0;

      var OptionsColor_1 = __webpack_require__(
      /*! ../OptionsColor */
      14963);

      var Shadow = /*#__PURE__*/function () {
        function Shadow() {
          _classCallCheck(this, Shadow);

          this.blur = 0;
          this.color = new OptionsColor_1.OptionsColor();
          this.enable = false;
          this.offset = {
            x: 0,
            y: 0
          };
          this.color.value = "#000000";
        }

        _createClass(Shadow, [{
          key: "load",
          value: function load(data) {
            if (data === undefined) {
              return;
            }

            if (data.blur !== undefined) {
              this.blur = data.blur;
            }

            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);

            if (data.enable !== undefined) {
              this.enable = data.enable;
            }

            if (data.offset === undefined) {
              return;
            }

            if (data.offset.x !== undefined) {
              this.offset.x = data.offset.x;
            }

            if (data.offset.y !== undefined) {
              this.offset.y = data.offset.y;
            }
          }
        }]);

        return Shadow;
      }();

      exports.Shadow = Shadow;
      /***/
    },

    /***/
    9011:
    /*!***************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/Shape/Shape.js ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Shape = void 0;

      var Enums_1 = __webpack_require__(
      /*! ../../../../Enums */
      39666);

      var Utils_1 = __webpack_require__(
      /*! ../../../../Utils */
      18942);

      var Shape = /*#__PURE__*/function () {
        function Shape() {
          _classCallCheck(this, Shape);

          this.options = {};
          this.type = Enums_1.ShapeType.circle;
        }

        _createClass(Shape, [{
          key: "image",
          get: function get() {
            var _a;

            return (_a = this.options[Enums_1.ShapeType.image]) !== null && _a !== void 0 ? _a : this.options[Enums_1.ShapeType.images];
          },
          set: function set(value) {
            this.options[Enums_1.ShapeType.image] = value;
            this.options[Enums_1.ShapeType.images] = value;
          }
        }, {
          key: "custom",
          get: function get() {
            return this.options;
          },
          set: function set(value) {
            this.options = value;
          }
        }, {
          key: "images",
          get: function get() {
            return this.image;
          },
          set: function set(value) {
            this.image = value;
          }
        }, {
          key: "stroke",
          get: function get() {
            return [];
          },
          set: function set(_value) {}
        }, {
          key: "character",
          get: function get() {
            var _a;

            return (_a = this.options[Enums_1.ShapeType.character]) !== null && _a !== void 0 ? _a : this.options[Enums_1.ShapeType["char"]];
          },
          set: function set(value) {
            this.options[Enums_1.ShapeType.character] = value;
            this.options[Enums_1.ShapeType["char"]] = value;
          }
        }, {
          key: "polygon",
          get: function get() {
            var _a;

            return (_a = this.options[Enums_1.ShapeType.polygon]) !== null && _a !== void 0 ? _a : this.options[Enums_1.ShapeType.star];
          },
          set: function set(value) {
            this.options[Enums_1.ShapeType.polygon] = value;
            this.options[Enums_1.ShapeType.star] = value;
          }
        }, {
          key: "load",
          value: function load(data) {
            var _a, _b, _c;

            if (data === undefined) {
              return;
            }

            var options = (_a = data.options) !== null && _a !== void 0 ? _a : data.custom;

            if (options !== undefined) {
              for (var shape in options) {
                var item = options[shape];

                if (item !== undefined) {
                  this.options[shape] = (0, Utils_1.deepExtend)((_b = this.options[shape]) !== null && _b !== void 0 ? _b : {}, item);
                }
              }
            }

            this.loadShape(data.character, Enums_1.ShapeType.character, Enums_1.ShapeType["char"], true);
            this.loadShape(data.polygon, Enums_1.ShapeType.polygon, Enums_1.ShapeType.star, false);
            this.loadShape((_c = data.image) !== null && _c !== void 0 ? _c : data.images, Enums_1.ShapeType.image, Enums_1.ShapeType.images, true);

            if (data.type !== undefined) {
              this.type = data.type;
            }
          }
        }, {
          key: "loadShape",
          value: function loadShape(item, mainKey, altKey, altOverride) {
            var _a, _b, _c, _d;

            if (item === undefined) {
              return;
            }

            if (item instanceof Array) {
              if (!(this.options[mainKey] instanceof Array)) {
                this.options[mainKey] = [];

                if (!this.options[altKey] || altOverride) {
                  this.options[altKey] = [];
                }
              }

              this.options[mainKey] = (0, Utils_1.deepExtend)((_a = this.options[mainKey]) !== null && _a !== void 0 ? _a : [], item);

              if (!this.options[altKey] || altOverride) {
                this.options[altKey] = (0, Utils_1.deepExtend)((_b = this.options[altKey]) !== null && _b !== void 0 ? _b : [], item);
              }
            } else {
              if (this.options[mainKey] instanceof Array) {
                this.options[mainKey] = {};

                if (!this.options[altKey] || altOverride) {
                  this.options[altKey] = {};
                }
              }

              this.options[mainKey] = (0, Utils_1.deepExtend)((_c = this.options[mainKey]) !== null && _c !== void 0 ? _c : {}, item);

              if (!this.options[altKey] || altOverride) {
                this.options[altKey] = (0, Utils_1.deepExtend)((_d = this.options[altKey]) !== null && _d !== void 0 ? _d : {}, item);
              }
            }
          }
        }]);

        return Shape;
      }();

      exports.Shape = Shape;
      /***/
    },

    /***/
    49959:
    /*!*************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/Size/Size.js ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Size = void 0;

      var SizeAnimation_1 = __webpack_require__(
      /*! ./SizeAnimation */
      29613);

      var ValueWithRandom_1 = __webpack_require__(
      /*! ../../ValueWithRandom */
      34794);

      var Utils_1 = __webpack_require__(
      /*! ../../../../Utils */
      18942);

      var Size = /*#__PURE__*/function (_ValueWithRandom_1$Va11) {
        _inherits(Size, _ValueWithRandom_1$Va11);

        var _super29 = _createSuper(Size);

        function Size() {
          var _this36;

          _classCallCheck(this, Size);

          _this36 = _super29.call(this);
          _this36.animation = new SizeAnimation_1.SizeAnimation();
          _this36.random.minimumValue = 1;
          _this36.value = 3;
          return _this36;
        }

        _createClass(Size, [{
          key: "anim",
          get: function get() {
            return this.animation;
          },
          set: function set(value) {
            this.animation = value;
          }
        }, {
          key: "load",
          value: function load(data) {
            var _a;

            if (!data) {
              return;
            }

            _get(_getPrototypeOf(Size.prototype), "load", this).call(this, data);

            var animation = (_a = data.animation) !== null && _a !== void 0 ? _a : data.anim;

            if (animation !== undefined) {
              this.animation.load(animation);
              this.value = (0, Utils_1.setRangeValue)(this.value, this.animation.enable ? this.animation.minimumValue : undefined);
            }
          }
        }]);

        return Size;
      }(ValueWithRandom_1.ValueWithRandom);

      exports.Size = Size;
      /***/
    },

    /***/
    29613:
    /*!**********************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/Size/SizeAnimation.js ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SizeAnimation = void 0;

      var Enums_1 = __webpack_require__(
      /*! ../../../../Enums */
      39666);

      var AnimationOptions_1 = __webpack_require__(
      /*! ../../AnimationOptions */
      15128);

      var SizeAnimation = /*#__PURE__*/function (_AnimationOptions_1$A2) {
        _inherits(SizeAnimation, _AnimationOptions_1$A2);

        var _super30 = _createSuper(SizeAnimation);

        function SizeAnimation() {
          var _this37;

          _classCallCheck(this, SizeAnimation);

          _this37 = _super30.call(this);
          _this37.destroy = Enums_1.DestroyType.none;
          _this37.enable = false;
          _this37.speed = 5;
          _this37.startValue = Enums_1.StartValueType.random;
          _this37.sync = false;
          return _this37;
        }

        _createClass(SizeAnimation, [{
          key: "size_min",
          get: function get() {
            return this.minimumValue;
          },
          set: function set(value) {
            this.minimumValue = value;
          }
        }, {
          key: "load",
          value: function load(data) {
            var _a;

            if (data === undefined) {
              return;
            }

            _get(_getPrototypeOf(SizeAnimation.prototype), "load", this).call(this, data);

            if (data.destroy !== undefined) {
              this.destroy = data.destroy;
            }

            if (data.enable !== undefined) {
              this.enable = data.enable;
            }

            this.minimumValue = (_a = data.minimumValue) !== null && _a !== void 0 ? _a : data.size_min;

            if (data.speed !== undefined) {
              this.speed = data.speed;
            }

            if (data.startValue !== undefined) {
              this.startValue = data.startValue;
            }

            if (data.sync !== undefined) {
              this.sync = data.sync;
            }
          }
        }]);

        return SizeAnimation;
      }(AnimationOptions_1.AnimationOptions);

      exports.SizeAnimation = SizeAnimation;
      /***/
    },

    /***/
    41615:
    /*!**********************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/Stroke.js ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Stroke = void 0;

      var AnimatableColor_1 = __webpack_require__(
      /*! ../AnimatableColor */
      76498);

      var Stroke = /*#__PURE__*/function () {
        function Stroke() {
          _classCallCheck(this, Stroke);

          this.width = 0;
        }

        _createClass(Stroke, [{
          key: "load",
          value: function load(data) {
            if (data === undefined) {
              return;
            }

            if (data.color !== undefined) {
              this.color = AnimatableColor_1.AnimatableColor.create(this.color, data.color);
            }

            if (data.width !== undefined) {
              this.width = data.width;
            }

            if (data.opacity !== undefined) {
              this.opacity = data.opacity;
            }
          }
        }]);

        return Stroke;
      }();

      exports.Stroke = Stroke;
      /***/
    },

    /***/
    11370:
    /*!*************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/Tilt/Tilt.js ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Tilt = void 0;

      var TiltAnimation_1 = __webpack_require__(
      /*! ./TiltAnimation */
      83153);

      var Enums_1 = __webpack_require__(
      /*! ../../../../Enums */
      39666);

      var ValueWithRandom_1 = __webpack_require__(
      /*! ../../ValueWithRandom */
      34794);

      var Tilt = /*#__PURE__*/function (_ValueWithRandom_1$Va12) {
        _inherits(Tilt, _ValueWithRandom_1$Va12);

        var _super31 = _createSuper(Tilt);

        function Tilt() {
          var _this38;

          _classCallCheck(this, Tilt);

          _this38 = _super31.call(this);
          _this38.animation = new TiltAnimation_1.TiltAnimation();
          _this38.direction = Enums_1.TiltDirection.clockwise;
          _this38.enable = false;
          _this38.value = 0;
          return _this38;
        }

        _createClass(Tilt, [{
          key: "load",
          value: function load(data) {
            if (!data) {
              return;
            }

            _get(_getPrototypeOf(Tilt.prototype), "load", this).call(this, data);

            this.animation.load(data.animation);

            if (data.direction !== undefined) {
              this.direction = data.direction;
            }

            if (data.enable !== undefined) {
              this.enable = data.enable;
            }
          }
        }]);

        return Tilt;
      }(ValueWithRandom_1.ValueWithRandom);

      exports.Tilt = Tilt;
      /***/
    },

    /***/
    83153:
    /*!**********************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/Tilt/TiltAnimation.js ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TiltAnimation = void 0;

      var TiltAnimation = /*#__PURE__*/function () {
        function TiltAnimation() {
          _classCallCheck(this, TiltAnimation);

          this.enable = false;
          this.speed = 0;
          this.sync = false;
        }

        _createClass(TiltAnimation, [{
          key: "load",
          value: function load(data) {
            if (data === undefined) {
              return;
            }

            if (data.enable !== undefined) {
              this.enable = data.enable;
            }

            if (data.speed !== undefined) {
              this.speed = data.speed;
            }

            if (data.sync !== undefined) {
              this.sync = data.sync;
            }
          }
        }]);

        return TiltAnimation;
      }();

      exports.TiltAnimation = TiltAnimation;
      /***/
    },

    /***/
    3145:
    /*!*******************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/Twinkle/Twinkle.js ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Twinkle = void 0;

      var TwinkleValues_1 = __webpack_require__(
      /*! ./TwinkleValues */
      29883);

      var Twinkle = /*#__PURE__*/function () {
        function Twinkle() {
          _classCallCheck(this, Twinkle);

          this.lines = new TwinkleValues_1.TwinkleValues();
          this.particles = new TwinkleValues_1.TwinkleValues();
        }

        _createClass(Twinkle, [{
          key: "load",
          value: function load(data) {
            if (data === undefined) {
              return;
            }

            this.lines.load(data.lines);
            this.particles.load(data.particles);
          }
        }]);

        return Twinkle;
      }();

      exports.Twinkle = Twinkle;
      /***/
    },

    /***/
    29883:
    /*!*************************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/Twinkle/TwinkleValues.js ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TwinkleValues = void 0;

      var OptionsColor_1 = __webpack_require__(
      /*! ../../OptionsColor */
      14963);

      var TwinkleValues = /*#__PURE__*/function () {
        function TwinkleValues() {
          _classCallCheck(this, TwinkleValues);

          this.enable = false;
          this.frequency = 0.05;
          this.opacity = 1;
        }

        _createClass(TwinkleValues, [{
          key: "load",
          value: function load(data) {
            if (data === undefined) {
              return;
            }

            if (data.color !== undefined) {
              this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            }

            if (data.enable !== undefined) {
              this.enable = data.enable;
            }

            if (data.frequency !== undefined) {
              this.frequency = data.frequency;
            }

            if (data.opacity !== undefined) {
              this.opacity = data.opacity;
            }
          }
        }]);

        return TwinkleValues;
      }();

      exports.TwinkleValues = TwinkleValues;
      /***/
    },

    /***/
    18842:
    /*!*****************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/Wobble/Wobble.js ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Wobble = void 0;

      var Utils_1 = __webpack_require__(
      /*! ../../../../Utils */
      18942);

      var Wobble = /*#__PURE__*/function () {
        function Wobble() {
          _classCallCheck(this, Wobble);

          this.distance = 5;
          this.enable = false;
          this.speed = 50;
        }

        _createClass(Wobble, [{
          key: "load",
          value: function load(data) {
            if (!data) {
              return;
            }

            if (data.distance !== undefined) {
              this.distance = (0, Utils_1.setRangeValue)(data.distance);
            }

            if (data.enable !== undefined) {
              this.enable = data.enable;
            }

            if (data.speed !== undefined) {
              this.speed = (0, Utils_1.setRangeValue)(data.speed);
            }
          }
        }]);

        return Wobble;
      }();

      exports.Wobble = Wobble;
      /***/
    },

    /***/
    47380:
    /*!*****************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Particles/ZIndex/ZIndex.js ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ZIndex = void 0;

      var ValueWithRandom_1 = __webpack_require__(
      /*! ../../ValueWithRandom */
      34794);

      var ZIndex = /*#__PURE__*/function (_ValueWithRandom_1$Va13) {
        _inherits(ZIndex, _ValueWithRandom_1$Va13);

        var _super32 = _createSuper(ZIndex);

        function ZIndex() {
          var _this39;

          _classCallCheck(this, ZIndex);

          _this39 = _super32.call(this);
          _this39.opacityRate = 1;
          _this39.sizeRate = 1;
          _this39.velocityRate = 1;
          return _this39;
        }

        _createClass(ZIndex, [{
          key: "load",
          value: function load(data) {
            _get(_getPrototypeOf(ZIndex.prototype), "load", this).call(this, data);

            if (!data) {
              return;
            }

            if (data.opacityRate !== undefined) {
              this.opacityRate = data.opacityRate;
            }

            if (data.sizeRate !== undefined) {
              this.sizeRate = data.sizeRate;
            }

            if (data.velocityRate !== undefined) {
              this.velocityRate = data.velocityRate;
            }
          }
        }]);

        return ZIndex;
      }(ValueWithRandom_1.ValueWithRandom);

      exports.ZIndex = ZIndex;
      /***/
    },

    /***/
    82235:
    /*!************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Random.js ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Random = void 0;

      var Random = /*#__PURE__*/function () {
        function Random() {
          _classCallCheck(this, Random);

          this.enable = false;
          this.minimumValue = 0;
        }

        _createClass(Random, [{
          key: "load",
          value: function load(data) {
            if (!data) {
              return;
            }

            if (data.enable !== undefined) {
              this.enable = data.enable;
            }

            if (data.minimumValue !== undefined) {
              this.minimumValue = data.minimumValue;
            }
          }
        }]);

        return Random;
      }();

      exports.Random = Random;
      /***/
    },

    /***/
    92670:
    /*!****************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Responsive.js ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Responsive = void 0;

      var Utils_1 = __webpack_require__(
      /*! ../../Utils */
      18942);

      var Responsive = /*#__PURE__*/function () {
        function Responsive() {
          _classCallCheck(this, Responsive);

          this.maxWidth = Infinity;
          this.options = {};
        }

        _createClass(Responsive, [{
          key: "load",
          value: function load(data) {
            if (!data) {
              return;
            }

            if (data.maxWidth !== undefined) {
              this.maxWidth = data.maxWidth;
            }

            if (data.options !== undefined) {
              this.options = (0, Utils_1.deepExtend)({}, data.options);
            }
          }
        }]);

        return Responsive;
      }();

      exports.Responsive = Responsive;
      /***/
    },

    /***/
    79543:
    /*!*****************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Theme/Theme.js ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Theme = void 0;

      var Utils_1 = __webpack_require__(
      /*! ../../../Utils */
      18942);

      var ThemeDefault_1 = __webpack_require__(
      /*! ./ThemeDefault */
      58315);

      var Theme = /*#__PURE__*/function () {
        function Theme() {
          _classCallCheck(this, Theme);

          this.name = "";
          this["default"] = new ThemeDefault_1.ThemeDefault();
        }

        _createClass(Theme, [{
          key: "load",
          value: function load(data) {
            if (data === undefined) {
              return;
            }

            if (data.name !== undefined) {
              this.name = data.name;
            }

            this["default"].load(data["default"]);

            if (data.options !== undefined) {
              this.options = (0, Utils_1.deepExtend)({}, data.options);
            }
          }
        }]);

        return Theme;
      }();

      exports.Theme = Theme;
      /***/
    },

    /***/
    58315:
    /*!************************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/Theme/ThemeDefault.js ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ThemeDefault = void 0;

      var Enums_1 = __webpack_require__(
      /*! ../../../Enums */
      39666);

      var ThemeDefault = /*#__PURE__*/function () {
        function ThemeDefault() {
          _classCallCheck(this, ThemeDefault);

          this.auto = false;
          this.mode = Enums_1.ThemeMode.any;
          this.value = false;
        }

        _createClass(ThemeDefault, [{
          key: "load",
          value: function load(data) {
            if (!data) {
              return;
            }

            if (data.auto !== undefined) {
              this.auto = data.auto;
            }

            if (data.mode !== undefined) {
              this.mode = data.mode;
            }

            if (data.value !== undefined) {
              this.value = data.value;
            }
          }
        }]);

        return ThemeDefault;
      }();

      exports.ThemeDefault = ThemeDefault;
      /***/
    },

    /***/
    34794:
    /*!*********************************************************************!*\
      !*** ./node_modules/tsparticles/Options/Classes/ValueWithRandom.js ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ValueWithRandom = void 0;

      var Random_1 = __webpack_require__(
      /*! ./Random */
      82235);

      var Utils_1 = __webpack_require__(
      /*! ../../Utils */
      18942);

      var ValueWithRandom = /*#__PURE__*/function () {
        function ValueWithRandom() {
          _classCallCheck(this, ValueWithRandom);

          this.random = new Random_1.Random();
          this.value = 0;
        }

        _createClass(ValueWithRandom, [{
          key: "load",
          value: function load(data) {
            if (!data) {
              return;
            }

            if (typeof data.random === "boolean") {
              this.random.enable = data.random;
            } else {
              this.random.load(data.random);
            }

            if (data.value !== undefined) {
              this.value = (0, Utils_1.setRangeValue)(data.value, this.random.enable ? this.random.minimumValue : undefined);
            }
          }
        }]);

        return ValueWithRandom;
      }();

      exports.ValueWithRandom = ValueWithRandom;
      /***/
    },

    /***/
    88930:
    /*!************************************************************************!*\
      !*** ./node_modules/tsparticles/Plugins/Absorbers/AbsorberInstance.js ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.AbsorberInstance = void 0;

      var Utils_1 = __webpack_require__(
      /*! ../../Utils */
      18942);

      var Vector_1 = __webpack_require__(
      /*! ../../Core/Particle/Vector */
      27440);

      var Enums_1 = __webpack_require__(
      /*! ../../Enums */
      39666);

      var AbsorberInstance = /*#__PURE__*/function () {
        function AbsorberInstance(absorbers, container, options, position) {
          _classCallCheck(this, AbsorberInstance);

          var _a, _b, _c;

          this.absorbers = absorbers;
          this.container = container;
          this.initialPosition = position ? Vector_1.Vector.create(position.x, position.y) : undefined;
          this.options = options;
          this.dragging = false;
          this.name = this.options.name;
          this.opacity = this.options.opacity;
          this.size = (0, Utils_1.getRangeValue)(options.size.value) * container.retina.pixelRatio;
          this.mass = this.size * options.size.density * container.retina.reduceFactor;
          var limit = options.size.limit;
          this.limit = limit !== undefined ? limit * container.retina.pixelRatio * container.retina.reduceFactor : limit;
          var color = typeof options.color === "string" ? {
            value: options.color
          } : options.color;
          this.color = (_a = (0, Utils_1.colorToRgb)(color)) !== null && _a !== void 0 ? _a : {
            b: 0,
            g: 0,
            r: 0
          };
          this.position = (_c = (_b = this.initialPosition) === null || _b === void 0 ? void 0 : _b.copy()) !== null && _c !== void 0 ? _c : this.calcPosition();
        }

        _createClass(AbsorberInstance, [{
          key: "attract",
          value: function attract(particle) {
            var container = this.container;
            var options = this.options;

            if (options.draggable) {
              var mouse = container.interactivity.mouse;

              if (mouse.clicking && mouse.downPosition) {
                var mouseDist = (0, Utils_1.getDistance)(this.position, mouse.downPosition);

                if (mouseDist <= this.size) {
                  this.dragging = true;
                }
              } else {
                this.dragging = false;
              }

              if (this.dragging && mouse.position) {
                this.position.x = mouse.position.x;
                this.position.y = mouse.position.y;
              }
            }

            var pos = particle.getPosition();

            var _ref11 = (0, Utils_1.getDistances)(this.position, pos),
                dx = _ref11.dx,
                dy = _ref11.dy,
                distance = _ref11.distance;

            var v = Vector_1.Vector.create(dx, dy);
            v.length = this.mass / Math.pow(distance, 2) * container.retina.reduceFactor;

            if (distance < this.size + particle.getRadius()) {
              var sizeFactor = particle.getRadius() * 0.033 * container.retina.pixelRatio;

              if (this.size > particle.getRadius() && distance < this.size - particle.getRadius() || particle.absorberOrbit !== undefined && particle.absorberOrbit.length < 0) {
                if (options.destroy) {
                  particle.destroy();
                } else {
                  particle.needsNewPosition = true;
                  this.updateParticlePosition(particle, v);
                }
              } else {
                if (options.destroy) {
                  particle.size.value -= sizeFactor;
                }

                this.updateParticlePosition(particle, v);
              }

              if (this.limit === undefined || this.size < this.limit) {
                this.size += sizeFactor;
              }

              this.mass += sizeFactor * this.options.size.density * container.retina.reduceFactor;
            } else {
              this.updateParticlePosition(particle, v);
            }
          }
        }, {
          key: "resize",
          value: function resize() {
            var initialPosition = this.initialPosition;
            this.position = initialPosition && (0, Utils_1.isPointInside)(initialPosition, this.container.canvas.size) ? initialPosition : this.calcPosition();
          }
        }, {
          key: "draw",
          value: function draw(context) {
            context.translate(this.position.x, this.position.y);
            context.beginPath();
            context.arc(0, 0, this.size, 0, Math.PI * 2, false);
            context.closePath();
            context.fillStyle = (0, Utils_1.getStyleFromRgb)(this.color, this.opacity);
            context.fill();
          }
        }, {
          key: "calcPosition",
          value: function calcPosition() {
            var _a, _b;

            var container = this.container;
            var percentPosition = this.options.position;
            return Vector_1.Vector.create(((_a = percentPosition === null || percentPosition === void 0 ? void 0 : percentPosition.x) !== null && _a !== void 0 ? _a : Math.random() * 100) / 100 * container.canvas.size.width, ((_b = percentPosition === null || percentPosition === void 0 ? void 0 : percentPosition.y) !== null && _b !== void 0 ? _b : Math.random() * 100) / 100 * container.canvas.size.height);
          }
        }, {
          key: "updateParticlePosition",
          value: function updateParticlePosition(particle, v) {
            var _a;

            if (particle.destroyed) {
              return;
            }

            var container = this.container;
            var canvasSize = container.canvas.size;

            if (particle.needsNewPosition) {
              var pSize = particle.getRadius();
              particle.position.x = (canvasSize.width - pSize * 2) * (1 + (Math.random() * 0.2 - 0.1)) + pSize;
              particle.position.y = (canvasSize.height - pSize * 2) * (1 + (Math.random() * 0.2 - 0.1)) + pSize;
              particle.needsNewPosition = false;
            }

            if (this.options.orbits) {
              if (particle.absorberOrbit === undefined) {
                particle.absorberOrbit = Vector_1.Vector.create(0, 0);
                particle.absorberOrbit.length = (0, Utils_1.getDistance)(particle.getPosition(), this.position);
                particle.absorberOrbit.angle = Math.random() * Math.PI * 2;
              }

              if (particle.absorberOrbit.length <= this.size && !this.options.destroy) {
                var minSize = Math.min(canvasSize.width, canvasSize.height);
                particle.absorberOrbit.length = minSize * (1 + (Math.random() * 0.2 - 0.1));
              }

              if (particle.absorberOrbitDirection === undefined) {
                particle.absorberOrbitDirection = particle.velocity.x >= 0 ? Enums_1.RotateDirection.clockwise : Enums_1.RotateDirection.counterClockwise;
              }

              var orbitRadius = particle.absorberOrbit.length;
              var orbitAngle = particle.absorberOrbit.angle;
              var orbitDirection = particle.absorberOrbitDirection;
              particle.velocity.x = 0;
              particle.velocity.y = 0;
              var updateFunc = {
                x: orbitDirection === Enums_1.RotateDirection.clockwise ? Math.cos : Math.sin,
                y: orbitDirection === Enums_1.RotateDirection.clockwise ? Math.sin : Math.cos
              };
              particle.position.x = this.position.x + orbitRadius * updateFunc.x(orbitAngle);
              particle.position.y = this.position.y + orbitRadius * updateFunc.y(orbitAngle);
              particle.absorberOrbit.length -= v.length;
              particle.absorberOrbit.angle += ((_a = particle.retina.moveSpeed) !== null && _a !== void 0 ? _a : 0) * container.retina.pixelRatio / 100 * container.retina.reduceFactor;
            } else {
              var addV = Vector_1.Vector.origin;
              addV.length = v.length;
              addV.angle = v.angle;
              particle.velocity.addTo(addV);
            }
          }
        }]);

        return AbsorberInstance;
      }();

      exports.AbsorberInstance = AbsorberInstance;
      /***/
    },

    /***/
    19557:
    /*!*****************************************************************!*\
      !*** ./node_modules/tsparticles/Plugins/Absorbers/Absorbers.js ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Absorbers = void 0;

      var AbsorberInstance_1 = __webpack_require__(
      /*! ./AbsorberInstance */
      88930);

      var Absorber_1 = __webpack_require__(
      /*! ./Options/Classes/Absorber */
      36693);

      var Enums_1 = __webpack_require__(
      /*! ./Enums */
      23626);

      var Utils_1 = __webpack_require__(
      /*! ../../Utils */
      18942);

      var Absorbers = /*#__PURE__*/function () {
        function Absorbers(container) {
          var _this40 = this;

          _classCallCheck(this, Absorbers);

          this.container = container;
          this.array = [];
          this.absorbers = [];
          this.interactivityAbsorbers = [];
          var overridableContainer = container;

          overridableContainer.getAbsorber = function (idxOrName) {
            return idxOrName === undefined || typeof idxOrName === "number" ? _this40.array[idxOrName || 0] : _this40.array.find(function (t) {
              return t.name === idxOrName;
            });
          };

          overridableContainer.addAbsorber = function (options, position) {
            return _this40.addAbsorber(options, position);
          };
        }

        _createClass(Absorbers, [{
          key: "init",
          value: function init(options) {
            var _a, _b;

            if (!options) {
              return;
            }

            if (options.absorbers) {
              if (options.absorbers instanceof Array) {
                this.absorbers = options.absorbers.map(function (s) {
                  var tmp = new Absorber_1.Absorber();
                  tmp.load(s);
                  return tmp;
                });
              } else {
                if (this.absorbers instanceof Array) {
                  this.absorbers = new Absorber_1.Absorber();
                }

                this.absorbers.load(options.absorbers);
              }
            }

            var interactivityAbsorbers = (_b = (_a = options.interactivity) === null || _a === void 0 ? void 0 : _a.modes) === null || _b === void 0 ? void 0 : _b.absorbers;

            if (interactivityAbsorbers) {
              if (interactivityAbsorbers instanceof Array) {
                this.interactivityAbsorbers = interactivityAbsorbers.map(function (s) {
                  var tmp = new Absorber_1.Absorber();
                  tmp.load(s);
                  return tmp;
                });
              } else {
                if (this.interactivityAbsorbers instanceof Array) {
                  this.interactivityAbsorbers = new Absorber_1.Absorber();
                }

                this.interactivityAbsorbers.load(interactivityAbsorbers);
              }
            }

            if (this.absorbers instanceof Array) {
              var _iterator57 = _createForOfIteratorHelper(this.absorbers),
                  _step57;

              try {
                for (_iterator57.s(); !(_step57 = _iterator57.n()).done;) {
                  var absorberOptions = _step57.value;
                  this.addAbsorber(absorberOptions);
                }
              } catch (err) {
                _iterator57.e(err);
              } finally {
                _iterator57.f();
              }
            } else {
              this.addAbsorber(this.absorbers);
            }
          }
        }, {
          key: "particleUpdate",
          value: function particleUpdate(particle) {
            var _iterator58 = _createForOfIteratorHelper(this.array),
                _step58;

            try {
              for (_iterator58.s(); !(_step58 = _iterator58.n()).done;) {
                var absorber = _step58.value;
                absorber.attract(particle);

                if (particle.destroyed) {
                  break;
                }
              }
            } catch (err) {
              _iterator58.e(err);
            } finally {
              _iterator58.f();
            }
          }
        }, {
          key: "draw",
          value: function draw(context) {
            var _iterator59 = _createForOfIteratorHelper(this.array),
                _step59;

            try {
              for (_iterator59.s(); !(_step59 = _iterator59.n()).done;) {
                var absorber = _step59.value;
                context.save();
                absorber.draw(context);
                context.restore();
              }
            } catch (err) {
              _iterator59.e(err);
            } finally {
              _iterator59.f();
            }
          }
        }, {
          key: "stop",
          value: function stop() {
            this.array = [];
          }
        }, {
          key: "resize",
          value: function resize() {
            var _iterator60 = _createForOfIteratorHelper(this.array),
                _step60;

            try {
              for (_iterator60.s(); !(_step60 = _iterator60.n()).done;) {
                var absorber = _step60.value;
                absorber.resize();
              }
            } catch (err) {
              _iterator60.e(err);
            } finally {
              _iterator60.f();
            }
          }
        }, {
          key: "handleClickMode",
          value: function handleClickMode(mode) {
            var container = this.container;
            var absorberOptions = this.absorbers;
            var modeAbsorbers = this.interactivityAbsorbers;

            if (mode === Enums_1.AbsorberClickMode.absorber) {
              var absorbersModeOptions;

              if (modeAbsorbers instanceof Array) {
                if (modeAbsorbers.length > 0) {
                  absorbersModeOptions = (0, Utils_1.itemFromArray)(modeAbsorbers);
                }
              } else {
                absorbersModeOptions = modeAbsorbers;
              }

              var absorbersOptions = absorbersModeOptions !== null && absorbersModeOptions !== void 0 ? absorbersModeOptions : absorberOptions instanceof Array ? (0, Utils_1.itemFromArray)(absorberOptions) : absorberOptions;
              var aPosition = container.interactivity.mouse.clickPosition;
              this.addAbsorber(absorbersOptions, aPosition);
            }
          }
        }, {
          key: "addAbsorber",
          value: function addAbsorber(options, position) {
            var absorber = new AbsorberInstance_1.AbsorberInstance(this, this.container, options, position);
            this.array.push(absorber);
            return absorber;
          }
        }, {
          key: "removeAbsorber",
          value: function removeAbsorber(absorber) {
            var index = this.array.indexOf(absorber);

            if (index >= 0) {
              this.array.splice(index, 1);
            }
          }
        }]);

        return Absorbers;
      }();

      exports.Absorbers = Absorbers;
      /***/
    },

    /***/
    67652:
    /*!*******************************************************************************!*\
      !*** ./node_modules/tsparticles/Plugins/Absorbers/Enums/AbsorberClickMode.js ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.AbsorberClickMode = void 0;
      var AbsorberClickMode;

      (function (AbsorberClickMode) {
        AbsorberClickMode["absorber"] = "absorber";
      })(AbsorberClickMode = exports.AbsorberClickMode || (exports.AbsorberClickMode = {}));
      /***/

    },

    /***/
    23626:
    /*!*******************************************************************!*\
      !*** ./node_modules/tsparticles/Plugins/Absorbers/Enums/index.js ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function get() {
            return m[k];
          }
        });
      } : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });

      var __exportStar = this && this.__exportStar || function (m, exports) {
        for (var p in m) {
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
        }
      };

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __exportStar(__webpack_require__(
      /*! ./AbsorberClickMode */
      67652), exports);
      /***/

    },

    /***/
    36693:
    /*!********************************************************************************!*\
      !*** ./node_modules/tsparticles/Plugins/Absorbers/Options/Classes/Absorber.js ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Absorber = void 0;

      var AbsorberSize_1 = __webpack_require__(
      /*! ./AbsorberSize */
      39675);

      var OptionsColor_1 = __webpack_require__(
      /*! ../../../../Options/Classes/OptionsColor */
      14963);

      var Absorber = /*#__PURE__*/function () {
        function Absorber() {
          _classCallCheck(this, Absorber);

          this.color = new OptionsColor_1.OptionsColor();
          this.color.value = "#000000";
          this.draggable = false;
          this.opacity = 1;
          this.destroy = true;
          this.orbits = false;
          this.size = new AbsorberSize_1.AbsorberSize();
        }

        _createClass(Absorber, [{
          key: "load",
          value: function load(data) {
            if (data === undefined) {
              return;
            }

            if (data.color !== undefined) {
              this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            }

            if (data.draggable !== undefined) {
              this.draggable = data.draggable;
            }

            this.name = data.name;

            if (data.opacity !== undefined) {
              this.opacity = data.opacity;
            }

            if (data.position !== undefined) {
              this.position = {
                x: data.position.x,
                y: data.position.y
              };
            }

            if (data.size !== undefined) {
              this.size.load(data.size);
            }

            if (data.destroy !== undefined) {
              this.destroy = data.destroy;
            }

            if (data.orbits !== undefined) {
              this.orbits = data.orbits;
            }
          }
        }]);

        return Absorber;
      }();

      exports.Absorber = Absorber;
      /***/
    },

    /***/
    39675:
    /*!************************************************************************************!*\
      !*** ./node_modules/tsparticles/Plugins/Absorbers/Options/Classes/AbsorberSize.js ***!
      \************************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.AbsorberSize = void 0;

      var ValueWithRandom_1 = __webpack_require__(
      /*! ../../../../Options/Classes/ValueWithRandom */
      34794);

      var AbsorberSize = /*#__PURE__*/function (_ValueWithRandom_1$Va14) {
        _inherits(AbsorberSize, _ValueWithRandom_1$Va14);

        var _super33 = _createSuper(AbsorberSize);

        function AbsorberSize() {
          var _this41;

          _classCallCheck(this, AbsorberSize);

          _this41 = _super33.call(this);
          _this41.density = 5;
          _this41.random.minimumValue = 1;
          _this41.value = 50;
          return _this41;
        }

        _createClass(AbsorberSize, [{
          key: "load",
          value: function load(data) {
            if (!data) {
              return;
            }

            _get(_getPrototypeOf(AbsorberSize.prototype), "load", this).call(this, data);

            if (data.density !== undefined) {
              this.density = data.density;
            }

            if (data.limit !== undefined) {
              this.limit = data.limit;
            }

            if (data.limit !== undefined) {
              this.limit = data.limit;
            }
          }
        }]);

        return AbsorberSize;
      }(ValueWithRandom_1.ValueWithRandom);

      exports.AbsorberSize = AbsorberSize;
      /***/
    },

    /***/
    35150:
    /*!**************************************************************!*\
      !*** ./node_modules/tsparticles/Plugins/Absorbers/plugin.js ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.loadAbsorbersPlugin = void 0;

      var Absorbers_1 = __webpack_require__(
      /*! ./Absorbers */
      19557);

      var Enums_1 = __webpack_require__(
      /*! ./Enums */
      23626);

      var Absorber_1 = __webpack_require__(
      /*! ./Options/Classes/Absorber */
      36693);

      var Utils_1 = __webpack_require__(
      /*! ../../Utils */
      18942);

      var Plugin = /*#__PURE__*/function () {
        function Plugin() {
          _classCallCheck(this, Plugin);

          this.id = "absorbers";
        }

        _createClass(Plugin, [{
          key: "getPlugin",
          value: function getPlugin(container) {
            return new Absorbers_1.Absorbers(container);
          }
        }, {
          key: "needsPlugin",
          value: function needsPlugin(options) {
            var _a, _b, _c;

            if (options === undefined) {
              return false;
            }

            var absorbers = options.absorbers;
            var loadAbsorbers = false;

            if (absorbers instanceof Array) {
              if (absorbers.length) {
                loadAbsorbers = true;
              }
            } else if (absorbers !== undefined) {
              loadAbsorbers = true;
            } else if (((_c = (_b = (_a = options.interactivity) === null || _a === void 0 ? void 0 : _a.events) === null || _b === void 0 ? void 0 : _b.onClick) === null || _c === void 0 ? void 0 : _c.mode) && (0, Utils_1.isInArray)(Enums_1.AbsorberClickMode.absorber, options.interactivity.events.onClick.mode)) {
              loadAbsorbers = true;
            }

            return loadAbsorbers;
          }
        }, {
          key: "loadOptions",
          value: function loadOptions(options, source) {
            var _a, _b;

            if (!this.needsPlugin(options) && !this.needsPlugin(source)) {
              return;
            }

            var optionsCast = options;

            if (source === null || source === void 0 ? void 0 : source.absorbers) {
              if ((source === null || source === void 0 ? void 0 : source.absorbers) instanceof Array) {
                optionsCast.absorbers = source === null || source === void 0 ? void 0 : source.absorbers.map(function (s) {
                  var tmp = new Absorber_1.Absorber();
                  tmp.load(s);
                  return tmp;
                });
              } else {
                var absorberOptions = optionsCast.absorbers;

                if ((absorberOptions === null || absorberOptions === void 0 ? void 0 : absorberOptions.load) === undefined) {
                  optionsCast.absorbers = absorberOptions = new Absorber_1.Absorber();
                }

                absorberOptions.load(source === null || source === void 0 ? void 0 : source.absorbers);
              }
            }

            var interactivityAbsorbers = (_b = (_a = source === null || source === void 0 ? void 0 : source.interactivity) === null || _a === void 0 ? void 0 : _a.modes) === null || _b === void 0 ? void 0 : _b.absorbers;

            if (interactivityAbsorbers) {
              if (interactivityAbsorbers instanceof Array) {
                optionsCast.interactivity.modes.absorbers = interactivityAbsorbers.map(function (s) {
                  var tmp = new Absorber_1.Absorber();
                  tmp.load(s);
                  return tmp;
                });
              } else {
                var _absorberOptions = optionsCast.interactivity.modes.absorbers;

                if ((_absorberOptions === null || _absorberOptions === void 0 ? void 0 : _absorberOptions.load) === undefined) {
                  optionsCast.interactivity.modes.absorbers = _absorberOptions = new Absorber_1.Absorber();
                }

                _absorberOptions.load(interactivityAbsorbers);
              }
            }
          }
        }]);

        return Plugin;
      }();

      function loadAbsorbersPlugin(tsParticles) {
        var plugin = new Plugin();
        tsParticles.addPlugin(plugin);
      }

      exports.loadAbsorbersPlugin = loadAbsorbersPlugin;
      /***/
    },

    /***/
    12778:
    /*!**********************************************************************!*\
      !*** ./node_modules/tsparticles/Plugins/Emitters/EmitterInstance.js ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      var __classPrivateFieldSet = this && this.__classPrivateFieldSet || function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
      };

      var __classPrivateFieldGet = this && this.__classPrivateFieldGet || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      };

      var _EmitterInstance_firstSpawn, _EmitterInstance_startParticlesAdded;

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.EmitterInstance = void 0;

      var Utils_1 = __webpack_require__(
      /*! ../../Utils */
      18942);

      var Enums_1 = __webpack_require__(
      /*! ../../Enums */
      39666);

      var EmitterSize_1 = __webpack_require__(
      /*! ./Options/Classes/EmitterSize */
      13220);

      var ShapeManager_1 = __webpack_require__(
      /*! ./ShapeManager */
      12986);

      var EmitterInstance = /*#__PURE__*/function () {
        function EmitterInstance(emitters, container, emitterOptions, position) {
          _classCallCheck(this, EmitterInstance);

          var _a, _b, _c, _d, _e, _f;

          var _g;

          this.emitters = emitters;
          this.container = container;

          _EmitterInstance_firstSpawn.set(this, void 0);

          _EmitterInstance_startParticlesAdded.set(this, void 0);

          this.currentDuration = 0;
          this.currentEmitDelay = 0;
          this.currentSpawnDelay = 0;
          this.initialPosition = position;
          this.emitterOptions = (0, Utils_1.deepExtend)({}, emitterOptions);
          this.spawnDelay = ((_a = this.emitterOptions.life.delay) !== null && _a !== void 0 ? _a : 0) * 1000 / this.container.retina.reduceFactor;
          this.position = (_b = this.initialPosition) !== null && _b !== void 0 ? _b : this.calcPosition();
          this.name = emitterOptions.name;
          this.shape = ShapeManager_1.ShapeManager.getShape(emitterOptions.shape);
          this.fill = emitterOptions.fill;

          __classPrivateFieldSet(this, _EmitterInstance_firstSpawn, !this.emitterOptions.life.wait, "f");

          __classPrivateFieldSet(this, _EmitterInstance_startParticlesAdded, false, "f");

          var particlesOptions = (0, Utils_1.deepExtend)({}, this.emitterOptions.particles);
          particlesOptions !== null && particlesOptions !== void 0 ? particlesOptions : particlesOptions = {};
          (_c = particlesOptions.move) !== null && _c !== void 0 ? _c : particlesOptions.move = {};
          (_d = (_g = particlesOptions.move).direction) !== null && _d !== void 0 ? _d : _g.direction = this.emitterOptions.direction;

          if (this.emitterOptions.spawnColor !== undefined) {
            this.spawnColor = (0, Utils_1.colorToHsl)(this.emitterOptions.spawnColor);
          }

          this.paused = !this.emitterOptions.autoPlay;
          this.particlesOptions = particlesOptions;
          this.size = (_e = this.emitterOptions.size) !== null && _e !== void 0 ? _e : function () {
            var size = new EmitterSize_1.EmitterSize();
            size.load({
              height: 0,
              mode: Enums_1.SizeMode.percent,
              width: 0
            });
            return size;
          }();
          this.lifeCount = (_f = this.emitterOptions.life.count) !== null && _f !== void 0 ? _f : -1;
          this.immortal = this.lifeCount <= 0;
          this.play();
        }

        _createClass(EmitterInstance, [{
          key: "externalPlay",
          value: function externalPlay() {
            this.paused = false;
            this.play();
          }
        }, {
          key: "externalPause",
          value: function externalPause() {
            this.paused = true;
            this.pause();
          }
        }, {
          key: "play",
          value: function play() {
            var _a;

            if (this.paused) {
              return;
            }

            if (this.container.retina.reduceFactor && (this.lifeCount > 0 || this.immortal || !this.emitterOptions.life.count) && (__classPrivateFieldGet(this, _EmitterInstance_firstSpawn, "f") || this.currentSpawnDelay >= ((_a = this.spawnDelay) !== null && _a !== void 0 ? _a : 0))) {
              if (this.emitDelay === undefined) {
                var delay = (0, Utils_1.getRangeValue)(this.emitterOptions.rate.delay);
                this.emitDelay = 1000 * delay / this.container.retina.reduceFactor;
              }

              if (this.lifeCount > 0 || this.immortal) {
                this.prepareToDie();
              }
            }
          }
        }, {
          key: "pause",
          value: function pause() {
            if (this.paused) {
              return;
            }

            delete this.emitDelay;
          }
        }, {
          key: "resize",
          value: function resize() {
            var initialPosition = this.initialPosition;
            this.position = initialPosition && (0, Utils_1.isPointInside)(initialPosition, this.container.canvas.size) ? initialPosition : this.calcPosition();
          }
        }, {
          key: "update",
          value: function update(delta) {
            var _a, _b, _c;

            if (this.paused) {
              return;
            }

            if (__classPrivateFieldGet(this, _EmitterInstance_firstSpawn, "f")) {
              __classPrivateFieldSet(this, _EmitterInstance_firstSpawn, false, "f");

              this.currentSpawnDelay = (_a = this.spawnDelay) !== null && _a !== void 0 ? _a : 0;
              this.currentEmitDelay = (_b = this.emitDelay) !== null && _b !== void 0 ? _b : 0;
            }

            if (!__classPrivateFieldGet(this, _EmitterInstance_startParticlesAdded, "f")) {
              __classPrivateFieldSet(this, _EmitterInstance_startParticlesAdded, true, "f");

              this.emitParticles(this.emitterOptions.startCount);
            }

            if (this.duration !== undefined) {
              this.currentDuration += delta.value;

              if (this.currentDuration >= this.duration) {
                this.pause();

                if (this.spawnDelay !== undefined) {
                  delete this.spawnDelay;
                }

                if (!this.immortal) {
                  this.lifeCount--;
                }

                if (this.lifeCount > 0 || this.immortal) {
                  this.position = this.calcPosition();
                  this.spawnDelay = ((_c = this.emitterOptions.life.delay) !== null && _c !== void 0 ? _c : 0) * 1000 / this.container.retina.reduceFactor;
                } else {
                  this.destroy();
                }

                this.currentDuration -= this.duration;
                delete this.duration;
              }
            }

            if (this.spawnDelay !== undefined) {
              this.currentSpawnDelay += delta.value;

              if (this.currentSpawnDelay >= this.spawnDelay) {
                this.play();
                this.currentSpawnDelay -= this.currentSpawnDelay;
                delete this.spawnDelay;
              }
            }

            if (this.emitDelay !== undefined) {
              this.currentEmitDelay += delta.value;

              if (this.currentEmitDelay >= this.emitDelay) {
                this.emit();
                this.currentEmitDelay -= this.emitDelay;
              }
            }
          }
        }, {
          key: "prepareToDie",
          value: function prepareToDie() {
            var _a;

            if (this.paused) {
              return;
            }

            var duration = (_a = this.emitterOptions.life) === null || _a === void 0 ? void 0 : _a.duration;

            if (this.container.retina.reduceFactor && (this.lifeCount > 0 || this.immortal) && duration !== undefined && duration > 0) {
              this.duration = duration * 1000;
            }
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this.emitters.removeEmitter(this);
          }
        }, {
          key: "calcPosition",
          value: function calcPosition() {
            var _a, _b;

            var container = this.container;
            var percentPosition = this.emitterOptions.position;
            return {
              x: ((_a = percentPosition === null || percentPosition === void 0 ? void 0 : percentPosition.x) !== null && _a !== void 0 ? _a : Math.random() * 100) / 100 * container.canvas.size.width,
              y: ((_b = percentPosition === null || percentPosition === void 0 ? void 0 : percentPosition.y) !== null && _b !== void 0 ? _b : Math.random() * 100) / 100 * container.canvas.size.height
            };
          }
        }, {
          key: "emit",
          value: function emit() {
            if (this.paused) {
              return;
            }

            var quantity = (0, Utils_1.getRangeValue)(this.emitterOptions.rate.quantity);
            this.emitParticles(quantity);
          }
        }, {
          key: "emitParticles",
          value: function emitParticles(quantity) {
            var _a, _b, _c;

            var container = this.container;
            var position = this.position;
            var offset = {
              x: this.size.mode === Enums_1.SizeMode.percent ? container.canvas.size.width * this.size.width / 100 : this.size.width,
              y: this.size.mode === Enums_1.SizeMode.percent ? container.canvas.size.height * this.size.height / 100 : this.size.height
            };

            for (var i = 0; i < quantity; i++) {
              var particlesOptions = (0, Utils_1.deepExtend)({}, this.particlesOptions);

              if (this.spawnColor) {
                var colorAnimation = (_a = this.emitterOptions.spawnColor) === null || _a === void 0 ? void 0 : _a.animation;

                if (colorAnimation) {
                  var hueAnimation = colorAnimation;

                  if (hueAnimation.enable) {
                    this.spawnColor.h = this.setColorAnimation(hueAnimation, this.spawnColor.h, 360);
                  } else {
                    var hslAnimation = colorAnimation;
                    this.spawnColor.h = this.setColorAnimation(hslAnimation.h, this.spawnColor.h, 360);
                    this.spawnColor.s = this.setColorAnimation(hslAnimation.s, this.spawnColor.s, 100);
                    this.spawnColor.l = this.setColorAnimation(hslAnimation.l, this.spawnColor.l, 100);
                  }
                }

                if (!particlesOptions.color) {
                  particlesOptions.color = {
                    value: this.spawnColor
                  };
                } else {
                  particlesOptions.color.value = this.spawnColor;
                }
              }

              var pPosition = (_c = (_b = this.shape) === null || _b === void 0 ? void 0 : _b.randomPosition(position, offset, this.fill)) !== null && _c !== void 0 ? _c : position;
              container.particles.addParticle(pPosition, particlesOptions);
            }
          }
        }, {
          key: "setColorAnimation",
          value: function setColorAnimation(animation, initValue, maxValue) {
            var _a;

            var container = this.container;

            if (!animation.enable) {
              return initValue;
            }

            var colorOffset = (0, Utils_1.randomInRange)(animation.offset);
            var delay = (0, Utils_1.getRangeValue)(this.emitterOptions.rate.delay);
            var emitFactor = 1000 * delay / container.retina.reduceFactor;
            var colorSpeed = (_a = animation.speed) !== null && _a !== void 0 ? _a : 0;
            return (initValue + colorSpeed * container.fpsLimit / emitFactor + colorOffset * 3.6) % maxValue;
          }
        }]);

        return EmitterInstance;
      }();

      exports.EmitterInstance = EmitterInstance;
      _EmitterInstance_firstSpawn = new WeakMap(), _EmitterInstance_startParticlesAdded = new WeakMap();
      /***/
    },

    /***/
    771:
    /*!***************************************************************!*\
      !*** ./node_modules/tsparticles/Plugins/Emitters/Emitters.js ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Emitters = void 0;

      var EmitterInstance_1 = __webpack_require__(
      /*! ./EmitterInstance */
      12778);

      var Emitter_1 = __webpack_require__(
      /*! ./Options/Classes/Emitter */
      35678);

      var Enums_1 = __webpack_require__(
      /*! ./Enums */
      52405);

      var Utils_1 = __webpack_require__(
      /*! ../../Utils */
      18942);

      var Emitters = /*#__PURE__*/function () {
        function Emitters(container) {
          var _this42 = this;

          _classCallCheck(this, Emitters);

          this.container = container;
          this.array = [];
          this.emitters = [];
          this.interactivityEmitters = [];
          var overridableContainer = container;

          overridableContainer.getEmitter = function (idxOrName) {
            return idxOrName === undefined || typeof idxOrName === "number" ? _this42.array[idxOrName || 0] : _this42.array.find(function (t) {
              return t.name === idxOrName;
            });
          };

          overridableContainer.addEmitter = function (options, position) {
            return _this42.addEmitter(options, position);
          };

          overridableContainer.playEmitter = function (idxOrName) {
            var emitter = overridableContainer.getEmitter(idxOrName);

            if (emitter) {
              emitter.externalPlay();
            }
          };

          overridableContainer.pauseEmitter = function (idxOrName) {
            var emitter = overridableContainer.getEmitter(idxOrName);

            if (emitter) {
              emitter.externalPause();
            }
          };
        }

        _createClass(Emitters, [{
          key: "init",
          value: function init(options) {
            var _a, _b;

            if (!options) {
              return;
            }

            if (options.emitters) {
              if (options.emitters instanceof Array) {
                this.emitters = options.emitters.map(function (s) {
                  var tmp = new Emitter_1.Emitter();
                  tmp.load(s);
                  return tmp;
                });
              } else {
                if (this.emitters instanceof Array) {
                  this.emitters = new Emitter_1.Emitter();
                }

                this.emitters.load(options.emitters);
              }
            }

            var interactivityEmitters = (_b = (_a = options.interactivity) === null || _a === void 0 ? void 0 : _a.modes) === null || _b === void 0 ? void 0 : _b.emitters;

            if (interactivityEmitters) {
              if (interactivityEmitters instanceof Array) {
                this.interactivityEmitters = interactivityEmitters.map(function (s) {
                  var tmp = new Emitter_1.Emitter();
                  tmp.load(s);
                  return tmp;
                });
              } else {
                if (this.interactivityEmitters instanceof Array) {
                  this.interactivityEmitters = new Emitter_1.Emitter();
                }

                this.interactivityEmitters.load(interactivityEmitters);
              }
            }

            if (this.emitters instanceof Array) {
              var _iterator61 = _createForOfIteratorHelper(this.emitters),
                  _step61;

              try {
                for (_iterator61.s(); !(_step61 = _iterator61.n()).done;) {
                  var emitterOptions = _step61.value;
                  this.addEmitter(emitterOptions);
                }
              } catch (err) {
                _iterator61.e(err);
              } finally {
                _iterator61.f();
              }
            } else {
              this.addEmitter(this.emitters);
            }
          }
        }, {
          key: "play",
          value: function play() {
            var _iterator62 = _createForOfIteratorHelper(this.array),
                _step62;

            try {
              for (_iterator62.s(); !(_step62 = _iterator62.n()).done;) {
                var emitter = _step62.value;
                emitter.play();
              }
            } catch (err) {
              _iterator62.e(err);
            } finally {
              _iterator62.f();
            }
          }
        }, {
          key: "pause",
          value: function pause() {
            var _iterator63 = _createForOfIteratorHelper(this.array),
                _step63;

            try {
              for (_iterator63.s(); !(_step63 = _iterator63.n()).done;) {
                var emitter = _step63.value;
                emitter.pause();
              }
            } catch (err) {
              _iterator63.e(err);
            } finally {
              _iterator63.f();
            }
          }
        }, {
          key: "stop",
          value: function stop() {
            this.array = [];
          }
        }, {
          key: "update",
          value: function update(delta) {
            var _iterator64 = _createForOfIteratorHelper(this.array),
                _step64;

            try {
              for (_iterator64.s(); !(_step64 = _iterator64.n()).done;) {
                var emitter = _step64.value;
                emitter.update(delta);
              }
            } catch (err) {
              _iterator64.e(err);
            } finally {
              _iterator64.f();
            }
          }
        }, {
          key: "handleClickMode",
          value: function handleClickMode(mode) {
            var container = this.container;
            var emitterOptions = this.emitters;
            var modeEmitters = this.interactivityEmitters;

            if (mode === Enums_1.EmitterClickMode.emitter) {
              var emitterModeOptions;

              if (modeEmitters instanceof Array) {
                if (modeEmitters.length > 0) {
                  emitterModeOptions = (0, Utils_1.itemFromArray)(modeEmitters);
                }
              } else {
                emitterModeOptions = modeEmitters;
              }

              var emittersOptions = emitterModeOptions !== null && emitterModeOptions !== void 0 ? emitterModeOptions : emitterOptions instanceof Array ? (0, Utils_1.itemFromArray)(emitterOptions) : emitterOptions;
              var ePosition = container.interactivity.mouse.clickPosition;
              this.addEmitter((0, Utils_1.deepExtend)({}, emittersOptions), ePosition);
            }
          }
        }, {
          key: "resize",
          value: function resize() {
            var _iterator65 = _createForOfIteratorHelper(this.array),
                _step65;

            try {
              for (_iterator65.s(); !(_step65 = _iterator65.n()).done;) {
                var emitter = _step65.value;
                emitter.resize();
              }
            } catch (err) {
              _iterator65.e(err);
            } finally {
              _iterator65.f();
            }
          }
        }, {
          key: "addEmitter",
          value: function addEmitter(options, position) {
            var emitter = new EmitterInstance_1.EmitterInstance(this, this.container, options, position);
            this.array.push(emitter);
            return emitter;
          }
        }, {
          key: "removeEmitter",
          value: function removeEmitter(emitter) {
            var index = this.array.indexOf(emitter);

            if (index >= 0) {
              this.array.splice(index, 1);
            }
          }
        }]);

        return Emitters;
      }();

      exports.Emitters = Emitters;
      /***/
    },

    /***/
    56476:
    /*!*******************************************************************!*\
      !*** ./node_modules/tsparticles/Plugins/Emitters/EmittersMain.js ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /***/
    },

    /***/
    58351:
    /*!*****************************************************************************!*\
      !*** ./node_modules/tsparticles/Plugins/Emitters/Enums/EmitterClickMode.js ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.EmitterClickMode = void 0;
      var EmitterClickMode;

      (function (EmitterClickMode) {
        EmitterClickMode["emitter"] = "emitter";
      })(EmitterClickMode = exports.EmitterClickMode || (exports.EmitterClickMode = {}));
      /***/

    },

    /***/
    83732:
    /*!*****************************************************************************!*\
      !*** ./node_modules/tsparticles/Plugins/Emitters/Enums/EmitterShapeType.js ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.EmitterShapeType = void 0;
      var EmitterShapeType;

      (function (EmitterShapeType) {
        EmitterShapeType["circle"] = "circle";
        EmitterShapeType["square"] = "square";
      })(EmitterShapeType = exports.EmitterShapeType || (exports.EmitterShapeType = {}));
      /***/

    },

    /***/
    52405:
    /*!******************************************************************!*\
      !*** ./node_modules/tsparticles/Plugins/Emitters/Enums/index.js ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function get() {
            return m[k];
          }
        });
      } : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });

      var __exportStar = this && this.__exportStar || function (m, exports) {
        for (var p in m) {
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
        }
      };

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __exportStar(__webpack_require__(
      /*! ./EmitterClickMode */
      58351), exports);

      __exportStar(__webpack_require__(
      /*! ./EmitterShapeType */
      83732), exports);
      /***/

    },

    /***/
    35678:
    /*!******************************************************************************!*\
      !*** ./node_modules/tsparticles/Plugins/Emitters/Options/Classes/Emitter.js ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Emitter = void 0;

      var EmitterRate_1 = __webpack_require__(
      /*! ./EmitterRate */
      49091);

      var EmitterLife_1 = __webpack_require__(
      /*! ./EmitterLife */
      56605);

      var Utils_1 = __webpack_require__(
      /*! ../../../../Utils */
      18942);

      var EmitterSize_1 = __webpack_require__(
      /*! ./EmitterSize */
      13220);

      var AnimatableColor_1 = __webpack_require__(
      /*! ../../../../Options/Classes/AnimatableColor */
      76498);

      var Enums_1 = __webpack_require__(
      /*! ../../Enums */
      52405);

      var Emitter = /*#__PURE__*/function () {
        function Emitter() {
          _classCallCheck(this, Emitter);

          this.autoPlay = true;
          this.fill = true;
          this.life = new EmitterLife_1.EmitterLife();
          this.rate = new EmitterRate_1.EmitterRate();
          this.shape = Enums_1.EmitterShapeType.square;
          this.startCount = 0;
        }

        _createClass(Emitter, [{
          key: "load",
          value: function load(data) {
            if (data === undefined) {
              return;
            }

            if (data.autoPlay !== undefined) {
              this.autoPlay = data.autoPlay;
            }

            if (data.size !== undefined) {
              if (this.size === undefined) {
                this.size = new EmitterSize_1.EmitterSize();
              }

              this.size.load(data.size);
            }

            if (data.direction !== undefined) {
              this.direction = data.direction;
            }

            if (data.fill !== undefined) {
              this.fill = data.fill;
            }

            this.life.load(data.life);
            this.name = data.name;

            if (data.particles !== undefined) {
              this.particles = (0, Utils_1.deepExtend)({}, data.particles);
            }

            this.rate.load(data.rate);

            if (data.shape !== undefined) {
              this.shape = data.shape;
            }

            if (data.position !== undefined) {
              this.position = {
                x: data.position.x,
                y: data.position.y
              };
            }

            if (data.spawnColor !== undefined) {
              if (this.spawnColor === undefined) {
                this.spawnColor = new AnimatableColor_1.AnimatableColor();
              }

              this.spawnColor.load(data.spawnColor);
            }

            if (data.startCount !== undefined) {
              this.startCount = data.startCount;
            }
          }
        }]);

        return Emitter;
      }();

      exports.Emitter = Emitter;
      /***/
    },

    /***/
    56605:
    /*!**********************************************************************************!*\
      !*** ./node_modules/tsparticles/Plugins/Emitters/Options/Classes/EmitterLife.js ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.EmitterLife = void 0;

      var EmitterLife = /*#__PURE__*/function () {
        function EmitterLife() {
          _classCallCheck(this, EmitterLife);

          this.wait = false;
        }

        _createClass(EmitterLife, [{
          key: "load",
          value: function load(data) {
            if (data === undefined) {
              return;
            }

            if (data.count !== undefined) {
              this.count = data.count;
            }

            if (data.delay !== undefined) {
              this.delay = data.delay;
            }

            if (data.duration !== undefined) {
              this.duration = data.duration;
            }

            if (data.wait !== undefined) {
              this.wait = data.wait;
            }
          }
        }]);

        return EmitterLife;
      }();

      exports.EmitterLife = EmitterLife;
      /***/
    },

    /***/
    49091:
    /*!**********************************************************************************!*\
      !*** ./node_modules/tsparticles/Plugins/Emitters/Options/Classes/EmitterRate.js ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.EmitterRate = void 0;

      var Utils_1 = __webpack_require__(
      /*! ../../../../Utils */
      18942);

      var EmitterRate = /*#__PURE__*/function () {
        function EmitterRate() {
          _classCallCheck(this, EmitterRate);

          this.quantity = 1;
          this.delay = 0.1;
        }

        _createClass(EmitterRate, [{
          key: "load",
          value: function load(data) {
            if (data === undefined) {
              return;
            }

            if (data.quantity !== undefined) {
              this.quantity = (0, Utils_1.setRangeValue)(data.quantity);
            }

            if (data.delay !== undefined) {
              this.delay = (0, Utils_1.setRangeValue)(data.delay);
            }
          }
        }]);

        return EmitterRate;
      }();

      exports.EmitterRate = EmitterRate;
      /***/
    },

    /***/
    13220:
    /*!**********************************************************************************!*\
      !*** ./node_modules/tsparticles/Plugins/Emitters/Options/Classes/EmitterSize.js ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.EmitterSize = void 0;

      var Enums_1 = __webpack_require__(
      /*! ../../../../Enums */
      39666);

      var EmitterSize = /*#__PURE__*/function () {
        function EmitterSize() {
          _classCallCheck(this, EmitterSize);

          this.mode = Enums_1.SizeMode.percent;
          this.height = 0;
          this.width = 0;
        }

        _createClass(EmitterSize, [{
          key: "load",
          value: function load(data) {
            if (data === undefined) {
              return;
            }

            if (data.mode !== undefined) {
              this.mode = data.mode;
            }

            if (data.height !== undefined) {
              this.height = data.height;
            }

            if (data.width !== undefined) {
              this.width = data.width;
            }
          }
        }]);

        return EmitterSize;
      }();

      exports.EmitterSize = EmitterSize;
      /***/
    },

    /***/
    12986:
    /*!*******************************************************************!*\
      !*** ./node_modules/tsparticles/Plugins/Emitters/ShapeManager.js ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ShapeManager = void 0;
      var shapes = new Map();

      var ShapeManager = /*#__PURE__*/function () {
        function ShapeManager() {
          _classCallCheck(this, ShapeManager);
        }

        _createClass(ShapeManager, null, [{
          key: "addShape",
          value: function addShape(name, drawer) {
            if (!ShapeManager.getShape(name)) {
              shapes.set(name, drawer);
            }
          }
        }, {
          key: "getShape",
          value: function getShape(name) {
            return shapes.get(name);
          }
        }, {
          key: "getSupportedShapes",
          value: function getSupportedShapes() {
            return shapes.keys();
          }
        }]);

        return ShapeManager;
      }();

      exports.ShapeManager = ShapeManager;
      /***/
    },

    /***/
    99867:
    /*!********************************************************************************!*\
      !*** ./node_modules/tsparticles/Plugins/Emitters/Shapes/Circle/CircleShape.js ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CircleShape = void 0;

      var CircleShape = /*#__PURE__*/function () {
        function CircleShape() {
          _classCallCheck(this, CircleShape);
        }

        _createClass(CircleShape, [{
          key: "randomPosition",
          value: function randomPosition(position, offset, fill) {
            var generateTheta = function generateTheta(x, y) {
              var u = Math.random() / 4.0;
              var theta = Math.atan(y / x * Math.tan(2 * Math.PI * u));
              var v = Math.random();

              if (v < 0.25) {
                return theta;
              } else if (v < 0.5) {
                return Math.PI - theta;
              } else if (v < 0.75) {
                return Math.PI + theta;
              } else {
                return -theta;
              }
            };

            var radius = function radius(x, y, theta) {
              return x * y / Math.sqrt(Math.pow(y * Math.cos(theta), 2) + Math.pow(x * Math.sin(theta), 2));
            };

            var a = offset.x / 2,
                b = offset.y / 2;
            var randomTheta = generateTheta(a, b),
                maxRadius = radius(a, b, randomTheta),
                randomRadius = fill ? maxRadius * Math.sqrt(Math.random()) : maxRadius;
            return {
              x: position.x + randomRadius * Math.cos(randomTheta),
              y: position.y + randomRadius * Math.sin(randomTheta)
            };
          }
        }]);

        return CircleShape;
      }();

      exports.CircleShape = CircleShape;
      /***/
    },

    /***/
    50503:
    /*!********************************************************************************!*\
      !*** ./node_modules/tsparticles/Plugins/Emitters/Shapes/Square/SquareShape.js ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SquareShape = void 0;

      function randomSquareCoordinate(position, offset) {
        return position + offset * (Math.random() - 0.5);
      }

      var SquareShape = /*#__PURE__*/function () {
        function SquareShape() {
          _classCallCheck(this, SquareShape);
        }

        _createClass(SquareShape, [{
          key: "randomPosition",
          value: function randomPosition(position, offset, fill) {
            if (fill) {
              return {
                x: randomSquareCoordinate(position.x, offset.x),
                y: randomSquareCoordinate(position.y, offset.y)
              };
            } else {
              var halfW = offset.x / 2,
                  halfH = offset.y / 2,
                  side = Math.floor(Math.random() * 4),
                  v = (Math.random() - 0.5) * 2;

              switch (side) {
                case 0:
                  return {
                    x: position.x + v * halfW,
                    y: position.y - halfH
                  };

                case 1:
                  return {
                    x: position.x - halfW,
                    y: position.y + v * halfH
                  };

                case 2:
                  return {
                    x: position.x + v * halfW,
                    y: position.y + halfH
                  };

                case 3:
                default:
                  return {
                    x: position.x + halfW,
                    y: position.y + v * halfH
                  };
              }
            }
          }
        }]);

        return SquareShape;
      }();

      exports.SquareShape = SquareShape;
      /***/
    },

    /***/
    92696:
    /*!*************************************************************!*\
      !*** ./node_modules/tsparticles/Plugins/Emitters/plugin.js ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function get() {
            return m[k];
          }
        });
      } : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });

      var __exportStar = this && this.__exportStar || function (m, exports) {
        for (var p in m) {
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
        }
      };

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.loadEmittersPlugin = void 0;

      var Utils_1 = __webpack_require__(
      /*! ../../Utils */
      18942);

      var Emitters_1 = __webpack_require__(
      /*! ./Emitters */
      771);

      var Enums_1 = __webpack_require__(
      /*! ./Enums */
      52405);

      var Emitter_1 = __webpack_require__(
      /*! ./Options/Classes/Emitter */
      35678);

      var ShapeManager_1 = __webpack_require__(
      /*! ./ShapeManager */
      12986);

      var CircleShape_1 = __webpack_require__(
      /*! ./Shapes/Circle/CircleShape */
      99867);

      var SquareShape_1 = __webpack_require__(
      /*! ./Shapes/Square/SquareShape */
      50503);

      var EmittersPlugin = /*#__PURE__*/function () {
        function EmittersPlugin() {
          _classCallCheck(this, EmittersPlugin);

          this.id = "emitters";
        }

        _createClass(EmittersPlugin, [{
          key: "getPlugin",
          value: function getPlugin(container) {
            return new Emitters_1.Emitters(container);
          }
        }, {
          key: "needsPlugin",
          value: function needsPlugin(options) {
            var _a, _b, _c;

            if (options === undefined) {
              return false;
            }

            var emitters = options.emitters;
            return emitters instanceof Array && !!emitters.length || emitters !== undefined || !!((_c = (_b = (_a = options.interactivity) === null || _a === void 0 ? void 0 : _a.events) === null || _b === void 0 ? void 0 : _b.onClick) === null || _c === void 0 ? void 0 : _c.mode) && (0, Utils_1.isInArray)(Enums_1.EmitterClickMode.emitter, options.interactivity.events.onClick.mode);
          }
        }, {
          key: "loadOptions",
          value: function loadOptions(options, source) {
            var _a, _b;

            if (!this.needsPlugin(options) && !this.needsPlugin(source)) {
              return;
            }

            var optionsCast = options;

            if (source === null || source === void 0 ? void 0 : source.emitters) {
              if ((source === null || source === void 0 ? void 0 : source.emitters) instanceof Array) {
                optionsCast.emitters = source === null || source === void 0 ? void 0 : source.emitters.map(function (s) {
                  var tmp = new Emitter_1.Emitter();
                  tmp.load(s);
                  return tmp;
                });
              } else {
                var emitterOptions = optionsCast.emitters;

                if ((emitterOptions === null || emitterOptions === void 0 ? void 0 : emitterOptions.load) === undefined) {
                  optionsCast.emitters = emitterOptions = new Emitter_1.Emitter();
                }

                emitterOptions.load(source === null || source === void 0 ? void 0 : source.emitters);
              }
            }

            var interactivityEmitters = (_b = (_a = source === null || source === void 0 ? void 0 : source.interactivity) === null || _a === void 0 ? void 0 : _a.modes) === null || _b === void 0 ? void 0 : _b.emitters;

            if (interactivityEmitters) {
              if (interactivityEmitters instanceof Array) {
                optionsCast.interactivity.modes.emitters = interactivityEmitters.map(function (s) {
                  var tmp = new Emitter_1.Emitter();
                  tmp.load(s);
                  return tmp;
                });
              } else {
                var _emitterOptions = optionsCast.interactivity.modes.emitters;

                if ((_emitterOptions === null || _emitterOptions === void 0 ? void 0 : _emitterOptions.load) === undefined) {
                  optionsCast.interactivity.modes.emitters = _emitterOptions = new Emitter_1.Emitter();
                }

                _emitterOptions.load(interactivityEmitters);
              }
            }
          }
        }]);

        return EmittersPlugin;
      }();

      function loadEmittersPlugin(tsParticles) {
        var plugin = new EmittersPlugin();
        tsParticles.addPlugin(plugin);

        if (!tsParticles.addEmitterShape) {
          tsParticles.addEmitterShape = function (name, shape) {
            ShapeManager_1.ShapeManager.addShape(name, shape);
          };
        }

        tsParticles.addEmitterShape(Enums_1.EmitterShapeType.circle, new CircleShape_1.CircleShape());
        tsParticles.addEmitterShape(Enums_1.EmitterShapeType.square, new SquareShape_1.SquareShape());
      }

      exports.loadEmittersPlugin = loadEmittersPlugin;

      __exportStar(__webpack_require__(
      /*! ./EmittersMain */
      56476), exports);
      /***/

    },

    /***/
    94502:
    /*!*********************************************************************************!*\
      !*** ./node_modules/tsparticles/Plugins/PolygonMask/Enums/InlineArrangement.js ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.InlineArrangement = void 0;
      var InlineArrangement;

      (function (InlineArrangement) {
        InlineArrangement["equidistant"] = "equidistant";
        InlineArrangement["onePerPoint"] = "one-per-point";
        InlineArrangement["perPoint"] = "per-point";
        InlineArrangement["randomLength"] = "random-length";
        InlineArrangement["randomPoint"] = "random-point";
      })(InlineArrangement = exports.InlineArrangement || (exports.InlineArrangement = {}));
      /***/

    },

    /***/
    9492:
    /*!************************************************************************!*\
      !*** ./node_modules/tsparticles/Plugins/PolygonMask/Enums/MoveType.js ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.MoveType = void 0;
      var MoveType;

      (function (MoveType) {
        MoveType["path"] = "path";
        MoveType["radius"] = "radius";
      })(MoveType = exports.MoveType || (exports.MoveType = {}));
      /***/

    },

    /***/
    39880:
    /*!********************************************************************!*\
      !*** ./node_modules/tsparticles/Plugins/PolygonMask/Enums/Type.js ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Type = void 0;
      var Type;

      (function (Type) {
        Type["inline"] = "inline";
        Type["inside"] = "inside";
        Type["outside"] = "outside";
        Type["none"] = "none";
      })(Type = exports.Type || (exports.Type = {}));
      /***/

    },

    /***/
    65515:
    /*!*********************************************************************!*\
      !*** ./node_modules/tsparticles/Plugins/PolygonMask/Enums/index.js ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function get() {
            return m[k];
          }
        });
      } : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });

      var __exportStar = this && this.__exportStar || function (m, exports) {
        for (var p in m) {
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
        }
      };

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __exportStar(__webpack_require__(
      /*! ./InlineArrangement */
      94502), exports);

      __exportStar(__webpack_require__(
      /*! ./MoveType */
      9492), exports);

      __exportStar(__webpack_require__(
      /*! ./Type */
      39880), exports);
      /***/

    },

    /***/
    72383:
    /*!******************************************************************************!*\
      !*** ./node_modules/tsparticles/Plugins/PolygonMask/Options/Classes/Draw.js ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Draw = void 0;

      var DrawStroke_1 = __webpack_require__(
      /*! ./DrawStroke */
      4675);

      var OptionsColor_1 = __webpack_require__(
      /*! ../../../../Options/Classes/OptionsColor */
      14963);

      var Draw = /*#__PURE__*/function () {
        function Draw() {
          _classCallCheck(this, Draw);

          this.enable = false;
          this.stroke = new DrawStroke_1.DrawStroke();
        }

        _createClass(Draw, [{
          key: "lineWidth",
          get: function get() {
            return this.stroke.width;
          },
          set: function set(value) {
            this.stroke.width = value;
          }
        }, {
          key: "lineColor",
          get: function get() {
            return this.stroke.color;
          },
          set: function set(value) {
            this.stroke.color = OptionsColor_1.OptionsColor.create(this.stroke.color, value);
          }
        }, {
          key: "load",
          value: function load(data) {
            var _a;

            if (data !== undefined) {
              if (data.enable !== undefined) {
                this.enable = data.enable;
              }

              var stroke = (_a = data.stroke) !== null && _a !== void 0 ? _a : {
                color: data.lineColor,
                width: data.lineWidth
              };
              this.stroke.load(stroke);
            }
          }
        }]);

        return Draw;
      }();

      exports.Draw = Draw;
      /***/
    },

    /***/
    4675:
    /*!************************************************************************************!*\
      !*** ./node_modules/tsparticles/Plugins/PolygonMask/Options/Classes/DrawStroke.js ***!
      \************************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DrawStroke = void 0;

      var OptionsColor_1 = __webpack_require__(
      /*! ../../../../Options/Classes/OptionsColor */
      14963);

      var Utils_1 = __webpack_require__(
      /*! ../../../../Utils */
      18942);

      var DrawStroke = /*#__PURE__*/function () {
        function DrawStroke() {
          _classCallCheck(this, DrawStroke);

          this.color = new OptionsColor_1.OptionsColor();
          this.width = 0.5;
          this.opacity = 1;
        }

        _createClass(DrawStroke, [{
          key: "load",
          value: function load(data) {
            var _a;

            if (data !== undefined) {
              this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);

              if (typeof this.color.value === "string") {
                this.opacity = (_a = (0, Utils_1.stringToAlpha)(this.color.value)) !== null && _a !== void 0 ? _a : this.opacity;
              }

              if (data.opacity !== undefined) {
                this.opacity = data.opacity;
              }

              if (data.width !== undefined) {
                this.width = data.width;
              }
            }
          }
        }]);

        return DrawStroke;
      }();

      exports.DrawStroke = DrawStroke;
      /***/
    },

    /***/
    41387:
    /*!********************************************************************************!*\
      !*** ./node_modules/tsparticles/Plugins/PolygonMask/Options/Classes/Inline.js ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Inline = void 0;

      var Enums_1 = __webpack_require__(
      /*! ../../Enums */
      65515);

      var Inline = /*#__PURE__*/function () {
        function Inline() {
          _classCallCheck(this, Inline);

          this.arrangement = Enums_1.InlineArrangement.onePerPoint;
        }

        _createClass(Inline, [{
          key: "load",
          value: function load(data) {
            if (data !== undefined) {
              if (data.arrangement !== undefined) {
                this.arrangement = data.arrangement;
              }
            }
          }
        }]);

        return Inline;
      }();

      exports.Inline = Inline;
      /***/
    },

    /***/
    43336:
    /*!**********************************************************************************!*\
      !*** ./node_modules/tsparticles/Plugins/PolygonMask/Options/Classes/LocalSvg.js ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LocalSvg = void 0;

      var LocalSvg = /*#__PURE__*/function () {
        function LocalSvg() {
          _classCallCheck(this, LocalSvg);

          this.path = [];
          this.size = {
            height: 0,
            width: 0
          };
        }

        _createClass(LocalSvg, [{
          key: "load",
          value: function load(data) {
            if (data !== undefined) {
              if (data.path !== undefined) {
                this.path = data.path;
              }

              if (data.size !== undefined) {
                if (data.size.width !== undefined) {
                  this.size.width = data.size.width;
                }

                if (data.size.height !== undefined) {
                  this.size.height = data.size.height;
                }
              }
            }
          }
        }]);

        return LocalSvg;
      }();

      exports.LocalSvg = LocalSvg;
      /***/
    },

    /***/
    49255:
    /*!******************************************************************************!*\
      !*** ./node_modules/tsparticles/Plugins/PolygonMask/Options/Classes/Move.js ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Move = void 0;

      var Enums_1 = __webpack_require__(
      /*! ../../Enums */
      65515);

      var Move = /*#__PURE__*/function () {
        function Move() {
          _classCallCheck(this, Move);

          this.radius = 10;
          this.type = Enums_1.MoveType.path;
        }

        _createClass(Move, [{
          key: "load",
          value: function load(data) {
            if (data !== undefined) {
              if (data.radius !== undefined) {
                this.radius = data.radius;
              }

              if (data.type !== undefined) {
                this.type = data.type;
              }
            }
          }
        }]);

        return Move;
      }();

      exports.Move = Move;
      /***/
    },

    /***/
    80710:
    /*!*************************************************************************************!*\
      !*** ./node_modules/tsparticles/Plugins/PolygonMask/Options/Classes/PolygonMask.js ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PolygonMask = void 0;

      var Enums_1 = __webpack_require__(
      /*! ../../Enums */
      65515);

      var Draw_1 = __webpack_require__(
      /*! ./Draw */
      72383);

      var Move_1 = __webpack_require__(
      /*! ./Move */
      49255);

      var Inline_1 = __webpack_require__(
      /*! ./Inline */
      41387);

      var LocalSvg_1 = __webpack_require__(
      /*! ./LocalSvg */
      43336);

      var Utils_1 = __webpack_require__(
      /*! ../../../../Utils */
      18942);

      var PolygonMask = /*#__PURE__*/function () {
        function PolygonMask() {
          _classCallCheck(this, PolygonMask);

          this.draw = new Draw_1.Draw();
          this.enable = false;
          this.inline = new Inline_1.Inline();
          this.move = new Move_1.Move();
          this.scale = 1;
          this.type = Enums_1.Type.none;
        }

        _createClass(PolygonMask, [{
          key: "inlineArrangement",
          get: function get() {
            return this.inline.arrangement;
          },
          set: function set(value) {
            this.inline.arrangement = value;
          }
        }, {
          key: "load",
          value: function load(data) {
            var _a;

            if (data !== undefined) {
              this.draw.load(data.draw);
              var inline = (_a = data.inline) !== null && _a !== void 0 ? _a : {
                arrangement: data.inlineArrangement
              };

              if (inline !== undefined) {
                this.inline.load(inline);
              }

              this.move.load(data.move);

              if (data.scale !== undefined) {
                this.scale = data.scale;
              }

              if (data.type !== undefined) {
                this.type = data.type;
              }

              if (data.enable !== undefined) {
                this.enable = data.enable;
              } else {
                this.enable = this.type !== Enums_1.Type.none;
              }

              if (data.url !== undefined) {
                this.url = data.url;
              }

              if (data.data !== undefined) {
                if (typeof data.data === "string") {
                  this.data = data.data;
                } else {
                  this.data = new LocalSvg_1.LocalSvg();
                  this.data.load(data.data);
                }
              }

              if (data.position !== undefined) {
                this.position = (0, Utils_1.deepExtend)({}, data.position);
              }
            }
          }
        }]);

        return PolygonMask;
      }();

      exports.PolygonMask = PolygonMask;
      /***/
    },

    /***/
    11330:
    /*!*****************************************************************************!*\
      !*** ./node_modules/tsparticles/Plugins/PolygonMask/PolygonMaskInstance.js ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PolygonMaskInstance = void 0;

      var Enums_1 = __webpack_require__(
      /*! ./Enums */
      65515);

      var Utils_1 = __webpack_require__(
      /*! ../../Utils */
      18942);

      var PolygonMask_1 = __webpack_require__(
      /*! ./Options/Classes/PolygonMask */
      80710);

      var Enums_2 = __webpack_require__(
      /*! ../../Enums */
      39666);

      var utils_1 = __webpack_require__(
      /*! ./utils */
      7734);

      var PolygonMaskInstance = /*#__PURE__*/function () {
        function PolygonMaskInstance(container) {
          _classCallCheck(this, PolygonMaskInstance);

          this.container = container;
          this.dimension = {
            height: 0,
            width: 0
          };
          this.path2DSupported = !!window.Path2D;
          this.options = new PolygonMask_1.PolygonMask();
          this.polygonMaskMoveRadius = this.options.move.radius * container.retina.pixelRatio;
        }

        _createClass(PolygonMaskInstance, [{
          key: "initAsync",
          value: function () {
            var _initAsync = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(options) {
              var polygonMaskOptions;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      this.options.load(options === null || options === void 0 ? void 0 : options.polygon);
                      polygonMaskOptions = this.options;
                      this.polygonMaskMoveRadius = polygonMaskOptions.move.radius * this.container.retina.pixelRatio;

                      if (!polygonMaskOptions.enable) {
                        _context8.next = 6;
                        break;
                      }

                      _context8.next = 6;
                      return this.initRawData();

                    case 6:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function initAsync(_x16) {
              return _initAsync.apply(this, arguments);
            }

            return initAsync;
          }()
        }, {
          key: "resize",
          value: function resize() {
            var _this43 = this;

            var container = this.container;
            var options = this.options;

            if (!(options.enable && options.type !== Enums_1.Type.none)) {
              return;
            }

            if (this.redrawTimeout) {
              clearTimeout(this.redrawTimeout);
            }

            this.redrawTimeout = window.setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return _this43.initRawData(true);

                    case 2:
                      container.particles.redraw();

                    case 3:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9);
            })), 250);
          }
        }, {
          key: "stop",
          value: function stop() {
            delete this.raw;
            delete this.paths;
          }
        }, {
          key: "particlesInitialization",
          value: function particlesInitialization() {
            var options = this.options;

            if (options.enable && options.type === Enums_1.Type.inline && (options.inline.arrangement === Enums_1.InlineArrangement.onePerPoint || options.inline.arrangement === Enums_1.InlineArrangement.perPoint)) {
              this.drawPoints();
              return true;
            }

            return false;
          }
        }, {
          key: "particlePosition",
          value: function particlePosition(position) {
            var _a, _b;

            var options = this.options;

            if (!(options.enable && ((_b = (_a = this.raw) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) > 0)) {
              return;
            }

            return (0, Utils_1.deepExtend)({}, position ? position : this.randomPoint());
          }
        }, {
          key: "particleBounce",
          value: function particleBounce(particle, delta, direction) {
            return this.polygonBounce(particle, delta, direction);
          }
        }, {
          key: "clickPositionValid",
          value: function clickPositionValid(position) {
            var options = this.options;
            return options.enable && options.type !== Enums_1.Type.none && options.type !== Enums_1.Type.inline && this.checkInsidePolygon(position);
          }
        }, {
          key: "draw",
          value: function draw(context) {
            var _a;

            if (!((_a = this.paths) === null || _a === void 0 ? void 0 : _a.length)) {
              return;
            }

            var options = this.options;
            var polygonDraw = options.draw;

            if (!(options.enable && polygonDraw.enable)) {
              return;
            }

            var rawData = this.raw;

            var _iterator66 = _createForOfIteratorHelper(this.paths),
                _step66;

            try {
              for (_iterator66.s(); !(_step66 = _iterator66.n()).done;) {
                var path = _step66.value;
                var path2d = path.path2d;
                var path2dSupported = this.path2DSupported;

                if (!context) {
                  continue;
                }

                if (path2dSupported && path2d && this.offset) {
                  (0, utils_1.drawPolygonMaskPath)(context, path2d, polygonDraw.stroke, this.offset);
                } else if (rawData) {
                  (0, utils_1.drawPolygonMask)(context, rawData, polygonDraw.stroke);
                }
              }
            } catch (err) {
              _iterator66.e(err);
            } finally {
              _iterator66.f();
            }
          }
        }, {
          key: "polygonBounce",
          value: function polygonBounce(particle, _delta, direction) {
            var options = this.options;

            if (!this.raw || !options.enable || direction !== Enums_2.OutModeDirection.top) {
              return false;
            }

            if (options.type === Enums_1.Type.inside || options.type === Enums_1.Type.outside) {
              var closest, dx, dy;
              var pos = particle.getPosition(),
                  radius = particle.getRadius();

              for (var i = 0, j = this.raw.length - 1; i < this.raw.length; j = i++) {
                var pi = this.raw[i],
                    pj = this.raw[j];
                closest = (0, utils_1.calcClosestPtOnSegment)(pi, pj, pos);
                var dist = (0, Utils_1.getDistances)(pos, closest);
                var _ref13 = [dist.dx, dist.dy];
                dx = _ref13[0];
                dy = _ref13[1];

                if (dist.distance < radius) {
                  (0, utils_1.segmentBounce)(pi, pj, particle.velocity);
                  return true;
                }
              }

              if (closest && dx !== undefined && dy !== undefined && !this.checkInsidePolygon(pos)) {
                var factor = {
                  x: 1,
                  y: 1
                };

                if (particle.position.x >= closest.x) {
                  factor.x = -1;
                }

                if (particle.position.y >= closest.y) {
                  factor.y = -1;
                }

                particle.position.x = closest.x + radius * 2 * factor.x;
                particle.position.y = closest.y + radius * 2 * factor.y;
                particle.velocity.mult(-1);
                return true;
              }
            } else if (options.type === Enums_1.Type.inline && particle.initialPosition) {
              var _dist = (0, Utils_1.getDistance)(particle.initialPosition, particle.getPosition());

              if (_dist > this.polygonMaskMoveRadius) {
                particle.velocity.x = particle.velocity.y / 2 - particle.velocity.x;
                particle.velocity.y = particle.velocity.x / 2 - particle.velocity.y;
                return true;
              }
            }

            return false;
          }
        }, {
          key: "checkInsidePolygon",
          value: function checkInsidePolygon(position) {
            var _a, _b;

            var container = this.container;
            var options = this.options;

            if (!options.enable || options.type === Enums_1.Type.none || options.type === Enums_1.Type.inline) {
              return true;
            }

            if (!this.raw) {
              throw new Error(Utils_1.Constants.noPolygonFound);
            }

            var canvasSize = container.canvas.size;
            var x = (_a = position === null || position === void 0 ? void 0 : position.x) !== null && _a !== void 0 ? _a : Math.random() * canvasSize.width;
            var y = (_b = position === null || position === void 0 ? void 0 : position.y) !== null && _b !== void 0 ? _b : Math.random() * canvasSize.height;
            var inside = false;

            for (var i = 0, j = this.raw.length - 1; i < this.raw.length; j = i++) {
              var pi = this.raw[i];
              var pj = this.raw[j];
              var intersect = pi.y > y !== pj.y > y && x < (pj.x - pi.x) * (y - pi.y) / (pj.y - pi.y) + pi.x;

              if (intersect) {
                inside = !inside;
              }
            }

            return options.type === Enums_1.Type.inside ? inside : options.type === Enums_1.Type.outside ? !inside : false;
          }
        }, {
          key: "parseSvgPath",
          value: function parseSvgPath(xml, force) {
            var _a, _b, _c;

            var forceDownload = force !== null && force !== void 0 ? force : false;

            if (this.paths !== undefined && !forceDownload) {
              return this.raw;
            }

            var container = this.container;
            var options = this.options;
            var parser = new DOMParser();
            var doc = parser.parseFromString(xml, "image/svg+xml");
            var svg = doc.getElementsByTagName("svg")[0];
            var svgPaths = svg.getElementsByTagName("path");

            if (!svgPaths.length) {
              svgPaths = doc.getElementsByTagName("path");
            }

            this.paths = [];

            for (var i = 0; i < svgPaths.length; i++) {
              var path = svgPaths.item(i);

              if (path) {
                this.paths.push({
                  element: path,
                  length: path.getTotalLength()
                });
              }
            }

            var pxRatio = container.retina.pixelRatio;
            var scale = options.scale / pxRatio;
            this.dimension.width = parseFloat((_a = svg.getAttribute("width")) !== null && _a !== void 0 ? _a : "0") * scale;
            this.dimension.height = parseFloat((_b = svg.getAttribute("height")) !== null && _b !== void 0 ? _b : "0") * scale;
            var position = (_c = options.position) !== null && _c !== void 0 ? _c : {
              x: 50,
              y: 50
            };
            this.offset = {
              x: container.canvas.size.width * position.x / (100 * pxRatio) - this.dimension.width / 2,
              y: container.canvas.size.height * position.y / (100 * pxRatio) - this.dimension.height / 2
            };
            return (0, utils_1.parsePaths)(this.paths, scale, this.offset);
          }
        }, {
          key: "downloadSvgPath",
          value: function () {
            var _downloadSvgPath = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(svgUrl, force) {
              var options, url, forceDownload, req;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      options = this.options;
                      url = svgUrl || options.url;
                      forceDownload = force !== null && force !== void 0 ? force : false;

                      if (!(!url || this.paths !== undefined && !forceDownload)) {
                        _context10.next = 5;
                        break;
                      }

                      return _context10.abrupt("return", this.raw);

                    case 5:
                      _context10.next = 7;
                      return fetch(url);

                    case 7:
                      req = _context10.sent;

                      if (req.ok) {
                        _context10.next = 10;
                        break;
                      }

                      throw new Error("tsParticles Error - Error occurred during polygon mask download");

                    case 10:
                      _context10.t0 = this;
                      _context10.next = 13;
                      return req.text();

                    case 13:
                      _context10.t1 = _context10.sent;
                      _context10.t2 = force;
                      return _context10.abrupt("return", _context10.t0.parseSvgPath.call(_context10.t0, _context10.t1, _context10.t2));

                    case 16:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));

            function downloadSvgPath(_x17, _x18) {
              return _downloadSvgPath.apply(this, arguments);
            }

            return downloadSvgPath;
          }()
        }, {
          key: "drawPoints",
          value: function drawPoints() {
            if (!this.raw) {
              return;
            }

            var _iterator67 = _createForOfIteratorHelper(this.raw),
                _step67;

            try {
              for (_iterator67.s(); !(_step67 = _iterator67.n()).done;) {
                var item = _step67.value;
                this.container.particles.addParticle({
                  x: item.x,
                  y: item.y
                });
              }
            } catch (err) {
              _iterator67.e(err);
            } finally {
              _iterator67.f();
            }
          }
        }, {
          key: "randomPoint",
          value: function randomPoint() {
            var container = this.container;
            var options = this.options;
            var position;

            if (options.type === Enums_1.Type.inline) {
              switch (options.inline.arrangement) {
                case Enums_1.InlineArrangement.randomPoint:
                  position = this.getRandomPoint();
                  break;

                case Enums_1.InlineArrangement.randomLength:
                  position = this.getRandomPointByLength();
                  break;

                case Enums_1.InlineArrangement.equidistant:
                  position = this.getEquidistantPointByIndex(container.particles.count);
                  break;

                case Enums_1.InlineArrangement.onePerPoint:
                case Enums_1.InlineArrangement.perPoint:
                default:
                  position = this.getPointByIndex(container.particles.count);
              }
            } else {
              position = {
                x: Math.random() * container.canvas.size.width,
                y: Math.random() * container.canvas.size.height
              };
            }

            if (this.checkInsidePolygon(position)) {
              return position;
            } else {
              return this.randomPoint();
            }
          }
        }, {
          key: "getRandomPoint",
          value: function getRandomPoint() {
            if (!this.raw || !this.raw.length) {
              throw new Error(Utils_1.Constants.noPolygonDataLoaded);
            }

            var coords = (0, Utils_1.itemFromArray)(this.raw);
            return {
              x: coords.x,
              y: coords.y
            };
          }
        }, {
          key: "getRandomPointByLength",
          value: function getRandomPointByLength() {
            var _a, _b, _c;

            var options = this.options;

            if (!this.raw || !this.raw.length || !((_a = this.paths) === null || _a === void 0 ? void 0 : _a.length)) {
              throw new Error(Utils_1.Constants.noPolygonDataLoaded);
            }

            var path = (0, Utils_1.itemFromArray)(this.paths);
            var distance = Math.floor(Math.random() * path.length) + 1;
            var point = path.element.getPointAtLength(distance);
            return {
              x: point.x * options.scale + (((_b = this.offset) === null || _b === void 0 ? void 0 : _b.x) || 0),
              y: point.y * options.scale + (((_c = this.offset) === null || _c === void 0 ? void 0 : _c.y) || 0)
            };
          }
        }, {
          key: "getEquidistantPointByIndex",
          value: function getEquidistantPointByIndex(index) {
            var _a, _b, _c, _d, _e, _f, _g;

            var options = this.container.actualOptions;
            var polygonMaskOptions = this.options;
            if (!this.raw || !this.raw.length || !((_a = this.paths) === null || _a === void 0 ? void 0 : _a.length)) throw new Error(Utils_1.Constants.noPolygonDataLoaded);
            var offset = 0;
            var point;
            var totalLength = this.paths.reduce(function (tot, path) {
              return tot + path.length;
            }, 0);
            var distance = totalLength / options.particles.number.value;

            var _iterator68 = _createForOfIteratorHelper(this.paths),
                _step68;

            try {
              for (_iterator68.s(); !(_step68 = _iterator68.n()).done;) {
                var path = _step68.value;
                var pathDistance = distance * index - offset;

                if (pathDistance <= path.length) {
                  point = path.element.getPointAtLength(pathDistance);
                  break;
                } else {
                  offset += path.length;
                }
              }
            } catch (err) {
              _iterator68.e(err);
            } finally {
              _iterator68.f();
            }

            return {
              x: ((_b = point === null || point === void 0 ? void 0 : point.x) !== null && _b !== void 0 ? _b : 0) * polygonMaskOptions.scale + ((_d = (_c = this.offset) === null || _c === void 0 ? void 0 : _c.x) !== null && _d !== void 0 ? _d : 0),
              y: ((_e = point === null || point === void 0 ? void 0 : point.y) !== null && _e !== void 0 ? _e : 0) * polygonMaskOptions.scale + ((_g = (_f = this.offset) === null || _f === void 0 ? void 0 : _f.y) !== null && _g !== void 0 ? _g : 0)
            };
          }
        }, {
          key: "getPointByIndex",
          value: function getPointByIndex(index) {
            if (!this.raw || !this.raw.length) {
              throw new Error(Utils_1.Constants.noPolygonDataLoaded);
            }

            var coords = this.raw[index % this.raw.length];
            return {
              x: coords.x,
              y: coords.y
            };
          }
        }, {
          key: "createPath2D",
          value: function createPath2D() {
            var _this44 = this;

            var _a, _b;

            var options = this.options;

            if (!this.path2DSupported || !((_a = this.paths) === null || _a === void 0 ? void 0 : _a.length)) {
              return;
            }

            var _iterator69 = _createForOfIteratorHelper(this.paths),
                _step69;

            try {
              var _loop2 = function _loop2() {
                var path = _step69.value;
                var pathData = (_b = path.element) === null || _b === void 0 ? void 0 : _b.getAttribute("d");

                if (pathData) {
                  var path2d = new Path2D(pathData);
                  var matrix = document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGMatrix();
                  var finalPath = new Path2D();
                  var transform = matrix.scale(options.scale);

                  if (finalPath.addPath) {
                    finalPath.addPath(path2d, transform);
                    path.path2d = finalPath;
                  } else {
                    delete path.path2d;
                  }
                } else {
                  delete path.path2d;
                }

                if (path.path2d || !_this44.raw) {
                  return "continue";
                }

                path.path2d = new Path2D();
                path.path2d.moveTo(_this44.raw[0].x, _this44.raw[0].y);

                _this44.raw.forEach(function (pos, i) {
                  var _a;

                  if (i > 0) {
                    (_a = path.path2d) === null || _a === void 0 ? void 0 : _a.lineTo(pos.x, pos.y);
                  }
                });

                path.path2d.closePath();
              };

              for (_iterator69.s(); !(_step69 = _iterator69.n()).done;) {
                var _ret = _loop2();

                if (_ret === "continue") continue;
              }
            } catch (err) {
              _iterator69.e(err);
            } finally {
              _iterator69.f();
            }
          }
        }, {
          key: "initRawData",
          value: function () {
            var _initRawData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(force) {
              var options, data, svg, path, namespaces;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      options = this.options;

                      if (!options.url) {
                        _context11.next = 7;
                        break;
                      }

                      _context11.next = 4;
                      return this.downloadSvgPath(options.url, force);

                    case 4:
                      this.raw = _context11.sent;
                      _context11.next = 8;
                      break;

                    case 7:
                      if (options.data) {
                        data = options.data;

                        if (typeof data !== "string") {
                          path = data.path instanceof Array ? data.path.map(function (t) {
                            return "<path d=\"".concat(t, "\" />");
                          }).join("") : "<path d=\"".concat(data.path, "\" />");
                          namespaces = 'xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"';
                          svg = "<svg ".concat(namespaces, " width=\"").concat(data.size.width, "\" height=\"").concat(data.size.height, "\">").concat(path, "</svg>");
                        } else {
                          svg = data;
                        }

                        this.raw = this.parseSvgPath(svg, force);
                      }

                    case 8:
                      this.createPath2D();

                    case 9:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));

            function initRawData(_x19) {
              return _initRawData.apply(this, arguments);
            }

            return initRawData;
          }()
        }]);

        return PolygonMaskInstance;
      }();

      exports.PolygonMaskInstance = PolygonMaskInstance;
      /***/
    },

    /***/
    64535:
    /*!*****************************************************************!*\
      !*** ./node_modules/tsparticles/Plugins/PolygonMask/pathseg.js ***!
      \*****************************************************************/

    /***/
    function _() {
      "use strict";

      (function () {
        "use strict";

        if (typeof window === "undefined") return;

        if (!("SVGPathSeg" in window)) {
          window.SVGPathSeg = function (type, typeAsLetter, owningPathSegList) {
            this.pathSegType = type;
            this.pathSegTypeAsLetter = typeAsLetter;
            this._owningPathSegList = owningPathSegList;
          };

          window.SVGPathSeg.prototype.classname = "SVGPathSeg";
          window.SVGPathSeg.PATHSEG_UNKNOWN = 0;
          window.SVGPathSeg.PATHSEG_CLOSEPATH = 1;
          window.SVGPathSeg.PATHSEG_MOVETO_ABS = 2;
          window.SVGPathSeg.PATHSEG_MOVETO_REL = 3;
          window.SVGPathSeg.PATHSEG_LINETO_ABS = 4;
          window.SVGPathSeg.PATHSEG_LINETO_REL = 5;
          window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS = 6;
          window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL = 7;
          window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS = 8;
          window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL = 9;
          window.SVGPathSeg.PATHSEG_ARC_ABS = 10;
          window.SVGPathSeg.PATHSEG_ARC_REL = 11;
          window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS = 12;
          window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL = 13;
          window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS = 14;
          window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL = 15;
          window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS = 16;
          window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL = 17;
          window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS = 18;
          window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL = 19;

          window.SVGPathSeg.prototype._segmentChanged = function () {
            if (this._owningPathSegList) this._owningPathSegList.segmentChanged(this);
          };

          window.SVGPathSegClosePath = function (owningPathSegList) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CLOSEPATH, "z", owningPathSegList);
          };

          window.SVGPathSegClosePath.prototype = Object.create(window.SVGPathSeg.prototype);

          window.SVGPathSegClosePath.prototype.toString = function () {
            return "[object SVGPathSegClosePath]";
          };

          window.SVGPathSegClosePath.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter;
          };

          window.SVGPathSegClosePath.prototype.clone = function () {
            return new window.SVGPathSegClosePath(undefined);
          };

          window.SVGPathSegMovetoAbs = function (owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_ABS, "M", owningPathSegList);
            this._x = x;
            this._y = y;
          };

          window.SVGPathSegMovetoAbs.prototype = Object.create(window.SVGPathSeg.prototype);

          window.SVGPathSegMovetoAbs.prototype.toString = function () {
            return "[object SVGPathSegMovetoAbs]";
          };

          window.SVGPathSegMovetoAbs.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
          };

          window.SVGPathSegMovetoAbs.prototype.clone = function () {
            return new window.SVGPathSegMovetoAbs(undefined, this._x, this._y);
          };

          Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "x", {
            get: function get() {
              return this._x;
            },
            set: function set(x) {
              this._x = x;

              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "y", {
            get: function get() {
              return this._y;
            },
            set: function set(y) {
              this._y = y;

              this._segmentChanged();
            },
            enumerable: true
          });

          window.SVGPathSegMovetoRel = function (owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_REL, "m", owningPathSegList);
            this._x = x;
            this._y = y;
          };

          window.SVGPathSegMovetoRel.prototype = Object.create(window.SVGPathSeg.prototype);

          window.SVGPathSegMovetoRel.prototype.toString = function () {
            return "[object SVGPathSegMovetoRel]";
          };

          window.SVGPathSegMovetoRel.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
          };

          window.SVGPathSegMovetoRel.prototype.clone = function () {
            return new window.SVGPathSegMovetoRel(undefined, this._x, this._y);
          };

          Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "x", {
            get: function get() {
              return this._x;
            },
            set: function set(x) {
              this._x = x;

              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "y", {
            get: function get() {
              return this._y;
            },
            set: function set(y) {
              this._y = y;

              this._segmentChanged();
            },
            enumerable: true
          });

          window.SVGPathSegLinetoAbs = function (owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_ABS, "L", owningPathSegList);
            this._x = x;
            this._y = y;
          };

          window.SVGPathSegLinetoAbs.prototype = Object.create(window.SVGPathSeg.prototype);

          window.SVGPathSegLinetoAbs.prototype.toString = function () {
            return "[object SVGPathSegLinetoAbs]";
          };

          window.SVGPathSegLinetoAbs.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
          };

          window.SVGPathSegLinetoAbs.prototype.clone = function () {
            return new window.SVGPathSegLinetoAbs(undefined, this._x, this._y);
          };

          Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "x", {
            get: function get() {
              return this._x;
            },
            set: function set(x) {
              this._x = x;

              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "y", {
            get: function get() {
              return this._y;
            },
            set: function set(y) {
              this._y = y;

              this._segmentChanged();
            },
            enumerable: true
          });

          window.SVGPathSegLinetoRel = function (owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_REL, "l", owningPathSegList);
            this._x = x;
            this._y = y;
          };

          window.SVGPathSegLinetoRel.prototype = Object.create(window.SVGPathSeg.prototype);

          window.SVGPathSegLinetoRel.prototype.toString = function () {
            return "[object SVGPathSegLinetoRel]";
          };

          window.SVGPathSegLinetoRel.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
          };

          window.SVGPathSegLinetoRel.prototype.clone = function () {
            return new window.SVGPathSegLinetoRel(undefined, this._x, this._y);
          };

          Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "x", {
            get: function get() {
              return this._x;
            },
            set: function set(x) {
              this._x = x;

              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "y", {
            get: function get() {
              return this._y;
            },
            set: function set(y) {
              this._y = y;

              this._segmentChanged();
            },
            enumerable: true
          });

          window.SVGPathSegCurvetoCubicAbs = function (owningPathSegList, x, y, x1, y1, x2, y2) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS, "C", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x1 = x1;
            this._y1 = y1;
            this._x2 = x2;
            this._y2 = y2;
          };

          window.SVGPathSegCurvetoCubicAbs.prototype = Object.create(window.SVGPathSeg.prototype);

          window.SVGPathSegCurvetoCubicAbs.prototype.toString = function () {
            return "[object SVGPathSegCurvetoCubicAbs]";
          };

          window.SVGPathSegCurvetoCubicAbs.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y;
          };

          window.SVGPathSegCurvetoCubicAbs.prototype.clone = function () {
            return new window.SVGPathSegCurvetoCubicAbs(undefined, this._x, this._y, this._x1, this._y1, this._x2, this._y2);
          };

          Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x", {
            get: function get() {
              return this._x;
            },
            set: function set(x) {
              this._x = x;

              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y", {
            get: function get() {
              return this._y;
            },
            set: function set(y) {
              this._y = y;

              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x1", {
            get: function get() {
              return this._x1;
            },
            set: function set(x1) {
              this._x1 = x1;

              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y1", {
            get: function get() {
              return this._y1;
            },
            set: function set(y1) {
              this._y1 = y1;

              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x2", {
            get: function get() {
              return this._x2;
            },
            set: function set(x2) {
              this._x2 = x2;

              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y2", {
            get: function get() {
              return this._y2;
            },
            set: function set(y2) {
              this._y2 = y2;

              this._segmentChanged();
            },
            enumerable: true
          });

          window.SVGPathSegCurvetoCubicRel = function (owningPathSegList, x, y, x1, y1, x2, y2) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL, "c", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x1 = x1;
            this._y1 = y1;
            this._x2 = x2;
            this._y2 = y2;
          };

          window.SVGPathSegCurvetoCubicRel.prototype = Object.create(window.SVGPathSeg.prototype);

          window.SVGPathSegCurvetoCubicRel.prototype.toString = function () {
            return "[object SVGPathSegCurvetoCubicRel]";
          };

          window.SVGPathSegCurvetoCubicRel.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y;
          };

          window.SVGPathSegCurvetoCubicRel.prototype.clone = function () {
            return new window.SVGPathSegCurvetoCubicRel(undefined, this._x, this._y, this._x1, this._y1, this._x2, this._y2);
          };

          Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x", {
            get: function get() {
              return this._x;
            },
            set: function set(x) {
              this._x = x;

              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y", {
            get: function get() {
              return this._y;
            },
            set: function set(y) {
              this._y = y;

              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x1", {
            get: function get() {
              return this._x1;
            },
            set: function set(x1) {
              this._x1 = x1;

              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y1", {
            get: function get() {
              return this._y1;
            },
            set: function set(y1) {
              this._y1 = y1;

              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x2", {
            get: function get() {
              return this._x2;
            },
            set: function set(x2) {
              this._x2 = x2;

              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y2", {
            get: function get() {
              return this._y2;
            },
            set: function set(y2) {
              this._y2 = y2;

              this._segmentChanged();
            },
            enumerable: true
          });

          window.SVGPathSegCurvetoQuadraticAbs = function (owningPathSegList, x, y, x1, y1) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS, "Q", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x1 = x1;
            this._y1 = y1;
          };

          window.SVGPathSegCurvetoQuadraticAbs.prototype = Object.create(window.SVGPathSeg.prototype);

          window.SVGPathSegCurvetoQuadraticAbs.prototype.toString = function () {
            return "[object SVGPathSegCurvetoQuadraticAbs]";
          };

          window.SVGPathSegCurvetoQuadraticAbs.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y;
          };

          window.SVGPathSegCurvetoQuadraticAbs.prototype.clone = function () {
            return new window.SVGPathSegCurvetoQuadraticAbs(undefined, this._x, this._y, this._x1, this._y1);
          };

          Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x", {
            get: function get() {
              return this._x;
            },
            set: function set(x) {
              this._x = x;

              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y", {
            get: function get() {
              return this._y;
            },
            set: function set(y) {
              this._y = y;

              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x1", {
            get: function get() {
              return this._x1;
            },
            set: function set(x1) {
              this._x1 = x1;

              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y1", {
            get: function get() {
              return this._y1;
            },
            set: function set(y1) {
              this._y1 = y1;

              this._segmentChanged();
            },
            enumerable: true
          });

          window.SVGPathSegCurvetoQuadraticRel = function (owningPathSegList, x, y, x1, y1) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL, "q", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x1 = x1;
            this._y1 = y1;
          };

          window.SVGPathSegCurvetoQuadraticRel.prototype = Object.create(window.SVGPathSeg.prototype);

          window.SVGPathSegCurvetoQuadraticRel.prototype.toString = function () {
            return "[object SVGPathSegCurvetoQuadraticRel]";
          };

          window.SVGPathSegCurvetoQuadraticRel.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y;
          };

          window.SVGPathSegCurvetoQuadraticRel.prototype.clone = function () {
            return new window.SVGPathSegCurvetoQuadraticRel(undefined, this._x, this._y, this._x1, this._y1);
          };

          Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x", {
            get: function get() {
              return this._x;
            },
            set: function set(x) {
              this._x = x;

              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y", {
            get: function get() {
              return this._y;
            },
            set: function set(y) {
              this._y = y;

              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x1", {
            get: function get() {
              return this._x1;
            },
            set: function set(x1) {
              this._x1 = x1;

              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y1", {
            get: function get() {
              return this._y1;
            },
            set: function set(y1) {
              this._y1 = y1;

              this._segmentChanged();
            },
            enumerable: true
          });

          window.SVGPathSegArcAbs = function (owningPathSegList, x, y, r1, r2, angle, largeArcFlag, sweepFlag) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_ABS, "A", owningPathSegList);
            this._x = x;
            this._y = y;
            this._r1 = r1;
            this._r2 = r2;
            this._angle = angle;
            this._largeArcFlag = largeArcFlag;
            this._sweepFlag = sweepFlag;
          };

          window.SVGPathSegArcAbs.prototype = Object.create(window.SVGPathSeg.prototype);

          window.SVGPathSegArcAbs.prototype.toString = function () {
            return "[object SVGPathSegArcAbs]";
          };

          window.SVGPathSegArcAbs.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y;
          };

          window.SVGPathSegArcAbs.prototype.clone = function () {
            return new window.SVGPathSegArcAbs(undefined, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag);
          };

          Object.defineProperty(window.SVGPathSegArcAbs.prototype, "x", {
            get: function get() {
              return this._x;
            },
            set: function set(x) {
              this._x = x;

              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegArcAbs.prototype, "y", {
            get: function get() {
              return this._y;
            },
            set: function set(y) {
              this._y = y;

              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r1", {
            get: function get() {
              return this._r1;
            },
            set: function set(r1) {
              this._r1 = r1;

              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r2", {
            get: function get() {
              return this._r2;
            },
            set: function set(r2) {
              this._r2 = r2;

              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegArcAbs.prototype, "angle", {
            get: function get() {
              return this._angle;
            },
            set: function set(angle) {
              this._angle = angle;

              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegArcAbs.prototype, "largeArcFlag", {
            get: function get() {
              return this._largeArcFlag;
            },
            set: function set(largeArcFlag) {
              this._largeArcFlag = largeArcFlag;

              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegArcAbs.prototype, "sweepFlag", {
            get: function get() {
              return this._sweepFlag;
            },
            set: function set(sweepFlag) {
              this._sweepFlag = sweepFlag;

              this._segmentChanged();
            },
            enumerable: true
          });

          window.SVGPathSegArcRel = function (owningPathSegList, x, y, r1, r2, angle, largeArcFlag, sweepFlag) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_REL, "a", owningPathSegList);
            this._x = x;
            this._y = y;
            this._r1 = r1;
            this._r2 = r2;
            this._angle = angle;
            this._largeArcFlag = largeArcFlag;
            this._sweepFlag = sweepFlag;
          };

          window.SVGPathSegArcRel.prototype = Object.create(window.SVGPathSeg.prototype);

          window.SVGPathSegArcRel.prototype.toString = function () {
            return "[object SVGPathSegArcRel]";
          };

          window.SVGPathSegArcRel.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y;
          };

          window.SVGPathSegArcRel.prototype.clone = function () {
            return new window.SVGPathSegArcRel(undefined, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag);
          };

          Object.defineProperty(window.SVGPathSegArcRel.prototype, "x", {
            get: function get() {
              return this._x;
            },
            set: function set(x) {
              this._x = x;

              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegArcRel.prototype, "y", {
            get: function get() {
              return this._y;
            },
            set: function set(y) {
              this._y = y;

              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegArcRel.prototype, "r1", {
            get: function get() {
              return this._r1;
            },
            set: function set(r1) {
              this._r1 = r1;

              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegArcRel.prototype, "r2", {
            get: function get() {
              return this._r2;
            },
            set: function set(r2) {
              this._r2 = r2;

              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegArcRel.prototype, "angle", {
            get: function get() {
              return this._angle;
            },
            set: function set(angle) {
              this._angle = angle;

              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegArcRel.prototype, "largeArcFlag", {
            get: function get() {
              return this._largeArcFlag;
            },
            set: function set(largeArcFlag) {
              this._largeArcFlag = largeArcFlag;

              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegArcRel.prototype, "sweepFlag", {
            get: function get() {
              return this._sweepFlag;
            },
            set: function set(sweepFlag) {
              this._sweepFlag = sweepFlag;

              this._segmentChanged();
            },
            enumerable: true
          });

          window.SVGPathSegLinetoHorizontalAbs = function (owningPathSegList, x) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS, "H", owningPathSegList);
            this._x = x;
          };

          window.SVGPathSegLinetoHorizontalAbs.prototype = Object.create(window.SVGPathSeg.prototype);

          window.SVGPathSegLinetoHorizontalAbs.prototype.toString = function () {
            return "[object SVGPathSegLinetoHorizontalAbs]";
          };

          window.SVGPathSegLinetoHorizontalAbs.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x;
          };

          window.SVGPathSegLinetoHorizontalAbs.prototype.clone = function () {
            return new window.SVGPathSegLinetoHorizontalAbs(undefined, this._x);
          };

          Object.defineProperty(window.SVGPathSegLinetoHorizontalAbs.prototype, "x", {
            get: function get() {
              return this._x;
            },
            set: function set(x) {
              this._x = x;

              this._segmentChanged();
            },
            enumerable: true
          });

          window.SVGPathSegLinetoHorizontalRel = function (owningPathSegList, x) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL, "h", owningPathSegList);
            this._x = x;
          };

          window.SVGPathSegLinetoHorizontalRel.prototype = Object.create(window.SVGPathSeg.prototype);

          window.SVGPathSegLinetoHorizontalRel.prototype.toString = function () {
            return "[object SVGPathSegLinetoHorizontalRel]";
          };

          window.SVGPathSegLinetoHorizontalRel.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x;
          };

          window.SVGPathSegLinetoHorizontalRel.prototype.clone = function () {
            return new window.SVGPathSegLinetoHorizontalRel(undefined, this._x);
          };

          Object.defineProperty(window.SVGPathSegLinetoHorizontalRel.prototype, "x", {
            get: function get() {
              return this._x;
            },
            set: function set(x) {
              this._x = x;

              this._segmentChanged();
            },
            enumerable: true
          });

          window.SVGPathSegLinetoVerticalAbs = function (owningPathSegList, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS, "V", owningPathSegList);
            this._y = y;
          };

          window.SVGPathSegLinetoVerticalAbs.prototype = Object.create(window.SVGPathSeg.prototype);

          window.SVGPathSegLinetoVerticalAbs.prototype.toString = function () {
            return "[object SVGPathSegLinetoVerticalAbs]";
          };

          window.SVGPathSegLinetoVerticalAbs.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._y;
          };

          window.SVGPathSegLinetoVerticalAbs.prototype.clone = function () {
            return new window.SVGPathSegLinetoVerticalAbs(undefined, this._y);
          };

          Object.defineProperty(window.SVGPathSegLinetoVerticalAbs.prototype, "y", {
            get: function get() {
              return this._y;
            },
            set: function set(y) {
              this._y = y;

              this._segmentChanged();
            },
            enumerable: true
          });

          window.SVGPathSegLinetoVerticalRel = function (owningPathSegList, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL, "v", owningPathSegList);
            this._y = y;
          };

          window.SVGPathSegLinetoVerticalRel.prototype = Object.create(window.SVGPathSeg.prototype);

          window.SVGPathSegLinetoVerticalRel.prototype.toString = function () {
            return "[object SVGPathSegLinetoVerticalRel]";
          };

          window.SVGPathSegLinetoVerticalRel.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._y;
          };

          window.SVGPathSegLinetoVerticalRel.prototype.clone = function () {
            return new window.SVGPathSegLinetoVerticalRel(undefined, this._y);
          };

          Object.defineProperty(window.SVGPathSegLinetoVerticalRel.prototype, "y", {
            get: function get() {
              return this._y;
            },
            set: function set(y) {
              this._y = y;

              this._segmentChanged();
            },
            enumerable: true
          });

          window.SVGPathSegCurvetoCubicSmoothAbs = function (owningPathSegList, x, y, x2, y2) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS, "S", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x2 = x2;
            this._y2 = y2;
          };

          window.SVGPathSegCurvetoCubicSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype);

          window.SVGPathSegCurvetoCubicSmoothAbs.prototype.toString = function () {
            return "[object SVGPathSegCurvetoCubicSmoothAbs]";
          };

          window.SVGPathSegCurvetoCubicSmoothAbs.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y;
          };

          window.SVGPathSegCurvetoCubicSmoothAbs.prototype.clone = function () {
            return new window.SVGPathSegCurvetoCubicSmoothAbs(undefined, this._x, this._y, this._x2, this._y2);
          };

          Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x", {
            get: function get() {
              return this._x;
            },
            set: function set(x) {
              this._x = x;

              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y", {
            get: function get() {
              return this._y;
            },
            set: function set(y) {
              this._y = y;

              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x2", {
            get: function get() {
              return this._x2;
            },
            set: function set(x2) {
              this._x2 = x2;

              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y2", {
            get: function get() {
              return this._y2;
            },
            set: function set(y2) {
              this._y2 = y2;

              this._segmentChanged();
            },
            enumerable: true
          });

          window.SVGPathSegCurvetoCubicSmoothRel = function (owningPathSegList, x, y, x2, y2) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL, "s", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x2 = x2;
            this._y2 = y2;
          };

          window.SVGPathSegCurvetoCubicSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype);

          window.SVGPathSegCurvetoCubicSmoothRel.prototype.toString = function () {
            return "[object SVGPathSegCurvetoCubicSmoothRel]";
          };

          window.SVGPathSegCurvetoCubicSmoothRel.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y;
          };

          window.SVGPathSegCurvetoCubicSmoothRel.prototype.clone = function () {
            return new window.SVGPathSegCurvetoCubicSmoothRel(undefined, this._x, this._y, this._x2, this._y2);
          };

          Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x", {
            get: function get() {
              return this._x;
            },
            set: function set(x) {
              this._x = x;

              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y", {
            get: function get() {
              return this._y;
            },
            set: function set(y) {
              this._y = y;

              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x2", {
            get: function get() {
              return this._x2;
            },
            set: function set(x2) {
              this._x2 = x2;

              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y2", {
            get: function get() {
              return this._y2;
            },
            set: function set(y2) {
              this._y2 = y2;

              this._segmentChanged();
            },
            enumerable: true
          });

          window.SVGPathSegCurvetoQuadraticSmoothAbs = function (owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS, "T", owningPathSegList);
            this._x = x;
            this._y = y;
          };

          window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype);

          window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.toString = function () {
            return "[object SVGPathSegCurvetoQuadraticSmoothAbs]";
          };

          window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
          };

          window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.clone = function () {
            return new window.SVGPathSegCurvetoQuadraticSmoothAbs(undefined, this._x, this._y);
          };

          Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "x", {
            get: function get() {
              return this._x;
            },
            set: function set(x) {
              this._x = x;

              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "y", {
            get: function get() {
              return this._y;
            },
            set: function set(y) {
              this._y = y;

              this._segmentChanged();
            },
            enumerable: true
          });

          window.SVGPathSegCurvetoQuadraticSmoothRel = function (owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL, "t", owningPathSegList);
            this._x = x;
            this._y = y;
          };

          window.SVGPathSegCurvetoQuadraticSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype);

          window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.toString = function () {
            return "[object SVGPathSegCurvetoQuadraticSmoothRel]";
          };

          window.SVGPathSegCurvetoQuadraticSmoothRel.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
          };

          window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.clone = function () {
            return new window.SVGPathSegCurvetoQuadraticSmoothRel(undefined, this._x, this._y);
          };

          Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "x", {
            get: function get() {
              return this._x;
            },
            set: function set(x) {
              this._x = x;

              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "y", {
            get: function get() {
              return this._y;
            },
            set: function set(y) {
              this._y = y;

              this._segmentChanged();
            },
            enumerable: true
          });

          window.SVGPathElement.prototype.createSVGPathSegClosePath = function () {
            return new window.SVGPathSegClosePath(undefined);
          };

          window.SVGPathElement.prototype.createSVGPathSegMovetoAbs = function (x, y) {
            return new window.SVGPathSegMovetoAbs(undefined, x, y);
          };

          window.SVGPathElement.prototype.createSVGPathSegMovetoRel = function (x, y) {
            return new window.SVGPathSegMovetoRel(undefined, x, y);
          };

          window.SVGPathElement.prototype.createSVGPathSegLinetoAbs = function (x, y) {
            return new window.SVGPathSegLinetoAbs(undefined, x, y);
          };

          window.SVGPathElement.prototype.createSVGPathSegLinetoRel = function (x, y) {
            return new window.SVGPathSegLinetoRel(undefined, x, y);
          };

          window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs = function (x, y, x1, y1, x2, y2) {
            return new window.SVGPathSegCurvetoCubicAbs(undefined, x, y, x1, y1, x2, y2);
          };

          window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel = function (x, y, x1, y1, x2, y2) {
            return new window.SVGPathSegCurvetoCubicRel(undefined, x, y, x1, y1, x2, y2);
          };

          window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs = function (x, y, x1, y1) {
            return new window.SVGPathSegCurvetoQuadraticAbs(undefined, x, y, x1, y1);
          };

          window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel = function (x, y, x1, y1) {
            return new window.SVGPathSegCurvetoQuadraticRel(undefined, x, y, x1, y1);
          };

          window.SVGPathElement.prototype.createSVGPathSegArcAbs = function (x, y, r1, r2, angle, largeArcFlag, sweepFlag) {
            return new window.SVGPathSegArcAbs(undefined, x, y, r1, r2, angle, largeArcFlag, sweepFlag);
          };

          window.SVGPathElement.prototype.createSVGPathSegArcRel = function (x, y, r1, r2, angle, largeArcFlag, sweepFlag) {
            return new window.SVGPathSegArcRel(undefined, x, y, r1, r2, angle, largeArcFlag, sweepFlag);
          };

          window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs = function (x) {
            return new window.SVGPathSegLinetoHorizontalAbs(undefined, x);
          };

          window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel = function (x) {
            return new window.SVGPathSegLinetoHorizontalRel(undefined, x);
          };

          window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs = function (y) {
            return new window.SVGPathSegLinetoVerticalAbs(undefined, y);
          };

          window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel = function (y) {
            return new window.SVGPathSegLinetoVerticalRel(undefined, y);
          };

          window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs = function (x, y, x2, y2) {
            return new window.SVGPathSegCurvetoCubicSmoothAbs(undefined, x, y, x2, y2);
          };

          window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel = function (x, y, x2, y2) {
            return new window.SVGPathSegCurvetoCubicSmoothRel(undefined, x, y, x2, y2);
          };

          window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs = function (x, y) {
            return new window.SVGPathSegCurvetoQuadraticSmoothAbs(undefined, x, y);
          };

          window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel = function (x, y) {
            return new window.SVGPathSegCurvetoQuadraticSmoothRel(undefined, x, y);
          };

          if (!("getPathSegAtLength" in window.SVGPathElement.prototype)) {
            window.SVGPathElement.prototype.getPathSegAtLength = function (distance) {
              if (distance === undefined || !isFinite(distance)) throw "Invalid arguments.";
              var measurementElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
              measurementElement.setAttribute("d", this.getAttribute("d"));
              var lastPathSegment = measurementElement.pathSegList.numberOfItems - 1;
              if (lastPathSegment <= 0) return 0;

              do {
                measurementElement.pathSegList.removeItem(lastPathSegment);
                if (distance > measurementElement.getTotalLength()) break;
                lastPathSegment--;
              } while (lastPathSegment > 0);

              return lastPathSegment;
            };
          }
        }

        if (!("SVGPathSegList" in window) || !("appendItem" in window.SVGPathSegList.prototype)) {
          window.SVGPathSegList = function (pathElement) {
            this._pathElement = pathElement;
            this._list = this._parsePath(this._pathElement.getAttribute("d"));
            this._mutationObserverConfig = {
              attributes: true,
              attributeFilter: ["d"]
            };
            this._pathElementMutationObserver = new MutationObserver(this._updateListFromPathMutations.bind(this));

            this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig);
          };

          window.SVGPathSegList.prototype.classname = "SVGPathSegList";
          Object.defineProperty(window.SVGPathSegList.prototype, "numberOfItems", {
            get: function get() {
              this._checkPathSynchronizedToList();

              return this._list.length;
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegList.prototype, "length", {
            get: function get() {
              this._checkPathSynchronizedToList();

              return this._list.length;
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathElement.prototype, "pathSegList", {
            get: function get() {
              if (!this._pathSegList) this._pathSegList = new window.SVGPathSegList(this);
              return this._pathSegList;
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathElement.prototype, "normalizedPathSegList", {
            get: function get() {
              return this.pathSegList;
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathElement.prototype, "animatedPathSegList", {
            get: function get() {
              return this.pathSegList;
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathElement.prototype, "animatedNormalizedPathSegList", {
            get: function get() {
              return this.pathSegList;
            },
            enumerable: true
          });

          window.SVGPathSegList.prototype._checkPathSynchronizedToList = function () {
            this._updateListFromPathMutations(this._pathElementMutationObserver.takeRecords());
          };

          window.SVGPathSegList.prototype._updateListFromPathMutations = function (mutationRecords) {
            if (!this._pathElement) return;
            var hasPathMutations = false;
            mutationRecords.forEach(function (record) {
              if (record.attributeName == "d") hasPathMutations = true;
            });
            if (hasPathMutations) this._list = this._parsePath(this._pathElement.getAttribute("d"));
          };

          window.SVGPathSegList.prototype._writeListToPath = function () {
            this._pathElementMutationObserver.disconnect();

            this._pathElement.setAttribute("d", window.SVGPathSegList._pathSegArrayAsString(this._list));

            this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig);
          };

          window.SVGPathSegList.prototype.segmentChanged = function (pathSeg) {
            this._writeListToPath();
          };

          window.SVGPathSegList.prototype.clear = function () {
            this._checkPathSynchronizedToList();

            this._list.forEach(function (pathSeg) {
              pathSeg._owningPathSegList = null;
            });

            this._list = [];

            this._writeListToPath();
          };

          window.SVGPathSegList.prototype.initialize = function (newItem) {
            this._checkPathSynchronizedToList();

            this._list = [newItem];
            newItem._owningPathSegList = this;

            this._writeListToPath();

            return newItem;
          };

          window.SVGPathSegList.prototype._checkValidIndex = function (index) {
            if (isNaN(index) || index < 0 || index >= this.numberOfItems) throw "INDEX_SIZE_ERR";
          };

          window.SVGPathSegList.prototype.getItem = function (index) {
            this._checkPathSynchronizedToList();

            this._checkValidIndex(index);

            return this._list[index];
          };

          window.SVGPathSegList.prototype.insertItemBefore = function (newItem, index) {
            this._checkPathSynchronizedToList();

            if (index > this.numberOfItems) index = this.numberOfItems;

            if (newItem._owningPathSegList) {
              newItem = newItem.clone();
            }

            this._list.splice(index, 0, newItem);

            newItem._owningPathSegList = this;

            this._writeListToPath();

            return newItem;
          };

          window.SVGPathSegList.prototype.replaceItem = function (newItem, index) {
            this._checkPathSynchronizedToList();

            if (newItem._owningPathSegList) {
              newItem = newItem.clone();
            }

            this._checkValidIndex(index);

            this._list[index] = newItem;
            newItem._owningPathSegList = this;

            this._writeListToPath();

            return newItem;
          };

          window.SVGPathSegList.prototype.removeItem = function (index) {
            this._checkPathSynchronizedToList();

            this._checkValidIndex(index);

            var item = this._list[index];

            this._list.splice(index, 1);

            this._writeListToPath();

            return item;
          };

          window.SVGPathSegList.prototype.appendItem = function (newItem) {
            this._checkPathSynchronizedToList();

            if (newItem._owningPathSegList) {
              newItem = newItem.clone();
            }

            this._list.push(newItem);

            newItem._owningPathSegList = this;

            this._writeListToPath();

            return newItem;
          };

          window.SVGPathSegList._pathSegArrayAsString = function (pathSegArray) {
            var string = "";
            var first = true;
            pathSegArray.forEach(function (pathSeg) {
              if (first) {
                first = false;
                string += pathSeg._asPathString();
              } else {
                string += " " + pathSeg._asPathString();
              }
            });
            return string;
          };

          window.SVGPathSegList.prototype._parsePath = function (string) {
            if (!string || string.length == 0) return [];
            var owningPathSegList = this;

            var Builder = function Builder() {
              this.pathSegList = [];
            };

            Builder.prototype.appendSegment = function (pathSeg) {
              this.pathSegList.push(pathSeg);
            };

            var Source = function Source(string) {
              this._string = string;
              this._currentIndex = 0;
              this._endIndex = this._string.length;
              this._previousCommand = window.SVGPathSeg.PATHSEG_UNKNOWN;

              this._skipOptionalSpaces();
            };

            Source.prototype._isCurrentSpace = function () {
              var character = this._string[this._currentIndex];
              return character <= " " && (character == " " || character == "\n" || character == "\t" || character == "\r" || character == "\f");
            };

            Source.prototype._skipOptionalSpaces = function () {
              while (this._currentIndex < this._endIndex && this._isCurrentSpace()) {
                this._currentIndex++;
              }

              return this._currentIndex < this._endIndex;
            };

            Source.prototype._skipOptionalSpacesOrDelimiter = function () {
              if (this._currentIndex < this._endIndex && !this._isCurrentSpace() && this._string.charAt(this._currentIndex) != ",") return false;

              if (this._skipOptionalSpaces()) {
                if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == ",") {
                  this._currentIndex++;

                  this._skipOptionalSpaces();
                }
              }

              return this._currentIndex < this._endIndex;
            };

            Source.prototype.hasMoreData = function () {
              return this._currentIndex < this._endIndex;
            };

            Source.prototype.peekSegmentType = function () {
              var lookahead = this._string[this._currentIndex];
              return this._pathSegTypeFromChar(lookahead);
            };

            Source.prototype._pathSegTypeFromChar = function (lookahead) {
              switch (lookahead) {
                case "Z":
                case "z":
                  return window.SVGPathSeg.PATHSEG_CLOSEPATH;

                case "M":
                  return window.SVGPathSeg.PATHSEG_MOVETO_ABS;

                case "m":
                  return window.SVGPathSeg.PATHSEG_MOVETO_REL;

                case "L":
                  return window.SVGPathSeg.PATHSEG_LINETO_ABS;

                case "l":
                  return window.SVGPathSeg.PATHSEG_LINETO_REL;

                case "C":
                  return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS;

                case "c":
                  return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL;

                case "Q":
                  return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS;

                case "q":
                  return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL;

                case "A":
                  return window.SVGPathSeg.PATHSEG_ARC_ABS;

                case "a":
                  return window.SVGPathSeg.PATHSEG_ARC_REL;

                case "H":
                  return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS;

                case "h":
                  return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL;

                case "V":
                  return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS;

                case "v":
                  return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL;

                case "S":
                  return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;

                case "s":
                  return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL;

                case "T":
                  return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;

                case "t":
                  return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;

                default:
                  return window.SVGPathSeg.PATHSEG_UNKNOWN;
              }
            };

            Source.prototype._nextCommandHelper = function (lookahead, previousCommand) {
              if ((lookahead == "+" || lookahead == "-" || lookahead == "." || lookahead >= "0" && lookahead <= "9") && previousCommand != window.SVGPathSeg.PATHSEG_CLOSEPATH) {
                if (previousCommand == window.SVGPathSeg.PATHSEG_MOVETO_ABS) return window.SVGPathSeg.PATHSEG_LINETO_ABS;
                if (previousCommand == window.SVGPathSeg.PATHSEG_MOVETO_REL) return window.SVGPathSeg.PATHSEG_LINETO_REL;
                return previousCommand;
              }

              return window.SVGPathSeg.PATHSEG_UNKNOWN;
            };

            Source.prototype.initialCommandIsMoveTo = function () {
              if (!this.hasMoreData()) return true;
              var command = this.peekSegmentType();
              return command == window.SVGPathSeg.PATHSEG_MOVETO_ABS || command == window.SVGPathSeg.PATHSEG_MOVETO_REL;
            };

            Source.prototype._parseNumber = function () {
              var exponent = 0;
              var integer = 0;
              var frac = 1;
              var decimal = 0;
              var sign = 1;
              var expsign = 1;
              var startIndex = this._currentIndex;

              this._skipOptionalSpaces();

              if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == "+") this._currentIndex++;else if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == "-") {
                this._currentIndex++;
                sign = -1;
              }
              if (this._currentIndex == this._endIndex || (this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") && this._string.charAt(this._currentIndex) != ".") return undefined;
              var startIntPartIndex = this._currentIndex;

              while (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9") {
                this._currentIndex++;
              }

              if (this._currentIndex != startIntPartIndex) {
                var scanIntPartIndex = this._currentIndex - 1;
                var multiplier = 1;

                while (scanIntPartIndex >= startIntPartIndex) {
                  integer += multiplier * (this._string.charAt(scanIntPartIndex--) - "0");
                  multiplier *= 10;
                }
              }

              if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == ".") {
                this._currentIndex++;
                if (this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") return undefined;

                while (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9") {
                  frac *= 10;
                  decimal += (this._string.charAt(this._currentIndex) - "0") / frac;
                  this._currentIndex += 1;
                }
              }

              if (this._currentIndex != startIndex && this._currentIndex + 1 < this._endIndex && (this._string.charAt(this._currentIndex) == "e" || this._string.charAt(this._currentIndex) == "E") && this._string.charAt(this._currentIndex + 1) != "x" && this._string.charAt(this._currentIndex + 1) != "m") {
                this._currentIndex++;

                if (this._string.charAt(this._currentIndex) == "+") {
                  this._currentIndex++;
                } else if (this._string.charAt(this._currentIndex) == "-") {
                  this._currentIndex++;
                  expsign = -1;
                }

                if (this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") return undefined;

                while (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9") {
                  exponent *= 10;
                  exponent += this._string.charAt(this._currentIndex) - "0";
                  this._currentIndex++;
                }
              }

              var number = integer + decimal;
              number *= sign;
              if (exponent) number *= Math.pow(10, expsign * exponent);
              if (startIndex == this._currentIndex) return undefined;

              this._skipOptionalSpacesOrDelimiter();

              return number;
            };

            Source.prototype._parseArcFlag = function () {
              if (this._currentIndex >= this._endIndex) return undefined;
              var flag = false;

              var flagChar = this._string.charAt(this._currentIndex++);

              if (flagChar == "0") flag = false;else if (flagChar == "1") flag = true;else return undefined;

              this._skipOptionalSpacesOrDelimiter();

              return flag;
            };

            Source.prototype.parseSegment = function () {
              var lookahead = this._string[this._currentIndex];

              var command = this._pathSegTypeFromChar(lookahead);

              if (command == window.SVGPathSeg.PATHSEG_UNKNOWN) {
                if (this._previousCommand == window.SVGPathSeg.PATHSEG_UNKNOWN) return null;
                command = this._nextCommandHelper(lookahead, this._previousCommand);
                if (command == window.SVGPathSeg.PATHSEG_UNKNOWN) return null;
              } else {
                this._currentIndex++;
              }

              this._previousCommand = command;

              switch (command) {
                case window.SVGPathSeg.PATHSEG_MOVETO_REL:
                  return new window.SVGPathSegMovetoRel(owningPathSegList, this._parseNumber(), this._parseNumber());

                case window.SVGPathSeg.PATHSEG_MOVETO_ABS:
                  return new window.SVGPathSegMovetoAbs(owningPathSegList, this._parseNumber(), this._parseNumber());

                case window.SVGPathSeg.PATHSEG_LINETO_REL:
                  return new window.SVGPathSegLinetoRel(owningPathSegList, this._parseNumber(), this._parseNumber());

                case window.SVGPathSeg.PATHSEG_LINETO_ABS:
                  return new window.SVGPathSegLinetoAbs(owningPathSegList, this._parseNumber(), this._parseNumber());

                case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
                  return new window.SVGPathSegLinetoHorizontalRel(owningPathSegList, this._parseNumber());

                case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
                  return new window.SVGPathSegLinetoHorizontalAbs(owningPathSegList, this._parseNumber());

                case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
                  return new window.SVGPathSegLinetoVerticalRel(owningPathSegList, this._parseNumber());

                case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
                  return new window.SVGPathSegLinetoVerticalAbs(owningPathSegList, this._parseNumber());

                case window.SVGPathSeg.PATHSEG_CLOSEPATH:
                  this._skipOptionalSpaces();

                  return new window.SVGPathSegClosePath(owningPathSegList);

                case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
                  var points = {
                    x1: this._parseNumber(),
                    y1: this._parseNumber(),
                    x2: this._parseNumber(),
                    y2: this._parseNumber(),
                    x: this._parseNumber(),
                    y: this._parseNumber()
                  };
                  return new window.SVGPathSegCurvetoCubicRel(owningPathSegList, points.x, points.y, points.x1, points.y1, points.x2, points.y2);

                case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
                  var points = {
                    x1: this._parseNumber(),
                    y1: this._parseNumber(),
                    x2: this._parseNumber(),
                    y2: this._parseNumber(),
                    x: this._parseNumber(),
                    y: this._parseNumber()
                  };
                  return new window.SVGPathSegCurvetoCubicAbs(owningPathSegList, points.x, points.y, points.x1, points.y1, points.x2, points.y2);

                case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                  var points = {
                    x2: this._parseNumber(),
                    y2: this._parseNumber(),
                    x: this._parseNumber(),
                    y: this._parseNumber()
                  };
                  return new window.SVGPathSegCurvetoCubicSmoothRel(owningPathSegList, points.x, points.y, points.x2, points.y2);

                case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                  var points = {
                    x2: this._parseNumber(),
                    y2: this._parseNumber(),
                    x: this._parseNumber(),
                    y: this._parseNumber()
                  };
                  return new window.SVGPathSegCurvetoCubicSmoothAbs(owningPathSegList, points.x, points.y, points.x2, points.y2);

                case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
                  var points = {
                    x1: this._parseNumber(),
                    y1: this._parseNumber(),
                    x: this._parseNumber(),
                    y: this._parseNumber()
                  };
                  return new window.SVGPathSegCurvetoQuadraticRel(owningPathSegList, points.x, points.y, points.x1, points.y1);

                case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
                  var points = {
                    x1: this._parseNumber(),
                    y1: this._parseNumber(),
                    x: this._parseNumber(),
                    y: this._parseNumber()
                  };
                  return new window.SVGPathSegCurvetoQuadraticAbs(owningPathSegList, points.x, points.y, points.x1, points.y1);

                case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
                  return new window.SVGPathSegCurvetoQuadraticSmoothRel(owningPathSegList, this._parseNumber(), this._parseNumber());

                case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
                  return new window.SVGPathSegCurvetoQuadraticSmoothAbs(owningPathSegList, this._parseNumber(), this._parseNumber());

                case window.SVGPathSeg.PATHSEG_ARC_REL:
                  var points = {
                    x1: this._parseNumber(),
                    y1: this._parseNumber(),
                    arcAngle: this._parseNumber(),
                    arcLarge: this._parseArcFlag(),
                    arcSweep: this._parseArcFlag(),
                    x: this._parseNumber(),
                    y: this._parseNumber()
                  };
                  return new window.SVGPathSegArcRel(owningPathSegList, points.x, points.y, points.x1, points.y1, points.arcAngle, points.arcLarge, points.arcSweep);

                case window.SVGPathSeg.PATHSEG_ARC_ABS:
                  var points = {
                    x1: this._parseNumber(),
                    y1: this._parseNumber(),
                    arcAngle: this._parseNumber(),
                    arcLarge: this._parseArcFlag(),
                    arcSweep: this._parseArcFlag(),
                    x: this._parseNumber(),
                    y: this._parseNumber()
                  };
                  return new window.SVGPathSegArcAbs(owningPathSegList, points.x, points.y, points.x1, points.y1, points.arcAngle, points.arcLarge, points.arcSweep);

                default:
                  throw "Unknown path seg type.";
              }
            };

            var builder = new Builder();
            var source = new Source(string);
            if (!source.initialCommandIsMoveTo()) return [];

            while (source.hasMoreData()) {
              var pathSeg = source.parseSegment();
              if (!pathSeg) return [];
              builder.appendSegment(pathSeg);
            }

            return builder.pathSegList;
          };
        }
      })();
      /***/

    },

    /***/
    1524:
    /*!****************************************************************!*\
      !*** ./node_modules/tsparticles/Plugins/PolygonMask/plugin.js ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function get() {
            return m[k];
          }
        });
      } : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });

      var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
        Object.defineProperty(o, "default", {
          enumerable: true,
          value: v
        });
      } : function (o, v) {
        o["default"] = v;
      });

      var __importStar = this && this.__importStar || function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) {
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        }

        __setModuleDefault(result, mod);

        return result;
      };

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.loadPolygonMaskPlugin = void 0;

      var PolygonMaskInstance_1 = __webpack_require__(
      /*! ./PolygonMaskInstance */
      11330);

      var PolygonMask_1 = __webpack_require__(
      /*! ./Options/Classes/PolygonMask */
      80710);

      var Enums_1 = __webpack_require__(
      /*! ./Enums */
      65515);

      var Utils_1 = __webpack_require__(
      /*! ../../Utils */
      18942);

      var Plugin = /*#__PURE__*/function () {
        function Plugin() {
          _classCallCheck(this, Plugin);

          this.id = "polygonMask";
        }

        _createClass(Plugin, [{
          key: "getPlugin",
          value: function getPlugin(container) {
            return new PolygonMaskInstance_1.PolygonMaskInstance(container);
          }
        }, {
          key: "needsPlugin",
          value: function needsPlugin(options) {
            var _a, _b, _c;

            return (_b = (_a = options === null || options === void 0 ? void 0 : options.polygon) === null || _a === void 0 ? void 0 : _a.enable) !== null && _b !== void 0 ? _b : ((_c = options === null || options === void 0 ? void 0 : options.polygon) === null || _c === void 0 ? void 0 : _c.type) !== undefined && options.polygon.type !== Enums_1.Type.none;
          }
        }, {
          key: "loadOptions",
          value: function loadOptions(options, source) {
            if (!this.needsPlugin(source)) {
              return;
            }

            var optionsCast = options;
            var polygonOptions = optionsCast.polygon;

            if ((polygonOptions === null || polygonOptions === void 0 ? void 0 : polygonOptions.load) === undefined) {
              optionsCast.polygon = polygonOptions = new PolygonMask_1.PolygonMask();
            }

            polygonOptions.load(source === null || source === void 0 ? void 0 : source.polygon);
          }
        }]);

        return Plugin;
      }();

      function loadPolygonMaskPlugin(_x20) {
        return _loadPolygonMaskPlugin.apply(this, arguments);
      }

      function _loadPolygonMaskPlugin() {
        _loadPolygonMaskPlugin = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(tsParticles) {
          var plugin;
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  if ((0, Utils_1.isSsr)()) {
                    _context12.next = 4;
                    break;
                  }

                  if (window.SVGPathSeg) {
                    _context12.next = 4;
                    break;
                  }

                  _context12.next = 4;
                  return Promise.resolve().then(function () {
                    return __importStar(__webpack_require__(
                    /*! ./pathseg */
                    64535));
                  });

                case 4:
                  plugin = new Plugin();
                  tsParticles.addPlugin(plugin);

                case 6:
                case "end":
                  return _context12.stop();
              }
            }
          }, _callee12);
        }));
        return _loadPolygonMaskPlugin.apply(this, arguments);
      }

      exports.loadPolygonMaskPlugin = loadPolygonMaskPlugin;
      /***/
    },

    /***/
    7734:
    /*!***************************************************************!*\
      !*** ./node_modules/tsparticles/Plugins/PolygonMask/utils.js ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.segmentBounce = exports.calcClosestPtOnSegment = exports.parsePaths = exports.drawPolygonMaskPath = exports.drawPolygonMask = void 0;

      var Utils_1 = __webpack_require__(
      /*! ../../Utils */
      18942);

      function drawPolygonMask(context, rawData, stroke) {
        var color = (0, Utils_1.colorToRgb)(stroke.color);

        if (!color) {
          return;
        }

        context.beginPath();
        context.moveTo(rawData[0].x, rawData[0].y);

        var _iterator70 = _createForOfIteratorHelper(rawData),
            _step70;

        try {
          for (_iterator70.s(); !(_step70 = _iterator70.n()).done;) {
            var item = _step70.value;
            context.lineTo(item.x, item.y);
          }
        } catch (err) {
          _iterator70.e(err);
        } finally {
          _iterator70.f();
        }

        context.closePath();
        context.strokeStyle = (0, Utils_1.getStyleFromRgb)(color);
        context.lineWidth = stroke.width;
        context.stroke();
      }

      exports.drawPolygonMask = drawPolygonMask;

      function drawPolygonMaskPath(context, path, stroke, position) {
        context.translate(position.x, position.y);
        var color = (0, Utils_1.colorToRgb)(stroke.color);

        if (!color) {
          return;
        }

        context.strokeStyle = (0, Utils_1.getStyleFromRgb)(color, stroke.opacity);
        context.lineWidth = stroke.width;
        context.stroke(path);
      }

      exports.drawPolygonMaskPath = drawPolygonMaskPath;

      function parsePaths(paths, scale, offset) {
        var _a;

        var res = [];

        var _iterator71 = _createForOfIteratorHelper(paths),
            _step71;

        try {
          for (_iterator71.s(); !(_step71 = _iterator71.n()).done;) {
            var path = _step71.value;
            var segments = path.element.pathSegList;
            var len = (_a = segments === null || segments === void 0 ? void 0 : segments.numberOfItems) !== null && _a !== void 0 ? _a : 0;
            var p = {
              x: 0,
              y: 0
            };

            for (var i = 0; i < len; i++) {
              var segment = segments === null || segments === void 0 ? void 0 : segments.getItem(i);
              var svgPathSeg = window.SVGPathSeg;

              switch (segment === null || segment === void 0 ? void 0 : segment.pathSegType) {
                case svgPathSeg.PATHSEG_MOVETO_ABS:
                case svgPathSeg.PATHSEG_LINETO_ABS:
                case svgPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
                case svgPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
                case svgPathSeg.PATHSEG_ARC_ABS:
                case svgPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                case svgPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
                  {
                    var absSeg = segment;
                    p.x = absSeg.x;
                    p.y = absSeg.y;
                    break;
                  }

                case svgPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
                  p.x = segment.x;
                  break;

                case svgPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
                  p.y = segment.y;
                  break;

                case svgPathSeg.PATHSEG_LINETO_REL:
                case svgPathSeg.PATHSEG_MOVETO_REL:
                case svgPathSeg.PATHSEG_CURVETO_CUBIC_REL:
                case svgPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
                case svgPathSeg.PATHSEG_ARC_REL:
                case svgPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                case svgPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
                  {
                    var relSeg = segment;
                    p.x += relSeg.x;
                    p.y += relSeg.y;
                    break;
                  }

                case svgPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
                  p.x += segment.x;
                  break;

                case svgPathSeg.PATHSEG_LINETO_VERTICAL_REL:
                  p.y += segment.y;
                  break;

                case svgPathSeg.PATHSEG_UNKNOWN:
                case svgPathSeg.PATHSEG_CLOSEPATH:
                  continue;
              }

              res.push({
                x: p.x * scale + offset.x,
                y: p.y * scale + offset.y
              });
            }
          }
        } catch (err) {
          _iterator71.e(err);
        } finally {
          _iterator71.f();
        }

        return res;
      }

      exports.parsePaths = parsePaths;

      function calcClosestPtOnSegment(s1, s2, pos) {
        var _ref14 = (0, Utils_1.getDistances)(pos, s1),
            dx = _ref14.dx,
            dy = _ref14.dy;

        var _ref15 = (0, Utils_1.getDistances)(s2, s1),
            dxx = _ref15.dx,
            dyy = _ref15.dy;

        var t = (dx * dxx + dy * dyy) / (Math.pow(dxx, 2) + Math.pow(dyy, 2));
        var x = s1.x + dxx * t;
        var y = s1.y + dyy * t;

        if (t < 0) {
          x = s1.x;
          y = s1.y;
        } else if (t > 1) {
          x = s2.x;
          y = s2.y;
        }

        return {
          x: x,
          y: y,
          isOnSegment: t >= 0 && t <= 1
        };
      }

      exports.calcClosestPtOnSegment = calcClosestPtOnSegment;

      function segmentBounce(start, stop, velocity) {
        var _ref16 = (0, Utils_1.getDistances)(start, stop),
            dx = _ref16.dx,
            dy = _ref16.dy;

        var wallAngle = Math.atan2(dy, dx);
        var wallNormalX = Math.sin(wallAngle);
        var wallNormalY = -Math.cos(wallAngle);
        var d = 2 * (velocity.x * wallNormalX + velocity.y * wallNormalY);
        velocity.x -= d * wallNormalX;
        velocity.y -= d * wallNormalY;
      }

      exports.segmentBounce = segmentBounce;
      /***/
    },

    /***/
    87924:
    /*!****************************************************************!*\
      !*** ./node_modules/tsparticles/Shapes/Circle/CircleDrawer.js ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CircleDrawer = void 0;

      var CircleDrawer = /*#__PURE__*/function () {
        function CircleDrawer() {
          _classCallCheck(this, CircleDrawer);
        }

        _createClass(CircleDrawer, [{
          key: "getSidesCount",
          value: function getSidesCount() {
            return 12;
          }
        }, {
          key: "draw",
          value: function draw(context, particle, radius) {
            context.arc(0, 0, radius, 0, Math.PI * 2, false);
          }
        }]);

        return CircleDrawer;
      }();

      exports.CircleDrawer = CircleDrawer;
      /***/
    },

    /***/
    95934:
    /*!*********************************************************!*\
      !*** ./node_modules/tsparticles/Shapes/Circle/index.js ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.loadCircleShape = void 0;

      var CircleDrawer_1 = __webpack_require__(
      /*! ./CircleDrawer */
      87924);

      function loadCircleShape(tsParticles) {
        tsParticles.addShape("circle", new CircleDrawer_1.CircleDrawer());
      }

      exports.loadCircleShape = loadCircleShape;
      /***/
    },

    /***/
    35162:
    /*!**************************************************************!*\
      !*** ./node_modules/tsparticles/Shapes/Image/ImageDrawer.js ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      var __classPrivateFieldSet = this && this.__classPrivateFieldSet || function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
      };

      var __classPrivateFieldGet = this && this.__classPrivateFieldGet || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      };

      var _ImageDrawer_images;

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ImageDrawer = void 0;

      var Utils_1 = __webpack_require__(
      /*! ../../Utils */
      18942);

      var Enums_1 = __webpack_require__(
      /*! ../../Enums */
      39666);

      var Utils_2 = __webpack_require__(
      /*! ./Utils */
      20274);

      var ImageDrawer = /*#__PURE__*/function () {
        function ImageDrawer() {
          _classCallCheck(this, ImageDrawer);

          _ImageDrawer_images.set(this, void 0);

          __classPrivateFieldSet(this, _ImageDrawer_images, [], "f");
        }

        _createClass(ImageDrawer, [{
          key: "getSidesCount",
          value: function getSidesCount() {
            return 12;
          }
        }, {
          key: "getImages",
          value: function getImages(container) {
            var containerImages = __classPrivateFieldGet(this, _ImageDrawer_images, "f").find(function (t) {
              return t.id === container.id;
            });

            if (!containerImages) {
              __classPrivateFieldGet(this, _ImageDrawer_images, "f").push({
                id: container.id,
                images: []
              });

              return this.getImages(container);
            } else {
              return containerImages;
            }
          }
        }, {
          key: "addImage",
          value: function addImage(container, image) {
            var containerImages = this.getImages(container);
            containerImages === null || containerImages === void 0 ? void 0 : containerImages.images.push(image);
          }
        }, {
          key: "init",
          value: function () {
            var _init2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(container) {
              var _iterator72, _step72, manualParticle, emitterOptions, _iterator73, _step73, emitter, interactiveEmitters, _iterator74, _step74, _emitter;

              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return this.loadImagesFromParticlesOptions(container, container.actualOptions.particles);

                    case 2:
                      _context13.next = 4;
                      return this.loadImagesFromParticlesOptions(container, container.actualOptions.interactivity.modes.trail.particles);

                    case 4:
                      _iterator72 = _createForOfIteratorHelper(container.actualOptions.manualParticles);
                      _context13.prev = 5;

                      _iterator72.s();

                    case 7:
                      if ((_step72 = _iterator72.n()).done) {
                        _context13.next = 13;
                        break;
                      }

                      manualParticle = _step72.value;
                      _context13.next = 11;
                      return this.loadImagesFromParticlesOptions(container, manualParticle.options);

                    case 11:
                      _context13.next = 7;
                      break;

                    case 13:
                      _context13.next = 18;
                      break;

                    case 15:
                      _context13.prev = 15;
                      _context13.t0 = _context13["catch"](5);

                      _iterator72.e(_context13.t0);

                    case 18:
                      _context13.prev = 18;

                      _iterator72.f();

                      return _context13.finish(18);

                    case 21:
                      emitterOptions = container.actualOptions;

                      if (!emitterOptions.emitters) {
                        _context13.next = 45;
                        break;
                      }

                      if (!(emitterOptions.emitters instanceof Array)) {
                        _context13.next = 43;
                        break;
                      }

                      _iterator73 = _createForOfIteratorHelper(emitterOptions.emitters);
                      _context13.prev = 25;

                      _iterator73.s();

                    case 27:
                      if ((_step73 = _iterator73.n()).done) {
                        _context13.next = 33;
                        break;
                      }

                      emitter = _step73.value;
                      _context13.next = 31;
                      return this.loadImagesFromParticlesOptions(container, emitter.particles);

                    case 31:
                      _context13.next = 27;
                      break;

                    case 33:
                      _context13.next = 38;
                      break;

                    case 35:
                      _context13.prev = 35;
                      _context13.t1 = _context13["catch"](25);

                      _iterator73.e(_context13.t1);

                    case 38:
                      _context13.prev = 38;

                      _iterator73.f();

                      return _context13.finish(38);

                    case 41:
                      _context13.next = 45;
                      break;

                    case 43:
                      _context13.next = 45;
                      return this.loadImagesFromParticlesOptions(container, emitterOptions.emitters.particles);

                    case 45:
                      interactiveEmitters = emitterOptions.interactivity.modes.emitters;

                      if (!interactiveEmitters) {
                        _context13.next = 69;
                        break;
                      }

                      if (!(interactiveEmitters instanceof Array)) {
                        _context13.next = 67;
                        break;
                      }

                      _iterator74 = _createForOfIteratorHelper(interactiveEmitters);
                      _context13.prev = 49;

                      _iterator74.s();

                    case 51:
                      if ((_step74 = _iterator74.n()).done) {
                        _context13.next = 57;
                        break;
                      }

                      _emitter = _step74.value;
                      _context13.next = 55;
                      return this.loadImagesFromParticlesOptions(container, _emitter.particles);

                    case 55:
                      _context13.next = 51;
                      break;

                    case 57:
                      _context13.next = 62;
                      break;

                    case 59:
                      _context13.prev = 59;
                      _context13.t2 = _context13["catch"](49);

                      _iterator74.e(_context13.t2);

                    case 62:
                      _context13.prev = 62;

                      _iterator74.f();

                      return _context13.finish(62);

                    case 65:
                      _context13.next = 69;
                      break;

                    case 67:
                      _context13.next = 69;
                      return this.loadImagesFromParticlesOptions(container, interactiveEmitters.particles);

                    case 69:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this, [[5, 15, 18, 21], [25, 35, 38, 41], [49, 59, 62, 65]]);
            }));

            function init(_x21) {
              return _init2.apply(this, arguments);
            }

            return init;
          }()
        }, {
          key: "destroy",
          value: function destroy() {
            __classPrivateFieldSet(this, _ImageDrawer_images, [], "f");
          }
        }, {
          key: "loadImagesFromParticlesOptions",
          value: function () {
            var _loadImagesFromParticlesOptions = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(container, options) {
              var _a, _b, _c, shapeOptions, idx, imageOptions, _iterator75, _step75, optionsImage, groupName, group;

              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      shapeOptions = options === null || options === void 0 ? void 0 : options.shape;

                      if (!(!(shapeOptions === null || shapeOptions === void 0 ? void 0 : shapeOptions.type) || !shapeOptions.options || !(0, Utils_1.isInArray)(Enums_1.ShapeType.image, shapeOptions.type) && !(0, Utils_1.isInArray)(Enums_1.ShapeType.images, shapeOptions.type))) {
                        _context14.next = 3;
                        break;
                      }

                      return _context14.abrupt("return");

                    case 3:
                      idx = __classPrivateFieldGet(this, _ImageDrawer_images, "f").findIndex(function (t) {
                        return t.id === container.id;
                      });

                      if (idx >= 0) {
                        __classPrivateFieldGet(this, _ImageDrawer_images, "f").splice(idx, 1);
                      }

                      imageOptions = (_a = shapeOptions.options[Enums_1.ShapeType.images]) !== null && _a !== void 0 ? _a : shapeOptions.options[Enums_1.ShapeType.image];

                      if (!(imageOptions instanceof Array)) {
                        _context14.next = 26;
                        break;
                      }

                      _iterator75 = _createForOfIteratorHelper(imageOptions);
                      _context14.prev = 8;

                      _iterator75.s();

                    case 10:
                      if ((_step75 = _iterator75.n()).done) {
                        _context14.next = 16;
                        break;
                      }

                      optionsImage = _step75.value;
                      _context14.next = 14;
                      return this.loadImageShape(container, optionsImage);

                    case 14:
                      _context14.next = 10;
                      break;

                    case 16:
                      _context14.next = 21;
                      break;

                    case 18:
                      _context14.prev = 18;
                      _context14.t0 = _context14["catch"](8);

                      _iterator75.e(_context14.t0);

                    case 21:
                      _context14.prev = 21;

                      _iterator75.f();

                      return _context14.finish(21);

                    case 24:
                      _context14.next = 28;
                      break;

                    case 26:
                      _context14.next = 28;
                      return this.loadImageShape(container, imageOptions);

                    case 28:
                      if (!(options === null || options === void 0 ? void 0 : options.groups)) {
                        _context14.next = 37;
                        break;
                      }

                      _context14.t1 = regeneratorRuntime.keys(options.groups);

                    case 30:
                      if ((_context14.t2 = _context14.t1()).done) {
                        _context14.next = 37;
                        break;
                      }

                      groupName = _context14.t2.value;
                      group = options.groups[groupName];
                      _context14.next = 35;
                      return this.loadImagesFromParticlesOptions(container, group);

                    case 35:
                      _context14.next = 30;
                      break;

                    case 37:
                      if (!((_c = (_b = options === null || options === void 0 ? void 0 : options.destroy) === null || _b === void 0 ? void 0 : _b.split) === null || _c === void 0 ? void 0 : _c.particles)) {
                        _context14.next = 40;
                        break;
                      }

                      _context14.next = 40;
                      return this.loadImagesFromParticlesOptions(container, options === null || options === void 0 ? void 0 : options.destroy.split.particles);

                    case 40:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this, [[8, 18, 21, 24]]);
            }));

            function loadImagesFromParticlesOptions(_x22, _x23) {
              return _loadImagesFromParticlesOptions.apply(this, arguments);
            }

            return loadImagesFromParticlesOptions;
          }()
        }, {
          key: "loadImageShape",
          value: function () {
            var _loadImageShape = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(container, imageShape) {
              var imageFunc, image;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.prev = 0;
                      imageFunc = imageShape.replaceColor ? Utils_2.downloadSvgImage : Utils_2.loadImage;
                      _context15.next = 4;
                      return imageFunc(imageShape.src);

                    case 4:
                      image = _context15.sent;

                      if (image) {
                        this.addImage(container, image);
                      }

                      _context15.next = 11;
                      break;

                    case 8:
                      _context15.prev = 8;
                      _context15.t0 = _context15["catch"](0);
                      console.warn("tsParticles error - ".concat(imageShape.src, " not found"));

                    case 11:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this, [[0, 8]]);
            }));

            function loadImageShape(_x24, _x25) {
              return _loadImageShape.apply(this, arguments);
            }

            return loadImageShape;
          }()
        }, {
          key: "draw",
          value: function draw(context, particle, radius, opacity) {
            var _a, _b;

            if (!context) {
              return;
            }

            var image = particle.image;
            var element = (_a = image === null || image === void 0 ? void 0 : image.data) === null || _a === void 0 ? void 0 : _a.element;

            if (!element) {
              return;
            }

            var ratio = (_b = image === null || image === void 0 ? void 0 : image.ratio) !== null && _b !== void 0 ? _b : 1;
            var pos = {
              x: -radius,
              y: -radius
            };

            if (!(image === null || image === void 0 ? void 0 : image.data.svgData) || !(image === null || image === void 0 ? void 0 : image.replaceColor)) {
              context.globalAlpha = opacity;
            }

            context.drawImage(element, pos.x, pos.y, radius * 2, radius * 2 / ratio);

            if (!(image === null || image === void 0 ? void 0 : image.data.svgData) || !(image === null || image === void 0 ? void 0 : image.replaceColor)) {
              context.globalAlpha = 1;
            }
          }
        }, {
          key: "loadShape",
          value: function loadShape(particle) {
            var _a, _b, _c, _d, _e, _f, _g;

            if (particle.shape !== "image" && particle.shape !== "images") {
              return;
            }

            var images = this.getImages(particle.container).images;
            var imageData = particle.shapeData;
            var image = (_a = images.find(function (t) {
              return t.source === imageData.src;
            })) !== null && _a !== void 0 ? _a : images[0];
            var color = particle.getFillColor();
            var imageRes;

            if (!image) {
              return;
            }

            if (image.svgData !== undefined && imageData.replaceColor && color) {
              var svgColoredData = (0, Utils_2.replaceColorSvg)(image, color, (_c = (_b = particle.opacity) === null || _b === void 0 ? void 0 : _b.value) !== null && _c !== void 0 ? _c : 1);
              var svg = new Blob([svgColoredData], {
                type: "image/svg+xml"
              });
              var domUrl = URL || window.URL || window.webkitURL || window;
              var url = domUrl.createObjectURL(svg);
              var img = new Image();
              imageRes = {
                data: Object.assign(Object.assign({}, image), {
                  svgData: svgColoredData
                }),
                ratio: imageData.width / imageData.height,
                replaceColor: (_d = imageData.replaceColor) !== null && _d !== void 0 ? _d : imageData.replace_color,
                source: imageData.src
              };
              img.addEventListener("load", function () {
                var pImage = particle.image;

                if (pImage) {
                  pImage.loaded = true;
                  image.element = img;
                }

                domUrl.revokeObjectURL(url);
              });
              img.addEventListener("error", function () {
                domUrl.revokeObjectURL(url);
                (0, Utils_2.loadImage)(imageData.src).then(function (img2) {
                  var pImage = particle.image;

                  if (pImage) {
                    image.element = img2 === null || img2 === void 0 ? void 0 : img2.element;
                    pImage.loaded = true;
                  }
                });
              });
              img.src = url;
            } else {
              imageRes = {
                data: image,
                loaded: true,
                ratio: imageData.width / imageData.height,
                replaceColor: (_e = imageData.replaceColor) !== null && _e !== void 0 ? _e : imageData.replace_color,
                source: imageData.src
              };
            }

            if (!imageRes.ratio) {
              imageRes.ratio = 1;
            }

            var fill = (_f = imageData.fill) !== null && _f !== void 0 ? _f : particle.fill;
            var close = (_g = imageData.close) !== null && _g !== void 0 ? _g : particle.close;
            var imageShape = {
              image: imageRes,
              fill: fill,
              close: close
            };
            particle.image = imageShape.image;
            particle.fill = imageShape.fill;
            particle.close = imageShape.close;
          }
        }]);

        return ImageDrawer;
      }();

      exports.ImageDrawer = ImageDrawer;
      _ImageDrawer_images = new WeakMap();
      /***/
    },

    /***/
    20274:
    /*!********************************************************!*\
      !*** ./node_modules/tsparticles/Shapes/Image/Utils.js ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.replaceColorSvg = exports.downloadSvgImage = exports.loadImage = void 0;

      var Utils_1 = __webpack_require__(
      /*! ../../Utils */
      18942);

      function loadImage(source) {
        return new Promise(function (resolve, reject) {
          if (!source) {
            reject("Error tsParticles - No image.src");
            return;
          }

          var image = {
            source: source,
            type: source.substr(source.length - 3)
          };
          var img = new Image();
          img.addEventListener("load", function () {
            image.element = img;
            resolve(image);
          });
          img.addEventListener("error", function () {
            reject("Error tsParticles - loading image: ".concat(source));
          });
          img.src = source;
        });
      }

      exports.loadImage = loadImage;

      function downloadSvgImage(_x26) {
        return _downloadSvgImage.apply(this, arguments);
      }

      function _downloadSvgImage() {
        _downloadSvgImage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(source) {
          var image, response;
          return regeneratorRuntime.wrap(function _callee16$(_context16) {
            while (1) {
              switch (_context16.prev = _context16.next) {
                case 0:
                  if (source) {
                    _context16.next = 2;
                    break;
                  }

                  throw new Error("Error tsParticles - No image.src");

                case 2:
                  image = {
                    source: source,
                    type: source.substr(source.length - 3)
                  };

                  if (!(image.type !== "svg")) {
                    _context16.next = 5;
                    break;
                  }

                  return _context16.abrupt("return", loadImage(source));

                case 5:
                  _context16.next = 7;
                  return fetch(image.source);

                case 7:
                  response = _context16.sent;

                  if (response.ok) {
                    _context16.next = 10;
                    break;
                  }

                  throw new Error("Error tsParticles - Image not found");

                case 10:
                  _context16.next = 12;
                  return response.text();

                case 12:
                  image.svgData = _context16.sent;
                  return _context16.abrupt("return", image);

                case 14:
                case "end":
                  return _context16.stop();
              }
            }
          }, _callee16);
        }));
        return _downloadSvgImage.apply(this, arguments);
      }

      exports.downloadSvgImage = downloadSvgImage;

      function replaceColorSvg(imageShape, color, opacity) {
        var svgData = imageShape.svgData;

        if (!svgData) {
          return "";
        }

        if (svgData.includes("fill")) {
          var currentColor = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;
          return svgData.replace(currentColor, function () {
            return (0, Utils_1.getStyleFromHsl)(color, opacity);
          });
        }

        var preFillIndex = svgData.indexOf(">");
        return "".concat(svgData.substring(0, preFillIndex), " fill=\"").concat((0, Utils_1.getStyleFromHsl)(color, opacity), "\"").concat(svgData.substring(preFillIndex));
      }

      exports.replaceColorSvg = replaceColorSvg;
      /***/
    },

    /***/
    61998:
    /*!********************************************************!*\
      !*** ./node_modules/tsparticles/Shapes/Image/index.js ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.loadImageShape = void 0;

      var ImageDrawer_1 = __webpack_require__(
      /*! ./ImageDrawer */
      35162);

      function loadImageShape(tsParticles) {
        var imageDrawer = new ImageDrawer_1.ImageDrawer();
        tsParticles.addShape("image", imageDrawer);
        tsParticles.addShape("images", imageDrawer);
      }

      exports.loadImageShape = loadImageShape;
      /***/
    },

    /***/
    32097:
    /*!************************************************************!*\
      !*** ./node_modules/tsparticles/Shapes/Line/LineDrawer.js ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LineDrawer = void 0;

      var LineDrawer = /*#__PURE__*/function () {
        function LineDrawer() {
          _classCallCheck(this, LineDrawer);
        }

        _createClass(LineDrawer, [{
          key: "getSidesCount",
          value: function getSidesCount() {
            return 1;
          }
        }, {
          key: "draw",
          value: function draw(context, particle, radius) {
            context.moveTo(-radius / 2, 0);
            context.lineTo(radius / 2, 0);
          }
        }]);

        return LineDrawer;
      }();

      exports.LineDrawer = LineDrawer;
      /***/
    },

    /***/
    36320:
    /*!*******************************************************!*\
      !*** ./node_modules/tsparticles/Shapes/Line/index.js ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.loadLineShape = void 0;

      var LineDrawer_1 = __webpack_require__(
      /*! ./LineDrawer */
      32097);

      function loadLineShape(tsParticles) {
        tsParticles.addShape("line", new LineDrawer_1.LineDrawer());
      }

      exports.loadLineShape = loadLineShape;
      /***/
    },

    /***/
    95896:
    /*!******************************************************************!*\
      !*** ./node_modules/tsparticles/Shapes/Polygon/PolygonDrawer.js ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PolygonDrawer = void 0;

      var PolygonDrawerBase_1 = __webpack_require__(
      /*! ./PolygonDrawerBase */
      83952);

      var PolygonDrawer = /*#__PURE__*/function (_PolygonDrawerBase_1$) {
        _inherits(PolygonDrawer, _PolygonDrawerBase_1$);

        var _super34 = _createSuper(PolygonDrawer);

        function PolygonDrawer() {
          _classCallCheck(this, PolygonDrawer);

          return _super34.apply(this, arguments);
        }

        _createClass(PolygonDrawer, [{
          key: "getSidesData",
          value: function getSidesData(particle, radius) {
            var _a, _b;

            var polygon = particle.shapeData;
            var sides = (_b = (_a = polygon === null || polygon === void 0 ? void 0 : polygon.sides) !== null && _a !== void 0 ? _a : polygon === null || polygon === void 0 ? void 0 : polygon.nb_sides) !== null && _b !== void 0 ? _b : 5;
            return {
              count: {
                denominator: 1,
                numerator: sides
              },
              length: radius * 2.66 / (sides / 3)
            };
          }
        }, {
          key: "getCenter",
          value: function getCenter(particle, radius) {
            var sides = this.getSidesCount(particle);
            return {
              x: -radius / (sides / 3.5),
              y: -radius / (2.66 / 3.5)
            };
          }
        }]);

        return PolygonDrawer;
      }(PolygonDrawerBase_1.PolygonDrawerBase);

      exports.PolygonDrawer = PolygonDrawer;
      /***/
    },

    /***/
    83952:
    /*!**********************************************************************!*\
      !*** ./node_modules/tsparticles/Shapes/Polygon/PolygonDrawerBase.js ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PolygonDrawerBase = void 0;

      var PolygonDrawerBase = /*#__PURE__*/function () {
        function PolygonDrawerBase() {
          _classCallCheck(this, PolygonDrawerBase);
        }

        _createClass(PolygonDrawerBase, [{
          key: "getSidesCount",
          value: function getSidesCount(particle) {
            var _a, _b;

            var polygon = particle.shapeData;
            return (_b = (_a = polygon === null || polygon === void 0 ? void 0 : polygon.sides) !== null && _a !== void 0 ? _a : polygon === null || polygon === void 0 ? void 0 : polygon.nb_sides) !== null && _b !== void 0 ? _b : 5;
          }
        }, {
          key: "draw",
          value: function draw(context, particle, radius) {
            var start = this.getCenter(particle, radius);
            var side = this.getSidesData(particle, radius);
            var sideCount = side.count.numerator * side.count.denominator;
            var decimalSides = side.count.numerator / side.count.denominator;
            var interiorAngleDegrees = 180 * (decimalSides - 2) / decimalSides;
            var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180;

            if (!context) {
              return;
            }

            context.beginPath();
            context.translate(start.x, start.y);
            context.moveTo(0, 0);

            for (var i = 0; i < sideCount; i++) {
              context.lineTo(side.length, 0);
              context.translate(side.length, 0);
              context.rotate(interiorAngle);
            }
          }
        }]);

        return PolygonDrawerBase;
      }();

      exports.PolygonDrawerBase = PolygonDrawerBase;
      /***/
    },

    /***/
    61866:
    /*!*******************************************************************!*\
      !*** ./node_modules/tsparticles/Shapes/Polygon/TriangleDrawer.js ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TriangleDrawer = void 0;

      var PolygonDrawerBase_1 = __webpack_require__(
      /*! ./PolygonDrawerBase */
      83952);

      var TriangleDrawer = /*#__PURE__*/function (_PolygonDrawerBase_1$2) {
        _inherits(TriangleDrawer, _PolygonDrawerBase_1$2);

        var _super35 = _createSuper(TriangleDrawer);

        function TriangleDrawer() {
          _classCallCheck(this, TriangleDrawer);

          return _super35.apply(this, arguments);
        }

        _createClass(TriangleDrawer, [{
          key: "getSidesCount",
          value: function getSidesCount() {
            return 3;
          }
        }, {
          key: "getSidesData",
          value: function getSidesData(particle, radius) {
            return {
              count: {
                denominator: 2,
                numerator: 3
              },
              length: radius * 2
            };
          }
        }, {
          key: "getCenter",
          value: function getCenter(particle, radius) {
            return {
              x: -radius,
              y: radius / 1.66
            };
          }
        }]);

        return TriangleDrawer;
      }(PolygonDrawerBase_1.PolygonDrawerBase);

      exports.TriangleDrawer = TriangleDrawer;
      /***/
    },

    /***/
    1815:
    /*!**********************************************************!*\
      !*** ./node_modules/tsparticles/Shapes/Polygon/index.js ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.loadPolygonShape = exports.loadTriangleShape = exports.loadGenericPolygonShape = void 0;

      var PolygonDrawer_1 = __webpack_require__(
      /*! ./PolygonDrawer */
      95896);

      var TriangleDrawer_1 = __webpack_require__(
      /*! ./TriangleDrawer */
      61866);

      function loadGenericPolygonShape(tsParticles) {
        tsParticles.addShape("polygon", new PolygonDrawer_1.PolygonDrawer());
      }

      exports.loadGenericPolygonShape = loadGenericPolygonShape;

      function loadTriangleShape(tsParticles) {
        tsParticles.addShape("triangle", new TriangleDrawer_1.TriangleDrawer());
      }

      exports.loadTriangleShape = loadTriangleShape;

      function loadPolygonShape(tsParticles) {
        loadGenericPolygonShape(tsParticles);
        loadTriangleShape(tsParticles);
      }

      exports.loadPolygonShape = loadPolygonShape;
      /***/
    },

    /***/
    65504:
    /*!****************************************************************!*\
      !*** ./node_modules/tsparticles/Shapes/Square/SquareDrawer.js ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SquareDrawer = void 0;
      var fixFactor = Math.sqrt(2);

      var SquareDrawer = /*#__PURE__*/function () {
        function SquareDrawer() {
          _classCallCheck(this, SquareDrawer);
        }

        _createClass(SquareDrawer, [{
          key: "getSidesCount",
          value: function getSidesCount() {
            return 4;
          }
        }, {
          key: "draw",
          value: function draw(context, particle, radius) {
            context.rect(-radius / fixFactor, -radius / fixFactor, radius * 2 / fixFactor, radius * 2 / fixFactor);
          }
        }]);

        return SquareDrawer;
      }();

      exports.SquareDrawer = SquareDrawer;
      /***/
    },

    /***/
    22962:
    /*!*********************************************************!*\
      !*** ./node_modules/tsparticles/Shapes/Square/index.js ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.loadSquareShape = void 0;

      var SquareDrawer_1 = __webpack_require__(
      /*! ./SquareDrawer */
      65504);

      function loadSquareShape(tsParticles) {
        var drawer = new SquareDrawer_1.SquareDrawer();
        tsParticles.addShape("edge", drawer);
        tsParticles.addShape("square", drawer);
      }

      exports.loadSquareShape = loadSquareShape;
      /***/
    },

    /***/
    98114:
    /*!************************************************************!*\
      !*** ./node_modules/tsparticles/Shapes/Star/StarDrawer.js ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.StarDrawer = void 0;

      var StarDrawer = /*#__PURE__*/function () {
        function StarDrawer() {
          _classCallCheck(this, StarDrawer);
        }

        _createClass(StarDrawer, [{
          key: "getSidesCount",
          value: function getSidesCount(particle) {
            var _a, _b;

            var star = particle.shapeData;
            return (_b = (_a = star === null || star === void 0 ? void 0 : star.sides) !== null && _a !== void 0 ? _a : star === null || star === void 0 ? void 0 : star.nb_sides) !== null && _b !== void 0 ? _b : 5;
          }
        }, {
          key: "draw",
          value: function draw(context, particle, radius) {
            var _a;

            var star = particle.shapeData;
            var sides = this.getSidesCount(particle);
            var inset = (_a = star === null || star === void 0 ? void 0 : star.inset) !== null && _a !== void 0 ? _a : 2;
            context.moveTo(0, 0 - radius);

            for (var i = 0; i < sides; i++) {
              context.rotate(Math.PI / sides);
              context.lineTo(0, 0 - radius * inset);
              context.rotate(Math.PI / sides);
              context.lineTo(0, 0 - radius);
            }
          }
        }]);

        return StarDrawer;
      }();

      exports.StarDrawer = StarDrawer;
      /***/
    },

    /***/
    74004:
    /*!*******************************************************!*\
      !*** ./node_modules/tsparticles/Shapes/Star/index.js ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.loadStarShape = void 0;

      var StarDrawer_1 = __webpack_require__(
      /*! ./StarDrawer */
      98114);

      function loadStarShape(tsParticles) {
        tsParticles.addShape("star", new StarDrawer_1.StarDrawer());
      }

      exports.loadStarShape = loadStarShape;
      /***/
    },

    /***/
    75506:
    /*!************************************************************!*\
      !*** ./node_modules/tsparticles/Shapes/Text/TextDrawer.js ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TextDrawer = exports.validTypes = void 0;

      var Utils_1 = __webpack_require__(
      /*! ../../Utils */
      18942);

      exports.validTypes = ["text", "character", "char"];

      var TextDrawer = /*#__PURE__*/function () {
        function TextDrawer() {
          _classCallCheck(this, TextDrawer);
        }

        _createClass(TextDrawer, [{
          key: "getSidesCount",
          value: function getSidesCount() {
            return 12;
          }
        }, {
          key: "init",
          value: function () {
            var _init3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(container) {
              var options, shapeOptions, promises, _iterator76, _step76, character;

              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      options = container.actualOptions;

                      if (!exports.validTypes.find(function (t) {
                        return (0, Utils_1.isInArray)(t, options.particles.shape.type);
                      })) {
                        _context17.next = 14;
                        break;
                      }

                      shapeOptions = exports.validTypes.map(function (t) {
                        return options.particles.shape.options[t];
                      }).find(function (t) {
                        return !!t;
                      });

                      if (!(shapeOptions instanceof Array)) {
                        _context17.next = 11;
                        break;
                      }

                      promises = [];
                      _iterator76 = _createForOfIteratorHelper(shapeOptions);

                      try {
                        for (_iterator76.s(); !(_step76 = _iterator76.n()).done;) {
                          character = _step76.value;
                          promises.push((0, Utils_1.loadFont)(character));
                        }
                      } catch (err) {
                        _iterator76.e(err);
                      } finally {
                        _iterator76.f();
                      }

                      _context17.next = 9;
                      return Promise.allSettled(promises);

                    case 9:
                      _context17.next = 14;
                      break;

                    case 11:
                      if (!(shapeOptions !== undefined)) {
                        _context17.next = 14;
                        break;
                      }

                      _context17.next = 14;
                      return (0, Utils_1.loadFont)(shapeOptions);

                    case 14:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17);
            }));

            function init(_x27) {
              return _init3.apply(this, arguments);
            }

            return init;
          }()
        }, {
          key: "draw",
          value: function draw(context, particle, radius, opacity) {
            var _a, _b, _c;

            var character = particle.shapeData;

            if (character === undefined) {
              return;
            }

            var textData = character.value;

            if (textData === undefined) {
              return;
            }

            var textParticle = particle;

            if (textParticle.text === undefined) {
              textParticle.text = textData instanceof Array ? (0, Utils_1.itemFromArray)(textData, particle.randomIndexData) : textData;
            }

            var text = textParticle.text;
            var style = (_a = character.style) !== null && _a !== void 0 ? _a : "";
            var weight = (_b = character.weight) !== null && _b !== void 0 ? _b : "400";
            var size = Math.round(radius) * 2;
            var font = (_c = character.font) !== null && _c !== void 0 ? _c : "Verdana";
            var fill = particle.fill;
            var offsetX = text.length * radius / 2;
            context.font = "".concat(style, " ").concat(weight, " ").concat(size, "px \"").concat(font, "\"");
            var pos = {
              x: -offsetX,
              y: radius / 2
            };
            context.globalAlpha = opacity;

            if (fill) {
              context.fillText(text, pos.x, pos.y);
            } else {
              context.strokeText(text, pos.x, pos.y);
            }

            context.globalAlpha = 1;
          }
        }]);

        return TextDrawer;
      }();

      exports.TextDrawer = TextDrawer;
      /***/
    },

    /***/
    38595:
    /*!*******************************************************!*\
      !*** ./node_modules/tsparticles/Shapes/Text/index.js ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.loadTextShape = void 0;

      var TextDrawer_1 = __webpack_require__(
      /*! ./TextDrawer */
      75506);

      function loadTextShape(tsParticles) {
        var drawer = new TextDrawer_1.TextDrawer();

        var _iterator77 = _createForOfIteratorHelper(TextDrawer_1.validTypes),
            _step77;

        try {
          for (_iterator77.s(); !(_step77 = _iterator77.n()).done;) {
            var type = _step77.value;
            tsParticles.addShape(type, drawer);
          }
        } catch (err) {
          _iterator77.e(err);
        } finally {
          _iterator77.f();
        }
      }

      exports.loadTextShape = loadTextShape;
      /***/
    },

    /***/
    32015:
    /*!*******************************************************!*\
      !*** ./node_modules/tsparticles/Types/PathOptions.js ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /***/
    },

    /***/
    75303:
    /*!******************************************************!*\
      !*** ./node_modules/tsparticles/Types/RangeValue.js ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /***/
    },

    /***/
    66556:
    /*!************************************************************!*\
      !*** ./node_modules/tsparticles/Types/RecursivePartial.js ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /***/
    },

    /***/
    85037:
    /*!*****************************************************!*\
      !*** ./node_modules/tsparticles/Types/ShapeData.js ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /***/
    },

    /***/
    50873:
    /*!****************************************************************!*\
      !*** ./node_modules/tsparticles/Types/ShapeDrawerFunctions.js ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /***/
    },

    /***/
    28462:
    /*!************************************************************!*\
      !*** ./node_modules/tsparticles/Types/SingleOrMultiple.js ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /***/
    },

    /***/
    98962:
    /*!*************************************************!*\
      !*** ./node_modules/tsparticles/Types/index.js ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function get() {
            return m[k];
          }
        });
      } : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });

      var __exportStar = this && this.__exportStar || function (m, exports) {
        for (var p in m) {
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
        }
      };

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __exportStar(__webpack_require__(
      /*! ./RangeValue */
      75303), exports);

      __exportStar(__webpack_require__(
      /*! ./RecursivePartial */
      66556), exports);

      __exportStar(__webpack_require__(
      /*! ./ShapeData */
      85037), exports);

      __exportStar(__webpack_require__(
      /*! ./ShapeDrawerFunctions */
      50873), exports);

      __exportStar(__webpack_require__(
      /*! ./SingleOrMultiple */
      28462), exports);

      __exportStar(__webpack_require__(
      /*! ./PathOptions */
      32015), exports);
      /***/

    },

    /***/
    73984:
    /*!*****************************************************************!*\
      !*** ./node_modules/tsparticles/Updaters/Angle/AngleUpdater.js ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.AngleUpdater = void 0;

      var Enums_1 = __webpack_require__(
      /*! ../../Enums */
      39666);

      var Utils_1 = __webpack_require__(
      /*! ../../Utils */
      18942);

      function updateAngle(particle, delta) {
        var _a;

        var rotate = particle.rotate;

        if (!rotate) {
          return;
        }

        var rotateOptions = particle.options.rotate;
        var rotateAnimation = rotateOptions.animation;
        var speed = ((_a = rotate.velocity) !== null && _a !== void 0 ? _a : 0) * delta.factor;
        var max = 2 * Math.PI;

        if (!rotateAnimation.enable) {
          return;
        }

        switch (rotate.status) {
          case Enums_1.AnimationStatus.increasing:
            rotate.value += speed;

            if (rotate.value > max) {
              rotate.value -= max;
            }

            break;

          case Enums_1.AnimationStatus.decreasing:
          default:
            rotate.value -= speed;

            if (rotate.value < 0) {
              rotate.value += max;
            }

            break;
        }
      }

      var AngleUpdater = /*#__PURE__*/function () {
        function AngleUpdater(container) {
          _classCallCheck(this, AngleUpdater);

          this.container = container;
        }

        _createClass(AngleUpdater, [{
          key: "init",
          value: function init(particle) {
            var rotateOptions = particle.options.rotate;
            particle.rotate = {
              enable: rotateOptions.animation.enable,
              value: (0, Utils_1.getRangeValue)(rotateOptions.value) * Math.PI / 180
            };
            var rotateDirection = rotateOptions.direction;

            if (rotateDirection === Enums_1.RotateDirection.random) {
              var index = Math.floor(Math.random() * 2);
              rotateDirection = index > 0 ? Enums_1.RotateDirection.counterClockwise : Enums_1.RotateDirection.clockwise;
            }

            switch (rotateDirection) {
              case Enums_1.RotateDirection.counterClockwise:
              case "counterClockwise":
                particle.rotate.status = Enums_1.AnimationStatus.decreasing;
                break;

              case Enums_1.RotateDirection.clockwise:
                particle.rotate.status = Enums_1.AnimationStatus.increasing;
                break;
            }

            var rotateAnimation = particle.options.rotate.animation;

            if (rotateAnimation.enable) {
              particle.rotate.velocity = rotateAnimation.speed / 360 * this.container.retina.reduceFactor;

              if (!rotateAnimation.sync) {
                particle.rotate.velocity *= Math.random();
              }
            }
          }
        }, {
          key: "isEnabled",
          value: function isEnabled(particle) {
            var rotate = particle.options.rotate;
            var rotateAnimation = rotate.animation;
            return !particle.destroyed && !particle.spawning && !rotate.path && rotateAnimation.enable;
          }
        }, {
          key: "update",
          value: function update(particle, delta) {
            if (!this.isEnabled(particle)) {
              return;
            }

            updateAngle(particle, delta);
          }
        }]);

        return AngleUpdater;
      }();

      exports.AngleUpdater = AngleUpdater;
      /***/
    },

    /***/
    74696:
    /*!**********************************************************!*\
      !*** ./node_modules/tsparticles/Updaters/Angle/index.js ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.loadAngleUpdater = void 0;

      var AngleUpdater_1 = __webpack_require__(
      /*! ./AngleUpdater */
      73984);

      function loadAngleUpdater(tsParticles) {
        tsParticles.addParticleUpdater("angle", function (container) {
          return new AngleUpdater_1.AngleUpdater(container);
        });
      }

      exports.loadAngleUpdater = loadAngleUpdater;
      /***/
    },

    /***/
    52604:
    /*!*****************************************************************!*\
      !*** ./node_modules/tsparticles/Updaters/Color/ColorUpdater.js ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ColorUpdater = void 0;

      var Enums_1 = __webpack_require__(
      /*! ../../Enums */
      39666);

      var Utils_1 = __webpack_require__(
      /*! ../../Utils */
      18942);

      function updateColorValue(delta, value, valueAnimation, max, decrease) {
        var _a;

        var colorValue = value;

        if (!colorValue || !valueAnimation.enable) {
          return;
        }

        var offset = (0, Utils_1.randomInRange)(valueAnimation.offset);
        var velocity = ((_a = value.velocity) !== null && _a !== void 0 ? _a : 0) * delta.factor + offset * 3.6;

        if (!decrease || colorValue.status === Enums_1.AnimationStatus.increasing) {
          colorValue.value += velocity;

          if (decrease && colorValue.value > max) {
            colorValue.status = Enums_1.AnimationStatus.decreasing;
            colorValue.value -= colorValue.value % max;
          }
        } else {
          colorValue.value -= velocity;

          if (colorValue.value < 0) {
            colorValue.status = Enums_1.AnimationStatus.increasing;
            colorValue.value += colorValue.value;
          }
        }

        if (colorValue.value > max) {
          colorValue.value %= max;
        }
      }

      function updateColor(particle, delta) {
        var _a, _b, _c;

        var animationOptions = particle.options.color.animation;

        if (((_a = particle.color) === null || _a === void 0 ? void 0 : _a.h) !== undefined) {
          updateColorValue(delta, particle.color.h, animationOptions.h, 360, false);
        }

        if (((_b = particle.color) === null || _b === void 0 ? void 0 : _b.s) !== undefined) {
          updateColorValue(delta, particle.color.s, animationOptions.s, 100, true);
        }

        if (((_c = particle.color) === null || _c === void 0 ? void 0 : _c.l) !== undefined) {
          updateColorValue(delta, particle.color.l, animationOptions.l, 100, true);
        }
      }

      var ColorUpdater = /*#__PURE__*/function () {
        function ColorUpdater(container) {
          _classCallCheck(this, ColorUpdater);

          this.container = container;
        }

        _createClass(ColorUpdater, [{
          key: "init",
          value: function init(particle) {
            var hslColor = (0, Utils_1.colorToHsl)(particle.options.color, particle.id, particle.options.reduceDuplicates);

            if (hslColor) {
              particle.color = (0, Utils_1.getHslAnimationFromHsl)(hslColor, particle.options.color.animation, this.container.retina.reduceFactor);
            }
          }
        }, {
          key: "isEnabled",
          value: function isEnabled(particle) {
            var _a, _b, _c;

            var animationOptions = particle.options.color.animation;
            return !particle.destroyed && !particle.spawning && (((_a = particle.color) === null || _a === void 0 ? void 0 : _a.h.value) !== undefined && animationOptions.h.enable || ((_b = particle.color) === null || _b === void 0 ? void 0 : _b.s.value) !== undefined && animationOptions.s.enable || ((_c = particle.color) === null || _c === void 0 ? void 0 : _c.l.value) !== undefined && animationOptions.l.enable);
          }
        }, {
          key: "update",
          value: function update(particle, delta) {
            updateColor(particle, delta);
          }
        }]);

        return ColorUpdater;
      }();

      exports.ColorUpdater = ColorUpdater;
      /***/
    },

    /***/
    42504:
    /*!**********************************************************!*\
      !*** ./node_modules/tsparticles/Updaters/Color/index.js ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.loadColorUpdater = void 0;

      var ColorUpdater_1 = __webpack_require__(
      /*! ./ColorUpdater */
      52604);

      function loadColorUpdater(tsParticles) {
        tsParticles.addParticleUpdater("color", function (container) {
          return new ColorUpdater_1.ColorUpdater(container);
        });
      }

      exports.loadColorUpdater = loadColorUpdater;
      /***/
    },

    /***/
    99579:
    /*!***************************************************************!*\
      !*** ./node_modules/tsparticles/Updaters/Life/LifeUpdater.js ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LifeUpdater = void 0;

      var Utils_1 = __webpack_require__(
      /*! ../../Utils */
      18942);

      var LifeUpdater = /*#__PURE__*/function () {
        function LifeUpdater(container) {
          _classCallCheck(this, LifeUpdater);

          this.container = container;
        }

        _createClass(LifeUpdater, [{
          key: "init",
          value: function init() {}
        }, {
          key: "isEnabled",
          value: function isEnabled(particle) {
            return !particle.destroyed;
          }
        }, {
          key: "update",
          value: function update(particle, delta) {
            if (!this.isEnabled(particle)) {
              return;
            }

            var life = particle.life;
            var justSpawned = false;

            if (particle.spawning) {
              life.delayTime += delta.value;

              if (life.delayTime >= particle.life.delay) {
                justSpawned = true;
                particle.spawning = false;
                life.delayTime = 0;
                life.time = 0;
              } else {
                return;
              }
            }

            if (life.duration === -1) {
              return;
            }

            if (particle.spawning) {
              return;
            }

            if (justSpawned) {
              life.time = 0;
            } else {
              life.time += delta.value;
            }

            if (life.time < life.duration) {
              return;
            }

            life.time = 0;

            if (particle.life.count > 0) {
              particle.life.count--;
            }

            if (particle.life.count === 0) {
              particle.destroy();
              return;
            }

            var canvasSize = this.container.canvas.size,
                widthRange = (0, Utils_1.setRangeValue)(0, canvasSize.width),
                heightRange = (0, Utils_1.setRangeValue)(0, canvasSize.width);
            particle.position.x = (0, Utils_1.randomInRange)(widthRange);
            particle.position.y = (0, Utils_1.randomInRange)(heightRange);
            particle.spawning = true;
            life.delayTime = 0;
            life.time = 0;
            particle.reset();
            var lifeOptions = particle.options.life;
            life.delay = (0, Utils_1.getRangeValue)(lifeOptions.delay.value) * 1000;
            life.duration = (0, Utils_1.getRangeValue)(lifeOptions.duration.value) * 1000;
          }
        }]);

        return LifeUpdater;
      }();

      exports.LifeUpdater = LifeUpdater;
      /***/
    },

    /***/
    32373:
    /*!*********************************************************!*\
      !*** ./node_modules/tsparticles/Updaters/Life/index.js ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.loadLifeUpdater = void 0;

      var LifeUpdater_1 = __webpack_require__(
      /*! ./LifeUpdater */
      99579);

      function loadLifeUpdater(tsParticles) {
        tsParticles.addParticleUpdater("life", function (container) {
          return new LifeUpdater_1.LifeUpdater(container);
        });
      }

      exports.loadLifeUpdater = loadLifeUpdater;
      /***/
    },

    /***/
    2808:
    /*!*********************************************************************!*\
      !*** ./node_modules/tsparticles/Updaters/Opacity/OpacityUpdater.js ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.OpacityUpdater = void 0;

      var Enums_1 = __webpack_require__(
      /*! ../../Enums */
      39666);

      var Utils_1 = __webpack_require__(
      /*! ../../Utils */
      18942);

      function checkDestroy(particle, value, minValue, maxValue) {
        switch (particle.options.opacity.animation.destroy) {
          case Enums_1.DestroyType.max:
            if (value >= maxValue) {
              particle.destroy();
            }

            break;

          case Enums_1.DestroyType.min:
            if (value <= minValue) {
              particle.destroy();
            }

            break;
        }
      }

      function updateOpacity(particle, delta) {
        var _a, _b, _c, _d, _e;

        if (!particle.opacity) {
          return;
        }

        var minValue = particle.opacity.min;
        var maxValue = particle.opacity.max;

        if (!(!particle.destroyed && particle.opacity.enable && (((_a = particle.opacity.maxLoops) !== null && _a !== void 0 ? _a : 0) <= 0 || ((_b = particle.opacity.loops) !== null && _b !== void 0 ? _b : 0) < ((_c = particle.opacity.maxLoops) !== null && _c !== void 0 ? _c : 0)))) {
          return;
        }

        switch (particle.opacity.status) {
          case Enums_1.AnimationStatus.increasing:
            if (particle.opacity.value >= maxValue) {
              particle.opacity.status = Enums_1.AnimationStatus.decreasing;

              if (!particle.opacity.loops) {
                particle.opacity.loops = 0;
              }

              particle.opacity.loops++;
            } else {
              particle.opacity.value += ((_d = particle.opacity.velocity) !== null && _d !== void 0 ? _d : 0) * delta.factor;
            }

            break;

          case Enums_1.AnimationStatus.decreasing:
            if (particle.opacity.value <= minValue) {
              particle.opacity.status = Enums_1.AnimationStatus.increasing;

              if (!particle.opacity.loops) {
                particle.opacity.loops = 0;
              }

              particle.opacity.loops++;
            } else {
              particle.opacity.value -= ((_e = particle.opacity.velocity) !== null && _e !== void 0 ? _e : 0) * delta.factor;
            }

            break;
        }

        checkDestroy(particle, particle.opacity.value, minValue, maxValue);

        if (!particle.destroyed) {
          particle.opacity.value = (0, Utils_1.clamp)(particle.opacity.value, minValue, maxValue);
        }
      }

      var OpacityUpdater = /*#__PURE__*/function () {
        function OpacityUpdater(container) {
          _classCallCheck(this, OpacityUpdater);

          this.container = container;
        }

        _createClass(OpacityUpdater, [{
          key: "init",
          value: function init(particle) {
            var opacityOptions = particle.options.opacity;
            particle.opacity = {
              enable: opacityOptions.animation.enable,
              max: (0, Utils_1.getRangeMax)(opacityOptions.value),
              min: (0, Utils_1.getRangeMin)(opacityOptions.value),
              value: (0, Utils_1.getRangeValue)(opacityOptions.value),
              loops: 0,
              maxLoops: opacityOptions.animation.count
            };
            var opacityAnimation = opacityOptions.animation;

            if (opacityAnimation.enable) {
              particle.opacity.status = Enums_1.AnimationStatus.increasing;
              var opacityRange = opacityOptions.value;
              particle.opacity.min = (0, Utils_1.getRangeMin)(opacityRange);
              particle.opacity.max = (0, Utils_1.getRangeMax)(opacityRange);

              switch (opacityAnimation.startValue) {
                case Enums_1.StartValueType.min:
                  particle.opacity.value = particle.opacity.min;
                  particle.opacity.status = Enums_1.AnimationStatus.increasing;
                  break;

                case Enums_1.StartValueType.random:
                  particle.opacity.value = (0, Utils_1.randomInRange)(particle.opacity);
                  particle.opacity.status = Math.random() >= 0.5 ? Enums_1.AnimationStatus.increasing : Enums_1.AnimationStatus.decreasing;
                  break;

                case Enums_1.StartValueType.max:
                default:
                  particle.opacity.value = particle.opacity.max;
                  particle.opacity.status = Enums_1.AnimationStatus.decreasing;
                  break;
              }

              particle.opacity.velocity = opacityAnimation.speed / 100 * this.container.retina.reduceFactor;

              if (!opacityAnimation.sync) {
                particle.opacity.velocity *= Math.random();
              }
            }
          }
        }, {
          key: "isEnabled",
          value: function isEnabled(particle) {
            var _a, _b, _c;

            return !particle.destroyed && !particle.spawning && !!particle.opacity && particle.opacity.enable && (((_a = particle.opacity.maxLoops) !== null && _a !== void 0 ? _a : 0) <= 0 || ((_b = particle.opacity.loops) !== null && _b !== void 0 ? _b : 0) < ((_c = particle.opacity.maxLoops) !== null && _c !== void 0 ? _c : 0));
          }
        }, {
          key: "update",
          value: function update(particle, delta) {
            if (!this.isEnabled(particle)) {
              return;
            }

            updateOpacity(particle, delta);
          }
        }]);

        return OpacityUpdater;
      }();

      exports.OpacityUpdater = OpacityUpdater;
      /***/
    },

    /***/
    21881:
    /*!************************************************************!*\
      !*** ./node_modules/tsparticles/Updaters/Opacity/index.js ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.loadOpacityUpdater = void 0;

      var OpacityUpdater_1 = __webpack_require__(
      /*! ./OpacityUpdater */
      2808);

      function loadOpacityUpdater(tsParticles) {
        tsParticles.addParticleUpdater("opacity", function (container) {
          return new OpacityUpdater_1.OpacityUpdater(container);
        });
      }

      exports.loadOpacityUpdater = loadOpacityUpdater;
      /***/
    },

    /***/
    55992:
    /*!**************************************************************************!*\
      !*** ./node_modules/tsparticles/Updaters/OutModes/OutOfCanvasUpdater.js ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.OutOfCanvasUpdater = void 0;

      var Utils_1 = __webpack_require__(
      /*! ../../Utils */
      18942);

      var Enums_1 = __webpack_require__(
      /*! ../../Enums */
      39666);

      var Utils_2 = __webpack_require__(
      /*! ./Utils */
      60122);

      var OutOfCanvasUpdater = /*#__PURE__*/function () {
        function OutOfCanvasUpdater(container) {
          _classCallCheck(this, OutOfCanvasUpdater);

          this.container = container;
        }

        _createClass(OutOfCanvasUpdater, [{
          key: "init",
          value: function init() {}
        }, {
          key: "isEnabled",
          value: function isEnabled(particle) {
            return !particle.destroyed && !particle.spawning;
          }
        }, {
          key: "update",
          value: function update(particle, delta) {
            var _a, _b, _c, _d;

            var outModes = particle.options.move.outModes;
            this.updateOutMode(particle, delta, (_a = outModes.bottom) !== null && _a !== void 0 ? _a : outModes["default"], Enums_1.OutModeDirection.bottom);
            this.updateOutMode(particle, delta, (_b = outModes.left) !== null && _b !== void 0 ? _b : outModes["default"], Enums_1.OutModeDirection.left);
            this.updateOutMode(particle, delta, (_c = outModes.right) !== null && _c !== void 0 ? _c : outModes["default"], Enums_1.OutModeDirection.right);
            this.updateOutMode(particle, delta, (_d = outModes.top) !== null && _d !== void 0 ? _d : outModes["default"], Enums_1.OutModeDirection.top);
          }
        }, {
          key: "updateOutMode",
          value: function updateOutMode(particle, delta, outMode, direction) {
            switch (outMode) {
              case Enums_1.OutMode.bounce:
              case Enums_1.OutMode.bounceVertical:
              case Enums_1.OutMode.bounceHorizontal:
              case "bounceVertical":
              case "bounceHorizontal":
              case Enums_1.OutMode.split:
                this.bounce(particle, delta, direction, outMode);
                break;

              case Enums_1.OutMode.destroy:
                this.destroy(particle, direction);
                break;

              case Enums_1.OutMode.out:
                this.out(particle, direction);
                break;

              case Enums_1.OutMode.none:
              default:
                this.none(particle, direction);
                break;
            }
          }
        }, {
          key: "destroy",
          value: function destroy(particle, direction) {
            var container = this.container;

            if ((0, Utils_1.isPointInside)(particle.position, container.canvas.size, particle.getRadius(), direction)) {
              return;
            }

            container.particles.remove(particle, undefined, true);
          }
        }, {
          key: "out",
          value: function out(particle, direction) {
            var container = this.container;

            if ((0, Utils_1.isPointInside)(particle.position, container.canvas.size, particle.getRadius(), direction)) {
              return;
            }

            var wrap = particle.options.move.warp,
                canvasSize = container.canvas.size,
                newPos = {
              bottom: canvasSize.height + particle.getRadius() + particle.offset.y,
              left: -particle.getRadius() - particle.offset.x,
              right: canvasSize.width + particle.getRadius() + particle.offset.x,
              top: -particle.getRadius() - particle.offset.y
            },
                sizeValue = particle.getRadius(),
                nextBounds = (0, Utils_1.calculateBounds)(particle.position, sizeValue);

            if (direction === Enums_1.OutModeDirection.right && nextBounds.left > canvasSize.width + particle.offset.x) {
              particle.position.x = newPos.left;
              particle.initialPosition.x = particle.position.x;

              if (!wrap) {
                particle.position.y = Math.random() * canvasSize.height;
                particle.initialPosition.y = particle.position.y;
              }
            } else if (direction === Enums_1.OutModeDirection.left && nextBounds.right < -particle.offset.x) {
              particle.position.x = newPos.right;
              particle.initialPosition.x = particle.position.x;

              if (!wrap) {
                particle.position.y = Math.random() * canvasSize.height;
                particle.initialPosition.y = particle.position.y;
              }
            }

            if (direction === Enums_1.OutModeDirection.bottom && nextBounds.top > canvasSize.height + particle.offset.y) {
              if (!wrap) {
                particle.position.x = Math.random() * canvasSize.width;
                particle.initialPosition.x = particle.position.x;
              }

              particle.position.y = newPos.top;
              particle.initialPosition.y = particle.position.y;
            } else if (direction === Enums_1.OutModeDirection.top && nextBounds.bottom < -particle.offset.y) {
              if (!wrap) {
                particle.position.x = Math.random() * canvasSize.width;
                particle.initialPosition.x = particle.position.x;
              }

              particle.position.y = newPos.bottom;
              particle.initialPosition.y = particle.position.y;
            }
          }
        }, {
          key: "bounce",
          value: function bounce(particle, delta, direction, outMode) {
            var container = this.container;
            var handled = false;

            var _iterator78 = _createForOfIteratorHelper(container.plugins),
                _step78;

            try {
              for (_iterator78.s(); !(_step78 = _iterator78.n()).done;) {
                var _step78$value = _slicedToArray(_step78.value, 2),
                    plugin = _step78$value[1];

                if (plugin.particleBounce !== undefined) {
                  handled = plugin.particleBounce(particle, delta, direction);
                }

                if (handled) {
                  break;
                }
              }
            } catch (err) {
              _iterator78.e(err);
            } finally {
              _iterator78.f();
            }

            if (handled) {
              return;
            }

            var pos = particle.getPosition(),
                offset = particle.offset,
                size = particle.getRadius(),
                bounds = (0, Utils_1.calculateBounds)(pos, size),
                canvasSize = container.canvas.size;
            (0, Utils_2.bounceHorizontal)({
              particle: particle,
              outMode: outMode,
              direction: direction,
              bounds: bounds,
              canvasSize: canvasSize,
              offset: offset,
              size: size
            });
            (0, Utils_2.bounceVertical)({
              particle: particle,
              outMode: outMode,
              direction: direction,
              bounds: bounds,
              canvasSize: canvasSize,
              offset: offset,
              size: size
            });
          }
        }, {
          key: "none",
          value: function none(particle, direction) {
            if (particle.options.move.distance.horizontal && (direction === Enums_1.OutModeDirection.left || direction === Enums_1.OutModeDirection.right) || particle.options.move.distance.vertical && (direction === Enums_1.OutModeDirection.top || direction === Enums_1.OutModeDirection.bottom)) {
              return;
            }

            var gravityOptions = particle.options.move.gravity,
                container = this.container;
            var canvasSize = container.canvas.size;
            var pRadius = particle.getRadius();

            if (!gravityOptions.enable) {
              if (particle.velocity.y > 0 && particle.position.y <= canvasSize.height + pRadius || particle.velocity.y < 0 && particle.position.y >= -pRadius || particle.velocity.x > 0 && particle.position.x <= canvasSize.width + pRadius || particle.velocity.x < 0 && particle.position.x >= -pRadius) {
                return;
              }

              if (!(0, Utils_1.isPointInside)(particle.position, container.canvas.size, pRadius, direction)) {
                container.particles.remove(particle);
              }
            } else {
              var position = particle.position;

              if (!gravityOptions.inverse && position.y > canvasSize.height + pRadius && direction === Enums_1.OutModeDirection.bottom || gravityOptions.inverse && position.y < -pRadius && direction === Enums_1.OutModeDirection.top) {
                container.particles.remove(particle);
              }
            }
          }
        }]);

        return OutOfCanvasUpdater;
      }();

      exports.OutOfCanvasUpdater = OutOfCanvasUpdater;
      /***/
    },

    /***/
    60122:
    /*!*************************************************************!*\
      !*** ./node_modules/tsparticles/Updaters/OutModes/Utils.js ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.bounceVertical = exports.bounceHorizontal = void 0;

      var Enums_1 = __webpack_require__(
      /*! ../../Enums */
      39666);

      var Utils_1 = __webpack_require__(
      /*! ../../Utils */
      18942);

      function bounceHorizontal(data) {
        if (!(data.outMode === Enums_1.OutMode.bounce || data.outMode === Enums_1.OutMode.bounceHorizontal || data.outMode === "bounceHorizontal" || data.outMode === Enums_1.OutMode.split)) {
          return;
        }

        var velocity = data.particle.velocity.x;
        var bounced = false;

        if (data.direction === Enums_1.OutModeDirection.right && data.bounds.right >= data.canvasSize.width && velocity > 0 || data.direction === Enums_1.OutModeDirection.left && data.bounds.left <= 0 && velocity < 0) {
          var newVelocity = (0, Utils_1.getRangeValue)(data.particle.options.bounce.horizontal.value);
          data.particle.velocity.x *= -newVelocity;
          bounced = true;
        }

        if (!bounced) {
          return;
        }

        var minPos = data.offset.x + data.size;

        if (data.bounds.right >= data.canvasSize.width) {
          data.particle.position.x = data.canvasSize.width - minPos;
        } else if (data.bounds.left <= 0) {
          data.particle.position.x = minPos;
        }

        if (data.outMode === Enums_1.OutMode.split) {
          data.particle.destroy();
        }
      }

      exports.bounceHorizontal = bounceHorizontal;

      function bounceVertical(data) {
        if (data.outMode === Enums_1.OutMode.bounce || data.outMode === Enums_1.OutMode.bounceVertical || data.outMode === "bounceVertical" || data.outMode === Enums_1.OutMode.split) {
          var velocity = data.particle.velocity.y;
          var bounced = false;

          if (data.direction === Enums_1.OutModeDirection.bottom && data.bounds.bottom >= data.canvasSize.height && velocity > 0 || data.direction === Enums_1.OutModeDirection.top && data.bounds.top <= 0 && velocity < 0) {
            var newVelocity = (0, Utils_1.getRangeValue)(data.particle.options.bounce.vertical.value);
            data.particle.velocity.y *= -newVelocity;
            bounced = true;
          }

          if (!bounced) {
            return;
          }

          var minPos = data.offset.y + data.size;

          if (data.bounds.bottom >= data.canvasSize.height) {
            data.particle.position.y = data.canvasSize.height - minPos;
          } else if (data.bounds.top <= 0) {
            data.particle.position.y = minPos;
          }

          if (data.outMode === Enums_1.OutMode.split) {
            data.particle.destroy();
          }
        }
      }

      exports.bounceVertical = bounceVertical;
      /***/
    },

    /***/
    35545:
    /*!*************************************************************!*\
      !*** ./node_modules/tsparticles/Updaters/OutModes/index.js ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.loadOutModesUpdater = void 0;

      var OutOfCanvasUpdater_1 = __webpack_require__(
      /*! ./OutOfCanvasUpdater */
      55992);

      function loadOutModesUpdater(tsParticles) {
        tsParticles.addParticleUpdater("outModes", function (container) {
          return new OutOfCanvasUpdater_1.OutOfCanvasUpdater(container);
        });
      }

      exports.loadOutModesUpdater = loadOutModesUpdater;
      /***/
    },

    /***/
    80383:
    /*!***************************************************************!*\
      !*** ./node_modules/tsparticles/Updaters/Roll/RollUpdater.js ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.RollUpdater = void 0;

      var Utils_1 = __webpack_require__(
      /*! ../../Utils */
      18942);

      var Enums_1 = __webpack_require__(
      /*! ../../Enums */
      39666);

      function updateRoll(particle, delta) {
        var roll = particle.options.roll;

        if (!particle.roll || !roll.enable) {
          return;
        }

        var speed = particle.roll.speed * delta.factor;
        var max = 2 * Math.PI;
        particle.roll.angle += speed;

        if (particle.roll.angle > max) {
          particle.roll.angle -= max;
        }
      }

      var RollUpdater = /*#__PURE__*/function () {
        function RollUpdater() {
          _classCallCheck(this, RollUpdater);
        }

        _createClass(RollUpdater, [{
          key: "init",
          value: function init(particle) {
            var rollOpt = particle.options.roll;

            if (rollOpt.enable) {
              particle.roll = {
                angle: Math.random() * Math.PI * 2,
                speed: (0, Utils_1.getRangeValue)(rollOpt.speed) / 360
              };

              if (rollOpt.backColor) {
                particle.backColor = (0, Utils_1.colorToHsl)(rollOpt.backColor);
              } else if (rollOpt.darken.enable && rollOpt.enlighten.enable) {
                var alterType = Math.random() >= 0.5 ? Enums_1.AlterType.darken : Enums_1.AlterType.enlighten;
                particle.roll.alter = {
                  type: alterType,
                  value: alterType === Enums_1.AlterType.darken ? rollOpt.darken.value : rollOpt.enlighten.value
                };
              } else if (rollOpt.darken.enable) {
                particle.roll.alter = {
                  type: Enums_1.AlterType.darken,
                  value: rollOpt.darken.value
                };
              } else if (rollOpt.enlighten.enable) {
                particle.roll.alter = {
                  type: Enums_1.AlterType.enlighten,
                  value: rollOpt.enlighten.value
                };
              }
            } else {
              particle.roll = {
                angle: 0,
                speed: 0
              };
            }
          }
        }, {
          key: "isEnabled",
          value: function isEnabled(particle) {
            var roll = particle.options.roll;
            return !particle.destroyed && !particle.spawning && roll.enable;
          }
        }, {
          key: "update",
          value: function update(particle, delta) {
            if (!this.isEnabled(particle)) {
              return;
            }

            updateRoll(particle, delta);
          }
        }]);

        return RollUpdater;
      }();

      exports.RollUpdater = RollUpdater;
      /***/
    },

    /***/
    29361:
    /*!*********************************************************!*\
      !*** ./node_modules/tsparticles/Updaters/Roll/index.js ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.loadRollUpdater = void 0;

      var RollUpdater_1 = __webpack_require__(
      /*! ./RollUpdater */
      80383);

      function loadRollUpdater(tsParticles) {
        tsParticles.addParticleUpdater("roll", function () {
          return new RollUpdater_1.RollUpdater();
        });
      }

      exports.loadRollUpdater = loadRollUpdater;
      /***/
    },

    /***/
    33156:
    /*!***************************************************************!*\
      !*** ./node_modules/tsparticles/Updaters/Size/SizeUpdater.js ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SizeUpdater = void 0;

      var Enums_1 = __webpack_require__(
      /*! ../../Enums */
      39666);

      var Utils_1 = __webpack_require__(
      /*! ../../Utils */
      18942);

      function checkDestroy(particle, value, minValue, maxValue) {
        switch (particle.options.size.animation.destroy) {
          case Enums_1.DestroyType.max:
            if (value >= maxValue) {
              particle.destroy();
            }

            break;

          case Enums_1.DestroyType.min:
            if (value <= minValue) {
              particle.destroy();
            }

            break;
        }
      }

      function updateSize(particle, delta) {
        var _a, _b, _c, _d;

        var sizeVelocity = ((_a = particle.size.velocity) !== null && _a !== void 0 ? _a : 0) * delta.factor;
        var minValue = particle.size.min;
        var maxValue = particle.size.max;

        if (!(!particle.destroyed && particle.size.enable && (((_b = particle.size.loops) !== null && _b !== void 0 ? _b : 0) <= 0 || ((_c = particle.size.loops) !== null && _c !== void 0 ? _c : 0) < ((_d = particle.size.maxLoops) !== null && _d !== void 0 ? _d : 0)))) {
          return;
        }

        switch (particle.size.status) {
          case Enums_1.AnimationStatus.increasing:
            if (particle.size.value >= maxValue) {
              particle.size.status = Enums_1.AnimationStatus.decreasing;

              if (!particle.size.loops) {
                particle.size.loops = 0;
              }

              particle.size.loops++;
            } else {
              particle.size.value += sizeVelocity;
            }

            break;

          case Enums_1.AnimationStatus.decreasing:
            if (particle.size.value <= minValue) {
              particle.size.status = Enums_1.AnimationStatus.increasing;

              if (!particle.size.loops) {
                particle.size.loops = 0;
              }

              particle.size.loops++;
            } else {
              particle.size.value -= sizeVelocity;
            }

        }

        checkDestroy(particle, particle.size.value, minValue, maxValue);

        if (!particle.destroyed) {
          particle.size.value = (0, Utils_1.clamp)(particle.size.value, minValue, maxValue);
        }
      }

      var SizeUpdater = /*#__PURE__*/function () {
        function SizeUpdater() {
          _classCallCheck(this, SizeUpdater);
        }

        _createClass(SizeUpdater, [{
          key: "init",
          value: function init() {}
        }, {
          key: "isEnabled",
          value: function isEnabled(particle) {
            var _a, _b, _c;

            return !particle.destroyed && !particle.spawning && particle.size.enable && (((_a = particle.size.loops) !== null && _a !== void 0 ? _a : 0) <= 0 || ((_b = particle.size.loops) !== null && _b !== void 0 ? _b : 0) < ((_c = particle.size.maxLoops) !== null && _c !== void 0 ? _c : 0));
          }
        }, {
          key: "update",
          value: function update(particle, delta) {
            if (!this.isEnabled(particle)) {
              return;
            }

            updateSize(particle, delta);
          }
        }]);

        return SizeUpdater;
      }();

      exports.SizeUpdater = SizeUpdater;
      /***/
    },

    /***/
    75983:
    /*!*********************************************************!*\
      !*** ./node_modules/tsparticles/Updaters/Size/index.js ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.loadSizeUpdater = void 0;

      var SizeUpdater_1 = __webpack_require__(
      /*! ./SizeUpdater */
      33156);

      function loadSizeUpdater(tsParticles) {
        tsParticles.addParticleUpdater("size", function () {
          return new SizeUpdater_1.SizeUpdater();
        });
      }

      exports.loadSizeUpdater = loadSizeUpdater;
      /***/
    },

    /***/
    14271:
    /*!*****************************************************************************!*\
      !*** ./node_modules/tsparticles/Updaters/StrokeColor/StrokeColorUpdater.js ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.StrokeColorUpdater = void 0;

      var Utils_1 = __webpack_require__(
      /*! ../../Utils */
      18942);

      var Enums_1 = __webpack_require__(
      /*! ../../Enums */
      39666);

      function updateColorValue(delta, value, valueAnimation, max, decrease) {
        var _a;

        var colorValue = value;

        if (!colorValue || !colorValue.enable) {
          return;
        }

        var offset = (0, Utils_1.randomInRange)(valueAnimation.offset);
        var velocity = ((_a = value.velocity) !== null && _a !== void 0 ? _a : 0) * delta.factor + offset * 3.6;

        if (!decrease || colorValue.status === Enums_1.AnimationStatus.increasing) {
          colorValue.value += velocity;

          if (decrease && colorValue.value > max) {
            colorValue.status = Enums_1.AnimationStatus.decreasing;
            colorValue.value -= colorValue.value % max;
          }
        } else {
          colorValue.value -= velocity;

          if (colorValue.value < 0) {
            colorValue.status = Enums_1.AnimationStatus.increasing;
            colorValue.value += colorValue.value;
          }
        }

        if (colorValue.value > max) {
          colorValue.value %= max;
        }
      }

      function updateStrokeColor(particle, delta) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;

        if (!((_a = particle.stroke) === null || _a === void 0 ? void 0 : _a.color)) {
          return;
        }

        var animationOptions = particle.stroke.color.animation;
        var h = (_c = (_b = particle.strokeColor) === null || _b === void 0 ? void 0 : _b.h) !== null && _c !== void 0 ? _c : (_d = particle.color) === null || _d === void 0 ? void 0 : _d.h;

        if (h) {
          updateColorValue(delta, h, animationOptions.h, 360, false);
        }

        var s = (_f = (_e = particle.strokeColor) === null || _e === void 0 ? void 0 : _e.s) !== null && _f !== void 0 ? _f : (_g = particle.color) === null || _g === void 0 ? void 0 : _g.s;

        if (s) {
          updateColorValue(delta, s, animationOptions.s, 100, true);
        }

        var l = (_j = (_h = particle.strokeColor) === null || _h === void 0 ? void 0 : _h.l) !== null && _j !== void 0 ? _j : (_k = particle.color) === null || _k === void 0 ? void 0 : _k.l;

        if (l) {
          updateColorValue(delta, l, animationOptions.l, 100, true);
        }
      }

      var StrokeColorUpdater = /*#__PURE__*/function () {
        function StrokeColorUpdater(container) {
          _classCallCheck(this, StrokeColorUpdater);

          this.container = container;
        }

        _createClass(StrokeColorUpdater, [{
          key: "init",
          value: function init(particle) {
            var _a, _b;

            var container = this.container;
            particle.stroke = particle.options.stroke instanceof Array ? (0, Utils_1.itemFromArray)(particle.options.stroke, particle.id, particle.options.reduceDuplicates) : particle.options.stroke;
            particle.strokeWidth = particle.stroke.width * container.retina.pixelRatio;
            var strokeHslColor = (_a = (0, Utils_1.colorToHsl)(particle.stroke.color)) !== null && _a !== void 0 ? _a : particle.getFillColor();

            if (strokeHslColor) {
              particle.strokeColor = (0, Utils_1.getHslAnimationFromHsl)(strokeHslColor, (_b = particle.stroke.color) === null || _b === void 0 ? void 0 : _b.animation, container.retina.reduceFactor);
            }
          }
        }, {
          key: "isEnabled",
          value: function isEnabled(particle) {
            var _a, _b, _c, _d;

            var color = (_a = particle.stroke) === null || _a === void 0 ? void 0 : _a.color;
            return !particle.destroyed && !particle.spawning && !!color && (((_b = particle.strokeColor) === null || _b === void 0 ? void 0 : _b.h.value) !== undefined && color.animation.h.enable || ((_c = particle.strokeColor) === null || _c === void 0 ? void 0 : _c.s.value) !== undefined && color.animation.s.enable || ((_d = particle.strokeColor) === null || _d === void 0 ? void 0 : _d.l.value) !== undefined && color.animation.l.enable);
          }
        }, {
          key: "update",
          value: function update(particle, delta) {
            if (!this.isEnabled(particle)) {
              return;
            }

            updateStrokeColor(particle, delta);
          }
        }]);

        return StrokeColorUpdater;
      }();

      exports.StrokeColorUpdater = StrokeColorUpdater;
      /***/
    },

    /***/
    81916:
    /*!****************************************************************!*\
      !*** ./node_modules/tsparticles/Updaters/StrokeColor/index.js ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.loadStrokeColorUpdater = void 0;

      var StrokeColorUpdater_1 = __webpack_require__(
      /*! ./StrokeColorUpdater */
      14271);

      function loadStrokeColorUpdater(tsParticles) {
        tsParticles.addParticleUpdater("strokeColor", function (container) {
          return new StrokeColorUpdater_1.StrokeColorUpdater(container);
        });
      }

      exports.loadStrokeColorUpdater = loadStrokeColorUpdater;
      /***/
    },

    /***/
    82508:
    /*!***************************************************************!*\
      !*** ./node_modules/tsparticles/Updaters/Tilt/TiltUpdater.js ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TiltUpdater = void 0;

      var Enums_1 = __webpack_require__(
      /*! ../../Enums */
      39666);

      var Utils_1 = __webpack_require__(
      /*! ../../Utils */
      18942);

      function updateTilt(particle, delta) {
        var _a;

        if (!particle.tilt) {
          return;
        }

        var tilt = particle.options.tilt;
        var tiltAnimation = tilt.animation;
        var speed = ((_a = particle.tilt.velocity) !== null && _a !== void 0 ? _a : 0) * delta.factor;
        var max = 2 * Math.PI;

        if (!tiltAnimation.enable) {
          return;
        }

        switch (particle.tilt.status) {
          case Enums_1.AnimationStatus.increasing:
            particle.tilt.value += speed;

            if (particle.tilt.value > max) {
              particle.tilt.value -= max;
            }

            break;

          case Enums_1.AnimationStatus.decreasing:
          default:
            particle.tilt.value -= speed;

            if (particle.tilt.value < 0) {
              particle.tilt.value += max;
            }

            break;
        }
      }

      var TiltUpdater = /*#__PURE__*/function () {
        function TiltUpdater(container) {
          _classCallCheck(this, TiltUpdater);

          this.container = container;
        }

        _createClass(TiltUpdater, [{
          key: "init",
          value: function init(particle) {
            var tiltOptions = particle.options.tilt;
            particle.tilt = {
              enable: tiltOptions.enable,
              value: (0, Utils_1.getRangeValue)(tiltOptions.value) * Math.PI / 180,
              sinDirection: Math.random() >= 0.5 ? 1 : -1,
              cosDirection: Math.random() >= 0.5 ? 1 : -1
            };
            var tiltDirection = tiltOptions.direction;

            if (tiltDirection === Enums_1.TiltDirection.random) {
              var index = Math.floor(Math.random() * 2);
              tiltDirection = index > 0 ? Enums_1.TiltDirection.counterClockwise : Enums_1.TiltDirection.clockwise;
            }

            switch (tiltDirection) {
              case Enums_1.TiltDirection.counterClockwise:
              case "counterClockwise":
                particle.tilt.status = Enums_1.AnimationStatus.decreasing;
                break;

              case Enums_1.TiltDirection.clockwise:
                particle.tilt.status = Enums_1.AnimationStatus.increasing;
                break;
            }

            var tiltAnimation = particle.options.tilt.animation;

            if (tiltAnimation.enable) {
              particle.tilt.velocity = tiltAnimation.speed / 360 * this.container.retina.reduceFactor;

              if (!tiltAnimation.sync) {
                particle.tilt.velocity *= Math.random();
              }
            }
          }
        }, {
          key: "isEnabled",
          value: function isEnabled(particle) {
            var tilt = particle.options.tilt;
            var tiltAnimation = tilt.animation;
            return !particle.destroyed && !particle.spawning && tiltAnimation.enable;
          }
        }, {
          key: "update",
          value: function update(particle, delta) {
            if (!this.isEnabled(particle)) {
              return;
            }

            updateTilt(particle, delta);
          }
        }]);

        return TiltUpdater;
      }();

      exports.TiltUpdater = TiltUpdater;
      /***/
    },

    /***/
    25224:
    /*!*********************************************************!*\
      !*** ./node_modules/tsparticles/Updaters/Tilt/index.js ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.loadTiltUpdater = void 0;

      var TiltUpdater_1 = __webpack_require__(
      /*! ./TiltUpdater */
      82508);

      function loadTiltUpdater(tsParticles) {
        tsParticles.addParticleUpdater("tilt", function (container) {
          return new TiltUpdater_1.TiltUpdater(container);
        });
      }

      exports.loadTiltUpdater = loadTiltUpdater;
      /***/
    },

    /***/
    64178:
    /*!*******************************************************************!*\
      !*** ./node_modules/tsparticles/Updaters/Wobble/WobbleUpdater.js ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WobbleUpdater = void 0;

      var Utils_1 = __webpack_require__(
      /*! ../../Utils */
      18942);

      function updateWobble(particle, delta) {
        var _a;

        var wobble = particle.options.wobble;

        if (!wobble.enable || !particle.wobble) {
          return;
        }

        var speed = particle.wobble.speed * delta.factor;
        var distance = ((_a = particle.retina.wobbleDistance) !== null && _a !== void 0 ? _a : 0) * delta.factor / (1000 / 60);
        var max = 2 * Math.PI;
        particle.wobble.angle += speed;

        if (particle.wobble.angle > max) {
          particle.wobble.angle -= max;
        }

        particle.position.x += distance * Math.cos(particle.wobble.angle);
        particle.position.y += distance * Math.abs(Math.sin(particle.wobble.angle));
      }

      var WobbleUpdater = /*#__PURE__*/function () {
        function WobbleUpdater(container) {
          _classCallCheck(this, WobbleUpdater);

          this.container = container;
        }

        _createClass(WobbleUpdater, [{
          key: "init",
          value: function init(particle) {
            var wobbleOpt = particle.options.wobble;

            if (wobbleOpt.enable) {
              particle.wobble = {
                angle: Math.random() * Math.PI * 2,
                speed: (0, Utils_1.getRangeValue)(wobbleOpt.speed) / 360
              };
            } else {
              particle.wobble = {
                angle: 0,
                speed: 0
              };
            }

            particle.retina.wobbleDistance = (0, Utils_1.getRangeValue)(wobbleOpt.distance) * this.container.retina.pixelRatio;
          }
        }, {
          key: "isEnabled",
          value: function isEnabled(particle) {
            return !particle.destroyed && !particle.spawning && particle.options.wobble.enable;
          }
        }, {
          key: "update",
          value: function update(particle, delta) {
            if (!this.isEnabled(particle)) {
              return;
            }

            updateWobble(particle, delta);
          }
        }]);

        return WobbleUpdater;
      }();

      exports.WobbleUpdater = WobbleUpdater;
      /***/
    },

    /***/
    44782:
    /*!***********************************************************!*\
      !*** ./node_modules/tsparticles/Updaters/Wobble/index.js ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.loadWobbleUpdater = void 0;

      var WobbleUpdater_1 = __webpack_require__(
      /*! ./WobbleUpdater */
      64178);

      function loadWobbleUpdater(tsParticles) {
        tsParticles.addParticleUpdater("wobble", function (container) {
          return new WobbleUpdater_1.WobbleUpdater(container);
        });
      }

      exports.loadWobbleUpdater = loadWobbleUpdater;
      /***/
    },

    /***/
    8063:
    /*!*******************************************************!*\
      !*** ./node_modules/tsparticles/Utils/CanvasUtils.js ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.alterHsl = exports.drawEllipse = exports.drawParticlePlugin = exports.drawPlugin = exports.drawShapeAfterEffect = exports.drawShape = exports.drawParticle = exports.drawGrabLine = exports.gradient = exports.drawConnectLine = exports.drawLinkTriangle = exports.drawLinkLine = exports.clear = exports.paintBase = void 0;

      var NumberUtils_1 = __webpack_require__(
      /*! ./NumberUtils */
      4836);

      var ColorUtils_1 = __webpack_require__(
      /*! ./ColorUtils */
      26523);

      var Enums_1 = __webpack_require__(
      /*! ../Enums */
      39666);

      function drawLine(context, begin, end) {
        context.beginPath();
        context.moveTo(begin.x, begin.y);
        context.lineTo(end.x, end.y);
        context.closePath();
      }

      function drawTriangle(context, p1, p2, p3) {
        context.beginPath();
        context.moveTo(p1.x, p1.y);
        context.lineTo(p2.x, p2.y);
        context.lineTo(p3.x, p3.y);
        context.closePath();
      }

      function paintBase(context, dimension, baseColor) {
        context.save();
        context.fillStyle = baseColor !== null && baseColor !== void 0 ? baseColor : "rgba(0,0,0,0)";
        context.fillRect(0, 0, dimension.width, dimension.height);
        context.restore();
      }

      exports.paintBase = paintBase;

      function clear(context, dimension) {
        context.clearRect(0, 0, dimension.width, dimension.height);
      }

      exports.clear = clear;

      function drawLinkLine(context, width, begin, end, maxDistance, canvasSize, warp, backgroundMask, composite, colorLine, opacity, shadow) {
        var drawn = false;

        if ((0, NumberUtils_1.getDistance)(begin, end) <= maxDistance) {
          drawLine(context, begin, end);
          drawn = true;
        } else if (warp) {
          var pi1;
          var pi2;
          var endNE = {
            x: end.x - canvasSize.width,
            y: end.y
          };
          var d1 = (0, NumberUtils_1.getDistances)(begin, endNE);

          if (d1.distance <= maxDistance) {
            var yi = begin.y - d1.dy / d1.dx * begin.x;
            pi1 = {
              x: 0,
              y: yi
            };
            pi2 = {
              x: canvasSize.width,
              y: yi
            };
          } else {
            var endSW = {
              x: end.x,
              y: end.y - canvasSize.height
            };
            var d2 = (0, NumberUtils_1.getDistances)(begin, endSW);

            if (d2.distance <= maxDistance) {
              var _yi = begin.y - d2.dy / d2.dx * begin.x;

              var xi = -_yi / (d2.dy / d2.dx);
              pi1 = {
                x: xi,
                y: 0
              };
              pi2 = {
                x: xi,
                y: canvasSize.height
              };
            } else {
              var endSE = {
                x: end.x - canvasSize.width,
                y: end.y - canvasSize.height
              };
              var d3 = (0, NumberUtils_1.getDistances)(begin, endSE);

              if (d3.distance <= maxDistance) {
                var _yi2 = begin.y - d3.dy / d3.dx * begin.x;

                var _xi = -_yi2 / (d3.dy / d3.dx);

                pi1 = {
                  x: _xi,
                  y: _yi2
                };
                pi2 = {
                  x: pi1.x + canvasSize.width,
                  y: pi1.y + canvasSize.height
                };
              }
            }
          }

          if (pi1 && pi2) {
            drawLine(context, begin, pi1);
            drawLine(context, end, pi2);
            drawn = true;
          }
        }

        if (!drawn) {
          return;
        }

        context.lineWidth = width;

        if (backgroundMask) {
          context.globalCompositeOperation = composite;
        }

        context.strokeStyle = (0, ColorUtils_1.getStyleFromRgb)(colorLine, opacity);

        if (shadow.enable) {
          var shadowColor = (0, ColorUtils_1.colorToRgb)(shadow.color);

          if (shadowColor) {
            context.shadowBlur = shadow.blur;
            context.shadowColor = (0, ColorUtils_1.getStyleFromRgb)(shadowColor);
          }
        }

        context.stroke();
      }

      exports.drawLinkLine = drawLinkLine;

      function drawLinkTriangle(context, pos1, pos2, pos3, backgroundMask, composite, colorTriangle, opacityTriangle) {
        drawTriangle(context, pos1, pos2, pos3);

        if (backgroundMask) {
          context.globalCompositeOperation = composite;
        }

        context.fillStyle = (0, ColorUtils_1.getStyleFromRgb)(colorTriangle, opacityTriangle);
        context.fill();
      }

      exports.drawLinkTriangle = drawLinkTriangle;

      function drawConnectLine(context, width, lineStyle, begin, end) {
        context.save();
        drawLine(context, begin, end);
        context.lineWidth = width;
        context.strokeStyle = lineStyle;
        context.stroke();
        context.restore();
      }

      exports.drawConnectLine = drawConnectLine;

      function gradient(context, p1, p2, opacity) {
        var gradStop = Math.floor(p2.getRadius() / p1.getRadius());
        var color1 = p1.getFillColor();
        var color2 = p2.getFillColor();

        if (!color1 || !color2) {
          return;
        }

        var sourcePos = p1.getPosition();
        var destPos = p2.getPosition();
        var midRgb = (0, ColorUtils_1.colorMix)(color1, color2, p1.getRadius(), p2.getRadius());
        var grad = context.createLinearGradient(sourcePos.x, sourcePos.y, destPos.x, destPos.y);
        grad.addColorStop(0, (0, ColorUtils_1.getStyleFromHsl)(color1, opacity));
        grad.addColorStop(gradStop > 1 ? 1 : gradStop, (0, ColorUtils_1.getStyleFromRgb)(midRgb, opacity));
        grad.addColorStop(1, (0, ColorUtils_1.getStyleFromHsl)(color2, opacity));
        return grad;
      }

      exports.gradient = gradient;

      function drawGrabLine(context, width, begin, end, colorLine, opacity) {
        context.save();
        drawLine(context, begin, end);
        context.strokeStyle = (0, ColorUtils_1.getStyleFromRgb)(colorLine, opacity);
        context.lineWidth = width;
        context.stroke();
        context.restore();
      }

      exports.drawGrabLine = drawGrabLine;

      function drawParticle(container, context, particle, delta, fillColorValue, strokeColorValue, backgroundMask, composite, radius, opacity, shadow, gradient) {
        var _a, _b, _c, _d, _e, _f;

        var pos = particle.getPosition();
        var tiltOptions = particle.options.tilt;
        var rollOptions = particle.options.roll;
        context.save();

        if (tiltOptions.enable || rollOptions.enable) {
          var roll = rollOptions.enable && particle.roll;
          var tilt = tiltOptions.enable && particle.tilt;
          var rollHorizontal = roll && (rollOptions.mode === Enums_1.RollMode.horizontal || rollOptions.mode === Enums_1.RollMode.both);
          var rollVertical = roll && (rollOptions.mode === Enums_1.RollMode.vertical || rollOptions.mode === Enums_1.RollMode.both);
          context.setTransform(rollHorizontal ? Math.cos(particle.roll.angle) : 1, tilt ? Math.cos(particle.tilt.value) * particle.tilt.cosDirection : 0, tilt ? Math.sin(particle.tilt.value) * particle.tilt.sinDirection : 0, rollVertical ? Math.sin(particle.roll.angle) : 1, pos.x, pos.y);
        } else {
          context.translate(pos.x, pos.y);
        }

        context.beginPath();
        var angle = ((_b = (_a = particle.rotate) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : 0) + (particle.options.rotate.path ? particle.velocity.angle : 0);

        if (angle !== 0) {
          context.rotate(angle);
        }

        if (backgroundMask) {
          context.globalCompositeOperation = composite;
        }

        var shadowColor = particle.shadowColor;

        if (shadow.enable && shadowColor) {
          context.shadowBlur = shadow.blur;
          context.shadowColor = (0, ColorUtils_1.getStyleFromRgb)(shadowColor);
          context.shadowOffsetX = shadow.offset.x;
          context.shadowOffsetY = shadow.offset.y;
        }

        if (gradient) {
          var gradientAngle = gradient.angle.value;
          var fillGradient = gradient.type === Enums_1.GradientType.radial ? context.createRadialGradient(0, 0, 0, 0, 0, radius) : context.createLinearGradient(Math.cos(gradientAngle) * -radius, Math.sin(gradientAngle) * -radius, Math.cos(gradientAngle) * radius, Math.sin(gradientAngle) * radius);

          var _iterator79 = _createForOfIteratorHelper(gradient.colors),
              _step79;

          try {
            for (_iterator79.s(); !(_step79 = _iterator79.n()).done;) {
              var color = _step79.value;
              fillGradient.addColorStop(color.stop, (0, ColorUtils_1.getStyleFromHsl)({
                h: color.value.h.value,
                s: color.value.s.value,
                l: color.value.l.value
              }, (_d = (_c = color.opacity) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : opacity));
            }
          } catch (err) {
            _iterator79.e(err);
          } finally {
            _iterator79.f();
          }

          context.fillStyle = fillGradient;
        } else {
          if (fillColorValue) {
            context.fillStyle = fillColorValue;
          }
        }

        var stroke = particle.stroke;
        context.lineWidth = (_e = particle.strokeWidth) !== null && _e !== void 0 ? _e : 0;

        if (strokeColorValue) {
          context.strokeStyle = strokeColorValue;
        }

        drawShape(container, context, particle, radius, opacity, delta);

        if (((_f = stroke === null || stroke === void 0 ? void 0 : stroke.width) !== null && _f !== void 0 ? _f : 0) > 0) {
          context.stroke();
        }

        if (particle.close) {
          context.closePath();
        }

        if (particle.fill) {
          context.fill();
        }

        context.restore();
        context.save();

        if (tiltOptions.enable && particle.tilt) {
          context.setTransform(1, Math.cos(particle.tilt.value) * particle.tilt.cosDirection, Math.sin(particle.tilt.value) * particle.tilt.sinDirection, 1, pos.x, pos.y);
        } else {
          context.translate(pos.x, pos.y);
        }

        if (angle !== 0) {
          context.rotate(angle);
        }

        if (backgroundMask) {
          context.globalCompositeOperation = composite;
        }

        drawShapeAfterEffect(container, context, particle, radius, opacity, delta);
        context.restore();
      }

      exports.drawParticle = drawParticle;

      function drawShape(container, context, particle, radius, opacity, delta) {
        if (!particle.shape) {
          return;
        }

        var drawer = container.drawers.get(particle.shape);

        if (!drawer) {
          return;
        }

        drawer.draw(context, particle, radius, opacity, delta, container.retina.pixelRatio);
      }

      exports.drawShape = drawShape;

      function drawShapeAfterEffect(container, context, particle, radius, opacity, delta) {
        if (!particle.shape) {
          return;
        }

        var drawer = container.drawers.get(particle.shape);

        if (!(drawer === null || drawer === void 0 ? void 0 : drawer.afterEffect)) {
          return;
        }

        drawer.afterEffect(context, particle, radius, opacity, delta, container.retina.pixelRatio);
      }

      exports.drawShapeAfterEffect = drawShapeAfterEffect;

      function drawPlugin(context, plugin, delta) {
        if (!plugin.draw) {
          return;
        }

        context.save();
        plugin.draw(context, delta);
        context.restore();
      }

      exports.drawPlugin = drawPlugin;

      function drawParticlePlugin(context, plugin, particle, delta) {
        if (plugin.drawParticle !== undefined) {
          context.save();
          plugin.drawParticle(context, particle, delta);
          context.restore();
        }
      }

      exports.drawParticlePlugin = drawParticlePlugin;

      function drawEllipse(context, particle, fillColorValue, radius, opacity, width, rotation, start, end) {
        var pos = particle.getPosition();

        if (fillColorValue) {
          context.strokeStyle = (0, ColorUtils_1.getStyleFromHsl)(fillColorValue, opacity);
        }

        if (width === 0) {
          return;
        }

        context.lineWidth = width;
        var rotationRadian = rotation * Math.PI / 180;
        context.beginPath();
        context.ellipse(pos.x, pos.y, radius / 2, radius * 2, rotationRadian, start, end);
        context.stroke();
      }

      exports.drawEllipse = drawEllipse;

      function alterHsl(color, type, value) {
        return {
          h: color.h,
          s: color.s,
          l: color.l + (type === Enums_1.AlterType.darken ? -1 : 1) * value
        };
      }

      exports.alterHsl = alterHsl;
      /***/
    },

    /***/
    98559:
    /*!**************************************************!*\
      !*** ./node_modules/tsparticles/Utils/Circle.js ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Circle = void 0;

      var Range_1 = __webpack_require__(
      /*! ./Range */
      70814);

      var NumberUtils_1 = __webpack_require__(
      /*! ./NumberUtils */
      4836);

      var Circle = /*#__PURE__*/function (_Range_1$Range) {
        _inherits(Circle, _Range_1$Range);

        var _super36 = _createSuper(Circle);

        function Circle(x, y, radius) {
          var _this45;

          _classCallCheck(this, Circle);

          _this45 = _super36.call(this, x, y);
          _this45.radius = radius;
          return _this45;
        }

        _createClass(Circle, [{
          key: "contains",
          value: function contains(point) {
            return (0, NumberUtils_1.getDistance)(point, this.position) <= this.radius;
          }
        }, {
          key: "intersects",
          value: function intersects(range) {
            var rect = range;
            var circle = range;
            var pos1 = this.position;
            var pos2 = range.position;
            var xDist = Math.abs(pos2.x - pos1.x);
            var yDist = Math.abs(pos2.y - pos1.y);
            var r = this.radius;

            if (circle.radius !== undefined) {
              var rSum = r + circle.radius;
              var dist = Math.sqrt(xDist * xDist + yDist + yDist);
              return rSum > dist;
            } else if (rect.size !== undefined) {
              var w = rect.size.width;
              var h = rect.size.height;
              var edges = Math.pow(xDist - w, 2) + Math.pow(yDist - h, 2);

              if (xDist > r + w || yDist > r + h) {
                return false;
              }

              if (xDist <= w || yDist <= h) {
                return true;
              }

              return edges <= r * r;
            }

            return false;
          }
        }]);

        return Circle;
      }(Range_1.Range);

      exports.Circle = Circle;
      /***/
    },

    /***/
    57626:
    /*!******************************************************!*\
      !*** ./node_modules/tsparticles/Utils/CircleWarp.js ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CircleWarp = void 0;

      var Rectangle_1 = __webpack_require__(
      /*! ./Rectangle */
      65461);

      var Circle_1 = __webpack_require__(
      /*! ./Circle */
      98559);

      var CircleWarp = /*#__PURE__*/function (_Circle_1$Circle) {
        _inherits(CircleWarp, _Circle_1$Circle);

        var _super37 = _createSuper(CircleWarp);

        function CircleWarp(x, y, radius, canvasSize) {
          var _this46;

          _classCallCheck(this, CircleWarp);

          _this46 = _super37.call(this, x, y, radius);
          _this46.canvasSize = canvasSize;
          _this46.canvasSize = {
            height: canvasSize.height,
            width: canvasSize.width
          };
          return _this46;
        }

        _createClass(CircleWarp, [{
          key: "contains",
          value: function contains(point) {
            if (_get(_getPrototypeOf(CircleWarp.prototype), "contains", this).call(this, point)) {
              return true;
            }

            var posNE = {
              x: point.x - this.canvasSize.width,
              y: point.y
            };

            if (_get(_getPrototypeOf(CircleWarp.prototype), "contains", this).call(this, posNE)) {
              return true;
            }

            var posSE = {
              x: point.x - this.canvasSize.width,
              y: point.y - this.canvasSize.height
            };

            if (_get(_getPrototypeOf(CircleWarp.prototype), "contains", this).call(this, posSE)) {
              return true;
            }

            var posSW = {
              x: point.x,
              y: point.y - this.canvasSize.height
            };
            return _get(_getPrototypeOf(CircleWarp.prototype), "contains", this).call(this, posSW);
          }
        }, {
          key: "intersects",
          value: function intersects(range) {
            if (_get(_getPrototypeOf(CircleWarp.prototype), "intersects", this).call(this, range)) {
              return true;
            }

            var rect = range;
            var circle = range;
            var newPos = {
              x: range.position.x - this.canvasSize.width,
              y: range.position.y - this.canvasSize.height
            };

            if (circle.radius !== undefined) {
              var biggerCircle = new Circle_1.Circle(newPos.x, newPos.y, circle.radius * 2);
              return _get(_getPrototypeOf(CircleWarp.prototype), "intersects", this).call(this, biggerCircle);
            } else if (rect.size !== undefined) {
              var rectSW = new Rectangle_1.Rectangle(newPos.x, newPos.y, rect.size.width * 2, rect.size.height * 2);
              return _get(_getPrototypeOf(CircleWarp.prototype), "intersects", this).call(this, rectSW);
            }

            return false;
          }
        }]);

        return CircleWarp;
      }(Circle_1.Circle);

      exports.CircleWarp = CircleWarp;
      /***/
    },

    /***/
    26523:
    /*!******************************************************!*\
      !*** ./node_modules/tsparticles/Utils/ColorUtils.js ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getHslAnimationFromHsl = exports.getHslFromAnimation = exports.getLinkRandomColor = exports.getLinkColor = exports.colorMix = exports.getStyleFromHsv = exports.getStyleFromHsl = exports.getStyleFromRgb = exports.getRandomRgbColor = exports.rgbaToHsva = exports.rgbToHsv = exports.hsvaToRgba = exports.hsvToRgb = exports.hsvaToHsla = exports.hsvToHsl = exports.hslaToHsva = exports.hslToHsv = exports.hslaToRgba = exports.hslToRgb = exports.stringToRgb = exports.stringToAlpha = exports.rgbToHsl = exports.colorToHsl = exports.colorToRgb = void 0;

      var Utils_1 = __webpack_require__(
      /*! ./Utils */
      99010);

      var Constants_1 = __webpack_require__(
      /*! ./Constants */
      73525);

      var NumberUtils_1 = __webpack_require__(
      /*! ./NumberUtils */
      4836);

      var Enums_1 = __webpack_require__(
      /*! ../Enums */
      39666);

      function hue2rgb(p, q, t) {
        var tCalc = t;

        if (tCalc < 0) {
          tCalc += 1;
        }

        if (tCalc > 1) {
          tCalc -= 1;
        }

        if (tCalc < 1 / 6) {
          return p + (q - p) * 6 * tCalc;
        }

        if (tCalc < 1 / 2) {
          return q;
        }

        if (tCalc < 2 / 3) {
          return p + (q - p) * (2 / 3 - tCalc) * 6;
        }

        return p;
      }

      function stringToRgba(input) {
        if (input.startsWith("rgb")) {
          var regex = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.]+)\s*)?\)/i;
          var result = regex.exec(input);
          return result ? {
            a: result.length > 4 ? parseFloat(result[5]) : 1,
            b: parseInt(result[3], 10),
            g: parseInt(result[2], 10),
            r: parseInt(result[1], 10)
          } : undefined;
        } else if (input.startsWith("hsl")) {
          var _regex = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i;

          var _result = _regex.exec(input);

          return _result ? hslaToRgba({
            a: _result.length > 4 ? parseFloat(_result[5]) : 1,
            h: parseInt(_result[1], 10),
            l: parseInt(_result[3], 10),
            s: parseInt(_result[2], 10)
          }) : undefined;
        } else if (input.startsWith("hsv")) {
          var _regex2 = /hsva?\(\s*(\d+)°\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i;

          var _result2 = _regex2.exec(input);

          return _result2 ? hsvaToRgba({
            a: _result2.length > 4 ? parseFloat(_result2[5]) : 1,
            h: parseInt(_result2[1], 10),
            s: parseInt(_result2[2], 10),
            v: parseInt(_result2[3], 10)
          }) : undefined;
        } else {
          var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i;
          var hexFixed = input.replace(shorthandRegex, function (_m, r, g, b, a) {
            return r + r + g + g + b + b + (a !== undefined ? a + a : "");
          });
          var _regex3 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i;

          var _result3 = _regex3.exec(hexFixed);

          return _result3 ? {
            a: _result3[4] !== undefined ? parseInt(_result3[4], 16) / 0xff : 1,
            b: parseInt(_result3[3], 16),
            g: parseInt(_result3[2], 16),
            r: parseInt(_result3[1], 16)
          } : undefined;
        }
      }

      function colorToRgb(input, index) {
        var useIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        var _a, _b, _c;

        if (input === undefined) {
          return;
        }

        var color = typeof input === "string" ? {
          value: input
        } : input;
        var res;

        if (typeof color.value === "string") {
          if (color.value === Constants_1.Constants.randomColorValue) {
            res = getRandomRgbColor();
          } else {
            res = stringToRgb(color.value);
          }
        } else {
          if (color.value instanceof Array) {
            var colorSelected = (0, Utils_1.itemFromArray)(color.value, index, useIndex);
            res = colorToRgb({
              value: colorSelected
            });
          } else {
            var colorValue = color.value;
            var rgbColor = (_a = colorValue.rgb) !== null && _a !== void 0 ? _a : color.value;

            if (rgbColor.r !== undefined) {
              res = rgbColor;
            } else {
              var hslColor = (_b = colorValue.hsl) !== null && _b !== void 0 ? _b : color.value;

              if (hslColor.h !== undefined && hslColor.l !== undefined) {
                res = hslToRgb(hslColor);
              } else {
                var hsvColor = (_c = colorValue.hsv) !== null && _c !== void 0 ? _c : color.value;

                if (hsvColor.h !== undefined && hsvColor.v !== undefined) {
                  res = hsvToRgb(hsvColor);
                }
              }
            }
          }
        }

        return res;
      }

      exports.colorToRgb = colorToRgb;

      function colorToHsl(color, index) {
        var useIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        var rgb = colorToRgb(color, index, useIndex);
        return rgb !== undefined ? rgbToHsl(rgb) : undefined;
      }

      exports.colorToHsl = colorToHsl;

      function rgbToHsl(color) {
        var r1 = color.r / 255;
        var g1 = color.g / 255;
        var b1 = color.b / 255;
        var max = Math.max(r1, g1, b1);
        var min = Math.min(r1, g1, b1);
        var res = {
          h: 0,
          l: (max + min) / 2,
          s: 0
        };

        if (max != min) {
          res.s = res.l < 0.5 ? (max - min) / (max + min) : (max - min) / (2.0 - max - min);
          res.h = r1 === max ? (g1 - b1) / (max - min) : res.h = g1 === max ? 2.0 + (b1 - r1) / (max - min) : 4.0 + (r1 - g1) / (max - min);
        }

        res.l *= 100;
        res.s *= 100;
        res.h *= 60;

        if (res.h < 0) {
          res.h += 360;
        }

        return res;
      }

      exports.rgbToHsl = rgbToHsl;

      function stringToAlpha(input) {
        var _a;

        return (_a = stringToRgba(input)) === null || _a === void 0 ? void 0 : _a.a;
      }

      exports.stringToAlpha = stringToAlpha;

      function stringToRgb(input) {
        return stringToRgba(input);
      }

      exports.stringToRgb = stringToRgb;

      function hslToRgb(hsl) {
        var result = {
          b: 0,
          g: 0,
          r: 0
        };
        var hslPercent = {
          h: hsl.h / 360,
          l: hsl.l / 100,
          s: hsl.s / 100
        };

        if (hslPercent.s === 0) {
          result.b = hslPercent.l;
          result.g = hslPercent.l;
          result.r = hslPercent.l;
        } else {
          var q = hslPercent.l < 0.5 ? hslPercent.l * (1 + hslPercent.s) : hslPercent.l + hslPercent.s - hslPercent.l * hslPercent.s;
          var p = 2 * hslPercent.l - q;
          result.r = hue2rgb(p, q, hslPercent.h + 1 / 3);
          result.g = hue2rgb(p, q, hslPercent.h);
          result.b = hue2rgb(p, q, hslPercent.h - 1 / 3);
        }

        result.r = Math.floor(result.r * 255);
        result.g = Math.floor(result.g * 255);
        result.b = Math.floor(result.b * 255);
        return result;
      }

      exports.hslToRgb = hslToRgb;

      function hslaToRgba(hsla) {
        var rgbResult = hslToRgb(hsla);
        return {
          a: hsla.a,
          b: rgbResult.b,
          g: rgbResult.g,
          r: rgbResult.r
        };
      }

      exports.hslaToRgba = hslaToRgba;

      function hslToHsv(hsl) {
        var l = hsl.l / 100,
            sl = hsl.s / 100;
        var v = l + sl * Math.min(l, 1 - l),
            sv = !v ? 0 : 2 * (1 - l / v);
        return {
          h: hsl.h,
          s: sv * 100,
          v: v * 100
        };
      }

      exports.hslToHsv = hslToHsv;

      function hslaToHsva(hsla) {
        var hsvResult = hslToHsv(hsla);
        return {
          a: hsla.a,
          h: hsvResult.h,
          s: hsvResult.s,
          v: hsvResult.v
        };
      }

      exports.hslaToHsva = hslaToHsva;

      function hsvToHsl(hsv) {
        var v = hsv.v / 100,
            sv = hsv.s / 100;
        var l = v * (1 - sv / 2),
            sl = l === 0 || l === 1 ? 0 : (v - l) / Math.min(l, 1 - l);
        return {
          h: hsv.h,
          l: l * 100,
          s: sl * 100
        };
      }

      exports.hsvToHsl = hsvToHsl;

      function hsvaToHsla(hsva) {
        var hslResult = hsvToHsl(hsva);
        return {
          a: hsva.a,
          h: hslResult.h,
          l: hslResult.l,
          s: hslResult.s
        };
      }

      exports.hsvaToHsla = hsvaToHsla;

      function hsvToRgb(hsv) {
        var result = {
          b: 0,
          g: 0,
          r: 0
        };
        var hsvPercent = {
          h: hsv.h / 60,
          s: hsv.s / 100,
          v: hsv.v / 100
        };
        var c = hsvPercent.v * hsvPercent.s,
            x = c * (1 - Math.abs(hsvPercent.h % 2 - 1));
        var tempRgb;

        if (hsvPercent.h >= 0 && hsvPercent.h <= 1) {
          tempRgb = {
            r: c,
            g: x,
            b: 0
          };
        } else if (hsvPercent.h > 1 && hsvPercent.h <= 2) {
          tempRgb = {
            r: x,
            g: c,
            b: 0
          };
        } else if (hsvPercent.h > 2 && hsvPercent.h <= 3) {
          tempRgb = {
            r: 0,
            g: c,
            b: x
          };
        } else if (hsvPercent.h > 3 && hsvPercent.h <= 4) {
          tempRgb = {
            r: 0,
            g: x,
            b: c
          };
        } else if (hsvPercent.h > 4 && hsvPercent.h <= 5) {
          tempRgb = {
            r: x,
            g: 0,
            b: c
          };
        } else if (hsvPercent.h > 5 && hsvPercent.h <= 6) {
          tempRgb = {
            r: c,
            g: 0,
            b: x
          };
        }

        if (tempRgb) {
          var m = hsvPercent.v - c;
          result.r = Math.floor((tempRgb.r + m) * 255);
          result.g = Math.floor((tempRgb.g + m) * 255);
          result.b = Math.floor((tempRgb.b + m) * 255);
        }

        return result;
      }

      exports.hsvToRgb = hsvToRgb;

      function hsvaToRgba(hsva) {
        var rgbResult = hsvToRgb(hsva);
        return {
          a: hsva.a,
          b: rgbResult.b,
          g: rgbResult.g,
          r: rgbResult.r
        };
      }

      exports.hsvaToRgba = hsvaToRgba;

      function rgbToHsv(rgb) {
        var rgbPercent = {
          r: rgb.r / 255,
          g: rgb.g / 255,
          b: rgb.b / 255
        },
            xMax = Math.max(rgbPercent.r, rgbPercent.g, rgbPercent.b),
            xMin = Math.min(rgbPercent.r, rgbPercent.g, rgbPercent.b),
            v = xMax,
            c = xMax - xMin;
        var h = 0;

        if (v === rgbPercent.r) {
          h = 60 * ((rgbPercent.g - rgbPercent.b) / c);
        } else if (v === rgbPercent.g) {
          h = 60 * (2 + (rgbPercent.b - rgbPercent.r) / c);
        } else if (v === rgbPercent.b) {
          h = 60 * (4 + (rgbPercent.r - rgbPercent.g) / c);
        }

        var s = !v ? 0 : c / v;
        return {
          h: h,
          s: s * 100,
          v: v * 100
        };
      }

      exports.rgbToHsv = rgbToHsv;

      function rgbaToHsva(rgba) {
        var hsvResult = rgbToHsv(rgba);
        return {
          a: rgba.a,
          h: hsvResult.h,
          s: hsvResult.s,
          v: hsvResult.v
        };
      }

      exports.rgbaToHsva = rgbaToHsva;

      function getRandomRgbColor(min) {
        var fixedMin = min !== null && min !== void 0 ? min : 0;
        return {
          b: Math.floor((0, NumberUtils_1.randomInRange)((0, NumberUtils_1.setRangeValue)(fixedMin, 256))),
          g: Math.floor((0, NumberUtils_1.randomInRange)((0, NumberUtils_1.setRangeValue)(fixedMin, 256))),
          r: Math.floor((0, NumberUtils_1.randomInRange)((0, NumberUtils_1.setRangeValue)(fixedMin, 256)))
        };
      }

      exports.getRandomRgbColor = getRandomRgbColor;

      function getStyleFromRgb(color, opacity) {
        return "rgba(".concat(color.r, ", ").concat(color.g, ", ").concat(color.b, ", ").concat(opacity !== null && opacity !== void 0 ? opacity : 1, ")");
      }

      exports.getStyleFromRgb = getStyleFromRgb;

      function getStyleFromHsl(color, opacity) {
        return "hsla(".concat(color.h, ", ").concat(color.s, "%, ").concat(color.l, "%, ").concat(opacity !== null && opacity !== void 0 ? opacity : 1, ")");
      }

      exports.getStyleFromHsl = getStyleFromHsl;

      function getStyleFromHsv(color, opacity) {
        return getStyleFromHsl(hsvToHsl(color), opacity);
      }

      exports.getStyleFromHsv = getStyleFromHsv;

      function colorMix(color1, color2, size1, size2) {
        var rgb1 = color1;
        var rgb2 = color2;

        if (rgb1.r === undefined) {
          rgb1 = hslToRgb(color1);
        }

        if (rgb2.r === undefined) {
          rgb2 = hslToRgb(color2);
        }

        return {
          b: (0, NumberUtils_1.mix)(rgb1.b, rgb2.b, size1, size2),
          g: (0, NumberUtils_1.mix)(rgb1.g, rgb2.g, size1, size2),
          r: (0, NumberUtils_1.mix)(rgb1.r, rgb2.r, size1, size2)
        };
      }

      exports.colorMix = colorMix;

      function getLinkColor(p1, p2, linkColor) {
        var _a, _b;

        if (linkColor === Constants_1.Constants.randomColorValue) {
          return getRandomRgbColor();
        } else if (linkColor === "mid") {
          var sourceColor = (_a = p1.getFillColor()) !== null && _a !== void 0 ? _a : p1.getStrokeColor();
          var destColor = (_b = p2 === null || p2 === void 0 ? void 0 : p2.getFillColor()) !== null && _b !== void 0 ? _b : p2 === null || p2 === void 0 ? void 0 : p2.getStrokeColor();

          if (sourceColor && destColor && p2) {
            return colorMix(sourceColor, destColor, p1.getRadius(), p2.getRadius());
          } else {
            var hslColor = sourceColor !== null && sourceColor !== void 0 ? sourceColor : destColor;

            if (hslColor) {
              return hslToRgb(hslColor);
            }
          }
        } else {
          return linkColor;
        }
      }

      exports.getLinkColor = getLinkColor;

      function getLinkRandomColor(optColor, blink, consent) {
        var color = typeof optColor === "string" ? optColor : optColor.value;

        if (color === Constants_1.Constants.randomColorValue) {
          if (consent) {
            return colorToRgb({
              value: color
            });
          } else if (blink) {
            return Constants_1.Constants.randomColorValue;
          } else {
            return Constants_1.Constants.midColorValue;
          }
        } else {
          return colorToRgb({
            value: color
          });
        }
      }

      exports.getLinkRandomColor = getLinkRandomColor;

      function getHslFromAnimation(animation) {
        return animation !== undefined ? {
          h: animation.h.value,
          s: animation.s.value,
          l: animation.l.value
        } : undefined;
      }

      exports.getHslFromAnimation = getHslFromAnimation;

      function getHslAnimationFromHsl(hsl, animationOptions, reduceFactor) {
        var resColor = {
          h: {
            enable: false,
            value: hsl.h
          },
          s: {
            enable: false,
            value: hsl.s
          },
          l: {
            enable: false,
            value: hsl.l
          }
        };

        if (animationOptions) {
          setColorAnimation(resColor.h, animationOptions.h, reduceFactor);
          setColorAnimation(resColor.s, animationOptions.s, reduceFactor);
          setColorAnimation(resColor.l, animationOptions.l, reduceFactor);
        }

        return resColor;
      }

      exports.getHslAnimationFromHsl = getHslAnimationFromHsl;

      function setColorAnimation(colorValue, colorAnimation, reduceFactor) {
        colorValue.enable = colorAnimation.enable;

        if (colorValue.enable) {
          colorValue.velocity = colorAnimation.speed / 100 * reduceFactor;

          if (colorAnimation.sync) {
            return;
          }

          colorValue.status = Enums_1.AnimationStatus.increasing;
          colorValue.velocity *= Math.random();

          if (colorValue.value) {
            colorValue.value *= Math.random();
          }
        } else {
          colorValue.velocity = 0;
        }
      }
      /***/

    },

    /***/
    73525:
    /*!*****************************************************!*\
      !*** ./node_modules/tsparticles/Utils/Constants.js ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Constants = void 0;

      var Constants = function Constants() {
        _classCallCheck(this, Constants);
      };

      exports.Constants = Constants;
      Constants.canvasClass = "tsparticles-canvas-el";
      Constants.randomColorValue = "random";
      Constants.midColorValue = "mid";
      Constants.touchEndEvent = "touchend";
      Constants.mouseDownEvent = "mousedown";
      Constants.mouseUpEvent = "mouseup";
      Constants.mouseMoveEvent = "mousemove";
      Constants.touchStartEvent = "touchstart";
      Constants.touchMoveEvent = "touchmove";
      Constants.mouseLeaveEvent = "mouseleave";
      Constants.mouseOutEvent = "mouseout";
      Constants.touchCancelEvent = "touchcancel";
      Constants.resizeEvent = "resize";
      Constants.visibilityChangeEvent = "visibilitychange";
      Constants.noPolygonDataLoaded = "No polygon data loaded.";
      Constants.noPolygonFound = "No polygon found, you need to specify SVG url in config.";
      /***/
    },

    /***/
    45310:
    /*!**********************************************************!*\
      !*** ./node_modules/tsparticles/Utils/EventListeners.js ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.EventListeners = void 0;

      var Enums_1 = __webpack_require__(
      /*! ../Enums */
      39666);

      var Constants_1 = __webpack_require__(
      /*! ./Constants */
      73525);

      var Utils_1 = __webpack_require__(
      /*! ./Utils */
      99010);

      function manageListener(element, event, handler, add, options) {
        if (add) {
          var addOptions = {
            passive: true
          };

          if (typeof options === "boolean") {
            addOptions.capture = options;
          } else if (options !== undefined) {
            addOptions = options;
          }

          element.addEventListener(event, handler, addOptions);
        } else {
          var removeOptions = options;
          element.removeEventListener(event, handler, removeOptions);
        }
      }

      var EventListeners = /*#__PURE__*/function () {
        function EventListeners(container) {
          var _this47 = this;

          _classCallCheck(this, EventListeners);

          this.container = container;
          this.canPush = true;

          this.mouseMoveHandler = function (e) {
            return _this47.mouseTouchMove(e);
          };

          this.touchStartHandler = function (e) {
            return _this47.mouseTouchMove(e);
          };

          this.touchMoveHandler = function (e) {
            return _this47.mouseTouchMove(e);
          };

          this.touchEndHandler = function () {
            return _this47.mouseTouchFinish();
          };

          this.mouseLeaveHandler = function () {
            return _this47.mouseTouchFinish();
          };

          this.touchCancelHandler = function () {
            return _this47.mouseTouchFinish();
          };

          this.touchEndClickHandler = function (e) {
            return _this47.mouseTouchClick(e);
          };

          this.mouseUpHandler = function (e) {
            return _this47.mouseTouchClick(e);
          };

          this.mouseDownHandler = function () {
            return _this47.mouseDown();
          };

          this.visibilityChangeHandler = function () {
            return _this47.handleVisibilityChange();
          };

          this.themeChangeHandler = function (e) {
            return _this47.handleThemeChange(e);
          };

          this.resizeHandler = function () {
            return _this47.handleWindowResize();
          };
        }

        _createClass(EventListeners, [{
          key: "addListeners",
          value: function addListeners() {
            this.manageListeners(true);
          }
        }, {
          key: "removeListeners",
          value: function removeListeners() {
            this.manageListeners(false);
          }
        }, {
          key: "manageListeners",
          value: function manageListeners(add) {
            var _this48 = this;

            var _a;

            var container = this.container;
            var options = container.actualOptions;
            var detectType = options.interactivity.detectsOn;
            var mouseLeaveEvent = Constants_1.Constants.mouseLeaveEvent;

            if (detectType === Enums_1.InteractivityDetect.window) {
              container.interactivity.element = window;
              mouseLeaveEvent = Constants_1.Constants.mouseOutEvent;
            } else if (detectType === Enums_1.InteractivityDetect.parent && container.canvas.element) {
              var canvasEl = container.canvas.element;
              container.interactivity.element = (_a = canvasEl.parentElement) !== null && _a !== void 0 ? _a : canvasEl.parentNode;
            } else {
              container.interactivity.element = container.canvas.element;
            }

            var mediaMatch = typeof matchMedia !== "undefined" && matchMedia("(prefers-color-scheme: dark)");

            if (mediaMatch) {
              manageListener(mediaMatch, "change", this.themeChangeHandler, add);
            }

            var interactivityEl = container.interactivity.element;

            if (!interactivityEl) {
              return;
            }

            var html = interactivityEl;

            if (options.interactivity.events.onHover.enable || options.interactivity.events.onClick.enable) {
              manageListener(interactivityEl, Constants_1.Constants.mouseMoveEvent, this.mouseMoveHandler, add);
              manageListener(interactivityEl, Constants_1.Constants.touchStartEvent, this.touchStartHandler, add);
              manageListener(interactivityEl, Constants_1.Constants.touchMoveEvent, this.touchMoveHandler, add);

              if (!options.interactivity.events.onClick.enable) {
                manageListener(interactivityEl, Constants_1.Constants.touchEndEvent, this.touchEndHandler, add);
              } else {
                manageListener(interactivityEl, Constants_1.Constants.touchEndEvent, this.touchEndClickHandler, add);
                manageListener(interactivityEl, Constants_1.Constants.mouseUpEvent, this.mouseUpHandler, add);
                manageListener(interactivityEl, Constants_1.Constants.mouseDownEvent, this.mouseDownHandler, add);
              }

              manageListener(interactivityEl, mouseLeaveEvent, this.mouseLeaveHandler, add);
              manageListener(interactivityEl, Constants_1.Constants.touchCancelEvent, this.touchCancelHandler, add);
            }

            if (container.canvas.element) {
              container.canvas.element.style.pointerEvents = html === container.canvas.element ? "initial" : "none";
            }

            if (options.interactivity.events.resize) {
              if (typeof ResizeObserver !== "undefined") {
                if (this.resizeObserver && !add) {
                  if (container.canvas.element) {
                    this.resizeObserver.unobserve(container.canvas.element);
                  }

                  this.resizeObserver.disconnect();
                  delete this.resizeObserver;
                } else if (!this.resizeObserver && add && container.canvas.element) {
                  this.resizeObserver = new ResizeObserver(function (entries) {
                    var entry = entries.find(function (e) {
                      return e.target === container.canvas.element;
                    });

                    if (!entry) {
                      return;
                    }

                    _this48.handleWindowResize();
                  });
                  this.resizeObserver.observe(container.canvas.element);
                }
              } else {
                manageListener(window, Constants_1.Constants.resizeEvent, this.resizeHandler, add);
              }
            }

            if (document) {
              manageListener(document, Constants_1.Constants.visibilityChangeEvent, this.visibilityChangeHandler, add, false);
            }
          }
        }, {
          key: "handleWindowResize",
          value: function handleWindowResize() {
            var _this49 = this;

            if (this.resizeTimeout) {
              clearTimeout(this.resizeTimeout);
              delete this.resizeTimeout;
            }

            this.resizeTimeout = setTimeout(function () {
              var _a;

              return (_a = _this49.container.canvas) === null || _a === void 0 ? void 0 : _a.windowResize();
            }, 500);
          }
        }, {
          key: "handleVisibilityChange",
          value: function handleVisibilityChange() {
            var container = this.container;
            var options = container.actualOptions;
            this.mouseTouchFinish();

            if (!options.pauseOnBlur) {
              return;
            }

            if (document === null || document === void 0 ? void 0 : document.hidden) {
              container.pageHidden = true;
              container.pause();
            } else {
              container.pageHidden = false;

              if (container.getAnimationStatus()) {
                container.play(true);
              } else {
                container.draw(true);
              }
            }
          }
        }, {
          key: "mouseDown",
          value: function mouseDown() {
            var interactivity = this.container.interactivity;

            if (interactivity) {
              var mouse = interactivity.mouse;
              mouse.clicking = true;
              mouse.downPosition = mouse.position;
            }
          }
        }, {
          key: "mouseTouchMove",
          value: function mouseTouchMove(e) {
            var _a, _b, _c, _d, _e, _f, _g;

            var container = this.container;
            var options = container.actualOptions;

            if (((_a = container.interactivity) === null || _a === void 0 ? void 0 : _a.element) === undefined) {
              return;
            }

            container.interactivity.mouse.inside = true;
            var pos;
            var canvas = container.canvas.element;

            if (e.type.startsWith("mouse")) {
              this.canPush = true;
              var mouseEvent = e;

              if (container.interactivity.element === window) {
                if (canvas) {
                  var clientRect = canvas.getBoundingClientRect();
                  pos = {
                    x: mouseEvent.clientX - clientRect.left,
                    y: mouseEvent.clientY - clientRect.top
                  };
                }
              } else if (options.interactivity.detectsOn === Enums_1.InteractivityDetect.parent) {
                var source = mouseEvent.target;
                var target = mouseEvent.currentTarget;
                var canvasEl = container.canvas.element;

                if (source && target && canvasEl) {
                  var sourceRect = source.getBoundingClientRect();
                  var targetRect = target.getBoundingClientRect();
                  var canvasRect = canvasEl.getBoundingClientRect();
                  pos = {
                    x: mouseEvent.offsetX + 2 * sourceRect.left - (targetRect.left + canvasRect.left),
                    y: mouseEvent.offsetY + 2 * sourceRect.top - (targetRect.top + canvasRect.top)
                  };
                } else {
                  pos = {
                    x: (_b = mouseEvent.offsetX) !== null && _b !== void 0 ? _b : mouseEvent.clientX,
                    y: (_c = mouseEvent.offsetY) !== null && _c !== void 0 ? _c : mouseEvent.clientY
                  };
                }
              } else {
                if (mouseEvent.target === container.canvas.element) {
                  pos = {
                    x: (_d = mouseEvent.offsetX) !== null && _d !== void 0 ? _d : mouseEvent.clientX,
                    y: (_e = mouseEvent.offsetY) !== null && _e !== void 0 ? _e : mouseEvent.clientY
                  };
                }
              }
            } else {
              this.canPush = e.type !== "touchmove";
              var touchEvent = e;
              var lastTouch = touchEvent.touches[touchEvent.touches.length - 1];

              var _canvasRect = canvas === null || canvas === void 0 ? void 0 : canvas.getBoundingClientRect();

              pos = {
                x: lastTouch.clientX - ((_f = _canvasRect === null || _canvasRect === void 0 ? void 0 : _canvasRect.left) !== null && _f !== void 0 ? _f : 0),
                y: lastTouch.clientY - ((_g = _canvasRect === null || _canvasRect === void 0 ? void 0 : _canvasRect.top) !== null && _g !== void 0 ? _g : 0)
              };
            }

            var pxRatio = container.retina.pixelRatio;

            if (pos) {
              pos.x *= pxRatio;
              pos.y *= pxRatio;
            }

            container.interactivity.mouse.position = pos;
            container.interactivity.status = Constants_1.Constants.mouseMoveEvent;
          }
        }, {
          key: "mouseTouchFinish",
          value: function mouseTouchFinish() {
            var interactivity = this.container.interactivity;

            if (interactivity === undefined) {
              return;
            }

            var mouse = interactivity.mouse;
            delete mouse.position;
            delete mouse.clickPosition;
            delete mouse.downPosition;
            interactivity.status = Constants_1.Constants.mouseLeaveEvent;
            mouse.inside = false;
            mouse.clicking = false;
          }
        }, {
          key: "mouseTouchClick",
          value: function mouseTouchClick(e) {
            var container = this.container;
            var options = container.actualOptions;
            var mouse = container.interactivity.mouse;
            mouse.inside = true;
            var handled = false;
            var mousePosition = mouse.position;

            if (mousePosition === undefined || !options.interactivity.events.onClick.enable) {
              return;
            }

            var _iterator80 = _createForOfIteratorHelper(container.plugins),
                _step80;

            try {
              for (_iterator80.s(); !(_step80 = _iterator80.n()).done;) {
                var _step80$value = _slicedToArray(_step80.value, 2),
                    plugin = _step80$value[1];

                if (plugin.clickPositionValid !== undefined) {
                  handled = plugin.clickPositionValid(mousePosition);

                  if (handled) {
                    break;
                  }
                }
              }
            } catch (err) {
              _iterator80.e(err);
            } finally {
              _iterator80.f();
            }

            if (!handled) {
              this.doMouseTouchClick(e);
            }

            mouse.clicking = false;
          }
        }, {
          key: "doMouseTouchClick",
          value: function doMouseTouchClick(e) {
            var _this50 = this;

            var container = this.container;
            var options = container.actualOptions;

            if (this.canPush) {
              var mousePos = container.interactivity.mouse.position;

              if (mousePos) {
                container.interactivity.mouse.clickPosition = {
                  x: mousePos.x,
                  y: mousePos.y
                };
              } else {
                return;
              }

              container.interactivity.mouse.clickTime = new Date().getTime();
              var onClick = options.interactivity.events.onClick;

              if (onClick.mode instanceof Array) {
                var _iterator81 = _createForOfIteratorHelper(onClick.mode),
                    _step81;

                try {
                  for (_iterator81.s(); !(_step81 = _iterator81.n()).done;) {
                    var mode = _step81.value;
                    this.handleClickMode(mode);
                  }
                } catch (err) {
                  _iterator81.e(err);
                } finally {
                  _iterator81.f();
                }
              } else {
                this.handleClickMode(onClick.mode);
              }
            }

            if (e.type === "touchend") {
              setTimeout(function () {
                return _this50.mouseTouchFinish();
              }, 500);
            }
          }
        }, {
          key: "handleThemeChange",
          value: function handleThemeChange(e) {
            var mediaEvent = e;
            var themeName = mediaEvent.matches ? this.container.options.defaultDarkTheme : this.container.options.defaultLightTheme;
            var theme = this.container.options.themes.find(function (theme) {
              return theme.name === themeName;
            });

            if (theme && theme["default"].auto) {
              this.container.loadTheme(themeName);
            }
          }
        }, {
          key: "handleClickMode",
          value: function handleClickMode(mode) {
            var container = this.container;
            var options = container.actualOptions;
            var pushNb = options.interactivity.modes.push.quantity;
            var removeNb = options.interactivity.modes.remove.quantity;

            switch (mode) {
              case Enums_1.ClickMode.push:
                {
                  if (pushNb > 0) {
                    var pushOptions = options.interactivity.modes.push;
                    var group = (0, Utils_1.itemFromArray)([undefined].concat(_toConsumableArray(pushOptions.groups)));
                    var groupOptions = group !== undefined ? container.actualOptions.particles.groups[group] : undefined;
                    container.particles.push(pushNb, container.interactivity.mouse, groupOptions, group);
                  }

                  break;
                }

              case Enums_1.ClickMode.remove:
                container.particles.removeQuantity(removeNb);
                break;

              case Enums_1.ClickMode.bubble:
                container.bubble.clicking = true;
                break;

              case Enums_1.ClickMode.repulse:
                container.repulse.clicking = true;
                container.repulse.count = 0;

                var _iterator82 = _createForOfIteratorHelper(container.repulse.particles),
                    _step82;

                try {
                  for (_iterator82.s(); !(_step82 = _iterator82.n()).done;) {
                    var particle = _step82.value;
                    particle.velocity.setTo(particle.initialVelocity);
                  }
                } catch (err) {
                  _iterator82.e(err);
                } finally {
                  _iterator82.f();
                }

                container.repulse.particles = [];
                container.repulse.finish = false;
                setTimeout(function () {
                  if (!container.destroyed) {
                    container.repulse.clicking = false;
                  }
                }, options.interactivity.modes.repulse.duration * 1000);
                break;

              case Enums_1.ClickMode.attract:
                container.attract.clicking = true;
                container.attract.count = 0;

                var _iterator83 = _createForOfIteratorHelper(container.attract.particles),
                    _step83;

                try {
                  for (_iterator83.s(); !(_step83 = _iterator83.n()).done;) {
                    var _particle4 = _step83.value;

                    _particle4.velocity.setTo(_particle4.initialVelocity);
                  }
                } catch (err) {
                  _iterator83.e(err);
                } finally {
                  _iterator83.f();
                }

                container.attract.particles = [];
                container.attract.finish = false;
                setTimeout(function () {
                  if (!container.destroyed) {
                    container.attract.clicking = false;
                  }
                }, options.interactivity.modes.attract.duration * 1000);
                break;

              case Enums_1.ClickMode.pause:
                if (container.getAnimationStatus()) {
                  container.pause();
                } else {
                  container.play();
                }

                break;
            }

            var _iterator84 = _createForOfIteratorHelper(container.plugins),
                _step84;

            try {
              for (_iterator84.s(); !(_step84 = _iterator84.n()).done;) {
                var _step84$value = _slicedToArray(_step84.value, 2),
                    plugin = _step84$value[1];

                if (plugin.handleClickMode) {
                  plugin.handleClickMode(mode);
                }
              }
            } catch (err) {
              _iterator84.e(err);
            } finally {
              _iterator84.f();
            }
          }
        }]);

        return EventListeners;
      }();

      exports.EventListeners = EventListeners;
      /***/
    },

    /***/
    4836:
    /*!*******************************************************!*\
      !*** ./node_modules/tsparticles/Utils/NumberUtils.js ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.calcEasing = exports.collisionVelocity = exports.getParticleBaseVelocity = exports.getParticleDirectionAngle = exports.getDistance = exports.getDistances = exports.getValue = exports.setRangeValue = exports.getRangeMax = exports.getRangeMin = exports.getRangeValue = exports.randomInRange = exports.mix = exports.clamp = void 0;

      var Enums_1 = __webpack_require__(
      /*! ../Enums */
      39666);

      var Vector_1 = __webpack_require__(
      /*! ../Core/Particle/Vector */
      27440);

      function clamp(num, min, max) {
        return Math.min(Math.max(num, min), max);
      }

      exports.clamp = clamp;

      function mix(comp1, comp2, weight1, weight2) {
        return Math.floor((comp1 * weight1 + comp2 * weight2) / (weight1 + weight2));
      }

      exports.mix = mix;

      function randomInRange(r) {
        var max = getRangeMax(r);
        var min = getRangeMin(r);

        if (max === min) {
          min = 0;
        }

        return Math.random() * (max - min) + min;
      }

      exports.randomInRange = randomInRange;

      function getRangeValue(value) {
        return typeof value === "number" ? value : randomInRange(value);
      }

      exports.getRangeValue = getRangeValue;

      function getRangeMin(value) {
        return typeof value === "number" ? value : value.min;
      }

      exports.getRangeMin = getRangeMin;

      function getRangeMax(value) {
        return typeof value === "number" ? value : value.max;
      }

      exports.getRangeMax = getRangeMax;

      function setRangeValue(source, value) {
        if (source === value || value === undefined && typeof source === "number") {
          return source;
        }

        var min = getRangeMin(source),
            max = getRangeMax(source);
        return value !== undefined ? {
          min: Math.min(min, value),
          max: Math.max(max, value)
        } : setRangeValue(min, max);
      }

      exports.setRangeValue = setRangeValue;

      function getValue(options) {
        var random = options.random;

        var _ref17 = typeof random === "boolean" ? {
          enable: random,
          minimumValue: 0
        } : random,
            enable = _ref17.enable,
            minimumValue = _ref17.minimumValue;

        return enable ? getRangeValue(setRangeValue(options.value, minimumValue)) : getRangeValue(options.value);
      }

      exports.getValue = getValue;

      function getDistances(pointA, pointB) {
        var dx = pointA.x - pointB.x;
        var dy = pointA.y - pointB.y;
        return {
          dx: dx,
          dy: dy,
          distance: Math.sqrt(dx * dx + dy * dy)
        };
      }

      exports.getDistances = getDistances;

      function getDistance(pointA, pointB) {
        return getDistances(pointA, pointB).distance;
      }

      exports.getDistance = getDistance;

      function getParticleDirectionAngle(direction) {
        if (typeof direction === "number") {
          return direction * Math.PI / 180;
        } else {
          switch (direction) {
            case Enums_1.MoveDirection.top:
              return -Math.PI / 2;

            case Enums_1.MoveDirection.topRight:
              return -Math.PI / 4;

            case Enums_1.MoveDirection.right:
              return 0;

            case Enums_1.MoveDirection.bottomRight:
              return Math.PI / 4;

            case Enums_1.MoveDirection.bottom:
              return Math.PI / 2;

            case Enums_1.MoveDirection.bottomLeft:
              return 3 * Math.PI / 4;

            case Enums_1.MoveDirection.left:
              return Math.PI;

            case Enums_1.MoveDirection.topLeft:
              return -3 * Math.PI / 4;

            case Enums_1.MoveDirection.none:
            default:
              return Math.random() * Math.PI * 2;
          }
        }
      }

      exports.getParticleDirectionAngle = getParticleDirectionAngle;

      function getParticleBaseVelocity(direction) {
        var baseVelocity = Vector_1.Vector.origin;
        baseVelocity.length = 1;
        baseVelocity.angle = direction;
        return baseVelocity;
      }

      exports.getParticleBaseVelocity = getParticleBaseVelocity;

      function collisionVelocity(v1, v2, m1, m2) {
        return Vector_1.Vector.create(v1.x * (m1 - m2) / (m1 + m2) + v2.x * 2 * m2 / (m1 + m2), v1.y);
      }

      exports.collisionVelocity = collisionVelocity;

      function calcEasing(value, type) {
        switch (type) {
          case Enums_1.EasingType.easeOutQuad:
            return 1 - Math.pow(1 - value, 2);

          case Enums_1.EasingType.easeOutCubic:
            return 1 - Math.pow(1 - value, 3);

          case Enums_1.EasingType.easeOutQuart:
            return 1 - Math.pow(1 - value, 4);

          case Enums_1.EasingType.easeOutQuint:
            return 1 - Math.pow(1 - value, 5);

          case Enums_1.EasingType.easeOutExpo:
            return value === 1 ? 1 : 1 - Math.pow(2, -10 * value);

          case Enums_1.EasingType.easeOutSine:
            return Math.sin(value * Math.PI / 2);

          case Enums_1.EasingType.easeOutBack:
            {
              var c1 = 1.70158;
              var c3 = c1 + 1;
              return 1 + c3 * Math.pow(value - 1, 3) + c1 * Math.pow(value - 1, 2);
            }

          case Enums_1.EasingType.easeOutCirc:
            return Math.sqrt(1 - Math.pow(value - 1, 2));

          default:
            return value;
        }
      }

      exports.calcEasing = calcEasing;
      /***/
    },

    /***/
    33160:
    /*!***************************************************!*\
      !*** ./node_modules/tsparticles/Utils/Plugins.js ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Plugins = void 0;
      var plugins = [];
      var interactorsInitializers = new Map();
      var updatersInitializers = new Map();
      var interactors = new Map();
      var updaters = new Map();
      var presets = new Map();
      var drawers = new Map();
      var pathGenerators = new Map();

      var Plugins = /*#__PURE__*/function () {
        function Plugins() {
          _classCallCheck(this, Plugins);
        }

        _createClass(Plugins, null, [{
          key: "getPlugin",
          value: function getPlugin(plugin) {
            return plugins.find(function (t) {
              return t.id === plugin;
            });
          }
        }, {
          key: "addPlugin",
          value: function addPlugin(plugin) {
            if (!Plugins.getPlugin(plugin.id)) {
              plugins.push(plugin);
            }
          }
        }, {
          key: "getAvailablePlugins",
          value: function getAvailablePlugins(container) {
            var res = new Map();

            var _iterator85 = _createForOfIteratorHelper(plugins),
                _step85;

            try {
              for (_iterator85.s(); !(_step85 = _iterator85.n()).done;) {
                var plugin = _step85.value;

                if (!plugin.needsPlugin(container.actualOptions)) {
                  continue;
                }

                res.set(plugin.id, plugin.getPlugin(container));
              }
            } catch (err) {
              _iterator85.e(err);
            } finally {
              _iterator85.f();
            }

            return res;
          }
        }, {
          key: "loadOptions",
          value: function loadOptions(options, sourceOptions) {
            var _iterator86 = _createForOfIteratorHelper(plugins),
                _step86;

            try {
              for (_iterator86.s(); !(_step86 = _iterator86.n()).done;) {
                var plugin = _step86.value;
                plugin.loadOptions(options, sourceOptions);
              }
            } catch (err) {
              _iterator86.e(err);
            } finally {
              _iterator86.f();
            }
          }
        }, {
          key: "getPreset",
          value: function getPreset(preset) {
            return presets.get(preset);
          }
        }, {
          key: "addPreset",
          value: function addPreset(presetKey, options) {
            var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            if (override || !Plugins.getPreset(presetKey)) {
              presets.set(presetKey, options);
            }
          }
        }, {
          key: "addShapeDrawer",
          value: function addShapeDrawer(type, drawer) {
            if (!Plugins.getShapeDrawer(type)) {
              drawers.set(type, drawer);
            }
          }
        }, {
          key: "getShapeDrawer",
          value: function getShapeDrawer(type) {
            return drawers.get(type);
          }
        }, {
          key: "getSupportedShapes",
          value: function getSupportedShapes() {
            return drawers.keys();
          }
        }, {
          key: "getPathGenerator",
          value: function getPathGenerator(type) {
            return pathGenerators.get(type);
          }
        }, {
          key: "addPathGenerator",
          value: function addPathGenerator(type, pathGenerator) {
            if (!Plugins.getPathGenerator(type)) {
              pathGenerators.set(type, pathGenerator);
            }
          }
        }, {
          key: "getInteractors",
          value: function getInteractors(container) {
            var res = interactors.get(container);

            if (!res) {
              res = _toConsumableArray(interactorsInitializers.values()).map(function (t) {
                return t(container);
              });
              interactors.set(container, res);
            }

            return res;
          }
        }, {
          key: "addInteractor",
          value: function addInteractor(name, initInteractor) {
            interactorsInitializers.set(name, initInteractor);
          }
        }, {
          key: "getUpdaters",
          value: function getUpdaters(container) {
            var res = updaters.get(container);

            if (!res) {
              res = _toConsumableArray(updatersInitializers.values()).map(function (t) {
                return t(container);
              });
              updaters.set(container, res);
            }

            return res;
          }
        }, {
          key: "addParticleUpdater",
          value: function addParticleUpdater(name, initUpdater) {
            updatersInitializers.set(name, initUpdater);
          }
        }]);

        return Plugins;
      }();

      exports.Plugins = Plugins;
      /***/
    },

    /***/
    85214:
    /*!*************************************************!*\
      !*** ./node_modules/tsparticles/Utils/Point.js ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Point = void 0;

      var Point = function Point(position, particle) {
        _classCallCheck(this, Point);

        this.position = position;
        this.particle = particle;
      };

      exports.Point = Point;
      /***/
    },

    /***/
    65232:
    /*!****************************************************!*\
      !*** ./node_modules/tsparticles/Utils/QuadTree.js ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.QuadTree = void 0;

      var Rectangle_1 = __webpack_require__(
      /*! ./Rectangle */
      65461);

      var Circle_1 = __webpack_require__(
      /*! ./Circle */
      98559);

      var CircleWarp_1 = __webpack_require__(
      /*! ./CircleWarp */
      57626);

      var NumberUtils_1 = __webpack_require__(
      /*! ./NumberUtils */
      4836);

      var QuadTree = /*#__PURE__*/function () {
        function QuadTree(rectangle, capacity) {
          _classCallCheck(this, QuadTree);

          this.rectangle = rectangle;
          this.capacity = capacity;
          this.points = [];
          this.divided = false;
        }

        _createClass(QuadTree, [{
          key: "subdivide",
          value: function subdivide() {
            var x = this.rectangle.position.x;
            var y = this.rectangle.position.y;
            var w = this.rectangle.size.width;
            var h = this.rectangle.size.height;
            var capacity = this.capacity;
            this.northEast = new QuadTree(new Rectangle_1.Rectangle(x, y, w / 2, h / 2), capacity);
            this.northWest = new QuadTree(new Rectangle_1.Rectangle(x + w / 2, y, w / 2, h / 2), capacity);
            this.southEast = new QuadTree(new Rectangle_1.Rectangle(x, y + h / 2, w / 2, h / 2), capacity);
            this.southWest = new QuadTree(new Rectangle_1.Rectangle(x + w / 2, y + h / 2, w / 2, h / 2), capacity);
            this.divided = true;
          }
        }, {
          key: "insert",
          value: function insert(point) {
            var _a, _b, _c, _d, _e;

            if (!this.rectangle.contains(point.position)) {
              return false;
            }

            if (this.points.length < this.capacity) {
              this.points.push(point);
              return true;
            }

            if (!this.divided) {
              this.subdivide();
            }

            return (_e = ((_a = this.northEast) === null || _a === void 0 ? void 0 : _a.insert(point)) || ((_b = this.northWest) === null || _b === void 0 ? void 0 : _b.insert(point)) || ((_c = this.southEast) === null || _c === void 0 ? void 0 : _c.insert(point)) || ((_d = this.southWest) === null || _d === void 0 ? void 0 : _d.insert(point))) !== null && _e !== void 0 ? _e : false;
          }
        }, {
          key: "queryCircle",
          value: function queryCircle(position, radius) {
            return this.query(new Circle_1.Circle(position.x, position.y, radius));
          }
        }, {
          key: "queryCircleWarp",
          value: function queryCircleWarp(position, radius, containerOrSize) {
            var container = containerOrSize;
            var size = containerOrSize;
            return this.query(new CircleWarp_1.CircleWarp(position.x, position.y, radius, container.canvas !== undefined ? container.canvas.size : size));
          }
        }, {
          key: "queryRectangle",
          value: function queryRectangle(position, size) {
            return this.query(new Rectangle_1.Rectangle(position.x, position.y, size.width, size.height));
          }
        }, {
          key: "query",
          value: function query(range, found) {
            var _a, _b, _c, _d;

            var res = found !== null && found !== void 0 ? found : [];

            if (!range.intersects(this.rectangle)) {
              return [];
            } else {
              var _iterator87 = _createForOfIteratorHelper(this.points),
                  _step87;

              try {
                for (_iterator87.s(); !(_step87 = _iterator87.n()).done;) {
                  var p = _step87.value;

                  if (!range.contains(p.position) && (0, NumberUtils_1.getDistance)(range.position, p.position) > p.particle.getRadius()) {
                    continue;
                  }

                  res.push(p.particle);
                }
              } catch (err) {
                _iterator87.e(err);
              } finally {
                _iterator87.f();
              }

              if (this.divided) {
                (_a = this.northEast) === null || _a === void 0 ? void 0 : _a.query(range, res);
                (_b = this.northWest) === null || _b === void 0 ? void 0 : _b.query(range, res);
                (_c = this.southEast) === null || _c === void 0 ? void 0 : _c.query(range, res);
                (_d = this.southWest) === null || _d === void 0 ? void 0 : _d.query(range, res);
              }
            }

            return res;
          }
        }]);

        return QuadTree;
      }();

      exports.QuadTree = QuadTree;
      /***/
    },

    /***/
    70814:
    /*!*************************************************!*\
      !*** ./node_modules/tsparticles/Utils/Range.js ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Range = void 0;

      var Range = function Range(x, y) {
        _classCallCheck(this, Range);

        this.position = {
          x: x,
          y: y
        };
      };

      exports.Range = Range;
      /***/
    },

    /***/
    65461:
    /*!*****************************************************!*\
      !*** ./node_modules/tsparticles/Utils/Rectangle.js ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Rectangle = void 0;

      var Range_1 = __webpack_require__(
      /*! ./Range */
      70814);

      var Rectangle = /*#__PURE__*/function (_Range_1$Range2) {
        _inherits(Rectangle, _Range_1$Range2);

        var _super38 = _createSuper(Rectangle);

        function Rectangle(x, y, width, height) {
          var _this51;

          _classCallCheck(this, Rectangle);

          _this51 = _super38.call(this, x, y);
          _this51.size = {
            height: height,
            width: width
          };
          return _this51;
        }

        _createClass(Rectangle, [{
          key: "contains",
          value: function contains(point) {
            var w = this.size.width;
            var h = this.size.height;
            var pos = this.position;
            return point.x >= pos.x && point.x <= pos.x + w && point.y >= pos.y && point.y <= pos.y + h;
          }
        }, {
          key: "intersects",
          value: function intersects(range) {
            var rect = range;
            var circle = range;
            var w = this.size.width;
            var h = this.size.height;
            var pos1 = this.position;
            var pos2 = range.position;

            if (circle.radius !== undefined) {
              return circle.intersects(this);
            } else if (rect.size !== undefined) {
              var size2 = rect.size;
              var w2 = size2.width;
              var h2 = size2.height;
              return pos2.x < pos1.x + w && pos2.x + w2 > pos1.x && pos2.y < pos1.y + h && pos2.y + h2 > pos1.y;
            }

            return false;
          }
        }]);

        return Rectangle;
      }(Range_1.Range);

      exports.Rectangle = Rectangle;
      /***/
    },

    /***/
    99010:
    /*!*************************************************!*\
      !*** ./node_modules/tsparticles/Utils/Utils.js ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.rectBounce = exports.circleBounce = exports.circleBounceDataFromParticle = exports.divMode = exports.singleDivModeExecute = exports.divModeExecute = exports.isDivModeEnabled = exports.deepExtend = exports.calculateBounds = exports.areBoundsInside = exports.isPointInside = exports.itemFromArray = exports.arrayRandomIndex = exports.loadFont = exports.isInArray = exports.cancelAnimation = exports.animate = exports.isSsr = void 0;

      var Enums_1 = __webpack_require__(
      /*! ../Enums */
      39666);

      var NumberUtils_1 = __webpack_require__(
      /*! ./NumberUtils */
      4836);

      var Vector_1 = __webpack_require__(
      /*! ../Core/Particle/Vector */
      27440);

      function rectSideBounce(pSide, pOtherSide, rectSide, rectOtherSide, velocity, factor) {
        var res = {
          bounced: false
        };

        if (pOtherSide.min >= rectOtherSide.min && pOtherSide.min <= rectOtherSide.max && pOtherSide.max >= rectOtherSide.min && pOtherSide.max <= rectOtherSide.max) {
          if (pSide.max >= rectSide.min && pSide.max <= (rectSide.max + rectSide.min) / 2 && velocity > 0 || pSide.min <= rectSide.max && pSide.min > (rectSide.max + rectSide.min) / 2 && velocity < 0) {
            res.velocity = velocity * -factor;
            res.bounced = true;
          }
        }

        return res;
      }

      function checkSelector(element, selectors) {
        if (selectors instanceof Array) {
          var _iterator88 = _createForOfIteratorHelper(selectors),
              _step88;

          try {
            for (_iterator88.s(); !(_step88 = _iterator88.n()).done;) {
              var selector = _step88.value;

              if (element.matches(selector)) {
                return true;
              }
            }
          } catch (err) {
            _iterator88.e(err);
          } finally {
            _iterator88.f();
          }

          return false;
        } else {
          return element.matches(selectors);
        }
      }

      function isSsr() {
        return typeof window === "undefined" || !window;
      }

      exports.isSsr = isSsr;

      function animate() {
        return isSsr() ? function (callback) {
          return setTimeout(callback);
        } : function (callback) {
          return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || window.setTimeout)(callback);
        };
      }

      exports.animate = animate;

      function cancelAnimation() {
        return isSsr() ? function (handle) {
          return clearTimeout(handle);
        } : function (handle) {
          return (window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || window.clearTimeout)(handle);
        };
      }

      exports.cancelAnimation = cancelAnimation;

      function isInArray(value, array) {
        return value === array || array instanceof Array && array.indexOf(value) > -1;
      }

      exports.isInArray = isInArray;

      function loadFont(_x28) {
        return _loadFont.apply(this, arguments);
      }

      function _loadFont() {
        _loadFont = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(character) {
          var _a, _b;

          return regeneratorRuntime.wrap(function _callee18$(_context18) {
            while (1) {
              switch (_context18.prev = _context18.next) {
                case 0:
                  _context18.prev = 0;
                  _context18.next = 3;
                  return document.fonts.load("".concat((_a = character.weight) !== null && _a !== void 0 ? _a : "400", " 36px '").concat((_b = character.font) !== null && _b !== void 0 ? _b : "Verdana", "'"));

                case 3:
                  _context18.next = 7;
                  break;

                case 5:
                  _context18.prev = 5;
                  _context18.t0 = _context18["catch"](0);

                case 7:
                case "end":
                  return _context18.stop();
              }
            }
          }, _callee18, null, [[0, 5]]);
        }));
        return _loadFont.apply(this, arguments);
      }

      exports.loadFont = loadFont;

      function arrayRandomIndex(array) {
        return Math.floor(Math.random() * array.length);
      }

      exports.arrayRandomIndex = arrayRandomIndex;

      function itemFromArray(array, index) {
        var useIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        var fixedIndex = index !== undefined && useIndex ? index % array.length : arrayRandomIndex(array);
        return array[fixedIndex];
      }

      exports.itemFromArray = itemFromArray;

      function isPointInside(point, size, radius, direction) {
        return areBoundsInside(calculateBounds(point, radius !== null && radius !== void 0 ? radius : 0), size, direction);
      }

      exports.isPointInside = isPointInside;

      function areBoundsInside(bounds, size, direction) {
        var inside = true;

        if (!direction || direction === Enums_1.OutModeDirection.bottom) {
          inside = bounds.top < size.height;
        }

        if (inside && (!direction || direction === Enums_1.OutModeDirection.left)) {
          inside = bounds.right > 0;
        }

        if (inside && (!direction || direction === Enums_1.OutModeDirection.right)) {
          inside = bounds.left < size.width;
        }

        if (inside && (!direction || direction === Enums_1.OutModeDirection.top)) {
          inside = bounds.bottom > 0;
        }

        return inside;
      }

      exports.areBoundsInside = areBoundsInside;

      function calculateBounds(point, radius) {
        return {
          bottom: point.y + radius,
          left: point.x - radius,
          right: point.x + radius,
          top: point.y - radius
        };
      }

      exports.calculateBounds = calculateBounds;

      function deepExtend(destination) {
        for (var _len2 = arguments.length, sources = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          sources[_key2 - 1] = arguments[_key2];
        }

        for (var _i5 = 0, _sources = sources; _i5 < _sources.length; _i5++) {
          var source = _sources[_i5];

          if (source === undefined || source === null) {
            continue;
          }

          if (typeof source !== "object") {
            destination = source;
            continue;
          }

          var sourceIsArray = Array.isArray(source);

          if (sourceIsArray && (typeof destination !== "object" || !destination || !Array.isArray(destination))) {
            destination = [];
          } else if (!sourceIsArray && (typeof destination !== "object" || !destination || Array.isArray(destination))) {
            destination = {};
          }

          var _loop3 = function _loop3(key) {
            if (key === "__proto__") {
              return "continue";
            }

            var sourceDict = source;
            var value = sourceDict[key];
            var isObject = typeof value === "object";
            var destDict = destination;
            destDict[key] = isObject && Array.isArray(value) ? value.map(function (v) {
              return deepExtend(destDict[key], v);
            }) : deepExtend(destDict[key], value);
          };

          for (var key in source) {
            var _ret2 = _loop3(key);

            if (_ret2 === "continue") continue;
          }
        }

        return destination;
      }

      exports.deepExtend = deepExtend;

      function isDivModeEnabled(mode, divs) {
        return divs instanceof Array ? !!divs.find(function (t) {
          return t.enable && isInArray(mode, t.mode);
        }) : isInArray(mode, divs.mode);
      }

      exports.isDivModeEnabled = isDivModeEnabled;

      function divModeExecute(mode, divs, callback) {
        if (divs instanceof Array) {
          var _iterator89 = _createForOfIteratorHelper(divs),
              _step89;

          try {
            for (_iterator89.s(); !(_step89 = _iterator89.n()).done;) {
              var div = _step89.value;
              var _divMode = div.mode;
              var divEnabled = div.enable;

              if (divEnabled && isInArray(mode, _divMode)) {
                singleDivModeExecute(div, callback);
              }
            }
          } catch (err) {
            _iterator89.e(err);
          } finally {
            _iterator89.f();
          }
        } else {
          var _divMode2 = divs.mode;
          var _divEnabled = divs.enable;

          if (_divEnabled && isInArray(mode, _divMode2)) {
            singleDivModeExecute(divs, callback);
          }
        }
      }

      exports.divModeExecute = divModeExecute;

      function singleDivModeExecute(div, callback) {
        var selectors = div.selectors;

        if (selectors instanceof Array) {
          var _iterator90 = _createForOfIteratorHelper(selectors),
              _step90;

          try {
            for (_iterator90.s(); !(_step90 = _iterator90.n()).done;) {
              var selector = _step90.value;
              callback(selector, div);
            }
          } catch (err) {
            _iterator90.e(err);
          } finally {
            _iterator90.f();
          }
        } else {
          callback(selectors, div);
        }
      }

      exports.singleDivModeExecute = singleDivModeExecute;

      function divMode(divs, element) {
        if (!element || !divs) {
          return;
        }

        if (divs instanceof Array) {
          return divs.find(function (d) {
            return checkSelector(element, d.selectors);
          });
        } else if (checkSelector(element, divs.selectors)) {
          return divs;
        }
      }

      exports.divMode = divMode;

      function circleBounceDataFromParticle(p) {
        return {
          position: p.getPosition(),
          radius: p.getRadius(),
          mass: p.getMass(),
          velocity: p.velocity,
          factor: Vector_1.Vector.create((0, NumberUtils_1.getValue)(p.options.bounce.horizontal), (0, NumberUtils_1.getValue)(p.options.bounce.vertical))
        };
      }

      exports.circleBounceDataFromParticle = circleBounceDataFromParticle;

      function circleBounce(p1, p2) {
        var xVelocityDiff = p1.velocity.x;
        var yVelocityDiff = p1.velocity.y;
        var pos1 = p1.position;
        var pos2 = p2.position;
        var xDist = pos2.x - pos1.x;
        var yDist = pos2.y - pos1.y;

        if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
          var angle = -Math.atan2(pos2.y - pos1.y, pos2.x - pos1.x);
          var m1 = p1.mass;
          var m2 = p2.mass;
          var u1 = p1.velocity.rotate(angle);
          var u2 = p2.velocity.rotate(angle);
          var v1 = (0, NumberUtils_1.collisionVelocity)(u1, u2, m1, m2);
          var v2 = (0, NumberUtils_1.collisionVelocity)(u2, u1, m1, m2);
          var vFinal1 = v1.rotate(-angle);
          var vFinal2 = v2.rotate(-angle);
          p1.velocity.x = vFinal1.x * p1.factor.x;
          p1.velocity.y = vFinal1.y * p1.factor.y;
          p2.velocity.x = vFinal2.x * p2.factor.x;
          p2.velocity.y = vFinal2.y * p2.factor.y;
        }
      }

      exports.circleBounce = circleBounce;

      function rectBounce(particle, divBounds) {
        var pPos = particle.getPosition();
        var size = particle.getRadius();
        var bounds = calculateBounds(pPos, size);
        var resH = rectSideBounce({
          min: bounds.left,
          max: bounds.right
        }, {
          min: bounds.top,
          max: bounds.bottom
        }, {
          min: divBounds.left,
          max: divBounds.right
        }, {
          min: divBounds.top,
          max: divBounds.bottom
        }, particle.velocity.x, (0, NumberUtils_1.getValue)(particle.options.bounce.horizontal));

        if (resH.bounced) {
          if (resH.velocity !== undefined) {
            particle.velocity.x = resH.velocity;
          }

          if (resH.position !== undefined) {
            particle.position.x = resH.position;
          }
        }

        var resV = rectSideBounce({
          min: bounds.top,
          max: bounds.bottom
        }, {
          min: bounds.left,
          max: bounds.right
        }, {
          min: divBounds.top,
          max: divBounds.bottom
        }, {
          min: divBounds.left,
          max: divBounds.right
        }, particle.velocity.y, (0, NumberUtils_1.getValue)(particle.options.bounce.vertical));

        if (resV.bounced) {
          if (resV.velocity !== undefined) {
            particle.velocity.y = resV.velocity;
          }

          if (resV.position !== undefined) {
            particle.position.y = resV.position;
          }
        }
      }

      exports.rectBounce = rectBounce;
      /***/
    },

    /***/
    18942:
    /*!*************************************************!*\
      !*** ./node_modules/tsparticles/Utils/index.js ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function get() {
            return m[k];
          }
        });
      } : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });

      var __exportStar = this && this.__exportStar || function (m, exports) {
        for (var p in m) {
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
        }
      };

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __exportStar(__webpack_require__(
      /*! ./CanvasUtils */
      8063), exports);

      __exportStar(__webpack_require__(
      /*! ./Circle */
      98559), exports);

      __exportStar(__webpack_require__(
      /*! ./CircleWarp */
      57626), exports);

      __exportStar(__webpack_require__(
      /*! ./ColorUtils */
      26523), exports);

      __exportStar(__webpack_require__(
      /*! ./Constants */
      73525), exports);

      __exportStar(__webpack_require__(
      /*! ./EventListeners */
      45310), exports);

      __exportStar(__webpack_require__(
      /*! ./NumberUtils */
      4836), exports);

      __exportStar(__webpack_require__(
      /*! ./Plugins */
      33160), exports);

      __exportStar(__webpack_require__(
      /*! ./Point */
      85214), exports);

      __exportStar(__webpack_require__(
      /*! ./QuadTree */
      65232), exports);

      __exportStar(__webpack_require__(
      /*! ./Range */
      70814), exports);

      __exportStar(__webpack_require__(
      /*! ./Rectangle */
      65461), exports);

      __exportStar(__webpack_require__(
      /*! ./Utils */
      99010), exports);
      /***/

    },

    /***/
    59163:
    /*!******************************************!*\
      !*** ./node_modules/tsparticles/full.js ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.loadFull = void 0;

      var plugin_1 = __webpack_require__(
      /*! ./Plugins/Absorbers/plugin */
      35150);

      var plugin_2 = __webpack_require__(
      /*! ./Plugins/Emitters/plugin */
      92696);

      var plugin_3 = __webpack_require__(
      /*! ./Plugins/PolygonMask/plugin */
      1524);

      var slim_1 = __webpack_require__(
      /*! ./slim */
      64063);

      function loadFull(tsParticles) {
        (0, slim_1.loadSlim)(tsParticles);
        (0, plugin_1.loadAbsorbersPlugin)(tsParticles);
        (0, plugin_2.loadEmittersPlugin)(tsParticles);
        (0, plugin_3.loadPolygonMaskPlugin)(tsParticles);
      }

      exports.loadFull = loadFull;
      /***/
    },

    /***/
    88425:
    /*!*******************************************!*\
      !*** ./node_modules/tsparticles/index.js ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function get() {
            return m[k];
          }
        });
      } : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });

      var __exportStar = this && this.__exportStar || function (m, exports) {
        for (var p in m) {
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
        }
      };

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.tsParticles = exports.pJSDom = exports.particlesJS = exports.loadFull = exports.Main = exports.Rectangle = exports.Point = exports.Constants = exports.CircleWarp = exports.Circle = void 0;

      var pjs_1 = __webpack_require__(
      /*! ./pjs */
      29427);

      var main_1 = __webpack_require__(
      /*! ./main */
      27533);

      Object.defineProperty(exports, "Main", {
        enumerable: true,
        get: function get() {
          return main_1.Main;
        }
      });

      var Utils_1 = __webpack_require__(
      /*! ./Utils */
      18942);

      Object.defineProperty(exports, "Circle", {
        enumerable: true,
        get: function get() {
          return Utils_1.Circle;
        }
      });
      Object.defineProperty(exports, "CircleWarp", {
        enumerable: true,
        get: function get() {
          return Utils_1.CircleWarp;
        }
      });
      Object.defineProperty(exports, "Constants", {
        enumerable: true,
        get: function get() {
          return Utils_1.Constants;
        }
      });
      Object.defineProperty(exports, "Point", {
        enumerable: true,
        get: function get() {
          return Utils_1.Point;
        }
      });
      Object.defineProperty(exports, "Rectangle", {
        enumerable: true,
        get: function get() {
          return Utils_1.Rectangle;
        }
      });

      var full_1 = __webpack_require__(
      /*! ./full */
      59163);

      Object.defineProperty(exports, "loadFull", {
        enumerable: true,
        get: function get() {
          return full_1.loadFull;
        }
      });
      var tsParticles = new main_1.Main();
      exports.tsParticles = tsParticles;
      tsParticles.init();
      (0, full_1.loadFull)(tsParticles);

      var _ref18 = (0, pjs_1.initPjs)(tsParticles),
          particlesJS = _ref18.particlesJS,
          pJSDom = _ref18.pJSDom;

      exports.particlesJS = particlesJS;
      exports.pJSDom = pJSDom;

      __exportStar(__webpack_require__(
      /*! ./Core/Particle/Vector */
      27440), exports);

      __exportStar(__webpack_require__(
      /*! ./Core/Container */
      48894), exports);

      __exportStar(__webpack_require__(
      /*! ./Enums */
      39666), exports);

      __exportStar(__webpack_require__(
      /*! ./Plugins/Absorbers/Enums */
      23626), exports);

      __exportStar(__webpack_require__(
      /*! ./Plugins/Emitters/Enums */
      52405), exports);

      __exportStar(__webpack_require__(
      /*! ./Plugins/PolygonMask/Enums */
      65515), exports);

      __exportStar(__webpack_require__(
      /*! ./Utils/CanvasUtils */
      8063), exports);

      __exportStar(__webpack_require__(
      /*! ./Utils/ColorUtils */
      26523), exports);

      __exportStar(__webpack_require__(
      /*! ./Utils/NumberUtils */
      4836), exports);

      __exportStar(__webpack_require__(
      /*! ./Utils/Utils */
      99010), exports);

      __exportStar(__webpack_require__(
      /*! ./Types */
      98962), exports);

      __exportStar(__webpack_require__(
      /*! ./Core/Interfaces */
      71835), exports);

      __exportStar(__webpack_require__(
      /*! ./Core/Particle */
      37563), exports);

      __exportStar(__webpack_require__(
      /*! ./Core/ExternalInteractorBase */
      11377), exports);

      __exportStar(__webpack_require__(
      /*! ./Core/ParticlesInteractorBase */
      77077), exports);
      /***/

    },

    /***/
    27533:
    /*!******************************************!*\
      !*** ./node_modules/tsparticles/main.js ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      var __classPrivateFieldSet = this && this.__classPrivateFieldSet || function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
      };

      var __classPrivateFieldGet = this && this.__classPrivateFieldGet || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      };

      var _Main_initialized;

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Main = void 0;

      var Utils_1 = __webpack_require__(
      /*! ./Utils */
      18942);

      var Loader_1 = __webpack_require__(
      /*! ./Core/Loader */
      7372);

      var Main = /*#__PURE__*/function () {
        function Main() {
          _classCallCheck(this, Main);

          _Main_initialized.set(this, void 0);

          __classPrivateFieldSet(this, _Main_initialized, false, "f");
        }

        _createClass(Main, [{
          key: "init",
          value: function init() {
            if (!__classPrivateFieldGet(this, _Main_initialized, "f")) {
              __classPrivateFieldSet(this, _Main_initialized, true, "f");
            }
          }
        }, {
          key: "loadFromArray",
          value: function () {
            var _loadFromArray = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(tagId, options, index) {
              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      return _context19.abrupt("return", Loader_1.Loader.load(tagId, options, index));

                    case 1:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19);
            }));

            function loadFromArray(_x29, _x30, _x31) {
              return _loadFromArray.apply(this, arguments);
            }

            return loadFromArray;
          }()
        }, {
          key: "load",
          value: function () {
            var _load2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(tagId, options) {
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      return _context20.abrupt("return", Loader_1.Loader.load(tagId, options));

                    case 1:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20);
            }));

            function load(_x32, _x33) {
              return _load2.apply(this, arguments);
            }

            return load;
          }()
        }, {
          key: "set",
          value: function () {
            var _set2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21(id, element, options) {
              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      return _context21.abrupt("return", Loader_1.Loader.set(id, element, options));

                    case 1:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21);
            }));

            function set(_x34, _x35, _x36) {
              return _set2.apply(this, arguments);
            }

            return set;
          }()
        }, {
          key: "loadJSON",
          value: function loadJSON(tagId, pathConfigJson, index) {
            return Loader_1.Loader.loadJSON(tagId, pathConfigJson, index);
          }
        }, {
          key: "setJSON",
          value: function () {
            var _setJSON2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22(id, element, pathConfigJson, index) {
              return regeneratorRuntime.wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      return _context22.abrupt("return", Loader_1.Loader.setJSON(id, element, pathConfigJson, index));

                    case 1:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22);
            }));

            function setJSON(_x37, _x38, _x39, _x40) {
              return _setJSON2.apply(this, arguments);
            }

            return setJSON;
          }()
        }, {
          key: "setOnClickHandler",
          value: function setOnClickHandler(callback) {
            Loader_1.Loader.setOnClickHandler(callback);
          }
        }, {
          key: "dom",
          value: function dom() {
            return Loader_1.Loader.dom();
          }
        }, {
          key: "domItem",
          value: function domItem(index) {
            return Loader_1.Loader.domItem(index);
          }
        }, {
          key: "addShape",
          value: function addShape(shape, drawer, init, afterEffect, destroy) {
            var customDrawer;

            if (typeof drawer === "function") {
              customDrawer = {
                afterEffect: afterEffect,
                destroy: destroy,
                draw: drawer,
                init: init
              };
            } else {
              customDrawer = drawer;
            }

            Utils_1.Plugins.addShapeDrawer(shape, customDrawer);
          }
        }, {
          key: "addPreset",
          value: function addPreset(preset, options) {
            var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            Utils_1.Plugins.addPreset(preset, options, override);
          }
        }, {
          key: "addPlugin",
          value: function addPlugin(plugin) {
            Utils_1.Plugins.addPlugin(plugin);
          }
        }, {
          key: "addPathGenerator",
          value: function addPathGenerator(name, generator) {
            Utils_1.Plugins.addPathGenerator(name, generator);
          }
        }, {
          key: "addInteractor",
          value: function addInteractor(name, interactorInitializer) {
            Utils_1.Plugins.addInteractor(name, interactorInitializer);
          }
        }, {
          key: "addParticleUpdater",
          value: function addParticleUpdater(name, updaterInitializer) {
            Utils_1.Plugins.addParticleUpdater(name, updaterInitializer);
          }
        }]);

        return Main;
      }();

      exports.Main = Main;
      _Main_initialized = new WeakMap();
      /***/
    },

    /***/
    29427:
    /*!*****************************************!*\
      !*** ./node_modules/tsparticles/pjs.js ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.initPjs = void 0;

      var initPjs = function initPjs(main) {
        var particlesJS = function particlesJS(tagId, options) {
          return main.load(tagId, options);
        };

        particlesJS.load = function (tagId, pathConfigJson, callback) {
          main.loadJSON(tagId, pathConfigJson).then(function (container) {
            if (container) {
              callback(container);
            }
          })["catch"](function () {
            callback(undefined);
          });
        };

        particlesJS.setOnClickHandler = function (callback) {
          main.setOnClickHandler(callback);
        };

        var pJSDom = main.dom();
        return {
          particlesJS: particlesJS,
          pJSDom: pJSDom
        };
      };

      exports.initPjs = initPjs;
      /***/
    },

    /***/
    64063:
    /*!******************************************!*\
      !*** ./node_modules/tsparticles/slim.js ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.loadSlim = void 0;

      var Circle_1 = __webpack_require__(
      /*! ./Shapes/Circle */
      95934);

      var Image_1 = __webpack_require__(
      /*! ./Shapes/Image */
      61998);

      var Line_1 = __webpack_require__(
      /*! ./Shapes/Line */
      36320);

      var Polygon_1 = __webpack_require__(
      /*! ./Shapes/Polygon */
      1815);

      var Square_1 = __webpack_require__(
      /*! ./Shapes/Square */
      22962);

      var Star_1 = __webpack_require__(
      /*! ./Shapes/Star */
      74004);

      var Text_1 = __webpack_require__(
      /*! ./Shapes/Text */
      38595);

      var Angle_1 = __webpack_require__(
      /*! ./Updaters/Angle */
      74696);

      var Color_1 = __webpack_require__(
      /*! ./Updaters/Color */
      42504);

      var Life_1 = __webpack_require__(
      /*! ./Updaters/Life */
      32373);

      var Opacity_1 = __webpack_require__(
      /*! ./Updaters/Opacity */
      21881);

      var Size_1 = __webpack_require__(
      /*! ./Updaters/Size */
      75983);

      var StrokeColor_1 = __webpack_require__(
      /*! ./Updaters/StrokeColor */
      81916);

      var OutModes_1 = __webpack_require__(
      /*! ./Updaters/OutModes */
      35545);

      var Roll_1 = __webpack_require__(
      /*! ./Updaters/Roll */
      29361);

      var Tilt_1 = __webpack_require__(
      /*! ./Updaters/Tilt */
      25224);

      var Wobble_1 = __webpack_require__(
      /*! ./Updaters/Wobble */
      44782);

      var Attract_1 = __webpack_require__(
      /*! ./Interactions/External/Attract */
      26113);

      var Bounce_1 = __webpack_require__(
      /*! ./Interactions/External/Bounce */
      84943);

      var Bubble_1 = __webpack_require__(
      /*! ./Interactions/External/Bubble */
      8714);

      var Connect_1 = __webpack_require__(
      /*! ./Interactions/External/Connect */
      17294);

      var Grab_1 = __webpack_require__(
      /*! ./Interactions/External/Grab */
      39169);

      var Repulse_1 = __webpack_require__(
      /*! ./Interactions/External/Repulse */
      90974);

      var Trail_1 = __webpack_require__(
      /*! ./Interactions/External/Trail */
      84738);

      var Attract_2 = __webpack_require__(
      /*! ./Interactions/Particles/Attract */
      61823);

      var Collisions_1 = __webpack_require__(
      /*! ./Interactions/Particles/Collisions */
      66840);

      var Links_1 = __webpack_require__(
      /*! ./Interactions/Particles/Links */
      17468);

      function loadSlim(tsParticles) {
        (0, Attract_1.loadExternalAttractInteraction)(tsParticles);
        (0, Bounce_1.loadExternalBounceInteraction)(tsParticles);
        (0, Bubble_1.loadExternalBubbleInteraction)(tsParticles);
        (0, Connect_1.loadExternalConnectInteraction)(tsParticles);
        (0, Grab_1.loadExternalGrabInteraction)(tsParticles);
        (0, Repulse_1.loadExternalRepulseInteraction)(tsParticles);
        (0, Trail_1.loadExternalTrailInteraction)(tsParticles);
        (0, Attract_2.loadParticlesAttractInteraction)(tsParticles);
        (0, Collisions_1.loadParticlesCollisionsInteraction)(tsParticles);
        (0, Links_1.loadParticlesLinksInteraction)(tsParticles);
        (0, Circle_1.loadCircleShape)(tsParticles);
        (0, Image_1.loadImageShape)(tsParticles);
        (0, Line_1.loadLineShape)(tsParticles);
        (0, Polygon_1.loadPolygonShape)(tsParticles);
        (0, Square_1.loadSquareShape)(tsParticles);
        (0, Star_1.loadStarShape)(tsParticles);
        (0, Text_1.loadTextShape)(tsParticles);
        (0, Life_1.loadLifeUpdater)(tsParticles);
        (0, Opacity_1.loadOpacityUpdater)(tsParticles);
        (0, Size_1.loadSizeUpdater)(tsParticles);
        (0, Angle_1.loadAngleUpdater)(tsParticles);
        (0, Tilt_1.loadTiltUpdater)(tsParticles);
        (0, Roll_1.loadRollUpdater)(tsParticles);
        (0, Wobble_1.loadWobbleUpdater)(tsParticles);
        (0, Color_1.loadColorUpdater)(tsParticles);
        (0, StrokeColor_1.loadStrokeColorUpdater)(tsParticles);
        (0, OutModes_1.loadOutModesUpdater)(tsParticles);
      }

      exports.loadSlim = loadSlim;
      /***/
    },

    /***/
    34742:
    /*!***************************************************!*\
      !*** ./src/app/account/account-routing.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AccountRoutingModule": function AccountRoutingModule() {
          return (
            /* binding */
            _AccountRoutingModule
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
        path: 'auth',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,
          /*! ./auth/auth.module */
          55758)).then(function (m) {
            return m.AuthModule;
          });
        }
      }];

      var _AccountRoutingModule = function _AccountRoutingModule() {
        _classCallCheck(this, _AccountRoutingModule);
      };

      _AccountRoutingModule.ɵfac = function AccountRoutingModule_Factory(t) {
        return new (t || _AccountRoutingModule)();
      };

      _AccountRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _AccountRoutingModule
      });
      _AccountRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_AccountRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    63879:
    /*!*******************************************!*\
      !*** ./src/app/account/account.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AccountModule": function AccountModule() {
          return (
            /* binding */
            _AccountModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _account_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./account-routing.module */
      34742);
      /* harmony import */


      var _auth_auth_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth/auth.module */
      55758);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _AccountModule = function _AccountModule() {
        _classCallCheck(this, _AccountModule);
      };

      _AccountModule.ɵfac = function AccountModule_Factory(t) {
        return new (t || _AccountModule)();
      };

      _AccountModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _AccountModule
      });
      _AccountModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _account_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountRoutingModule, _auth_auth_module__WEBPACK_IMPORTED_MODULE_1__.AuthModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_AccountModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _account_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountRoutingModule, _auth_auth_module__WEBPACK_IMPORTED_MODULE_1__.AuthModule]
        });
      })();
      /***/

    },

    /***/
    60521:
    /*!**********************************************!*\
      !*** ./src/app/account/auth/auth-routing.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthRoutingModule": function AuthRoutingModule() {
          return (
            /* binding */
            _AuthRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login/login.component */
      8462);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
      }];

      var _AuthRoutingModule = function _AuthRoutingModule() {
        _classCallCheck(this, _AuthRoutingModule);
      };

      _AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) {
        return new (t || _AuthRoutingModule)();
      };

      _AuthRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _AuthRoutingModule
      });
      _AuthRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_AuthRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    55758:
    /*!*********************************************!*\
      !*** ./src/app/account/auth/auth.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthModule": function AuthModule() {
          return (
            /* binding */
            _AuthModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-owl-carousel-o */
      5668);
      /* harmony import */


      var _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shared/ui/ui.module */
      19668);
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login/login.component */
      8462);
      /* harmony import */


      var _auth_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth-routing */
      60521);
      /* harmony import */


      var ng_particles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-particles */
      78439);
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-cookie-service */
      31584);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _AuthModule = function _AuthModule() {
        _classCallCheck(this, _AuthModule);
      };

      _AuthModule.ɵfac = function AuthModule_Factory(t) {
        return new (t || _AuthModule)();
      };

      _AuthModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _AuthModule
      });
      _AuthModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__.CookieService],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbAlertModule, _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule, _auth_routing__WEBPACK_IMPORTED_MODULE_2__.AuthRoutingModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__.CarouselModule, ng_particles__WEBPACK_IMPORTED_MODULE_9__.NgParticlesModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_AuthModule, {
          declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbAlertModule, _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule, _auth_routing__WEBPACK_IMPORTED_MODULE_2__.AuthRoutingModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__.CarouselModule, ng_particles__WEBPACK_IMPORTED_MODULE_9__.NgParticlesModule]
        });
      })();
      /***/

    },

    /***/
    8462:
    /*!*******************************************************!*\
      !*** ./src/app/account/auth/login/login.component.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginComponent": function LoginComponent() {
          return (
            /* binding */
            _LoginComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_core_services_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/core/services/storage.service */
      22323);
      /* harmony import */


      var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../core/services/auth.service */
      90263);
      /* harmony import */


      var ng_particles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-particles */
      78439);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);

      function LoginComponent_ngb_alert_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-alert", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dismissible", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.error);
        }
      }

      function LoginComponent_div_24_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Vui l\xF2ng nh\u1EADp code");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LoginComponent_div_24_div_1_Template, 2, 0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.f.code.errors.required);
        }
      }

      function LoginComponent_div_30_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Vui l\xF2ng nh\u1EADp m\u1EADt kh\u1EA9u");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LoginComponent_div_30_span_1_Template, 2, 0, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.f.password.errors.required);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };
      /**
       * Login component
       */


      var _LoginComponent = /*#__PURE__*/function () {
        // tslint:disable-next-line: max-line-length
        function _LoginComponent(formBuilder, route, router, storeService, authenticationService) {
          _classCallCheck(this, _LoginComponent);

          this.formBuilder = formBuilder;
          this.route = route;
          this.router = router;
          this.storeService = storeService;
          this.authenticationService = authenticationService;
          this.title = 'CodeSandbox';
          this.options = {
            background: {
              color: {
                value: '#0d47a1'
              }
            },
            fpsLimit: 60,
            interactivity: {
              detectsOn: 'canvas',
              events: {
                onClick: {
                  enable: true,
                  mode: 'push'
                },
                onHover: {
                  enable: true,
                  mode: 'repulse'
                },
                resize: true
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40
                },
                push: {
                  quantity: 4
                },
                repulse: {
                  distance: 200,
                  duration: 0.4
                }
              }
            },
            particles: {
              color: {
                value: '#ffffff'
              },
              links: {
                color: '#ffffff',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1
              },
              collisions: {
                enable: true
              },
              move: {
                direction: 'none',
                enable: true,
                outMode: 'bounce',
                random: false,
                speed: 6,
                straight: false
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800
                },
                value: 80
              },
              opacity: {
                value: 0.5
              },
              shape: {
                type: 'circle'
              },
              size: {
                random: true,
                value: 5
              }
            },
            detectRetina: true
          };
          this.submitted = false;
          this.error = ''; // set the currenr year

          this.year = new Date().getFullYear();
        }

        _createClass(_LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loginForm = this.formBuilder.group({
              code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
            }); // reset login status
            // this.authenticationService.logout();
            // get return url from route parameters or default to '/'
            // tslint:disable-next-line: no-string-literal

            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          } // convenience getter for easy access to form fields

        }, {
          key: "f",
          get: function get() {
            return this.loginForm.controls;
          }
          /**
           * Form submit
           */

        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this52 = this;

            this.submitted = true; // stop here if form is invalid

            if (this.loginForm.invalid) {
              return;
            } else {
              var userInfo = {
                username: this.f.code.value,
                password: this.f.password.value
              }; // if (this.f.code.value === 'admin' && this.f.password.value === 'admin') {
              //   this.router.navigate(['/']);
              // }

              this.authenticationService.login(userInfo).subscribe(function (user) {
                _this52.errorResponse = '';

                _this52.storeService.setUserData(user.data);

                if (_this52.authenticationService.returnUrl) {
                  _this52.router.navigate([_this52.authenticationService.returnUrl.url], {
                    queryParams: _this52.authenticationService.returnUrl.queryParams
                  });
                } else {
                  _this52.router.navigate(['/']);
                }
              }, function () {
                _this52.onUserSigninError();
              });
            }
          }
        }, {
          key: "onUserSigninError",
          value: function onUserSigninError() {
            this.errorResponse = 'Tài khoản hoặc mật khẩu không chính xác';
          }
        }]);

        return _LoginComponent;
      }();

      _LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || _LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_storage_service__WEBPACK_IMPORTED_MODULE_0__.StoreService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService));
      };

      _LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _LoginComponent,
        selectors: [["app-login"]],
        decls: 41,
        vars: 13,
        consts: [["id", "tsparticles", 3, "options"], [1, "account-pages", "p-6"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-lg-6", "col-xl-5"], [1, "card", "overflow-hidden"], [1, "bg-soft", "bg-primary"], [1, "row"], [1, "col-7"], [1, "text-primary", "p-4"], [1, "text-primary"], [1, "col-5", "align-self-end"], ["src", "assets/images/profile-img.png", "alt", "", 1, "img-fluid"], [1, "card-body", "pt-0"], [1, "p-2"], [1, "form-horizontal", 3, "formGroup", "ngSubmit"], ["type", "danger", 3, "dismissible", 4, "ngIf"], [1, "mb-3"], ["for", "code"], ["type", "text", "formControlName", "code", "placeholder", "Code", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "password"], [1, "input-group", "auth-pass-inputgroup"], ["type", "password", "formControlName", "password", "placeholder", "Enter password", "aria-label", "Password", "aria-describedby", "password-addon", 1, "form-control", 3, "ngClass"], [2, "color", "red"], [1, "mt-3", "d-grid"], ["type", "submit", 1, "btn", "btn-primary"], [1, "mt-5", "text-center"], [2, "color", "white"], [1, "mdi", "mdi-heart", "text-danger"], ["type", "danger", 3, "dismissible"], [1, "invalid-feedback"], [4, "ngIf"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "Particles", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h5", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Welcome Back !");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Sign in to Manpower System.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "form", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_18_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, LoginComponent_ngb_alert_19_Template, 2, 2, "ngb-alert", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "label", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, LoginComponent_div_24_Template, 2, 1, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, LoginComponent_div_30_Template, 2, 1, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "p", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Log In");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "p", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "i", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " by Hach dep trai ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.options);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.error);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c0, ctx.submitted && ctx.f.code.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.code.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c0, ctx.submitted && ctx.f.password.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.errorResponse);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\xA9 ", ctx.year, " Crafted with ");
          }
        },
        directives: [ng_particles__WEBPACK_IMPORTED_MODULE_5__.ParticlesComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbAlert],
        styles: [".p-6[_ngcontent-%COMP%] {\n  padding-top: 5rem;\n}\n\n#tsparticles[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDSiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wLTYge1xyXG4gICAgcGFkZGluZy10b3A6IDVyZW07XHJcbn1cclxuXHJcbiN0c3BhcnRpY2xlcyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuICAiXX0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_account_account_module_ts-es5.js.map