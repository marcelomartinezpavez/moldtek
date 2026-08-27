import { Sr as inject, W as InjectionToken, y as ANIMATION_MODULE_TYPE } from "./_resource-chunk-BeFW4kSI.js";
import { i as MediaMatcher } from "./layout-Gj7TzMha.js";
//#region node_modules/@angular/material/fesm2022/_animation-chunk.mjs
var MATERIAL_ANIMATIONS = new InjectionToken("MATERIAL_ANIMATIONS");
var reducedMotion = null;
function _getAnimationsState() {
	var _inject, _reducedMotion;
	if (((_inject = inject(MATERIAL_ANIMATIONS, { optional: true })) === null || _inject === void 0 ? void 0 : _inject.animationsDisabled) || inject(ANIMATION_MODULE_TYPE, { optional: true }) === "NoopAnimations") return "di-disabled";
	(_reducedMotion = reducedMotion) !== null && _reducedMotion !== void 0 || (reducedMotion = inject(MediaMatcher).matchMedia("(prefers-reduced-motion)").matches);
	return reducedMotion ? "reduced-motion" : "enabled";
}
function _animationsDisabled() {
	return _getAnimationsState() !== "enabled";
}
//#endregion
export { _getAnimationsState as n, _animationsDisabled as t };
