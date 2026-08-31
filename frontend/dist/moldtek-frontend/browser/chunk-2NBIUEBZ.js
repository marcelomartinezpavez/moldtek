import {
  MatDivider,
  MatDividerModule
} from "./chunk-PXVMVJL6.js";
import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-CVYYOXZQ.js";
import {
  MAT_DIALOG_DATA,
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
  NotificationService
} from "./chunk-2RXZUKY7.js";
import "./chunk-T4USGM5V.js";
import "./chunk-ERVSOKK3.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
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
  MatIconModule
} from "./chunk-XA3QIYNR.js";
import "./chunk-C3SHWEMB.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-EHKUBBLL.js";

// src/app/modules/products/product-form/product-form.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ProductFormComponent_For_20_Template(rf, ctx) {
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
function ProductFormComponent_For_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r2 = ctx.$implicit;
    \u0275\u0275property("value", f_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r2);
  }
}
function ProductFormComponent_For_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r3 = ctx.$implicit;
    \u0275\u0275property("value", f_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r3);
  }
}
var FILL_TYPES = ["HONEY_COMB", "POLIESTIRENO", "SOLIDO", "NA"];
var FINISH_TYPES = ["ENCHAPADO", "PREPINTADO", "MELAM\xCDNICO", "NA"];
var ProductFormComponent = class _ProductFormComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.api = inject(ApiService);
    this.notify = inject(NotificationService);
    this.dialogRef = inject(MatDialogRef);
    this.data = inject(MAT_DIALOG_DATA);
    this.fillTypes = FILL_TYPES;
    this.finishTypes = FINISH_TYPES;
    this.saving = false;
    this.form = this.fb.group({
      code: ["", Validators.required],
      name: ["", Validators.required],
      description: [""],
      categoryId: [null],
      heightMin: [null],
      heightMax: [null],
      widthMin: [null],
      widthMax: [null],
      thicknessStandard: [null],
      fillType: ["NA"],
      finishType: ["NA"],
      price: [null],
      norm: [""],
      warranty: [""],
      certification: [""]
    });
  }
  get isEdit() {
    return !!this.data.product;
  }
  ngOnInit() {
    if (this.data.product)
      this.form.patchValue(this.data.product);
  }
  save() {
    if (this.form.invalid)
      return;
    this.saving = true;
    const req = this.form.value;
    const obs = this.isEdit ? this.api.updateProduct(this.data.product.id, req) : this.api.createProduct(req);
    obs.subscribe({
      next: () => {
        this.notify.success(this.isEdit ? "Producto actualizado" : "Producto creado");
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.notify.error(err.message);
        this.saving = false;
      }
    });
  }
  static {
    this.\u0275fac = function ProductFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductFormComponent, selectors: [["app-product-form"]], decls: 95, vars: 7, consts: [["mat-dialog-title", ""], [1, "product-form", 3, "formGroup"], [1, "form-row"], ["appearance", "outline"], ["matInput", "", "formControlName", "code", "placeholder", "Ej: PI-HDF-001", 3, "readonly"], ["formControlName", "categoryId"], [3, "value"], ["appearance", "outline", 2, "width", "100%"], ["matInput", "", "formControlName", "name", "placeholder", "Ej: Puerta Interior HDF Enchapada"], ["matInput", "", "formControlName", "description", "rows", "2"], [2, "margin", "8px 0"], [2, "font-weight", "500", "color", "rgba(0,0,0,0.7)", "margin-bottom", "4px"], ["matInput", "", "type", "number", "formControlName", "heightMin"], ["matInput", "", "type", "number", "formControlName", "heightMax"], ["matInput", "", "type", "number", "formControlName", "widthMin"], ["matInput", "", "type", "number", "formControlName", "widthMax"], ["matInput", "", "type", "number", "formControlName", "thicknessStandard"], ["formControlName", "fillType"], ["formControlName", "finishType"], ["matInput", "", "type", "number", "formControlName", "price", "min", "0"], ["matPrefix", ""], ["matInput", "", "formControlName", "norm", "placeholder", "Ej: NCh 440"], ["matInput", "", "formControlName", "warranty", "placeholder", "Ej: 1 a\xF1o"], ["matInput", "", "formControlName", "certification", "placeholder", "Ej: F30"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"]], template: function ProductFormComponent_Template(rf, ctx) {
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
        \u0275\u0275text(12, "Requerido");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "mat-form-field", 3)(14, "mat-label");
        \u0275\u0275text(15, "Categor\xEDa");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "mat-select", 5)(17, "mat-option", 6);
        \u0275\u0275text(18, "Sin categor\xEDa");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(19, ProductFormComponent_For_20_Template, 2, 2, "mat-option", 6, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "mat-form-field", 7)(22, "mat-label");
        \u0275\u0275text(23, "Nombre *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(24, "input", 8);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(25, "mat-error");
        \u0275\u0275text(26, "Requerido");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "mat-form-field", 7)(28, "mat-label");
        \u0275\u0275text(29, "Descripci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275element(30, "textarea", 9);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275element(31, "mat-divider", 10);
        \u0275\u0275elementStart(32, "p", 11);
        \u0275\u0275text(33, "Dimensiones (mm)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 2)(35, "mat-form-field", 3)(36, "mat-label");
        \u0275\u0275text(37, "Alto m\xEDn");
        \u0275\u0275elementEnd();
        \u0275\u0275element(38, "input", 12);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "mat-form-field", 3)(40, "mat-label");
        \u0275\u0275text(41, "Alto m\xE1x");
        \u0275\u0275elementEnd();
        \u0275\u0275element(42, "input", 13);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "mat-form-field", 3)(44, "mat-label");
        \u0275\u0275text(45, "Ancho m\xEDn");
        \u0275\u0275elementEnd();
        \u0275\u0275element(46, "input", 14);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "mat-form-field", 3)(48, "mat-label");
        \u0275\u0275text(49, "Ancho m\xE1x");
        \u0275\u0275elementEnd();
        \u0275\u0275element(50, "input", 15);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "div", 2)(52, "mat-form-field", 3)(53, "mat-label");
        \u0275\u0275text(54, "Espesor est\xE1ndar");
        \u0275\u0275elementEnd();
        \u0275\u0275element(55, "input", 16);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "mat-form-field", 3)(57, "mat-label");
        \u0275\u0275text(58, "Relleno");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "mat-select", 17);
        \u0275\u0275repeaterCreate(60, ProductFormComponent_For_61_Template, 2, 2, "mat-option", 6, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "mat-form-field", 3)(63, "mat-label");
        \u0275\u0275text(64, "Terminaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "mat-select", 18);
        \u0275\u0275repeaterCreate(66, ProductFormComponent_For_67_Template, 2, 2, "mat-option", 6, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(68, "div", 2)(69, "mat-form-field", 3)(70, "mat-label");
        \u0275\u0275text(71, "Precio ($)");
        \u0275\u0275elementEnd();
        \u0275\u0275element(72, "input", 19);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(73, "span", 20);
        \u0275\u0275text(74, "$\xA0");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(75, "mat-form-field", 3)(76, "mat-label");
        \u0275\u0275text(77, "Norma");
        \u0275\u0275elementEnd();
        \u0275\u0275element(78, "input", 21);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(79, "div", 2)(80, "mat-form-field", 3)(81, "mat-label");
        \u0275\u0275text(82, "Garant\xEDa");
        \u0275\u0275elementEnd();
        \u0275\u0275element(83, "input", 22);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "mat-form-field", 3)(85, "mat-label");
        \u0275\u0275text(86, "Certificaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275element(87, "input", 23);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(88, "mat-dialog-actions", 24)(89, "button", 25);
        \u0275\u0275text(90, "Cancelar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "button", 26);
        \u0275\u0275listener("click", function ProductFormComponent_Template_button_click_91_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(92, "mat-icon");
        \u0275\u0275text(93, "save");
        \u0275\u0275elementEnd();
        \u0275\u0275text(94);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.isEdit ? "edit" : "add");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.isEdit ? "Editar Producto" : "Nuevo Producto", " ");
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
        \u0275\u0275advance(8);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275control();
        \u0275\u0275advance(5);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.fillTypes);
        \u0275\u0275advance(5);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.finishTypes);
        \u0275\u0275advance(6);
        \u0275\u0275control();
        \u0275\u0275advance(6);
        \u0275\u0275control();
        \u0275\u0275advance(5);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.form.invalid || ctx.saving);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.saving ? "Guardando..." : "Guardar", " ");
      }
    }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, MatDialogModule, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent, MatFormFieldModule, MatFormField, MatLabel, MatError, MatPrefix, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, MatButtonModule, MatButton, MatIconModule, MatIcon, MatDividerModule, MatDivider], styles: ["\n.product-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  min-width: 640px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.form-row[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  flex: 1;\n}\nmat-dialog-content[_ngcontent-%COMP%] {\n  max-height: 75vh;\n}\n/*# sourceMappingURL=product-form.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductFormComponent, [{
    type: Component,
    args: [{ selector: "app-product-form", standalone: true, imports: [
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
      {{ isEdit ? 'Editar Producto' : 'Nuevo Producto' }}
    </h2>
    <mat-dialog-content>
      <form [formGroup]="form" class="product-form">
        <div class="form-row">
          <mat-form-field appearance="outline">
            <mat-label>C\xF3digo *</mat-label>
            <input matInput formControlName="code" [readonly]="isEdit" placeholder="Ej: PI-HDF-001">
            <mat-error>Requerido</mat-error>
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
        <mat-form-field appearance="outline" style="width:100%">
          <mat-label>Nombre *</mat-label>
          <input matInput formControlName="name" placeholder="Ej: Puerta Interior HDF Enchapada">
          <mat-error>Requerido</mat-error>
        </mat-form-field>
        <mat-form-field appearance="outline" style="width:100%">
          <mat-label>Descripci\xF3n</mat-label>
          <textarea matInput formControlName="description" rows="2"></textarea>
        </mat-form-field>
        <mat-divider style="margin:8px 0"></mat-divider>
        <p style="font-weight:500;color:rgba(0,0,0,0.7);margin-bottom:4px">Dimensiones (mm)</p>
        <div class="form-row">
          <mat-form-field appearance="outline">
            <mat-label>Alto m\xEDn</mat-label>
            <input matInput type="number" formControlName="heightMin">
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Alto m\xE1x</mat-label>
            <input matInput type="number" formControlName="heightMax">
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Ancho m\xEDn</mat-label>
            <input matInput type="number" formControlName="widthMin">
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Ancho m\xE1x</mat-label>
            <input matInput type="number" formControlName="widthMax">
          </mat-form-field>
        </div>
        <div class="form-row">
          <mat-form-field appearance="outline">
            <mat-label>Espesor est\xE1ndar</mat-label>
            <input matInput type="number" formControlName="thicknessStandard">
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Relleno</mat-label>
            <mat-select formControlName="fillType">
              @for (f of fillTypes; track f) { <mat-option [value]="f">{{ f }}</mat-option> }
            </mat-select>
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Terminaci\xF3n</mat-label>
            <mat-select formControlName="finishType">
              @for (f of finishTypes; track f) { <mat-option [value]="f">{{ f }}</mat-option> }
            </mat-select>
          </mat-form-field>
        </div>
        <div class="form-row">
          <mat-form-field appearance="outline">
            <mat-label>Precio ($)</mat-label>
            <input matInput type="number" formControlName="price" min="0">
            <span matPrefix>$&nbsp;</span>
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Norma</mat-label>
            <input matInput formControlName="norm" placeholder="Ej: NCh 440">
          </mat-form-field>
        </div>
        <div class="form-row">
          <mat-form-field appearance="outline">
            <mat-label>Garant\xEDa</mat-label>
            <input matInput formControlName="warranty" placeholder="Ej: 1 a\xF1o">
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Certificaci\xF3n</mat-label>
            <input matInput formControlName="certification" placeholder="Ej: F30">
          </mat-form-field>
        </div>
      </form>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancelar</button>
      <button mat-raised-button color="primary" (click)="save()" [disabled]="form.invalid || saving">
        <mat-icon>save</mat-icon> {{ saving ? 'Guardando...' : 'Guardar' }}
      </button>
    </mat-dialog-actions>
  `, styles: ["/* angular:styles/component:css;2ce5d9ad05b2960e88ea9083c5d7e3a583f08fba72e6f91cb405dc3d31151dad;C:/Proyectos/moldtek/frontend/src/app/modules/products/product-form/product-form.component.ts */\n.product-form {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  min-width: 640px;\n}\n.form-row {\n  display: flex;\n  gap: 12px;\n}\n.form-row mat-form-field {\n  flex: 1;\n}\nmat-dialog-content {\n  max-height: 75vh;\n}\n/*# sourceMappingURL=product-form.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductFormComponent, { className: "ProductFormComponent", filePath: "src/app/modules/products/product-form/product-form.component.ts", lineNumber: 128 });
})();
export {
  ProductFormComponent
};
//# debugId=1a6d2eb1-0339-5db5-8d5a-144ed960be59
//# sourceMappingURL=chunk-2NBIUEBZ.js.map
