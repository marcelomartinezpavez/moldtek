import {
  AuthService
} from "./chunk-KIOEOHFO.js";
import {
  RouterLink
} from "./chunk-Q2CMZJDU.js";
import {
  MatCard,
  MatCardActions,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle
} from "./chunk-4SX5R4K7.js";
import {
  ApiService
} from "./chunk-LVWMVW7I.js";
import {
  MatButton,
  MatButtonModule,
  MatIcon,
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
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-EHKUBBLL.js";

// src/app/modules/dashboard/dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.materialId;
function DashboardComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 3)(1, "mat-card-content")(2, "div", 8)(3, "mat-icon");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 9)(6, "div", 10);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 11);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", stat_r1.route);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", stat_r1.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stat_r1.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.label);
  }
}
function DashboardComponent_Conditional_9_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "span")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2.materialName);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2014 ", item_r2.branchName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", item_r2.quantity, " ", item_r2.materialUnit);
  }
}
function DashboardComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 4)(1, "mat-card-header")(2, "mat-icon", 12);
    \u0275\u0275text(3, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-card-title");
    \u0275\u0275text(5, "Stock Bajo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-card-subtitle");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "mat-card-content");
    \u0275\u0275repeaterCreate(9, DashboardComponent_Conditional_9_For_10_Template, 7, 4, "div", 13, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-card-actions")(12, "a", 14);
    \u0275\u0275text(13, "Ver todo el inventario");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r2.lowStockItems().length, " materiales por debajo del m\xEDnimo");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.lowStockItems().slice(0, 5));
  }
}
function DashboardComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 16)(1, "mat-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const action_r4 = ctx.$implicit;
    \u0275\u0275styleProp("background", action_r4.color);
    \u0275\u0275property("routerLink", action_r4.route);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(action_r4.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", action_r4.label, " ");
  }
}
var DashboardComponent = class _DashboardComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.api = inject(ApiService);
    this.lowStockItems = signal(
      [],
      ...ngDevMode ? [{ debugName: "lowStockItems" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.stats = [
      { label: "Materiales", value: "\u2014", icon: "inventory_2", color: "#1976D2", route: "/materials" },
      { label: "Productos", value: "\u2014", icon: "door_front", color: "#2E7D32", route: "/products" },
      { label: "Plantillas", value: "\u2014", icon: "description", color: "#7B1FA2", route: "/templates" },
      { label: "Stock Bajo", value: "0", icon: "warning", color: "#E64A19", route: "/inventory" }
    ];
    this.quickActions = [
      { label: "Nuevo Material", icon: "add", route: "/materials", color: "#1976D2" },
      { label: "Nueva Plantilla", icon: "add", route: "/templates", color: "#7B1FA2" },
      { label: "Ver Inventario", icon: "warehouse", route: "/inventory", color: "#2E7D32" }
    ];
  }
  ngOnInit() {
    this.api.getMaterials(void 0, void 0, 0, 1).subscribe({
      next: (r) => {
        this.stats[0].value = r.totalElements.toString();
      },
      error: () => {
        this.stats[0].value = "0";
      }
    });
    this.api.getProducts(void 0, void 0, 0, 1).subscribe({
      next: (r) => {
        this.stats[1].value = r.totalElements.toString();
      },
      error: () => {
        this.stats[1].value = "0";
      }
    });
    this.api.getTemplates(void 0, void 0, 0, 1).subscribe({
      next: (r) => {
        this.stats[2].value = r.totalElements.toString();
      },
      error: () => {
        this.stats[2].value = "0";
      }
    });
    this.api.getLowStock().subscribe({
      next: (items) => {
        this.lowStockItems.set(items);
        this.stats[3].value = items.length.toString();
      },
      error: () => {
        this.stats[3].value = "0";
      }
    });
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 16, vars: 3, consts: [[1, "page-container"], [1, "welcome-banner"], [1, "stats-grid"], [1, "stat-card", 3, "routerLink"], [1, "alert-card"], [1, "quick-actions"], [1, "action-grid"], ["mat-raised-button", "", 2, "color", "white", 3, "routerLink", "background"], [1, "stat-icon"], [1, "stat-info"], [1, "stat-value"], [1, "stat-label"], ["mat-card-avatar", "", 2, "color", "#f44336"], [1, "low-stock-row"], ["mat-button", "", "color", "warn", "routerLink", "/inventory"], [1, "low-stock"], ["mat-raised-button", "", 2, "color", "white", 3, "routerLink"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p");
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 2);
        \u0275\u0275repeaterCreate(7, DashboardComponent_For_8_Template, 10, 6, "mat-card", 3, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(9, DashboardComponent_Conditional_9_Template, 14, 1, "mat-card", 4);
        \u0275\u0275elementStart(10, "div", 5)(11, "h3");
        \u0275\u0275text(12, "Accesos r\xE1pidos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 6);
        \u0275\u0275repeaterCreate(14, DashboardComponent_For_15_Template, 4, 5, "a", 7, _forTrack0);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("Bienvenido, ", ctx.auth.currentUser()?.fullName);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", ctx.auth.currentUser()?.companyName, " \u2014 Sistema de Control de Inventario y Procesos");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.stats);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.lowStockItems().length > 0 ? 9 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.quickActions);
      }
    }, dependencies: [MatCardModule, MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle, MatIconModule, MatIcon, MatButtonModule, MatButton, RouterLink], styles: ["\n.welcome-banner[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.welcome-banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.welcome-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: rgba(0, 0, 0, 0.6);\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\nmat-card-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 20px !important;\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.stat-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  line-height: 1;\n}\n.stat-label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.85rem;\n  margin-top: 4px;\n}\n.alert-card[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  border-left: 4px solid #f44336;\n}\n.low-stock-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.06);\n  font-size: 0.9rem;\n}\n.quick-actions[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  font-weight: 500;\n}\n.action-grid[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [MatCardModule, MatIconModule, MatButtonModule, RouterLink], template: `
    <div class="page-container">
      <div class="welcome-banner">
        <h2>Bienvenido, {{ auth.currentUser()?.fullName }}</h2>
        <p>{{ auth.currentUser()?.companyName }} \u2014 Sistema de Control de Inventario y Procesos</p>
      </div>

      <div class="stats-grid">
        @for (stat of stats; track stat.label) {
          <mat-card class="stat-card" [routerLink]="stat.route">
            <mat-card-content>
              <div class="stat-icon" [style.background]="stat.color">
                <mat-icon>{{ stat.icon }}</mat-icon>
              </div>
              <div class="stat-info">
                <div class="stat-value">{{ stat.value }}</div>
                <div class="stat-label">{{ stat.label }}</div>
              </div>
            </mat-card-content>
          </mat-card>
        }
      </div>

      @if (lowStockItems().length > 0) {
        <mat-card class="alert-card">
          <mat-card-header>
            <mat-icon mat-card-avatar style="color:#f44336">warning</mat-icon>
            <mat-card-title>Stock Bajo</mat-card-title>
            <mat-card-subtitle>{{ lowStockItems().length }} materiales por debajo del m\xEDnimo</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            @for (item of lowStockItems().slice(0, 5); track item.materialId) {
              <div class="low-stock-row">
                <span><strong>{{ item.materialName }}</strong> \u2014 {{ item.branchName }}</span>
                <span class="low-stock">{{ item.quantity }} {{ item.materialUnit }}</span>
              </div>
            }
          </mat-card-content>
          <mat-card-actions>
            <a mat-button color="warn" routerLink="/inventory">Ver todo el inventario</a>
          </mat-card-actions>
        </mat-card>
      }

      <div class="quick-actions">
        <h3>Accesos r\xE1pidos</h3>
        <div class="action-grid">
          @for (action of quickActions; track action.label) {
            <a mat-raised-button [routerLink]="action.route" [style.background]="action.color" style="color:white">
              <mat-icon>{{ action.icon }}</mat-icon>
              {{ action.label }}
            </a>
          }
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;3e226ab7caf9fcedf2800848f5f116d28755d14f151ee50421ad12fe352a86f6;C:/Proyectos/moldtek/frontend/src/app/modules/dashboard/dashboard.component.ts */\n.welcome-banner {\n  margin-bottom: 24px;\n}\n.welcome-banner h2 {\n  margin: 0 0 4px;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.welcome-banner p {\n  margin: 0;\n  color: rgba(0, 0, 0, 0.6);\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.stat-card {\n  cursor: pointer;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.stat-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\nmat-card-content {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 20px !important;\n}\n.stat-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.stat-icon mat-icon {\n  color: white;\n}\n.stat-value {\n  font-size: 1.75rem;\n  font-weight: 700;\n  line-height: 1;\n}\n.stat-label {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.85rem;\n  margin-top: 4px;\n}\n.alert-card {\n  margin-bottom: 24px;\n  border-left: 4px solid #f44336;\n}\n.low-stock-row {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.06);\n  font-size: 0.9rem;\n}\n.quick-actions h3 {\n  margin: 0 0 12px;\n  font-weight: 500;\n}\n.action-grid {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=dashboard.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/modules/dashboard/dashboard.component.ts", lineNumber: 88 });
})();
export {
  DashboardComponent
};
//# debugId=c76afec0-22ce-5b04-8397-dc53dc3c4bbc
//# sourceMappingURL=chunk-B4E6VS4F.js.map
