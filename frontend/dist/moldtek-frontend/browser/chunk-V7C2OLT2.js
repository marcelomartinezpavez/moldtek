import {
  toSignal
} from "./chunk-4XK3GPJE.js";
import {
  AuthService
} from "./chunk-KIOEOHFO.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-Q2CMZJDU.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-PXVMVJL6.js";
import {
  MatPseudoCheckboxModule
} from "./chunk-T4USGM5V.js";
import {
  SelectionModel
} from "./chunk-ERVSOKK3.js";
import {
  CdkScrollable,
  CdkScrollableModule,
  DomPortalOutlet,
  NG_VALUE_ACCESSOR,
  OverlayConfig,
  OverlayModule,
  ScrollDispatcher,
  TemplatePortal,
  ViewportRuler,
  createFlexibleConnectedPositionStrategy,
  createOverlayRef,
  createRepositionScrollStrategy
} from "./chunk-EFOXA73Z.js";
import {
  A,
  BidiModule,
  BreakpointObserver,
  Breakpoints,
  CdkObserveContent,
  DOWN_ARROW,
  Directionality,
  ENTER,
  ESCAPE,
  FocusKeyManager,
  FocusMonitor,
  FocusTrapFactory,
  InteractivityChecker,
  LEFT_ARROW,
  MAT_RIPPLE_GLOBAL_OPTIONS,
  MatButtonModule,
  MatIcon,
  MatIconButton,
  MatIconModule,
  MatRipple,
  MatRippleModule,
  ObserversModule,
  Platform,
  RIGHT_ARROW,
  RippleRenderer,
  SPACE,
  UP_ARROW,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _StructuralStylesLoader,
  _animationsDisabled,
  _getEventTarget,
  _getFocusedElementPierceShadowDom,
  _getShadowRoot,
  coerceBooleanProperty,
  coerceNumberProperty,
  hasModifierKey,
  isFakeMousedownFromScreenReader,
  isFakeTouchstartFromScreenReader
} from "./chunk-XA3QIYNR.js";
import {
  NgTemplateOutlet
} from "./chunk-C3SHWEMB.js";
import {
  ApplicationRef,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  Directive,
  ElementRef,
  EventEmitter,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Output,
  QueryList,
  Renderer2,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  afterNextRender,
  booleanAttribute,
  debounceTime,
  delay,
  filter,
  forwardRef,
  inject,
  map,
  mapTo,
  merge,
  of,
  setClassMetadata,
  signal,
  skipWhile,
  startWith,
  switchMap,
  take,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵdomTemplate,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-EHKUBBLL.js";

// node_modules/@angular/material/fesm2022/sidenav.mjs
var _c0 = ["*"];
var _c1 = ["content"];
var _c2 = [[["mat-drawer"], ["mat-sidenav"]], [["mat-drawer-content"], ["mat-sidenav-content"]], "*"];
var _c3 = ["mat-drawer, mat-sidenav", "mat-drawer-content, mat-sidenav-content", "*"];
function MatDrawerContainer_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function MatDrawerContainer_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._onBackdropClicked());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("mat-drawer-shown", ctx_r1._isShowingBackdrop());
  }
}
function MatDrawerContainer_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-drawer-content");
    \u0275\u0275projection(1, 2);
    \u0275\u0275elementEnd();
  }
}
function MatSidenavContainer_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function MatSidenavContainer_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._onBackdropClicked());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("mat-drawer-shown", ctx_r1._isShowingBackdrop());
  }
}
function MatSidenavContainer_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-sidenav-content");
    \u0275\u0275projection(1, 2);
    \u0275\u0275elementEnd();
  }
}
var _c4 = ".mat-drawer-container {\n  position: relative;\n  z-index: 1;\n  color: var(--%NS%mat-sidenav-content-text-color, var(--%NS%mat-sys-on-background));\n  background-color: var(--%NS%mat-sidenav-content-background-color, var(--%NS%mat-sys-background));\n  box-sizing: border-box;\n  display: block;\n  overflow: hidden;\n}\n.mat-drawer-container[fullscreen] {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n}\n.mat-drawer-container[fullscreen].mat-drawer-container-has-open {\n  overflow: hidden;\n}\n.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {\n  z-index: 3;\n}\n.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,\n.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,\n.ng-animate-disabled .mat-drawer-container .mat-drawer-content {\n  transition: none;\n}\n\n.mat-drawer-backdrop {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  display: block;\n  z-index: 3;\n  visibility: hidden;\n}\n.mat-drawer-backdrop.mat-drawer-shown {\n  visibility: visible;\n  background-color: var(--%NS%mat-sidenav-scrim-color, color-mix(in srgb, var(--%NS%mat-sys-neutral-variant20) 40%, transparent));\n}\n.mat-drawer-transition .mat-drawer-backdrop {\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-property: background-color, visibility;\n}\n@media (forced-colors: active) {\n  .mat-drawer-backdrop {\n    opacity: 0.5;\n  }\n}\n\n.mat-drawer-content {\n  position: relative;\n  z-index: 1;\n  display: block;\n  height: 100%;\n  overflow: auto;\n}\n.mat-drawer-content.mat-drawer-content-hidden {\n  opacity: 0;\n}\n.mat-drawer-transition .mat-drawer-content {\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-property: transform, margin-left, margin-right;\n}\n\n.mat-drawer {\n  position: relative;\n  z-index: 4;\n  color: var(--%NS%mat-sidenav-container-text-color, var(--%NS%mat-sys-on-surface-variant));\n  box-shadow: var(--%NS%mat-sidenav-container-elevation-shadow, none);\n  background-color: var(--%NS%mat-sidenav-container-background-color, var(--%NS%mat-sys-surface));\n  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));\n  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));\n  width: var(--%NS%mat-sidenav-container-width, 360px);\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 3;\n  outline: 0;\n  box-sizing: border-box;\n  overflow-y: auto;\n  transform: translate3d(-100%, 0, 0);\n}\n@media (forced-colors: active) {\n  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {\n    border-right: solid 1px currentColor;\n  }\n}\n@media (forced-colors: active) {\n  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {\n    border-left: solid 1px currentColor;\n    border-right: none;\n  }\n}\n.mat-drawer.mat-drawer-side {\n  z-index: 2;\n}\n.mat-drawer.mat-drawer-end {\n  right: 0;\n  transform: translate3d(100%, 0, 0);\n  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));\n  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=rtl] .mat-drawer {\n  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));\n  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  transform: translate3d(100%, 0, 0);\n}\n[dir=rtl] .mat-drawer.mat-drawer-end {\n  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));\n  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  left: 0;\n  right: auto;\n  transform: translate3d(-100%, 0, 0);\n}\n.mat-drawer-transition .mat-drawer {\n  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {\n  visibility: hidden;\n  box-shadow: none;\n}\n.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {\n  display: none;\n}\n.mat-drawer.mat-drawer-opened.mat-drawer-opened {\n  transform: none;\n}\n\n.mat-drawer-side {\n  box-shadow: none;\n  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);\n  border-right-width: 1px;\n  border-right-style: solid;\n}\n.mat-drawer-side.mat-drawer-end {\n  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);\n  border-left-width: 1px;\n  border-left-style: solid;\n  border-right: none;\n}\n[dir=rtl] .mat-drawer-side {\n  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);\n  border-left-width: 1px;\n  border-left-style: solid;\n  border-right: none;\n}\n[dir=rtl] .mat-drawer-side.mat-drawer-end {\n  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);\n  border-right-width: 1px;\n  border-right-style: solid;\n  border-left: none;\n}\n\n.mat-drawer-inner-container {\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n}\n\n.mat-sidenav-fixed {\n  position: fixed;\n}\n";
function throwMatDuplicatedDrawerError(position) {
  throw Error(`A drawer was already declared for 'position="${position}"'`);
}
var MAT_DRAWER_DEFAULT_AUTOSIZE = new InjectionToken("MAT_DRAWER_DEFAULT_AUTOSIZE", {
  providedIn: "root",
  factory: () => false
});
var MAT_DRAWER_CONTAINER = new InjectionToken("MAT_DRAWER_CONTAINER");
var MatDrawerContent = class _MatDrawerContent extends CdkScrollable {
  _platform = inject(Platform);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _element = inject(ElementRef);
  _ngZone = inject(NgZone);
  _isInert = false;
  _container = inject(MatDrawerContainer);
  ngAfterContentInit() {
    this._container._contentMarginChanges.subscribe(() => this._changeDetectorRef.markForCheck());
  }
  _drawerToggled(drawer) {
    if (drawer.opened) {
      this._ngZone.runOutsideAngular(() => {
        drawer._animationEnd.pipe(delay(50), take(1)).subscribe(() => this._updateInert());
      });
    } else {
      this._updateInert();
    }
  }
  _drawerModeChanged() {
    this._updateInert();
  }
  _updateInert() {
    const newValue = this._container._isShowingBackdrop();
    if (newValue !== this._isInert) {
      const element = this._element.nativeElement;
      this._isInert = newValue;
      if (newValue) {
        element.setAttribute("inert", "true");
      } else {
        element.removeAttribute("inert");
      }
    }
  }
  _shouldBeHidden() {
    if (this._platform.isBrowser) {
      return false;
    }
    const {
      start,
      end
    } = this._container;
    return start != null && start.mode !== "over" && start.opened || end != null && end.mode !== "over" && end.opened;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatDrawerContent_BaseFactory;
    return function MatDrawerContent_Factory(__ngFactoryType__) {
      return (\u0275MatDrawerContent_BaseFactory || (\u0275MatDrawerContent_BaseFactory = \u0275\u0275getInheritedFactory(_MatDrawerContent)))(__ngFactoryType__ || _MatDrawerContent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatDrawerContent,
    selectors: [["mat-drawer-content"]],
    hostAttrs: [1, "mat-drawer-content"],
    hostVars: 6,
    hostBindings: function MatDrawerContent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleProp("margin-left", ctx._container._contentMargins.left, "px")("margin-right", ctx._container._contentMargins.right, "px");
        \u0275\u0275classProp("mat-drawer-content-hidden", ctx._shouldBeHidden());
      }
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkScrollable,
      useExisting: _MatDrawerContent
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function MatDrawerContent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDrawerContent, [{
    type: Component,
    args: [{
      selector: "mat-drawer-content",
      template: "<ng-content></ng-content>",
      host: {
        "class": "mat-drawer-content",
        "[style.margin-left.px]": "_container._contentMargins.left",
        "[style.margin-right.px]": "_container._contentMargins.right",
        "[class.mat-drawer-content-hidden]": "_shouldBeHidden()"
      },
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: CdkScrollable,
        useExisting: MatDrawerContent
      }]
    }]
  }], null, null);
})();
var MatDrawer = class _MatDrawer {
  _elementRef = inject(ElementRef);
  _focusTrapFactory = inject(FocusTrapFactory);
  _focusMonitor = inject(FocusMonitor);
  _platform = inject(Platform);
  _ngZone = inject(NgZone);
  _renderer = inject(Renderer2);
  _interactivityChecker = inject(InteractivityChecker);
  _doc = inject(DOCUMENT);
  _isAnimating = false;
  _container = inject(MAT_DRAWER_CONTAINER, {
    optional: true
  });
  _focusTrap = null;
  _elementFocusedBeforeDrawerWasOpened = null;
  _eventCleanups;
  _isAttached = false;
  _anchor = null;
  get position() {
    return this._position;
  }
  set position(value) {
    value = value === "end" ? "end" : "start";
    if (value !== this._position) {
      if (this._isAttached) {
        this._updatePositionInParent(value);
      }
      this._position = value;
      this.onPositionChanged.emit();
    }
  }
  _position = "start";
  get mode() {
    return this._mode;
  }
  set mode(value) {
    this._mode = value;
    this._updateFocusTrapState();
    this._modeChanged.next();
    this._getContent()?._drawerModeChanged();
  }
  _mode = "over";
  get disableClose() {
    return this._disableClose;
  }
  set disableClose(value) {
    this._disableClose = coerceBooleanProperty(value);
  }
  _disableClose = false;
  get autoFocus() {
    const value = this._autoFocus;
    if (value == null) {
      if (this.mode === "side") {
        return "dialog";
      } else {
        return "first-tabbable";
      }
    }
    return value;
  }
  set autoFocus(value) {
    if (value === "true" || value === "false" || value == null) {
      value = coerceBooleanProperty(value);
    }
    this._autoFocus = value;
  }
  _autoFocus;
  get opened() {
    return this._opened();
  }
  set opened(value) {
    this.toggle(coerceBooleanProperty(value));
  }
  _opened = signal(false, ...ngDevMode ? [{
    debugName: "_opened"
  }] : []);
  _openedVia = null;
  _animationStarted = new Subject();
  _animationEnd = new Subject();
  openedChange = new EventEmitter(true);
  _openedStream = this.openedChange.pipe(filter((o) => o), map(() => {
  }));
  openedStart = this._animationStarted.pipe(filter(() => this.opened), mapTo(void 0));
  _closedStream = this.openedChange.pipe(filter((o) => !o), map(() => {
  }));
  closedStart = this._animationStarted.pipe(filter(() => !this.opened), mapTo(void 0));
  _destroyed = new Subject();
  onPositionChanged = new EventEmitter();
  _content;
  _modeChanged = new Subject();
  _injector = inject(Injector);
  _changeDetectorRef = inject(ChangeDetectorRef);
  constructor() {
    this.openedChange.pipe(takeUntil(this._destroyed)).subscribe((opened) => {
      if (opened) {
        this._elementFocusedBeforeDrawerWasOpened = this._doc.activeElement;
        this._takeFocus();
      } else if (this._isFocusWithinDrawer()) {
        this._restoreFocus(this._openedVia || "program");
      }
    });
    this._eventCleanups = this._ngZone.runOutsideAngular(() => {
      const renderer = this._renderer;
      const element = this._elementRef.nativeElement;
      return [renderer.listen(element, "keydown", (event) => {
        if (event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event)) {
          this._ngZone.run(() => {
            this.close();
            event.stopPropagation();
            event.preventDefault();
          });
        }
      }), renderer.listen(element, "transitionend", this._handleTransitionEvent), renderer.listen(element, "transitioncancel", this._handleTransitionEvent)];
    });
    this._animationEnd.subscribe(() => {
      this.openedChange.emit(this.opened);
    });
  }
  _focusByCssSelector(selector, options) {
    const element = this._elementRef.nativeElement.querySelector(selector);
    if (!element) {
      return;
    }
    if (!this._interactivityChecker.isFocusable(element)) {
      element.tabIndex = -1;
      this._ngZone.runOutsideAngular(() => {
        const callback = () => {
          cleanupBlur();
          cleanupMousedown();
          element.removeAttribute("tabindex");
        };
        const cleanupBlur = this._renderer.listen(element, "blur", callback);
        const cleanupMousedown = this._renderer.listen(element, "mousedown", callback);
      });
    }
    element.focus(options);
  }
  _takeFocus() {
    if (!this._focusTrap) {
      return;
    }
    const element = this._elementRef.nativeElement;
    switch (this.autoFocus) {
      case false:
      case "dialog":
        return;
      case true:
      case "first-tabbable":
        afterNextRender(() => {
          const focusOptions = this._isAnimating ? {
            preventScroll: true
          } : void 0;
          const hasMovedFocus = this._focusTrap.focusInitialElement(focusOptions);
          if (!hasMovedFocus && typeof element.focus === "function") {
            element.focus(focusOptions);
          }
        }, {
          injector: this._injector
        });
        break;
      case "first-heading":
        this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');
        break;
      default:
        this._focusByCssSelector(this.autoFocus);
        break;
    }
  }
  _restoreFocus(focusOrigin) {
    if (this.autoFocus === "dialog") {
      return;
    }
    if (this._elementFocusedBeforeDrawerWasOpened) {
      this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened, focusOrigin);
    } else {
      this._elementRef.nativeElement.blur();
    }
    this._elementFocusedBeforeDrawerWasOpened = null;
  }
  _isFocusWithinDrawer() {
    const activeEl = this._doc.activeElement;
    return !!activeEl && this._elementRef.nativeElement.contains(activeEl);
  }
  ngAfterViewInit() {
    this._isAttached = true;
    if (this._position === "end") {
      this._updatePositionInParent("end");
    }
    if (this._platform.isBrowser) {
      this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
      this._updateFocusTrapState();
    }
  }
  ngOnDestroy() {
    this._eventCleanups.forEach((cleanup) => cleanup());
    this._focusTrap?.destroy();
    this._anchor?.remove();
    this._anchor = null;
    this._animationStarted.complete();
    this._animationEnd.complete();
    this._modeChanged.complete();
    this._destroyed.next();
    this._destroyed.complete();
  }
  open(openedVia) {
    return this.toggle(true, openedVia);
  }
  close() {
    return this.toggle(false);
  }
  _closeViaBackdropClick() {
    return this._setOpen(false, true, "mouse");
  }
  toggle(isOpen = !this.opened, openedVia) {
    if (isOpen && openedVia) {
      this._openedVia = openedVia;
    }
    const result = this._setOpen(isOpen, !isOpen && this._isFocusWithinDrawer(), this._openedVia || "program");
    if (!isOpen) {
      this._openedVia = null;
    }
    return result;
  }
  _setOpen(isOpen, restoreFocus, focusOrigin) {
    if (isOpen === this.opened) {
      return Promise.resolve(isOpen ? "open" : "close");
    }
    this._opened.set(isOpen);
    this._getContent()?._drawerToggled(this);
    if (this._container?._transitionsEnabled) {
      if (this._isAnimating) {
        this._setIsAnimating(false);
        this._simulateAnimation();
      } else {
        this._setIsAnimating(true);
        setTimeout(() => this._animationStarted.next());
      }
    } else {
      this._simulateAnimation();
    }
    this._elementRef.nativeElement.classList.toggle("mat-drawer-opened", isOpen);
    if (!isOpen && restoreFocus) {
      this._restoreFocus(focusOrigin);
    }
    this._changeDetectorRef.markForCheck();
    this._updateFocusTrapState();
    return new Promise((resolve) => {
      this.openedChange.pipe(take(1)).subscribe((open) => resolve(open ? "open" : "close"));
    });
  }
  _getContent() {
    return this._container?._content || this._container?._userContent;
  }
  _setIsAnimating(isAnimating) {
    if (isAnimating !== this._isAnimating) {
      this._isAnimating = isAnimating;
      this._elementRef.nativeElement.classList.toggle("mat-drawer-animating", isAnimating);
    }
  }
  _simulateAnimation() {
    setTimeout(() => {
      this._animationStarted.next();
      this._animationEnd.next();
    });
  }
  _getWidth() {
    return this._elementRef.nativeElement.offsetWidth || 0;
  }
  _updateFocusTrapState() {
    if (this._focusTrap) {
      this._focusTrap.enabled = this.opened && !!this._container?._isShowingBackdrop();
    }
  }
  _updatePositionInParent(newPosition) {
    if (!this._platform.isBrowser) {
      return;
    }
    const element = this._elementRef.nativeElement;
    const parent = element.parentNode;
    if (newPosition === "end") {
      if (!this._anchor) {
        this._anchor = this._doc.createComment("mat-drawer-anchor");
        parent.insertBefore(this._anchor, element);
      }
      parent.appendChild(element);
    } else if (this._anchor) {
      this._anchor.parentNode.insertBefore(element, this._anchor);
    }
  }
  _handleTransitionEvent = (event) => {
    const element = this._elementRef.nativeElement;
    if (event.target === element) {
      this._ngZone.run(() => {
        if (event.type === "transitionend") {
          this._setIsAnimating(false);
        }
        this._animationEnd.next(event);
      });
    }
  };
  static \u0275fac = function MatDrawer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDrawer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatDrawer,
    selectors: [["mat-drawer"]],
    viewQuery: function MatDrawer_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._content = _t.first);
      }
    },
    hostAttrs: [1, "mat-drawer"],
    hostVars: 12,
    hostBindings: function MatDrawer_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("align", null)("tabIndex", ctx.mode !== "side" ? "-1" : null);
        \u0275\u0275styleProp("visibility", !ctx._container && !ctx.opened ? "hidden" : null);
        \u0275\u0275classProp("mat-drawer-end", ctx.position === "end")("mat-drawer-over", ctx.mode === "over")("mat-drawer-push", ctx.mode === "push")("mat-drawer-side", ctx.mode === "side");
      }
    },
    inputs: {
      position: "position",
      mode: "mode",
      disableClose: "disableClose",
      autoFocus: "autoFocus",
      opened: "opened"
    },
    outputs: {
      openedChange: "openedChange",
      _openedStream: "opened",
      openedStart: "openedStart",
      _closedStream: "closed",
      closedStart: "closedStart",
      onPositionChanged: "positionChanged"
    },
    exportAs: ["matDrawer"],
    ngContentSelectors: _c0,
    decls: 3,
    vars: 0,
    consts: [["content", ""], ["cdkScrollable", "", 1, "mat-drawer-inner-container"]],
    template: function MatDrawer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 1, 0);
        \u0275\u0275projection(2);
        \u0275\u0275elementEnd();
      }
    },
    dependencies: [CdkScrollable],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDrawer, [{
    type: Component,
    args: [{
      selector: "mat-drawer",
      exportAs: "matDrawer",
      host: {
        "class": "mat-drawer",
        "[attr.align]": "null",
        "[class.mat-drawer-end]": 'position === "end"',
        "[class.mat-drawer-over]": 'mode === "over"',
        "[class.mat-drawer-push]": 'mode === "push"',
        "[class.mat-drawer-side]": 'mode === "side"',
        "[style.visibility]": '(!_container && !opened) ? "hidden" : null',
        "[attr.tabIndex]": '(mode !== "side") ? "-1" : null'
      },
      encapsulation: ViewEncapsulation.None,
      imports: [CdkScrollable],
      template: '<div class="mat-drawer-inner-container" cdkScrollable #content>\r\n  <ng-content></ng-content>\r\n</div>\r\n'
    }]
  }], () => [], {
    position: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    disableClose: [{
      type: Input
    }],
    autoFocus: [{
      type: Input
    }],
    opened: [{
      type: Input
    }],
    openedChange: [{
      type: Output
    }],
    _openedStream: [{
      type: Output,
      args: ["opened"]
    }],
    openedStart: [{
      type: Output
    }],
    _closedStream: [{
      type: Output,
      args: ["closed"]
    }],
    closedStart: [{
      type: Output
    }],
    onPositionChanged: [{
      type: Output,
      args: ["positionChanged"]
    }],
    _content: [{
      type: ViewChild,
      args: ["content"]
    }]
  });
})();
var MatDrawerContainer = class _MatDrawerContainer {
  _dir = inject(Directionality, {
    optional: true
  });
  _element = inject(ElementRef);
  _ngZone = inject(NgZone);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _animationDisabled = _animationsDisabled();
  _transitionsEnabled = false;
  _allDrawers;
  _drawers = new QueryList();
  _content;
  _userContent;
  get start() {
    return this._start;
  }
  get end() {
    return this._end;
  }
  get autosize() {
    return this._autosize;
  }
  set autosize(value) {
    this._autosize = coerceBooleanProperty(value);
  }
  _autosize = inject(MAT_DRAWER_DEFAULT_AUTOSIZE);
  get hasBackdrop() {
    return this._drawerHasBackdrop(this._start) || this._drawerHasBackdrop(this._end);
  }
  set hasBackdrop(value) {
    this._backdropOverride = value == null ? null : coerceBooleanProperty(value);
  }
  _backdropOverride = null;
  backdropClick = new EventEmitter();
  _start = null;
  _end = null;
  _left = null;
  _right = null;
  _destroyed = new Subject();
  _doCheckSubject = new Subject();
  _contentMargins = {
    left: null,
    right: null
  };
  _contentMarginChanges = new Subject();
  get scrollable() {
    return this._userContent || this._content;
  }
  _injector = inject(Injector);
  constructor() {
    const platform = inject(Platform);
    const viewportRuler = inject(ViewportRuler);
    this._dir?.change.pipe(takeUntil(this._destroyed)).subscribe(() => {
      this._validateDrawers();
      this.updateContentMargins();
    });
    viewportRuler.change().pipe(takeUntil(this._destroyed)).subscribe(() => this.updateContentMargins());
    if (!this._animationDisabled && platform.isBrowser) {
      this._ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          this._element.nativeElement.classList.add("mat-drawer-transition");
          this._transitionsEnabled = true;
        }, 200);
      });
    }
  }
  ngAfterContentInit() {
    this._allDrawers.changes.pipe(startWith(this._allDrawers), takeUntil(this._destroyed)).subscribe((drawer) => {
      this._drawers.reset(drawer.filter((item) => !item._container || item._container === this));
      this._drawers.notifyOnChanges();
    });
    this._drawers.changes.pipe(startWith(null)).subscribe(() => {
      this._validateDrawers();
      this._drawers.forEach((drawer) => {
        this._watchDrawerToggle(drawer);
        this._watchDrawerPosition(drawer);
        this._watchDrawerMode(drawer);
      });
      if (!this._drawers.length || this._isDrawerOpen(this._start) || this._isDrawerOpen(this._end)) {
        this.updateContentMargins();
      }
      this._changeDetectorRef.markForCheck();
    });
    this._ngZone.runOutsideAngular(() => {
      this._doCheckSubject.pipe(debounceTime(10), takeUntil(this._destroyed)).subscribe(() => this.updateContentMargins());
    });
  }
  ngOnDestroy() {
    this._contentMarginChanges.complete();
    this._doCheckSubject.complete();
    this._drawers.destroy();
    this._destroyed.next();
    this._destroyed.complete();
  }
  open() {
    this._drawers.forEach((drawer) => drawer.open());
  }
  close() {
    this._drawers.forEach((drawer) => drawer.close());
  }
  updateContentMargins() {
    let left = 0;
    let right = 0;
    if (this._left && this._left.opened) {
      if (this._left.mode == "side") {
        left += this._left._getWidth();
      } else if (this._left.mode == "push") {
        const width = this._left._getWidth();
        left += width;
        right -= width;
      }
    }
    if (this._right && this._right.opened) {
      if (this._right.mode == "side") {
        right += this._right._getWidth();
      } else if (this._right.mode == "push") {
        const width = this._right._getWidth();
        right += width;
        left -= width;
      }
    }
    left = left || null;
    right = right || null;
    if (left !== this._contentMargins.left || right !== this._contentMargins.right) {
      this._contentMargins = {
        left,
        right
      };
      this._ngZone.run(() => this._contentMarginChanges.next(this._contentMargins));
    }
  }
  ngDoCheck() {
    if (this._autosize && this._isPushed()) {
      this._ngZone.runOutsideAngular(() => this._doCheckSubject.next());
    }
  }
  _watchDrawerToggle(drawer) {
    drawer._animationStarted.pipe(takeUntil(this._drawers.changes)).subscribe(() => {
      this.updateContentMargins();
      this._changeDetectorRef.markForCheck();
    });
    if (drawer.mode !== "side") {
      drawer.openedChange.pipe(takeUntil(this._drawers.changes)).subscribe(() => this._setContainerClass(drawer.opened));
    }
  }
  _watchDrawerPosition(drawer) {
    drawer.onPositionChanged.pipe(takeUntil(this._drawers.changes)).subscribe(() => {
      afterNextRender({
        read: () => this._validateDrawers()
      }, {
        injector: this._injector
      });
    });
  }
  _watchDrawerMode(drawer) {
    drawer._modeChanged.pipe(takeUntil(merge(this._drawers.changes, this._destroyed))).subscribe(() => {
      this.updateContentMargins();
      this._changeDetectorRef.markForCheck();
    });
  }
  _setContainerClass(isAdd) {
    const classList = this._element.nativeElement.classList;
    const className = "mat-drawer-container-has-open";
    if (isAdd) {
      classList.add(className);
    } else {
      classList.remove(className);
    }
  }
  _validateDrawers() {
    this._start = this._end = null;
    this._drawers.forEach((drawer) => {
      if (drawer.position == "end") {
        if (this._end != null && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throwMatDuplicatedDrawerError("end");
        }
        this._end = drawer;
      } else {
        if (this._start != null && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throwMatDuplicatedDrawerError("start");
        }
        this._start = drawer;
      }
    });
    this._right = this._left = null;
    if (this._dir && this._dir.value === "rtl") {
      this._left = this._end;
      this._right = this._start;
    } else {
      this._left = this._start;
      this._right = this._end;
    }
  }
  _isPushed() {
    return this._isDrawerOpen(this._start) && this._start.mode != "over" || this._isDrawerOpen(this._end) && this._end.mode != "over";
  }
  _onBackdropClicked() {
    this.backdropClick.emit();
    this._closeModalDrawersViaBackdrop();
  }
  _closeModalDrawersViaBackdrop() {
    [this._start, this._end].filter((drawer) => drawer && !drawer.disableClose && this._drawerHasBackdrop(drawer)).forEach((drawer) => drawer._closeViaBackdropClick());
  }
  _isShowingBackdrop() {
    return this._isDrawerOpen(this._start) && this._drawerHasBackdrop(this._start) || this._isDrawerOpen(this._end) && this._drawerHasBackdrop(this._end);
  }
  _isDrawerOpen(drawer) {
    return drawer != null && drawer.opened;
  }
  _drawerHasBackdrop(drawer) {
    if (this._backdropOverride == null) {
      return !!drawer && drawer.mode !== "side";
    }
    return this._backdropOverride;
  }
  static \u0275fac = function MatDrawerContainer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDrawerContainer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatDrawerContainer,
    selectors: [["mat-drawer-container"]],
    contentQueries: function MatDrawerContainer_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatDrawerContent, 5)(dirIndex, MatDrawer, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._content = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._allDrawers = _t);
      }
    },
    viewQuery: function MatDrawerContainer_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatDrawerContent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._userContent = _t.first);
      }
    },
    hostAttrs: [1, "mat-drawer-container"],
    hostVars: 2,
    hostBindings: function MatDrawerContainer_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-drawer-container-explicit-backdrop", ctx._backdropOverride);
      }
    },
    inputs: {
      autosize: "autosize",
      hasBackdrop: "hasBackdrop"
    },
    outputs: {
      backdropClick: "backdropClick"
    },
    exportAs: ["matDrawerContainer"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_DRAWER_CONTAINER,
      useExisting: _MatDrawerContainer
    }])],
    ngContentSelectors: _c3,
    decls: 4,
    vars: 2,
    consts: [[1, "mat-drawer-backdrop", 3, "mat-drawer-shown"], [1, "mat-drawer-backdrop", 3, "click"]],
    template: function MatDrawerContainer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c2);
        \u0275\u0275conditionalCreate(0, MatDrawerContainer_Conditional_0_Template, 1, 2, "div", 0);
        \u0275\u0275projection(1);
        \u0275\u0275projection(2, 1);
        \u0275\u0275conditionalCreate(3, MatDrawerContainer_Conditional_3_Template, 2, 0, "mat-drawer-content");
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.hasBackdrop ? 0 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!ctx._content ? 3 : -1);
      }
    },
    dependencies: [MatDrawerContent],
    styles: [".mat-drawer-container {\n  position: relative;\n  z-index: 1;\n  color: var(--%NS%mat-sidenav-content-text-color, var(--%NS%mat-sys-on-background));\n  background-color: var(--%NS%mat-sidenav-content-background-color, var(--%NS%mat-sys-background));\n  box-sizing: border-box;\n  display: block;\n  overflow: hidden;\n}\n.mat-drawer-container[fullscreen] {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n}\n.mat-drawer-container[fullscreen].mat-drawer-container-has-open {\n  overflow: hidden;\n}\n.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {\n  z-index: 3;\n}\n.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,\n.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,\n.ng-animate-disabled .mat-drawer-container .mat-drawer-content {\n  transition: none;\n}\n\n.mat-drawer-backdrop {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  display: block;\n  z-index: 3;\n  visibility: hidden;\n}\n.mat-drawer-backdrop.mat-drawer-shown {\n  visibility: visible;\n  background-color: var(--%NS%mat-sidenav-scrim-color, color-mix(in srgb, var(--%NS%mat-sys-neutral-variant20) 40%, transparent));\n}\n.mat-drawer-transition .mat-drawer-backdrop {\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-property: background-color, visibility;\n}\n@media (forced-colors: active) {\n  .mat-drawer-backdrop {\n    opacity: 0.5;\n  }\n}\n\n.mat-drawer-content {\n  position: relative;\n  z-index: 1;\n  display: block;\n  height: 100%;\n  overflow: auto;\n}\n.mat-drawer-content.mat-drawer-content-hidden {\n  opacity: 0;\n}\n.mat-drawer-transition .mat-drawer-content {\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-property: transform, margin-left, margin-right;\n}\n\n.mat-drawer {\n  position: relative;\n  z-index: 4;\n  color: var(--%NS%mat-sidenav-container-text-color, var(--%NS%mat-sys-on-surface-variant));\n  box-shadow: var(--%NS%mat-sidenav-container-elevation-shadow, none);\n  background-color: var(--%NS%mat-sidenav-container-background-color, var(--%NS%mat-sys-surface));\n  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));\n  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));\n  width: var(--%NS%mat-sidenav-container-width, 360px);\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 3;\n  outline: 0;\n  box-sizing: border-box;\n  overflow-y: auto;\n  transform: translate3d(-100%, 0, 0);\n}\n@media (forced-colors: active) {\n  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {\n    border-right: solid 1px currentColor;\n  }\n}\n@media (forced-colors: active) {\n  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {\n    border-left: solid 1px currentColor;\n    border-right: none;\n  }\n}\n.mat-drawer.mat-drawer-side {\n  z-index: 2;\n}\n.mat-drawer.mat-drawer-end {\n  right: 0;\n  transform: translate3d(100%, 0, 0);\n  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));\n  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=rtl] .mat-drawer {\n  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));\n  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  transform: translate3d(100%, 0, 0);\n}\n[dir=rtl] .mat-drawer.mat-drawer-end {\n  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));\n  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  left: 0;\n  right: auto;\n  transform: translate3d(-100%, 0, 0);\n}\n.mat-drawer-transition .mat-drawer {\n  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {\n  visibility: hidden;\n  box-shadow: none;\n}\n.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {\n  display: none;\n}\n.mat-drawer.mat-drawer-opened.mat-drawer-opened {\n  transform: none;\n}\n\n.mat-drawer-side {\n  box-shadow: none;\n  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);\n  border-right-width: 1px;\n  border-right-style: solid;\n}\n.mat-drawer-side.mat-drawer-end {\n  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);\n  border-left-width: 1px;\n  border-left-style: solid;\n  border-right: none;\n}\n[dir=rtl] .mat-drawer-side {\n  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);\n  border-left-width: 1px;\n  border-left-style: solid;\n  border-right: none;\n}\n[dir=rtl] .mat-drawer-side.mat-drawer-end {\n  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);\n  border-right-width: 1px;\n  border-right-style: solid;\n  border-left: none;\n}\n\n.mat-drawer-inner-container {\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n}\n\n.mat-sidenav-fixed {\n  position: fixed;\n}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDrawerContainer, [{
    type: Component,
    args: [{
      selector: "mat-drawer-container",
      exportAs: "matDrawerContainer",
      host: {
        "class": "mat-drawer-container",
        "[class.mat-drawer-container-explicit-backdrop]": "_backdropOverride"
      },
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: MAT_DRAWER_CONTAINER,
        useExisting: MatDrawerContainer
      }],
      imports: [MatDrawerContent],
      template: '@if (hasBackdrop) {\n  <div class="mat-drawer-backdrop" (click)="_onBackdropClicked()"\n       [class.mat-drawer-shown]="_isShowingBackdrop()"></div>\n}\n\n<ng-content select="mat-drawer, mat-sidenav"/>\n<ng-content select="mat-drawer-content, mat-sidenav-content"/>\n\n@if (!_content) {\n  <mat-drawer-content>\n    <ng-content/>\n  </mat-drawer-content>\n}\n',
      styles: [".mat-drawer-container {\n  position: relative;\n  z-index: 1;\n  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));\n  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));\n  box-sizing: border-box;\n  display: block;\n  overflow: hidden;\n}\n.mat-drawer-container[fullscreen] {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n}\n.mat-drawer-container[fullscreen].mat-drawer-container-has-open {\n  overflow: hidden;\n}\n.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {\n  z-index: 3;\n}\n.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,\n.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,\n.ng-animate-disabled .mat-drawer-container .mat-drawer-content {\n  transition: none;\n}\n\n.mat-drawer-backdrop {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  display: block;\n  z-index: 3;\n  visibility: hidden;\n}\n.mat-drawer-backdrop.mat-drawer-shown {\n  visibility: visible;\n  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));\n}\n.mat-drawer-transition .mat-drawer-backdrop {\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-property: background-color, visibility;\n}\n@media (forced-colors: active) {\n  .mat-drawer-backdrop {\n    opacity: 0.5;\n  }\n}\n\n.mat-drawer-content {\n  position: relative;\n  z-index: 1;\n  display: block;\n  height: 100%;\n  overflow: auto;\n}\n.mat-drawer-content.mat-drawer-content-hidden {\n  opacity: 0;\n}\n.mat-drawer-transition .mat-drawer-content {\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-property: transform, margin-left, margin-right;\n}\n\n.mat-drawer {\n  position: relative;\n  z-index: 4;\n  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));\n  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);\n  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));\n  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));\n  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));\n  width: var(--mat-sidenav-container-width, 360px);\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 3;\n  outline: 0;\n  box-sizing: border-box;\n  overflow-y: auto;\n  transform: translate3d(-100%, 0, 0);\n}\n@media (forced-colors: active) {\n  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {\n    border-right: solid 1px currentColor;\n  }\n}\n@media (forced-colors: active) {\n  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {\n    border-left: solid 1px currentColor;\n    border-right: none;\n  }\n}\n.mat-drawer.mat-drawer-side {\n  z-index: 2;\n}\n.mat-drawer.mat-drawer-end {\n  right: 0;\n  transform: translate3d(100%, 0, 0);\n  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));\n  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=rtl] .mat-drawer {\n  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));\n  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  transform: translate3d(100%, 0, 0);\n}\n[dir=rtl] .mat-drawer.mat-drawer-end {\n  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));\n  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  left: 0;\n  right: auto;\n  transform: translate3d(-100%, 0, 0);\n}\n.mat-drawer-transition .mat-drawer {\n  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {\n  visibility: hidden;\n  box-shadow: none;\n}\n.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {\n  display: none;\n}\n.mat-drawer.mat-drawer-opened.mat-drawer-opened {\n  transform: none;\n}\n\n.mat-drawer-side {\n  box-shadow: none;\n  border-right-color: var(--mat-sidenav-container-divider-color, transparent);\n  border-right-width: 1px;\n  border-right-style: solid;\n}\n.mat-drawer-side.mat-drawer-end {\n  border-left-color: var(--mat-sidenav-container-divider-color, transparent);\n  border-left-width: 1px;\n  border-left-style: solid;\n  border-right: none;\n}\n[dir=rtl] .mat-drawer-side {\n  border-left-color: var(--mat-sidenav-container-divider-color, transparent);\n  border-left-width: 1px;\n  border-left-style: solid;\n  border-right: none;\n}\n[dir=rtl] .mat-drawer-side.mat-drawer-end {\n  border-right-color: var(--mat-sidenav-container-divider-color, transparent);\n  border-right-width: 1px;\n  border-right-style: solid;\n  border-left: none;\n}\n\n.mat-drawer-inner-container {\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n}\n\n.mat-sidenav-fixed {\n  position: fixed;\n}\n"]
    }]
  }], () => [], {
    _allDrawers: [{
      type: ContentChildren,
      args: [MatDrawer, {
        descendants: true
      }]
    }],
    _content: [{
      type: ContentChild,
      args: [MatDrawerContent]
    }],
    _userContent: [{
      type: ViewChild,
      args: [MatDrawerContent]
    }],
    autosize: [{
      type: Input
    }],
    hasBackdrop: [{
      type: Input
    }],
    backdropClick: [{
      type: Output
    }]
  });
})();
var MatSidenavContent = class _MatSidenavContent extends MatDrawerContent {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatSidenavContent_BaseFactory;
    return function MatSidenavContent_Factory(__ngFactoryType__) {
      return (\u0275MatSidenavContent_BaseFactory || (\u0275MatSidenavContent_BaseFactory = \u0275\u0275getInheritedFactory(_MatSidenavContent)))(__ngFactoryType__ || _MatSidenavContent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSidenavContent,
    selectors: [["mat-sidenav-content"]],
    hostAttrs: [1, "mat-drawer-content", "mat-sidenav-content"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkScrollable,
      useExisting: _MatSidenavContent
    }, {
      provide: MatDrawerContent,
      useExisting: _MatSidenavContent
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function MatSidenavContent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSidenavContent, [{
    type: Component,
    args: [{
      selector: "mat-sidenav-content",
      template: "<ng-content></ng-content>",
      host: {
        "class": "mat-drawer-content mat-sidenav-content"
      },
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: CdkScrollable,
        useExisting: MatSidenavContent
      }, {
        provide: MatDrawerContent,
        useExisting: MatSidenavContent
      }]
    }]
  }], null, null);
})();
var MatSidenav = class _MatSidenav extends MatDrawer {
  get fixedInViewport() {
    return this._fixedInViewport;
  }
  set fixedInViewport(value) {
    this._fixedInViewport = coerceBooleanProperty(value);
  }
  _fixedInViewport = false;
  get fixedTopGap() {
    return this._fixedTopGap;
  }
  set fixedTopGap(value) {
    this._fixedTopGap = coerceNumberProperty(value);
  }
  _fixedTopGap = 0;
  get fixedBottomGap() {
    return this._fixedBottomGap;
  }
  set fixedBottomGap(value) {
    this._fixedBottomGap = coerceNumberProperty(value);
  }
  _fixedBottomGap = 0;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatSidenav_BaseFactory;
    return function MatSidenav_Factory(__ngFactoryType__) {
      return (\u0275MatSidenav_BaseFactory || (\u0275MatSidenav_BaseFactory = \u0275\u0275getInheritedFactory(_MatSidenav)))(__ngFactoryType__ || _MatSidenav);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSidenav,
    selectors: [["mat-sidenav"]],
    hostAttrs: [1, "mat-drawer", "mat-sidenav"],
    hostVars: 16,
    hostBindings: function MatSidenav_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("tabIndex", ctx.mode !== "side" ? "-1" : null)("align", null);
        \u0275\u0275styleProp("top", ctx.fixedInViewport ? ctx.fixedTopGap : null, "px")("bottom", ctx.fixedInViewport ? ctx.fixedBottomGap : null, "px");
        \u0275\u0275classProp("mat-drawer-end", ctx.position === "end")("mat-drawer-over", ctx.mode === "over")("mat-drawer-push", ctx.mode === "push")("mat-drawer-side", ctx.mode === "side")("mat-sidenav-fixed", ctx.fixedInViewport);
      }
    },
    inputs: {
      fixedInViewport: "fixedInViewport",
      fixedTopGap: "fixedTopGap",
      fixedBottomGap: "fixedBottomGap"
    },
    exportAs: ["matSidenav"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MatDrawer,
      useExisting: _MatSidenav
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 3,
    vars: 0,
    consts: [["content", ""], ["cdkScrollable", "", 1, "mat-drawer-inner-container"]],
    template: function MatSidenav_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 1, 0);
        \u0275\u0275projection(2);
        \u0275\u0275elementEnd();
      }
    },
    dependencies: [CdkScrollable],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSidenav, [{
    type: Component,
    args: [{
      selector: "mat-sidenav",
      exportAs: "matSidenav",
      host: {
        "class": "mat-drawer mat-sidenav",
        "[attr.tabIndex]": '(mode !== "side") ? "-1" : null',
        "[attr.align]": "null",
        "[class.mat-drawer-end]": 'position === "end"',
        "[class.mat-drawer-over]": 'mode === "over"',
        "[class.mat-drawer-push]": 'mode === "push"',
        "[class.mat-drawer-side]": 'mode === "side"',
        "[class.mat-sidenav-fixed]": "fixedInViewport",
        "[style.top.px]": "fixedInViewport ? fixedTopGap : null",
        "[style.bottom.px]": "fixedInViewport ? fixedBottomGap : null"
      },
      encapsulation: ViewEncapsulation.None,
      imports: [CdkScrollable],
      providers: [{
        provide: MatDrawer,
        useExisting: MatSidenav
      }],
      template: '<div class="mat-drawer-inner-container" cdkScrollable #content>\r\n  <ng-content></ng-content>\r\n</div>\r\n'
    }]
  }], null, {
    fixedInViewport: [{
      type: Input
    }],
    fixedTopGap: [{
      type: Input
    }],
    fixedBottomGap: [{
      type: Input
    }]
  });
})();
var MatSidenavContainer = class _MatSidenavContainer extends MatDrawerContainer {
  _allDrawers = void 0;
  _content = void 0;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatSidenavContainer_BaseFactory;
    return function MatSidenavContainer_Factory(__ngFactoryType__) {
      return (\u0275MatSidenavContainer_BaseFactory || (\u0275MatSidenavContainer_BaseFactory = \u0275\u0275getInheritedFactory(_MatSidenavContainer)))(__ngFactoryType__ || _MatSidenavContainer);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSidenavContainer,
    selectors: [["mat-sidenav-container"]],
    contentQueries: function MatSidenavContainer_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatSidenavContent, 5)(dirIndex, MatSidenav, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._content = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._allDrawers = _t);
      }
    },
    hostAttrs: [1, "mat-drawer-container", "mat-sidenav-container"],
    hostVars: 2,
    hostBindings: function MatSidenavContainer_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-drawer-container-explicit-backdrop", ctx._backdropOverride);
      }
    },
    exportAs: ["matSidenavContainer"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_DRAWER_CONTAINER,
      useExisting: _MatSidenavContainer
    }, {
      provide: MatDrawerContainer,
      useExisting: _MatSidenavContainer
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c3,
    decls: 4,
    vars: 2,
    consts: [[1, "mat-drawer-backdrop", 3, "mat-drawer-shown"], [1, "mat-drawer-backdrop", 3, "click"]],
    template: function MatSidenavContainer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c2);
        \u0275\u0275conditionalCreate(0, MatSidenavContainer_Conditional_0_Template, 1, 2, "div", 0);
        \u0275\u0275projection(1);
        \u0275\u0275projection(2, 1);
        \u0275\u0275conditionalCreate(3, MatSidenavContainer_Conditional_3_Template, 2, 0, "mat-sidenav-content");
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.hasBackdrop ? 0 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!ctx._content ? 3 : -1);
      }
    },
    dependencies: [MatSidenavContent],
    styles: [_c4],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSidenavContainer, [{
    type: Component,
    args: [{
      selector: "mat-sidenav-container",
      exportAs: "matSidenavContainer",
      host: {
        "class": "mat-drawer-container mat-sidenav-container",
        "[class.mat-drawer-container-explicit-backdrop]": "_backdropOverride"
      },
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: MAT_DRAWER_CONTAINER,
        useExisting: MatSidenavContainer
      }, {
        provide: MatDrawerContainer,
        useExisting: MatSidenavContainer
      }],
      imports: [MatSidenavContent],
      template: '@if (hasBackdrop) {\n  <div class="mat-drawer-backdrop" (click)="_onBackdropClicked()"\n       [class.mat-drawer-shown]="_isShowingBackdrop()"></div>\n}\n\n<ng-content select="mat-drawer, mat-sidenav"/>\n<ng-content select="mat-drawer-content, mat-sidenav-content"/>\n\n@if (!_content) {\n  <mat-sidenav-content>\n    <ng-content/>\n  </mat-sidenav-content>\n}\n',
      styles: [".mat-drawer-container {\n  position: relative;\n  z-index: 1;\n  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));\n  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));\n  box-sizing: border-box;\n  display: block;\n  overflow: hidden;\n}\n.mat-drawer-container[fullscreen] {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n}\n.mat-drawer-container[fullscreen].mat-drawer-container-has-open {\n  overflow: hidden;\n}\n.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {\n  z-index: 3;\n}\n.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,\n.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,\n.ng-animate-disabled .mat-drawer-container .mat-drawer-content {\n  transition: none;\n}\n\n.mat-drawer-backdrop {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  display: block;\n  z-index: 3;\n  visibility: hidden;\n}\n.mat-drawer-backdrop.mat-drawer-shown {\n  visibility: visible;\n  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));\n}\n.mat-drawer-transition .mat-drawer-backdrop {\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-property: background-color, visibility;\n}\n@media (forced-colors: active) {\n  .mat-drawer-backdrop {\n    opacity: 0.5;\n  }\n}\n\n.mat-drawer-content {\n  position: relative;\n  z-index: 1;\n  display: block;\n  height: 100%;\n  overflow: auto;\n}\n.mat-drawer-content.mat-drawer-content-hidden {\n  opacity: 0;\n}\n.mat-drawer-transition .mat-drawer-content {\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-property: transform, margin-left, margin-right;\n}\n\n.mat-drawer {\n  position: relative;\n  z-index: 4;\n  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));\n  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);\n  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));\n  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));\n  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));\n  width: var(--mat-sidenav-container-width, 360px);\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 3;\n  outline: 0;\n  box-sizing: border-box;\n  overflow-y: auto;\n  transform: translate3d(-100%, 0, 0);\n}\n@media (forced-colors: active) {\n  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {\n    border-right: solid 1px currentColor;\n  }\n}\n@media (forced-colors: active) {\n  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {\n    border-left: solid 1px currentColor;\n    border-right: none;\n  }\n}\n.mat-drawer.mat-drawer-side {\n  z-index: 2;\n}\n.mat-drawer.mat-drawer-end {\n  right: 0;\n  transform: translate3d(100%, 0, 0);\n  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));\n  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=rtl] .mat-drawer {\n  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));\n  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  transform: translate3d(100%, 0, 0);\n}\n[dir=rtl] .mat-drawer.mat-drawer-end {\n  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));\n  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  left: 0;\n  right: auto;\n  transform: translate3d(-100%, 0, 0);\n}\n.mat-drawer-transition .mat-drawer {\n  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {\n  visibility: hidden;\n  box-shadow: none;\n}\n.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {\n  display: none;\n}\n.mat-drawer.mat-drawer-opened.mat-drawer-opened {\n  transform: none;\n}\n\n.mat-drawer-side {\n  box-shadow: none;\n  border-right-color: var(--mat-sidenav-container-divider-color, transparent);\n  border-right-width: 1px;\n  border-right-style: solid;\n}\n.mat-drawer-side.mat-drawer-end {\n  border-left-color: var(--mat-sidenav-container-divider-color, transparent);\n  border-left-width: 1px;\n  border-left-style: solid;\n  border-right: none;\n}\n[dir=rtl] .mat-drawer-side {\n  border-left-color: var(--mat-sidenav-container-divider-color, transparent);\n  border-left-width: 1px;\n  border-left-style: solid;\n  border-right: none;\n}\n[dir=rtl] .mat-drawer-side.mat-drawer-end {\n  border-right-color: var(--mat-sidenav-container-divider-color, transparent);\n  border-right-width: 1px;\n  border-right-style: solid;\n  border-left: none;\n}\n\n.mat-drawer-inner-container {\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n}\n\n.mat-sidenav-fixed {\n  position: fixed;\n}\n"]
    }]
  }], null, {
    _allDrawers: [{
      type: ContentChildren,
      args: [MatSidenav, {
        descendants: true
      }]
    }],
    _content: [{
      type: ContentChild,
      args: [MatSidenavContent]
    }]
  });
})();
var MatSidenavModule = class _MatSidenavModule {
  static \u0275fac = function MatSidenavModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSidenavModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatSidenavModule,
    imports: [CdkScrollableModule, MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent],
    exports: [BidiModule, CdkScrollableModule, MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CdkScrollableModule, BidiModule, CdkScrollableModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSidenavModule, [{
    type: NgModule,
    args: [{
      imports: [CdkScrollableModule, MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent],
      exports: [BidiModule, CdkScrollableModule, MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/toolbar.mjs
var _c02 = ["*", [["mat-toolbar-row"]]];
var _c12 = ["*", "mat-toolbar-row"];
var MatToolbarRow = class _MatToolbarRow {
  static \u0275fac = function MatToolbarRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatToolbarRow)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatToolbarRow,
    selectors: [["mat-toolbar-row"]],
    hostAttrs: [1, "mat-toolbar-row"],
    exportAs: ["matToolbarRow"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatToolbarRow, [{
    type: Directive,
    args: [{
      selector: "mat-toolbar-row",
      exportAs: "matToolbarRow",
      host: {
        "class": "mat-toolbar-row"
      }
    }]
  }], null, null);
})();
var MatToolbar = class _MatToolbar {
  _elementRef = inject(ElementRef);
  _platform = inject(Platform);
  _document = inject(DOCUMENT);
  color;
  _toolbarRows;
  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      this._checkToolbarMixedModes();
      this._toolbarRows.changes.subscribe(() => this._checkToolbarMixedModes());
    }
  }
  _checkToolbarMixedModes() {
    if (this._toolbarRows.length && (typeof ngDevMode === "undefined" || ngDevMode)) {
      const isCombinedUsage = Array.from(this._elementRef.nativeElement.childNodes).filter((node) => !(node.classList && node.classList.contains("mat-toolbar-row"))).filter((node) => node.nodeType !== (this._document ? this._document.COMMENT_NODE : 8)).some((node) => !!(node.textContent && node.textContent.trim()));
      if (isCombinedUsage) {
        throwToolbarMixedModesError();
      }
    }
  }
  static \u0275fac = function MatToolbar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatToolbar)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatToolbar,
    selectors: [["mat-toolbar"]],
    contentQueries: function MatToolbar_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatToolbarRow, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._toolbarRows = _t);
      }
    },
    hostAttrs: [1, "mat-toolbar"],
    hostVars: 6,
    hostBindings: function MatToolbar_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.color ? "mat-" + ctx.color : "");
        \u0275\u0275classProp("mat-toolbar-multiple-rows", ctx._toolbarRows.length > 0)("mat-toolbar-single-row", ctx._toolbarRows.length === 0);
      }
    },
    inputs: {
      color: "color"
    },
    exportAs: ["matToolbar"],
    ngContentSelectors: _c12,
    decls: 2,
    vars: 0,
    template: function MatToolbar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c02);
        \u0275\u0275projection(0);
        \u0275\u0275projection(1, 1);
      }
    },
    styles: [".mat-toolbar {\n  background: var(--%NS%mat-toolbar-container-background-color, var(--%NS%mat-sys-surface));\n  color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));\n}\n.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {\n  font-family: var(--%NS%mat-toolbar-title-text-font, var(--%NS%mat-sys-title-large-font));\n  font-size: var(--%NS%mat-toolbar-title-text-size, var(--%NS%mat-sys-title-large-size));\n  line-height: var(--%NS%mat-toolbar-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));\n  font-weight: var(--%NS%mat-toolbar-title-text-weight, var(--%NS%mat-sys-title-large-weight));\n  letter-spacing: var(--%NS%mat-toolbar-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));\n  margin: 0;\n}\n@media (forced-colors: active) {\n  .mat-toolbar {\n    outline: solid 1px;\n  }\n}\n.mat-toolbar .mat-form-field-underline,\n.mat-toolbar .mat-form-field-ripple,\n.mat-toolbar .mat-focused .mat-form-field-ripple {\n  background-color: currentColor;\n}\n.mat-toolbar .mat-form-field-label,\n.mat-toolbar .mat-focused .mat-form-field-label,\n.mat-toolbar .mat-select-value,\n.mat-toolbar .mat-select-arrow,\n.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {\n  color: inherit;\n}\n.mat-toolbar .mat-input-element {\n  caret-color: currentColor;\n}\n.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {\n  --%NS%mat-button-text-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));\n  --%NS%mat-button-outlined-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));\n}\n\n.mat-toolbar-row, .mat-toolbar-single-row {\n  display: flex;\n  box-sizing: border-box;\n  padding: 0 16px;\n  width: 100%;\n  flex-direction: row;\n  align-items: center;\n  white-space: nowrap;\n  height: var(--%NS%mat-toolbar-standard-height, 64px);\n}\n@media (max-width: 599px) {\n  .mat-toolbar-row, .mat-toolbar-single-row {\n    height: var(--%NS%mat-toolbar-mobile-height, 56px);\n  }\n}\n\n.mat-toolbar-multiple-rows {\n  display: flex;\n  box-sizing: border-box;\n  flex-direction: column;\n  width: 100%;\n  min-height: var(--%NS%mat-toolbar-standard-height, 64px);\n}\n@media (max-width: 599px) {\n  .mat-toolbar-multiple-rows {\n    min-height: var(--%NS%mat-toolbar-mobile-height, 56px);\n  }\n}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatToolbar, [{
    type: Component,
    args: [{
      selector: "mat-toolbar",
      exportAs: "matToolbar",
      host: {
        "class": "mat-toolbar",
        "[class]": 'color ? "mat-" + color : ""',
        "[class.mat-toolbar-multiple-rows]": "_toolbarRows.length > 0",
        "[class.mat-toolbar-single-row]": "_toolbarRows.length === 0"
      },
      encapsulation: ViewEncapsulation.None,
      template: '<ng-content></ng-content>\n<ng-content select="mat-toolbar-row"></ng-content>\n',
      styles: [".mat-toolbar {\n  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));\n  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));\n}\n.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {\n  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));\n  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));\n  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));\n  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));\n  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));\n  margin: 0;\n}\n@media (forced-colors: active) {\n  .mat-toolbar {\n    outline: solid 1px;\n  }\n}\n.mat-toolbar .mat-form-field-underline,\n.mat-toolbar .mat-form-field-ripple,\n.mat-toolbar .mat-focused .mat-form-field-ripple {\n  background-color: currentColor;\n}\n.mat-toolbar .mat-form-field-label,\n.mat-toolbar .mat-focused .mat-form-field-label,\n.mat-toolbar .mat-select-value,\n.mat-toolbar .mat-select-arrow,\n.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {\n  color: inherit;\n}\n.mat-toolbar .mat-input-element {\n  caret-color: currentColor;\n}\n.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {\n  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));\n  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));\n}\n\n.mat-toolbar-row, .mat-toolbar-single-row {\n  display: flex;\n  box-sizing: border-box;\n  padding: 0 16px;\n  width: 100%;\n  flex-direction: row;\n  align-items: center;\n  white-space: nowrap;\n  height: var(--mat-toolbar-standard-height, 64px);\n}\n@media (max-width: 599px) {\n  .mat-toolbar-row, .mat-toolbar-single-row {\n    height: var(--mat-toolbar-mobile-height, 56px);\n  }\n}\n\n.mat-toolbar-multiple-rows {\n  display: flex;\n  box-sizing: border-box;\n  flex-direction: column;\n  width: 100%;\n  min-height: var(--mat-toolbar-standard-height, 64px);\n}\n@media (max-width: 599px) {\n  .mat-toolbar-multiple-rows {\n    min-height: var(--mat-toolbar-mobile-height, 56px);\n  }\n}\n"]
    }]
  }], null, {
    color: [{
      type: Input
    }],
    _toolbarRows: [{
      type: ContentChildren,
      args: [MatToolbarRow, {
        descendants: true
      }]
    }]
  });
})();
function throwToolbarMixedModesError() {
  throw Error("MatToolbar: Attempting to combine different toolbar modes. Either specify multiple `<mat-toolbar-row>` elements explicitly or just place content inside of a `<mat-toolbar>` for a single row.");
}
var MatToolbarModule = class _MatToolbarModule {
  static \u0275fac = function MatToolbarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatToolbarModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatToolbarModule,
    imports: [MatToolbar, MatToolbarRow],
    exports: [MatToolbar, MatToolbarRow, BidiModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatToolbarModule, [{
    type: NgModule,
    args: [{
      imports: [MatToolbar, MatToolbarRow],
      exports: [MatToolbar, MatToolbarRow, BidiModule]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/menu.mjs
var _c03 = [[["mat-icon"], ["", "matMenuItemIcon", ""]], "*"];
var _c13 = ["mat-icon, [matMenuItemIcon]", "*"];
function MatMenuItem_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 2);
    \u0275\u0275element(1, "polygon", 3);
    \u0275\u0275elementEnd();
  }
}
var _c22 = ["*"];
function MatMenu_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 0);
    \u0275\u0275domListener("click", function MatMenu_ng_template_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closed.emit("click"));
    })("animationstart", function MatMenu_ng_template_0_Template_div_animationstart_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._onAnimationStart($event.animationName));
    })("animationend", function MatMenu_ng_template_0_Template_div_animationend_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._onAnimationDone($event.animationName));
    })("animationcancel", function MatMenu_ng_template_0_Template_div_animationcancel_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._onAnimationDone($event.animationName));
    });
    \u0275\u0275domElementStart(1, "div", 1);
    \u0275\u0275projection(2);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1._classList);
    \u0275\u0275classProp("mat-menu-panel-animations-disabled", ctx_r1._animationsDisabled)("mat-menu-panel-exit-animation", ctx_r1._panelAnimationState === "void")("mat-menu-panel-animating", ctx_r1._isAnimating());
    \u0275\u0275domProperty("id", ctx_r1.panelId);
    \u0275\u0275attribute("aria-label", ctx_r1.ariaLabel || null)("aria-labelledby", ctx_r1.ariaLabelledby || null)("aria-describedby", ctx_r1.ariaDescribedby || null);
  }
}
var MAT_MENU_PANEL = new InjectionToken("MAT_MENU_PANEL");
var MatMenuItem = class _MatMenuItem {
  _elementRef = inject(ElementRef);
  _document = inject(DOCUMENT);
  _focusMonitor = inject(FocusMonitor);
  _parentMenu = inject(MAT_MENU_PANEL, {
    optional: true
  });
  _changeDetectorRef = inject(ChangeDetectorRef);
  role = "menuitem";
  disabled = false;
  disableRipple = false;
  _hovered = new Subject();
  _focused = new Subject();
  _highlighted = false;
  _triggersSubmenu = false;
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    this._parentMenu?.addItem?.(this);
  }
  focus(origin, options) {
    if (this._focusMonitor && origin) {
      this._focusMonitor.focusVia(this._getHostElement(), origin, options);
    } else {
      this._getHostElement().focus(options);
    }
    this._focused.next(this);
  }
  ngAfterViewInit() {
    if (this._focusMonitor) {
      this._focusMonitor.monitor(this._elementRef, false);
    }
  }
  ngOnDestroy() {
    if (this._focusMonitor) {
      this._focusMonitor.stopMonitoring(this._elementRef);
    }
    if (this._parentMenu && this._parentMenu.removeItem) {
      this._parentMenu.removeItem(this);
    }
    this._hovered.complete();
    this._focused.complete();
  }
  _getTabIndex() {
    return this.disabled ? "-1" : "0";
  }
  _getHostElement() {
    return this._elementRef.nativeElement;
  }
  _checkDisabled(event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  _handleMouseEnter() {
    this._hovered.next(this);
  }
  getLabel() {
    const clone = this._elementRef.nativeElement.cloneNode(true);
    const icons = clone.querySelectorAll("mat-icon, .material-icons");
    for (let i = 0; i < icons.length; i++) {
      icons[i].remove();
    }
    return clone.textContent?.trim() || "";
  }
  _setHighlighted(isHighlighted) {
    this._highlighted = isHighlighted;
    this._changeDetectorRef.markForCheck();
  }
  _setTriggersSubmenu(triggersSubmenu) {
    this._triggersSubmenu = triggersSubmenu;
    this._changeDetectorRef.markForCheck();
  }
  _hasFocus() {
    return this._document && this._document.activeElement === this._getHostElement();
  }
  static \u0275fac = function MatMenuItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatMenuItem)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatMenuItem,
    selectors: [["", "mat-menu-item", ""]],
    hostAttrs: [1, "mat-mdc-menu-item", "mat-focus-indicator"],
    hostVars: 8,
    hostBindings: function MatMenuItem_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function MatMenuItem_click_HostBindingHandler($event) {
          return ctx._checkDisabled($event);
        })("mouseenter", function MatMenuItem_mouseenter_HostBindingHandler() {
          return ctx._handleMouseEnter();
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx.role)("tabindex", ctx._getTabIndex())("aria-disabled", ctx.disabled)("disabled", ctx.disabled || null);
        \u0275\u0275classProp("mat-mdc-menu-item-highlighted", ctx._highlighted)("mat-mdc-menu-item-submenu-trigger", ctx._triggersSubmenu);
      }
    },
    inputs: {
      role: "role",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute]
    },
    exportAs: ["matMenuItem"],
    ngContentSelectors: _c13,
    decls: 5,
    vars: 3,
    consts: [[1, "mat-mdc-menu-item-text"], ["matRipple", "", 1, "mat-mdc-menu-ripple", 3, "matRippleDisabled", "matRippleTrigger"], ["viewBox", "0 0 5 10", "focusable", "false", "aria-hidden", "true", 1, "mat-mdc-menu-submenu-icon"], ["points", "0,0 5,5 0,10"]],
    template: function MatMenuItem_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c03);
        \u0275\u0275projection(0);
        \u0275\u0275elementStart(1, "span", 0);
        \u0275\u0275projection(2, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275element(3, "div", 1);
        \u0275\u0275conditionalCreate(4, MatMenuItem_Conditional_4_Template, 2, 0, ":svg:svg", 2);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleTrigger", ctx._getHostElement());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx._triggersSubmenu ? 4 : -1);
      }
    },
    dependencies: [MatRipple],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuItem, [{
    type: Component,
    args: [{
      selector: "[mat-menu-item]",
      exportAs: "matMenuItem",
      host: {
        "[attr.role]": "role",
        "class": "mat-mdc-menu-item mat-focus-indicator",
        "[class.mat-mdc-menu-item-highlighted]": "_highlighted",
        "[class.mat-mdc-menu-item-submenu-trigger]": "_triggersSubmenu",
        "[attr.tabindex]": "_getTabIndex()",
        "[attr.aria-disabled]": "disabled",
        "[attr.disabled]": "disabled || null",
        "(click)": "_checkDisabled($event)",
        "(mouseenter)": "_handleMouseEnter()"
      },
      encapsulation: ViewEncapsulation.None,
      imports: [MatRipple],
      template: '<ng-content select="mat-icon, [matMenuItemIcon]"></ng-content>\n<span class="mat-mdc-menu-item-text"><ng-content></ng-content></span>\n<div class="mat-mdc-menu-ripple" matRipple\n     [matRippleDisabled]="disableRipple || disabled"\n     [matRippleTrigger]="_getHostElement()">\n</div>\n\n@if (_triggersSubmenu) {\n     <svg\n       class="mat-mdc-menu-submenu-icon"\n       viewBox="0 0 5 10"\n       focusable="false"\n       aria-hidden="true"><polygon points="0,0 5,5 0,10"/></svg>\n}\n'
    }]
  }], () => [], {
    role: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
function throwMatMenuInvalidPositionX() {
  throw Error(`xPosition value must be either 'before' or after'.
      Example: <mat-menu xPosition="before" #menu="matMenu"></mat-menu>`);
}
function throwMatMenuInvalidPositionY() {
  throw Error(`yPosition value must be either 'above' or below'.
      Example: <mat-menu yPosition="above" #menu="matMenu"></mat-menu>`);
}
function throwMatMenuRecursiveError() {
  throw Error(`matMenuTriggerFor: menu cannot contain its own trigger. Assign a menu that is not a parent of the trigger or move the trigger outside of the menu.`);
}
var MAT_MENU_CONTENT = new InjectionToken("MatMenuContent");
var MatMenuContent = class _MatMenuContent {
  _template = inject(TemplateRef);
  _appRef = inject(ApplicationRef);
  _injector = inject(Injector);
  _viewContainerRef = inject(ViewContainerRef);
  _document = inject(DOCUMENT);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _portal;
  _outlet;
  _attached = new Subject();
  attach(context = {}) {
    if (!this._portal) {
      this._portal = new TemplatePortal(this._template, this._viewContainerRef);
    }
    this.detach();
    if (!this._outlet) {
      this._outlet = new DomPortalOutlet(this._document.createElement("div"), this._appRef, this._injector);
    }
    const element = this._template.elementRef.nativeElement;
    element.parentNode.insertBefore(this._outlet.outletElement, element);
    this._changeDetectorRef.markForCheck();
    this._portal.attach(this._outlet, context);
    this._attached.next();
  }
  detach() {
    if (this._portal?.isAttached) {
      this._portal.detach();
    }
  }
  ngOnDestroy() {
    this.detach();
    this._outlet?.dispose();
  }
  static \u0275fac = function MatMenuContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatMenuContent)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatMenuContent,
    selectors: [["ng-template", "matMenuContent", ""]],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_MENU_CONTENT,
      useExisting: _MatMenuContent
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuContent, [{
    type: Directive,
    args: [{
      selector: "ng-template[matMenuContent]",
      providers: [{
        provide: MAT_MENU_CONTENT,
        useExisting: MatMenuContent
      }]
    }]
  }], null, null);
})();
var MAT_MENU_DEFAULT_OPTIONS = new InjectionToken("mat-menu-default-options", {
  providedIn: "root",
  factory: () => ({
    overlapTrigger: false,
    xPosition: "after",
    yPosition: "below",
    backdropClass: "cdk-overlay-transparent-backdrop"
  })
});
var ENTER_ANIMATION = "_mat-menu-enter";
var EXIT_ANIMATION = "_mat-menu-exit";
var MatMenu = class _MatMenu {
  _elementRef = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _injector = inject(Injector);
  _keyManager;
  _xPosition;
  _yPosition;
  _firstItemFocusRef;
  _exitFallbackTimeout;
  _animationsDisabled = _animationsDisabled();
  _allItems;
  _directDescendantItems = new QueryList();
  _classList = {};
  _panelAnimationState = "void";
  _animationDone = new Subject();
  _isAnimating = signal(false, ...ngDevMode ? [{
    debugName: "_isAnimating"
  }] : []);
  parentMenu;
  direction;
  overlayPanelClass;
  backdropClass;
  ariaLabel;
  ariaLabelledby;
  ariaDescribedby;
  get xPosition() {
    return this._xPosition;
  }
  set xPosition(value) {
    if (value !== "before" && value !== "after" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwMatMenuInvalidPositionX();
    }
    this._xPosition = value;
    this.setPositionClasses();
  }
  get yPosition() {
    return this._yPosition;
  }
  set yPosition(value) {
    if (value !== "above" && value !== "below" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwMatMenuInvalidPositionY();
    }
    this._yPosition = value;
    this.setPositionClasses();
  }
  templateRef;
  items;
  lazyContent;
  overlapTrigger = false;
  hasBackdrop;
  get panelClass() {
    return this._previousPanelClass;
  }
  set panelClass(classes) {
    const previousPanelClass = this._previousPanelClass;
    const newClassList = __spreadValues({}, this._classList);
    if (previousPanelClass && previousPanelClass.length) {
      previousPanelClass.split(" ").forEach((className) => {
        newClassList[className] = false;
      });
    }
    this._previousPanelClass = classes;
    if (classes && classes.length) {
      classes.split(" ").forEach((className) => {
        newClassList[className] = true;
      });
      this._elementRef.nativeElement.className = "";
    }
    this._classList = newClassList;
  }
  _previousPanelClass = "";
  get classList() {
    return this.panelClass;
  }
  set classList(classes) {
    this.panelClass = classes;
  }
  closed = new EventEmitter();
  close = this.closed;
  panelId = inject(_IdGenerator).getId("mat-menu-panel-");
  constructor() {
    const defaultOptions = inject(MAT_MENU_DEFAULT_OPTIONS);
    this.overlayPanelClass = defaultOptions.overlayPanelClass || "";
    this._xPosition = defaultOptions.xPosition;
    this._yPosition = defaultOptions.yPosition;
    this.backdropClass = defaultOptions.backdropClass;
    this.overlapTrigger = defaultOptions.overlapTrigger;
    this.hasBackdrop = defaultOptions.hasBackdrop;
  }
  ngOnInit() {
    this.setPositionClasses();
  }
  ngAfterContentInit() {
    this._updateDirectDescendants();
    this._keyManager = new FocusKeyManager(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd();
    this._keyManager.tabOut.subscribe(() => this.closed.emit("tab"));
    this._directDescendantItems.changes.pipe(startWith(this._directDescendantItems), switchMap((items) => merge(...items.map((item) => item._focused)))).subscribe((focusedItem) => this._keyManager.updateActiveItem(focusedItem));
    this._directDescendantItems.changes.subscribe((itemsList) => {
      const manager = this._keyManager;
      if (this._panelAnimationState === "enter" && manager.activeItem?._hasFocus()) {
        const items = itemsList.toArray();
        const index = Math.max(0, Math.min(items.length - 1, manager.activeItemIndex || 0));
        if (items[index] && !items[index].disabled) {
          manager.setActiveItem(index);
        } else {
          manager.setNextItemActive();
        }
      }
    });
  }
  ngOnDestroy() {
    this._keyManager?.destroy();
    this._directDescendantItems.destroy();
    this.closed.complete();
    this._firstItemFocusRef?.destroy();
    clearTimeout(this._exitFallbackTimeout);
  }
  _hovered() {
    const itemChanges = this._directDescendantItems.changes;
    return itemChanges.pipe(startWith(this._directDescendantItems), switchMap((items) => merge(...items.map((item) => item._hovered))));
  }
  addItem(_item) {
  }
  removeItem(_item) {
  }
  _handleKeydown(event) {
    const keyCode = event.keyCode;
    const manager = this._keyManager;
    switch (keyCode) {
      case ESCAPE:
        if (!hasModifierKey(event)) {
          event.preventDefault();
          this.closed.emit("keydown");
        }
        break;
      case LEFT_ARROW:
        if (this.parentMenu && this.direction === "ltr") {
          this.closed.emit("keydown");
        }
        break;
      case RIGHT_ARROW:
        if (this.parentMenu && this.direction === "rtl") {
          this.closed.emit("keydown");
        }
        break;
      default:
        if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
          manager.setFocusOrigin("keyboard");
        }
        manager.onKeydown(event);
        return;
    }
  }
  focusFirstItem(origin = "program") {
    this._firstItemFocusRef?.destroy();
    this._firstItemFocusRef = afterNextRender(() => {
      const menuPanel = this._resolvePanel();
      if (!menuPanel || !menuPanel.contains(document.activeElement)) {
        const manager = this._keyManager;
        manager.setFocusOrigin(origin).setFirstItemActive();
        if (!manager.activeItem && menuPanel) {
          menuPanel.focus();
        }
      }
    }, {
      injector: this._injector
    });
  }
  resetActiveItem() {
    this._keyManager.setActiveItem(-1);
  }
  setElevation(_depth) {
  }
  setPositionClasses(posX = this.xPosition, posY = this.yPosition) {
    this._classList = __spreadProps(__spreadValues({}, this._classList), {
      ["mat-menu-before"]: posX === "before",
      ["mat-menu-after"]: posX === "after",
      ["mat-menu-above"]: posY === "above",
      ["mat-menu-below"]: posY === "below"
    });
    this._changeDetectorRef.markForCheck();
  }
  _onAnimationDone(state) {
    const isExit = state === EXIT_ANIMATION;
    if (isExit || state === ENTER_ANIMATION) {
      if (isExit) {
        clearTimeout(this._exitFallbackTimeout);
        this._exitFallbackTimeout = void 0;
      }
      this._animationDone.next(isExit ? "void" : "enter");
      this._isAnimating.set(false);
    }
  }
  _onAnimationStart(state) {
    if (state === ENTER_ANIMATION || state === EXIT_ANIMATION) {
      this._isAnimating.set(true);
    }
  }
  _setIsOpen(isOpen) {
    this._panelAnimationState = isOpen ? "enter" : "void";
    if (isOpen) {
      if (this._keyManager.activeItemIndex === 0) {
        const menuPanel = this._resolvePanel();
        if (menuPanel) {
          menuPanel.scrollTop = 0;
        }
      }
    } else if (!this._animationsDisabled) {
      this._exitFallbackTimeout = setTimeout(() => this._onAnimationDone(EXIT_ANIMATION), 200);
    }
    if (this._animationsDisabled) {
      setTimeout(() => {
        this._onAnimationDone(isOpen ? ENTER_ANIMATION : EXIT_ANIMATION);
      });
    }
    this._changeDetectorRef.markForCheck();
  }
  _updateDirectDescendants() {
    this._allItems.changes.pipe(startWith(this._allItems)).subscribe((items) => {
      this._directDescendantItems.reset(items.filter((item) => item._parentMenu === this));
      this._directDescendantItems.notifyOnChanges();
    });
  }
  _resolvePanel() {
    let menuPanel = null;
    if (this._directDescendantItems.length) {
      menuPanel = this._directDescendantItems.first._getHostElement().closest('[role="menu"]');
    }
    return menuPanel;
  }
  static \u0275fac = function MatMenu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatMenu)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatMenu,
    selectors: [["mat-menu"]],
    contentQueries: function MatMenu_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MAT_MENU_CONTENT, 5)(dirIndex, MatMenuItem, 5)(dirIndex, MatMenuItem, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.lazyContent = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._allItems = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.items = _t);
      }
    },
    viewQuery: function MatMenu_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(TemplateRef, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templateRef = _t.first);
      }
    },
    hostVars: 3,
    hostBindings: function MatMenu_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-label", null)("aria-labelledby", null)("aria-describedby", null);
      }
    },
    inputs: {
      backdropClass: "backdropClass",
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
      xPosition: "xPosition",
      yPosition: "yPosition",
      overlapTrigger: [2, "overlapTrigger", "overlapTrigger", booleanAttribute],
      hasBackdrop: [2, "hasBackdrop", "hasBackdrop", (value) => value == null ? null : booleanAttribute(value)],
      panelClass: [0, "class", "panelClass"],
      classList: "classList"
    },
    outputs: {
      closed: "closed",
      close: "close"
    },
    exportAs: ["matMenu"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_MENU_PANEL,
      useExisting: _MatMenu
    }])],
    ngContentSelectors: _c22,
    decls: 1,
    vars: 0,
    consts: [["tabindex", "-1", "role", "menu", 1, "mat-mdc-menu-panel", 3, "click", "animationstart", "animationend", "animationcancel", "id"], [1, "mat-mdc-menu-content"]],
    template: function MatMenu_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domTemplate(0, MatMenu_ng_template_0_Template, 3, 12, "ng-template");
      }
    },
    styles: ['mat-menu {\n  display: none;\n}\n\n.mat-mdc-menu-content {\n  margin: 0;\n  padding: 8px 0;\n  outline: 0;\n}\n.mat-mdc-menu-content,\n.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  flex: 1;\n  white-space: normal;\n  font-family: var(--%NS%mat-menu-item-label-text-font, var(--%NS%mat-sys-label-large-font));\n  line-height: var(--%NS%mat-menu-item-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));\n  font-size: var(--%NS%mat-menu-item-label-text-size, var(--%NS%mat-sys-label-large-size));\n  letter-spacing: var(--%NS%mat-menu-item-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));\n  font-weight: var(--%NS%mat-menu-item-label-text-weight, var(--%NS%mat-sys-label-large-weight));\n}\n\n@keyframes _mat-menu-enter {\n  from {\n    opacity: 0;\n    transform: scale(0.8);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes _mat-menu-exit {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n.mat-mdc-menu-panel {\n  min-width: 112px;\n  max-width: 280px;\n  overflow: auto;\n  box-sizing: border-box;\n  outline: 0;\n  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);\n  border-radius: var(--%NS%mat-menu-container-shape, var(--%NS%mat-sys-corner-extra-small));\n  background-color: var(--%NS%mat-menu-container-color, var(--%NS%mat-sys-surface-container));\n  box-shadow: var(--%NS%mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));\n  will-change: transform, opacity;\n}\n.mat-mdc-menu-panel.mat-menu-panel-exit-animation {\n  animation: _mat-menu-exit 100ms 25ms linear forwards;\n}\n.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {\n  animation: none;\n}\n.mat-mdc-menu-panel.mat-menu-panel-animating {\n  pointer-events: none;\n}\n.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {\n  display: none;\n}\n@media (forced-colors: active) {\n  .mat-mdc-menu-panel {\n    outline: solid 1px;\n  }\n}\n.mat-mdc-menu-panel .mat-divider {\n  border-top-color: var(--%NS%mat-menu-divider-color, var(--%NS%mat-sys-surface-variant));\n  margin-bottom: var(--%NS%mat-menu-divider-bottom-spacing, 8px);\n  margin-top: var(--%NS%mat-menu-divider-top-spacing, 8px);\n}\n\n.mat-mdc-menu-item {\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: flex-start;\n  overflow: hidden;\n  padding: 0;\n  cursor: pointer;\n  width: 100%;\n  text-align: left;\n  box-sizing: border-box;\n  color: inherit;\n  font-size: inherit;\n  background: none;\n  text-decoration: none;\n  margin: 0;\n  min-height: 48px;\n  padding-left: var(--%NS%mat-menu-item-leading-spacing, 12px);\n  padding-right: var(--%NS%mat-menu-item-trailing-spacing, 12px);\n  -webkit-user-select: none;\n  user-select: none;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-menu-item::-moz-focus-inner {\n  border: 0;\n}\n[dir=rtl] .mat-mdc-menu-item {\n  padding-left: var(--%NS%mat-menu-item-trailing-spacing, 12px);\n  padding-right: var(--%NS%mat-menu-item-leading-spacing, 12px);\n}\n.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {\n  padding-left: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);\n  padding-right: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);\n}\n[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {\n  padding-left: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);\n  padding-right: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);\n}\n.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {\n  color: var(--%NS%mat-menu-item-label-text-color, var(--%NS%mat-sys-on-surface));\n}\n.mat-mdc-menu-item .mat-icon-no-color,\n.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {\n  color: var(--%NS%mat-menu-item-icon-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mat-mdc-menu-item[disabled] {\n  cursor: default;\n  opacity: 0.38;\n}\n.mat-mdc-menu-item[disabled]::after {\n  display: block;\n  position: absolute;\n  content: "";\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.mat-mdc-menu-item:focus {\n  outline: 0;\n}\n.mat-mdc-menu-item .mat-icon {\n  flex-shrink: 0;\n  margin-right: var(--%NS%mat-menu-item-spacing, 12px);\n  height: var(--%NS%mat-menu-item-icon-size, 24px);\n  width: var(--%NS%mat-menu-item-icon-size, 24px);\n}\n[dir=rtl] .mat-mdc-menu-item {\n  text-align: right;\n}\n[dir=rtl] .mat-mdc-menu-item .mat-icon {\n  margin-right: 0;\n  margin-left: var(--%NS%mat-menu-item-spacing, 12px);\n}\n.mat-mdc-menu-item:not([disabled]):hover {\n  background-color: var(--%NS%mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));\n}\n.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {\n  background-color: var(--%NS%mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));\n}\n@media (forced-colors: active) {\n  .mat-mdc-menu-item {\n    margin-top: 1px;\n  }\n}\n\n.mat-mdc-menu-submenu-icon {\n  width: var(--%NS%mat-menu-item-icon-size, 24px);\n  height: 10px;\n  fill: currentColor;\n  padding-left: var(--%NS%mat-menu-item-spacing, 12px);\n}\n[dir=rtl] .mat-mdc-menu-submenu-icon {\n  padding-right: var(--%NS%mat-menu-item-spacing, 12px);\n  padding-left: 0;\n}\n[dir=rtl] .mat-mdc-menu-submenu-icon polygon {\n  transform: scaleX(-1);\n  transform-origin: center;\n}\n@media (forced-colors: active) {\n  .mat-mdc-menu-submenu-icon {\n    fill: CanvasText;\n  }\n}\n\n.mat-mdc-menu-item .mat-mdc-menu-ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n}\n'],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenu, [{
    type: Component,
    args: [{
      selector: "mat-menu",
      encapsulation: ViewEncapsulation.None,
      exportAs: "matMenu",
      host: {
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[attr.aria-describedby]": "null"
      },
      providers: [{
        provide: MAT_MENU_PANEL,
        useExisting: MatMenu
      }],
      template: `<ng-template>
  <div
    class="mat-mdc-menu-panel"
    [id]="panelId"
    [class]="_classList"
    [class.mat-menu-panel-animations-disabled]="_animationsDisabled"
    [class.mat-menu-panel-exit-animation]="_panelAnimationState === 'void'"
    [class.mat-menu-panel-animating]="_isAnimating()"
    (click)="closed.emit('click')"
    tabindex="-1"
    role="menu"
    (animationstart)="_onAnimationStart($event.animationName)"
    (animationend)="_onAnimationDone($event.animationName)"
    (animationcancel)="_onAnimationDone($event.animationName)"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="ariaLabelledby || null"
    [attr.aria-describedby]="ariaDescribedby || null">
    <div class="mat-mdc-menu-content">
      <ng-content></ng-content>
    </div>
  </div>
</ng-template>
`,
      styles: ['mat-menu {\n  display: none;\n}\n\n.mat-mdc-menu-content {\n  margin: 0;\n  padding: 8px 0;\n  outline: 0;\n}\n.mat-mdc-menu-content,\n.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  flex: 1;\n  white-space: normal;\n  font-family: var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));\n  line-height: var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));\n  font-size: var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));\n  letter-spacing: var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));\n  font-weight: var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight));\n}\n\n@keyframes _mat-menu-enter {\n  from {\n    opacity: 0;\n    transform: scale(0.8);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes _mat-menu-exit {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n.mat-mdc-menu-panel {\n  min-width: 112px;\n  max-width: 280px;\n  overflow: auto;\n  box-sizing: border-box;\n  outline: 0;\n  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);\n  border-radius: var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));\n  background-color: var(--mat-menu-container-color, var(--mat-sys-surface-container));\n  box-shadow: var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));\n  will-change: transform, opacity;\n}\n.mat-mdc-menu-panel.mat-menu-panel-exit-animation {\n  animation: _mat-menu-exit 100ms 25ms linear forwards;\n}\n.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {\n  animation: none;\n}\n.mat-mdc-menu-panel.mat-menu-panel-animating {\n  pointer-events: none;\n}\n.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {\n  display: none;\n}\n@media (forced-colors: active) {\n  .mat-mdc-menu-panel {\n    outline: solid 1px;\n  }\n}\n.mat-mdc-menu-panel .mat-divider {\n  border-top-color: var(--mat-menu-divider-color, var(--mat-sys-surface-variant));\n  margin-bottom: var(--mat-menu-divider-bottom-spacing, 8px);\n  margin-top: var(--mat-menu-divider-top-spacing, 8px);\n}\n\n.mat-mdc-menu-item {\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: flex-start;\n  overflow: hidden;\n  padding: 0;\n  cursor: pointer;\n  width: 100%;\n  text-align: left;\n  box-sizing: border-box;\n  color: inherit;\n  font-size: inherit;\n  background: none;\n  text-decoration: none;\n  margin: 0;\n  min-height: 48px;\n  padding-left: var(--mat-menu-item-leading-spacing, 12px);\n  padding-right: var(--mat-menu-item-trailing-spacing, 12px);\n  -webkit-user-select: none;\n  user-select: none;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-menu-item::-moz-focus-inner {\n  border: 0;\n}\n[dir=rtl] .mat-mdc-menu-item {\n  padding-left: var(--mat-menu-item-trailing-spacing, 12px);\n  padding-right: var(--mat-menu-item-leading-spacing, 12px);\n}\n.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {\n  padding-left: var(--mat-menu-item-with-icon-leading-spacing, 12px);\n  padding-right: var(--mat-menu-item-with-icon-trailing-spacing, 12px);\n}\n[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {\n  padding-left: var(--mat-menu-item-with-icon-trailing-spacing, 12px);\n  padding-right: var(--mat-menu-item-with-icon-leading-spacing, 12px);\n}\n.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {\n  color: var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-menu-item .mat-icon-no-color,\n.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {\n  color: var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-menu-item[disabled] {\n  cursor: default;\n  opacity: 0.38;\n}\n.mat-mdc-menu-item[disabled]::after {\n  display: block;\n  position: absolute;\n  content: "";\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.mat-mdc-menu-item:focus {\n  outline: 0;\n}\n.mat-mdc-menu-item .mat-icon {\n  flex-shrink: 0;\n  margin-right: var(--mat-menu-item-spacing, 12px);\n  height: var(--mat-menu-item-icon-size, 24px);\n  width: var(--mat-menu-item-icon-size, 24px);\n}\n[dir=rtl] .mat-mdc-menu-item {\n  text-align: right;\n}\n[dir=rtl] .mat-mdc-menu-item .mat-icon {\n  margin-right: 0;\n  margin-left: var(--mat-menu-item-spacing, 12px);\n}\n.mat-mdc-menu-item:not([disabled]):hover {\n  background-color: var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));\n}\n.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {\n  background-color: var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));\n}\n@media (forced-colors: active) {\n  .mat-mdc-menu-item {\n    margin-top: 1px;\n  }\n}\n\n.mat-mdc-menu-submenu-icon {\n  width: var(--mat-menu-item-icon-size, 24px);\n  height: 10px;\n  fill: currentColor;\n  padding-left: var(--mat-menu-item-spacing, 12px);\n}\n[dir=rtl] .mat-mdc-menu-submenu-icon {\n  padding-right: var(--mat-menu-item-spacing, 12px);\n  padding-left: 0;\n}\n[dir=rtl] .mat-mdc-menu-submenu-icon polygon {\n  transform: scaleX(-1);\n  transform-origin: center;\n}\n@media (forced-colors: active) {\n  .mat-mdc-menu-submenu-icon {\n    fill: CanvasText;\n  }\n}\n\n.mat-mdc-menu-item .mat-mdc-menu-ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n}\n']
    }]
  }], () => [], {
    _allItems: [{
      type: ContentChildren,
      args: [MatMenuItem, {
        descendants: true
      }]
    }],
    backdropClass: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    xPosition: [{
      type: Input
    }],
    yPosition: [{
      type: Input
    }],
    templateRef: [{
      type: ViewChild,
      args: [TemplateRef]
    }],
    items: [{
      type: ContentChildren,
      args: [MatMenuItem, {
        descendants: false
      }]
    }],
    lazyContent: [{
      type: ContentChild,
      args: [MAT_MENU_CONTENT]
    }],
    overlapTrigger: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hasBackdrop: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? null : booleanAttribute(value)
      }]
    }],
    panelClass: [{
      type: Input,
      args: ["class"]
    }],
    classList: [{
      type: Input
    }],
    closed: [{
      type: Output
    }],
    close: [{
      type: Output
    }]
  });
})();
var MAT_MENU_SCROLL_STRATEGY = new InjectionToken("mat-menu-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const injector = inject(Injector);
    return () => createRepositionScrollStrategy(injector);
  }
});
var PANELS_TO_TRIGGERS = /* @__PURE__ */ new WeakMap();
var MatMenuTriggerBase = class _MatMenuTriggerBase {
  _canHaveBackdrop;
  _element = inject(ElementRef);
  _viewContainerRef = inject(ViewContainerRef);
  _menuItemInstance = inject(MatMenuItem, {
    optional: true,
    self: true
  });
  _dir = inject(Directionality, {
    optional: true
  });
  _focusMonitor = inject(FocusMonitor);
  _ngZone = inject(NgZone);
  _injector = inject(Injector);
  _scrollStrategy = inject(MAT_MENU_SCROLL_STRATEGY);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _animationsDisabled = _animationsDisabled();
  _portal;
  _overlayRef = null;
  _menuOpen = false;
  _closingActionsSubscription = Subscription.EMPTY;
  _menuCloseSubscription = Subscription.EMPTY;
  _pendingRemoval;
  _parentMaterialMenu;
  _parentInnerPadding;
  _openedBy = void 0;
  get _menu() {
    return this._menuInternal;
  }
  set _menu(menu) {
    if (menu === this._menuInternal) {
      return;
    }
    this._menuInternal = menu;
    this._menuCloseSubscription.unsubscribe();
    if (menu) {
      if (menu === this._parentMaterialMenu && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throwMatMenuRecursiveError();
      }
      this._menuCloseSubscription = menu.close.subscribe((reason) => {
        this._destroyMenu(reason);
        if ((reason === "click" || reason === "tab") && this._parentMaterialMenu) {
          this._parentMaterialMenu.closed.emit(reason);
        }
      });
    } else {
      this._destroyMenu();
    }
    this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu());
  }
  _menuInternal = null;
  constructor(_canHaveBackdrop) {
    this._canHaveBackdrop = _canHaveBackdrop;
    const parentMenu = inject(MAT_MENU_PANEL, {
      optional: true
    });
    this._parentMaterialMenu = parentMenu instanceof MatMenu ? parentMenu : void 0;
  }
  ngOnDestroy() {
    if (this._menu && this._ownsMenu(this._menu)) {
      PANELS_TO_TRIGGERS.delete(this._menu);
    }
    this._pendingRemoval?.unsubscribe();
    this._menuCloseSubscription.unsubscribe();
    this._closingActionsSubscription.unsubscribe();
    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._overlayRef = null;
    }
  }
  get menuOpen() {
    return this._menuOpen;
  }
  get dir() {
    return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
  }
  _triggersSubmenu() {
    return !!(this._menuItemInstance && this._parentMaterialMenu && this._menu);
  }
  _closeMenu() {
    this._menu?.close.emit();
  }
  _openMenu(autoFocus) {
    if (this._triggerIsAriaDisabled()) {
      return;
    }
    const menu = this._menu;
    if (this._menuOpen || !menu) {
      return;
    }
    this._pendingRemoval?.unsubscribe();
    const previousTrigger = PANELS_TO_TRIGGERS.get(menu);
    PANELS_TO_TRIGGERS.set(menu, this);
    if (previousTrigger && previousTrigger !== this) {
      previousTrigger._closeMenu();
    }
    const overlayRef = this._createOverlay(menu);
    const overlayConfig = overlayRef.getConfig();
    const positionStrategy = overlayConfig.positionStrategy;
    this._setPosition(menu, positionStrategy);
    if (this._canHaveBackdrop) {
      overlayConfig.hasBackdrop = menu.hasBackdrop == null ? !this._triggersSubmenu() : menu.hasBackdrop;
    } else {
      overlayConfig.hasBackdrop = menu.hasBackdrop ?? false;
    }
    if (!overlayRef.hasAttached()) {
      overlayRef.attach(this._getPortal(menu));
      menu.lazyContent?.attach(this.menuData);
    }
    this._closingActionsSubscription = this._menuClosingActions().subscribe(() => this._closeMenu());
    menu.parentMenu = this._triggersSubmenu() ? this._parentMaterialMenu : void 0;
    menu.direction = this.dir;
    if (autoFocus) {
      menu.focusFirstItem(this._openedBy || "program");
    }
    this._setIsMenuOpen(true);
    if (menu instanceof MatMenu) {
      menu._setIsOpen(true);
      menu._directDescendantItems.changes.pipe(takeUntil(menu.close)).subscribe(() => {
        positionStrategy.withLockedPosition(false).reapplyLastPosition();
        positionStrategy.withLockedPosition(true);
      });
    }
  }
  focus(origin, options) {
    if (this._focusMonitor && origin) {
      this._focusMonitor.focusVia(this._element, origin, options);
    } else {
      this._element.nativeElement.focus(options);
    }
  }
  _destroyMenu(reason) {
    const overlayRef = this._overlayRef;
    const menu = this._menu;
    if (!overlayRef || !this.menuOpen) {
      return;
    }
    this._closingActionsSubscription.unsubscribe();
    this._pendingRemoval?.unsubscribe();
    if (menu instanceof MatMenu && this._ownsMenu(menu)) {
      this._pendingRemoval = menu._animationDone.pipe(take(1)).subscribe(() => {
        overlayRef.detach();
        if (!PANELS_TO_TRIGGERS.has(menu)) {
          menu.lazyContent?.detach();
        }
      });
      menu._setIsOpen(false);
    } else {
      overlayRef.detach();
      menu?.lazyContent?.detach();
    }
    if (menu && this._ownsMenu(menu)) {
      PANELS_TO_TRIGGERS.delete(menu);
    }
    if (this.restoreFocus && (reason === "keydown" || !this._openedBy || !this._triggersSubmenu())) {
      this.focus(this._openedBy);
    }
    this._openedBy = void 0;
    this._setIsMenuOpen(false);
  }
  _setIsMenuOpen(isOpen) {
    if (isOpen !== this._menuOpen) {
      this._menuOpen = isOpen;
      this._menuOpen ? this.menuOpened.emit() : this.menuClosed.emit();
      if (this._triggersSubmenu()) {
        this._menuItemInstance._setHighlighted(isOpen);
      }
      this._changeDetectorRef.markForCheck();
    }
  }
  _createOverlay(menu) {
    if (!this._overlayRef) {
      const config = this._getOverlayConfig(menu);
      this._subscribeToPositions(menu, config.positionStrategy);
      this._overlayRef = createOverlayRef(this._injector, config);
      this._overlayRef.keydownEvents().subscribe((event) => {
        if (this._menu instanceof MatMenu) {
          this._menu._handleKeydown(event);
        }
      });
    }
    return this._overlayRef;
  }
  _getOverlayConfig(menu) {
    return new OverlayConfig({
      positionStrategy: createFlexibleConnectedPositionStrategy(this._injector, this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),
      backdropClass: menu.backdropClass || "cdk-overlay-transparent-backdrop",
      panelClass: menu.overlayPanelClass,
      scrollStrategy: this._scrollStrategy(),
      direction: this._dir || "ltr",
      disableAnimations: this._animationsDisabled
    });
  }
  _subscribeToPositions(menu, position) {
    if (menu.setPositionClasses) {
      position.positionChanges.subscribe((change) => {
        this._ngZone.run(() => {
          const posX = change.connectionPair.overlayX === "start" ? "after" : "before";
          const posY = change.connectionPair.overlayY === "top" ? "below" : "above";
          menu.setPositionClasses(posX, posY);
        });
      });
    }
  }
  _setPosition(menu, positionStrategy) {
    let [originX, originFallbackX] = menu.xPosition === "before" ? ["end", "start"] : ["start", "end"];
    let [overlayY, overlayFallbackY] = menu.yPosition === "above" ? ["bottom", "top"] : ["top", "bottom"];
    let [originY, originFallbackY] = [overlayY, overlayFallbackY];
    let [overlayX, overlayFallbackX] = [originX, originFallbackX];
    let offsetY = 0;
    if (this._triggersSubmenu()) {
      overlayFallbackX = originX = menu.xPosition === "before" ? "start" : "end";
      originFallbackX = overlayX = originX === "end" ? "start" : "end";
      if (this._parentMaterialMenu) {
        if (this._parentInnerPadding == null) {
          const firstItem = this._parentMaterialMenu.items.first;
          this._parentInnerPadding = firstItem ? firstItem._getHostElement().offsetTop : 0;
        }
        offsetY = overlayY === "bottom" ? this._parentInnerPadding : -this._parentInnerPadding;
      }
    } else if (!menu.overlapTrigger) {
      originY = overlayY === "top" ? "bottom" : "top";
      originFallbackY = overlayFallbackY === "top" ? "bottom" : "top";
    }
    positionStrategy.withPositions([{
      originX,
      originY,
      overlayX,
      overlayY,
      offsetY
    }, {
      originX: originFallbackX,
      originY,
      overlayX: overlayFallbackX,
      overlayY,
      offsetY
    }, {
      originX,
      originY: originFallbackY,
      overlayX,
      overlayY: overlayFallbackY,
      offsetY: -offsetY
    }, {
      originX: originFallbackX,
      originY: originFallbackY,
      overlayX: overlayFallbackX,
      overlayY: overlayFallbackY,
      offsetY: -offsetY
    }]);
  }
  _menuClosingActions() {
    const outsideClicks = this._getOutsideClickStream(this._overlayRef);
    const detachments = this._overlayRef.detachments();
    const parentClose = this._parentMaterialMenu ? this._parentMaterialMenu.closed : of();
    const hover = this._parentMaterialMenu ? this._parentMaterialMenu._hovered().pipe(filter((active) => this._menuOpen && active !== this._menuItemInstance)) : of();
    return merge(outsideClicks, parentClose, hover, detachments);
  }
  _getPortal(menu) {
    if (!this._portal || this._portal.templateRef !== menu.templateRef) {
      this._portal = new TemplatePortal(menu.templateRef, this._viewContainerRef);
    }
    return this._portal;
  }
  _ownsMenu(menu) {
    return PANELS_TO_TRIGGERS.get(menu) === this;
  }
  _triggerIsAriaDisabled() {
    return booleanAttribute(this._element.nativeElement.getAttribute("aria-disabled"));
  }
  static \u0275fac = function MatMenuTriggerBase_Factory(__ngFactoryType__) {
    \u0275\u0275invalidFactory();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatMenuTriggerBase
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuTriggerBase, [{
    type: Directive
  }], () => [{
    type: void 0
  }], null);
})();
var MatMenuTrigger = class _MatMenuTrigger extends MatMenuTriggerBase {
  _cleanupTouchstart;
  _hoverSubscription = Subscription.EMPTY;
  get _deprecatedMatMenuTriggerFor() {
    return this.menu;
  }
  set _deprecatedMatMenuTriggerFor(v) {
    this.menu = v;
  }
  get menu() {
    return this._menu;
  }
  set menu(menu) {
    this._menu = menu;
  }
  menuData;
  restoreFocus = true;
  menuOpened = new EventEmitter();
  onMenuOpen = this.menuOpened;
  menuClosed = new EventEmitter();
  onMenuClose = this.menuClosed;
  constructor() {
    super(true);
    const renderer = inject(Renderer2);
    this._cleanupTouchstart = renderer.listen(this._element.nativeElement, "touchstart", (event) => {
      if (!isFakeTouchstartFromScreenReader(event)) {
        this._openedBy = "touch";
      }
    }, {
      passive: true
    });
  }
  triggersSubmenu() {
    return super._triggersSubmenu();
  }
  toggleMenu() {
    return this.menuOpen ? this.closeMenu() : this.openMenu();
  }
  openMenu() {
    this._openMenu(true);
  }
  closeMenu() {
    this._closeMenu();
  }
  updatePosition() {
    this._overlayRef?.updatePosition();
  }
  ngAfterContentInit() {
    this._handleHover();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._cleanupTouchstart();
    this._hoverSubscription.unsubscribe();
  }
  _getOverlayOrigin() {
    return this._element;
  }
  _getOutsideClickStream(overlayRef) {
    return overlayRef.backdropClick();
  }
  _handleMousedown(event) {
    if (!isFakeMousedownFromScreenReader(event)) {
      this._openedBy = event.button === 0 ? "mouse" : void 0;
      if (this.triggersSubmenu()) {
        event.preventDefault();
      }
    }
  }
  _handleKeydown(event) {
    const keyCode = event.keyCode;
    if (keyCode === ENTER || keyCode === SPACE) {
      this._openedBy = "keyboard";
    }
    if (this.triggersSubmenu() && (keyCode === RIGHT_ARROW && this.dir === "ltr" || keyCode === LEFT_ARROW && this.dir === "rtl")) {
      this._openedBy = "keyboard";
      this.openMenu();
    }
  }
  _handleClick(event) {
    if (this.triggersSubmenu()) {
      event.stopPropagation();
      this.openMenu();
    } else {
      this.toggleMenu();
    }
  }
  _handleHover() {
    if (this.triggersSubmenu() && this._parentMaterialMenu) {
      this._hoverSubscription = this._parentMaterialMenu._hovered().subscribe((active) => {
        if (active === this._menuItemInstance && !active.disabled && this._parentMaterialMenu?._panelAnimationState !== "void") {
          this._openedBy = "mouse";
          this._openMenu(false);
        }
      });
    }
  }
  static \u0275fac = function MatMenuTrigger_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatMenuTrigger)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatMenuTrigger,
    selectors: [["", "mat-menu-trigger-for", ""], ["", "matMenuTriggerFor", ""]],
    hostAttrs: [1, "mat-mdc-menu-trigger"],
    hostVars: 3,
    hostBindings: function MatMenuTrigger_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function MatMenuTrigger_click_HostBindingHandler($event) {
          return ctx._handleClick($event);
        })("mousedown", function MatMenuTrigger_mousedown_HostBindingHandler($event) {
          return ctx._handleMousedown($event);
        })("keydown", function MatMenuTrigger_keydown_HostBindingHandler($event) {
          return ctx._handleKeydown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-haspopup", ctx.menu ? "menu" : null)("aria-expanded", ctx.menuOpen)("aria-controls", ctx.menuOpen ? ctx.menu?.panelId : null);
      }
    },
    inputs: {
      _deprecatedMatMenuTriggerFor: [0, "mat-menu-trigger-for", "_deprecatedMatMenuTriggerFor"],
      menu: [0, "matMenuTriggerFor", "menu"],
      menuData: [0, "matMenuTriggerData", "menuData"],
      restoreFocus: [0, "matMenuTriggerRestoreFocus", "restoreFocus"]
    },
    outputs: {
      menuOpened: "menuOpened",
      onMenuOpen: "onMenuOpen",
      menuClosed: "menuClosed",
      onMenuClose: "onMenuClose"
    },
    exportAs: ["matMenuTrigger"],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuTrigger, [{
    type: Directive,
    args: [{
      selector: "[mat-menu-trigger-for], [matMenuTriggerFor]",
      host: {
        "class": "mat-mdc-menu-trigger",
        "[attr.aria-haspopup]": 'menu ? "menu" : null',
        "[attr.aria-expanded]": "menuOpen",
        "[attr.aria-controls]": "menuOpen ? menu?.panelId : null",
        "(click)": "_handleClick($event)",
        "(mousedown)": "_handleMousedown($event)",
        "(keydown)": "_handleKeydown($event)"
      },
      exportAs: "matMenuTrigger"
    }]
  }], () => [], {
    _deprecatedMatMenuTriggerFor: [{
      type: Input,
      args: ["mat-menu-trigger-for"]
    }],
    menu: [{
      type: Input,
      args: ["matMenuTriggerFor"]
    }],
    menuData: [{
      type: Input,
      args: ["matMenuTriggerData"]
    }],
    restoreFocus: [{
      type: Input,
      args: ["matMenuTriggerRestoreFocus"]
    }],
    menuOpened: [{
      type: Output
    }],
    onMenuOpen: [{
      type: Output
    }],
    menuClosed: [{
      type: Output
    }],
    onMenuClose: [{
      type: Output
    }]
  });
})();
var MatContextMenuTrigger = class _MatContextMenuTrigger extends MatMenuTriggerBase {
  _point = {
    x: 0,
    y: 0,
    initialX: 0,
    initialY: 0,
    initialScrollX: 0,
    initialScrollY: 0
  };
  _triggerPressedControl = false;
  _rootNode;
  _document = inject(DOCUMENT);
  _viewportRuler = inject(ViewportRuler);
  _scrollDispatcher = inject(ScrollDispatcher);
  _scrollSubscription;
  get menu() {
    return this._menu;
  }
  set menu(menu) {
    this._menu = menu;
  }
  menuData;
  restoreFocus = true;
  disabled = false;
  menuOpened = new EventEmitter();
  menuClosed = new EventEmitter();
  constructor() {
    super(false);
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._scrollSubscription?.unsubscribe();
  }
  _handleContextMenuEvent(event) {
    if (!this.disabled) {
      event.preventDefault();
      if (this.menuOpen) {
        this._initializePoint(event.clientX, event.clientY);
        this._updatePosition();
      } else {
        this._openContextMenu(event);
      }
    }
  }
  _destroyMenu(reason) {
    super._destroyMenu(reason);
    this._scrollSubscription?.unsubscribe();
  }
  _getOverlayOrigin() {
    return this._point;
  }
  _getOutsideClickStream(overlayRef) {
    return overlayRef.outsidePointerEvents().pipe(skipWhile((event, index) => {
      if (event.type === "contextmenu") {
        return this._isWithinMenuOrTrigger(_getEventTarget(event));
      } else if (event.type === "auxclick") {
        if (index === 0) {
          return true;
        }
        this._rootNode ??= _getShadowRoot(this._element.nativeElement) || this._document;
        return this._isWithinMenuOrTrigger(this._rootNode.elementFromPoint(event.clientX, event.clientY));
      }
      return this._triggerPressedControl && index === 0 && event.ctrlKey;
    }));
  }
  _isWithinMenuOrTrigger(target) {
    if (!target) {
      return false;
    }
    const element = this._element.nativeElement;
    if (target === element || element.contains(target)) {
      return true;
    }
    const overlay = this._overlayRef?.hostElement;
    return overlay === target || !!overlay?.contains(target);
  }
  _openContextMenu(event) {
    if (event.button === 2) {
      this._openedBy = "mouse";
    } else {
      this._openedBy = event.button === 0 ? "keyboard" : void 0;
    }
    this._initializePoint(event.clientX, event.clientY);
    this._triggerPressedControl = event.ctrlKey;
    super._openMenu(true);
    this._scrollSubscription?.unsubscribe();
    this._scrollSubscription = this._scrollDispatcher.scrolled(0).subscribe(() => {
      const position = this._viewportRuler.getViewportScrollPosition();
      const point = this._point;
      point.y = point.initialY + (point.initialScrollY - position.top);
      point.x = point.initialX + (point.initialScrollX - position.left);
      this._updatePosition();
    });
  }
  _initializePoint(x, y) {
    const scrollPosition = this._viewportRuler.getViewportScrollPosition();
    const point = this._point;
    point.x = point.initialX = x;
    point.y = point.initialY = y;
    point.initialScrollX = scrollPosition.left;
    point.initialScrollY = scrollPosition.top;
  }
  _updatePosition() {
    const overlayRef = this._overlayRef;
    if (overlayRef) {
      const positionStrategy = overlayRef.getConfig().positionStrategy;
      positionStrategy.setOrigin(this._point);
      overlayRef.updatePosition();
    }
  }
  static \u0275fac = function MatContextMenuTrigger_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatContextMenuTrigger)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatContextMenuTrigger,
    selectors: [["", "matContextMenuTriggerFor", ""]],
    hostAttrs: [1, "mat-context-menu-trigger"],
    hostVars: 3,
    hostBindings: function MatContextMenuTrigger_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("contextmenu", function MatContextMenuTrigger_contextmenu_HostBindingHandler($event) {
          return ctx._handleContextMenuEvent($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-controls", ctx.menuOpen ? ctx.menu?.panelId : null);
        \u0275\u0275classProp("mat-context-menu-trigger-disabled", ctx.disabled);
      }
    },
    inputs: {
      menu: [0, "matContextMenuTriggerFor", "menu"],
      menuData: [0, "matContextMenuTriggerData", "menuData"],
      restoreFocus: [0, "matContextMenuTriggerRestoreFocus", "restoreFocus"],
      disabled: [2, "matContextMenuTriggerDisabled", "disabled", booleanAttribute]
    },
    outputs: {
      menuOpened: "menuOpened",
      menuClosed: "menuClosed"
    },
    exportAs: ["matContextMenuTrigger"],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatContextMenuTrigger, [{
    type: Directive,
    args: [{
      selector: "[matContextMenuTriggerFor]",
      host: {
        "class": "mat-context-menu-trigger",
        "[class.mat-context-menu-trigger-disabled]": "disabled",
        "[attr.aria-controls]": "menuOpen ? menu?.panelId : null",
        "(contextmenu)": "_handleContextMenuEvent($event)"
      },
      exportAs: "matContextMenuTrigger"
    }]
  }], () => [], {
    menu: [{
      type: Input,
      args: [{
        alias: "matContextMenuTriggerFor",
        required: true
      }]
    }],
    menuData: [{
      type: Input,
      args: ["matContextMenuTriggerData"]
    }],
    restoreFocus: [{
      type: Input,
      args: ["matContextMenuTriggerRestoreFocus"]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "matContextMenuTriggerDisabled",
        transform: booleanAttribute
      }]
    }],
    menuOpened: [{
      type: Output
    }],
    menuClosed: [{
      type: Output
    }]
  });
})();
var MatMenuModule = class _MatMenuModule {
  static \u0275fac = function MatMenuModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatMenuModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatMenuModule,
    imports: [MatRippleModule, OverlayModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, MatContextMenuTrigger],
    exports: [BidiModule, CdkScrollableModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, MatContextMenuTrigger]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatRippleModule, OverlayModule, BidiModule, CdkScrollableModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuModule, [{
    type: NgModule,
    args: [{
      imports: [MatRippleModule, OverlayModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, MatContextMenuTrigger],
      exports: [BidiModule, CdkScrollableModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, MatContextMenuTrigger]
    }]
  }], null, null);
})();

// src/app/layout/header/header.component.ts
var HeaderComponent = class _HeaderComponent {
  constructor() {
    this.toggleNav = new EventEmitter();
    this.auth = inject(AuthService);
    this.user = this.auth.currentUser;
  }
  static {
    this.\u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HeaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], outputs: { toggleNav: "toggleNav" }, decls: 25, vars: 3, consts: [["userMenu", ""], ["color", "primary", 2, "background", "#2E7D32"], ["mat-icon-button", "", 3, "click"], [2, "margin-left", "8px", "font-weight", "600"], [2, "flex", "1"], [2, "font-size", "0.9rem", "opacity", "0.9", "margin-right", "8px"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", "disabled", ""], ["mat-menu-item", "", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "mat-toolbar", 1)(1, "button", 2);
        \u0275\u0275listener("click", function HeaderComponent_Template_button_click_1_listener() {
          return ctx.toggleNav.emit();
        });
        \u0275\u0275elementStart(2, "mat-icon");
        \u0275\u0275text(3, "menu");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "span", 3);
        \u0275\u0275text(5, "Moldtek ERP");
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "span", 4);
        \u0275\u0275elementStart(7, "span", 5);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "button", 6)(10, "mat-icon");
        \u0275\u0275text(11, "account_circle");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "mat-menu", null, 0)(14, "button", 7)(15, "mat-icon");
        \u0275\u0275text(16, "business");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "span");
        \u0275\u0275text(18);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(19, "mat-divider");
        \u0275\u0275elementStart(20, "button", 8);
        \u0275\u0275listener("click", function HeaderComponent_Template_button_click_20_listener() {
          return ctx.auth.logout();
        });
        \u0275\u0275elementStart(21, "mat-icon");
        \u0275\u0275text(22, "logout");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "span");
        \u0275\u0275text(24, "Cerrar sesi\xF3n");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        const userMenu_r1 = \u0275\u0275reference(13);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.user()?.fullName);
        \u0275\u0275advance();
        \u0275\u0275property("matMenuTriggerFor", userMenu_r1);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.user()?.companyName);
      }
    }, dependencies: [MatToolbarModule, MatToolbar, MatIconModule, MatIcon, MatButtonModule, MatIconButton, MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, MatDividerModule, MatDivider], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{
      selector: "app-header",
      standalone: true,
      imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatDividerModule],
      template: `
    <mat-toolbar color="primary" style="background:#2E7D32">
      <button mat-icon-button (click)="toggleNav.emit()">
        <mat-icon>menu</mat-icon>
      </button>
      <span style="margin-left:8px;font-weight:600">Moldtek ERP</span>
      <span style="flex:1"></span>
      <span style="font-size:0.9rem;opacity:0.9;margin-right:8px">{{ user()?.fullName }}</span>
      <button mat-icon-button [matMenuTriggerFor]="userMenu">
        <mat-icon>account_circle</mat-icon>
      </button>
      <mat-menu #userMenu>
        <button mat-menu-item disabled>
          <mat-icon>business</mat-icon>
          <span>{{ user()?.companyName }}</span>
        </button>
        <mat-divider></mat-divider>
        <button mat-menu-item (click)="auth.logout()">
          <mat-icon>logout</mat-icon>
          <span>Cerrar sesi\xF3n</span>
        </button>
      </mat-menu>
    </mat-toolbar>
  `
    }]
  }], null, { toggleNav: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src/app/layout/header/header.component.ts", lineNumber: 38 });
})();

// node_modules/@angular/material/fesm2022/list.mjs
var _c04 = ["*"];
var _c14 = '.mdc-list {\n  margin: 0;\n  padding: 8px 0;\n  list-style-type: none;\n}\n.mdc-list:focus {\n  outline: none;\n}\n\n.mdc-list-item {\n  display: flex;\n  position: relative;\n  justify-content: flex-start;\n  overflow: hidden;\n  padding: 0;\n  align-items: stretch;\n  cursor: pointer;\n  padding-left: 16px;\n  padding-right: 16px;\n  background-color: var(--%NS%mat-list-list-item-container-color, transparent);\n  border-radius: var(--%NS%mat-list-list-item-container-shape, var(--%NS%mat-sys-corner-none));\n}\n.mdc-list-item.mdc-list-item--selected {\n  background-color: var(--%NS%mat-list-list-item-selected-container-color);\n}\n.mdc-list-item:focus {\n  outline: 0;\n}\n.mdc-list-item.mdc-list-item--disabled {\n  cursor: auto;\n}\n.mdc-list-item.mdc-list-item--with-one-line {\n  height: var(--%NS%mat-list-list-item-one-line-container-height, 48px);\n}\n.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {\n  align-self: center;\n  margin-top: 0;\n}\n.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {\n  align-self: center;\n  margin-top: 0;\n}\n.mdc-list-item.mdc-list-item--with-two-lines {\n  height: var(--%NS%mat-list-list-item-two-line-container-height, 64px);\n}\n.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {\n  align-self: flex-start;\n  margin-top: 16px;\n}\n.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {\n  align-self: center;\n  margin-top: 0;\n}\n.mdc-list-item.mdc-list-item--with-three-lines {\n  height: var(--%NS%mat-list-list-item-three-line-container-height, 88px);\n}\n.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {\n  align-self: flex-start;\n  margin-top: 16px;\n}\n.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {\n  align-self: flex-start;\n  margin-top: 16px;\n}\n.mdc-list-item.mdc-list-item--%NS%selected::before, .mdc-list-item.mdc-list-item--%NS%selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  content: "";\n  pointer-events: none;\n}\n\na.mdc-list-item {\n  color: inherit;\n  text-decoration: none;\n}\n\n.mdc-list-item__start {\n  fill: currentColor;\n  flex-shrink: 0;\n  pointer-events: none;\n}\n.mdc-list-item--with-leading-icon .mdc-list-item__start {\n  color: var(--%NS%mat-list-list-item-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));\n  width: var(--%NS%mat-list-list-item-leading-icon-size, 24px);\n  height: var(--%NS%mat-list-list-item-leading-icon-size, 24px);\n  margin-left: 16px;\n  margin-right: 32px;\n}\n[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {\n  margin-left: 32px;\n  margin-right: 16px;\n}\n.mdc-list-item--%NS%with-leading-icon:hover .mdc-list-item__start {\n  color: var(--%NS%mat-list-list-item-hover-leading-icon-color);\n}\n.mdc-list-item--with-leading-avatar .mdc-list-item__start {\n  width: var(--%NS%mat-list-list-item-leading-avatar-size, 40px);\n  height: var(--%NS%mat-list-list-item-leading-avatar-size, 40px);\n  margin-left: 16px;\n  margin-right: 16px;\n  border-radius: 50%;\n}\n.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {\n  margin-left: 16px;\n  margin-right: 16px;\n  border-radius: 50%;\n}\n\n.mdc-list-item__end {\n  flex-shrink: 0;\n  pointer-events: none;\n}\n.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  font-family: var(--%NS%mat-list-list-item-trailing-supporting-text-font, var(--%NS%mat-sys-label-small-font));\n  line-height: var(--%NS%mat-list-list-item-trailing-supporting-text-line-height, var(--%NS%mat-sys-label-small-line-height));\n  font-size: var(--%NS%mat-list-list-item-trailing-supporting-text-size, var(--%NS%mat-sys-label-small-size));\n  font-weight: var(--%NS%mat-list-list-item-trailing-supporting-text-weight, var(--%NS%mat-sys-label-small-weight));\n  letter-spacing: var(--%NS%mat-list-list-item-trailing-supporting-text-tracking, var(--%NS%mat-sys-label-small-tracking));\n}\n.mdc-list-item--with-trailing-icon .mdc-list-item__end {\n  color: var(--%NS%mat-list-list-item-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));\n  width: var(--%NS%mat-list-list-item-trailing-icon-size, 24px);\n  height: var(--%NS%mat-list-list-item-trailing-icon-size, 24px);\n}\n.mdc-list-item--%NS%with-trailing-icon:hover .mdc-list-item__end {\n  color: var(--%NS%mat-list-list-item-hover-trailing-icon-color);\n}\n.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  color: var(--%NS%mat-list-list-item-trailing-supporting-text-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {\n  color: var(--%NS%mat-list-list-item-selected-trailing-icon-color, var(--%NS%mat-sys-primary));\n}\n\n.mdc-list-item__content {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  align-self: center;\n  flex: 1;\n  pointer-events: none;\n}\n.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {\n  align-self: stretch;\n}\n\n.mdc-list-item__primary-text {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  color: var(--%NS%mat-list-list-item-label-text-color, var(--%NS%mat-sys-on-surface));\n  font-family: var(--%NS%mat-list-list-item-label-text-font, var(--%NS%mat-sys-body-large-font));\n  line-height: var(--%NS%mat-list-list-item-label-text-line-height, var(--%NS%mat-sys-body-large-line-height));\n  font-size: var(--%NS%mat-list-list-item-label-text-size, var(--%NS%mat-sys-body-large-size));\n  font-weight: var(--%NS%mat-list-list-item-label-text-weight, var(--%NS%mat-sys-body-large-weight));\n  letter-spacing: var(--%NS%mat-list-list-item-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));\n}\n.mdc-list-item:hover .mdc-list-item__primary-text {\n  color: var(--%NS%mat-list-list-item-hover-label-text-color, var(--%NS%mat-sys-on-surface));\n}\n.mdc-list-item:focus .mdc-list-item__primary-text {\n  color: var(--%NS%mat-list-list-item-focus-label-text-color, var(--%NS%mat-sys-on-surface));\n}\n.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {\n  display: block;\n  margin-top: 0;\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 28px;\n  content: "";\n  vertical-align: 0;\n}\n.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: "";\n  vertical-align: -20px;\n}\n\n.mdc-list-item__secondary-text {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: block;\n  margin-top: 0;\n  color: var(--%NS%mat-list-list-item-supporting-text-color, var(--%NS%mat-sys-on-surface-variant));\n  font-family: var(--%NS%mat-list-list-item-supporting-text-font, var(--%NS%mat-sys-body-medium-font));\n  line-height: var(--%NS%mat-list-list-item-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));\n  font-size: var(--%NS%mat-list-list-item-supporting-text-size, var(--%NS%mat-sys-body-medium-size));\n  font-weight: var(--%NS%mat-list-list-item-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));\n  letter-spacing: var(--%NS%mat-list-list-item-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking));\n}\n.mdc-list-item__secondary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: "";\n  vertical-align: 0;\n}\n.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {\n  white-space: normal;\n  line-height: 20px;\n}\n.mdc-list-item--with-overline .mdc-list-item__secondary-text {\n  white-space: nowrap;\n  line-height: auto;\n}\n\n.mdc-list-item--with-leading-radio.mdc-list-item,\n.mdc-list-item--with-leading-checkbox.mdc-list-item,\n.mdc-list-item--with-leading-icon.mdc-list-item,\n.mdc-list-item--with-leading-avatar.mdc-list-item {\n  padding-left: 0;\n  padding-right: 16px;\n}\n[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,\n[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,\n[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,\n[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {\n  padding-left: 16px;\n  padding-right: 0;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {\n  display: block;\n  margin-top: 0;\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: "";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: "";\n  vertical-align: -20px;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  display: block;\n  margin-top: 0;\n  line-height: normal;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: "";\n  vertical-align: 0;\n}\n\n.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {\n  padding-left: 0;\n  padding-right: 0;\n}\n.mdc-list-item--with-trailing-icon .mdc-list-item__end {\n  margin-left: 16px;\n  margin-right: 16px;\n}\n\n.mdc-list-item--with-trailing-meta.mdc-list-item {\n  padding-left: 16px;\n  padding-right: 0;\n}\n[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {\n  padding-left: 0;\n  padding-right: 16px;\n}\n.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  -webkit-user-select: none;\n  user-select: none;\n  margin-left: 28px;\n  margin-right: 16px;\n}\n[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  margin-left: 16px;\n  margin-right: 28px;\n}\n.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {\n  display: block;\n  line-height: normal;\n  align-self: flex-start;\n  margin-top: 0;\n}\n.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {\n  display: inline-block;\n  width: 0;\n  height: 28px;\n  content: "";\n  vertical-align: 0;\n}\n\n.mdc-list-item--with-leading-radio .mdc-list-item__start,\n.mdc-list-item--with-leading-checkbox .mdc-list-item__start {\n  margin-left: 8px;\n  margin-right: 24px;\n}\n[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,\n[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {\n  margin-left: 24px;\n  margin-right: 8px;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {\n  align-self: flex-start;\n  margin-top: 8px;\n}\n\n.mdc-list-item--with-trailing-radio.mdc-list-item,\n.mdc-list-item--with-trailing-checkbox.mdc-list-item {\n  padding-left: 16px;\n  padding-right: 0;\n}\n[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,\n[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {\n  padding-left: 0;\n  padding-right: 16px;\n}\n.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,\n.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,\n.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {\n  padding-left: 0;\n}\n[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,\n[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,\n[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {\n  padding-right: 0;\n}\n.mdc-list-item--with-trailing-radio .mdc-list-item__end,\n.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {\n  margin-left: 24px;\n  margin-right: 8px;\n}\n[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,\n[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {\n  margin-left: 8px;\n  margin-right: 24px;\n}\n.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,\n.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {\n  align-self: flex-start;\n  margin-top: 8px;\n}\n\n.mdc-list-group__subheader {\n  margin: 0.75rem 16px;\n}\n\n.mdc-list-item--disabled .mdc-list-item__start,\n.mdc-list-item--disabled .mdc-list-item__content,\n.mdc-list-item--disabled .mdc-list-item__end {\n  opacity: 1;\n}\n.mdc-list-item--disabled .mdc-list-item__primary-text,\n.mdc-list-item--disabled .mdc-list-item__secondary-text {\n  opacity: var(--%NS%mat-list-list-item-disabled-label-text-opacity, 0.3);\n}\n.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {\n  color: var(--%NS%mat-list-list-item-disabled-leading-icon-color, var(--%NS%mat-sys-on-surface));\n  opacity: var(--%NS%mat-list-list-item-disabled-leading-icon-opacity, 0.38);\n}\n.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {\n  color: var(--%NS%mat-list-list-item-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));\n  opacity: var(--%NS%mat-list-list-item-disabled-trailing-icon-opacity, 0.38);\n}\n\n.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {\n  color: var(--%NS%mat-list-list-item-disabled-label-text-color, var(--%NS%mat-sys-on-surface));\n}\n\n.mdc-list-item:hover::before {\n  background-color: var(--%NS%mat-list-list-item-hover-state-layer-color, var(--%NS%mat-sys-on-surface));\n  opacity: var(--%NS%mat-list-list-item-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));\n}\n\n.mdc-list-item.mdc-list-item--%NS%disabled::before {\n  background-color: var(--%NS%mat-list-list-item-disabled-state-layer-color, var(--%NS%mat-sys-on-surface));\n  opacity: var(--%NS%mat-list-list-item-disabled-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));\n}\n\n.mdc-list-item:focus::before {\n  background-color: var(--%NS%mat-list-list-item-focus-state-layer-color, var(--%NS%mat-sys-on-surface));\n  opacity: var(--%NS%mat-list-list-item-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));\n}\n\n.mdc-list-item--disabled .mdc-radio,\n.mdc-list-item--disabled .mdc-checkbox {\n  opacity: var(--%NS%mat-list-list-item-disabled-label-text-opacity, 0.3);\n}\n\n.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {\n  border-radius: var(--%NS%mat-list-list-item-leading-avatar-shape, var(--%NS%mat-sys-corner-full));\n  background-color: var(--%NS%mat-list-list-item-leading-avatar-color, var(--%NS%mat-sys-primary-container));\n}\n\n.mat-mdc-list-item-icon {\n  font-size: var(--%NS%mat-list-list-item-leading-icon-size, 24px);\n}\n\n@media (forced-colors: active) {\n  a.mdc-list-item--%NS%activated::after {\n    content: "";\n    position: absolute;\n    top: 50%;\n    right: 16px;\n    transform: translateY(-50%);\n    width: 10px;\n    height: 0;\n    border-bottom: solid 10px;\n    border-radius: 10px;\n  }\n  a.mdc-list-item--activated [dir=rtl]::after {\n    right: auto;\n    left: 16px;\n  }\n}\n\n.mat-mdc-list-base {\n  display: block;\n}\n.mat-mdc-list-base .mdc-list-item__start,\n.mat-mdc-list-base .mdc-list-item__end,\n.mat-mdc-list-base .mdc-list-item__content {\n  pointer-events: auto;\n}\n\n.mat-mdc-list-item,\n.mat-mdc-list-option {\n  width: 100%;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),\n.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {\n  cursor: default;\n}\n.mat-mdc-list-item .mat-divider-inset,\n.mat-mdc-list-option .mat-divider-inset {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,\n.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {\n  margin-left: 72px;\n}\n[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,\n[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {\n  margin-right: 72px;\n}\n\n.mat-mdc-list-item-interactive::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  content: "";\n  opacity: 0;\n  pointer-events: none;\n  border-radius: inherit;\n}\n\n.mat-mdc-list-item > .mat-focus-indicator {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n}\n.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {\n  content: "";\n}\n\n.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {\n  white-space: nowrap;\n  line-height: normal;\n}\n.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n\nmat-action-list button {\n  background: none;\n  color: inherit;\n  border: none;\n  font: inherit;\n  outline: inherit;\n  -webkit-tap-highlight-color: transparent;\n  text-align: start;\n}\nmat-action-list button::-moz-focus-inner {\n  border: 0;\n}\n\n.mdc-list-item--with-leading-icon .mdc-list-item__start {\n  margin-inline-start: var(--%NS%mat-list-list-item-leading-icon-start-space, 16px);\n  margin-inline-end: var(--%NS%mat-list-list-item-leading-icon-end-space, 16px);\n}\n\n.mat-mdc-nav-list .mat-mdc-list-item {\n  border-radius: var(--%NS%mat-list-active-indicator-shape, var(--%NS%mat-sys-corner-full));\n  --%NS%mat-focus-indicator-border-radius: var(--%NS%mat-list-active-indicator-shape, var(--%NS%mat-sys-corner-full));\n}\n.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {\n  background-color: var(--%NS%mat-list-active-indicator-color, var(--%NS%mat-sys-secondary-container));\n}\n';
var _c23 = ["unscopedContent"];
var _c32 = ["text"];
var _c42 = [[["", "matListItemAvatar", ""], ["", "matListItemIcon", ""]], [["", "matListItemTitle", ""]], [["", "matListItemLine", ""]], "*", [["", "matListItemMeta", ""]], [["mat-divider"]]];
var _c5 = ["[matListItemAvatar],[matListItemIcon]", "[matListItemTitle]", "[matListItemLine]", "*", "[matListItemMeta]", "mat-divider"];
var _c6 = [[["", "matListItemTitle", ""]], [["", "matListItemLine", ""]], "*", [["mat-divider"]], [["", "matListItemAvatar", ""], ["", "matListItemIcon", ""]]];
var _c7 = ["[matListItemTitle]", "[matListItemLine]", "*", "mat-divider", "[matListItemAvatar],[matListItemIcon]"];
function MatListOption_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 4);
  }
}
function MatListOption_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "input", 12);
    \u0275\u0275elementStart(2, "div", 13);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 14);
    \u0275\u0275element(4, "path", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(5, "div", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("mdc-checkbox--disabled", ctx_r0.disabled);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r0.selected)("disabled", ctx_r0.disabled);
  }
}
function MatListOption_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "input", 18);
    \u0275\u0275elementStart(2, "div", 19);
    \u0275\u0275element(3, "div", 20)(4, "div", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("mdc-radio--disabled", ctx_r0.disabled);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r0.selected)("disabled", ctx_r0.disabled);
  }
}
function MatListOption_Conditional_6_ng_template_1_Template(rf, ctx) {
}
function MatListOption_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275template(1, MatListOption_Conditional_6_ng_template_1_Template, 0, 0, "ng-template", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const checkbox_r2 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", checkbox_r2);
  }
}
function MatListOption_Conditional_7_ng_template_1_Template(rf, ctx) {
}
function MatListOption_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275template(1, MatListOption_Conditional_7_ng_template_1_Template, 0, 0, "ng-template", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const radio_r3 = \u0275\u0275reference(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", radio_r3);
  }
}
function MatListOption_Conditional_8_ng_template_0_Template(rf, ctx) {
}
function MatListOption_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MatListOption_Conditional_8_ng_template_0_Template, 0, 0, "ng-template", 6);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const icons_r4 = \u0275\u0275reference(1);
    \u0275\u0275property("ngTemplateOutlet", icons_r4);
  }
}
function MatListOption_Conditional_15_ng_template_1_Template(rf, ctx) {
}
function MatListOption_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275template(1, MatListOption_Conditional_15_ng_template_1_Template, 0, 0, "ng-template", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const checkbox_r2 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", checkbox_r2);
  }
}
function MatListOption_Conditional_16_ng_template_1_Template(rf, ctx) {
}
function MatListOption_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275template(1, MatListOption_Conditional_16_ng_template_1_Template, 0, 0, "ng-template", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const radio_r3 = \u0275\u0275reference(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", radio_r3);
  }
}
function MatListOption_Conditional_17_ng_template_0_Template(rf, ctx) {
}
function MatListOption_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MatListOption_Conditional_17_ng_template_0_Template, 0, 0, "ng-template", 6);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const icons_r4 = \u0275\u0275reference(1);
    \u0275\u0275property("ngTemplateOutlet", icons_r4);
  }
}
var LIST_OPTION = new InjectionToken("ListOption");
var MatListItemTitle = class _MatListItemTitle {
  _elementRef = inject(ElementRef);
  static \u0275fac = function MatListItemTitle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatListItemTitle)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatListItemTitle,
    selectors: [["", "matListItemTitle", ""]],
    hostAttrs: [1, "mat-mdc-list-item-title", "mdc-list-item__primary-text"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatListItemTitle, [{
    type: Directive,
    args: [{
      selector: "[matListItemTitle]",
      host: {
        "class": "mat-mdc-list-item-title mdc-list-item__primary-text"
      }
    }]
  }], null, null);
})();
var MatListItemLine = class _MatListItemLine {
  _elementRef = inject(ElementRef);
  static \u0275fac = function MatListItemLine_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatListItemLine)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatListItemLine,
    selectors: [["", "matListItemLine", ""]],
    hostAttrs: [1, "mat-mdc-list-item-line", "mdc-list-item__secondary-text"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatListItemLine, [{
    type: Directive,
    args: [{
      selector: "[matListItemLine]",
      host: {
        "class": "mat-mdc-list-item-line mdc-list-item__secondary-text"
      }
    }]
  }], null, null);
})();
var MatListItemMeta = class _MatListItemMeta {
  static \u0275fac = function MatListItemMeta_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatListItemMeta)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatListItemMeta,
    selectors: [["", "matListItemMeta", ""]],
    hostAttrs: [1, "mat-mdc-list-item-meta", "mdc-list-item__end"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatListItemMeta, [{
    type: Directive,
    args: [{
      selector: "[matListItemMeta]",
      host: {
        "class": "mat-mdc-list-item-meta mdc-list-item__end"
      }
    }]
  }], null, null);
})();
var _MatListItemGraphicBase = class __MatListItemGraphicBase {
  _listOption = inject(LIST_OPTION, {
    optional: true
  });
  _isAlignedAtStart() {
    return !this._listOption || this._listOption?._getTogglePosition() === "after";
  }
  static \u0275fac = function _MatListItemGraphicBase_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __MatListItemGraphicBase)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: __MatListItemGraphicBase,
    hostVars: 4,
    hostBindings: function _MatListItemGraphicBase_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mdc-list-item__start", ctx._isAlignedAtStart())("mdc-list-item__end", !ctx._isAlignedAtStart());
      }
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatListItemGraphicBase, [{
    type: Directive,
    args: [{
      host: {
        "[class.mdc-list-item__start]": "_isAlignedAtStart()",
        "[class.mdc-list-item__end]": "!_isAlignedAtStart()"
      }
    }]
  }], null, null);
})();
var MatListItemAvatar = class _MatListItemAvatar extends _MatListItemGraphicBase {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatListItemAvatar_BaseFactory;
    return function MatListItemAvatar_Factory(__ngFactoryType__) {
      return (\u0275MatListItemAvatar_BaseFactory || (\u0275MatListItemAvatar_BaseFactory = \u0275\u0275getInheritedFactory(_MatListItemAvatar)))(__ngFactoryType__ || _MatListItemAvatar);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatListItemAvatar,
    selectors: [["", "matListItemAvatar", ""]],
    hostAttrs: [1, "mat-mdc-list-item-avatar"],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatListItemAvatar, [{
    type: Directive,
    args: [{
      selector: "[matListItemAvatar]",
      host: {
        "class": "mat-mdc-list-item-avatar"
      }
    }]
  }], null, null);
})();
var MatListItemIcon = class _MatListItemIcon extends _MatListItemGraphicBase {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatListItemIcon_BaseFactory;
    return function MatListItemIcon_Factory(__ngFactoryType__) {
      return (\u0275MatListItemIcon_BaseFactory || (\u0275MatListItemIcon_BaseFactory = \u0275\u0275getInheritedFactory(_MatListItemIcon)))(__ngFactoryType__ || _MatListItemIcon);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatListItemIcon,
    selectors: [["", "matListItemIcon", ""]],
    hostAttrs: [1, "mat-mdc-list-item-icon"],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatListItemIcon, [{
    type: Directive,
    args: [{
      selector: "[matListItemIcon]",
      host: {
        "class": "mat-mdc-list-item-icon"
      }
    }]
  }], null, null);
})();
var MAT_LIST_CONFIG = new InjectionToken("MAT_LIST_CONFIG");
var MatListBase = class _MatListBase {
  _isNonInteractive = true;
  get disableRipple() {
    return this._disableRipple;
  }
  set disableRipple(value) {
    this._disableRipple = coerceBooleanProperty(value);
  }
  _disableRipple = false;
  get disabled() {
    return this._disabled();
  }
  set disabled(value) {
    this._disabled.set(coerceBooleanProperty(value));
  }
  _disabled = signal(false, ...ngDevMode ? [{
    debugName: "_disabled"
  }] : []);
  _defaultOptions = inject(MAT_LIST_CONFIG, {
    optional: true
  });
  static \u0275fac = function MatListBase_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatListBase)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatListBase,
    hostVars: 1,
    hostBindings: function MatListBase_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-disabled", ctx.disabled);
      }
    },
    inputs: {
      disableRipple: "disableRipple",
      disabled: "disabled"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatListBase, [{
    type: Directive,
    args: [{
      host: {
        "[attr.aria-disabled]": "disabled"
      }
    }]
  }], null, {
    disableRipple: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }]
  });
})();
var MatListItemBase = class _MatListItemBase {
  _elementRef = inject(ElementRef);
  _ngZone = inject(NgZone);
  _listBase = inject(MatListBase, {
    optional: true
  });
  _platform = inject(Platform);
  _hostElement;
  _isButtonElement;
  _noopAnimations = _animationsDisabled();
  _avatars;
  _icons;
  set lines(lines) {
    this._explicitLines = coerceNumberProperty(lines, null);
    this._updateItemLines(false);
  }
  _explicitLines = null;
  get disableRipple() {
    return this.disabled || this._disableRipple || this._noopAnimations || !!this._listBase?.disableRipple;
  }
  set disableRipple(value) {
    this._disableRipple = coerceBooleanProperty(value);
  }
  _disableRipple = false;
  get disabled() {
    return this._disabled() || !!this._listBase?.disabled;
  }
  set disabled(value) {
    this._disabled.set(coerceBooleanProperty(value));
  }
  _disabled = signal(false, ...ngDevMode ? [{
    debugName: "_disabled"
  }] : []);
  _subscriptions = new Subscription();
  _rippleRenderer = null;
  _hasUnscopedTextContent = false;
  rippleConfig;
  get rippleDisabled() {
    return this.disableRipple || !!this.rippleConfig.disabled;
  }
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const globalRippleOptions = inject(MAT_RIPPLE_GLOBAL_OPTIONS, {
      optional: true
    });
    this.rippleConfig = globalRippleOptions || {};
    this._hostElement = this._elementRef.nativeElement;
    this._isButtonElement = this._hostElement.nodeName.toLowerCase() === "button";
    if (this._listBase && !this._listBase._isNonInteractive) {
      this._initInteractiveListItem();
    }
    if (this._isButtonElement && !this._hostElement.hasAttribute("type")) {
      this._hostElement.setAttribute("type", "button");
    }
  }
  ngAfterViewInit() {
    this._monitorProjectedLinesAndTitle();
    this._updateItemLines(true);
  }
  ngOnDestroy() {
    this._subscriptions.unsubscribe();
    if (this._rippleRenderer !== null) {
      this._rippleRenderer._removeTriggerEvents();
    }
  }
  _hasIconOrAvatar() {
    return !!(this._avatars.length || this._icons.length);
  }
  _initInteractiveListItem() {
    this._hostElement.classList.add("mat-mdc-list-item-interactive");
    this._rippleRenderer = new RippleRenderer(this, this._ngZone, this._hostElement, this._platform, inject(Injector));
    this._rippleRenderer.setupTriggerEvents(this._hostElement);
  }
  _monitorProjectedLinesAndTitle() {
    this._ngZone.runOutsideAngular(() => {
      this._subscriptions.add(merge(this._lines.changes, this._titles.changes).subscribe(() => this._updateItemLines(false)));
    });
  }
  _updateItemLines(recheckUnscopedContent) {
    if (!this._lines || !this._titles || !this._unscopedContent) {
      return;
    }
    if (recheckUnscopedContent) {
      this._checkDomForUnscopedTextContent();
    }
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      sanityCheckListItemContent(this);
    }
    const numberOfLines = this._explicitLines ?? this._inferLinesFromContent();
    const unscopedContentEl = this._unscopedContent.nativeElement;
    this._hostElement.classList.toggle("mat-mdc-list-item-single-line", numberOfLines <= 1);
    this._hostElement.classList.toggle("mdc-list-item--with-one-line", numberOfLines <= 1);
    this._hostElement.classList.toggle("mdc-list-item--with-two-lines", numberOfLines === 2);
    this._hostElement.classList.toggle("mdc-list-item--with-three-lines", numberOfLines === 3);
    if (this._hasUnscopedTextContent) {
      const treatAsTitle = this._titles.length === 0 && numberOfLines === 1;
      unscopedContentEl.classList.toggle("mdc-list-item__primary-text", treatAsTitle);
      unscopedContentEl.classList.toggle("mdc-list-item__secondary-text", !treatAsTitle);
    } else {
      unscopedContentEl.classList.remove("mdc-list-item__primary-text");
      unscopedContentEl.classList.remove("mdc-list-item__secondary-text");
    }
  }
  _inferLinesFromContent() {
    let numOfLines = this._titles.length + this._lines.length;
    if (this._hasUnscopedTextContent) {
      numOfLines += 1;
    }
    return numOfLines;
  }
  _checkDomForUnscopedTextContent() {
    this._hasUnscopedTextContent = Array.from(this._unscopedContent.nativeElement.childNodes).filter((node) => node.nodeType !== node.COMMENT_NODE).some((node) => !!(node.textContent && node.textContent.trim()));
  }
  static \u0275fac = function MatListItemBase_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatListItemBase)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatListItemBase,
    contentQueries: function MatListItemBase_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatListItemAvatar, 4)(dirIndex, MatListItemIcon, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._avatars = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._icons = _t);
      }
    },
    hostVars: 4,
    hostBindings: function MatListItemBase_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-disabled", ctx.disabled)("disabled", ctx._isButtonElement && ctx.disabled || null);
        \u0275\u0275classProp("mdc-list-item--disabled", ctx.disabled);
      }
    },
    inputs: {
      lines: "lines",
      disableRipple: "disableRipple",
      disabled: "disabled"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatListItemBase, [{
    type: Directive,
    args: [{
      host: {
        "[class.mdc-list-item--disabled]": "disabled",
        "[attr.aria-disabled]": "disabled",
        "[attr.disabled]": "(_isButtonElement && disabled) || null"
      }
    }]
  }], () => [], {
    _avatars: [{
      type: ContentChildren,
      args: [MatListItemAvatar, {
        descendants: false
      }]
    }],
    _icons: [{
      type: ContentChildren,
      args: [MatListItemIcon, {
        descendants: false
      }]
    }],
    lines: [{
      type: Input
    }],
    disableRipple: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }]
  });
})();
function sanityCheckListItemContent(item) {
  const numTitles = item._titles.length;
  const numLines = item._lines.length;
  if (numTitles > 1) {
    console.warn("A list item cannot have multiple titles.");
  }
  if (numTitles === 0 && numLines > 0) {
    console.warn("A list item line can only be used if there is a list item title.");
  }
  if (numTitles === 0 && item._hasUnscopedTextContent && item._explicitLines !== null && item._explicitLines > 1) {
    console.warn("A list item cannot have wrapping content without a title.");
  }
  if (numLines > 2 || numLines === 2 && item._hasUnscopedTextContent) {
    console.warn("A list item can have at maximum three lines.");
  }
}
var MatActionList = class _MatActionList extends MatListBase {
  _isNonInteractive = false;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatActionList_BaseFactory;
    return function MatActionList_Factory(__ngFactoryType__) {
      return (\u0275MatActionList_BaseFactory || (\u0275MatActionList_BaseFactory = \u0275\u0275getInheritedFactory(_MatActionList)))(__ngFactoryType__ || _MatActionList);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatActionList,
    selectors: [["mat-action-list"]],
    hostAttrs: ["role", "group", 1, "mat-mdc-action-list", "mat-mdc-list-base", "mdc-list"],
    exportAs: ["matActionList"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MatListBase,
      useExisting: _MatActionList
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c04,
    decls: 1,
    vars: 0,
    template: function MatActionList_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    styles: ['.mdc-list {\n  margin: 0;\n  padding: 8px 0;\n  list-style-type: none;\n}\n.mdc-list:focus {\n  outline: none;\n}\n\n.mdc-list-item {\n  display: flex;\n  position: relative;\n  justify-content: flex-start;\n  overflow: hidden;\n  padding: 0;\n  align-items: stretch;\n  cursor: pointer;\n  padding-left: 16px;\n  padding-right: 16px;\n  background-color: var(--%NS%mat-list-list-item-container-color, transparent);\n  border-radius: var(--%NS%mat-list-list-item-container-shape, var(--%NS%mat-sys-corner-none));\n}\n.mdc-list-item.mdc-list-item--selected {\n  background-color: var(--%NS%mat-list-list-item-selected-container-color);\n}\n.mdc-list-item:focus {\n  outline: 0;\n}\n.mdc-list-item.mdc-list-item--disabled {\n  cursor: auto;\n}\n.mdc-list-item.mdc-list-item--with-one-line {\n  height: var(--%NS%mat-list-list-item-one-line-container-height, 48px);\n}\n.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {\n  align-self: center;\n  margin-top: 0;\n}\n.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {\n  align-self: center;\n  margin-top: 0;\n}\n.mdc-list-item.mdc-list-item--with-two-lines {\n  height: var(--%NS%mat-list-list-item-two-line-container-height, 64px);\n}\n.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {\n  align-self: flex-start;\n  margin-top: 16px;\n}\n.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {\n  align-self: center;\n  margin-top: 0;\n}\n.mdc-list-item.mdc-list-item--with-three-lines {\n  height: var(--%NS%mat-list-list-item-three-line-container-height, 88px);\n}\n.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {\n  align-self: flex-start;\n  margin-top: 16px;\n}\n.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {\n  align-self: flex-start;\n  margin-top: 16px;\n}\n.mdc-list-item.mdc-list-item--%NS%selected::before, .mdc-list-item.mdc-list-item--%NS%selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  content: "";\n  pointer-events: none;\n}\n\na.mdc-list-item {\n  color: inherit;\n  text-decoration: none;\n}\n\n.mdc-list-item__start {\n  fill: currentColor;\n  flex-shrink: 0;\n  pointer-events: none;\n}\n.mdc-list-item--with-leading-icon .mdc-list-item__start {\n  color: var(--%NS%mat-list-list-item-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));\n  width: var(--%NS%mat-list-list-item-leading-icon-size, 24px);\n  height: var(--%NS%mat-list-list-item-leading-icon-size, 24px);\n  margin-left: 16px;\n  margin-right: 32px;\n}\n[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {\n  margin-left: 32px;\n  margin-right: 16px;\n}\n.mdc-list-item--%NS%with-leading-icon:hover .mdc-list-item__start {\n  color: var(--%NS%mat-list-list-item-hover-leading-icon-color);\n}\n.mdc-list-item--with-leading-avatar .mdc-list-item__start {\n  width: var(--%NS%mat-list-list-item-leading-avatar-size, 40px);\n  height: var(--%NS%mat-list-list-item-leading-avatar-size, 40px);\n  margin-left: 16px;\n  margin-right: 16px;\n  border-radius: 50%;\n}\n.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {\n  margin-left: 16px;\n  margin-right: 16px;\n  border-radius: 50%;\n}\n\n.mdc-list-item__end {\n  flex-shrink: 0;\n  pointer-events: none;\n}\n.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  font-family: var(--%NS%mat-list-list-item-trailing-supporting-text-font, var(--%NS%mat-sys-label-small-font));\n  line-height: var(--%NS%mat-list-list-item-trailing-supporting-text-line-height, var(--%NS%mat-sys-label-small-line-height));\n  font-size: var(--%NS%mat-list-list-item-trailing-supporting-text-size, var(--%NS%mat-sys-label-small-size));\n  font-weight: var(--%NS%mat-list-list-item-trailing-supporting-text-weight, var(--%NS%mat-sys-label-small-weight));\n  letter-spacing: var(--%NS%mat-list-list-item-trailing-supporting-text-tracking, var(--%NS%mat-sys-label-small-tracking));\n}\n.mdc-list-item--with-trailing-icon .mdc-list-item__end {\n  color: var(--%NS%mat-list-list-item-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));\n  width: var(--%NS%mat-list-list-item-trailing-icon-size, 24px);\n  height: var(--%NS%mat-list-list-item-trailing-icon-size, 24px);\n}\n.mdc-list-item--%NS%with-trailing-icon:hover .mdc-list-item__end {\n  color: var(--%NS%mat-list-list-item-hover-trailing-icon-color);\n}\n.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  color: var(--%NS%mat-list-list-item-trailing-supporting-text-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {\n  color: var(--%NS%mat-list-list-item-selected-trailing-icon-color, var(--%NS%mat-sys-primary));\n}\n\n.mdc-list-item__content {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  align-self: center;\n  flex: 1;\n  pointer-events: none;\n}\n.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {\n  align-self: stretch;\n}\n\n.mdc-list-item__primary-text {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  color: var(--%NS%mat-list-list-item-label-text-color, var(--%NS%mat-sys-on-surface));\n  font-family: var(--%NS%mat-list-list-item-label-text-font, var(--%NS%mat-sys-body-large-font));\n  line-height: var(--%NS%mat-list-list-item-label-text-line-height, var(--%NS%mat-sys-body-large-line-height));\n  font-size: var(--%NS%mat-list-list-item-label-text-size, var(--%NS%mat-sys-body-large-size));\n  font-weight: var(--%NS%mat-list-list-item-label-text-weight, var(--%NS%mat-sys-body-large-weight));\n  letter-spacing: var(--%NS%mat-list-list-item-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));\n}\n.mdc-list-item:hover .mdc-list-item__primary-text {\n  color: var(--%NS%mat-list-list-item-hover-label-text-color, var(--%NS%mat-sys-on-surface));\n}\n.mdc-list-item:focus .mdc-list-item__primary-text {\n  color: var(--%NS%mat-list-list-item-focus-label-text-color, var(--%NS%mat-sys-on-surface));\n}\n.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {\n  display: block;\n  margin-top: 0;\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 28px;\n  content: "";\n  vertical-align: 0;\n}\n.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: "";\n  vertical-align: -20px;\n}\n\n.mdc-list-item__secondary-text {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: block;\n  margin-top: 0;\n  color: var(--%NS%mat-list-list-item-supporting-text-color, var(--%NS%mat-sys-on-surface-variant));\n  font-family: var(--%NS%mat-list-list-item-supporting-text-font, var(--%NS%mat-sys-body-medium-font));\n  line-height: var(--%NS%mat-list-list-item-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));\n  font-size: var(--%NS%mat-list-list-item-supporting-text-size, var(--%NS%mat-sys-body-medium-size));\n  font-weight: var(--%NS%mat-list-list-item-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));\n  letter-spacing: var(--%NS%mat-list-list-item-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking));\n}\n.mdc-list-item__secondary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: "";\n  vertical-align: 0;\n}\n.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {\n  white-space: normal;\n  line-height: 20px;\n}\n.mdc-list-item--with-overline .mdc-list-item__secondary-text {\n  white-space: nowrap;\n  line-height: auto;\n}\n\n.mdc-list-item--with-leading-radio.mdc-list-item,\n.mdc-list-item--with-leading-checkbox.mdc-list-item,\n.mdc-list-item--with-leading-icon.mdc-list-item,\n.mdc-list-item--with-leading-avatar.mdc-list-item {\n  padding-left: 0;\n  padding-right: 16px;\n}\n[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,\n[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,\n[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,\n[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {\n  padding-left: 16px;\n  padding-right: 0;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {\n  display: block;\n  margin-top: 0;\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: "";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: "";\n  vertical-align: -20px;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  display: block;\n  margin-top: 0;\n  line-height: normal;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: "";\n  vertical-align: 0;\n}\n\n.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {\n  padding-left: 0;\n  padding-right: 0;\n}\n.mdc-list-item--with-trailing-icon .mdc-list-item__end {\n  margin-left: 16px;\n  margin-right: 16px;\n}\n\n.mdc-list-item--with-trailing-meta.mdc-list-item {\n  padding-left: 16px;\n  padding-right: 0;\n}\n[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {\n  padding-left: 0;\n  padding-right: 16px;\n}\n.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  -webkit-user-select: none;\n  user-select: none;\n  margin-left: 28px;\n  margin-right: 16px;\n}\n[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  margin-left: 16px;\n  margin-right: 28px;\n}\n.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {\n  display: block;\n  line-height: normal;\n  align-self: flex-start;\n  margin-top: 0;\n}\n.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {\n  display: inline-block;\n  width: 0;\n  height: 28px;\n  content: "";\n  vertical-align: 0;\n}\n\n.mdc-list-item--with-leading-radio .mdc-list-item__start,\n.mdc-list-item--with-leading-checkbox .mdc-list-item__start {\n  margin-left: 8px;\n  margin-right: 24px;\n}\n[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,\n[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {\n  margin-left: 24px;\n  margin-right: 8px;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {\n  align-self: flex-start;\n  margin-top: 8px;\n}\n\n.mdc-list-item--with-trailing-radio.mdc-list-item,\n.mdc-list-item--with-trailing-checkbox.mdc-list-item {\n  padding-left: 16px;\n  padding-right: 0;\n}\n[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,\n[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {\n  padding-left: 0;\n  padding-right: 16px;\n}\n.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,\n.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,\n.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {\n  padding-left: 0;\n}\n[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,\n[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,\n[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {\n  padding-right: 0;\n}\n.mdc-list-item--with-trailing-radio .mdc-list-item__end,\n.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {\n  margin-left: 24px;\n  margin-right: 8px;\n}\n[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,\n[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {\n  margin-left: 8px;\n  margin-right: 24px;\n}\n.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,\n.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {\n  align-self: flex-start;\n  margin-top: 8px;\n}\n\n.mdc-list-group__subheader {\n  margin: 0.75rem 16px;\n}\n\n.mdc-list-item--disabled .mdc-list-item__start,\n.mdc-list-item--disabled .mdc-list-item__content,\n.mdc-list-item--disabled .mdc-list-item__end {\n  opacity: 1;\n}\n.mdc-list-item--disabled .mdc-list-item__primary-text,\n.mdc-list-item--disabled .mdc-list-item__secondary-text {\n  opacity: var(--%NS%mat-list-list-item-disabled-label-text-opacity, 0.3);\n}\n.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {\n  color: var(--%NS%mat-list-list-item-disabled-leading-icon-color, var(--%NS%mat-sys-on-surface));\n  opacity: var(--%NS%mat-list-list-item-disabled-leading-icon-opacity, 0.38);\n}\n.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {\n  color: var(--%NS%mat-list-list-item-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));\n  opacity: var(--%NS%mat-list-list-item-disabled-trailing-icon-opacity, 0.38);\n}\n\n.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {\n  color: var(--%NS%mat-list-list-item-disabled-label-text-color, var(--%NS%mat-sys-on-surface));\n}\n\n.mdc-list-item:hover::before {\n  background-color: var(--%NS%mat-list-list-item-hover-state-layer-color, var(--%NS%mat-sys-on-surface));\n  opacity: var(--%NS%mat-list-list-item-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));\n}\n\n.mdc-list-item.mdc-list-item--%NS%disabled::before {\n  background-color: var(--%NS%mat-list-list-item-disabled-state-layer-color, var(--%NS%mat-sys-on-surface));\n  opacity: var(--%NS%mat-list-list-item-disabled-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));\n}\n\n.mdc-list-item:focus::before {\n  background-color: var(--%NS%mat-list-list-item-focus-state-layer-color, var(--%NS%mat-sys-on-surface));\n  opacity: var(--%NS%mat-list-list-item-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));\n}\n\n.mdc-list-item--disabled .mdc-radio,\n.mdc-list-item--disabled .mdc-checkbox {\n  opacity: var(--%NS%mat-list-list-item-disabled-label-text-opacity, 0.3);\n}\n\n.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {\n  border-radius: var(--%NS%mat-list-list-item-leading-avatar-shape, var(--%NS%mat-sys-corner-full));\n  background-color: var(--%NS%mat-list-list-item-leading-avatar-color, var(--%NS%mat-sys-primary-container));\n}\n\n.mat-mdc-list-item-icon {\n  font-size: var(--%NS%mat-list-list-item-leading-icon-size, 24px);\n}\n\n@media (forced-colors: active) {\n  a.mdc-list-item--%NS%activated::after {\n    content: "";\n    position: absolute;\n    top: 50%;\n    right: 16px;\n    transform: translateY(-50%);\n    width: 10px;\n    height: 0;\n    border-bottom: solid 10px;\n    border-radius: 10px;\n  }\n  a.mdc-list-item--activated [dir=rtl]::after {\n    right: auto;\n    left: 16px;\n  }\n}\n\n.mat-mdc-list-base {\n  display: block;\n}\n.mat-mdc-list-base .mdc-list-item__start,\n.mat-mdc-list-base .mdc-list-item__end,\n.mat-mdc-list-base .mdc-list-item__content {\n  pointer-events: auto;\n}\n\n.mat-mdc-list-item,\n.mat-mdc-list-option {\n  width: 100%;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),\n.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {\n  cursor: default;\n}\n.mat-mdc-list-item .mat-divider-inset,\n.mat-mdc-list-option .mat-divider-inset {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,\n.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {\n  margin-left: 72px;\n}\n[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,\n[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {\n  margin-right: 72px;\n}\n\n.mat-mdc-list-item-interactive::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  content: "";\n  opacity: 0;\n  pointer-events: none;\n  border-radius: inherit;\n}\n\n.mat-mdc-list-item > .mat-focus-indicator {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n}\n.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {\n  content: "";\n}\n\n.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {\n  white-space: nowrap;\n  line-height: normal;\n}\n.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n\nmat-action-list button {\n  background: none;\n  color: inherit;\n  border: none;\n  font: inherit;\n  outline: inherit;\n  -webkit-tap-highlight-color: transparent;\n  text-align: start;\n}\nmat-action-list button::-moz-focus-inner {\n  border: 0;\n}\n\n.mdc-list-item--with-leading-icon .mdc-list-item__start {\n  margin-inline-start: var(--%NS%mat-list-list-item-leading-icon-start-space, 16px);\n  margin-inline-end: var(--%NS%mat-list-list-item-leading-icon-end-space, 16px);\n}\n\n.mat-mdc-nav-list .mat-mdc-list-item {\n  border-radius: var(--%NS%mat-list-active-indicator-shape, var(--%NS%mat-sys-corner-full));\n  --%NS%mat-focus-indicator-border-radius: var(--%NS%mat-list-active-indicator-shape, var(--%NS%mat-sys-corner-full));\n}\n.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {\n  background-color: var(--%NS%mat-list-active-indicator-color, var(--%NS%mat-sys-secondary-container));\n}\n'],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatActionList, [{
    type: Component,
    args: [{
      selector: "mat-action-list",
      exportAs: "matActionList",
      template: "<ng-content></ng-content>",
      host: {
        "class": "mat-mdc-action-list mat-mdc-list-base mdc-list",
        "role": "group"
      },
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: MatListBase,
        useExisting: MatActionList
      }],
      styles: ['.mdc-list {\n  margin: 0;\n  padding: 8px 0;\n  list-style-type: none;\n}\n.mdc-list:focus {\n  outline: none;\n}\n\n.mdc-list-item {\n  display: flex;\n  position: relative;\n  justify-content: flex-start;\n  overflow: hidden;\n  padding: 0;\n  align-items: stretch;\n  cursor: pointer;\n  padding-left: 16px;\n  padding-right: 16px;\n  background-color: var(--mat-list-list-item-container-color, transparent);\n  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));\n}\n.mdc-list-item.mdc-list-item--selected {\n  background-color: var(--mat-list-list-item-selected-container-color);\n}\n.mdc-list-item:focus {\n  outline: 0;\n}\n.mdc-list-item.mdc-list-item--disabled {\n  cursor: auto;\n}\n.mdc-list-item.mdc-list-item--with-one-line {\n  height: var(--mat-list-list-item-one-line-container-height, 48px);\n}\n.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {\n  align-self: center;\n  margin-top: 0;\n}\n.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {\n  align-self: center;\n  margin-top: 0;\n}\n.mdc-list-item.mdc-list-item--with-two-lines {\n  height: var(--mat-list-list-item-two-line-container-height, 64px);\n}\n.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {\n  align-self: flex-start;\n  margin-top: 16px;\n}\n.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {\n  align-self: center;\n  margin-top: 0;\n}\n.mdc-list-item.mdc-list-item--with-three-lines {\n  height: var(--mat-list-list-item-three-line-container-height, 88px);\n}\n.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {\n  align-self: flex-start;\n  margin-top: 16px;\n}\n.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {\n  align-self: flex-start;\n  margin-top: 16px;\n}\n.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  content: "";\n  pointer-events: none;\n}\n\na.mdc-list-item {\n  color: inherit;\n  text-decoration: none;\n}\n\n.mdc-list-item__start {\n  fill: currentColor;\n  flex-shrink: 0;\n  pointer-events: none;\n}\n.mdc-list-item--with-leading-icon .mdc-list-item__start {\n  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));\n  width: var(--mat-list-list-item-leading-icon-size, 24px);\n  height: var(--mat-list-list-item-leading-icon-size, 24px);\n  margin-left: 16px;\n  margin-right: 32px;\n}\n[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {\n  margin-left: 32px;\n  margin-right: 16px;\n}\n.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {\n  color: var(--mat-list-list-item-hover-leading-icon-color);\n}\n.mdc-list-item--with-leading-avatar .mdc-list-item__start {\n  width: var(--mat-list-list-item-leading-avatar-size, 40px);\n  height: var(--mat-list-list-item-leading-avatar-size, 40px);\n  margin-left: 16px;\n  margin-right: 16px;\n  border-radius: 50%;\n}\n.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {\n  margin-left: 16px;\n  margin-right: 16px;\n  border-radius: 50%;\n}\n\n.mdc-list-item__end {\n  flex-shrink: 0;\n  pointer-events: none;\n}\n.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));\n  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));\n  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));\n  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));\n  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));\n}\n.mdc-list-item--with-trailing-icon .mdc-list-item__end {\n  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));\n  width: var(--mat-list-list-item-trailing-icon-size, 24px);\n  height: var(--mat-list-list-item-trailing-icon-size, 24px);\n}\n.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {\n  color: var(--mat-list-list-item-hover-trailing-icon-color);\n}\n.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {\n  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));\n}\n\n.mdc-list-item__content {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  align-self: center;\n  flex: 1;\n  pointer-events: none;\n}\n.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {\n  align-self: stretch;\n}\n\n.mdc-list-item__primary-text {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));\n  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));\n  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));\n  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));\n  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));\n  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));\n}\n.mdc-list-item:hover .mdc-list-item__primary-text {\n  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));\n}\n.mdc-list-item:focus .mdc-list-item__primary-text {\n  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));\n}\n.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {\n  display: block;\n  margin-top: 0;\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 28px;\n  content: "";\n  vertical-align: 0;\n}\n.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: "";\n  vertical-align: -20px;\n}\n\n.mdc-list-item__secondary-text {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: block;\n  margin-top: 0;\n  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));\n  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));\n  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));\n  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));\n  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));\n  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));\n}\n.mdc-list-item__secondary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: "";\n  vertical-align: 0;\n}\n.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {\n  white-space: normal;\n  line-height: 20px;\n}\n.mdc-list-item--with-overline .mdc-list-item__secondary-text {\n  white-space: nowrap;\n  line-height: auto;\n}\n\n.mdc-list-item--with-leading-radio.mdc-list-item,\n.mdc-list-item--with-leading-checkbox.mdc-list-item,\n.mdc-list-item--with-leading-icon.mdc-list-item,\n.mdc-list-item--with-leading-avatar.mdc-list-item {\n  padding-left: 0;\n  padding-right: 16px;\n}\n[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,\n[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,\n[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,\n[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {\n  padding-left: 16px;\n  padding-right: 0;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {\n  display: block;\n  margin-top: 0;\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: "";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: "";\n  vertical-align: -20px;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  display: block;\n  margin-top: 0;\n  line-height: normal;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: "";\n  vertical-align: 0;\n}\n\n.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {\n  padding-left: 0;\n  padding-right: 0;\n}\n.mdc-list-item--with-trailing-icon .mdc-list-item__end {\n  margin-left: 16px;\n  margin-right: 16px;\n}\n\n.mdc-list-item--with-trailing-meta.mdc-list-item {\n  padding-left: 16px;\n  padding-right: 0;\n}\n[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {\n  padding-left: 0;\n  padding-right: 16px;\n}\n.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  -webkit-user-select: none;\n  user-select: none;\n  margin-left: 28px;\n  margin-right: 16px;\n}\n[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  margin-left: 16px;\n  margin-right: 28px;\n}\n.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {\n  display: block;\n  line-height: normal;\n  align-self: flex-start;\n  margin-top: 0;\n}\n.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {\n  display: inline-block;\n  width: 0;\n  height: 28px;\n  content: "";\n  vertical-align: 0;\n}\n\n.mdc-list-item--with-leading-radio .mdc-list-item__start,\n.mdc-list-item--with-leading-checkbox .mdc-list-item__start {\n  margin-left: 8px;\n  margin-right: 24px;\n}\n[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,\n[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {\n  margin-left: 24px;\n  margin-right: 8px;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {\n  align-self: flex-start;\n  margin-top: 8px;\n}\n\n.mdc-list-item--with-trailing-radio.mdc-list-item,\n.mdc-list-item--with-trailing-checkbox.mdc-list-item {\n  padding-left: 16px;\n  padding-right: 0;\n}\n[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,\n[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {\n  padding-left: 0;\n  padding-right: 16px;\n}\n.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,\n.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,\n.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {\n  padding-left: 0;\n}\n[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,\n[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,\n[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {\n  padding-right: 0;\n}\n.mdc-list-item--with-trailing-radio .mdc-list-item__end,\n.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {\n  margin-left: 24px;\n  margin-right: 8px;\n}\n[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,\n[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {\n  margin-left: 8px;\n  margin-right: 24px;\n}\n.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,\n.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {\n  align-self: flex-start;\n  margin-top: 8px;\n}\n\n.mdc-list-group__subheader {\n  margin: 0.75rem 16px;\n}\n\n.mdc-list-item--disabled .mdc-list-item__start,\n.mdc-list-item--disabled .mdc-list-item__content,\n.mdc-list-item--disabled .mdc-list-item__end {\n  opacity: 1;\n}\n.mdc-list-item--disabled .mdc-list-item__primary-text,\n.mdc-list-item--disabled .mdc-list-item__secondary-text {\n  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);\n}\n.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {\n  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);\n}\n.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {\n  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);\n}\n\n.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {\n  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));\n}\n\n.mdc-list-item:hover::before {\n  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n\n.mdc-list-item.mdc-list-item--disabled::before {\n  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n\n.mdc-list-item:focus::before {\n  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n\n.mdc-list-item--disabled .mdc-radio,\n.mdc-list-item--disabled .mdc-checkbox {\n  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);\n}\n\n.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {\n  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));\n  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));\n}\n\n.mat-mdc-list-item-icon {\n  font-size: var(--mat-list-list-item-leading-icon-size, 24px);\n}\n\n@media (forced-colors: active) {\n  a.mdc-list-item--activated::after {\n    content: "";\n    position: absolute;\n    top: 50%;\n    right: 16px;\n    transform: translateY(-50%);\n    width: 10px;\n    height: 0;\n    border-bottom: solid 10px;\n    border-radius: 10px;\n  }\n  a.mdc-list-item--activated [dir=rtl]::after {\n    right: auto;\n    left: 16px;\n  }\n}\n\n.mat-mdc-list-base {\n  display: block;\n}\n.mat-mdc-list-base .mdc-list-item__start,\n.mat-mdc-list-base .mdc-list-item__end,\n.mat-mdc-list-base .mdc-list-item__content {\n  pointer-events: auto;\n}\n\n.mat-mdc-list-item,\n.mat-mdc-list-option {\n  width: 100%;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),\n.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {\n  cursor: default;\n}\n.mat-mdc-list-item .mat-divider-inset,\n.mat-mdc-list-option .mat-divider-inset {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,\n.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {\n  margin-left: 72px;\n}\n[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,\n[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {\n  margin-right: 72px;\n}\n\n.mat-mdc-list-item-interactive::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  content: "";\n  opacity: 0;\n  pointer-events: none;\n  border-radius: inherit;\n}\n\n.mat-mdc-list-item > .mat-focus-indicator {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n}\n.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {\n  content: "";\n}\n\n.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {\n  white-space: nowrap;\n  line-height: normal;\n}\n.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n\nmat-action-list button {\n  background: none;\n  color: inherit;\n  border: none;\n  font: inherit;\n  outline: inherit;\n  -webkit-tap-highlight-color: transparent;\n  text-align: start;\n}\nmat-action-list button::-moz-focus-inner {\n  border: 0;\n}\n\n.mdc-list-item--with-leading-icon .mdc-list-item__start {\n  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);\n  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);\n}\n\n.mat-mdc-nav-list .mat-mdc-list-item {\n  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));\n  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));\n}\n.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {\n  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));\n}\n']
    }]
  }], null, null);
})();
var MAT_LIST = new InjectionToken("MatList");
var MatList = class _MatList extends MatListBase {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatList_BaseFactory;
    return function MatList_Factory(__ngFactoryType__) {
      return (\u0275MatList_BaseFactory || (\u0275MatList_BaseFactory = \u0275\u0275getInheritedFactory(_MatList)))(__ngFactoryType__ || _MatList);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatList,
    selectors: [["mat-list"]],
    hostAttrs: [1, "mat-mdc-list", "mat-mdc-list-base", "mdc-list"],
    exportAs: ["matList"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MatListBase,
      useExisting: _MatList
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c04,
    decls: 1,
    vars: 0,
    template: function MatList_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    styles: [_c14],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatList, [{
    type: Component,
    args: [{
      selector: "mat-list",
      exportAs: "matList",
      template: "<ng-content></ng-content>",
      host: {
        "class": "mat-mdc-list mat-mdc-list-base mdc-list"
      },
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: MatListBase,
        useExisting: MatList
      }],
      styles: ['.mdc-list {\n  margin: 0;\n  padding: 8px 0;\n  list-style-type: none;\n}\n.mdc-list:focus {\n  outline: none;\n}\n\n.mdc-list-item {\n  display: flex;\n  position: relative;\n  justify-content: flex-start;\n  overflow: hidden;\n  padding: 0;\n  align-items: stretch;\n  cursor: pointer;\n  padding-left: 16px;\n  padding-right: 16px;\n  background-color: var(--mat-list-list-item-container-color, transparent);\n  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));\n}\n.mdc-list-item.mdc-list-item--selected {\n  background-color: var(--mat-list-list-item-selected-container-color);\n}\n.mdc-list-item:focus {\n  outline: 0;\n}\n.mdc-list-item.mdc-list-item--disabled {\n  cursor: auto;\n}\n.mdc-list-item.mdc-list-item--with-one-line {\n  height: var(--mat-list-list-item-one-line-container-height, 48px);\n}\n.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {\n  align-self: center;\n  margin-top: 0;\n}\n.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {\n  align-self: center;\n  margin-top: 0;\n}\n.mdc-list-item.mdc-list-item--with-two-lines {\n  height: var(--mat-list-list-item-two-line-container-height, 64px);\n}\n.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {\n  align-self: flex-start;\n  margin-top: 16px;\n}\n.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {\n  align-self: center;\n  margin-top: 0;\n}\n.mdc-list-item.mdc-list-item--with-three-lines {\n  height: var(--mat-list-list-item-three-line-container-height, 88px);\n}\n.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {\n  align-self: flex-start;\n  margin-top: 16px;\n}\n.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {\n  align-self: flex-start;\n  margin-top: 16px;\n}\n.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  content: "";\n  pointer-events: none;\n}\n\na.mdc-list-item {\n  color: inherit;\n  text-decoration: none;\n}\n\n.mdc-list-item__start {\n  fill: currentColor;\n  flex-shrink: 0;\n  pointer-events: none;\n}\n.mdc-list-item--with-leading-icon .mdc-list-item__start {\n  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));\n  width: var(--mat-list-list-item-leading-icon-size, 24px);\n  height: var(--mat-list-list-item-leading-icon-size, 24px);\n  margin-left: 16px;\n  margin-right: 32px;\n}\n[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {\n  margin-left: 32px;\n  margin-right: 16px;\n}\n.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {\n  color: var(--mat-list-list-item-hover-leading-icon-color);\n}\n.mdc-list-item--with-leading-avatar .mdc-list-item__start {\n  width: var(--mat-list-list-item-leading-avatar-size, 40px);\n  height: var(--mat-list-list-item-leading-avatar-size, 40px);\n  margin-left: 16px;\n  margin-right: 16px;\n  border-radius: 50%;\n}\n.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {\n  margin-left: 16px;\n  margin-right: 16px;\n  border-radius: 50%;\n}\n\n.mdc-list-item__end {\n  flex-shrink: 0;\n  pointer-events: none;\n}\n.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));\n  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));\n  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));\n  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));\n  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));\n}\n.mdc-list-item--with-trailing-icon .mdc-list-item__end {\n  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));\n  width: var(--mat-list-list-item-trailing-icon-size, 24px);\n  height: var(--mat-list-list-item-trailing-icon-size, 24px);\n}\n.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {\n  color: var(--mat-list-list-item-hover-trailing-icon-color);\n}\n.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {\n  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));\n}\n\n.mdc-list-item__content {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  align-self: center;\n  flex: 1;\n  pointer-events: none;\n}\n.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {\n  align-self: stretch;\n}\n\n.mdc-list-item__primary-text {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));\n  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));\n  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));\n  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));\n  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));\n  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));\n}\n.mdc-list-item:hover .mdc-list-item__primary-text {\n  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));\n}\n.mdc-list-item:focus .mdc-list-item__primary-text {\n  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));\n}\n.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {\n  display: block;\n  margin-top: 0;\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 28px;\n  content: "";\n  vertical-align: 0;\n}\n.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: "";\n  vertical-align: -20px;\n}\n\n.mdc-list-item__secondary-text {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: block;\n  margin-top: 0;\n  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));\n  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));\n  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));\n  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));\n  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));\n  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));\n}\n.mdc-list-item__secondary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: "";\n  vertical-align: 0;\n}\n.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {\n  white-space: normal;\n  line-height: 20px;\n}\n.mdc-list-item--with-overline .mdc-list-item__secondary-text {\n  white-space: nowrap;\n  line-height: auto;\n}\n\n.mdc-list-item--with-leading-radio.mdc-list-item,\n.mdc-list-item--with-leading-checkbox.mdc-list-item,\n.mdc-list-item--with-leading-icon.mdc-list-item,\n.mdc-list-item--with-leading-avatar.mdc-list-item {\n  padding-left: 0;\n  padding-right: 16px;\n}\n[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,\n[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,\n[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,\n[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {\n  padding-left: 16px;\n  padding-right: 0;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {\n  display: block;\n  margin-top: 0;\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: "";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: "";\n  vertical-align: -20px;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  display: block;\n  margin-top: 0;\n  line-height: normal;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: "";\n  vertical-align: 0;\n}\n\n.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {\n  padding-left: 0;\n  padding-right: 0;\n}\n.mdc-list-item--with-trailing-icon .mdc-list-item__end {\n  margin-left: 16px;\n  margin-right: 16px;\n}\n\n.mdc-list-item--with-trailing-meta.mdc-list-item {\n  padding-left: 16px;\n  padding-right: 0;\n}\n[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {\n  padding-left: 0;\n  padding-right: 16px;\n}\n.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  -webkit-user-select: none;\n  user-select: none;\n  margin-left: 28px;\n  margin-right: 16px;\n}\n[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  margin-left: 16px;\n  margin-right: 28px;\n}\n.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {\n  display: block;\n  line-height: normal;\n  align-self: flex-start;\n  margin-top: 0;\n}\n.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {\n  display: inline-block;\n  width: 0;\n  height: 28px;\n  content: "";\n  vertical-align: 0;\n}\n\n.mdc-list-item--with-leading-radio .mdc-list-item__start,\n.mdc-list-item--with-leading-checkbox .mdc-list-item__start {\n  margin-left: 8px;\n  margin-right: 24px;\n}\n[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,\n[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {\n  margin-left: 24px;\n  margin-right: 8px;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {\n  align-self: flex-start;\n  margin-top: 8px;\n}\n\n.mdc-list-item--with-trailing-radio.mdc-list-item,\n.mdc-list-item--with-trailing-checkbox.mdc-list-item {\n  padding-left: 16px;\n  padding-right: 0;\n}\n[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,\n[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {\n  padding-left: 0;\n  padding-right: 16px;\n}\n.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,\n.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,\n.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {\n  padding-left: 0;\n}\n[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,\n[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,\n[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {\n  padding-right: 0;\n}\n.mdc-list-item--with-trailing-radio .mdc-list-item__end,\n.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {\n  margin-left: 24px;\n  margin-right: 8px;\n}\n[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,\n[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {\n  margin-left: 8px;\n  margin-right: 24px;\n}\n.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,\n.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {\n  align-self: flex-start;\n  margin-top: 8px;\n}\n\n.mdc-list-group__subheader {\n  margin: 0.75rem 16px;\n}\n\n.mdc-list-item--disabled .mdc-list-item__start,\n.mdc-list-item--disabled .mdc-list-item__content,\n.mdc-list-item--disabled .mdc-list-item__end {\n  opacity: 1;\n}\n.mdc-list-item--disabled .mdc-list-item__primary-text,\n.mdc-list-item--disabled .mdc-list-item__secondary-text {\n  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);\n}\n.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {\n  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);\n}\n.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {\n  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);\n}\n\n.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {\n  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));\n}\n\n.mdc-list-item:hover::before {\n  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n\n.mdc-list-item.mdc-list-item--disabled::before {\n  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n\n.mdc-list-item:focus::before {\n  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n\n.mdc-list-item--disabled .mdc-radio,\n.mdc-list-item--disabled .mdc-checkbox {\n  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);\n}\n\n.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {\n  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));\n  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));\n}\n\n.mat-mdc-list-item-icon {\n  font-size: var(--mat-list-list-item-leading-icon-size, 24px);\n}\n\n@media (forced-colors: active) {\n  a.mdc-list-item--activated::after {\n    content: "";\n    position: absolute;\n    top: 50%;\n    right: 16px;\n    transform: translateY(-50%);\n    width: 10px;\n    height: 0;\n    border-bottom: solid 10px;\n    border-radius: 10px;\n  }\n  a.mdc-list-item--activated [dir=rtl]::after {\n    right: auto;\n    left: 16px;\n  }\n}\n\n.mat-mdc-list-base {\n  display: block;\n}\n.mat-mdc-list-base .mdc-list-item__start,\n.mat-mdc-list-base .mdc-list-item__end,\n.mat-mdc-list-base .mdc-list-item__content {\n  pointer-events: auto;\n}\n\n.mat-mdc-list-item,\n.mat-mdc-list-option {\n  width: 100%;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),\n.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {\n  cursor: default;\n}\n.mat-mdc-list-item .mat-divider-inset,\n.mat-mdc-list-option .mat-divider-inset {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,\n.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {\n  margin-left: 72px;\n}\n[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,\n[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {\n  margin-right: 72px;\n}\n\n.mat-mdc-list-item-interactive::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  content: "";\n  opacity: 0;\n  pointer-events: none;\n  border-radius: inherit;\n}\n\n.mat-mdc-list-item > .mat-focus-indicator {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n}\n.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {\n  content: "";\n}\n\n.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {\n  white-space: nowrap;\n  line-height: normal;\n}\n.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n\nmat-action-list button {\n  background: none;\n  color: inherit;\n  border: none;\n  font: inherit;\n  outline: inherit;\n  -webkit-tap-highlight-color: transparent;\n  text-align: start;\n}\nmat-action-list button::-moz-focus-inner {\n  border: 0;\n}\n\n.mdc-list-item--with-leading-icon .mdc-list-item__start {\n  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);\n  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);\n}\n\n.mat-mdc-nav-list .mat-mdc-list-item {\n  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));\n  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));\n}\n.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {\n  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));\n}\n']
    }]
  }], null, null);
})();
var MatListItem = class _MatListItem extends MatListItemBase {
  _lines;
  _titles;
  _meta;
  _unscopedContent;
  _itemText;
  get activated() {
    return this._activated;
  }
  set activated(activated) {
    this._activated = coerceBooleanProperty(activated);
  }
  _activated = false;
  _getAriaCurrent() {
    return this._hostElement.nodeName === "A" && this._activated ? "page" : null;
  }
  _hasBothLeadingAndTrailing() {
    return this._meta.length !== 0 && (this._avatars.length !== 0 || this._icons.length !== 0);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatListItem_BaseFactory;
    return function MatListItem_Factory(__ngFactoryType__) {
      return (\u0275MatListItem_BaseFactory || (\u0275MatListItem_BaseFactory = \u0275\u0275getInheritedFactory(_MatListItem)))(__ngFactoryType__ || _MatListItem);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatListItem,
    selectors: [["mat-list-item"], ["a", "mat-list-item", ""], ["button", "mat-list-item", ""]],
    contentQueries: function MatListItem_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatListItemLine, 5)(dirIndex, MatListItemTitle, 5)(dirIndex, MatListItemMeta, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._lines = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._titles = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._meta = _t);
      }
    },
    viewQuery: function MatListItem_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c23, 5)(_c32, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._unscopedContent = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._itemText = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-list-item", "mdc-list-item"],
    hostVars: 13,
    hostBindings: function MatListItem_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-current", ctx._getAriaCurrent());
        \u0275\u0275classProp("mdc-list-item--activated", ctx.activated)("mdc-list-item--with-leading-avatar", ctx._avatars.length !== 0)("mdc-list-item--with-leading-icon", ctx._icons.length !== 0)("mdc-list-item--with-trailing-meta", ctx._meta.length !== 0)("mat-mdc-list-item-both-leading-and-trailing", ctx._hasBothLeadingAndTrailing())("_mat-animation-noopable", ctx._noopAnimations);
      }
    },
    inputs: {
      activated: "activated"
    },
    exportAs: ["matListItem"],
    features: [\u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c5,
    decls: 10,
    vars: 0,
    consts: [["unscopedContent", ""], [1, "mdc-list-item__content"], [1, "mat-mdc-list-item-unscoped-content", 3, "cdkObserveContent"], [1, "mat-focus-indicator"]],
    template: function MatListItem_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c42);
        \u0275\u0275projection(0);
        \u0275\u0275elementStart(1, "span", 1);
        \u0275\u0275projection(2, 1);
        \u0275\u0275projection(3, 2);
        \u0275\u0275elementStart(4, "span", 2, 0);
        \u0275\u0275listener("cdkObserveContent", function MatListItem_Template_span_cdkObserveContent_4_listener() {
          return ctx._updateItemLines(true);
        });
        \u0275\u0275projection(6, 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275projection(7, 4);
        \u0275\u0275projection(8, 5);
        \u0275\u0275element(9, "div", 3);
      }
    },
    dependencies: [CdkObserveContent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatListItem, [{
    type: Component,
    args: [{
      selector: "mat-list-item, a[mat-list-item], button[mat-list-item]",
      exportAs: "matListItem",
      host: {
        "class": "mat-mdc-list-item mdc-list-item",
        "[class.mdc-list-item--activated]": "activated",
        "[class.mdc-list-item--with-leading-avatar]": "_avatars.length !== 0",
        "[class.mdc-list-item--with-leading-icon]": "_icons.length !== 0",
        "[class.mdc-list-item--with-trailing-meta]": "_meta.length !== 0",
        "[class.mat-mdc-list-item-both-leading-and-trailing]": "_hasBothLeadingAndTrailing()",
        "[class._mat-animation-noopable]": "_noopAnimations",
        "[attr.aria-current]": "_getAriaCurrent()"
      },
      encapsulation: ViewEncapsulation.None,
      imports: [CdkObserveContent],
      template: '<ng-content select="[matListItemAvatar],[matListItemIcon]"></ng-content>\n\n<span class="mdc-list-item__content">\n  <ng-content select="[matListItemTitle]"></ng-content>\n  <ng-content select="[matListItemLine]"></ng-content>\n  <span #unscopedContent class="mat-mdc-list-item-unscoped-content"\n        (cdkObserveContent)="_updateItemLines(true)">\n    <ng-content></ng-content>\n  </span>\n</span>\n\n<ng-content select="[matListItemMeta]"></ng-content>\n\n<ng-content select="mat-divider"></ng-content>\n\n<!--\n  Strong focus indicator element. MDC uses the `::before` pseudo element for the default\n  focus/hover/selected state, so we need a separate element.\n-->\n<div class="mat-focus-indicator"></div>\n'
    }]
  }], null, {
    _lines: [{
      type: ContentChildren,
      args: [MatListItemLine, {
        descendants: true
      }]
    }],
    _titles: [{
      type: ContentChildren,
      args: [MatListItemTitle, {
        descendants: true
      }]
    }],
    _meta: [{
      type: ContentChildren,
      args: [MatListItemMeta, {
        descendants: true
      }]
    }],
    _unscopedContent: [{
      type: ViewChild,
      args: ["unscopedContent"]
    }],
    _itemText: [{
      type: ViewChild,
      args: ["text"]
    }],
    activated: [{
      type: Input
    }]
  });
})();
var SELECTION_LIST = new InjectionToken("SelectionList");
var MatListOption = class _MatListOption extends MatListItemBase {
  _selectionList = inject(SELECTION_LIST);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _lines;
  _titles;
  _unscopedContent;
  selectedChange = new EventEmitter();
  togglePosition = "after";
  get color() {
    return this._color || this._selectionList.color;
  }
  set color(newValue) {
    this._color = newValue;
  }
  _color;
  get value() {
    return this._value;
  }
  set value(newValue) {
    if (this.selected && newValue !== this.value && this._inputsInitialized) {
      this.selected = false;
    }
    this._value = newValue;
  }
  _value;
  get selected() {
    return this._selectionList.selectedOptions.isSelected(this);
  }
  set selected(value) {
    const isSelected = coerceBooleanProperty(value);
    if (isSelected !== this._selected) {
      this._setSelected(isSelected);
      if (isSelected || this._selectionList.multiple) {
        this._selectionList._reportValueChange();
      }
    }
  }
  _selected = false;
  _inputsInitialized = false;
  ngOnInit() {
    const list = this._selectionList;
    if (list._value && list._value.some((value) => list.compareWith(this._value, value))) {
      this._setSelected(true);
    }
    const wasSelected = this._selected;
    Promise.resolve().then(() => {
      if (this._selected || wasSelected) {
        this.selected = true;
        this._changeDetectorRef.markForCheck();
      }
    });
    this._inputsInitialized = true;
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    if (this.selected) {
      Promise.resolve().then(() => {
        this.selected = false;
      });
    }
  }
  toggle() {
    this.selected = !this.selected;
  }
  focus() {
    this._hostElement.focus();
  }
  getLabel() {
    const titleElement = this._titles?.get(0)?._elementRef.nativeElement;
    const labelEl = titleElement || this._unscopedContent?.nativeElement;
    return labelEl?.textContent || "";
  }
  _hasCheckboxAt(position) {
    return this._selectionList.multiple && this._getTogglePosition() === position;
  }
  _hasRadioAt(position) {
    return !this._selectionList.multiple && this._getTogglePosition() === position && !this._selectionList.hideSingleSelectionIndicator;
  }
  _hasIconsOrAvatarsAt(position) {
    return this._hasProjected("icons", position) || this._hasProjected("avatars", position);
  }
  _hasProjected(type, position) {
    return this._getTogglePosition() !== position && (type === "avatars" ? this._avatars.length !== 0 : this._icons.length !== 0);
  }
  _handleBlur() {
    this._selectionList._onTouched();
  }
  _getTogglePosition() {
    return this.togglePosition || "after";
  }
  _setSelected(selected) {
    if (selected === this._selected) {
      return false;
    }
    this._selected = selected;
    if (selected) {
      this._selectionList.selectedOptions.select(this);
    } else {
      this._selectionList.selectedOptions.deselect(this);
    }
    this.selectedChange.emit(selected);
    this._changeDetectorRef.markForCheck();
    return true;
  }
  _markForCheck() {
    this._changeDetectorRef.markForCheck();
  }
  _toggleOnInteraction() {
    if (!this.disabled) {
      if (this._selectionList.multiple) {
        this.selected = !this.selected;
        this._selectionList._emitChangeEvent([this]);
      } else if (!this.selected) {
        this.selected = true;
        this._selectionList._emitChangeEvent([this]);
      }
    }
  }
  _setTabindex(value) {
    this._hostElement.setAttribute("tabindex", value + "");
  }
  _hasBothLeadingAndTrailing() {
    const hasLeading = this._hasProjected("avatars", "before") || this._hasProjected("icons", "before") || this._hasCheckboxAt("before") || this._hasRadioAt("before");
    const hasTrailing = this._hasProjected("icons", "after") || this._hasProjected("avatars", "after") || this._hasCheckboxAt("after") || this._hasRadioAt("after");
    return hasLeading && hasTrailing;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatListOption_BaseFactory;
    return function MatListOption_Factory(__ngFactoryType__) {
      return (\u0275MatListOption_BaseFactory || (\u0275MatListOption_BaseFactory = \u0275\u0275getInheritedFactory(_MatListOption)))(__ngFactoryType__ || _MatListOption);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatListOption,
    selectors: [["mat-list-option"]],
    contentQueries: function MatListOption_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatListItemLine, 5)(dirIndex, MatListItemTitle, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._lines = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._titles = _t);
      }
    },
    viewQuery: function MatListOption_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c23, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._unscopedContent = _t.first);
      }
    },
    hostAttrs: ["role", "option", 1, "mat-mdc-list-item", "mat-mdc-list-option", "mdc-list-item"],
    hostVars: 27,
    hostBindings: function MatListOption_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("blur", function MatListOption_blur_HostBindingHandler() {
          return ctx._handleBlur();
        })("click", function MatListOption_click_HostBindingHandler() {
          return ctx._toggleOnInteraction();
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-selected", ctx.selected);
        \u0275\u0275classProp("mdc-list-item--selected", ctx.selected && !ctx._selectionList.multiple && ctx._selectionList.hideSingleSelectionIndicator)("mdc-list-item--with-leading-avatar", ctx._hasProjected("avatars", "before"))("mdc-list-item--with-leading-icon", ctx._hasProjected("icons", "before"))("mdc-list-item--with-trailing-icon", ctx._hasProjected("icons", "after"))("mat-mdc-list-option-with-trailing-avatar", ctx._hasProjected("avatars", "after"))("mdc-list-item--with-leading-checkbox", ctx._hasCheckboxAt("before"))("mdc-list-item--with-trailing-checkbox", ctx._hasCheckboxAt("after"))("mdc-list-item--with-leading-radio", ctx._hasRadioAt("before"))("mdc-list-item--with-trailing-radio", ctx._hasRadioAt("after"))("mat-mdc-list-item-both-leading-and-trailing", ctx._hasBothLeadingAndTrailing())("mat-accent", ctx.color !== "primary" && ctx.color !== "warn")("mat-warn", ctx.color === "warn")("_mat-animation-noopable", ctx._noopAnimations);
      }
    },
    inputs: {
      togglePosition: "togglePosition",
      color: "color",
      value: "value",
      selected: "selected"
    },
    outputs: {
      selectedChange: "selectedChange"
    },
    exportAs: ["matListOption"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MatListItemBase,
      useExisting: _MatListOption
    }, {
      provide: LIST_OPTION,
      useExisting: _MatListOption
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c7,
    decls: 20,
    vars: 4,
    consts: [["icons", ""], ["checkbox", ""], ["radio", ""], ["unscopedContent", ""], [1, "mdc-list-item__start", "mat-mdc-list-option-checkbox-before"], [1, "mdc-list-item__start", "mat-mdc-list-option-radio-before"], [3, "ngTemplateOutlet"], [1, "mdc-list-item__content"], [1, "mat-mdc-list-item-unscoped-content", 3, "cdkObserveContent"], [1, "mdc-list-item__end"], [1, "mat-focus-indicator"], [1, "mdc-checkbox"], ["type", "checkbox", 1, "mdc-checkbox__native-control", 3, "checked", "disabled"], [1, "mdc-checkbox__background"], ["viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-checkbox__checkmark"], ["fill", "none", "d", "M1.73,12.91 8.1,19.28 22.79,4.59", 1, "mdc-checkbox__checkmark-path"], [1, "mdc-checkbox__mixedmark"], [1, "mdc-radio"], ["type", "radio", 1, "mdc-radio__native-control", 3, "checked", "disabled"], [1, "mdc-radio__background"], [1, "mdc-radio__outer-circle"], [1, "mdc-radio__inner-circle"]],
    template: function MatListOption_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c6);
        \u0275\u0275template(0, MatListOption_ng_template_0_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(2, MatListOption_ng_template_2_Template, 6, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(4, MatListOption_ng_template_4_Template, 5, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
        \u0275\u0275conditionalCreate(6, MatListOption_Conditional_6_Template, 2, 1, "span", 4)(7, MatListOption_Conditional_7_Template, 2, 1, "span", 5);
        \u0275\u0275conditionalCreate(8, MatListOption_Conditional_8_Template, 1, 1, null, 6);
        \u0275\u0275elementStart(9, "span", 7);
        \u0275\u0275projection(10);
        \u0275\u0275projection(11, 1);
        \u0275\u0275elementStart(12, "span", 8, 3);
        \u0275\u0275listener("cdkObserveContent", function MatListOption_Template_span_cdkObserveContent_12_listener() {
          return ctx._updateItemLines(true);
        });
        \u0275\u0275projection(14, 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(15, MatListOption_Conditional_15_Template, 2, 1, "span", 9)(16, MatListOption_Conditional_16_Template, 2, 1, "span", 9);
        \u0275\u0275conditionalCreate(17, MatListOption_Conditional_17_Template, 1, 1, null, 6);
        \u0275\u0275projection(18, 3);
        \u0275\u0275element(19, "div", 10);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx._hasCheckboxAt("before") ? 6 : ctx._hasRadioAt("before") ? 7 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx._hasIconsOrAvatarsAt("before") ? 8 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx._hasCheckboxAt("after") ? 15 : ctx._hasRadioAt("after") ? 16 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx._hasIconsOrAvatarsAt("after") ? 17 : -1);
      }
    },
    dependencies: [NgTemplateOutlet, CdkObserveContent],
    styles: ['.mat-mdc-list-option-with-trailing-avatar.mdc-list-item, [dir=rtl] .mat-mdc-list-option-with-trailing-avatar.mdc-list-item {\n  padding-left: 0;\n  padding-right: 0;\n}\n.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end {\n  margin-left: 16px;\n  margin-right: 16px;\n  width: 40px;\n  height: 40px;\n}\n.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {\n  display: block;\n  margin-top: 0;\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: "";\n  vertical-align: 0;\n}\n.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: "";\n  vertical-align: -20px;\n}\n.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end {\n  border-radius: 50%;\n}\n\n.mat-mdc-list-option .mdc-checkbox {\n  display: inline-block;\n  position: relative;\n  flex: 0 0 18px;\n  box-sizing: content-box;\n  width: 18px;\n  height: 18px;\n  line-height: 0;\n  white-space: nowrap;\n  cursor: pointer;\n  vertical-align: bottom;\n  padding: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);\n  margin: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);\n}\n.mat-mdc-list-option .mdc-checkbox .mdc-checkbox__native-control {\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  opacity: 0;\n  cursor: inherit;\n  z-index: 1;\n  width: var(--%NS%mat-checkbox-state-layer-size, 40px);\n  height: var(--%NS%mat-checkbox-state-layer-size, 40px);\n  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);\n  right: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);\n  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);\n}\n.mat-mdc-list-option .mdc-checkbox--disabled {\n  cursor: default;\n  pointer-events: none;\n}\n.mat-mdc-list-option .mdc-checkbox__background {\n  display: inline-flex;\n  position: absolute;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  width: 18px;\n  height: 18px;\n  border: 2px solid currentColor;\n  border-radius: 2px;\n  background-color: transparent;\n  pointer-events: none;\n  will-change: background-color, border-color;\n  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);\n  -webkit-print-color-adjust: exact;\n  color-adjust: exact;\n  border-color: var(--%NS%mat-checkbox-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));\n  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);\n  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);\n}\n.mat-mdc-list-option .mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,\n.mat-mdc-list-option .mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {\n  border-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));\n  background-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));\n}\n.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__background {\n  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));\n}\n@media (forced-colors: active) {\n  .mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__background {\n    border-color: GrayText;\n  }\n}\n.mat-mdc-list-option .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,\n.mat-mdc-list-option .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {\n  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));\n  border-color: transparent;\n}\n@media (forced-colors: active) {\n  .mat-mdc-list-option .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,\n  .mat-mdc-list-option .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {\n    border-color: GrayText;\n  }\n}\n.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,\n.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {\n  border-color: var(--%NS%mat-checkbox-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));\n  background-color: transparent;\n}\n.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,\n.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {\n  border-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));\n  background-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));\n}\n.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,\n.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {\n  border-color: var(--%NS%mat-checkbox-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));\n}\n.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,\n.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {\n  border-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));\n  background-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));\n}\n.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,\n.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,\n.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {\n  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));\n}\n@media (forced-colors: active) {\n  .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,\n  .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,\n  .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {\n    border-color: GrayText;\n  }\n}\n.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,\n.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {\n  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));\n  border-color: transparent;\n}\n.mat-mdc-list-option .mdc-checkbox__checkmark {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  opacity: 0;\n  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);\n  color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));\n}\n@media (forced-colors: active) {\n  .mat-mdc-list-option .mdc-checkbox__checkmark {\n    color: CanvasText;\n  }\n}\n.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {\n  color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));\n}\n@media (forced-colors: active) {\n  .mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {\n    color: GrayText;\n  }\n}\n.mat-mdc-list-option .mdc-checkbox__checkmark-path {\n  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);\n  stroke: currentColor;\n  stroke-width: 3.12px;\n  stroke-dashoffset: 29.7833385;\n  stroke-dasharray: 29.7833385;\n}\n.mat-mdc-list-option .mdc-checkbox__mixedmark {\n  width: 100%;\n  height: 0;\n  transform: scaleX(0) rotate(0deg);\n  border-width: 1px;\n  border-style: solid;\n  opacity: 0;\n  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);\n  border-color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));\n}\n@media (forced-colors: active) {\n  .mat-mdc-list-option .mdc-checkbox__mixedmark {\n    margin: 0 1px;\n  }\n}\n.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {\n  border-color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));\n}\n@media (forced-colors: active) {\n  .mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {\n    border-color: GrayText;\n  }\n}\n.mat-mdc-list-option .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,\n.mat-mdc-list-option .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,\n.mat-mdc-list-option .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,\n.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {\n  animation-duration: 180ms;\n  animation-timing-function: linear;\n}\n.mat-mdc-list-option .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {\n  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;\n  transition: none;\n}\n.mat-mdc-list-option .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {\n  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;\n  transition: none;\n}\n.mat-mdc-list-option .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {\n  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;\n  transition: none;\n}\n.mat-mdc-list-option .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {\n  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;\n  transition: none;\n}\n.mat-mdc-list-option .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {\n  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;\n  transition: none;\n}\n.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {\n  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;\n  transition: none;\n}\n.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {\n  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;\n  transition: none;\n}\n.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {\n  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;\n  transition: none;\n}\n.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,\n.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {\n  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,\n.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {\n  stroke-dashoffset: 0;\n}\n.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {\n  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);\n  opacity: 1;\n}\n.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {\n  transform: scaleX(1) rotate(-45deg);\n}\n.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {\n  transform: rotate(45deg);\n  opacity: 0;\n  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {\n  transform: scaleX(1) rotate(0deg);\n  opacity: 1;\n}\n@keyframes mdc-checkbox-unchecked-checked-checkmark-path {\n  0%, 50% {\n    stroke-dashoffset: 29.7833385;\n  }\n  50% {\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {\n  0%, 68.2% {\n    transform: scaleX(0);\n  }\n  68.2% {\n    animation-timing-function: cubic-bezier(0, 0, 0, 1);\n  }\n  100% {\n    transform: scaleX(1);\n  }\n}\n@keyframes mdc-checkbox-checked-unchecked-checkmark-path {\n  from {\n    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);\n    opacity: 1;\n    stroke-dashoffset: 0;\n  }\n  to {\n    opacity: 0;\n    stroke-dashoffset: -29.7833385;\n  }\n}\n@keyframes mdc-checkbox-checked-indeterminate-checkmark {\n  from {\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n    transform: rotate(0deg);\n    opacity: 1;\n  }\n  to {\n    transform: rotate(45deg);\n    opacity: 0;\n  }\n}\n@keyframes mdc-checkbox-indeterminate-checked-checkmark {\n  from {\n    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);\n    transform: rotate(45deg);\n    opacity: 0;\n  }\n  to {\n    transform: rotate(360deg);\n    opacity: 1;\n  }\n}\n@keyframes mdc-checkbox-checked-indeterminate-mixedmark {\n  from {\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n    transform: rotate(-45deg);\n    opacity: 0;\n  }\n  to {\n    transform: rotate(0deg);\n    opacity: 1;\n  }\n}\n@keyframes mdc-checkbox-indeterminate-checked-mixedmark {\n  from {\n    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);\n    transform: rotate(0deg);\n    opacity: 1;\n  }\n  to {\n    transform: rotate(315deg);\n    opacity: 0;\n  }\n}\n@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {\n  0% {\n    animation-timing-function: linear;\n    transform: scaleX(1);\n    opacity: 1;\n  }\n  32.8%, 100% {\n    transform: scaleX(0);\n    opacity: 0;\n  }\n}\n.mat-mdc-list-option .mdc-radio {\n  display: inline-block;\n  position: relative;\n  flex: 0 0 auto;\n  box-sizing: content-box;\n  width: 20px;\n  height: 20px;\n  will-change: opacity, transform, border-color, color;\n  padding: calc((var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);\n}\n.mat-mdc-list-option .mdc-radio__background {\n  display: inline-block;\n  position: relative;\n  box-sizing: border-box;\n  width: 20px;\n  height: 20px;\n}\n.mat-mdc-list-option .mdc-radio__background::before {\n  position: absolute;\n  transform: scale(0, 0);\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: "";\n  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);\n  width: var(--%NS%mat-radio-state-layer-size, 40px);\n  height: var(--%NS%mat-radio-state-layer-size, 40px);\n  top: calc(-1 * (var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);\n  left: calc(-1 * (var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);\n}\n.mat-mdc-list-option .mdc-radio__outer-circle {\n  position: absolute;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border-width: 2px;\n  border-style: solid;\n  border-radius: 50%;\n  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n.mat-mdc-list-option .mdc-radio__inner-circle {\n  position: absolute;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  transform: scale(0);\n  border-radius: 50%;\n  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n@media (forced-colors: active) {\n  .mat-mdc-list-option .mdc-radio__inner-circle {\n    background-color: CanvasText !important;\n  }\n}\n.mat-mdc-list-option .mdc-radio__native-control {\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  opacity: 0;\n  top: 0;\n  right: 0;\n  left: 0;\n  cursor: inherit;\n  z-index: 1;\n  width: var(--%NS%mat-radio-state-layer-size, 40px);\n  height: var(--%NS%mat-radio-state-layer-size, 40px);\n}\n.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background {\n  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {\n  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {\n  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-list-option .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--%NS%mat-radio-disabled-unselected-icon-color, var(--%NS%mat-sys-on-surface));\n  opacity: var(--%NS%mat-radio-disabled-unselected-icon-opacity, 0.38);\n}\n.mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background {\n  cursor: default;\n}\n.mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));\n  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);\n}\n.mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {\n  background-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface, currentColor));\n  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);\n}\n.mat-mdc-list-option .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--%NS%mat-radio-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mat-mdc-list-option .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--%NS%mat-radio-selected-icon-color, var(--%NS%mat-sys-primary));\n}\n.mat-mdc-list-option .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {\n  background-color: var(--%NS%mat-radio-selected-icon-color, var(--%NS%mat-sys-primary, currentColor));\n}\n.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {\n  transform: scale(0.5);\n  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-list-option._mat-animation-noopable .mdc-radio__background::before,\n.mat-mdc-list-option._mat-animation-noopable .mdc-radio__outer-circle,\n.mat-mdc-list-option._mat-animation-noopable .mdc-radio__inner-circle {\n  transition: none !important;\n}\n.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mat-mdc-checkbox-touch-target,\n.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__native-control,\n.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__ripple,\n.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,\n.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background,\n.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,\n.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,\n.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark, .mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mat-mdc-checkbox-touch-target,\n.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__native-control,\n.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__ripple,\n.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,\n.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background,\n.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,\n.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,\n.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {\n  transition: none !important;\n  animation: none !important;\n}\n.mat-mdc-list-option .mdc-checkbox__native-control, .mat-mdc-list-option .mdc-radio__native-control {\n  display: none;\n}\n\n@media (forced-colors: active) {\n  .mat-mdc-list-option.mdc-list-item--%NS%selected::after {\n    content: "";\n    position: absolute;\n    top: 50%;\n    right: 16px;\n    transform: translateY(-50%);\n    width: 10px;\n    height: 0;\n    border-bottom: solid 10px;\n    border-radius: 10px;\n  }\n  .mat-mdc-list-option.mdc-list-item--selected [dir=rtl]::after {\n    right: auto;\n    left: 16px;\n  }\n}\n'],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatListOption, [{
    type: Component,
    args: [{
      selector: "mat-list-option",
      exportAs: "matListOption",
      host: {
        "class": "mat-mdc-list-item mat-mdc-list-option mdc-list-item",
        "role": "option",
        "[class.mdc-list-item--selected]": "selected && !_selectionList.multiple && _selectionList.hideSingleSelectionIndicator",
        "[class.mdc-list-item--with-leading-avatar]": '_hasProjected("avatars", "before")',
        "[class.mdc-list-item--with-leading-icon]": '_hasProjected("icons", "before")',
        "[class.mdc-list-item--with-trailing-icon]": '_hasProjected("icons", "after")',
        "[class.mat-mdc-list-option-with-trailing-avatar]": '_hasProjected("avatars", "after")',
        "[class.mdc-list-item--with-leading-checkbox]": '_hasCheckboxAt("before")',
        "[class.mdc-list-item--with-trailing-checkbox]": '_hasCheckboxAt("after")',
        "[class.mdc-list-item--with-leading-radio]": '_hasRadioAt("before")',
        "[class.mdc-list-item--with-trailing-radio]": '_hasRadioAt("after")',
        "[class.mat-mdc-list-item-both-leading-and-trailing]": "_hasBothLeadingAndTrailing()",
        "[class.mat-accent]": 'color !== "primary" && color !== "warn"',
        "[class.mat-warn]": 'color === "warn"',
        "[class._mat-animation-noopable]": "_noopAnimations",
        "[attr.aria-selected]": "selected",
        "(blur)": "_handleBlur()",
        "(click)": "_toggleOnInteraction()"
      },
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: MatListItemBase,
        useExisting: MatListOption
      }, {
        provide: LIST_OPTION,
        useExisting: MatListOption
      }],
      imports: [NgTemplateOutlet, CdkObserveContent],
      template: `<!--
  Save icons and the pseudo checkbox/radio so that they can be re-used in the template without
  duplication. Also content can only be injected once so we need to extract icons/avatars
  into a template since we use it in multiple places.
-->
<ng-template #icons>
  <ng-content select="[matListItemAvatar],[matListItemIcon]">
  </ng-content>
</ng-template>

<ng-template #checkbox>
  <div class="mdc-checkbox" [class.mdc-checkbox--disabled]="disabled">
    <input type="checkbox" class="mdc-checkbox__native-control"
           [checked]="selected" [disabled]="disabled"/>
    <div class="mdc-checkbox__background">
      <svg class="mdc-checkbox__checkmark"
           viewBox="0 0 24 24"
           aria-hidden="true">
        <path class="mdc-checkbox__checkmark-path"
              fill="none"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
      </svg>
      <div class="mdc-checkbox__mixedmark"></div>
    </div>
  </div>
</ng-template>

<ng-template #radio>
  <div class="mdc-radio" [class.mdc-radio--disabled]="disabled">
    <input type="radio" class="mdc-radio__native-control"
           [checked]="selected" [disabled]="disabled"/>
    <div class="mdc-radio__background">
      <div class="mdc-radio__outer-circle"></div>
      <div class="mdc-radio__inner-circle"></div>
    </div>
  </div>
</ng-template>

@if (_hasCheckboxAt('before')) {
  <!-- Container for the checkbox at start. -->
  <span class="mdc-list-item__start mat-mdc-list-option-checkbox-before">
    <ng-template [ngTemplateOutlet]="checkbox"></ng-template>
  </span>
} @else if (_hasRadioAt('before')) {
  <!-- Container for the radio at the start. -->
  <span class="mdc-list-item__start mat-mdc-list-option-radio-before">
    <ng-template [ngTemplateOutlet]="radio"></ng-template>
  </span>
}
<!-- Conditionally renders icons/avatars before the list item text. -->
@if (_hasIconsOrAvatarsAt('before')) {
  <ng-template [ngTemplateOutlet]="icons"></ng-template>
}

<!-- Text -->
<span class="mdc-list-item__content">
  <ng-content select="[matListItemTitle]"></ng-content>
  <ng-content select="[matListItemLine]"></ng-content>
  <span #unscopedContent class="mat-mdc-list-item-unscoped-content"
        (cdkObserveContent)="_updateItemLines(true)">
    <ng-content></ng-content>
  </span>
</span>

@if (_hasCheckboxAt('after')) {
  <!-- Container for the checkbox at the end. -->
  <span class="mdc-list-item__end">
    <ng-template [ngTemplateOutlet]="checkbox"></ng-template>
  </span>
} @else if (_hasRadioAt('after')) {
  <!-- Container for the radio at the end. -->
  <span class="mdc-list-item__end">
    <ng-template [ngTemplateOutlet]="radio"></ng-template>
  </span>
}

<!-- Conditionally renders icons/avatars after the list item text. -->
@if (_hasIconsOrAvatarsAt('after')) {
  <ng-template [ngTemplateOutlet]="icons"></ng-template>
}

<!-- Divider -->
<ng-content select="mat-divider"></ng-content>

<!--
  Strong focus indicator element. MDC uses the \`::before\` pseudo element for the default
  focus/hover/selected state, so we need a separate element.
-->
<div class="mat-focus-indicator"></div>
`,
      styles: ['.mat-mdc-list-option-with-trailing-avatar.mdc-list-item, [dir=rtl] .mat-mdc-list-option-with-trailing-avatar.mdc-list-item {\n  padding-left: 0;\n  padding-right: 0;\n}\n.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end {\n  margin-left: 16px;\n  margin-right: 16px;\n  width: 40px;\n  height: 40px;\n}\n.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {\n  display: block;\n  margin-top: 0;\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: "";\n  vertical-align: 0;\n}\n.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: "";\n  vertical-align: -20px;\n}\n.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end {\n  border-radius: 50%;\n}\n\n.mat-mdc-list-option .mdc-checkbox {\n  display: inline-block;\n  position: relative;\n  flex: 0 0 18px;\n  box-sizing: content-box;\n  width: 18px;\n  height: 18px;\n  line-height: 0;\n  white-space: nowrap;\n  cursor: pointer;\n  vertical-align: bottom;\n  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);\n  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);\n}\n.mat-mdc-list-option .mdc-checkbox .mdc-checkbox__native-control {\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  opacity: 0;\n  cursor: inherit;\n  z-index: 1;\n  width: var(--mat-checkbox-state-layer-size, 40px);\n  height: var(--mat-checkbox-state-layer-size, 40px);\n  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);\n  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);\n  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);\n}\n.mat-mdc-list-option .mdc-checkbox--disabled {\n  cursor: default;\n  pointer-events: none;\n}\n.mat-mdc-list-option .mdc-checkbox__background {\n  display: inline-flex;\n  position: absolute;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  width: 18px;\n  height: 18px;\n  border: 2px solid currentColor;\n  border-radius: 2px;\n  background-color: transparent;\n  pointer-events: none;\n  will-change: background-color, border-color;\n  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);\n  -webkit-print-color-adjust: exact;\n  color-adjust: exact;\n  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));\n  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);\n  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);\n}\n.mat-mdc-list-option .mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,\n.mat-mdc-list-option .mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {\n  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));\n  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));\n}\n.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__background {\n  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n@media (forced-colors: active) {\n  .mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__background {\n    border-color: GrayText;\n  }\n}\n.mat-mdc-list-option .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,\n.mat-mdc-list-option .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {\n  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n  border-color: transparent;\n}\n@media (forced-colors: active) {\n  .mat-mdc-list-option .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,\n  .mat-mdc-list-option .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {\n    border-color: GrayText;\n  }\n}\n.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,\n.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {\n  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));\n  background-color: transparent;\n}\n.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,\n.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {\n  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));\n  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));\n}\n.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,\n.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {\n  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,\n.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {\n  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));\n  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));\n}\n.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,\n.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,\n.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {\n  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n@media (forced-colors: active) {\n  .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,\n  .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,\n  .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {\n    border-color: GrayText;\n  }\n}\n.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,\n.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {\n  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n  border-color: transparent;\n}\n.mat-mdc-list-option .mdc-checkbox__checkmark {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  opacity: 0;\n  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);\n  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));\n}\n@media (forced-colors: active) {\n  .mat-mdc-list-option .mdc-checkbox__checkmark {\n    color: CanvasText;\n  }\n}\n.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {\n  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));\n}\n@media (forced-colors: active) {\n  .mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {\n    color: GrayText;\n  }\n}\n.mat-mdc-list-option .mdc-checkbox__checkmark-path {\n  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);\n  stroke: currentColor;\n  stroke-width: 3.12px;\n  stroke-dashoffset: 29.7833385;\n  stroke-dasharray: 29.7833385;\n}\n.mat-mdc-list-option .mdc-checkbox__mixedmark {\n  width: 100%;\n  height: 0;\n  transform: scaleX(0) rotate(0deg);\n  border-width: 1px;\n  border-style: solid;\n  opacity: 0;\n  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);\n  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));\n}\n@media (forced-colors: active) {\n  .mat-mdc-list-option .mdc-checkbox__mixedmark {\n    margin: 0 1px;\n  }\n}\n.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {\n  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));\n}\n@media (forced-colors: active) {\n  .mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {\n    border-color: GrayText;\n  }\n}\n.mat-mdc-list-option .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,\n.mat-mdc-list-option .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,\n.mat-mdc-list-option .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,\n.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {\n  animation-duration: 180ms;\n  animation-timing-function: linear;\n}\n.mat-mdc-list-option .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {\n  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;\n  transition: none;\n}\n.mat-mdc-list-option .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {\n  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;\n  transition: none;\n}\n.mat-mdc-list-option .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {\n  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;\n  transition: none;\n}\n.mat-mdc-list-option .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {\n  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;\n  transition: none;\n}\n.mat-mdc-list-option .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {\n  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;\n  transition: none;\n}\n.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {\n  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;\n  transition: none;\n}\n.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {\n  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;\n  transition: none;\n}\n.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {\n  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;\n  transition: none;\n}\n.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,\n.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {\n  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,\n.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {\n  stroke-dashoffset: 0;\n}\n.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {\n  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);\n  opacity: 1;\n}\n.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {\n  transform: scaleX(1) rotate(-45deg);\n}\n.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {\n  transform: rotate(45deg);\n  opacity: 0;\n  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {\n  transform: scaleX(1) rotate(0deg);\n  opacity: 1;\n}\n@keyframes mdc-checkbox-unchecked-checked-checkmark-path {\n  0%, 50% {\n    stroke-dashoffset: 29.7833385;\n  }\n  50% {\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {\n  0%, 68.2% {\n    transform: scaleX(0);\n  }\n  68.2% {\n    animation-timing-function: cubic-bezier(0, 0, 0, 1);\n  }\n  100% {\n    transform: scaleX(1);\n  }\n}\n@keyframes mdc-checkbox-checked-unchecked-checkmark-path {\n  from {\n    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);\n    opacity: 1;\n    stroke-dashoffset: 0;\n  }\n  to {\n    opacity: 0;\n    stroke-dashoffset: -29.7833385;\n  }\n}\n@keyframes mdc-checkbox-checked-indeterminate-checkmark {\n  from {\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n    transform: rotate(0deg);\n    opacity: 1;\n  }\n  to {\n    transform: rotate(45deg);\n    opacity: 0;\n  }\n}\n@keyframes mdc-checkbox-indeterminate-checked-checkmark {\n  from {\n    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);\n    transform: rotate(45deg);\n    opacity: 0;\n  }\n  to {\n    transform: rotate(360deg);\n    opacity: 1;\n  }\n}\n@keyframes mdc-checkbox-checked-indeterminate-mixedmark {\n  from {\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n    transform: rotate(-45deg);\n    opacity: 0;\n  }\n  to {\n    transform: rotate(0deg);\n    opacity: 1;\n  }\n}\n@keyframes mdc-checkbox-indeterminate-checked-mixedmark {\n  from {\n    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);\n    transform: rotate(0deg);\n    opacity: 1;\n  }\n  to {\n    transform: rotate(315deg);\n    opacity: 0;\n  }\n}\n@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {\n  0% {\n    animation-timing-function: linear;\n    transform: scaleX(1);\n    opacity: 1;\n  }\n  32.8%, 100% {\n    transform: scaleX(0);\n    opacity: 0;\n  }\n}\n.mat-mdc-list-option .mdc-radio {\n  display: inline-block;\n  position: relative;\n  flex: 0 0 auto;\n  box-sizing: content-box;\n  width: 20px;\n  height: 20px;\n  will-change: opacity, transform, border-color, color;\n  padding: calc((var(--mat-radio-state-layer-size, 40px) - 20px) / 2);\n}\n.mat-mdc-list-option .mdc-radio__background {\n  display: inline-block;\n  position: relative;\n  box-sizing: border-box;\n  width: 20px;\n  height: 20px;\n}\n.mat-mdc-list-option .mdc-radio__background::before {\n  position: absolute;\n  transform: scale(0, 0);\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: "";\n  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);\n  width: var(--mat-radio-state-layer-size, 40px);\n  height: var(--mat-radio-state-layer-size, 40px);\n  top: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);\n  left: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);\n}\n.mat-mdc-list-option .mdc-radio__outer-circle {\n  position: absolute;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border-width: 2px;\n  border-style: solid;\n  border-radius: 50%;\n  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n.mat-mdc-list-option .mdc-radio__inner-circle {\n  position: absolute;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  transform: scale(0);\n  border-radius: 50%;\n  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n@media (forced-colors: active) {\n  .mat-mdc-list-option .mdc-radio__inner-circle {\n    background-color: CanvasText !important;\n  }\n}\n.mat-mdc-list-option .mdc-radio__native-control {\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  opacity: 0;\n  top: 0;\n  right: 0;\n  left: 0;\n  cursor: inherit;\n  z-index: 1;\n  width: var(--mat-radio-state-layer-size, 40px);\n  height: var(--mat-radio-state-layer-size, 40px);\n}\n.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background {\n  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {\n  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {\n  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-list-option .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);\n}\n.mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background {\n  cursor: default;\n}\n.mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);\n}\n.mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {\n  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));\n  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);\n}\n.mat-mdc-list-option .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-unselected-icon-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-list-option .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary));\n}\n.mat-mdc-list-option .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {\n  background-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary, currentColor));\n}\n.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {\n  transform: scale(0.5);\n  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-list-option._mat-animation-noopable .mdc-radio__background::before,\n.mat-mdc-list-option._mat-animation-noopable .mdc-radio__outer-circle,\n.mat-mdc-list-option._mat-animation-noopable .mdc-radio__inner-circle {\n  transition: none !important;\n}\n.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mat-mdc-checkbox-touch-target,\n.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__native-control,\n.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__ripple,\n.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,\n.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background,\n.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,\n.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,\n.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark, .mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mat-mdc-checkbox-touch-target,\n.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__native-control,\n.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__ripple,\n.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,\n.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background,\n.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,\n.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,\n.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {\n  transition: none !important;\n  animation: none !important;\n}\n.mat-mdc-list-option .mdc-checkbox__native-control, .mat-mdc-list-option .mdc-radio__native-control {\n  display: none;\n}\n\n@media (forced-colors: active) {\n  .mat-mdc-list-option.mdc-list-item--selected::after {\n    content: "";\n    position: absolute;\n    top: 50%;\n    right: 16px;\n    transform: translateY(-50%);\n    width: 10px;\n    height: 0;\n    border-bottom: solid 10px;\n    border-radius: 10px;\n  }\n  .mat-mdc-list-option.mdc-list-item--selected [dir=rtl]::after {\n    right: auto;\n    left: 16px;\n  }\n}\n']
    }]
  }], null, {
    _lines: [{
      type: ContentChildren,
      args: [MatListItemLine, {
        descendants: true
      }]
    }],
    _titles: [{
      type: ContentChildren,
      args: [MatListItemTitle, {
        descendants: true
      }]
    }],
    _unscopedContent: [{
      type: ViewChild,
      args: ["unscopedContent"]
    }],
    selectedChange: [{
      type: Output
    }],
    togglePosition: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    selected: [{
      type: Input
    }]
  });
})();
var MatListSubheaderCssMatStyler = class _MatListSubheaderCssMatStyler {
  static \u0275fac = function MatListSubheaderCssMatStyler_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatListSubheaderCssMatStyler)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatListSubheaderCssMatStyler,
    selectors: [["", "mat-subheader", ""], ["", "matSubheader", ""]],
    hostAttrs: [1, "mat-mdc-subheader", "mdc-list-group__subheader"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatListSubheaderCssMatStyler, [{
    type: Directive,
    args: [{
      selector: "[mat-subheader], [matSubheader]",
      host: {
        "class": "mat-mdc-subheader mdc-list-group__subheader"
      }
    }]
  }], null, null);
})();
var MAT_NAV_LIST = new InjectionToken("MatNavList");
var MatNavList = class _MatNavList extends MatListBase {
  _isNonInteractive = false;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatNavList_BaseFactory;
    return function MatNavList_Factory(__ngFactoryType__) {
      return (\u0275MatNavList_BaseFactory || (\u0275MatNavList_BaseFactory = \u0275\u0275getInheritedFactory(_MatNavList)))(__ngFactoryType__ || _MatNavList);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatNavList,
    selectors: [["mat-nav-list"]],
    hostAttrs: ["role", "navigation", 1, "mat-mdc-nav-list", "mat-mdc-list-base", "mdc-list"],
    exportAs: ["matNavList"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MatListBase,
      useExisting: _MatNavList
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c04,
    decls: 1,
    vars: 0,
    template: function MatNavList_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    styles: [_c14],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatNavList, [{
    type: Component,
    args: [{
      selector: "mat-nav-list",
      exportAs: "matNavList",
      template: "<ng-content></ng-content>",
      host: {
        "class": "mat-mdc-nav-list mat-mdc-list-base mdc-list",
        "role": "navigation"
      },
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: MatListBase,
        useExisting: MatNavList
      }],
      styles: ['.mdc-list {\n  margin: 0;\n  padding: 8px 0;\n  list-style-type: none;\n}\n.mdc-list:focus {\n  outline: none;\n}\n\n.mdc-list-item {\n  display: flex;\n  position: relative;\n  justify-content: flex-start;\n  overflow: hidden;\n  padding: 0;\n  align-items: stretch;\n  cursor: pointer;\n  padding-left: 16px;\n  padding-right: 16px;\n  background-color: var(--mat-list-list-item-container-color, transparent);\n  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));\n}\n.mdc-list-item.mdc-list-item--selected {\n  background-color: var(--mat-list-list-item-selected-container-color);\n}\n.mdc-list-item:focus {\n  outline: 0;\n}\n.mdc-list-item.mdc-list-item--disabled {\n  cursor: auto;\n}\n.mdc-list-item.mdc-list-item--with-one-line {\n  height: var(--mat-list-list-item-one-line-container-height, 48px);\n}\n.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {\n  align-self: center;\n  margin-top: 0;\n}\n.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {\n  align-self: center;\n  margin-top: 0;\n}\n.mdc-list-item.mdc-list-item--with-two-lines {\n  height: var(--mat-list-list-item-two-line-container-height, 64px);\n}\n.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {\n  align-self: flex-start;\n  margin-top: 16px;\n}\n.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {\n  align-self: center;\n  margin-top: 0;\n}\n.mdc-list-item.mdc-list-item--with-three-lines {\n  height: var(--mat-list-list-item-three-line-container-height, 88px);\n}\n.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {\n  align-self: flex-start;\n  margin-top: 16px;\n}\n.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {\n  align-self: flex-start;\n  margin-top: 16px;\n}\n.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  content: "";\n  pointer-events: none;\n}\n\na.mdc-list-item {\n  color: inherit;\n  text-decoration: none;\n}\n\n.mdc-list-item__start {\n  fill: currentColor;\n  flex-shrink: 0;\n  pointer-events: none;\n}\n.mdc-list-item--with-leading-icon .mdc-list-item__start {\n  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));\n  width: var(--mat-list-list-item-leading-icon-size, 24px);\n  height: var(--mat-list-list-item-leading-icon-size, 24px);\n  margin-left: 16px;\n  margin-right: 32px;\n}\n[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {\n  margin-left: 32px;\n  margin-right: 16px;\n}\n.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {\n  color: var(--mat-list-list-item-hover-leading-icon-color);\n}\n.mdc-list-item--with-leading-avatar .mdc-list-item__start {\n  width: var(--mat-list-list-item-leading-avatar-size, 40px);\n  height: var(--mat-list-list-item-leading-avatar-size, 40px);\n  margin-left: 16px;\n  margin-right: 16px;\n  border-radius: 50%;\n}\n.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {\n  margin-left: 16px;\n  margin-right: 16px;\n  border-radius: 50%;\n}\n\n.mdc-list-item__end {\n  flex-shrink: 0;\n  pointer-events: none;\n}\n.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));\n  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));\n  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));\n  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));\n  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));\n}\n.mdc-list-item--with-trailing-icon .mdc-list-item__end {\n  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));\n  width: var(--mat-list-list-item-trailing-icon-size, 24px);\n  height: var(--mat-list-list-item-trailing-icon-size, 24px);\n}\n.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {\n  color: var(--mat-list-list-item-hover-trailing-icon-color);\n}\n.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {\n  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));\n}\n\n.mdc-list-item__content {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  align-self: center;\n  flex: 1;\n  pointer-events: none;\n}\n.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {\n  align-self: stretch;\n}\n\n.mdc-list-item__primary-text {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));\n  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));\n  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));\n  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));\n  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));\n  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));\n}\n.mdc-list-item:hover .mdc-list-item__primary-text {\n  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));\n}\n.mdc-list-item:focus .mdc-list-item__primary-text {\n  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));\n}\n.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {\n  display: block;\n  margin-top: 0;\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 28px;\n  content: "";\n  vertical-align: 0;\n}\n.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: "";\n  vertical-align: -20px;\n}\n\n.mdc-list-item__secondary-text {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: block;\n  margin-top: 0;\n  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));\n  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));\n  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));\n  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));\n  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));\n  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));\n}\n.mdc-list-item__secondary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: "";\n  vertical-align: 0;\n}\n.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {\n  white-space: normal;\n  line-height: 20px;\n}\n.mdc-list-item--with-overline .mdc-list-item__secondary-text {\n  white-space: nowrap;\n  line-height: auto;\n}\n\n.mdc-list-item--with-leading-radio.mdc-list-item,\n.mdc-list-item--with-leading-checkbox.mdc-list-item,\n.mdc-list-item--with-leading-icon.mdc-list-item,\n.mdc-list-item--with-leading-avatar.mdc-list-item {\n  padding-left: 0;\n  padding-right: 16px;\n}\n[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,\n[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,\n[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,\n[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {\n  padding-left: 16px;\n  padding-right: 0;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {\n  display: block;\n  margin-top: 0;\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: "";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: "";\n  vertical-align: -20px;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  display: block;\n  margin-top: 0;\n  line-height: normal;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: "";\n  vertical-align: 0;\n}\n\n.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {\n  padding-left: 0;\n  padding-right: 0;\n}\n.mdc-list-item--with-trailing-icon .mdc-list-item__end {\n  margin-left: 16px;\n  margin-right: 16px;\n}\n\n.mdc-list-item--with-trailing-meta.mdc-list-item {\n  padding-left: 16px;\n  padding-right: 0;\n}\n[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {\n  padding-left: 0;\n  padding-right: 16px;\n}\n.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  -webkit-user-select: none;\n  user-select: none;\n  margin-left: 28px;\n  margin-right: 16px;\n}\n[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  margin-left: 16px;\n  margin-right: 28px;\n}\n.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {\n  display: block;\n  line-height: normal;\n  align-self: flex-start;\n  margin-top: 0;\n}\n.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {\n  display: inline-block;\n  width: 0;\n  height: 28px;\n  content: "";\n  vertical-align: 0;\n}\n\n.mdc-list-item--with-leading-radio .mdc-list-item__start,\n.mdc-list-item--with-leading-checkbox .mdc-list-item__start {\n  margin-left: 8px;\n  margin-right: 24px;\n}\n[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,\n[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {\n  margin-left: 24px;\n  margin-right: 8px;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {\n  align-self: flex-start;\n  margin-top: 8px;\n}\n\n.mdc-list-item--with-trailing-radio.mdc-list-item,\n.mdc-list-item--with-trailing-checkbox.mdc-list-item {\n  padding-left: 16px;\n  padding-right: 0;\n}\n[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,\n[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {\n  padding-left: 0;\n  padding-right: 16px;\n}\n.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,\n.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,\n.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {\n  padding-left: 0;\n}\n[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,\n[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,\n[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {\n  padding-right: 0;\n}\n.mdc-list-item--with-trailing-radio .mdc-list-item__end,\n.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {\n  margin-left: 24px;\n  margin-right: 8px;\n}\n[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,\n[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {\n  margin-left: 8px;\n  margin-right: 24px;\n}\n.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,\n.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {\n  align-self: flex-start;\n  margin-top: 8px;\n}\n\n.mdc-list-group__subheader {\n  margin: 0.75rem 16px;\n}\n\n.mdc-list-item--disabled .mdc-list-item__start,\n.mdc-list-item--disabled .mdc-list-item__content,\n.mdc-list-item--disabled .mdc-list-item__end {\n  opacity: 1;\n}\n.mdc-list-item--disabled .mdc-list-item__primary-text,\n.mdc-list-item--disabled .mdc-list-item__secondary-text {\n  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);\n}\n.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {\n  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);\n}\n.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {\n  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);\n}\n\n.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {\n  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));\n}\n\n.mdc-list-item:hover::before {\n  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n\n.mdc-list-item.mdc-list-item--disabled::before {\n  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n\n.mdc-list-item:focus::before {\n  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n\n.mdc-list-item--disabled .mdc-radio,\n.mdc-list-item--disabled .mdc-checkbox {\n  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);\n}\n\n.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {\n  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));\n  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));\n}\n\n.mat-mdc-list-item-icon {\n  font-size: var(--mat-list-list-item-leading-icon-size, 24px);\n}\n\n@media (forced-colors: active) {\n  a.mdc-list-item--activated::after {\n    content: "";\n    position: absolute;\n    top: 50%;\n    right: 16px;\n    transform: translateY(-50%);\n    width: 10px;\n    height: 0;\n    border-bottom: solid 10px;\n    border-radius: 10px;\n  }\n  a.mdc-list-item--activated [dir=rtl]::after {\n    right: auto;\n    left: 16px;\n  }\n}\n\n.mat-mdc-list-base {\n  display: block;\n}\n.mat-mdc-list-base .mdc-list-item__start,\n.mat-mdc-list-base .mdc-list-item__end,\n.mat-mdc-list-base .mdc-list-item__content {\n  pointer-events: auto;\n}\n\n.mat-mdc-list-item,\n.mat-mdc-list-option {\n  width: 100%;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),\n.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {\n  cursor: default;\n}\n.mat-mdc-list-item .mat-divider-inset,\n.mat-mdc-list-option .mat-divider-inset {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,\n.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {\n  margin-left: 72px;\n}\n[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,\n[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {\n  margin-right: 72px;\n}\n\n.mat-mdc-list-item-interactive::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  content: "";\n  opacity: 0;\n  pointer-events: none;\n  border-radius: inherit;\n}\n\n.mat-mdc-list-item > .mat-focus-indicator {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n}\n.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {\n  content: "";\n}\n\n.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {\n  white-space: nowrap;\n  line-height: normal;\n}\n.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n\nmat-action-list button {\n  background: none;\n  color: inherit;\n  border: none;\n  font: inherit;\n  outline: inherit;\n  -webkit-tap-highlight-color: transparent;\n  text-align: start;\n}\nmat-action-list button::-moz-focus-inner {\n  border: 0;\n}\n\n.mdc-list-item--with-leading-icon .mdc-list-item__start {\n  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);\n  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);\n}\n\n.mat-mdc-nav-list .mat-mdc-list-item {\n  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));\n  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));\n}\n.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {\n  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));\n}\n']
    }]
  }], null, null);
})();
var MAT_SELECTION_LIST_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatSelectionList),
  multi: true
};
var MatSelectionListChange = class {
  source;
  options;
  constructor(source, options) {
    this.source = source;
    this.options = options;
  }
};
var MatSelectionList = class _MatSelectionList extends MatListBase {
  _element = inject(ElementRef);
  _ngZone = inject(NgZone);
  _renderer = inject(Renderer2);
  _initialized = false;
  _keyManager;
  _listenerCleanups;
  _destroyed = new Subject();
  _isDestroyed = false;
  _onChange = (_) => {
  };
  _items;
  selectionChange = new EventEmitter();
  color = "accent";
  compareWith = (a1, a2) => a1 === a2;
  get multiple() {
    return this._multiple;
  }
  set multiple(value) {
    const newValue = coerceBooleanProperty(value);
    if (newValue !== this._multiple) {
      if ((typeof ngDevMode === "undefined" || ngDevMode) && this._initialized) {
        throw new Error("Cannot change `multiple` mode of mat-selection-list after initialization.");
      }
      this._multiple = newValue;
      this.selectedOptions = new SelectionModel(this._multiple, this.selectedOptions.selected);
    }
  }
  _multiple = true;
  get hideSingleSelectionIndicator() {
    return this._hideSingleSelectionIndicator;
  }
  set hideSingleSelectionIndicator(value) {
    this._hideSingleSelectionIndicator = coerceBooleanProperty(value);
  }
  _hideSingleSelectionIndicator = this._defaultOptions?.hideSingleSelectionIndicator ?? false;
  selectedOptions = new SelectionModel(this._multiple);
  _value = null;
  _onTouched = () => {
  };
  _changeDetectorRef = inject(ChangeDetectorRef);
  constructor() {
    super();
    this._isNonInteractive = false;
  }
  ngAfterViewInit() {
    this._initialized = true;
    this._setupRovingTabindex();
    this._ngZone.runOutsideAngular(() => {
      this._listenerCleanups = [this._renderer.listen(this._element.nativeElement, "focusin", this._handleFocusin), this._renderer.listen(this._element.nativeElement, "focusout", this._handleFocusout)];
    });
    if (this._value) {
      this._setOptionsFromValues(this._value);
    }
    this._watchForSelectionChange();
  }
  ngOnChanges(changes) {
    const disabledChanges = changes["disabled"];
    const disableRippleChanges = changes["disableRipple"];
    const hideSingleSelectionIndicatorChanges = changes["hideSingleSelectionIndicator"];
    if (disableRippleChanges && !disableRippleChanges.firstChange || disabledChanges && !disabledChanges.firstChange || hideSingleSelectionIndicatorChanges && !hideSingleSelectionIndicatorChanges.firstChange) {
      this._markOptionsForCheck();
    }
  }
  ngOnDestroy() {
    this._keyManager?.destroy();
    this._listenerCleanups?.forEach((current) => current());
    this._destroyed.next();
    this._destroyed.complete();
    this._isDestroyed = true;
  }
  focus(options) {
    this._element.nativeElement.focus(options);
  }
  selectAll() {
    return this._setAllOptionsSelected(true);
  }
  deselectAll() {
    return this._setAllOptionsSelected(false);
  }
  _reportValueChange() {
    if (this.options && !this._isDestroyed) {
      const value = this._getSelectedOptionValues();
      this._onChange(value);
      this._value = value;
    }
  }
  _emitChangeEvent(options) {
    this.selectionChange.emit(new MatSelectionListChange(this, options));
  }
  writeValue(values) {
    this._value = values;
    if (this.options) {
      this._setOptionsFromValues(values || []);
    }
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this._changeDetectorRef.markForCheck();
    this._markOptionsForCheck();
  }
  get disabled() {
    return this._selectionListDisabled();
  }
  set disabled(value) {
    this._selectionListDisabled.set(coerceBooleanProperty(value));
    if (this._selectionListDisabled()) {
      this._keyManager?.setActiveItem(-1);
    }
  }
  _selectionListDisabled = signal(false, ...ngDevMode ? [{
    debugName: "_selectionListDisabled"
  }] : []);
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  _watchForSelectionChange() {
    this.selectedOptions.changed.pipe(takeUntil(this._destroyed)).subscribe((event) => {
      for (let item of event.added) {
        item.selected = true;
      }
      for (let item of event.removed) {
        item.selected = false;
      }
      if (!this._containsFocus()) {
        this._resetActiveOption();
      }
    });
  }
  _setOptionsFromValues(values) {
    this.options.forEach((option) => option._setSelected(false));
    values.forEach((value) => {
      const correspondingOption = this.options.find((option) => {
        return option.selected ? false : this.compareWith(option.value, value);
      });
      if (correspondingOption) {
        correspondingOption._setSelected(true);
      }
    });
  }
  _getSelectedOptionValues() {
    return this.options.filter((option) => option.selected).map((option) => option.value);
  }
  _markOptionsForCheck() {
    if (this.options) {
      this.options.forEach((option) => option._markForCheck());
    }
  }
  _setAllOptionsSelected(isSelected, skipDisabled) {
    const changedOptions = [];
    this.options.forEach((option) => {
      if ((!skipDisabled || !option.disabled) && option._setSelected(isSelected)) {
        changedOptions.push(option);
      }
    });
    if (changedOptions.length) {
      this._reportValueChange();
    }
    return changedOptions;
  }
  get options() {
    return this._items;
  }
  _handleKeydown(event) {
    const activeItem = this._keyManager.activeItem;
    if (activeItem && (event.keyCode === DOWN_ARROW || event.keyCode === UP_ARROW)) {
      const focusedElement = _getFocusedElementPierceShadowDom();
      const isOptionFocused = this._items.toArray().some((item) => item._elementRef.nativeElement === focusedElement);
      if (!isOptionFocused) {
        event.preventDefault();
        activeItem.focus();
        return;
      }
    }
    if ((event.keyCode === ENTER || event.keyCode === SPACE) && !this._keyManager.isTyping() && activeItem && !activeItem.disabled) {
      event.preventDefault();
      activeItem._toggleOnInteraction();
    } else if (event.keyCode === A && this.multiple && !this._keyManager.isTyping() && hasModifierKey(event, "ctrlKey", "metaKey")) {
      const shouldSelect = this.options.some((option) => !option.disabled && !option.selected);
      event.preventDefault();
      this._emitChangeEvent(this._setAllOptionsSelected(shouldSelect, true));
    } else {
      this._keyManager.onKeydown(event);
    }
  }
  _handleFocusout = () => {
    setTimeout(() => {
      if (!this._containsFocus()) {
        this._resetActiveOption();
      }
    });
  };
  _handleFocusin = (event) => {
    const activeIndex = this._items.toArray().findIndex((item) => item._elementRef.nativeElement.contains(event.target));
    if (activeIndex > -1) {
      this._setActiveOption(activeIndex);
    } else {
      this._resetActiveOption();
    }
  };
  _setupRovingTabindex() {
    this._keyManager = new FocusKeyManager(this._items).withHomeAndEnd().withTypeAhead().withWrap().skipPredicate(() => false);
    this._resetActiveOption();
    this._keyManager.change.subscribe((activeItemIndex) => this._setActiveOption(activeItemIndex));
    this._items.changes.pipe(takeUntil(this._destroyed)).subscribe(() => {
      const activeItem = this._keyManager.activeItem;
      if (!activeItem || this._items.toArray().indexOf(activeItem) === -1) {
        this._resetActiveOption();
      }
    });
  }
  _setActiveOption(index) {
    this._items.forEach((item, itemIndex) => {
      let tabindex = -1;
      if (!this.disabled && itemIndex === index) {
        tabindex = 0;
      }
      item._setTabindex(tabindex);
    });
    this._keyManager.updateActiveItem(index);
  }
  _resetActiveOption() {
    if (this.disabled) {
      const activeItem2 = this._items.find((item) => item.selected) || this._items.first;
      const index = activeItem2 ? this._items.toArray().indexOf(activeItem2) : -1;
      this._setActiveOption(index);
      return;
    }
    const activeItem = this._items.find((item) => item.selected && !item.disabled) || this._items.first;
    this._setActiveOption(activeItem ? this._items.toArray().indexOf(activeItem) : -1);
  }
  _containsFocus() {
    const activeElement = _getFocusedElementPierceShadowDom();
    return activeElement && this._element.nativeElement.contains(activeElement);
  }
  static \u0275fac = function MatSelectionList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSelectionList)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSelectionList,
    selectors: [["mat-selection-list"]],
    contentQueries: function MatSelectionList_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatListOption, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._items = _t);
      }
    },
    hostAttrs: ["role", "listbox", 1, "mat-mdc-selection-list", "mat-mdc-list-base", "mdc-list"],
    hostVars: 1,
    hostBindings: function MatSelectionList_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown", function MatSelectionList_keydown_HostBindingHandler($event) {
          return ctx._handleKeydown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-multiselectable", ctx.multiple);
      }
    },
    inputs: {
      color: "color",
      compareWith: "compareWith",
      multiple: "multiple",
      hideSingleSelectionIndicator: "hideSingleSelectionIndicator",
      disabled: "disabled"
    },
    outputs: {
      selectionChange: "selectionChange"
    },
    exportAs: ["matSelectionList"],
    features: [\u0275\u0275ProvidersFeature([MAT_SELECTION_LIST_VALUE_ACCESSOR, {
      provide: MatListBase,
      useExisting: _MatSelectionList
    }, {
      provide: SELECTION_LIST,
      useExisting: _MatSelectionList
    }]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c04,
    decls: 1,
    vars: 0,
    template: function MatSelectionList_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    styles: [_c14],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSelectionList, [{
    type: Component,
    args: [{
      selector: "mat-selection-list",
      exportAs: "matSelectionList",
      host: {
        "class": "mat-mdc-selection-list mat-mdc-list-base mdc-list",
        "role": "listbox",
        "[attr.aria-multiselectable]": "multiple",
        "(keydown)": "_handleKeydown($event)"
      },
      template: "<ng-content></ng-content>",
      encapsulation: ViewEncapsulation.None,
      providers: [MAT_SELECTION_LIST_VALUE_ACCESSOR, {
        provide: MatListBase,
        useExisting: MatSelectionList
      }, {
        provide: SELECTION_LIST,
        useExisting: MatSelectionList
      }],
      styles: ['.mdc-list {\n  margin: 0;\n  padding: 8px 0;\n  list-style-type: none;\n}\n.mdc-list:focus {\n  outline: none;\n}\n\n.mdc-list-item {\n  display: flex;\n  position: relative;\n  justify-content: flex-start;\n  overflow: hidden;\n  padding: 0;\n  align-items: stretch;\n  cursor: pointer;\n  padding-left: 16px;\n  padding-right: 16px;\n  background-color: var(--mat-list-list-item-container-color, transparent);\n  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));\n}\n.mdc-list-item.mdc-list-item--selected {\n  background-color: var(--mat-list-list-item-selected-container-color);\n}\n.mdc-list-item:focus {\n  outline: 0;\n}\n.mdc-list-item.mdc-list-item--disabled {\n  cursor: auto;\n}\n.mdc-list-item.mdc-list-item--with-one-line {\n  height: var(--mat-list-list-item-one-line-container-height, 48px);\n}\n.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {\n  align-self: center;\n  margin-top: 0;\n}\n.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {\n  align-self: center;\n  margin-top: 0;\n}\n.mdc-list-item.mdc-list-item--with-two-lines {\n  height: var(--mat-list-list-item-two-line-container-height, 64px);\n}\n.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {\n  align-self: flex-start;\n  margin-top: 16px;\n}\n.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {\n  align-self: center;\n  margin-top: 0;\n}\n.mdc-list-item.mdc-list-item--with-three-lines {\n  height: var(--mat-list-list-item-three-line-container-height, 88px);\n}\n.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {\n  align-self: flex-start;\n  margin-top: 16px;\n}\n.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {\n  align-self: flex-start;\n  margin-top: 16px;\n}\n.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  content: "";\n  pointer-events: none;\n}\n\na.mdc-list-item {\n  color: inherit;\n  text-decoration: none;\n}\n\n.mdc-list-item__start {\n  fill: currentColor;\n  flex-shrink: 0;\n  pointer-events: none;\n}\n.mdc-list-item--with-leading-icon .mdc-list-item__start {\n  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));\n  width: var(--mat-list-list-item-leading-icon-size, 24px);\n  height: var(--mat-list-list-item-leading-icon-size, 24px);\n  margin-left: 16px;\n  margin-right: 32px;\n}\n[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {\n  margin-left: 32px;\n  margin-right: 16px;\n}\n.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {\n  color: var(--mat-list-list-item-hover-leading-icon-color);\n}\n.mdc-list-item--with-leading-avatar .mdc-list-item__start {\n  width: var(--mat-list-list-item-leading-avatar-size, 40px);\n  height: var(--mat-list-list-item-leading-avatar-size, 40px);\n  margin-left: 16px;\n  margin-right: 16px;\n  border-radius: 50%;\n}\n.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {\n  margin-left: 16px;\n  margin-right: 16px;\n  border-radius: 50%;\n}\n\n.mdc-list-item__end {\n  flex-shrink: 0;\n  pointer-events: none;\n}\n.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));\n  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));\n  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));\n  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));\n  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));\n}\n.mdc-list-item--with-trailing-icon .mdc-list-item__end {\n  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));\n  width: var(--mat-list-list-item-trailing-icon-size, 24px);\n  height: var(--mat-list-list-item-trailing-icon-size, 24px);\n}\n.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {\n  color: var(--mat-list-list-item-hover-trailing-icon-color);\n}\n.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {\n  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));\n}\n\n.mdc-list-item__content {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  align-self: center;\n  flex: 1;\n  pointer-events: none;\n}\n.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {\n  align-self: stretch;\n}\n\n.mdc-list-item__primary-text {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));\n  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));\n  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));\n  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));\n  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));\n  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));\n}\n.mdc-list-item:hover .mdc-list-item__primary-text {\n  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));\n}\n.mdc-list-item:focus .mdc-list-item__primary-text {\n  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));\n}\n.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {\n  display: block;\n  margin-top: 0;\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 28px;\n  content: "";\n  vertical-align: 0;\n}\n.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: "";\n  vertical-align: -20px;\n}\n\n.mdc-list-item__secondary-text {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: block;\n  margin-top: 0;\n  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));\n  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));\n  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));\n  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));\n  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));\n  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));\n}\n.mdc-list-item__secondary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: "";\n  vertical-align: 0;\n}\n.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {\n  white-space: normal;\n  line-height: 20px;\n}\n.mdc-list-item--with-overline .mdc-list-item__secondary-text {\n  white-space: nowrap;\n  line-height: auto;\n}\n\n.mdc-list-item--with-leading-radio.mdc-list-item,\n.mdc-list-item--with-leading-checkbox.mdc-list-item,\n.mdc-list-item--with-leading-icon.mdc-list-item,\n.mdc-list-item--with-leading-avatar.mdc-list-item {\n  padding-left: 0;\n  padding-right: 16px;\n}\n[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,\n[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,\n[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,\n[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {\n  padding-left: 16px;\n  padding-right: 0;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {\n  display: block;\n  margin-top: 0;\n  line-height: normal;\n  margin-bottom: -20px;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: "";\n  vertical-align: 0;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {\n  display: inline-block;\n  width: 0;\n  height: 20px;\n  content: "";\n  vertical-align: -20px;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  display: block;\n  margin-top: 0;\n  line-height: normal;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,\n.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,\n.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {\n  display: inline-block;\n  width: 0;\n  height: 32px;\n  content: "";\n  vertical-align: 0;\n}\n\n.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {\n  padding-left: 0;\n  padding-right: 0;\n}\n.mdc-list-item--with-trailing-icon .mdc-list-item__end {\n  margin-left: 16px;\n  margin-right: 16px;\n}\n\n.mdc-list-item--with-trailing-meta.mdc-list-item {\n  padding-left: 16px;\n  padding-right: 0;\n}\n[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {\n  padding-left: 0;\n  padding-right: 16px;\n}\n.mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  -webkit-user-select: none;\n  user-select: none;\n  margin-left: 28px;\n  margin-right: 16px;\n}\n[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {\n  margin-left: 16px;\n  margin-right: 28px;\n}\n.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {\n  display: block;\n  line-height: normal;\n  align-self: flex-start;\n  margin-top: 0;\n}\n.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {\n  display: inline-block;\n  width: 0;\n  height: 28px;\n  content: "";\n  vertical-align: 0;\n}\n\n.mdc-list-item--with-leading-radio .mdc-list-item__start,\n.mdc-list-item--with-leading-checkbox .mdc-list-item__start {\n  margin-left: 8px;\n  margin-right: 24px;\n}\n[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,\n[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {\n  margin-left: 24px;\n  margin-right: 8px;\n}\n.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,\n.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {\n  align-self: flex-start;\n  margin-top: 8px;\n}\n\n.mdc-list-item--with-trailing-radio.mdc-list-item,\n.mdc-list-item--with-trailing-checkbox.mdc-list-item {\n  padding-left: 16px;\n  padding-right: 0;\n}\n[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,\n[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {\n  padding-left: 0;\n  padding-right: 16px;\n}\n.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,\n.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,\n.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {\n  padding-left: 0;\n}\n[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,\n[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,\n[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {\n  padding-right: 0;\n}\n.mdc-list-item--with-trailing-radio .mdc-list-item__end,\n.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {\n  margin-left: 24px;\n  margin-right: 8px;\n}\n[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,\n[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {\n  margin-left: 8px;\n  margin-right: 24px;\n}\n.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,\n.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {\n  align-self: flex-start;\n  margin-top: 8px;\n}\n\n.mdc-list-group__subheader {\n  margin: 0.75rem 16px;\n}\n\n.mdc-list-item--disabled .mdc-list-item__start,\n.mdc-list-item--disabled .mdc-list-item__content,\n.mdc-list-item--disabled .mdc-list-item__end {\n  opacity: 1;\n}\n.mdc-list-item--disabled .mdc-list-item__primary-text,\n.mdc-list-item--disabled .mdc-list-item__secondary-text {\n  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);\n}\n.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {\n  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);\n}\n.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {\n  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);\n}\n\n.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {\n  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));\n}\n\n.mdc-list-item:hover::before {\n  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n\n.mdc-list-item.mdc-list-item--disabled::before {\n  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n\n.mdc-list-item:focus::before {\n  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n\n.mdc-list-item--disabled .mdc-radio,\n.mdc-list-item--disabled .mdc-checkbox {\n  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);\n}\n\n.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {\n  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));\n  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));\n}\n\n.mat-mdc-list-item-icon {\n  font-size: var(--mat-list-list-item-leading-icon-size, 24px);\n}\n\n@media (forced-colors: active) {\n  a.mdc-list-item--activated::after {\n    content: "";\n    position: absolute;\n    top: 50%;\n    right: 16px;\n    transform: translateY(-50%);\n    width: 10px;\n    height: 0;\n    border-bottom: solid 10px;\n    border-radius: 10px;\n  }\n  a.mdc-list-item--activated [dir=rtl]::after {\n    right: auto;\n    left: 16px;\n  }\n}\n\n.mat-mdc-list-base {\n  display: block;\n}\n.mat-mdc-list-base .mdc-list-item__start,\n.mat-mdc-list-base .mdc-list-item__end,\n.mat-mdc-list-base .mdc-list-item__content {\n  pointer-events: auto;\n}\n\n.mat-mdc-list-item,\n.mat-mdc-list-option {\n  width: 100%;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),\n.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {\n  cursor: default;\n}\n.mat-mdc-list-item .mat-divider-inset,\n.mat-mdc-list-option .mat-divider-inset {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,\n.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {\n  margin-left: 72px;\n}\n[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,\n[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {\n  margin-right: 72px;\n}\n\n.mat-mdc-list-item-interactive::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  content: "";\n  opacity: 0;\n  pointer-events: none;\n  border-radius: inherit;\n}\n\n.mat-mdc-list-item > .mat-focus-indicator {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n}\n.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {\n  content: "";\n}\n\n.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {\n  white-space: nowrap;\n  line-height: normal;\n}\n.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n\nmat-action-list button {\n  background: none;\n  color: inherit;\n  border: none;\n  font: inherit;\n  outline: inherit;\n  -webkit-tap-highlight-color: transparent;\n  text-align: start;\n}\nmat-action-list button::-moz-focus-inner {\n  border: 0;\n}\n\n.mdc-list-item--with-leading-icon .mdc-list-item__start {\n  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);\n  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);\n}\n\n.mat-mdc-nav-list .mat-mdc-list-item {\n  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));\n  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));\n}\n.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {\n  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));\n}\n']
    }]
  }], () => [], {
    _items: [{
      type: ContentChildren,
      args: [MatListOption, {
        descendants: true
      }]
    }],
    selectionChange: [{
      type: Output
    }],
    color: [{
      type: Input
    }],
    compareWith: [{
      type: Input
    }],
    multiple: [{
      type: Input
    }],
    hideSingleSelectionIndicator: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }]
  });
})();
var MatListModule = class _MatListModule {
  static \u0275fac = function MatListModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatListModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatListModule,
    imports: [ObserversModule, MatRippleModule, MatPseudoCheckboxModule, MatList, MatActionList, MatNavList, MatSelectionList, MatListItem, MatListOption, MatListSubheaderCssMatStyler, MatListItemAvatar, MatListItemIcon, MatListItemLine, MatListItemTitle, MatListItemMeta],
    exports: [BidiModule, MatList, MatActionList, MatNavList, MatSelectionList, MatListItem, MatListOption, MatListItemAvatar, MatListItemIcon, MatListSubheaderCssMatStyler, MatDividerModule, MatListItemLine, MatListItemTitle, MatListItemMeta]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ObserversModule, MatRippleModule, MatPseudoCheckboxModule, BidiModule, MatDividerModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatListModule, [{
    type: NgModule,
    args: [{
      imports: [ObserversModule, MatRippleModule, MatPseudoCheckboxModule, MatList, MatActionList, MatNavList, MatSelectionList, MatListItem, MatListOption, MatListSubheaderCssMatStyler, MatListItemAvatar, MatListItemIcon, MatListItemLine, MatListItemTitle, MatListItemMeta],
      exports: [BidiModule, MatList, MatActionList, MatNavList, MatSelectionList, MatListItem, MatListOption, MatListItemAvatar, MatListItemIcon, MatListSubheaderCssMatStyler, MatDividerModule, MatListItemLine, MatListItemTitle, MatListItemMeta]
    }]
  }], null, null);
})();

// src/app/layout/sidebar/sidebar.component.ts
var _forTrack0 = ($index, $item) => $item.route;
function SidebarComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 5);
    \u0275\u0275listener("click", function SidebarComponent_For_6_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeNav.emit());
    });
    \u0275\u0275elementStart(1, "mat-icon", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r3.route);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.label);
  }
}
var SidebarComponent = class _SidebarComponent {
  constructor() {
    this.closeNav = new EventEmitter();
    this.auth = inject(AuthService);
    this.navItems = [
      { label: "Dashboard", icon: "dashboard", route: "/dashboard" },
      { label: "Materiales", icon: "inventory_2", route: "/materials" },
      { label: "Cat\xE1logo", icon: "door_front", route: "/products" },
      { label: "Plantillas", icon: "description", route: "/templates" },
      { label: "Inventario", icon: "warehouse", route: "/inventory" },
      { label: "Empresa", icon: "business", route: "/company", roles: ["ROLE_ADMIN", "ROLE_MANAGER"] },
      { label: "Usuarios", icon: "group", route: "/users", roles: ["ROLE_ADMIN"] }
    ];
  }
  get visibleItems() {
    const roles = this.auth.currentUser()?.roles ?? [];
    return this.navItems.filter((item) => !item.roles || item.roles.some((r) => roles.includes(r)));
  }
  static {
    this.\u0275fac = function SidebarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SidebarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarComponent, selectors: [["app-sidebar"]], outputs: { closeNav: "closeNav" }, decls: 10, vars: 1, consts: [[1, "sidebar-brand"], ["src", "assets/images/logo.svg", "alt", "Moldtek", 2, "height", "40px"], ["mat-list-item", "", "routerLinkActive", "active-link", 3, "routerLink"], [1, "sidebar-footer"], [2, "opacity", "0.6"], ["mat-list-item", "", "routerLinkActive", "active-link", 3, "click", "routerLink"], ["matListItemIcon", ""], ["matListItemTitle", ""]], template: function SidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "img", 1);
        \u0275\u0275elementStart(2, "span");
        \u0275\u0275text(3, "MOLDTEK");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "mat-nav-list");
        \u0275\u0275repeaterCreate(5, SidebarComponent_For_6_Template, 5, 3, "a", 2, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 3)(8, "small", 4);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.visibleItems);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("v1.0.0 \xB7 ", ctx.auth.currentUser()?.companyName);
      }
    }, dependencies: [RouterLink, RouterLinkActive, MatListModule, MatNavList, MatListItem, MatListItemIcon, MatListItemTitle, MatIconModule, MatIcon], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.sidebar-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 20px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.15);\n  color: white;\n  font-weight: 700;\n  font-size: 1.1rem;\n}\nmat-nav-list[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-top: 8px;\n}\na[mat-list-item][_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.85);\n  border-radius: 0 24px 24px 0;\n  margin-right: 16px;\n}\na[mat-list-item][_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.active-link[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2) !important;\n  color: white !important;\n  font-weight: 500;\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  padding: 16px;\n  color: white;\n  text-align: center;\n}\nmat-icon[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.75);\n}\n/*# sourceMappingURL=sidebar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarComponent, [{
    type: Component,
    args: [{ selector: "app-sidebar", standalone: true, imports: [RouterLink, RouterLinkActive, MatListModule, MatIconModule], template: `
    <div class="sidebar-brand">
      <img src="assets/images/logo.svg" alt="Moldtek" style="height:40px">
      <span>MOLDTEK</span>
    </div>

    <mat-nav-list>
      @for (item of visibleItems; track item.route) {
        <a mat-list-item
           [routerLink]="item.route"
           routerLinkActive="active-link"
           (click)="closeNav.emit()">
          <mat-icon matListItemIcon>{{ item.icon }}</mat-icon>
          <span matListItemTitle>{{ item.label }}</span>
        </a>
      }
    </mat-nav-list>

    <div class="sidebar-footer">
      <small style="opacity:0.6">v1.0.0 \xB7 {{ auth.currentUser()?.companyName }}</small>
    </div>
  `, styles: ["/* angular:styles/component:css;4227e18aecfb453ef03d6647afbb33742894739a0fc85d15bee4bd9e58db2aab;C:/Proyectos/moldtek/frontend/src/app/layout/sidebar/sidebar.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.sidebar-brand {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 20px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.15);\n  color: white;\n  font-weight: 700;\n  font-size: 1.1rem;\n}\nmat-nav-list {\n  flex: 1;\n  padding-top: 8px;\n}\na[mat-list-item] {\n  color: rgba(255, 255, 255, 0.85);\n  border-radius: 0 24px 24px 0;\n  margin-right: 16px;\n}\na[mat-list-item]:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.active-link {\n  background: rgba(255, 255, 255, 0.2) !important;\n  color: white !important;\n  font-weight: 500;\n}\n.sidebar-footer {\n  padding: 16px;\n  color: white;\n  text-align: center;\n}\nmat-icon {\n  color: rgba(255, 255, 255, 0.75);\n}\n/*# sourceMappingURL=sidebar.component.css.map */\n"] }]
  }], null, { closeNav: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarComponent, { className: "SidebarComponent", filePath: "src/app/layout/sidebar/sidebar.component.ts", lineNumber: 55 });
})();

// src/app/layout/main-layout/main-layout.component.ts
var MainLayoutComponent = class _MainLayoutComponent {
  constructor() {
    this.breakpoint = inject(BreakpointObserver);
    this.isMobile = toSignal(this.breakpoint.observe([Breakpoints.HandsetPortrait]).pipe(map((r) => r.matches)), { initialValue: false });
  }
  static {
    this.\u0275fac = function MainLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MainLayoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainLayoutComponent, selectors: [["app-main-layout"]], decls: 8, vars: 2, consts: [["sidenav", ""], [1, "sidenav-container"], ["fixedInViewport", "", 1, "app-sidenav", 3, "mode", "opened"], [3, "closeNav"], [3, "toggleNav"], [1, "main-content"]], template: function MainLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "mat-sidenav-container", 1)(1, "mat-sidenav", 2, 0)(3, "app-sidebar", 3);
        \u0275\u0275listener("closeNav", function MainLayoutComponent_Template_app_sidebar_closeNav_3_listener() {
          \u0275\u0275restoreView(_r1);
          const sidenav_r2 = \u0275\u0275reference(2);
          return \u0275\u0275resetView(sidenav_r2.close());
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "mat-sidenav-content")(5, "app-header", 4);
        \u0275\u0275listener("toggleNav", function MainLayoutComponent_Template_app_header_toggleNav_5_listener() {
          \u0275\u0275restoreView(_r1);
          const sidenav_r2 = \u0275\u0275reference(2);
          return \u0275\u0275resetView(sidenav_r2.toggle());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "main", 5);
        \u0275\u0275element(7, "router-outlet");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("mode", ctx.isMobile() ? "over" : "side")("opened", !ctx.isMobile());
      }
    }, dependencies: [RouterOutlet, MatSidenavModule, MatSidenav, MatSidenavContainer, MatSidenavContent, HeaderComponent, SidebarComponent], styles: ["\n.sidenav-container[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n.app-sidenav[_ngcontent-%COMP%] {\n  width: 260px;\n  background: #1B5E20;\n}\n.main-content[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 64px);\n  background: #f5f5f5;\n}\n/*# sourceMappingURL=main-layout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MainLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-main-layout", standalone: true, imports: [RouterOutlet, MatSidenavModule, HeaderComponent, SidebarComponent], template: `
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav
        #sidenav
        [mode]="isMobile() ? 'over' : 'side'"
        [opened]="!isMobile()"
        fixedInViewport
        class="app-sidenav">
        <app-sidebar (closeNav)="sidenav.close()" />
      </mat-sidenav>

      <mat-sidenav-content>
        <app-header (toggleNav)="sidenav.toggle()" />
        <main class="main-content">
          <router-outlet />
        </main>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `, styles: ["/* angular:styles/component:css;1f4a40da44fa0344371c6f30b6f0ea06b1d3d72b69956030280ba1cd8711d410;C:/Proyectos/moldtek/frontend/src/app/layout/main-layout/main-layout.component.ts */\n.sidenav-container {\n  height: 100vh;\n}\n.app-sidenav {\n  width: 260px;\n  background: #1B5E20;\n}\n.main-content {\n  min-height: calc(100vh - 64px);\n  background: #f5f5f5;\n}\n/*# sourceMappingURL=main-layout.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainLayoutComponent, { className: "MainLayoutComponent", filePath: "src/app/layout/main-layout/main-layout.component.ts", lineNumber: 39 });
})();
export {
  MainLayoutComponent
};
//# debugId=5b26d318-34df-5ad9-a5ad-9ee4a513ca6a
//# sourceMappingURL=chunk-V7C2OLT2.js.map
