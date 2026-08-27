import { n as _defineProperty } from "./objectSpread2-C_IE-bIJ.js";
import { t as ListKeyManager } from "./_list-key-manager-chunk-DaaCeOeb.js";
//#region node_modules/@angular/cdk/fesm2022/_focus-key-manager-chunk.mjs
var FocusKeyManager = class extends ListKeyManager {
	constructor(..._args) {
		super(..._args);
		_defineProperty(this, "_origin", "program");
	}
	setFocusOrigin(origin) {
		this._origin = origin;
		return this;
	}
	setActiveItem(item) {
		super.setActiveItem(item);
		if (this.activeItem) this.activeItem.focus(this._origin);
	}
};
//#endregion
export { FocusKeyManager as t };
