import {
  MatDividerModule
} from "./chunk-PXVMVJL6.js";
import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-LDI7QZSY.js";
import {
  MatChip,
  MatChipSet,
  MatChipsModule
} from "./chunk-UOB72XJ5.js";
import {
  CdkColumnDef,
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatNoDataRow,
  MatProgressBar,
  MatProgressBarModule,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource,
  MatTableModule,
  MatTooltip,
  MatTooltipModule
} from "./chunk-KB7KMNPI.js";
import {
  MatCard,
  MatCardModule
} from "./chunk-4SX5R4K7.js";
import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-CVYYOXZQ.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "./chunk-35PRK2AW.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatLabel,
  MatPrefix,
  MatSuffix,
  NotificationService
} from "./chunk-2RXZUKY7.js";
import "./chunk-T4USGM5V.js";
import "./chunk-ERVSOKK3.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-EFOXA73Z.js";
import {
  ApiService
} from "./chunk-LVWMVW7I.js";
import {
  AriaDescriber,
  BidiModule,
  ENTER,
  FocusMonitor,
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconButton,
  MatIconModule,
  SPACE,
  _CdkPrivateStyleLoader,
  _StructuralStylesLoader,
  _animationsDisabled
} from "./chunk-XA3QIYNR.js";
import {
  DecimalPipe
} from "./chunk-C3SHWEMB.js";
import {
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  InjectionToken,
  Input,
  NgModule,
  Optional,
  Output,
  ReplaySubject,
  Service,
  Subject,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  inject,
  merge,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefineService,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-EHKUBBLL.js";

// node_modules/@angular/material/fesm2022/sort.mjs
var _c0 = ["*", [["", "matSortHeaderIcon", ""]]];
var _c1 = ["*", "[matSortHeaderIcon]"];
function MatSortHeader_Conditional_3_ProjectionFallback_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 3);
    \u0275\u0275domElement(1, "path", 4);
    \u0275\u0275domElementEnd();
  }
}
function MatSortHeader_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 2);
    \u0275\u0275projection(1, 1, null, MatSortHeader_Conditional_3_ProjectionFallback_1_Template, 2, 0);
    \u0275\u0275domElementEnd();
  }
}
function getSortDuplicateSortableIdError(id) {
  return Error(`Cannot have two MatSortables with the same id (${id}).`);
}
function getSortHeaderNotContainedWithinSortError() {
  return Error(`MatSortHeader must be placed within a parent element with the MatSort directive.`);
}
function getSortHeaderMissingIdError() {
  return Error(`MatSortHeader must be provided with a unique id.`);
}
function getSortInvalidDirectionError(direction) {
  return Error(`${direction} is not a valid sort direction ('asc' or 'desc').`);
}
var MAT_SORT_DEFAULT_OPTIONS = new InjectionToken("MAT_SORT_DEFAULT_OPTIONS");
var MatSort = class _MatSort {
  _defaultOptions;
  _initializedStream = new ReplaySubject(1);
  sortables = /* @__PURE__ */ new Map();
  _stateChanges = new Subject();
  active;
  start = "asc";
  get direction() {
    return this._direction;
  }
  set direction(direction) {
    if (direction && direction !== "asc" && direction !== "desc" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getSortInvalidDirectionError(direction);
    }
    this._direction = direction;
  }
  _direction = "";
  disableClear;
  disabled = false;
  sortChange = new EventEmitter();
  initialized = this._initializedStream;
  constructor(_defaultOptions) {
    this._defaultOptions = _defaultOptions;
  }
  register(sortable) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!sortable.id) {
        throw getSortHeaderMissingIdError();
      }
      if (this.sortables.has(sortable.id)) {
        throw getSortDuplicateSortableIdError(sortable.id);
      }
    }
    this.sortables.set(sortable.id, sortable);
  }
  deregister(sortable) {
    this.sortables.delete(sortable.id);
  }
  sort(sortable) {
    if (this.active != sortable.id) {
      this.active = sortable.id;
      this.direction = sortable.start ? sortable.start : this.start;
    } else {
      this.direction = this.getNextSortDirection(sortable);
    }
    this.sortChange.emit({
      active: this.active,
      direction: this.direction
    });
  }
  getNextSortDirection(sortable) {
    if (!sortable) {
      return "";
    }
    const disableClear = sortable?.disableClear ?? this.disableClear ?? !!this._defaultOptions?.disableClear;
    let sortDirectionCycle = getSortDirectionCycle(sortable.start || this.start, disableClear);
    let nextDirectionIndex = sortDirectionCycle.indexOf(this.direction) + 1;
    if (nextDirectionIndex >= sortDirectionCycle.length) {
      nextDirectionIndex = 0;
    }
    return sortDirectionCycle[nextDirectionIndex];
  }
  ngOnInit() {
    this._initializedStream.next();
  }
  ngOnChanges() {
    this._stateChanges.next();
  }
  ngOnDestroy() {
    this._stateChanges.complete();
    this._initializedStream.complete();
  }
  static \u0275fac = function MatSort_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSort)(\u0275\u0275directiveInject(MAT_SORT_DEFAULT_OPTIONS, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatSort,
    selectors: [["", "matSort", ""]],
    hostAttrs: [1, "mat-sort"],
    inputs: {
      active: [0, "matSortActive", "active"],
      start: [0, "matSortStart", "start"],
      direction: [0, "matSortDirection", "direction"],
      disableClear: [2, "matSortDisableClear", "disableClear", booleanAttribute],
      disabled: [2, "matSortDisabled", "disabled", booleanAttribute]
    },
    outputs: {
      sortChange: "matSortChange"
    },
    exportAs: ["matSort"],
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSort, [{
    type: Directive,
    args: [{
      selector: "[matSort]",
      exportAs: "matSort",
      host: {
        "class": "mat-sort"
      }
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_SORT_DEFAULT_OPTIONS]
    }]
  }], {
    active: [{
      type: Input,
      args: ["matSortActive"]
    }],
    start: [{
      type: Input,
      args: ["matSortStart"]
    }],
    direction: [{
      type: Input,
      args: ["matSortDirection"]
    }],
    disableClear: [{
      type: Input,
      args: [{
        alias: "matSortDisableClear",
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "matSortDisabled",
        transform: booleanAttribute
      }]
    }],
    sortChange: [{
      type: Output,
      args: ["matSortChange"]
    }]
  });
})();
function getSortDirectionCycle(start, disableClear) {
  let sortOrder = ["asc", "desc"];
  if (start == "desc") {
    sortOrder.reverse();
  }
  if (!disableClear) {
    sortOrder.push("");
  }
  return sortOrder;
}
var MatSortHeader = class _MatSortHeader {
  _sort = inject(MatSort, {
    optional: true
  });
  _columnDef = inject(CdkColumnDef, {
    optional: true
  });
  _changeDetectorRef = inject(ChangeDetectorRef);
  _focusMonitor = inject(FocusMonitor);
  _elementRef = inject(ElementRef);
  _ariaDescriber = inject(AriaDescriber, {
    optional: true
  });
  _renderChanges;
  _animationsDisabled = _animationsDisabled();
  _recentlyCleared = signal(null, ...ngDevMode ? [{
    debugName: "_recentlyCleared"
  }] : []);
  _sortButton;
  id;
  arrowPosition = "after";
  start;
  disabled = false;
  get sortActionDescription() {
    return this._sortActionDescription;
  }
  set sortActionDescription(value) {
    this._updateSortActionDescription(value);
  }
  _sortActionDescription = "Sort";
  disableClear;
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const defaultOptions = inject(MAT_SORT_DEFAULT_OPTIONS, {
      optional: true
    });
    if (!this._sort && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getSortHeaderNotContainedWithinSortError();
    }
    if (defaultOptions?.arrowPosition) {
      this.arrowPosition = defaultOptions?.arrowPosition;
    }
  }
  ngOnInit() {
    if (!this.id && this._columnDef) {
      this.id = this._columnDef.name;
    }
    this._sort.register(this);
    this._renderChanges = merge(this._sort._stateChanges, this._sort.sortChange).subscribe(() => this._changeDetectorRef.markForCheck());
    this._sortButton = this._elementRef.nativeElement.querySelector(".mat-sort-header-container");
    this._updateSortActionDescription(this._sortActionDescription);
  }
  ngAfterViewInit() {
    this._focusMonitor.monitor(this._elementRef, true).subscribe(() => {
      Promise.resolve().then(() => this._recentlyCleared.set(null));
    });
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
    this._sort.deregister(this);
    this._renderChanges?.unsubscribe();
    if (this._sortButton) {
      this._ariaDescriber?.removeDescription(this._sortButton, this._sortActionDescription);
    }
  }
  _toggleOnInteraction() {
    if (!this._isDisabled()) {
      const wasSorted = this._isSorted();
      const prevDirection = this._sort.direction;
      this._sort.sort(this);
      this._recentlyCleared.set(wasSorted && !this._isSorted() ? prevDirection : null);
    }
  }
  _handleKeydown(event) {
    if (event.keyCode === SPACE || event.keyCode === ENTER) {
      event.preventDefault();
      this._toggleOnInteraction();
    }
  }
  _isSorted() {
    return this._sort.active == this.id && (this._sort.direction === "asc" || this._sort.direction === "desc");
  }
  _isDisabled() {
    return this._sort.disabled || this.disabled;
  }
  _getAriaSortAttribute() {
    if (!this._isSorted()) {
      return "none";
    }
    return this._sort.direction == "asc" ? "ascending" : "descending";
  }
  _renderArrow() {
    return !this._isDisabled() || this._isSorted();
  }
  _updateSortActionDescription(newDescription) {
    if (this._sortButton) {
      this._ariaDescriber?.removeDescription(this._sortButton, this._sortActionDescription);
      this._ariaDescriber?.describe(this._sortButton, newDescription);
    }
    this._sortActionDescription = newDescription;
  }
  static \u0275fac = function MatSortHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSortHeader)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSortHeader,
    selectors: [["", "mat-sort-header", ""]],
    hostAttrs: [1, "mat-sort-header"],
    hostVars: 3,
    hostBindings: function MatSortHeader_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function MatSortHeader_click_HostBindingHandler() {
          return ctx._toggleOnInteraction();
        })("keydown", function MatSortHeader_keydown_HostBindingHandler($event) {
          return ctx._handleKeydown($event);
        })("mouseleave", function MatSortHeader_mouseleave_HostBindingHandler() {
          return ctx._recentlyCleared.set(null);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-sort", ctx._getAriaSortAttribute());
        \u0275\u0275classProp("mat-sort-header-disabled", ctx._isDisabled());
      }
    },
    inputs: {
      id: [0, "mat-sort-header", "id"],
      arrowPosition: "arrowPosition",
      start: "start",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      sortActionDescription: "sortActionDescription",
      disableClear: [2, "disableClear", "disableClear", booleanAttribute]
    },
    exportAs: ["matSortHeader"],
    ngContentSelectors: _c1,
    decls: 4,
    vars: 17,
    consts: [[1, "mat-sort-header-container", "mat-focus-indicator"], [1, "mat-sort-header-content"], [1, "mat-sort-header-arrow"], ["viewBox", "0 -960 960 960", "focusable", "false", "aria-hidden", "true"], ["d", "M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z"]],
    template: function MatSortHeader_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c0);
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275projection(2);
        \u0275\u0275domElementEnd();
        \u0275\u0275conditionalCreate(3, MatSortHeader_Conditional_3_Template, 3, 0, "div", 2);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("mat-sort-header-sorted", ctx._isSorted())("mat-sort-header-position-before", ctx.arrowPosition === "before")("mat-sort-header-descending", ctx._sort.direction === "desc")("mat-sort-header-ascending", ctx._sort.direction === "asc")("mat-sort-header-recently-cleared-ascending", ctx._recentlyCleared() === "asc")("mat-sort-header-recently-cleared-descending", ctx._recentlyCleared() === "desc")("mat-sort-header-animations-disabled", ctx._animationsDisabled);
        \u0275\u0275attribute("tabindex", ctx._isDisabled() ? null : 0)("role", ctx._isDisabled() ? null : "button");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx._renderArrow() ? 3 : -1);
      }
    },
    styles: [".mat-sort-header {\n  cursor: pointer;\n}\n\n.mat-sort-header-disabled {\n  cursor: default;\n}\n\n.mat-sort-header-container {\n  display: flex;\n  align-items: center;\n  letter-spacing: normal;\n  outline: 0;\n}\n[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container, [mat-sort-header].cdk-program-focused .mat-sort-header-container {\n  border-bottom: var(--%NS%mat-focus-indicator-fallback-border-style, solid) 1px currentColor;\n}\n.mat-sort-header-container::before {\n  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 4px) * -1);\n}\n\n.mat-sort-header-content {\n  display: flex;\n  align-items: center;\n}\n\n.mat-sort-header-position-before {\n  flex-direction: row-reverse;\n}\n\n@keyframes _mat-sort-header-recently-cleared-ascending {\n  from {\n    transform: translateY(0);\n    opacity: 1;\n  }\n  to {\n    transform: translateY(-25%);\n    opacity: 0;\n  }\n}\n@keyframes _mat-sort-header-recently-cleared-descending {\n  from {\n    transform: translateY(0) rotate(180deg);\n    opacity: 1;\n  }\n  to {\n    transform: translateY(25%) rotate(180deg);\n    opacity: 0;\n  }\n}\n.mat-sort-header-arrow {\n  height: 12px;\n  width: 12px;\n  position: relative;\n  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1), opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);\n  opacity: 0;\n  overflow: visible;\n  color: var(--%NS%mat-sort-arrow-color, var(--%NS%mat-sys-on-surface));\n}\n.mat-sort-header.cdk-keyboard-focused .mat-sort-header-arrow, .mat-sort-header.cdk-program-focused .mat-sort-header-arrow, .mat-sort-header:hover .mat-sort-header-arrow {\n  opacity: 0.54;\n}\n.mat-sort-header .mat-sort-header-sorted .mat-sort-header-arrow {\n  opacity: 1;\n}\n.mat-sort-header-descending .mat-sort-header-arrow {\n  transform: rotate(180deg);\n}\n.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {\n  transform: translateY(-25%);\n}\n.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {\n  transition: none;\n  animation: _mat-sort-header-recently-cleared-ascending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;\n}\n.mat-sort-header-recently-cleared-descending .mat-sort-header-arrow {\n  transition: none;\n  animation: _mat-sort-header-recently-cleared-descending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;\n}\n.mat-sort-header-animations-disabled .mat-sort-header-arrow {\n  transition-duration: 0ms;\n  animation-duration: 0ms;\n}\n.mat-sort-header-arrow > svg, .mat-sort-header-arrow [matSortHeaderIcon] {\n  width: 24px;\n  height: 24px;\n  fill: currentColor;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -12px 0 0 -12px;\n  transform: translateZ(0);\n}\n.mat-sort-header-arrow, [dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow {\n  margin: 0 0 0 6px;\n}\n.mat-sort-header-position-before .mat-sort-header-arrow, [dir=rtl] .mat-sort-header-arrow {\n  margin: 0 6px 0 0;\n}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSortHeader, [{
    type: Component,
    args: [{
      selector: "[mat-sort-header]",
      exportAs: "matSortHeader",
      host: {
        "class": "mat-sort-header",
        "(click)": "_toggleOnInteraction()",
        "(keydown)": "_handleKeydown($event)",
        "(mouseleave)": "_recentlyCleared.set(null)",
        "[attr.aria-sort]": "_getAriaSortAttribute()",
        "[class.mat-sort-header-disabled]": "_isDisabled()"
      },
      encapsulation: ViewEncapsulation.None,
      template: `<!--
  We set the \`tabindex\` on an element inside the table header, rather than the header itself,
  because of a bug in NVDA where having a \`tabindex\` on a \`th\` breaks keyboard navigation in the
  table (see https://github.com/nvaccess/nvda/issues/7718). This allows for the header to both
  be focusable, and have screen readers read out its \`aria-sort\` state. We prefer this approach
  over having a button with an \`aria-label\` inside the header, because the button's \`aria-label\`
  will be read out as the user is navigating the table's cell (see #13012).

  The approach is based off of: https://dequeuniversity.com/library/aria/tables/sf-sortable-grid
-->
<div class="mat-sort-header-container mat-focus-indicator"
     [class.mat-sort-header-sorted]="_isSorted()"
     [class.mat-sort-header-position-before]="arrowPosition === 'before'"
     [class.mat-sort-header-descending]="_sort.direction === 'desc'"
     [class.mat-sort-header-ascending]="_sort.direction === 'asc'"
     [class.mat-sort-header-recently-cleared-ascending]="_recentlyCleared() === 'asc'"
     [class.mat-sort-header-recently-cleared-descending]="_recentlyCleared() === 'desc'"
     [class.mat-sort-header-animations-disabled]="_animationsDisabled"
     [attr.tabindex]="_isDisabled() ? null : 0"
     [attr.role]="_isDisabled() ? null : 'button'">

  <!--
    TODO(crisbeto): this div isn't strictly necessary, but we have to keep it due to a large
    number of screenshot diff failures. It should be removed eventually. Note that the difference
    isn't visible with a shorter header, but once it breaks up into multiple lines, this element
    causes it to be center-aligned, whereas removing it will keep the text to the left.
  -->
  <div class="mat-sort-header-content">
    <ng-content></ng-content>
  </div>

  <!-- Disable animations while a current animation is running -->
  @if (_renderArrow()) {
    <div class="mat-sort-header-arrow">
      <ng-content select="[matSortHeaderIcon]">
        <svg viewBox="0 -960 960 960" focusable="false" aria-hidden="true">
          <path d="M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z"/>
        </svg>
      </ng-content>
    </div>
  }
</div>
`,
      styles: [".mat-sort-header {\n  cursor: pointer;\n}\n\n.mat-sort-header-disabled {\n  cursor: default;\n}\n\n.mat-sort-header-container {\n  display: flex;\n  align-items: center;\n  letter-spacing: normal;\n  outline: 0;\n}\n[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container, [mat-sort-header].cdk-program-focused .mat-sort-header-container {\n  border-bottom: var(--mat-focus-indicator-fallback-border-style, solid) 1px currentColor;\n}\n.mat-sort-header-container::before {\n  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 4px) * -1);\n}\n\n.mat-sort-header-content {\n  display: flex;\n  align-items: center;\n}\n\n.mat-sort-header-position-before {\n  flex-direction: row-reverse;\n}\n\n@keyframes _mat-sort-header-recently-cleared-ascending {\n  from {\n    transform: translateY(0);\n    opacity: 1;\n  }\n  to {\n    transform: translateY(-25%);\n    opacity: 0;\n  }\n}\n@keyframes _mat-sort-header-recently-cleared-descending {\n  from {\n    transform: translateY(0) rotate(180deg);\n    opacity: 1;\n  }\n  to {\n    transform: translateY(25%) rotate(180deg);\n    opacity: 0;\n  }\n}\n.mat-sort-header-arrow {\n  height: 12px;\n  width: 12px;\n  position: relative;\n  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1), opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);\n  opacity: 0;\n  overflow: visible;\n  color: var(--mat-sort-arrow-color, var(--mat-sys-on-surface));\n}\n.mat-sort-header.cdk-keyboard-focused .mat-sort-header-arrow, .mat-sort-header.cdk-program-focused .mat-sort-header-arrow, .mat-sort-header:hover .mat-sort-header-arrow {\n  opacity: 0.54;\n}\n.mat-sort-header .mat-sort-header-sorted .mat-sort-header-arrow {\n  opacity: 1;\n}\n.mat-sort-header-descending .mat-sort-header-arrow {\n  transform: rotate(180deg);\n}\n.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {\n  transform: translateY(-25%);\n}\n.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {\n  transition: none;\n  animation: _mat-sort-header-recently-cleared-ascending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;\n}\n.mat-sort-header-recently-cleared-descending .mat-sort-header-arrow {\n  transition: none;\n  animation: _mat-sort-header-recently-cleared-descending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;\n}\n.mat-sort-header-animations-disabled .mat-sort-header-arrow {\n  transition-duration: 0ms;\n  animation-duration: 0ms;\n}\n.mat-sort-header-arrow > svg, .mat-sort-header-arrow [matSortHeaderIcon] {\n  width: 24px;\n  height: 24px;\n  fill: currentColor;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -12px 0 0 -12px;\n  transform: translateZ(0);\n}\n.mat-sort-header-arrow, [dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow {\n  margin: 0 0 0 6px;\n}\n.mat-sort-header-position-before .mat-sort-header-arrow, [dir=rtl] .mat-sort-header-arrow {\n  margin: 0 6px 0 0;\n}\n"]
    }]
  }], () => [], {
    id: [{
      type: Input,
      args: ["mat-sort-header"]
    }],
    arrowPosition: [{
      type: Input
    }],
    start: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    sortActionDescription: [{
      type: Input
    }],
    disableClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatSortModule = class _MatSortModule {
  static \u0275fac = function MatSortModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSortModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatSortModule,
    imports: [MatSort, MatSortHeader],
    exports: [MatSort, MatSortHeader, BidiModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSortModule, [{
    type: NgModule,
    args: [{
      imports: [MatSort, MatSortHeader],
      exports: [MatSort, MatSortHeader, BidiModule]
    }]
  }], null, null);
})();
var MatSortHeaderIntl = class _MatSortHeaderIntl {
  changes = new Subject();
  static \u0275fac = function MatSortHeaderIntl_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSortHeaderIntl)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: _MatSortHeaderIntl,
    factory: _MatSortHeaderIntl.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSortHeaderIntl, [{
    type: Service
  }], null, null);
})();

// src/app/core/models/material.model.ts
var UNITS_OF_MEASURE = [
  { value: "UNI", label: "Unidad (UNI)" },
  { value: "M2", label: "Metro cuadrado (M\xB2)" },
  { value: "ML", label: "Metro lineal (ML)" },
  { value: "M3", label: "Metro c\xFAbico (M\xB3)" },
  { value: "KG", label: "Kilogramo (KG)" },
  { value: "L", label: "Litro (L)" },
  { value: "PLACA", label: "Placa" },
  { value: "PAR", label: "Par" },
  { value: "JUEGO", label: "Juego" },
  { value: "M", label: "Metro (M)" }
];

// src/app/modules/materials/material-form/material-form.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.value;
function MaterialFormComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r1 = ctx.$implicit;
    \u0275\u0275property("value", cat_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r1.name);
  }
}
function MaterialFormComponent_For_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const unit_r2 = ctx.$implicit;
    \u0275\u0275property("value", unit_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(unit_r2.label);
  }
}
var MaterialFormComponent = class _MaterialFormComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.api = inject(ApiService);
    this.notify = inject(NotificationService);
    this.dialogRef = inject(MatDialogRef);
    this.data = inject(MAT_DIALOG_DATA);
    this.units = UNITS_OF_MEASURE;
    this.saving = false;
    this.form = this.fb.group({
      code: ["", Validators.required],
      name: ["", Validators.required],
      description: [""],
      categoryId: [null],
      unitOfMeasure: ["UNI", Validators.required],
      unitPrice: [0, [Validators.required, Validators.min(0)]],
      supplier: [""],
      notes: [""]
    });
  }
  get isEdit() {
    return !!this.data.material;
  }
  ngOnInit() {
    if (this.data.material) {
      const m = this.data.material;
      this.form.patchValue({
        code: m.code,
        name: m.name,
        description: m.description,
        categoryId: m.categoryId,
        unitOfMeasure: m.unitOfMeasure,
        unitPrice: m.unitPrice,
        supplier: m.supplier,
        notes: m.notes
      });
    }
  }
  save() {
    if (this.form.invalid)
      return;
    this.saving = true;
    const req = this.form.value;
    const obs = this.isEdit ? this.api.updateMaterial(this.data.material.id, req) : this.api.createMaterial(req);
    obs.subscribe({
      next: () => {
        this.notify.success(this.isEdit ? "Material actualizado" : "Material creado exitosamente");
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.notify.error(err.message);
        this.saving = false;
      }
    });
  }
  static {
    this.\u0275fac = function MaterialFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MaterialFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MaterialFormComponent, selectors: [["app-material-form"]], decls: 65, vars: 7, consts: [["mat-dialog-title", ""], [1, "material-form", 3, "formGroup"], [1, "form-row"], ["appearance", "outline"], ["matInput", "", "formControlName", "code", "placeholder", "Ej: MDF-15-2440", 3, "readonly"], ["formControlName", "categoryId"], [3, "value"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "name", "placeholder", "Ej: Tablero MDF 15mm 2440x1220"], ["matInput", "", "formControlName", "description", "rows", "2", "placeholder", "Descripci\xF3n detallada del material..."], ["formControlName", "unitOfMeasure"], ["matInput", "", "type", "number", "formControlName", "unitPrice", "min", "0", "step", "0.01"], ["matPrefix", ""], ["matInput", "", "formControlName", "supplier", "placeholder", "Nombre del proveedor"], ["matInput", "", "formControlName", "notes", "rows", "2", "placeholder", "Observaciones adicionales..."], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"]], template: function MaterialFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 0)(1, "mat-icon");
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "mat-dialog-content")(5, "form", 1)(6, "div", 2)(7, "mat-form-field", 3)(8, "mat-label");
        \u0275\u0275text(9, "C\xF3digo *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(10, "input", 4);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(11, "mat-error");
        \u0275\u0275text(12, "El c\xF3digo es requerido");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "mat-form-field", 3)(14, "mat-label");
        \u0275\u0275text(15, "Categor\xEDa");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "mat-select", 5)(17, "mat-option", 6);
        \u0275\u0275text(18, "Sin categor\xEDa");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(19, MaterialFormComponent_For_20_Template, 2, 2, "mat-option", 6, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "mat-form-field", 7)(22, "mat-label");
        \u0275\u0275text(23, "Nombre *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(24, "input", 8);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(25, "mat-error");
        \u0275\u0275text(26, "El nombre es requerido");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "mat-form-field", 7)(28, "mat-label");
        \u0275\u0275text(29, "Descripci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275element(30, "textarea", 9);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 2)(32, "mat-form-field", 3)(33, "mat-label");
        \u0275\u0275text(34, "Unidad de Medida *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "mat-select", 10);
        \u0275\u0275repeaterCreate(36, MaterialFormComponent_For_37_Template, 2, 2, "mat-option", 6, _forTrack1);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(38, "mat-error");
        \u0275\u0275text(39, "Requerido");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "mat-form-field", 3)(41, "mat-label");
        \u0275\u0275text(42, "Precio Unitario ($) *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(43, "input", 11);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(44, "span", 12);
        \u0275\u0275text(45, "$\xA0");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "mat-error");
        \u0275\u0275text(47, "Debe ser mayor o igual a 0");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(48, "mat-form-field", 7)(49, "mat-label");
        \u0275\u0275text(50, "Proveedor");
        \u0275\u0275elementEnd();
        \u0275\u0275element(51, "input", 13);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(52, "mat-icon", 12);
        \u0275\u0275text(53, "local_shipping");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "mat-form-field", 7)(55, "mat-label");
        \u0275\u0275text(56, "Notas");
        \u0275\u0275elementEnd();
        \u0275\u0275element(57, "textarea", 14);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(58, "mat-dialog-actions", 15)(59, "button", 16);
        \u0275\u0275text(60, "Cancelar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "button", 17);
        \u0275\u0275listener("click", function MaterialFormComponent_Template_button_click_61_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(62, "mat-icon");
        \u0275\u0275text(63, "save");
        \u0275\u0275elementEnd();
        \u0275\u0275text(64);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.isEdit ? "edit" : "add");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.isEdit ? "Editar Material" : "Nuevo Material", " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(5);
        \u0275\u0275property("readonly", ctx.isEdit);
        \u0275\u0275control();
        \u0275\u0275advance(6);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("value", null);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.data.categories);
        \u0275\u0275advance(5);
        \u0275\u0275control();
        \u0275\u0275advance(6);
        \u0275\u0275control();
        \u0275\u0275advance(5);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.units);
        \u0275\u0275advance(7);
        \u0275\u0275control();
        \u0275\u0275advance(8);
        \u0275\u0275control();
        \u0275\u0275advance(6);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.form.invalid || ctx.saving);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.saving ? "Guardando..." : "Guardar", " ");
      }
    }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, MatDialogModule, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent, MatFormFieldModule, MatFormField, MatLabel, MatError, MatPrefix, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, MatButtonModule, MatButton, MatIconModule, MatIcon, MatDividerModule], styles: ["\n.material-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  min-width: 560px;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n}\n.form-row[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  flex: 1;\n}\nmat-dialog-content[_ngcontent-%COMP%] {\n  max-height: 70vh;\n}\n/*# sourceMappingURL=material-form.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaterialFormComponent, [{
    type: Component,
    args: [{ selector: "app-material-form", standalone: true, imports: [
      ReactiveFormsModule,
      MatDialogModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatButtonModule,
      MatIconModule,
      MatDividerModule
    ], template: `
    <h2 mat-dialog-title>
      <mat-icon>{{ isEdit ? 'edit' : 'add' }}</mat-icon>
      {{ isEdit ? 'Editar Material' : 'Nuevo Material' }}
    </h2>

    <mat-dialog-content>
      <form [formGroup]="form" class="material-form">
        <div class="form-row">
          <mat-form-field appearance="outline">
            <mat-label>C\xF3digo *</mat-label>
            <input matInput formControlName="code" [readonly]="isEdit" placeholder="Ej: MDF-15-2440">
            <mat-error>El c\xF3digo es requerido</mat-error>
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Categor\xEDa</mat-label>
            <mat-select formControlName="categoryId">
              <mat-option [value]="null">Sin categor\xEDa</mat-option>
              @for (cat of data.categories; track cat.id) {
                <mat-option [value]="cat.id">{{ cat.name }}</mat-option>
              }
            </mat-select>
          </mat-form-field>
        </div>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Nombre *</mat-label>
          <input matInput formControlName="name" placeholder="Ej: Tablero MDF 15mm 2440x1220">
          <mat-error>El nombre es requerido</mat-error>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Descripci\xF3n</mat-label>
          <textarea matInput formControlName="description" rows="2" placeholder="Descripci\xF3n detallada del material..."></textarea>
        </mat-form-field>

        <div class="form-row">
          <mat-form-field appearance="outline">
            <mat-label>Unidad de Medida *</mat-label>
            <mat-select formControlName="unitOfMeasure">
              @for (unit of units; track unit.value) {
                <mat-option [value]="unit.value">{{ unit.label }}</mat-option>
              }
            </mat-select>
            <mat-error>Requerido</mat-error>
          </mat-form-field>

          <mat-form-field appearance="outline">
            <mat-label>Precio Unitario ($) *</mat-label>
            <input matInput type="number" formControlName="unitPrice" min="0" step="0.01">
            <span matPrefix>$&nbsp;</span>
            <mat-error>Debe ser mayor o igual a 0</mat-error>
          </mat-form-field>
        </div>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Proveedor</mat-label>
          <input matInput formControlName="supplier" placeholder="Nombre del proveedor">
          <mat-icon matPrefix>local_shipping</mat-icon>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Notas</mat-label>
          <textarea matInput formControlName="notes" rows="2" placeholder="Observaciones adicionales..."></textarea>
        </mat-form-field>
      </form>
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancelar</button>
      <button mat-raised-button color="primary" (click)="save()" [disabled]="form.invalid || saving">
        <mat-icon>save</mat-icon> {{ saving ? 'Guardando...' : 'Guardar' }}
      </button>
    </mat-dialog-actions>
  `, styles: ["/* angular:styles/component:css;9652dc8f4c1e9cce560476048e6c319ce4ba1e5d818fb950b98d839704db6a31;C:/Proyectos/moldtek/frontend/src/app/modules/materials/material-form/material-form.component.ts */\n.material-form {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  min-width: 560px;\n}\n.full-width {\n  width: 100%;\n}\n.form-row {\n  display: flex;\n  gap: 16px;\n}\n.form-row mat-form-field {\n  flex: 1;\n}\nmat-dialog-content {\n  max-height: 70vh;\n}\n/*# sourceMappingURL=material-form.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MaterialFormComponent, { className: "MaterialFormComponent", filePath: "src/app/modules/materials/material-form/material-form.component.ts", lineNumber: 104 });
})();

// src/app/modules/materials/materials.component.ts
var _c02 = () => [10, 20, 50];
var _forTrack02 = ($index, $item) => $item.id;
function MaterialsComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r1 = ctx.$implicit;
    \u0275\u0275property("value", cat_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r1.name);
  }
}
function MaterialsComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 12);
  }
}
function MaterialsComponent_th_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30);
    \u0275\u0275text(1, "C\xF3digo");
    \u0275\u0275elementEnd();
  }
}
function MaterialsComponent_td_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 31)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r2.code);
  }
}
function MaterialsComponent_th_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30);
    \u0275\u0275text(1, "Nombre");
    \u0275\u0275elementEnd();
  }
}
function MaterialsComponent_td_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r3.name);
  }
}
function MaterialsComponent_th_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1, "Categor\xEDa");
    \u0275\u0275elementEnd();
  }
}
function MaterialsComponent_td_37_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-chip-set")(1, "mat-chip");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.categoryName);
  }
}
function MaterialsComponent_td_37_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function MaterialsComponent_td_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 31);
    \u0275\u0275conditionalCreate(1, MaterialsComponent_td_37_Conditional_1_Template, 3, 1, "mat-chip-set")(2, MaterialsComponent_td_37_Conditional_2_Template, 2, 0, "span", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r4.categoryName ? 1 : 2);
  }
}
function MaterialsComponent_th_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1, "Unidad");
    \u0275\u0275elementEnd();
  }
}
function MaterialsComponent_td_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.unitOfMeasure);
  }
}
function MaterialsComponent_th_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30);
    \u0275\u0275text(1, "Precio Unit. ($)");
    \u0275\u0275elementEnd();
  }
}
function MaterialsComponent_td_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 34);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, row_r6.unitPrice, "1.0-0"), " ");
  }
}
function MaterialsComponent_th_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1, "Proveedor");
    \u0275\u0275elementEnd();
  }
}
function MaterialsComponent_td_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r7.supplier || "\u2014");
  }
}
function MaterialsComponent_th_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1, "Acciones");
    \u0275\u0275elementEnd();
  }
}
function MaterialsComponent_td_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 31)(1, "button", 35);
    \u0275\u0275listener("click", function MaterialsComponent_td_49_Template_button_click_1_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r9 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r9.openForm(row_r9));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 36);
    \u0275\u0275listener("click", function MaterialsComponent_td_49_Template_button_click_4_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r9 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r9.deleteMaterial(row_r9));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd()()();
  }
}
function MaterialsComponent_tr_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 37);
  }
}
function MaterialsComponent_tr_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 38);
  }
}
function MaterialsComponent_tr_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 39)(1, "td", 40)(2, "div", 41)(3, "mat-icon");
    \u0275\u0275text(4, "inventory_2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "No se encontraron materiales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 11);
    \u0275\u0275listener("click", function MaterialsComponent_tr_52_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r9 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r9.openForm());
    });
    \u0275\u0275text(8, "Agregar primer material");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r9.columns.length);
  }
}
var MaterialsComponent = class _MaterialsComponent {
  constructor() {
    this.api = inject(ApiService);
    this.dialog = inject(MatDialog);
    this.notify = inject(NotificationService);
    this.columns = ["code", "name", "categoryName", "unitOfMeasure", "unitPrice", "supplier", "actions"];
    this.dataSource = new MatTableDataSource([]);
    this.categories = signal(
      [],
      ...ngDevMode ? [{ debugName: "categories" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.totalElements = 0;
    this.searchText = "";
    this.selectedCategory = null;
    this.currentPage = 0;
  }
  ngOnInit() {
    this.loadCategories();
    this.loadMaterials();
  }
  loadCategories() {
    this.api.getMaterialCategories().subscribe((cats) => this.categories.set(cats));
  }
  loadMaterials() {
    this.loading.set(true);
    this.api.getMaterials(this.searchText, this.selectedCategory ?? void 0, this.currentPage, 20).subscribe({
      next: (page) => {
        this.dataSource.data = page.content;
        this.totalElements = page.totalElements;
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  onFilterChange() {
    this.currentPage = 0;
    this.loadMaterials();
  }
  onPageChange(event) {
    this.currentPage = event.pageIndex;
    this.loadMaterials();
  }
  openForm(material) {
    const ref = this.dialog.open(MaterialFormComponent, {
      width: "640px",
      data: { material, categories: this.categories() }
    });
    ref.afterClosed().subscribe((result) => {
      if (result)
        this.loadMaterials();
    });
  }
  deleteMaterial(material) {
    if (!confirm(`\xBFEliminar material "${material.name}"?`))
      return;
    this.api.deleteMaterial(material.id).subscribe({
      next: () => {
        this.notify.success("Material eliminado");
        this.loadMaterials();
      },
      error: (err) => this.notify.error(err.message)
    });
  }
  static {
    this.\u0275fac = function MaterialsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MaterialsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MaterialsComponent, selectors: [["app-materials"]], viewQuery: function MaterialsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatPaginator, 5)(MatSort, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      }
    }, decls: 54, vars: 11, consts: [[1, "page-container"], [1, "content-card"], [1, "card-header"], [2, "vertical-align", "middle", "margin-right", "8px"], [1, "header-actions"], ["appearance", "outline", "subscriptSizing", "dynamic", 2, "width", "200px"], [3, "ngModelChange", "ngModel"], [3, "value"], ["appearance", "outline", "subscriptSizing", "dynamic", 2, "width", "220px"], ["matInput", "", "placeholder", "C\xF3digo o nombre...", 3, "ngModelChange", "ngModel"], ["matSuffix", ""], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mode", "indeterminate"], [1, "table-wrapper"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "code"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "categoryName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "unitOfMeasure"], ["matColumnDef", "unitPrice"], ["mat-cell", "", "class", "text-right", 4, "matCellDef"], ["matColumnDef", "supplier"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", 3, "page", "length", "pageSize", "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], [1, "text-muted"], ["mat-cell", "", 1, "text-right"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Editar", 3, "click"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Eliminar", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], [1, "mat-cell"], [1, "empty-state"]], template: function MaterialsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1)(2, "div", 2)(3, "h2")(4, "mat-icon", 3);
        \u0275\u0275text(5, "inventory_2");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, "Cat\xE1logo de Materiales");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 4)(8, "mat-form-field", 5)(9, "mat-label");
        \u0275\u0275text(10, "Categor\xEDa");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "mat-select", 6);
        \u0275\u0275twoWayListener("ngModelChange", function MaterialsComponent_Template_mat_select_ngModelChange_11_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedCategory, $event) || (ctx.selectedCategory = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function MaterialsComponent_Template_mat_select_ngModelChange_11_listener() {
          return ctx.onFilterChange();
        });
        \u0275\u0275elementStart(12, "mat-option", 7);
        \u0275\u0275text(13, "Todas");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(14, MaterialsComponent_For_15_Template, 2, 2, "mat-option", 7, _forTrack02);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "mat-form-field", 8)(17, "mat-label");
        \u0275\u0275text(18, "Buscar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function MaterialsComponent_Template_input_ngModelChange_19_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function MaterialsComponent_Template_input_ngModelChange_19_listener() {
          return ctx.onFilterChange();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(20, "mat-icon", 10);
        \u0275\u0275text(21, "search");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "button", 11);
        \u0275\u0275listener("click", function MaterialsComponent_Template_button_click_22_listener() {
          return ctx.openForm();
        });
        \u0275\u0275elementStart(23, "mat-icon");
        \u0275\u0275text(24, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(25, " Nuevo Material ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(26, MaterialsComponent_Conditional_26_Template, 1, 0, "mat-progress-bar", 12);
        \u0275\u0275elementStart(27, "div", 13)(28, "table", 14);
        \u0275\u0275elementContainerStart(29, 15);
        \u0275\u0275template(30, MaterialsComponent_th_30_Template, 2, 0, "th", 16)(31, MaterialsComponent_td_31_Template, 3, 1, "td", 17);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(32, 18);
        \u0275\u0275template(33, MaterialsComponent_th_33_Template, 2, 0, "th", 16)(34, MaterialsComponent_td_34_Template, 2, 1, "td", 17);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(35, 19);
        \u0275\u0275template(36, MaterialsComponent_th_36_Template, 2, 0, "th", 20)(37, MaterialsComponent_td_37_Template, 3, 1, "td", 17);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(38, 21);
        \u0275\u0275template(39, MaterialsComponent_th_39_Template, 2, 0, "th", 20)(40, MaterialsComponent_td_40_Template, 2, 1, "td", 17);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(41, 22);
        \u0275\u0275template(42, MaterialsComponent_th_42_Template, 2, 0, "th", 16)(43, MaterialsComponent_td_43_Template, 3, 4, "td", 23);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(44, 24);
        \u0275\u0275template(45, MaterialsComponent_th_45_Template, 2, 0, "th", 20)(46, MaterialsComponent_td_46_Template, 2, 1, "td", 17);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(47, 25);
        \u0275\u0275template(48, MaterialsComponent_th_48_Template, 2, 0, "th", 20)(49, MaterialsComponent_td_49_Template, 7, 0, "td", 17);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(50, MaterialsComponent_tr_50_Template, 1, 0, "tr", 26)(51, MaterialsComponent_tr_51_Template, 1, 0, "tr", 27)(52, MaterialsComponent_tr_52_Template, 9, 1, "tr", 28);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "mat-paginator", 29);
        \u0275\u0275listener("page", function MaterialsComponent_Template_mat_paginator_page_53_listener($event) {
          return ctx.onPageChange($event);
        });
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedCategory);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("value", null);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.categories());
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
        \u0275\u0275control();
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx.loading() ? 26 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("dataSource", ctx.dataSource);
        \u0275\u0275advance(22);
        \u0275\u0275property("matHeaderRowDef", ctx.columns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.columns);
        \u0275\u0275advance(2);
        \u0275\u0275property("length", ctx.totalElements)("pageSize", 20)("pageSizeOptions", \u0275\u0275pureFunction0(10, _c02));
      }
    }, dependencies: [
      MatTableModule,
      MatTable,
      MatHeaderCellDef,
      MatHeaderRowDef,
      MatColumnDef,
      MatCellDef,
      MatRowDef,
      MatHeaderCell,
      MatCell,
      MatHeaderRow,
      MatRow,
      MatNoDataRow,
      MatPaginatorModule,
      MatPaginator,
      MatSortModule,
      MatSort,
      MatSortHeader,
      MatCardModule,
      MatCard,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatInput,
      MatFormField,
      MatLabel,
      MatSuffix,
      MatFormFieldModule,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatDialogModule,
      MatChipsModule,
      MatChip,
      MatChipSet,
      MatTooltipModule,
      MatTooltip,
      MatProgressBarModule,
      MatProgressBar,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      DecimalPipe
    ], styles: ["\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\nmat-chip[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n/*# sourceMappingURL=materials.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaterialsComponent, [{
    type: Component,
    args: [{ selector: "app-materials", standalone: true, imports: [
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatCardModule,
      MatButtonModule,
      MatIconModule,
      MatInputModule,
      MatFormFieldModule,
      MatSelectModule,
      MatDialogModule,
      MatChipsModule,
      MatTooltipModule,
      MatProgressBarModule,
      FormsModule,
      DecimalPipe
    ], template: `
    <div class="page-container">
      <mat-card class="content-card">
        <div class="card-header">
          <h2><mat-icon style="vertical-align:middle;margin-right:8px">inventory_2</mat-icon>Cat\xE1logo de Materiales</h2>
          <div class="header-actions">
            <mat-form-field appearance="outline" style="width:200px" subscriptSizing="dynamic">
              <mat-label>Categor\xEDa</mat-label>
              <mat-select [(ngModel)]="selectedCategory" (ngModelChange)="onFilterChange()">
                <mat-option [value]="null">Todas</mat-option>
                @for (cat of categories(); track cat.id) {
                  <mat-option [value]="cat.id">{{ cat.name }}</mat-option>
                }
              </mat-select>
            </mat-form-field>
            <mat-form-field appearance="outline" style="width:220px" subscriptSizing="dynamic">
              <mat-label>Buscar</mat-label>
              <input matInput [(ngModel)]="searchText" (ngModelChange)="onFilterChange()" placeholder="C\xF3digo o nombre...">
              <mat-icon matSuffix>search</mat-icon>
            </mat-form-field>
            <button mat-raised-button color="primary" (click)="openForm()">
              <mat-icon>add</mat-icon> Nuevo Material
            </button>
          </div>
        </div>

        @if (loading()) {
          <mat-progress-bar mode="indeterminate" />
        }

        <div class="table-wrapper">
          <table mat-table [dataSource]="dataSource" matSort>
            <ng-container matColumnDef="code">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>C\xF3digo</th>
              <td mat-cell *matCellDef="let row"><strong>{{ row.code }}</strong></td>
            </ng-container>

            <ng-container matColumnDef="name">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>Nombre</th>
              <td mat-cell *matCellDef="let row">{{ row.name }}</td>
            </ng-container>

            <ng-container matColumnDef="categoryName">
              <th mat-header-cell *matHeaderCellDef>Categor\xEDa</th>
              <td mat-cell *matCellDef="let row">
                @if (row.categoryName) {
                  <mat-chip-set><mat-chip>{{ row.categoryName }}</mat-chip></mat-chip-set>
                } @else {
                  <span class="text-muted">\u2014</span>
                }
              </td>
            </ng-container>

            <ng-container matColumnDef="unitOfMeasure">
              <th mat-header-cell *matHeaderCellDef>Unidad</th>
              <td mat-cell *matCellDef="let row">{{ row.unitOfMeasure }}</td>
            </ng-container>

            <ng-container matColumnDef="unitPrice">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>Precio Unit. ($)</th>
              <td mat-cell *matCellDef="let row" class="text-right">
                {{ row.unitPrice | number:'1.0-0' }}
              </td>
            </ng-container>

            <ng-container matColumnDef="supplier">
              <th mat-header-cell *matHeaderCellDef>Proveedor</th>
              <td mat-cell *matCellDef="let row">{{ row.supplier || '\u2014' }}</td>
            </ng-container>

            <ng-container matColumnDef="actions">
              <th mat-header-cell *matHeaderCellDef>Acciones</th>
              <td mat-cell *matCellDef="let row">
                <button mat-icon-button color="primary" (click)="openForm(row)" matTooltip="Editar">
                  <mat-icon>edit</mat-icon>
                </button>
                <button mat-icon-button color="warn" (click)="deleteMaterial(row)" matTooltip="Eliminar">
                  <mat-icon>delete</mat-icon>
                </button>
              </td>
            </ng-container>

            <tr mat-header-row *matHeaderRowDef="columns"></tr>
            <tr mat-row *matRowDef="let row; columns: columns;"></tr>

            <tr class="mat-row" *matNoDataRow>
              <td class="mat-cell" [attr.colspan]="columns.length">
                <div class="empty-state">
                  <mat-icon>inventory_2</mat-icon>
                  <p>No se encontraron materiales</p>
                  <button mat-raised-button color="primary" (click)="openForm()">Agregar primer material</button>
                </div>
              </td>
            </tr>
          </table>
        </div>

        <mat-paginator [length]="totalElements" [pageSize]="20" [pageSizeOptions]="[10,20,50]"
                       (page)="onPageChange($event)" showFirstLastButtons />
      </mat-card>
    </div>
  `, styles: ["/* angular:styles/component:css;f834466c54bfaa184211c5fd54de428b3e5ae51c7abce23561808362321985fb;C:/Proyectos/moldtek/frontend/src/app/modules/materials/materials.component.ts */\n.text-right {\n  text-align: right;\n}\nmat-chip {\n  font-size: 0.75rem;\n}\n/*# sourceMappingURL=materials.component.css.map */\n"] }]
  }], null, { paginator: [{
    type: ViewChild,
    args: [MatPaginator]
  }], sort: [{
    type: ViewChild,
    args: [MatSort]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MaterialsComponent, { className: "MaterialsComponent", filePath: "src/app/modules/materials/materials.component.ts", lineNumber: 134 });
})();
export {
  MaterialsComponent
};
//# debugId=d3a15e29-562f-57a0-8428-f211692f2afd
//# sourceMappingURL=chunk-772XRKY4.js.map
