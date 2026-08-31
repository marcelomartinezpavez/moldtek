import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger
} from "./chunk-23OMAZUD.js";
import {
  toSignal
} from "./chunk-4XK3GPJE.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-Q2CMZJDU.js";
import {
  MatDivider,
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
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle
} from "./chunk-4SX5R4K7.js";
import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-CVYYOXZQ.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatHint,
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
  FormControl,
  FormControlDirective,
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
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconButton,
  MatIconModule
} from "./chunk-XA3QIYNR.js";
import "./chunk-C3SHWEMB.js";
import {
  Component,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  setClassMetadata,
  signal,
  startWith,
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
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-EHKUBBLL.js";

// src/app/modules/templates/template-designer/template-designer.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function TemplateDesignerComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 6);
  }
}
function TemplateDesignerComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 10);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.template().imageUrl, \u0275\u0275sanitizeUrl);
  }
}
function TemplateDesignerComponent_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    \u0275\u0275property("value", p_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", p_r3.code, " \u2014 ", p_r3.name);
  }
}
function TemplateDesignerComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 22);
    \u0275\u0275text(1, "Guarda la plantilla primero");
    \u0275\u0275elementEnd();
  }
}
function TemplateDesignerComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "mat-icon");
    \u0275\u0275text(2, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 52)(6, "mat-icon");
    \u0275\u0275text(7, "download");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.template().programFileName);
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r1.template().programFileUrl, \u0275\u0275sanitizeUrl);
  }
}
function TemplateDesignerComponent_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 22);
    \u0275\u0275text(1, "Guarda la plantilla primero");
    \u0275\u0275elementEnd();
  }
}
function TemplateDesignerComponent_For_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "small", 53);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r6 = ctx.$implicit;
    \u0275\u0275property("value", m_r6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r6.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2014 ", m_r6.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", m_r6.unitOfMeasure, ")");
  }
}
function TemplateDesignerComponent_th_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 54);
    \u0275\u0275text(1, "#");
    \u0275\u0275elementEnd();
  }
}
function TemplateDesignerComponent_td_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r7 = ctx.index;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r7 + 1);
  }
}
function TemplateDesignerComponent_th_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 54);
    \u0275\u0275text(1, "C\xF3digo");
    \u0275\u0275elementEnd();
  }
}
function TemplateDesignerComponent_td_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 55)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8.materialCode);
  }
}
function TemplateDesignerComponent_th_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 54);
    \u0275\u0275text(1, "Material");
    \u0275\u0275elementEnd();
  }
}
function TemplateDesignerComponent_td_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r9.materialName);
  }
}
function TemplateDesignerComponent_th_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 54);
    \u0275\u0275text(1, "Cantidad");
    \u0275\u0275elementEnd();
  }
}
function TemplateDesignerComponent_td_113_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 55)(1, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function TemplateDesignerComponent_td_113_Template_input_ngModelChange_1_listener($event) {
      const row_r11 = \u0275\u0275restoreView(_r10).$implicit;
      \u0275\u0275twoWayBindingSet(row_r11.quantity, $event) || (row_r11.quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(2, "span", 57);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", row_r11.quantity);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r11.unit || row_r11.materialUnit);
  }
}
function TemplateDesignerComponent_th_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 54);
    \u0275\u0275text(1, "Notas");
    \u0275\u0275elementEnd();
  }
}
function TemplateDesignerComponent_td_116_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 55)(1, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function TemplateDesignerComponent_td_116_Template_input_ngModelChange_1_listener($event) {
      const row_r13 = \u0275\u0275restoreView(_r12).$implicit;
      \u0275\u0275twoWayBindingSet(row_r13.notes, $event) || (row_r13.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", row_r13.notes);
    \u0275\u0275control();
  }
}
function TemplateDesignerComponent_th_118_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 54);
  }
}
function TemplateDesignerComponent_td_119_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 55)(1, "button", 59);
    \u0275\u0275listener("click", function TemplateDesignerComponent_td_119_Template_button_click_1_listener() {
      const i_r15 = \u0275\u0275restoreView(_r14).index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.moveUp(i_r15));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "arrow_upward");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 60);
    \u0275\u0275listener("click", function TemplateDesignerComponent_td_119_Template_button_click_4_listener() {
      const i_r15 = \u0275\u0275restoreView(_r14).index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.moveDown(i_r15));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "arrow_downward");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 61);
    \u0275\u0275listener("click", function TemplateDesignerComponent_td_119_Template_button_click_7_listener() {
      const i_r15 = \u0275\u0275restoreView(_r14).index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeMaterial(i_r15));
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "remove_circle");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const i_r15 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", i_r15 === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", i_r15 === ctx_r1.materialsData.length - 1);
  }
}
function TemplateDesignerComponent_tr_120_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 62);
  }
}
function TemplateDesignerComponent_tr_121_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 63);
  }
}
function TemplateDesignerComponent_tr_122_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 64)(1, "td", 65)(2, "div", 66)(3, "mat-icon");
    \u0275\u0275text(4, "inventory_2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Agrega materiales usando el buscador de arriba");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r1.matColumns.length);
  }
}
function TemplateDesignerComponent_Conditional_123_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "mat-icon");
    \u0275\u0275text(2, "summarize");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Total: ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " materiales");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.materialsData.length);
  }
}
var TemplateDesignerComponent = class _TemplateDesignerComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.fb = inject(FormBuilder);
    this.api = inject(ApiService);
    this.notify = inject(NotificationService);
    this.template = signal(
      null,
      ...ngDevMode ? [{ debugName: "template" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.products = signal(
      [],
      ...ngDevMode ? [{ debugName: "products" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.allMaterials = signal(
      [],
      ...ngDevMode ? [{ debugName: "allMaterials" }] : (
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
    this.saving = signal(
      false,
      ...ngDevMode ? [{ debugName: "saving" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.materialsData = [];
    this.materialsSource = new MatTableDataSource([]);
    this.matColumns = ["order", "code", "name", "quantity", "notes", "actions"];
    this.materialSearch = new FormControl("");
    this.selectedMaterial = null;
    this.addQty = 1;
    this.searchValue = toSignal(this.materialSearch.valueChanges.pipe(startWith("")), { initialValue: "" });
    this.filteredMaterials = computed(
      () => {
        const raw = this.searchValue();
        const search = typeof raw === "string" ? raw.toLowerCase() : "";
        return this.allMaterials().filter((m) => m.name.toLowerCase().includes(search) || m.code.toLowerCase().includes(search)).slice(0, 20);
      },
      ...ngDevMode ? [{ debugName: "filteredMaterials" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.infoForm = this.fb.group({
      code: [""],
      name: ["", Validators.required],
      description: [""],
      productId: [null]
    });
    this.displayMaterial = (m) => {
      if (!m)
        return "";
      if (typeof m === "string")
        return m;
      return `${m.code} \u2014 ${m.name}`;
    };
  }
  get isNew() {
    return this.route.snapshot.paramMap.get("id") === "new";
  }
  ngOnInit() {
    this.api.getAllMaterials().subscribe((mats) => this.allMaterials.set(mats));
    this.api.getProducts(void 0, void 0, 0, 200).subscribe((p) => this.products.set(p.content));
    if (!this.isNew) {
      const id = Number(this.route.snapshot.paramMap.get("id"));
      this.loading.set(true);
      this.api.getTemplate(id).subscribe({
        next: (t) => {
          this.template.set(t);
          this.infoForm.patchValue({ code: t.code, name: t.name, description: t.description, productId: t.productId });
          this.materialsData = [...t.materials ?? []];
          this.materialsSource.data = this.materialsData;
          this.loading.set(false);
        },
        error: () => {
          this.notify.error("No se pudo cargar la plantilla");
          this.loading.set(false);
        }
      });
    }
  }
  onMaterialSelected(event) {
    this.selectedMaterial = event.option.value;
  }
  addMaterial() {
    if (!this.selectedMaterial)
      return;
    if (this.materialsData.some((m) => m.materialId === this.selectedMaterial.id)) {
      this.notify.info("Este material ya est\xE1 en la lista");
      return;
    }
    const item = {
      materialId: this.selectedMaterial.id,
      materialCode: this.selectedMaterial.code,
      materialName: this.selectedMaterial.name,
      materialUnit: this.selectedMaterial.unitOfMeasure,
      quantity: this.addQty,
      unit: this.selectedMaterial.unitOfMeasure,
      orderIndex: this.materialsData.length
    };
    this.materialsData = [...this.materialsData, item];
    this.materialsSource.data = this.materialsData;
    this.selectedMaterial = null;
    this.materialSearch.setValue("");
    this.addQty = 1;
  }
  removeMaterial(index) {
    this.materialsData = this.materialsData.filter((_, i) => i !== index);
    this.materialsSource.data = this.materialsData;
  }
  moveUp(index) {
    if (index === 0)
      return;
    const arr = [...this.materialsData];
    [arr[index - 1], arr[index]] = [arr[index], arr[index - 1]];
    this.materialsData = arr;
    this.materialsSource.data = arr;
  }
  moveDown(index) {
    if (index === this.materialsData.length - 1)
      return;
    const arr = [...this.materialsData];
    [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
    this.materialsData = arr;
    this.materialsSource.data = arr;
  }
  save() {
    if (this.infoForm.invalid)
      return;
    this.saving.set(true);
    const req = {
      code: this.infoForm.value.code || void 0,
      name: this.infoForm.value.name,
      description: this.infoForm.value.description || void 0,
      productId: this.infoForm.value.productId || null,
      materials: this.materialsData.map((m, i) => __spreadProps(__spreadValues({}, m), { orderIndex: i }))
    };
    const obs = this.isNew ? this.api.createTemplate(req) : this.api.updateTemplate(this.template().id, req);
    obs.subscribe({
      next: (result) => {
        this.notify.success(this.isNew ? "Plantilla creada exitosamente" : "Plantilla guardada");
        if (this.isNew) {
          this.router.navigate(["/templates", result.id]);
        } else {
          this.template.set(result);
        }
        this.saving.set(false);
      },
      error: (err) => {
        this.notify.error(err.message);
        this.saving.set(false);
      }
    });
  }
  onImageSelected(event) {
    const file = event.target.files?.[0];
    if (!file || !this.template())
      return;
    this.api.uploadTemplateImage(this.template().id, file).subscribe({
      next: (res) => {
        this.template.set(__spreadProps(__spreadValues({}, this.template()), { imageUrl: res.url }));
        this.notify.success("Imagen actualizada");
      },
      error: (err) => this.notify.error(err.message)
    });
  }
  onProgramSelected(event) {
    const file = event.target.files?.[0];
    if (!file || !this.template())
      return;
    this.api.uploadTemplateProgram(this.template().id, file).subscribe({
      next: (res) => {
        this.template.set(__spreadProps(__spreadValues({}, this.template()), { programFileUrl: res.url, programFileName: res.name }));
        this.notify.success("Programa actualizado");
      },
      error: (err) => this.notify.error(err.message)
    });
  }
  back() {
    this.router.navigate(["/templates"]);
  }
  static {
    this.\u0275fac = function TemplateDesignerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TemplateDesignerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TemplateDesignerComponent, selectors: [["app-template-designer"]], decls: 131, vars: 24, consts: [["imgInput", ""], ["progInput", ""], ["auto", "matAutocomplete"], [1, "page-container"], [2, "margin-bottom", "16px"], ["mat-button", "", 3, "click"], ["mode", "indeterminate", 2, "margin-bottom", "16px"], [1, "designer-layout"], [1, "info-panel"], ["mat-card-avatar", "", 2, "color", "#7B1FA2"], ["mat-card-image", "", "alt", "Imagen", 2, "max-height", "200px", "object-fit", "cover", 3, "src"], [1, "info-form", 3, "formGroup"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "code", "placeholder", "Auto-generado si se deja vac\xEDo"], ["matInput", "", "formControlName", "name", "placeholder", "Ej: Puerta Milano 2000x900 Cedro"], ["formControlName", "productId"], [3, "value"], ["matInput", "", "formControlName", "description", "rows", "3", "placeholder", "Descripci\xF3n detallada..."], [1, "upload-section"], [1, "upload-label"], ["type", "file", "accept", "image/*", 2, "display", "none", 3, "change"], ["mat-stroked-button", "", 3, "click", "disabled"], [1, "text-muted"], [1, "upload-section", 2, "margin-top", "12px"], [2, "display", "flex", "align-items", "center", "gap", "8px", "font-size", "0.9rem"], ["type", "file", 2, "display", "none", 3, "change"], [1, "materials-panel"], ["mat-card-avatar", "", 2, "color", "#1976D2"], [1, "add-material-row"], ["appearance", "outline", 2, "flex", "2"], ["matInput", "", "placeholder", "Escribe c\xF3digo o nombre...", 3, "formControl", "matAutocomplete"], [3, "optionSelected", "displayWith"], ["matPrefix", ""], ["appearance", "outline", 2, "flex", "1"], ["matInput", "", "type", "number", "min", "0.0001", "step", "0.01", 3, "ngModelChange", "ngModel"], ["mat-raised-button", "", "color", "accent", 3, "click", "disabled"], [1, "table-wrapper", 2, "margin-top", "16px"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "order"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "code"], ["matColumnDef", "name"], ["matColumnDef", "quantity"], ["matColumnDef", "notes"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], [1, "materials-summary"], [1, "save-bar"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], ["mat-icon-button", "", "target", "_blank", "matTooltip", "Descargar", 3, "href"], [1, "text-muted", 2, "margin-left", "8px"], ["mat-header-cell", ""], ["mat-cell", ""], ["type", "number", "min", "0.0001", "step", "0.01", 1, "qty-input", 3, "ngModelChange", "ngModel"], [1, "unit-label"], ["placeholder", "Observaciones...", 1, "notes-input", 3, "ngModelChange", "ngModel"], ["mat-icon-button", "", "matTooltip", "Subir", 3, "click", "disabled"], ["mat-icon-button", "", "matTooltip", "Bajar", 3, "click", "disabled"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Quitar", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], [1, "mat-cell"], [1, "empty-state", 2, "padding", "32px"]], template: function TemplateDesignerComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "button", 5);
        \u0275\u0275listener("click", function TemplateDesignerComponent_Template_button_click_2_listener() {
          return ctx.back();
        });
        \u0275\u0275elementStart(3, "mat-icon");
        \u0275\u0275text(4, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " Volver a Plantillas ");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(6, TemplateDesignerComponent_Conditional_6_Template, 1, 0, "mat-progress-bar", 6);
        \u0275\u0275elementStart(7, "div", 7)(8, "mat-card", 8)(9, "mat-card-header")(10, "mat-icon", 9);
        \u0275\u0275text(11, "description");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "mat-card-title");
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "mat-card-subtitle");
        \u0275\u0275text(15);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(16, TemplateDesignerComponent_Conditional_16_Template, 1, 1, "img", 10);
        \u0275\u0275elementStart(17, "mat-card-content")(18, "form", 11)(19, "mat-form-field", 12)(20, "mat-label");
        \u0275\u0275text(21, "C\xF3digo");
        \u0275\u0275elementEnd();
        \u0275\u0275element(22, "input", 13);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(23, "mat-hint");
        \u0275\u0275text(24, "Ej: TPL-2024-001 \u2014 vac\xEDo genera autom\xE1tico");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "mat-form-field", 12)(26, "mat-label");
        \u0275\u0275text(27, "Nombre *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(28, "input", 14);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(29, "mat-error");
        \u0275\u0275text(30, "El nombre es requerido");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "mat-form-field", 12)(32, "mat-label");
        \u0275\u0275text(33, "Producto del cat\xE1logo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "mat-select", 15)(35, "mat-option", 16);
        \u0275\u0275text(36, "Sin vincular");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(37, TemplateDesignerComponent_For_38_Template, 2, 3, "mat-option", 16, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "mat-form-field", 12)(40, "mat-label");
        \u0275\u0275text(41, "Descripci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275element(42, "textarea", 17);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(43, "mat-divider");
        \u0275\u0275elementStart(44, "mat-card-content")(45, "div", 18)(46, "div", 19)(47, "mat-icon");
        \u0275\u0275text(48, "image");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "span");
        \u0275\u0275text(50, "Imagen de referencia");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "input", 20, 0);
        \u0275\u0275listener("change", function TemplateDesignerComponent_Template_input_change_51_listener($event) {
          return ctx.onImageSelected($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "button", 21);
        \u0275\u0275listener("click", function TemplateDesignerComponent_Template_button_click_53_listener() {
          \u0275\u0275restoreView(_r1);
          const imgInput_r4 = \u0275\u0275reference(52);
          return \u0275\u0275resetView(imgInput_r4.click());
        });
        \u0275\u0275elementStart(54, "mat-icon");
        \u0275\u0275text(55, "upload");
        \u0275\u0275elementEnd();
        \u0275\u0275text(56);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(57, TemplateDesignerComponent_Conditional_57_Template, 2, 0, "small", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "div", 23)(59, "div", 19)(60, "mat-icon");
        \u0275\u0275text(61, "attach_file");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "span");
        \u0275\u0275text(63, "Archivo de programa");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(64, TemplateDesignerComponent_Conditional_64_Template, 8, 2, "div", 24);
        \u0275\u0275elementStart(65, "input", 25, 1);
        \u0275\u0275listener("change", function TemplateDesignerComponent_Template_input_change_65_listener($event) {
          return ctx.onProgramSelected($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "button", 21);
        \u0275\u0275listener("click", function TemplateDesignerComponent_Template_button_click_67_listener() {
          \u0275\u0275restoreView(_r1);
          const progInput_r5 = \u0275\u0275reference(66);
          return \u0275\u0275resetView(progInput_r5.click());
        });
        \u0275\u0275elementStart(68, "mat-icon");
        \u0275\u0275text(69, "upload");
        \u0275\u0275elementEnd();
        \u0275\u0275text(70);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(71, TemplateDesignerComponent_Conditional_71_Template, 2, 0, "small", 22);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(72, "mat-card", 26)(73, "mat-card-header")(74, "mat-icon", 27);
        \u0275\u0275text(75, "inventory_2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "mat-card-title");
        \u0275\u0275text(77, "Lista de Materiales");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "mat-card-subtitle");
        \u0275\u0275text(79, "Materiales y cantidades para fabricar UNA unidad");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(80, "mat-card-content")(81, "div", 28)(82, "mat-form-field", 29)(83, "mat-label");
        \u0275\u0275text(84, "Buscar material");
        \u0275\u0275elementEnd();
        \u0275\u0275element(85, "input", 30);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(86, "mat-autocomplete", 31, 2);
        \u0275\u0275listener("optionSelected", function TemplateDesignerComponent_Template_mat_autocomplete_optionSelected_86_listener($event) {
          return ctx.onMaterialSelected($event);
        });
        \u0275\u0275repeaterCreate(88, TemplateDesignerComponent_For_89_Template, 6, 4, "mat-option", 16, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "mat-icon", 32);
        \u0275\u0275text(91, "search");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(92, "mat-form-field", 33)(93, "mat-label");
        \u0275\u0275text(94, "Cantidad");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "input", 34);
        \u0275\u0275twoWayListener("ngModelChange", function TemplateDesignerComponent_Template_input_ngModelChange_95_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.addQty, $event) || (ctx.addQty = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "button", 35);
        \u0275\u0275listener("click", function TemplateDesignerComponent_Template_button_click_96_listener() {
          return ctx.addMaterial();
        });
        \u0275\u0275elementStart(97, "mat-icon");
        \u0275\u0275text(98, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(99, " Agregar ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(100, "div", 36)(101, "table", 37);
        \u0275\u0275elementContainerStart(102, 38);
        \u0275\u0275template(103, TemplateDesignerComponent_th_103_Template, 2, 0, "th", 39)(104, TemplateDesignerComponent_td_104_Template, 2, 1, "td", 40);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(105, 41);
        \u0275\u0275template(106, TemplateDesignerComponent_th_106_Template, 2, 0, "th", 39)(107, TemplateDesignerComponent_td_107_Template, 3, 1, "td", 40);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(108, 42);
        \u0275\u0275template(109, TemplateDesignerComponent_th_109_Template, 2, 0, "th", 39)(110, TemplateDesignerComponent_td_110_Template, 2, 1, "td", 40);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(111, 43);
        \u0275\u0275template(112, TemplateDesignerComponent_th_112_Template, 2, 0, "th", 39)(113, TemplateDesignerComponent_td_113_Template, 4, 2, "td", 40);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(114, 44);
        \u0275\u0275template(115, TemplateDesignerComponent_th_115_Template, 2, 0, "th", 39)(116, TemplateDesignerComponent_td_116_Template, 2, 1, "td", 40);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(117, 45);
        \u0275\u0275template(118, TemplateDesignerComponent_th_118_Template, 1, 0, "th", 39)(119, TemplateDesignerComponent_td_119_Template, 10, 2, "td", 40);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(120, TemplateDesignerComponent_tr_120_Template, 1, 0, "tr", 46)(121, TemplateDesignerComponent_tr_121_Template, 1, 0, "tr", 47)(122, TemplateDesignerComponent_tr_122_Template, 7, 1, "tr", 48);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(123, TemplateDesignerComponent_Conditional_123_Template, 8, 1, "div", 49);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(124, "div", 50)(125, "button", 5);
        \u0275\u0275listener("click", function TemplateDesignerComponent_Template_button_click_125_listener() {
          return ctx.back();
        });
        \u0275\u0275text(126, "Cancelar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(127, "button", 51);
        \u0275\u0275listener("click", function TemplateDesignerComponent_Template_button_click_127_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(128, "mat-icon");
        \u0275\u0275text(129, "save");
        \u0275\u0275elementEnd();
        \u0275\u0275text(130);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        const auto_r16 = \u0275\u0275reference(87);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.loading() ? 6 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.isNew ? "Nueva Plantilla" : ctx.template()?.name ?? "");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.isNew ? "Crear plantilla de fabricaci\xF3n" : ctx.template()?.code ?? "");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.template()?.imageUrl ? 16 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.infoForm);
        \u0275\u0275advance(4);
        \u0275\u0275control();
        \u0275\u0275advance(6);
        \u0275\u0275control();
        \u0275\u0275advance(6);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("value", null);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.products());
        \u0275\u0275advance(5);
        \u0275\u0275control();
        \u0275\u0275advance(11);
        \u0275\u0275property("disabled", ctx.isNew);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.template()?.imageUrl ? "Cambiar imagen" : "Subir imagen", " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isNew ? 57 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx.template()?.programFileName ? 64 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", ctx.isNew);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.template()?.programFileName ? "Cambiar archivo" : "Subir programa", " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isNew ? 71 : -1);
        \u0275\u0275advance(14);
        \u0275\u0275property("formControl", ctx.materialSearch)("matAutocomplete", auto_r16);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("displayWith", ctx.displayMaterial);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.filteredMaterials());
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.addQty);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.selectedMaterial);
        \u0275\u0275advance(5);
        \u0275\u0275property("dataSource", ctx.materialsSource);
        \u0275\u0275advance(19);
        \u0275\u0275property("matHeaderRowDef", ctx.matColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.matColumns);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.materialsData.length > 0 ? 123 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.infoForm.invalid || ctx.saving());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.saving() ? "Guardando..." : ctx.isNew ? "Crear Plantilla" : "Guardar Cambios", " ");
      }
    }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormControlDirective, FormGroupDirective, FormControlName, FormsModule, NgModel, MatCardModule, MatCard, MatCardAvatar, MatCardContent, MatCardHeader, MatCardImage, MatCardSubtitle, MatCardTitle, MatFormFieldModule, MatFormField, MatLabel, MatHint, MatError, MatPrefix, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatNoDataRow, MatDividerModule, MatDivider, MatProgressBarModule, MatProgressBar, MatTooltipModule, MatTooltip, MatAutocompleteModule, MatAutocomplete, MatAutocompleteTrigger], styles: ["\n.designer-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 360px 1fr;\n  gap: 24px;\n  align-items: start;\n}\n@media (max-width: 900px) {\n  .designer-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.info-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.upload-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.upload-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 500;\n  font-size: 0.9rem;\n  color: rgba(0, 0, 0, 0.7);\n}\n.add-material-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.qty-input[_ngcontent-%COMP%] {\n  width: 80px;\n  padding: 4px 8px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n  font-size: 0.9rem;\n}\n.notes-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 4px 8px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n  font-size: 0.9rem;\n}\n.unit-label[_ngcontent-%COMP%] {\n  margin-left: 6px;\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 0.8rem;\n}\n.materials-summary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 16px;\n  padding: 12px;\n  background: #e8f5e9;\n  border-radius: 8px;\n  color: #2E7D32;\n}\n.save-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 24px;\n  padding-top: 16px;\n  border-top: 1px solid rgba(0, 0, 0, 0.08);\n}\n/*# sourceMappingURL=template-designer.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TemplateDesignerComponent, [{
    type: Component,
    args: [{ selector: "app-template-designer", standalone: true, imports: [
      ReactiveFormsModule,
      FormsModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatButtonModule,
      MatIconModule,
      MatTableModule,
      MatDividerModule,
      MatProgressBarModule,
      MatTooltipModule,
      MatAutocompleteModule
    ], template: `
    <div class="page-container">
      <div style="margin-bottom:16px">
        <button mat-button (click)="back()">
          <mat-icon>arrow_back</mat-icon> Volver a Plantillas
        </button>
      </div>

      @if (loading()) { <mat-progress-bar mode="indeterminate" style="margin-bottom:16px" /> }

      <div class="designer-layout">
        <!-- LEFT: Template info -->
        <mat-card class="info-panel">
          <mat-card-header>
            <mat-icon mat-card-avatar style="color:#7B1FA2">description</mat-icon>
            <mat-card-title>{{ isNew ? 'Nueva Plantilla' : (template()?.name ?? '') }}</mat-card-title>
            <mat-card-subtitle>{{ isNew ? 'Crear plantilla de fabricaci\xF3n' : (template()?.code ?? '') }}</mat-card-subtitle>
          </mat-card-header>

          @if (template()?.imageUrl) {
            <img mat-card-image [src]="template()!.imageUrl!" alt="Imagen" style="max-height:200px;object-fit:cover">
          }

          <mat-card-content>
            <form [formGroup]="infoForm" class="info-form">
              <mat-form-field appearance="outline" class="full-width">
                <mat-label>C\xF3digo</mat-label>
                <input matInput formControlName="code" placeholder="Auto-generado si se deja vac\xEDo">
                <mat-hint>Ej: TPL-2024-001 \u2014 vac\xEDo genera autom\xE1tico</mat-hint>
              </mat-form-field>

              <mat-form-field appearance="outline" class="full-width">
                <mat-label>Nombre *</mat-label>
                <input matInput formControlName="name" placeholder="Ej: Puerta Milano 2000x900 Cedro">
                <mat-error>El nombre es requerido</mat-error>
              </mat-form-field>

              <mat-form-field appearance="outline" class="full-width">
                <mat-label>Producto del cat\xE1logo</mat-label>
                <mat-select formControlName="productId">
                  <mat-option [value]="null">Sin vincular</mat-option>
                  @for (p of products(); track p.id) {
                    <mat-option [value]="p.id">{{ p.code }} \u2014 {{ p.name }}</mat-option>
                  }
                </mat-select>
              </mat-form-field>

              <mat-form-field appearance="outline" class="full-width">
                <mat-label>Descripci\xF3n</mat-label>
                <textarea matInput formControlName="description" rows="3"
                          placeholder="Descripci\xF3n detallada..."></textarea>
              </mat-form-field>
            </form>
          </mat-card-content>

          <mat-divider></mat-divider>

          <mat-card-content>
            <div class="upload-section">
              <div class="upload-label">
                <mat-icon>image</mat-icon><span>Imagen de referencia</span>
              </div>
              <input #imgInput type="file" accept="image/*" style="display:none"
                     (change)="onImageSelected($event)">
              <button mat-stroked-button (click)="imgInput.click()" [disabled]="isNew">
                <mat-icon>upload</mat-icon>
                {{ template()?.imageUrl ? 'Cambiar imagen' : 'Subir imagen' }}
              </button>
              @if (isNew) { <small class="text-muted">Guarda la plantilla primero</small> }
            </div>

            <div class="upload-section" style="margin-top:12px">
              <div class="upload-label">
                <mat-icon>attach_file</mat-icon><span>Archivo de programa</span>
              </div>
              @if (template()?.programFileName) {
                <div style="display:flex;align-items:center;gap:8px;font-size:0.9rem">
                  <mat-icon>description</mat-icon>
                  <span>{{ template()!.programFileName }}</span>
                  <a mat-icon-button [href]="template()!.programFileUrl!" target="_blank" matTooltip="Descargar">
                    <mat-icon>download</mat-icon>
                  </a>
                </div>
              }
              <input #progInput type="file" style="display:none" (change)="onProgramSelected($event)">
              <button mat-stroked-button (click)="progInput.click()" [disabled]="isNew">
                <mat-icon>upload</mat-icon>
                {{ template()?.programFileName ? 'Cambiar archivo' : 'Subir programa' }}
              </button>
              @if (isNew) { <small class="text-muted">Guarda la plantilla primero</small> }
            </div>
          </mat-card-content>
        </mat-card>

        <!-- RIGHT: Materials -->
        <mat-card class="materials-panel">
          <mat-card-header>
            <mat-icon mat-card-avatar style="color:#1976D2">inventory_2</mat-icon>
            <mat-card-title>Lista de Materiales</mat-card-title>
            <mat-card-subtitle>Materiales y cantidades para fabricar UNA unidad</mat-card-subtitle>
          </mat-card-header>

          <mat-card-content>
            <div class="add-material-row">
              <mat-form-field appearance="outline" style="flex:2">
                <mat-label>Buscar material</mat-label>
                <input matInput [formControl]="materialSearch"
                       [matAutocomplete]="auto"
                       placeholder="Escribe c\xF3digo o nombre...">
                <mat-autocomplete #auto="matAutocomplete" [displayWith]="displayMaterial"
                                  (optionSelected)="onMaterialSelected($event)">
                  @for (m of filteredMaterials(); track m.id) {
                    <mat-option [value]="m">
                      <strong>{{ m.code }}</strong> \u2014 {{ m.name }}
                      <small class="text-muted" style="margin-left:8px">({{ m.unitOfMeasure }})</small>
                    </mat-option>
                  }
                </mat-autocomplete>
                <mat-icon matPrefix>search</mat-icon>
              </mat-form-field>

              <mat-form-field appearance="outline" style="flex:1">
                <mat-label>Cantidad</mat-label>
                <input matInput type="number" [(ngModel)]="addQty" min="0.0001" step="0.01">
              </mat-form-field>

              <button mat-raised-button color="accent" (click)="addMaterial()" [disabled]="!selectedMaterial">
                <mat-icon>add</mat-icon> Agregar
              </button>
            </div>

            <div class="table-wrapper" style="margin-top:16px">
              <table mat-table [dataSource]="materialsSource">
                <ng-container matColumnDef="order">
                  <th mat-header-cell *matHeaderCellDef>#</th>
                  <td mat-cell *matCellDef="let row; let i = index">{{ i + 1 }}</td>
                </ng-container>
                <ng-container matColumnDef="code">
                  <th mat-header-cell *matHeaderCellDef>C\xF3digo</th>
                  <td mat-cell *matCellDef="let row"><strong>{{ row.materialCode }}</strong></td>
                </ng-container>
                <ng-container matColumnDef="name">
                  <th mat-header-cell *matHeaderCellDef>Material</th>
                  <td mat-cell *matCellDef="let row">{{ row.materialName }}</td>
                </ng-container>
                <ng-container matColumnDef="quantity">
                  <th mat-header-cell *matHeaderCellDef>Cantidad</th>
                  <td mat-cell *matCellDef="let row">
                    <input class="qty-input" type="number" [(ngModel)]="row.quantity" min="0.0001" step="0.01">
                    <span class="unit-label">{{ row.unit || row.materialUnit }}</span>
                  </td>
                </ng-container>
                <ng-container matColumnDef="notes">
                  <th mat-header-cell *matHeaderCellDef>Notas</th>
                  <td mat-cell *matCellDef="let row">
                    <input class="notes-input" [(ngModel)]="row.notes" placeholder="Observaciones...">
                  </td>
                </ng-container>
                <ng-container matColumnDef="actions">
                  <th mat-header-cell *matHeaderCellDef></th>
                  <td mat-cell *matCellDef="let row; let i = index">
                    <button mat-icon-button (click)="moveUp(i)" [disabled]="i === 0" matTooltip="Subir">
                      <mat-icon>arrow_upward</mat-icon>
                    </button>
                    <button mat-icon-button (click)="moveDown(i)"
                            [disabled]="i === materialsData.length - 1" matTooltip="Bajar">
                      <mat-icon>arrow_downward</mat-icon>
                    </button>
                    <button mat-icon-button color="warn" (click)="removeMaterial(i)" matTooltip="Quitar">
                      <mat-icon>remove_circle</mat-icon>
                    </button>
                  </td>
                </ng-container>
                <tr mat-header-row *matHeaderRowDef="matColumns"></tr>
                <tr mat-row *matRowDef="let row; columns: matColumns;"></tr>
                <tr class="mat-row" *matNoDataRow>
                  <td class="mat-cell" [attr.colspan]="matColumns.length">
                    <div class="empty-state" style="padding:32px">
                      <mat-icon>inventory_2</mat-icon>
                      <p>Agrega materiales usando el buscador de arriba</p>
                    </div>
                  </td>
                </tr>
              </table>
            </div>

            @if (materialsData.length > 0) {
              <div class="materials-summary">
                <mat-icon>summarize</mat-icon>
                <span>Total: <strong>{{ materialsData.length }}</strong> materiales</span>
              </div>
            }
          </mat-card-content>
        </mat-card>
      </div>

      <div class="save-bar">
        <button mat-button (click)="back()">Cancelar</button>
        <button mat-raised-button color="primary" (click)="save()" [disabled]="infoForm.invalid || saving()">
          <mat-icon>save</mat-icon>
          {{ saving() ? 'Guardando...' : (isNew ? 'Crear Plantilla' : 'Guardar Cambios') }}
        </button>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;a73094478f770f2346723640386fe83aa0348406614f0b8313a124393d71e8ac;C:/Proyectos/moldtek/frontend/src/app/modules/templates/template-designer/template-designer.component.ts */\n.designer-layout {\n  display: grid;\n  grid-template-columns: 360px 1fr;\n  gap: 24px;\n  align-items: start;\n}\n@media (max-width: 900px) {\n  .designer-layout {\n    grid-template-columns: 1fr;\n  }\n}\n.info-form {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.full-width {\n  width: 100%;\n}\n.upload-section {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.upload-label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 500;\n  font-size: 0.9rem;\n  color: rgba(0, 0, 0, 0.7);\n}\n.add-material-row {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.qty-input {\n  width: 80px;\n  padding: 4px 8px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n  font-size: 0.9rem;\n}\n.notes-input {\n  width: 100%;\n  padding: 4px 8px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n  font-size: 0.9rem;\n}\n.unit-label {\n  margin-left: 6px;\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 0.8rem;\n}\n.materials-summary {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 16px;\n  padding: 12px;\n  background: #e8f5e9;\n  border-radius: 8px;\n  color: #2E7D32;\n}\n.save-bar {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 24px;\n  padding-top: 16px;\n  border-top: 1px solid rgba(0, 0, 0, 0.08);\n}\n/*# sourceMappingURL=template-designer.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TemplateDesignerComponent, { className: "TemplateDesignerComponent", filePath: "src/app/modules/templates/template-designer/template-designer.component.ts", lineNumber: 252 });
})();
export {
  TemplateDesignerComponent
};
//# debugId=b03d7bd6-ceb6-59d0-99aa-5234e3b9f0f0
//# sourceMappingURL=chunk-M5MFR32E.js.map
