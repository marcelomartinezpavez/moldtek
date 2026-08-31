import {
  AuthService
} from "./chunk-KIOEOHFO.js";
import "./chunk-Q2CMZJDU.js";
import {
  MatDividerModule
} from "./chunk-PXVMVJL6.js";
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
import "./chunk-T4USGM5V.js";
import "./chunk-ERVSOKK3.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-EHKUBBLL.js";

// src/app/modules/users/users.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.value;
function UserFormComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "mat-form-field", 3)(2, "mat-label");
    \u0275\u0275text(3, "Nombre de usuario *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 15);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(5, "mat-error");
    \u0275\u0275text(6, "Requerido");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-form-field", 3)(8, "mat-label");
    \u0275\u0275text(9, "Contrase\xF1a *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 16);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(11, "mat-error");
    \u0275\u0275text(12, "M\xEDnimo 6 caracteres");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275control();
  }
}
function UserFormComponent_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r1 = ctx.$implicit;
    \u0275\u0275property("value", b_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r1.name);
  }
}
function UserFormComponent_For_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    \u0275\u0275property("value", r_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r2.label);
  }
}
function UserFormComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 6)(1, "mat-label");
    \u0275\u0275text(2, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-select", 17)(4, "mat-option", 10);
    \u0275\u0275text(5, "Activo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-option", 10);
    \u0275\u0275text(7, "Inactivo");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("value", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", false);
  }
}
function UsersComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 6);
  }
}
function UsersComponent_th_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 20);
    \u0275\u0275text(1, "Nombre");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_td_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 21)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "br");
    \u0275\u0275elementStart(4, "small", 22);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.fullName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("@", row_r1.username);
  }
}
function UsersComponent_th_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 20);
    \u0275\u0275text(1, "Email");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_td_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r2.email);
  }
}
function UsersComponent_th_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 20);
    \u0275\u0275text(1, "Sucursal");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_td_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r3.branchName || "Todas");
  }
}
function UsersComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 20);
    \u0275\u0275text(1, "Roles");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_td_26_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-chip", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background", ctx_r4.roleColor(r_r4));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.roleLabel(r_r4), " ");
  }
}
function UsersComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 21)(1, "mat-chip-set");
    \u0275\u0275repeaterCreate(2, UsersComponent_td_26_For_3_Template, 2, 3, "mat-chip", 23, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275repeater(row_r6.roles);
  }
}
function UsersComponent_th_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 20);
    \u0275\u0275text(1, "Estado");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_td_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 21)(1, "span")(2, "mat-icon", 25);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", row_r7.active ? "#2E7D32" : "#f44336");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.active ? "check_circle" : "cancel");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r7.active ? "Activo" : "Inactivo", " ");
  }
}
function UsersComponent_th_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 20);
    \u0275\u0275text(1, "Acciones");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_td_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 21)(1, "button", 26);
    \u0275\u0275listener("click", function UsersComponent_td_32_Template_button_click_1_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.openForm(row_r9));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 27);
    \u0275\u0275listener("click", function UsersComponent_td_32_Template_button_click_4_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.deactivate(row_r9));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "person_off");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", row_r9.username === ctx_r4.currentUsername);
  }
}
function UsersComponent_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 28);
  }
}
function UsersComponent_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 29);
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    \u0275\u0275styleProp("opacity", row_r10.active ? 1 : 0.5);
  }
}
function UsersComponent_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 30)(1, "td", 31)(2, "div", 32)(3, "mat-icon");
    \u0275\u0275text(4, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "No hay usuarios");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r4.columns.length);
  }
}
var ROLES = [
  { value: "ROLE_ADMIN", label: "Administrador" },
  { value: "ROLE_MANAGER", label: "Gerente" },
  { value: "ROLE_WAREHOUSE", label: "Bodega" },
  { value: "ROLE_SALES", label: "Ventas" },
  { value: "ROLE_VIEWER", label: "Solo lectura" }
];
var UserFormComponent = class _UserFormComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.api = inject(ApiService);
    this.notify = inject(NotificationService);
    this.dialogRef = inject(MatDialogRef);
    this.data = inject(MAT_DIALOG_DATA);
    this.roles = ROLES;
    this.saving = false;
    this.form = this.fb.group({
      username: ["", this.data.user ? [] : [Validators.required]],
      password: ["", this.data.user ? [] : [Validators.required, Validators.minLength(6)]],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: [""],
      branchId: [null],
      roles: [[], Validators.required],
      active: [true]
    });
  }
  ngOnInit() {
    if (this.data.user) {
      const u = this.data.user;
      this.form.patchValue({ firstName: u.firstName, lastName: u.lastName, email: u.email, phone: u.phone, branchId: u.branchId, roles: u.roles, active: u.active });
    }
  }
  save() {
    if (this.form.invalid)
      return;
    this.saving = true;
    const v = this.form.value;
    if (this.data.user) {
      const req = { email: v.email, firstName: v.firstName, lastName: v.lastName, phone: v.phone || void 0, branchId: v.branchId, roles: v.roles, active: v.active };
      this.api.updateUser(this.data.user.id, req).subscribe({
        next: () => {
          this.notify.success("Usuario actualizado");
          this.dialogRef.close(true);
        },
        error: (err) => {
          this.notify.error(err.message);
          this.saving = false;
        }
      });
    } else {
      const req = { username: v.username, email: v.email, password: v.password, firstName: v.firstName, lastName: v.lastName, phone: v.phone || void 0, branchId: v.branchId, roles: v.roles };
      this.api.createUser(req).subscribe({
        next: () => {
          this.notify.success("Usuario creado");
          this.dialogRef.close(true);
        },
        error: (err) => {
          this.notify.error(err.message);
          this.saving = false;
        }
      });
    }
  }
  static {
    this.\u0275fac = function UserFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserFormComponent, selectors: [["app-user-form"]], decls: 53, vars: 8, consts: [["mat-dialog-title", ""], [2, "display", "flex", "flex-direction", "column", "gap", "0", "min-width", "500px", 3, "formGroup"], [2, "display", "flex", "gap", "12px"], ["appearance", "outline", 2, "flex", "1"], ["matInput", "", "formControlName", "firstName"], ["matInput", "", "formControlName", "lastName"], ["appearance", "outline"], ["matInput", "", "type", "email", "formControlName", "email"], ["matInput", "", "formControlName", "phone"], ["formControlName", "branchId"], [3, "value"], ["formControlName", "roles", "multiple", ""], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], ["matInput", "", "formControlName", "username"], ["matInput", "", "type", "password", "formControlName", "password"], ["formControlName", "active"]], template: function UserFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 0)(1, "mat-icon");
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "mat-dialog-content")(5, "form", 1);
        \u0275\u0275conditionalCreate(6, UserFormComponent_Conditional_6_Template, 13, 0, "div", 2);
        \u0275\u0275elementStart(7, "div", 2)(8, "mat-form-field", 3)(9, "mat-label");
        \u0275\u0275text(10, "Nombre *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(11, "input", 4);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(12, "mat-error");
        \u0275\u0275text(13, "Requerido");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "mat-form-field", 3)(15, "mat-label");
        \u0275\u0275text(16, "Apellido *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(17, "input", 5);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(18, "mat-error");
        \u0275\u0275text(19, "Requerido");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "mat-form-field", 6)(21, "mat-label");
        \u0275\u0275text(22, "Email *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(23, "input", 7);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(24, "mat-error");
        \u0275\u0275text(25, "Email inv\xE1lido");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "mat-form-field", 6)(27, "mat-label");
        \u0275\u0275text(28, "Tel\xE9fono");
        \u0275\u0275elementEnd();
        \u0275\u0275element(29, "input", 8);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 2)(31, "mat-form-field", 3)(32, "mat-label");
        \u0275\u0275text(33, "Sucursal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "mat-select", 9)(35, "mat-option", 10);
        \u0275\u0275text(36, "Todas las sucursales");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(37, UserFormComponent_For_38_Template, 2, 2, "mat-option", 10, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "mat-form-field", 3)(40, "mat-label");
        \u0275\u0275text(41, "Roles *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "mat-select", 11);
        \u0275\u0275repeaterCreate(43, UserFormComponent_For_44_Template, 2, 2, "mat-option", 10, _forTrack1);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(45, UserFormComponent_Conditional_45_Template, 8, 2, "mat-form-field", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "mat-dialog-actions", 12)(47, "button", 13);
        \u0275\u0275text(48, "Cancelar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "button", 14);
        \u0275\u0275listener("click", function UserFormComponent_Template_button_click_49_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(50, "mat-icon");
        \u0275\u0275text(51, "save");
        \u0275\u0275elementEnd();
        \u0275\u0275text(52);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.data.user ? "edit" : "person_add");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.data.user ? "Editar Usuario" : "Nuevo Usuario", " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.data.user ? 6 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275control();
        \u0275\u0275advance(6);
        \u0275\u0275control();
        \u0275\u0275advance(6);
        \u0275\u0275control();
        \u0275\u0275advance(6);
        \u0275\u0275control();
        \u0275\u0275advance(5);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("value", null);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.data.branches);
        \u0275\u0275advance(5);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.roles);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.data.user ? 45 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.form.invalid || ctx.saving);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.saving ? "Guardando..." : "Guardar", " ");
      }
    }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatDialogModule, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent, MatFormFieldModule, MatFormField, MatLabel, MatError, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, MatButtonModule, MatButton, MatIconModule, MatIcon, MatDividerModule], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserFormComponent, [{
    type: Component,
    args: [{
      selector: "app-user-form",
      standalone: true,
      imports: [
        ReactiveFormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule
      ],
      template: `
    <h2 mat-dialog-title>
      <mat-icon>{{ data.user ? 'edit' : 'person_add' }}</mat-icon>
      {{ data.user ? 'Editar Usuario' : 'Nuevo Usuario' }}
    </h2>
    <mat-dialog-content>
      <form [formGroup]="form" style="display:flex;flex-direction:column;gap:0;min-width:500px">
        @if (!data.user) {
          <div style="display:flex;gap:12px">
            <mat-form-field appearance="outline" style="flex:1">
              <mat-label>Nombre de usuario *</mat-label>
              <input matInput formControlName="username">
              <mat-error>Requerido</mat-error>
            </mat-form-field>
            <mat-form-field appearance="outline" style="flex:1">
              <mat-label>Contrase\xF1a *</mat-label>
              <input matInput type="password" formControlName="password">
              <mat-error>M\xEDnimo 6 caracteres</mat-error>
            </mat-form-field>
          </div>
        }
        <div style="display:flex;gap:12px">
          <mat-form-field appearance="outline" style="flex:1">
            <mat-label>Nombre *</mat-label>
            <input matInput formControlName="firstName">
            <mat-error>Requerido</mat-error>
          </mat-form-field>
          <mat-form-field appearance="outline" style="flex:1">
            <mat-label>Apellido *</mat-label>
            <input matInput formControlName="lastName">
            <mat-error>Requerido</mat-error>
          </mat-form-field>
        </div>
        <mat-form-field appearance="outline">
          <mat-label>Email *</mat-label>
          <input matInput type="email" formControlName="email">
          <mat-error>Email inv\xE1lido</mat-error>
        </mat-form-field>
        <mat-form-field appearance="outline">
          <mat-label>Tel\xE9fono</mat-label>
          <input matInput formControlName="phone">
        </mat-form-field>
        <div style="display:flex;gap:12px">
          <mat-form-field appearance="outline" style="flex:1">
            <mat-label>Sucursal</mat-label>
            <mat-select formControlName="branchId">
              <mat-option [value]="null">Todas las sucursales</mat-option>
              @for (b of data.branches; track b.id) {
                <mat-option [value]="b.id">{{ b.name }}</mat-option>
              }
            </mat-select>
          </mat-form-field>
          <mat-form-field appearance="outline" style="flex:1">
            <mat-label>Roles *</mat-label>
            <mat-select formControlName="roles" multiple>
              @for (r of roles; track r.value) {
                <mat-option [value]="r.value">{{ r.label }}</mat-option>
              }
            </mat-select>
          </mat-form-field>
        </div>
        @if (data.user) {
          <mat-form-field appearance="outline">
            <mat-label>Estado</mat-label>
            <mat-select formControlName="active">
              <mat-option [value]="true">Activo</mat-option>
              <mat-option [value]="false">Inactivo</mat-option>
            </mat-select>
          </mat-form-field>
        }
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserFormComponent, { className: "UserFormComponent", filePath: "src/app/modules/users/users.component.ts", lineNumber: 117 });
})();
var UsersComponent = class _UsersComponent {
  constructor() {
    this.api = inject(ApiService);
    this.dialog = inject(MatDialog);
    this.notify = inject(NotificationService);
    this.auth = inject(AuthService);
    this.columns = ["name", "email", "branch", "roles", "status", "actions"];
    this.dataSource = new MatTableDataSource([]);
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.branches = [];
  }
  get currentUsername() {
    return this.auth.currentUser()?.username;
  }
  ngOnInit() {
    this.api.getBranches().subscribe((b) => this.branches = b);
    this.loadUsers();
  }
  loadUsers() {
    this.loading.set(true);
    this.api.getUsers().subscribe({
      next: (users) => {
        this.dataSource.data = users;
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  openForm(user) {
    const ref = this.dialog.open(UserFormComponent, { width: "560px", data: { user, branches: this.branches } });
    ref.afterClosed().subscribe((result) => {
      if (result)
        this.loadUsers();
    });
  }
  deactivate(user) {
    if (!confirm(`\xBFDesactivar usuario "${user.fullName}"?`))
      return;
    this.api.deactivateUser(user.id).subscribe({
      next: () => {
        this.notify.success("Usuario desactivado");
        this.loadUsers();
      },
      error: (err) => this.notify.error(err.message)
    });
  }
  roleLabel(role) {
    return ROLES.find((r) => r.value === role)?.label ?? role;
  }
  roleColor(role) {
    const map = {
      ROLE_ADMIN: "#7B1FA2",
      ROLE_MANAGER: "#1565C0",
      ROLE_WAREHOUSE: "#2E7D32",
      ROLE_SALES: "#E65100",
      ROLE_VIEWER: "#546E7A"
    };
    return map[role] ?? "#757575";
  }
  static {
    this.\u0275fac = function UsersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UsersComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersComponent, selectors: [["app-users"]], decls: 36, vars: 4, consts: [[1, "page-container"], [1, "content-card"], [1, "card-header"], [2, "vertical-align", "middle", "margin-right", "8px"], [1, "header-actions"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mode", "indeterminate"], [1, "table-wrapper"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "email"], ["matColumnDef", "branch"], ["matColumnDef", "roles"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "opacity", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "text-muted"], [2, "color", "white", "font-size", "0.7rem", 3, "background"], [2, "color", "white", "font-size", "0.7rem"], [2, "vertical-align", "middle", "font-size", "16px"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Editar", 3, "click"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Desactivar", 3, "click", "disabled"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], [1, "mat-cell"], [1, "empty-state"]], template: function UsersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1)(2, "div", 2)(3, "h2")(4, "mat-icon", 3);
        \u0275\u0275text(5, "people");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, "Gesti\xF3n de Usuarios");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
        \u0275\u0275listener("click", function UsersComponent_Template_button_click_8_listener() {
          return ctx.openForm();
        });
        \u0275\u0275elementStart(9, "mat-icon");
        \u0275\u0275text(10, "person_add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, " Nuevo Usuario ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(12, UsersComponent_Conditional_12_Template, 1, 0, "mat-progress-bar", 6);
        \u0275\u0275elementStart(13, "div", 7)(14, "table", 8);
        \u0275\u0275elementContainerStart(15, 9);
        \u0275\u0275template(16, UsersComponent_th_16_Template, 2, 0, "th", 10)(17, UsersComponent_td_17_Template, 6, 2, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(18, 12);
        \u0275\u0275template(19, UsersComponent_th_19_Template, 2, 0, "th", 10)(20, UsersComponent_td_20_Template, 2, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(21, 13);
        \u0275\u0275template(22, UsersComponent_th_22_Template, 2, 0, "th", 10)(23, UsersComponent_td_23_Template, 2, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(24, 14);
        \u0275\u0275template(25, UsersComponent_th_25_Template, 2, 0, "th", 10)(26, UsersComponent_td_26_Template, 4, 0, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(27, 15);
        \u0275\u0275template(28, UsersComponent_th_28_Template, 2, 0, "th", 10)(29, UsersComponent_td_29_Template, 5, 4, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(30, 16);
        \u0275\u0275template(31, UsersComponent_th_31_Template, 2, 0, "th", 10)(32, UsersComponent_td_32_Template, 7, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(33, UsersComponent_tr_33_Template, 1, 0, "tr", 17)(34, UsersComponent_tr_34_Template, 1, 2, "tr", 18)(35, UsersComponent_tr_35_Template, 7, 1, "tr", 19);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275conditional(ctx.loading() ? 12 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("dataSource", ctx.dataSource);
        \u0275\u0275advance(19);
        \u0275\u0275property("matHeaderRowDef", ctx.columns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.columns);
      }
    }, dependencies: [
      MatCardModule,
      MatCard,
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
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatFormFieldModule,
      MatChipsModule,
      MatChip,
      MatChipSet,
      MatTooltipModule,
      MatTooltip,
      MatProgressBarModule,
      MatProgressBar,
      MatDialogModule,
      FormsModule
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersComponent, [{
    type: Component,
    args: [{
      selector: "app-users",
      standalone: true,
      imports: [
        MatCardModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatChipsModule,
        MatTooltipModule,
        MatProgressBarModule,
        MatDialogModule,
        FormsModule
      ],
      template: `
    <div class="page-container">
      <mat-card class="content-card">
        <div class="card-header">
          <h2><mat-icon style="vertical-align:middle;margin-right:8px">people</mat-icon>Gesti\xF3n de Usuarios</h2>
          <div class="header-actions">
            <button mat-raised-button color="primary" (click)="openForm()">
              <mat-icon>person_add</mat-icon> Nuevo Usuario
            </button>
          </div>
        </div>

        @if (loading()) { <mat-progress-bar mode="indeterminate" /> }

        <div class="table-wrapper">
          <table mat-table [dataSource]="dataSource">
            <ng-container matColumnDef="name">
              <th mat-header-cell *matHeaderCellDef>Nombre</th>
              <td mat-cell *matCellDef="let row">
                <strong>{{ row.fullName }}</strong><br>
                <small class="text-muted">@{{ row.username }}</small>
              </td>
            </ng-container>
            <ng-container matColumnDef="email">
              <th mat-header-cell *matHeaderCellDef>Email</th>
              <td mat-cell *matCellDef="let row">{{ row.email }}</td>
            </ng-container>
            <ng-container matColumnDef="branch">
              <th mat-header-cell *matHeaderCellDef>Sucursal</th>
              <td mat-cell *matCellDef="let row">{{ row.branchName || 'Todas' }}</td>
            </ng-container>
            <ng-container matColumnDef="roles">
              <th mat-header-cell *matHeaderCellDef>Roles</th>
              <td mat-cell *matCellDef="let row">
                <mat-chip-set>
                  @for (r of row.roles; track r) {
                    <mat-chip [style.background]="roleColor(r)" style="color:white;font-size:0.7rem">
                      {{ roleLabel(r) }}
                    </mat-chip>
                  }
                </mat-chip-set>
              </td>
            </ng-container>
            <ng-container matColumnDef="status">
              <th mat-header-cell *matHeaderCellDef>Estado</th>
              <td mat-cell *matCellDef="let row">
                <span [style.color]="row.active ? '#2E7D32' : '#f44336'">
                  <mat-icon style="vertical-align:middle;font-size:16px">{{ row.active ? 'check_circle' : 'cancel' }}</mat-icon>
                  {{ row.active ? 'Activo' : 'Inactivo' }}
                </span>
              </td>
            </ng-container>
            <ng-container matColumnDef="actions">
              <th mat-header-cell *matHeaderCellDef>Acciones</th>
              <td mat-cell *matCellDef="let row">
                <button mat-icon-button color="primary" (click)="openForm(row)" matTooltip="Editar">
                  <mat-icon>edit</mat-icon>
                </button>
                <button mat-icon-button color="warn" (click)="deactivate(row)" [disabled]="row.username === currentUsername"
                        matTooltip="Desactivar">
                  <mat-icon>person_off</mat-icon>
                </button>
              </td>
            </ng-container>
            <tr mat-header-row *matHeaderRowDef="columns"></tr>
            <tr mat-row *matRowDef="let row; columns: columns;" [style.opacity]="row.active ? 1 : 0.5"></tr>
            <tr class="mat-row" *matNoDataRow>
              <td class="mat-cell" [attr.colspan]="columns.length">
                <div class="empty-state"><mat-icon>people</mat-icon><p>No hay usuarios</p></div>
              </td>
            </tr>
          </table>
        </div>
      </mat-card>
    </div>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersComponent, { className: "UsersComponent", filePath: "src/app/modules/users/users.component.ts", lineNumber: 252 });
})();
export {
  UserFormComponent,
  UsersComponent
};
//# debugId=db9b7951-d611-5861-a948-b4e64cb1064b
//# sourceMappingURL=chunk-2LJP2STB.js.map
