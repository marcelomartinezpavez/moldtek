import { n as _defineProperty } from "./objectSpread2-C_IE-bIJ.js";
import { ca as ɵɵdefineInjector } from "./_resource-chunk-BeFW4kSI.js";
import { Ai as setClassMetadata, Nn as NgModule, Ua as ɵɵdefineNgModule } from "./core-Cq1MWE1a.js";
import { t as BidiModule } from "./bidi-D9E0eS6x.js";
import { n as MatRipple } from "./_ripple-chunk-CHuffVAe.js";
//#region node_modules/@angular/material/fesm2022/_ripple-module-chunk.mjs
var _MatRippleModule;
var MatRippleModule = class {};
_MatRippleModule = MatRippleModule;
_defineProperty(MatRippleModule, "ɵfac", function MatRippleModule_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _MatRippleModule)();
});
_defineProperty(MatRippleModule, "ɵmod", /* @__PURE__ */ ɵɵdefineNgModule({
	type: _MatRippleModule,
	imports: [MatRipple],
	exports: [MatRipple, BidiModule]
}));
_defineProperty(MatRippleModule, "ɵinj", /* @__PURE__ */ ɵɵdefineInjector({ imports: [BidiModule] }));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRippleModule, [{
		type: NgModule,
		args: [{
			imports: [MatRipple],
			exports: [MatRipple, BidiModule]
		}]
	}], null, null);
})();
//#endregion
export { MatRippleModule as t };
