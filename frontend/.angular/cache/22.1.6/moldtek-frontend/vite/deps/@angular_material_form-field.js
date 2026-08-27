import { n as _defineProperty } from "./objectSpread2-C_IE-bIJ.js";
import { ca as ɵɵdefineInjector } from "./_resource-chunk-BeFW4kSI.js";
import { Ai as setClassMetadata, Nn as NgModule, Ua as ɵɵdefineNgModule } from "./core-Cq1MWE1a.js";
import { t as BidiModule } from "./bidi-D9E0eS6x.js";
import { s as ObserversModule } from "./a11y-B3i4Ni-O.js";
import "./platform-WlKP8NfF.js";
import "./observers-private-DvVBl5-T.js";
import { a as MAT_SUFFIX, c as MatFormFieldControl, d as MatPrefix, f as MatSuffix, h as getMatFormFieldPlaceholderConflictError, i as MAT_PREFIX, l as MatHint, m as getMatFormFieldMissingControlError, n as MAT_FORM_FIELD, o as MatError, p as getMatFormFieldDuplicatedHintError, r as MAT_FORM_FIELD_DEFAULT_OPTIONS, s as MatFormField, t as MAT_ERROR, u as MatLabel } from "./_form-field-chunk-CYvMXRld.js";
//#region node_modules/@angular/material/fesm2022/form-field.mjs
var _MatFormFieldModule;
var MatFormFieldModule = class {};
_MatFormFieldModule = MatFormFieldModule;
_defineProperty(MatFormFieldModule, "ɵfac", function MatFormFieldModule_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _MatFormFieldModule)();
});
_defineProperty(MatFormFieldModule, "ɵmod", /* @__PURE__ */ ɵɵdefineNgModule({
	type: _MatFormFieldModule,
	imports: [
		ObserversModule,
		MatFormField,
		MatLabel,
		MatError,
		MatHint,
		MatPrefix,
		MatSuffix
	],
	exports: [
		MatFormField,
		MatLabel,
		MatHint,
		MatError,
		MatPrefix,
		MatSuffix,
		BidiModule
	]
}));
_defineProperty(MatFormFieldModule, "ɵinj", /* @__PURE__ */ ɵɵdefineInjector({ imports: [
	ObserversModule,
	MatFormField,
	BidiModule
] }));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFormFieldModule, [{
		type: NgModule,
		args: [{
			imports: [
				ObserversModule,
				MatFormField,
				MatLabel,
				MatError,
				MatHint,
				MatPrefix,
				MatSuffix
			],
			exports: [
				MatFormField,
				MatLabel,
				MatHint,
				MatError,
				MatPrefix,
				MatSuffix,
				BidiModule
			]
		}]
	}], null, null);
})();
//#endregion
export { MAT_ERROR, MAT_FORM_FIELD, MAT_FORM_FIELD_DEFAULT_OPTIONS, MAT_PREFIX, MAT_SUFFIX, MatError, MatFormField, MatFormFieldControl, MatFormFieldModule, MatHint, MatLabel, MatPrefix, MatSuffix, getMatFormFieldDuplicatedHintError, getMatFormFieldMissingControlError, getMatFormFieldPlaceholderConflictError };
