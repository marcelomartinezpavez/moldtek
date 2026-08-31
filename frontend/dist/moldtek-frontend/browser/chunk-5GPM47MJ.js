import {
  MatDividerModule
} from "./chunk-PXVMVJL6.js";
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
  MatCardActions,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardTitle
} from "./chunk-4SX5R4K7.js";
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
  NotificationService
} from "./chunk-2RXZUKY7.js";
import "./chunk-ERVSOKK3.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-EHKUBBLL.js";

// src/app/modules/company/company.component.ts
function CompanyComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 4);
  }
}
function CompanyComponent_th_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Nombre");
    \u0275\u0275elementEnd();
  }
}
function CompanyComponent_td_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "br");
    \u0275\u0275elementStart(4, "small", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r1.address);
  }
}
function CompanyComponent_th_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Contacto");
    \u0275\u0275elementEnd();
  }
}
function CompanyComponent_td_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "br");
    \u0275\u0275elementStart(4, "small", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r2.phone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r2.email);
  }
}
function CompanyComponent_th_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 31);
  }
}
function CompanyComponent_td_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 32)(1, "button", 34);
    \u0275\u0275listener("click", function CompanyComponent_td_63_Template_button_click_1_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.openBranchForm(row_r4));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 35);
    \u0275\u0275listener("click", function CompanyComponent_td_63_Template_button_click_4_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.deleteBranch(row_r4));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd()()();
  }
}
function CompanyComponent_tr_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 36);
  }
}
function CompanyComponent_tr_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 37);
  }
}
function CompanyComponent_tr_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 38)(1, "td", 39)(2, "div", 40)(3, "mat-icon");
    \u0275\u0275text(4, "store");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "No hay sucursales");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 3);
  }
}
var BranchFormComponent = class _BranchFormComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.api = inject(ApiService);
    this.notify = inject(NotificationService);
    this.dialogRef = inject(MatDialogRef);
    this.data = inject(MAT_DIALOG_DATA);
    this.saving = false;
    this.form = this.fb.group({
      name: ["", Validators.required],
      address: [""],
      phone: [""],
      email: [""],
      description: [""]
    });
  }
  ngOnInit() {
    if (this.data.branch)
      this.form.patchValue(this.data.branch);
  }
  save() {
    if (this.form.invalid)
      return;
    this.saving = true;
    const obs = this.data.branch ? this.api.updateBranch(this.data.branch.id, this.form.value) : this.api.createBranch(this.form.value);
    obs.subscribe({
      next: () => {
        this.notify.success(this.data.branch ? "Sucursal actualizada" : "Sucursal creada");
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.notify.error(err.message);
        this.saving = false;
      }
    });
  }
  static {
    this.\u0275fac = function BranchFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BranchFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BranchFormComponent, selectors: [["app-branch-form"]], decls: 36, vars: 5, consts: [["mat-dialog-title", ""], [2, "display", "flex", "flex-direction", "column", "gap", "0", "min-width", "480px", 3, "formGroup"], ["appearance", "outline"], ["matInput", "", "formControlName", "name", "placeholder", "Ej: Sucursal Concepci\xF3n"], ["matInput", "", "formControlName", "address"], [2, "display", "flex", "gap", "12px"], ["appearance", "outline", 2, "flex", "1"], ["matInput", "", "formControlName", "phone"], ["matInput", "", "type", "email", "formControlName", "email"], ["matInput", "", "formControlName", "description", "rows", "2"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"]], template: function BranchFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 0)(1, "mat-icon");
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "mat-dialog-content")(5, "form", 1)(6, "mat-form-field", 2)(7, "mat-label");
        \u0275\u0275text(8, "Nombre *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(9, "input", 3);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(10, "mat-error");
        \u0275\u0275text(11, "Requerido");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "mat-form-field", 2)(13, "mat-label");
        \u0275\u0275text(14, "Direcci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275element(15, "input", 4);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 5)(17, "mat-form-field", 6)(18, "mat-label");
        \u0275\u0275text(19, "Tel\xE9fono");
        \u0275\u0275elementEnd();
        \u0275\u0275element(20, "input", 7);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "mat-form-field", 6)(22, "mat-label");
        \u0275\u0275text(23, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(24, "input", 8);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "mat-form-field", 2)(26, "mat-label");
        \u0275\u0275text(27, "Descripci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275element(28, "textarea", 9);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "mat-dialog-actions", 10)(30, "button", 11);
        \u0275\u0275text(31, "Cancelar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "button", 12);
        \u0275\u0275listener("click", function BranchFormComponent_Template_button_click_32_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(33, "mat-icon");
        \u0275\u0275text(34, "save");
        \u0275\u0275elementEnd();
        \u0275\u0275text(35);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.data.branch ? "edit" : "add_business");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.data.branch ? "Editar Sucursal" : "Nueva Sucursal", " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(4);
        \u0275\u0275control();
        \u0275\u0275advance(6);
        \u0275\u0275control();
        \u0275\u0275advance(5);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.form.invalid || ctx.saving);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.saving ? "Guardando..." : "Guardar", " ");
      }
    }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatDialogModule, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent, MatFormFieldModule, MatFormField, MatLabel, MatError, MatInputModule, MatInput, MatButtonModule, MatButton, MatIconModule, MatIcon], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BranchFormComponent, [{
    type: Component,
    args: [{
      selector: "app-branch-form",
      standalone: true,
      imports: [ReactiveFormsModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
      template: `
    <h2 mat-dialog-title>
      <mat-icon>{{ data.branch ? 'edit' : 'add_business' }}</mat-icon>
      {{ data.branch ? 'Editar Sucursal' : 'Nueva Sucursal' }}
    </h2>
    <mat-dialog-content>
      <form [formGroup]="form" style="display:flex;flex-direction:column;gap:0;min-width:480px">
        <mat-form-field appearance="outline">
          <mat-label>Nombre *</mat-label>
          <input matInput formControlName="name" placeholder="Ej: Sucursal Concepci\xF3n">
          <mat-error>Requerido</mat-error>
        </mat-form-field>
        <mat-form-field appearance="outline">
          <mat-label>Direcci\xF3n</mat-label>
          <input matInput formControlName="address">
        </mat-form-field>
        <div style="display:flex;gap:12px">
          <mat-form-field appearance="outline" style="flex:1">
            <mat-label>Tel\xE9fono</mat-label>
            <input matInput formControlName="phone">
          </mat-form-field>
          <mat-form-field appearance="outline" style="flex:1">
            <mat-label>Email</mat-label>
            <input matInput type="email" formControlName="email">
          </mat-form-field>
        </div>
        <mat-form-field appearance="outline">
          <mat-label>Descripci\xF3n</mat-label>
          <textarea matInput formControlName="description" rows="2"></textarea>
        </mat-form-field>
      </form>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancelar</button>
      <button mat-raised-button color="primary" (click)="save()" [disabled]="form.invalid || saving">
        <mat-icon>save</mat-icon> {{ saving ? 'Guardando...' : 'Guardar' }}
      </button>
    </mat-dialog-actions>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BranchFormComponent, { className: "BranchFormComponent", filePath: "src/app/modules/company/company.component.ts", lineNumber: 61 });
})();
var CompanyComponent = class _CompanyComponent {
  constructor() {
    this.api = inject(ApiService);
    this.fb = inject(FormBuilder);
    this.dialog = inject(MatDialog);
    this.notify = inject(NotificationService);
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.savingCompany = signal(
      false,
      ...ngDevMode ? [{ debugName: "savingCompany" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.branchColumns = ["name", "contact", "actions"];
    this.branchSource = new MatTableDataSource([]);
    this.companyForm = this.fb.group({
      name: ["", Validators.required],
      rut: [{ value: "", disabled: true }],
      address: [""],
      phone: [""],
      email: ["", Validators.email],
      website: [""]
    });
  }
  ngOnInit() {
    this.loading.set(true);
    this.api.getCompany().subscribe({
      next: (c) => {
        this.companyForm.patchValue(c);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
    this.loadBranches();
  }
  loadBranches() {
    this.api.getBranches().subscribe((branches) => this.branchSource.data = branches);
  }
  saveCompany() {
    if (this.companyForm.invalid)
      return;
    this.savingCompany.set(true);
    this.api.updateCompany(this.companyForm.getRawValue()).subscribe({
      next: () => {
        this.notify.success("Empresa actualizada");
        this.savingCompany.set(false);
      },
      error: (err) => {
        this.notify.error(err.message);
        this.savingCompany.set(false);
      }
    });
  }
  openBranchForm(branch) {
    const ref = this.dialog.open(BranchFormComponent, { width: "520px", data: { branch } });
    ref.afterClosed().subscribe((result) => {
      if (result)
        this.loadBranches();
    });
  }
  deleteBranch(branch) {
    if (!confirm(`\xBFEliminar sucursal "${branch.name}"?`))
      return;
    this.api.deleteBranch(branch.id).subscribe({
      next: () => {
        this.notify.success("Sucursal eliminada");
        this.loadBranches();
      },
      error: (err) => this.notify.error(err.message)
    });
  }
  static {
    this.\u0275fac = function CompanyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CompanyComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompanyComponent, selectors: [["app-company"]], decls: 67, vars: 8, consts: [[1, "page-container"], [2, "display", "grid", "grid-template-columns", "1fr 1fr", "gap", "24px", "align-items", "start"], [1, "content-card"], ["mat-card-avatar", "", 2, "color", "#2E7D32"], ["mode", "indeterminate"], [2, "display", "flex", "flex-direction", "column", "gap", "4px", "margin-top", "8px", 3, "formGroup"], [2, "display", "flex", "gap", "12px"], ["appearance", "outline", 2, "flex", "2"], ["matInput", "", "formControlName", "name"], ["appearance", "outline", 2, "flex", "1"], ["matInput", "", "formControlName", "rut", 3, "readonly"], ["appearance", "outline"], ["matInput", "", "formControlName", "address"], ["matInput", "", "formControlName", "phone"], ["matInput", "", "type", "email", "formControlName", "email"], ["matInput", "", "formControlName", "website"], ["align", "end"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], [1, "card-header", 2, "padding", "16px 16px 8px"], [2, "vertical-align", "middle", "margin-right", "8px"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "table-wrapper"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "contact"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "text-muted"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Editar", 3, "click"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Eliminar", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], [1, "mat-cell"], [1, "empty-state", 2, "padding", "24px"]], template: function CompanyComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "mat-card", 2)(3, "mat-card-header")(4, "mat-icon", 3);
        \u0275\u0275text(5, "business");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "mat-card-title");
        \u0275\u0275text(7, "Informaci\xF3n de la Empresa");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "mat-card-content");
        \u0275\u0275conditionalCreate(9, CompanyComponent_Conditional_9_Template, 1, 0, "mat-progress-bar", 4);
        \u0275\u0275elementStart(10, "form", 5)(11, "div", 6)(12, "mat-form-field", 7)(13, "mat-label");
        \u0275\u0275text(14, "Nombre *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(15, "input", 8);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "mat-form-field", 9)(17, "mat-label");
        \u0275\u0275text(18, "RUT");
        \u0275\u0275elementEnd();
        \u0275\u0275element(19, "input", 10);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "mat-form-field", 11)(21, "mat-label");
        \u0275\u0275text(22, "Direcci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275element(23, "input", 12);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 6)(25, "mat-form-field", 9)(26, "mat-label");
        \u0275\u0275text(27, "Tel\xE9fono");
        \u0275\u0275elementEnd();
        \u0275\u0275element(28, "input", 13);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "mat-form-field", 9)(30, "mat-label");
        \u0275\u0275text(31, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(32, "input", 14);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "mat-form-field", 11)(34, "mat-label");
        \u0275\u0275text(35, "Sitio web");
        \u0275\u0275elementEnd();
        \u0275\u0275element(36, "input", 15);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "mat-card-actions", 16)(38, "button", 17);
        \u0275\u0275listener("click", function CompanyComponent_Template_button_click_38_listener() {
          return ctx.saveCompany();
        });
        \u0275\u0275elementStart(39, "mat-icon");
        \u0275\u0275text(40, "save");
        \u0275\u0275elementEnd();
        \u0275\u0275text(41);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(42, "mat-card", 2)(43, "div", 18)(44, "mat-card-title")(45, "mat-icon", 19);
        \u0275\u0275text(46, "store");
        \u0275\u0275elementEnd();
        \u0275\u0275text(47, "Sucursales");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "button", 20);
        \u0275\u0275listener("click", function CompanyComponent_Template_button_click_48_listener() {
          return ctx.openBranchForm();
        });
        \u0275\u0275elementStart(49, "mat-icon");
        \u0275\u0275text(50, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(51, " Nueva ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "mat-card-content")(53, "div", 21)(54, "table", 22);
        \u0275\u0275elementContainerStart(55, 23);
        \u0275\u0275template(56, CompanyComponent_th_56_Template, 2, 0, "th", 24)(57, CompanyComponent_td_57_Template, 6, 2, "td", 25);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(58, 26);
        \u0275\u0275template(59, CompanyComponent_th_59_Template, 2, 0, "th", 24)(60, CompanyComponent_td_60_Template, 6, 2, "td", 25);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(61, 27);
        \u0275\u0275template(62, CompanyComponent_th_62_Template, 1, 0, "th", 24)(63, CompanyComponent_td_63_Template, 7, 0, "td", 25);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(64, CompanyComponent_tr_64_Template, 1, 0, "tr", 28)(65, CompanyComponent_tr_65_Template, 1, 0, "tr", 29)(66, CompanyComponent_tr_66_Template, 7, 1, "tr", 30);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275conditional(ctx.loading() ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.companyForm);
        \u0275\u0275advance(5);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275property("readonly", true);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275control();
        \u0275\u0275advance(5);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.companyForm.invalid || ctx.savingCompany());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.savingCompany() ? "Guardando..." : "Guardar cambios", " ");
        \u0275\u0275advance(13);
        \u0275\u0275property("dataSource", ctx.branchSource);
        \u0275\u0275advance(10);
        \u0275\u0275property("matHeaderRowDef", ctx.branchColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.branchColumns);
      }
    }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatCardModule, MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardHeader, MatCardTitle, MatFormFieldModule, MatFormField, MatLabel, MatInputModule, MatInput, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatNoDataRow, MatDividerModule, MatProgressBarModule, MatProgressBar, MatTooltipModule, MatTooltip, MatDialogModule], styles: ['\n@media (max-width: 900px) {\n  div[style*="grid-template-columns:1fr 1fr"][_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n}\n/*# sourceMappingURL=company.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompanyComponent, [{
    type: Component,
    args: [{ selector: "app-company", standalone: true, imports: [
      ReactiveFormsModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatIconModule,
      MatTableModule,
      MatDividerModule,
      MatProgressBarModule,
      MatTooltipModule,
      MatDialogModule
    ], template: `
    <div class="page-container">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:start">

        <!-- Company info card -->
        <mat-card class="content-card">
          <mat-card-header>
            <mat-icon mat-card-avatar style="color:#2E7D32">business</mat-icon>
            <mat-card-title>Informaci\xF3n de la Empresa</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            @if (loading()) { <mat-progress-bar mode="indeterminate" /> }
            <form [formGroup]="companyForm" style="display:flex;flex-direction:column;gap:4px;margin-top:8px">
              <div style="display:flex;gap:12px">
                <mat-form-field appearance="outline" style="flex:2">
                  <mat-label>Nombre *</mat-label>
                  <input matInput formControlName="name">
                </mat-form-field>
                <mat-form-field appearance="outline" style="flex:1">
                  <mat-label>RUT</mat-label>
                  <input matInput formControlName="rut" [readonly]="true">
                </mat-form-field>
              </div>
              <mat-form-field appearance="outline">
                <mat-label>Direcci\xF3n</mat-label>
                <input matInput formControlName="address">
              </mat-form-field>
              <div style="display:flex;gap:12px">
                <mat-form-field appearance="outline" style="flex:1">
                  <mat-label>Tel\xE9fono</mat-label>
                  <input matInput formControlName="phone">
                </mat-form-field>
                <mat-form-field appearance="outline" style="flex:1">
                  <mat-label>Email</mat-label>
                  <input matInput type="email" formControlName="email">
                </mat-form-field>
              </div>
              <mat-form-field appearance="outline">
                <mat-label>Sitio web</mat-label>
                <input matInput formControlName="website">
              </mat-form-field>
            </form>
          </mat-card-content>
          <mat-card-actions align="end">
            <button mat-raised-button color="primary" (click)="saveCompany()" [disabled]="companyForm.invalid || savingCompany()">
              <mat-icon>save</mat-icon> {{ savingCompany() ? 'Guardando...' : 'Guardar cambios' }}
            </button>
          </mat-card-actions>
        </mat-card>

        <!-- Branches card -->
        <mat-card class="content-card">
          <div class="card-header" style="padding:16px 16px 8px">
            <mat-card-title><mat-icon style="vertical-align:middle;margin-right:8px">store</mat-icon>Sucursales</mat-card-title>
            <button mat-raised-button color="primary" (click)="openBranchForm()">
              <mat-icon>add</mat-icon> Nueva
            </button>
          </div>
          <mat-card-content>
            <div class="table-wrapper">
              <table mat-table [dataSource]="branchSource">
                <ng-container matColumnDef="name">
                  <th mat-header-cell *matHeaderCellDef>Nombre</th>
                  <td mat-cell *matCellDef="let row">
                    <strong>{{ row.name }}</strong><br>
                    <small class="text-muted">{{ row.address }}</small>
                  </td>
                </ng-container>
                <ng-container matColumnDef="contact">
                  <th mat-header-cell *matHeaderCellDef>Contacto</th>
                  <td mat-cell *matCellDef="let row">
                    <small>{{ row.phone }}</small><br>
                    <small class="text-muted">{{ row.email }}</small>
                  </td>
                </ng-container>
                <ng-container matColumnDef="actions">
                  <th mat-header-cell *matHeaderCellDef></th>
                  <td mat-cell *matCellDef="let row">
                    <button mat-icon-button color="primary" (click)="openBranchForm(row)" matTooltip="Editar">
                      <mat-icon>edit</mat-icon>
                    </button>
                    <button mat-icon-button color="warn" (click)="deleteBranch(row)" matTooltip="Eliminar">
                      <mat-icon>delete</mat-icon>
                    </button>
                  </td>
                </ng-container>
                <tr mat-header-row *matHeaderRowDef="branchColumns"></tr>
                <tr mat-row *matRowDef="let row; columns: branchColumns;"></tr>
                <tr class="mat-row" *matNoDataRow>
                  <td class="mat-cell" [attr.colspan]="3">
                    <div class="empty-state" style="padding:24px">
                      <mat-icon>store</mat-icon><p>No hay sucursales</p>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `, styles: ['/* angular:styles/component:css;21e8237c82ce9d762f513b2c9f68f777be8b4eca042dd6aaad24b2be24b8fcd0;C:/Proyectos/moldtek/frontend/src/app/modules/company/company.component.ts */\n@media (max-width: 900px) {\n  div[style*="grid-template-columns:1fr 1fr"] {\n    grid-template-columns: 1fr !important;\n  }\n}\n/*# sourceMappingURL=company.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompanyComponent, { className: "CompanyComponent", filePath: "src/app/modules/company/company.component.ts", lineNumber: 205 });
})();
export {
  BranchFormComponent,
  CompanyComponent
};
//# debugId=afc39c03-6e9d-584c-903b-15a63cea8c5d
//# sourceMappingURL=chunk-5GPM47MJ.js.map
