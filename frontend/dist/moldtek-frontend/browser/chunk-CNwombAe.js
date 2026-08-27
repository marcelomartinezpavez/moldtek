import{$ as Kl,Bt as Vc,Ct as Rp,Gt as XE,H as Ii,J as K,Jn as kv,Kn as kn,M as Gt,Mt as Tu,O as GE,P as HE,Pr as wu,Tt as SD,Vn as jE,_t as Pu,br as s0,cr as pE,ft as PE,g as D,gn as dE,gt as Pp,i as $p,it as Lu,nt as Lp,on as a0,or as oh,pr as qc,qn as kp,r as $e,sn as aD,vr as r0,w as FE,wt as S,zt as VE}from"./chunk-DRbxCHDs.js";import{L as mo,b as Vr,p as Jt}from"./chunk-DgCQWjfe.js";import{g as oi,s as Tn}from"./chunk-Y7LZ8mhf.js";import{s as Tt}from"./chunk-BX0WftNZ.js";import{l as vi,n as Si,o as j}from"./chunk-D2H3Y_dH.js";function X(i,g){if(i&1&&(Ii(0,`mat-option`,17),SD(1),Vc()),i&2){let t=g.$implicit;Lp(`value`,t),kv(),qc(` `,t,` `)}}function Y(i,g){if(i&1){let t=GE();Ii(0,`mat-form-field`,14)(1,`mat-select`,16,0),$p(`selectionChange`,function(e){wu(t);return Tu(XE(2)._changePageSize(e.value))}),VE(3,X,2,2,`mat-option`,17,jE),Vc(),Ii(5,`div`,18),$p(`click`,function(){wu(t);return Tu(aD(2).open())}),Vc()()}if(i&2){let t=XE(2);Lp(`appearance`,t._formFieldAppearance)(`color`,t.color),kv(),Lp(`value`,t.pageSize)(`disabled`,t.disabled),Rp(`aria-labelledby`,t._pageSizeLabelId),Lp(`panelClass`,t.selectConfig.panelClass||``)(`disableOptionCentering`,t.selectConfig.disableOptionCentering),kv(2),HE(t._displayedPageSizeOptions)}}function tt(i,g){if(i&1&&(Ii(0,`div`,15),SD(1),Vc()),i&2){let t=XE(2);kv(),oh(t.pageSize)}}function et(i,g){if(i&1&&(Ii(0,`div`,3)(1,`div`,13),SD(2),Vc(),PE(3,Y,6,7,`mat-form-field`,14),PE(4,tt,2,1,`div`,15),Vc()),i&2){let t=XE();kv(),kp(`id`,t._pageSizeLabelId),kv(),qc(` `,t._intl.itemsPerPageLabel,` `),kv(),FE(t._displayedPageSizeOptions.length>1?3:-1),kv(),FE(t._displayedPageSizeOptions.length<=1?4:-1)}}function it(i,g){if(i&1){let t=GE();Ii(0,`button`,19),$p(`click`,function(){wu(t);let e=XE();return Tu(e._buttonClicked(0,e._previousButtonsDisabled()))}),Lu(),Ii(1,`svg`,8),Pp(2,`path`,20),Vc()()}if(i&2){let t=XE();Lp(`matTooltip`,t._intl.firstPageLabel)(`matTooltipDisabled`,t._previousButtonsDisabled())(`disabled`,t._previousButtonsDisabled())(`tabindex`,t._previousButtonsDisabled()?-1:null),kp(`aria-label`,t._intl.firstPageLabel)}}function at(i,g){if(i&1){let t=GE();Ii(0,`button`,21),$p(`click`,function(){wu(t);let e=XE();return Tu(e._buttonClicked(e.getNumberOfPages()-1,e._nextButtonsDisabled()))}),Lu(),Ii(1,`svg`,8),Pp(2,`path`,22),Vc()()}if(i&2){let t=XE();Lp(`matTooltip`,t._intl.lastPageLabel)(`matTooltipDisabled`,t._nextButtonsDisabled())(`disabled`,t._nextButtonsDisabled())(`tabindex`,t._nextButtonsDisabled()?-1:null),kp(`aria-label`,t._intl.lastPageLabel)}}var nt=(()=>{class i{changes=new K;itemsPerPageLabel=`Items per page:`;nextPageLabel=`Next page`;previousPageLabel=`Previous page`;firstPageLabel=`First page`;lastPageLabel=`Last page`;getRangeLabel=(t,a,e)=>{if(e==0||a==0)return`0 of ${e}`;e=Math.max(e,0);let s=t*a,z=s<e?Math.min(s+a,e):s+a;return`${s+1} \u2013 ${z} of ${e}`};static ɵfac=function(a){return new(a||i)};static ɵprov=Gt({token:i,factory:i.ɵfac})}return i})();var ot=50;var rt=new S(`MAT_PAGINATOR_DEFAULT_OPTIONS`);var st=(()=>{class i{_intl=D(nt);_changeDetectorRef=D(r0);_formFieldAppearance;_pageSizeLabelId=D(Jt).getId(`mat-paginator-page-size-label-`);_intlChanges;_isInitialized=!1;_initializedStream=new kn(1);color;get pageIndex(){return this._pageIndex}set pageIndex(t){this._pageIndex=Math.max(t||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(t){this._length=t||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(t){this._pageSize=Math.max(t||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(t){this._pageSizeOptions=(t||[]).map(a=>a0(a,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new $e;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let t=this._intl,a=D(rt,{optional:!0});if(this._intlChanges=t.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),a){let{pageSize:e,pageSizeOptions:s,hidePageSize:z,showFirstLastButtons:C}=a;e!=null&&(this._pageSize=e),s!=null&&(this._pageSizeOptions=s),z!=null&&(this.hidePageSize=z),C!=null&&(this.showFirstLastButtons=C)}this._formFieldAppearance=a?.formFieldAppearance||`outline`}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let t=this.getNumberOfPages()-1;return this.pageIndex<t&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(t){let a=this.pageIndex*this.pageSize,e=this.pageIndex;this.pageIndex=Math.floor(a/t)||0,this.pageSize=t,this._emitPageEvent(e)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:ot),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((t,a)=>t-a),this._changeDetectorRef.markForCheck())}_emitPageEvent(t){this.page.emit({previousPageIndex:t,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(t){let a=this.pageIndex;t!==a&&(this.pageIndex=t,this._emitPageEvent(a))}_buttonClicked(t,a){a||this._navigate(t)}static ɵfac=function(a){return new(a||i)};static ɵcmp=dE({type:i,selectors:[[`mat-paginator`]],hostAttrs:[`role`,`group`,1,`mat-mdc-paginator`],inputs:{color:`color`,pageIndex:[2,`pageIndex`,`pageIndex`,a0],length:[2,`length`,`length`,a0],pageSize:[2,`pageSize`,`pageSize`,a0],pageSizeOptions:`pageSizeOptions`,hidePageSize:[2,`hidePageSize`,`hidePageSize`,s0],showFirstLastButtons:[2,`showFirstLastButtons`,`showFirstLastButtons`,s0],selectConfig:`selectConfig`,disabled:[2,`disabled`,`disabled`,s0]},outputs:{page:`page`},exportAs:[`matPaginator`],decls:14,vars:14,consts:[[`selectRef`,``],[1,`mat-mdc-paginator-outer-container`],[1,`mat-mdc-paginator-container`],[1,`mat-mdc-paginator-page-size`],[1,`mat-mdc-paginator-range-actions`],[`aria-atomic`,`true`,`aria-live`,`polite`,`role`,`status`,1,`mat-mdc-paginator-range-label`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-first`,3,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-previous`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`viewBox`,`0 0 24 24`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-paginator-icon`],[`d`,`M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-next`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-last`,3,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`aria-hidden`,`true`,1,`mat-mdc-paginator-page-size-label`],[1,`mat-mdc-paginator-page-size-select`,3,`appearance`,`color`],[1,`mat-mdc-paginator-page-size-value`],[`hideSingleSelectionIndicator`,``,3,`selectionChange`,`value`,`disabled`,`aria-labelledby`,`panelClass`,`disableOptionCentering`],[3,`value`],[1,`mat-mdc-paginator-touch-target`,3,`click`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-first`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-last`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z`]],template:function(a,e){a&1&&(Ii(0,`div`,1)(1,`div`,2),PE(2,et,5,4,`div`,3),Ii(3,`div`,4)(4,`div`,5),SD(5),Vc(),PE(6,it,3,5,`button`,6),Ii(7,`button`,7),$p(`click`,function(){return e._buttonClicked(e.pageIndex-1,e._previousButtonsDisabled())}),Lu(),Ii(8,`svg`,8),Pp(9,`path`,9),Vc()(),Pu(),Ii(10,`button`,10),$p(`click`,function(){return e._buttonClicked(e.pageIndex+1,e._nextButtonsDisabled())}),Lu(),Ii(11,`svg`,8),Pp(12,`path`,11),Vc()(),PE(13,at,3,5,`button`,12),Vc()()()),a&2&&(kv(2),FE(e.hidePageSize?-1:2),kv(3),qc(` `,e._intl.getRangeLabel(e.pageIndex,e.pageSize,e.length),` `),kv(),FE(e.showFirstLastButtons?6:-1),kv(),Lp(`matTooltip`,e._intl.previousPageLabel)(`matTooltipDisabled`,e._previousButtonsDisabled())(`disabled`,e._previousButtonsDisabled())(`tabindex`,e._previousButtonsDisabled()?-1:null),kp(`aria-label`,e._intl.previousPageLabel),kv(3),Lp(`matTooltip`,e._intl.nextPageLabel)(`matTooltipDisabled`,e._nextButtonsDisabled())(`disabled`,e._nextButtonsDisabled())(`tabindex`,e._nextButtonsDisabled()?-1:null),kp(`aria-label`,e._intl.nextPageLabel),kv(3),FE(e.showFirstLastButtons?13:-1))},dependencies:[Tt,vi,j,mo,oi],styles:[`.mat-mdc-paginator {
  display: block;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-paginator-container-text-color, var(--%NS%mat-sys-on-surface));
  background-color: var(--%NS%mat-paginator-container-background-color, var(--%NS%mat-sys-surface));
  font-family: var(--%NS%mat-paginator-container-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-paginator-container-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-paginator-container-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-paginator-container-text-weight, var(--%NS%mat-sys-body-small-weight));
  letter-spacing: var(--%NS%mat-paginator-container-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  --%NS%mat-form-field-container-height: var(--%NS%mat-paginator-form-field-container-height, 40px);
  --%NS%mat-form-field-container-vertical-padding: var(--%NS%mat-paginator-form-field-container-vertical-padding, 8px);
}
.mat-mdc-paginator .mat-mdc-select-value {
  font-size: var(--%NS%mat-paginator-select-trigger-text-size, var(--%NS%mat-sys-body-small-size));
}
.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper {
  display: none;
}
.mat-mdc-paginator .mat-mdc-select {
  line-height: 1.5;
}

.mat-mdc-paginator-outer-container {
  display: flex;
}

.mat-mdc-paginator-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  flex-wrap: wrap;
  width: 100%;
  min-height: var(--%NS%mat-paginator-container-size, 56px);
}

.mat-mdc-paginator-page-size {
  display: flex;
  align-items: baseline;
  margin-right: 8px;
}
[dir=rtl] .mat-mdc-paginator-page-size {
  margin-right: 0;
  margin-left: 8px;
}

.mat-mdc-paginator-page-size-label {
  margin: 0 4px;
}

.mat-mdc-paginator-page-size-select {
  margin: 0 4px;
  width: var(--%NS%mat-paginator-page-size-select-width, 84px);
}

.mat-mdc-paginator-range-label {
  margin: 0 32px 0 24px;
}

.mat-mdc-paginator-range-actions {
  display: flex;
  align-items: center;
}

.mat-mdc-paginator-icon {
  display: inline-block;
  width: 28px;
  fill: var(--%NS%mat-paginator-enabled-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon {
  fill: var(--%NS%mat-paginator-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
[dir=rtl] .mat-mdc-paginator-icon {
  transform: rotate(180deg);
}

@media (forced-colors: active) {
  .mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,
  .mat-mdc-paginator-icon {
    fill: currentColor;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button {
    outline: solid 1px;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled] {
    color: GrayText;
  }
}
.mat-mdc-paginator-touch-target {
  display: var(--%NS%mat-paginator-touch-target-display, block);
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--%NS%mat-paginator-page-size-select-width, 84px);
  height: var(--%NS%mat-paginator-page-size-select-touch-target-height, 48px);
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
`],encapsulation:2})}return i})();var It=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=pE({type:i});static ɵinj=Kl({imports:[Vr,Si,Tn,st]})}return i})();export{st as n,It as t};