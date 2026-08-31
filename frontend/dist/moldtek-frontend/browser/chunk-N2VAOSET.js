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
  MatDialog,
  MatDialogModule
} from "./chunk-35PRK2AW.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatLabel,
  MatSuffix,
  NotificationService
} from "./chunk-2RXZUKY7.js";
import "./chunk-T4USGM5V.js";
import "./chunk-ERVSOKK3.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-EFOXA73Z.js";
import {
  ApiService
} from "./chunk-LVWMVW7I.js";
import {
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconButton,
  MatIconModule
} from "./chunk-XA3QIYNR.js";
import {
  DecimalPipe
} from "./chunk-C3SHWEMB.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate4,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-EHKUBBLL.js";

// src/app/modules/products/products.component.ts
var _c0 = () => [10, 20, 50];
var _forTrack0 = ($index, $item) => $item.id;
function ProductsComponent_For_15_Template(rf, ctx) {
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
function ProductsComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 12);
  }
}
function ProductsComponent_th_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, "C\xF3digo");
    \u0275\u0275elementEnd();
  }
}
function ProductsComponent_td_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r2.code);
  }
}
function ProductsComponent_th_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, "Nombre");
    \u0275\u0275elementEnd();
  }
}
function ProductsComponent_td_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r3.name);
  }
}
function ProductsComponent_th_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, "Categor\xEDa");
    \u0275\u0275elementEnd();
  }
}
function ProductsComponent_td_37_Conditional_1_Template(rf, ctx) {
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
function ProductsComponent_td_37_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function ProductsComponent_td_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30);
    \u0275\u0275conditionalCreate(1, ProductsComponent_td_37_Conditional_1_Template, 3, 1, "mat-chip-set")(2, ProductsComponent_td_37_Conditional_2_Template, 2, 0, "span", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r4.categoryName ? 1 : 2);
  }
}
function ProductsComponent_th_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, "Dimensiones (mm)");
    \u0275\u0275elementEnd();
  }
}
function ProductsComponent_td_40_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate4(" ", row_r5.heightMin, "\u2013", row_r5.heightMax, " \xD7 ", row_r5.widthMin, "\u2013", row_r5.widthMax, " ");
  }
}
function ProductsComponent_td_40_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function ProductsComponent_td_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30);
    \u0275\u0275conditionalCreate(1, ProductsComponent_td_40_Conditional_1_Template, 2, 4, "span", 32)(2, ProductsComponent_td_40_Conditional_2_Template, 2, 0, "span", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r5.heightMin ? 1 : 2);
  }
}
function ProductsComponent_th_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, "Terminaci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function ProductsComponent_td_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.finishType || "\u2014");
  }
}
function ProductsComponent_th_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, "Precio ($)");
    \u0275\u0275elementEnd();
  }
}
function ProductsComponent_td_46_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const row_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, row_r7.price, "1.0-0"), " ");
  }
}
function ProductsComponent_td_46_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function ProductsComponent_td_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 33);
    \u0275\u0275conditionalCreate(1, ProductsComponent_td_46_Conditional_1_Template, 2, 4)(2, ProductsComponent_td_46_Conditional_2_Template, 2, 0, "span", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r7.price ? 1 : 2);
  }
}
function ProductsComponent_th_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, "Acciones");
    \u0275\u0275elementEnd();
  }
}
function ProductsComponent_td_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 30)(1, "button", 34);
    \u0275\u0275listener("click", function ProductsComponent_td_49_Template_button_click_1_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r9 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r9.openForm(row_r9));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 35);
    \u0275\u0275listener("click", function ProductsComponent_td_49_Template_button_click_4_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r9 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r9.deleteProduct(row_r9));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd()()();
  }
}
function ProductsComponent_tr_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 36);
  }
}
function ProductsComponent_tr_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 37);
  }
}
function ProductsComponent_tr_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 38)(1, "td", 39)(2, "div", 40)(3, "mat-icon");
    \u0275\u0275text(4, "door_front");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "No se encontraron productos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 11);
    \u0275\u0275listener("click", function ProductsComponent_tr_52_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r9 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r9.openForm());
    });
    \u0275\u0275text(8, "Agregar primer producto");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r9.columns.length);
  }
}
var ProductsComponent = class _ProductsComponent {
  constructor() {
    this.api = inject(ApiService);
    this.dialog = inject(MatDialog);
    this.notify = inject(NotificationService);
    this.columns = ["code", "name", "categoryName", "dimensions", "finishType", "price", "actions"];
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
    this.api.getProductCategories().subscribe((cats) => this.categories.set(cats));
    this.loadProducts();
  }
  loadProducts() {
    this.loading.set(true);
    this.api.getProducts(this.searchText, this.selectedCategory ?? void 0, this.currentPage, 20).subscribe({
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
    this.loadProducts();
  }
  onPageChange(event) {
    this.currentPage = event.pageIndex;
    this.loadProducts();
  }
  openForm(product) {
    import("./chunk-2NBIUEBZ.js").then((m) => {
      const ref = this.dialog.open(m.ProductFormComponent, {
        width: "720px",
        data: { product, categories: this.categories() }
      });
      ref.afterClosed().subscribe((result) => {
        if (result)
          this.loadProducts();
      });
    });
  }
  deleteProduct(p) {
    if (!confirm(`\xBFEliminar producto "${p.name}"?`))
      return;
    this.api.deleteProduct(p.id).subscribe({
      next: () => {
        this.notify.success("Producto eliminado");
        this.loadProducts();
      },
      error: (err) => this.notify.error(err.message)
    });
  }
  static {
    this.\u0275fac = function ProductsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductsComponent, selectors: [["app-products"]], decls: 54, vars: 11, consts: [[1, "page-container"], [1, "content-card"], [1, "card-header"], [2, "vertical-align", "middle", "margin-right", "8px"], [1, "header-actions"], ["appearance", "outline", "subscriptSizing", "dynamic", 2, "width", "200px"], [3, "ngModelChange", "ngModel"], [3, "value"], ["appearance", "outline", "subscriptSizing", "dynamic", 2, "width", "220px"], ["matInput", "", "placeholder", "C\xF3digo o nombre...", 3, "ngModelChange", "ngModel"], ["matSuffix", ""], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mode", "indeterminate"], [1, "table-wrapper"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "code"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "categoryName"], ["matColumnDef", "dimensions"], ["matColumnDef", "finishType"], ["matColumnDef", "price"], ["mat-cell", "", "style", "text-align:right", 4, "matCellDef"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", 3, "page", "length", "pageSize", "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "text-muted"], [1, "text-muted", 2, "font-size", "0.8rem"], ["mat-cell", "", 2, "text-align", "right"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Editar", 3, "click"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Eliminar", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], [1, "mat-cell"], [1, "empty-state"]], template: function ProductsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1)(2, "div", 2)(3, "h2")(4, "mat-icon", 3);
        \u0275\u0275text(5, "door_front");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, "Cat\xE1logo de Productos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 4)(8, "mat-form-field", 5)(9, "mat-label");
        \u0275\u0275text(10, "Categor\xEDa");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "mat-select", 6);
        \u0275\u0275twoWayListener("ngModelChange", function ProductsComponent_Template_mat_select_ngModelChange_11_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedCategory, $event) || (ctx.selectedCategory = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function ProductsComponent_Template_mat_select_ngModelChange_11_listener() {
          return ctx.onFilterChange();
        });
        \u0275\u0275elementStart(12, "mat-option", 7);
        \u0275\u0275text(13, "Todas");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(14, ProductsComponent_For_15_Template, 2, 2, "mat-option", 7, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "mat-form-field", 8)(17, "mat-label");
        \u0275\u0275text(18, "Buscar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function ProductsComponent_Template_input_ngModelChange_19_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function ProductsComponent_Template_input_ngModelChange_19_listener() {
          return ctx.onFilterChange();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(20, "mat-icon", 10);
        \u0275\u0275text(21, "search");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "button", 11);
        \u0275\u0275listener("click", function ProductsComponent_Template_button_click_22_listener() {
          return ctx.openForm();
        });
        \u0275\u0275elementStart(23, "mat-icon");
        \u0275\u0275text(24, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(25, " Nuevo Producto ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(26, ProductsComponent_Conditional_26_Template, 1, 0, "mat-progress-bar", 12);
        \u0275\u0275elementStart(27, "div", 13)(28, "table", 14);
        \u0275\u0275elementContainerStart(29, 15);
        \u0275\u0275template(30, ProductsComponent_th_30_Template, 2, 0, "th", 16)(31, ProductsComponent_td_31_Template, 3, 1, "td", 17);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(32, 18);
        \u0275\u0275template(33, ProductsComponent_th_33_Template, 2, 0, "th", 16)(34, ProductsComponent_td_34_Template, 2, 1, "td", 17);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(35, 19);
        \u0275\u0275template(36, ProductsComponent_th_36_Template, 2, 0, "th", 16)(37, ProductsComponent_td_37_Template, 3, 1, "td", 17);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(38, 20);
        \u0275\u0275template(39, ProductsComponent_th_39_Template, 2, 0, "th", 16)(40, ProductsComponent_td_40_Template, 3, 1, "td", 17);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(41, 21);
        \u0275\u0275template(42, ProductsComponent_th_42_Template, 2, 0, "th", 16)(43, ProductsComponent_td_43_Template, 2, 1, "td", 17);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(44, 22);
        \u0275\u0275template(45, ProductsComponent_th_45_Template, 2, 0, "th", 16)(46, ProductsComponent_td_46_Template, 3, 1, "td", 23);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(47, 24);
        \u0275\u0275template(48, ProductsComponent_th_48_Template, 2, 0, "th", 16)(49, ProductsComponent_td_49_Template, 7, 0, "td", 17);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(50, ProductsComponent_tr_50_Template, 1, 0, "tr", 25)(51, ProductsComponent_tr_51_Template, 1, 0, "tr", 26)(52, ProductsComponent_tr_52_Template, 9, 1, "tr", 27);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "mat-paginator", 28);
        \u0275\u0275listener("page", function ProductsComponent_Template_mat_paginator_page_53_listener($event) {
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
        \u0275\u0275property("length", ctx.totalElements)("pageSize", 20)("pageSizeOptions", \u0275\u0275pureFunction0(10, _c0));
      }
    }, dependencies: [MatCardModule, MatCard, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatNoDataRow, MatPaginatorModule, MatPaginator, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatInputModule, MatInput, MatFormField, MatLabel, MatSuffix, MatFormFieldModule, MatSelectModule, MatSelect, MatOption, MatChipsModule, MatChip, MatChipSet, MatTooltipModule, MatTooltip, MatProgressBarModule, MatProgressBar, MatDialogModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, DecimalPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductsComponent, [{
    type: Component,
    args: [{
      selector: "app-products",
      standalone: true,
      imports: [
        MatCardModule,
        MatTableModule,
        MatPaginatorModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatChipsModule,
        MatTooltipModule,
        MatProgressBarModule,
        MatDialogModule,
        FormsModule,
        DecimalPipe
      ],
      template: `
    <div class="page-container">
      <mat-card class="content-card">
        <div class="card-header">
          <h2><mat-icon style="vertical-align:middle;margin-right:8px">door_front</mat-icon>Cat\xE1logo de Productos</h2>
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
              <mat-icon>add</mat-icon> Nuevo Producto
            </button>
          </div>
        </div>

        @if (loading()) { <mat-progress-bar mode="indeterminate" /> }

        <div class="table-wrapper">
          <table mat-table [dataSource]="dataSource">
            <ng-container matColumnDef="code">
              <th mat-header-cell *matHeaderCellDef>C\xF3digo</th>
              <td mat-cell *matCellDef="let row"><strong>{{ row.code }}</strong></td>
            </ng-container>
            <ng-container matColumnDef="name">
              <th mat-header-cell *matHeaderCellDef>Nombre</th>
              <td mat-cell *matCellDef="let row">{{ row.name }}</td>
            </ng-container>
            <ng-container matColumnDef="categoryName">
              <th mat-header-cell *matHeaderCellDef>Categor\xEDa</th>
              <td mat-cell *matCellDef="let row">
                @if (row.categoryName) {
                  <mat-chip-set><mat-chip>{{ row.categoryName }}</mat-chip></mat-chip-set>
                } @else { <span class="text-muted">\u2014</span> }
              </td>
            </ng-container>
            <ng-container matColumnDef="dimensions">
              <th mat-header-cell *matHeaderCellDef>Dimensiones (mm)</th>
              <td mat-cell *matCellDef="let row">
                @if (row.heightMin) {
                  <span class="text-muted" style="font-size:0.8rem">
                    {{ row.heightMin }}\u2013{{ row.heightMax }} \xD7 {{ row.widthMin }}\u2013{{ row.widthMax }}
                  </span>
                } @else { <span class="text-muted">\u2014</span> }
              </td>
            </ng-container>
            <ng-container matColumnDef="finishType">
              <th mat-header-cell *matHeaderCellDef>Terminaci\xF3n</th>
              <td mat-cell *matCellDef="let row">{{ row.finishType || '\u2014' }}</td>
            </ng-container>
            <ng-container matColumnDef="price">
              <th mat-header-cell *matHeaderCellDef>Precio ($)</th>
              <td mat-cell *matCellDef="let row" style="text-align:right">
                @if (row.price) { {{ row.price | number:'1.0-0' }} }
                @else { <span class="text-muted">\u2014</span> }
              </td>
            </ng-container>
            <ng-container matColumnDef="actions">
              <th mat-header-cell *matHeaderCellDef>Acciones</th>
              <td mat-cell *matCellDef="let row">
                <button mat-icon-button color="primary" (click)="openForm(row)" matTooltip="Editar">
                  <mat-icon>edit</mat-icon>
                </button>
                <button mat-icon-button color="warn" (click)="deleteProduct(row)" matTooltip="Eliminar">
                  <mat-icon>delete</mat-icon>
                </button>
              </td>
            </ng-container>
            <tr mat-header-row *matHeaderRowDef="columns"></tr>
            <tr mat-row *matRowDef="let row; columns: columns;"></tr>
            <tr class="mat-row" *matNoDataRow>
              <td class="mat-cell" [attr.colspan]="columns.length">
                <div class="empty-state">
                  <mat-icon>door_front</mat-icon>
                  <p>No se encontraron productos</p>
                  <button mat-raised-button color="primary" (click)="openForm()">Agregar primer producto</button>
                </div>
              </td>
            </tr>
          </table>
        </div>

        <mat-paginator [length]="totalElements" [pageSize]="20" [pageSizeOptions]="[10,20,50]"
                       (page)="onPageChange($event)" showFirstLastButtons />
      </mat-card>
    </div>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductsComponent, { className: "ProductsComponent", filePath: "src/app/modules/products/products.component.ts", lineNumber: 126 });
})();
export {
  ProductsComponent
};
//# debugId=84a27140-0323-5b78-89b6-36d3f2f1eae9
//# sourceMappingURL=chunk-N2VAOSET.js.map
