import {
  Router,
  RouterLink
} from "./chunk-Q2CMZJDU.js";
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
  MatProgressBar,
  MatProgressBarModule,
  MatTableModule,
  MatTooltip,
  MatTooltipModule
} from "./chunk-KB7KMNPI.js";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardImage,
  MatCardModule
} from "./chunk-4SX5R4K7.js";
import "./chunk-CVYYOXZQ.js";
import {
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
import "./chunk-C3SHWEMB.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-EHKUBBLL.js";

// src/app/modules/templates/templates.component.ts
var _c0 = () => [12, 24, 48];
var _c1 = (a0) => ["/templates", a0];
var _forTrack0 = ($index, $item) => $item.id;
function TemplatesComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 9);
  }
}
function TemplatesComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "mat-icon");
    \u0275\u0275text(2, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No hay plantillas creadas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6, "Las plantillas definen los materiales necesarios para fabricar un modelo de puerta o moldura");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 14);
    \u0275\u0275listener("click", function TemplatesComponent_Conditional_20_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newTemplate());
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Crear primera plantilla ");
    \u0275\u0275elementEnd()();
  }
}
function TemplatesComponent_For_22_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 15);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("alt", \u0275\u0275interpolate(t_r4.name))("src", t_r4.imageUrl, \u0275\u0275sanitizeUrl);
  }
}
function TemplatesComponent_For_22_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "mat-icon");
    \u0275\u0275text(2, "door_front");
    \u0275\u0275elementEnd()();
  }
}
function TemplatesComponent_For_22_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-chip-set")(1, "mat-chip", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4.productName);
  }
}
function TemplatesComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 12);
    \u0275\u0275conditionalCreate(1, TemplatesComponent_For_22_Conditional_1_Template, 1, 3, "img", 15)(2, TemplatesComponent_For_22_Conditional_2_Template, 3, 0, "div", 16);
    \u0275\u0275elementStart(3, "mat-card-content")(4, "div", 17);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, TemplatesComponent_For_22_Conditional_8_Template, 3, 1, "mat-chip-set");
    \u0275\u0275elementStart(9, "div", 19)(10, "mat-icon", 20);
    \u0275\u0275text(11, "build");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 21);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "mat-card-actions")(15, "button", 22)(16, "mat-icon");
    \u0275\u0275text(17, "open_in_new");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " Abrir ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 23);
    \u0275\u0275listener("click", function TemplatesComponent_For_22_Template_button_click_19_listener() {
      const t_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.delete(t_r4));
    });
    \u0275\u0275elementStart(20, "mat-icon");
    \u0275\u0275text(21, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(t_r4.imageUrl ? 1 : 2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r4.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(t_r4.productName ? 8 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", t_r4.materials?.length ?? 0, " materiales");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c1, t_r4.id));
  }
}
var TemplatesComponent = class _TemplatesComponent {
  constructor() {
    this.api = inject(ApiService);
    this.router = inject(Router);
    this.notify = inject(NotificationService);
    this.templates = signal(
      [],
      ...ngDevMode ? [{ debugName: "templates" }] : (
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
    this.currentPage = 0;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading.set(true);
    this.api.getTemplates(this.searchText, void 0, this.currentPage, 12).subscribe({
      next: (page) => {
        this.templates.set(page.content);
        this.totalElements = page.totalElements;
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  onPageChange(event) {
    this.currentPage = event.pageIndex;
    this.load();
  }
  newTemplate() {
    this.router.navigate(["/templates", "new"]);
  }
  delete(t) {
    if (!confirm(`\xBFEliminar plantilla "${t.name}"?`))
      return;
    this.api.deleteTemplate(t.id).subscribe({
      next: () => {
        this.notify.success("Plantilla eliminada");
        this.load();
      },
      error: (err) => this.notify.error(err.message)
    });
  }
  static {
    this.\u0275fac = function TemplatesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TemplatesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TemplatesComponent, selectors: [["app-templates"]], decls: 24, vars: 7, consts: [[1, "page-container"], [1, "content-card"], [1, "card-header"], [2, "vertical-align", "middle", "margin-right", "8px"], [1, "header-actions"], ["appearance", "outline", "subscriptSizing", "dynamic", 2, "width", "240px"], ["matInput", "", "placeholder", "C\xF3digo o nombre...", 3, "ngModelChange", "ngModel"], ["matSuffix", ""], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mode", "indeterminate"], [1, "templates-grid"], [1, "empty-state"], [1, "template-card"], ["showFirstLastButtons", "", 3, "page", "length", "pageSize", "pageSizeOptions"], ["mat-raised-button", "", "color", "primary", 2, "margin-top", "16px", 3, "click"], ["mat-card-image", "", 2, "height", "140px", "object-fit", "cover", 3, "src", "alt"], [1, "placeholder-img"], [1, "template-code"], [1, "template-name"], [1, "template-meta"], [2, "font-size", "14px", "color", "rgba(0,0,0,0.5)"], [1, "text-muted", 2, "font-size", "0.8rem"], ["mat-button", "", "color", "primary", 3, "routerLink"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Eliminar", 3, "click"], [2, "font-size", "0.7rem"]], template: function TemplatesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1)(2, "div", 2)(3, "h2")(4, "mat-icon", 3);
        \u0275\u0275text(5, "description");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, "Plantillas de Fabricaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 4)(8, "mat-form-field", 5)(9, "mat-label");
        \u0275\u0275text(10, "Buscar plantilla");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function TemplatesComponent_Template_input_ngModelChange_11_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function TemplatesComponent_Template_input_ngModelChange_11_listener() {
          return ctx.load();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(12, "mat-icon", 7);
        \u0275\u0275text(13, "search");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "button", 8);
        \u0275\u0275listener("click", function TemplatesComponent_Template_button_click_14_listener() {
          return ctx.newTemplate();
        });
        \u0275\u0275elementStart(15, "mat-icon");
        \u0275\u0275text(16, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(17, " Nueva Plantilla ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(18, TemplatesComponent_Conditional_18_Template, 1, 0, "mat-progress-bar", 9);
        \u0275\u0275elementStart(19, "div", 10);
        \u0275\u0275conditionalCreate(20, TemplatesComponent_Conditional_20_Template, 11, 0, "div", 11);
        \u0275\u0275repeaterCreate(21, TemplatesComponent_For_22_Template, 22, 8, "mat-card", 12, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "mat-paginator", 13);
        \u0275\u0275listener("page", function TemplatesComponent_Template_mat_paginator_page_23_listener($event) {
          return ctx.onPageChange($event);
        });
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
        \u0275\u0275control();
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx.loading() ? 18 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.templates().length === 0 && !ctx.loading() ? 20 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.templates());
        \u0275\u0275advance(2);
        \u0275\u0275property("length", ctx.totalElements)("pageSize", 12)("pageSizeOptions", \u0275\u0275pureFunction0(6, _c0));
      }
    }, dependencies: [MatTableModule, MatCardModule, MatCard, MatCardActions, MatCardContent, MatCardImage, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatInputModule, MatInput, MatFormField, MatLabel, MatSuffix, MatFormFieldModule, MatPaginatorModule, MatPaginator, MatTooltipModule, MatTooltip, MatProgressBarModule, MatProgressBar, MatChipsModule, MatChip, MatChipSet, MatDialogModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink], styles: ["\n.templates-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 16px;\n  padding: 16px;\n}\n.template-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.template-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);\n}\n.placeholder-img[_ngcontent-%COMP%] {\n  height: 140px;\n  background:\n    linear-gradient(\n      135deg,\n      #e8f5e9,\n      #c8e6c9);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.placeholder-img[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  color: #2E7D32;\n  opacity: 0.4;\n  width: 64px;\n  height: 64px;\n}\n.template-code[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #2E7D32;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n}\n.template-name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 500;\n  margin: 4px 0 8px;\n}\n.template-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-top: 8px;\n}\n/*# sourceMappingURL=templates.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TemplatesComponent, [{
    type: Component,
    args: [{ selector: "app-templates", standalone: true, imports: [
      MatTableModule,
      MatCardModule,
      MatButtonModule,
      MatIconModule,
      MatInputModule,
      MatFormFieldModule,
      MatPaginatorModule,
      MatTooltipModule,
      MatProgressBarModule,
      MatChipsModule,
      MatDialogModule,
      FormsModule,
      RouterLink
    ], template: `
    <div class="page-container">
      <mat-card class="content-card">
        <div class="card-header">
          <h2><mat-icon style="vertical-align:middle;margin-right:8px">description</mat-icon>Plantillas de Fabricaci\xF3n</h2>
          <div class="header-actions">
            <mat-form-field appearance="outline" style="width:240px" subscriptSizing="dynamic">
              <mat-label>Buscar plantilla</mat-label>
              <input matInput [(ngModel)]="searchText" (ngModelChange)="load()" placeholder="C\xF3digo o nombre...">
              <mat-icon matSuffix>search</mat-icon>
            </mat-form-field>
            <button mat-raised-button color="primary" (click)="newTemplate()">
              <mat-icon>add</mat-icon> Nueva Plantilla
            </button>
          </div>
        </div>

        @if (loading()) { <mat-progress-bar mode="indeterminate" /> }

        <div class="templates-grid">
          @if (templates().length === 0 && !loading()) {
            <div class="empty-state">
              <mat-icon>description</mat-icon>
              <p>No hay plantillas creadas</p>
              <small>Las plantillas definen los materiales necesarios para fabricar un modelo de puerta o moldura</small>
              <button mat-raised-button color="primary" style="margin-top:16px" (click)="newTemplate()">
                <mat-icon>add</mat-icon> Crear primera plantilla
              </button>
            </div>
          }

          @for (t of templates(); track t.id) {
            <mat-card class="template-card">
              @if (t.imageUrl) {
                <img mat-card-image [src]="t.imageUrl" alt="{{ t.name }}" style="height:140px;object-fit:cover">
              } @else {
                <div class="placeholder-img">
                  <mat-icon>door_front</mat-icon>
                </div>
              }
              <mat-card-content>
                <div class="template-code">{{ t.code }}</div>
                <div class="template-name">{{ t.name }}</div>
                @if (t.productName) {
                  <mat-chip-set><mat-chip style="font-size:0.7rem">{{ t.productName }}</mat-chip></mat-chip-set>
                }
                <div class="template-meta">
                  <mat-icon style="font-size:14px;color:rgba(0,0,0,0.5)">build</mat-icon>
                  <span class="text-muted" style="font-size:0.8rem">{{ t.materials?.length ?? 0 }} materiales</span>
                </div>
              </mat-card-content>
              <mat-card-actions>
                <button mat-button color="primary" [routerLink]="['/templates', t.id]">
                  <mat-icon>open_in_new</mat-icon> Abrir
                </button>
                <button mat-icon-button color="warn" (click)="delete(t)" matTooltip="Eliminar">
                  <mat-icon>delete</mat-icon>
                </button>
              </mat-card-actions>
            </mat-card>
          }
        </div>

        <mat-paginator [length]="totalElements" [pageSize]="12" [pageSizeOptions]="[12,24,48]"
                       (page)="onPageChange($event)" showFirstLastButtons />
      </mat-card>
    </div>
  `, styles: ["/* angular:styles/component:css;118535973eb8d54dbe3aa7ec7ee5d20be6cfba5d89ee51e88a009542f2054632;C:/Proyectos/moldtek/frontend/src/app/modules/templates/templates.component.ts */\n.templates-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 16px;\n  padding: 16px;\n}\n.template-card {\n  cursor: pointer;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.template-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);\n}\n.placeholder-img {\n  height: 140px;\n  background:\n    linear-gradient(\n      135deg,\n      #e8f5e9,\n      #c8e6c9);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.placeholder-img mat-icon {\n  font-size: 64px;\n  color: #2E7D32;\n  opacity: 0.4;\n  width: 64px;\n  height: 64px;\n}\n.template-code {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #2E7D32;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n}\n.template-name {\n  font-size: 1rem;\n  font-weight: 500;\n  margin: 4px 0 8px;\n}\n.template-meta {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-top: 8px;\n}\n/*# sourceMappingURL=templates.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TemplatesComponent, { className: "TemplatesComponent", filePath: "src/app/modules/templates/templates.component.ts", lineNumber: 106 });
})();
export {
  TemplatesComponent
};
//# debugId=3044651f-dc57-5364-9bcb-365a347b4eae
//# sourceMappingURL=chunk-JDVKAZP2.js.map
