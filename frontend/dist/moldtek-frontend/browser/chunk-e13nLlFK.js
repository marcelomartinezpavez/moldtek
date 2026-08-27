import{$ as Kl,Ar as vD,Bt as Vc,Gt as XE,H as Ii,Ht as Vp,Jn as kv,K as Jp,L as Ho,Ln as iD,Tt as SD,U as Ir,_ as DI,_t as Pu,ar as oD,cr as pE,et as Kp,ft as PE,g as D,gn as dE,gt as Pp,i as $p,it as Lu,j as Gp,kt as TI,nt as Lp,on as a0,or as oh,ot as Np,qn as kp,sn as aD,w as FE,wt as S,yt as QD}from"./chunk-DRbxCHDs.js";import{t as An}from"./chunk-D3wrYIjV.js";import{o as ue,t as m}from"./main-6BLW3XEA.js";import{B as q,I as ls,K as to,L as mo,R as ms,b as Vr,f as Hr}from"./chunk-DgCQWjfe.js";import{E as _r,G as zn,I as ut,O as br,U as yr,c as Fn,j as gr,k as di,z as vr}from"./chunk-Dkbp0wid.js";import{c as hn,f as un,h as ye$1,l as hr,m as we$1,p as ur,s as Tt,t as Bt,u as pn}from"./chunk-BX0WftNZ.js";import{i as I,o as T,r as F,t as B,u as z}from"./chunk-zBI-QTz9.js";var we=[`determinateSpinner`];function xe(n,c){if(n&1&&(Lu(),Ii(0,`svg`,11),Pp(1,`circle`,12),Vc()),n&2){let e=XE();kp(`viewBox`,e._viewBox()),kv(),Kp(`stroke-dasharray`,e._strokeCircumference(),`px`)(`stroke-dashoffset`,e._strokeCircumference()/2,`px`)(`stroke-width`,e._circleStrokeWidth(),`%`),kp(`r`,e._circleRadius())}}var ke=new S(`mat-progress-spinner-default-options`,{providedIn:`root`,factory:()=>({diameter:be})});var be=100;var Pe=10;var ye=(()=>{class n{_elementRef=D(Ir);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor=`primary`;_determinateCircle;constructor(){let e=D(ke),r=to(),i=this._elementRef.nativeElement;this._noopAnimations=r===`di-disabled`&&!!e&&!e._forceAnimations,this.mode=i.nodeName.toLowerCase()===`mat-spinner`?`indeterminate`:`determinate`,!this._noopAnimations&&r===`reduced-motion`&&i.classList.add(`mat-progress-spinner-reduced-motion`),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode===`determinate`?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=be;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-Pe)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode===`determinate`?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static ɵfac=function(r){return new(r||n)};static ɵcmp=dE({type:n,selectors:[[`mat-progress-spinner`],[`mat-spinner`]],viewQuery:function(r,i){if(r&1&&Gp(we,5),r&2){let p;oD(p=iD())&&(i._determinateCircle=p.first)}},hostAttrs:[`role`,`progressbar`,`tabindex`,`-1`,1,`mat-mdc-progress-spinner`,`mdc-circular-progress`],hostVars:18,hostBindings:function(r,i){r&2&&(kp(`aria-valuemin`,0)(`aria-valuemax`,100)(`aria-valuenow`,i.mode===`determinate`?i.value:null)(`mode`,i.mode),vD(`mat-`+i.color),Kp(`width`,i.diameter,`px`)(`height`,i.diameter,`px`)(`--%NS%mat-progress-spinner-size`,i.diameter+`px`)(`--%NS%mat-progress-spinner-active-indicator-width`,i.diameter+`px`),Jp(`_mat-animation-noopable`,i._noopAnimations)(`mdc-circular-progress--indeterminate`,i.mode===`indeterminate`))},inputs:{color:`color`,mode:`mode`,value:[2,`value`,`value`,a0],diameter:[2,`diameter`,`diameter`,a0],strokeWidth:[2,`strokeWidth`,`strokeWidth`,a0]},exportAs:[`matProgressSpinner`],decls:14,vars:11,consts:[[`circle`,``],[`determinateSpinner`,``],[`aria-hidden`,`true`,1,`mdc-circular-progress__determinate-container`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__determinate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`,1,`mdc-circular-progress__determinate-circle`],[`aria-hidden`,`true`,1,`mdc-circular-progress__indeterminate-container`],[1,`mdc-circular-progress__spinner-layer`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-left`],[3,`ngTemplateOutlet`],[1,`mdc-circular-progress__gap-patch`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-right`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__indeterminate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`]],template:function(r,i){if(r&1&&(Np(0,xe,2,8,`ng-template`,null,0,QD),Ii(2,`div`,2,1),Lu(),Ii(4,`svg`,3),Pp(5,`circle`,4),Vc()(),Pu(),Ii(6,`div`,5)(7,`div`,6)(8,`div`,7),Vp(9,8),Vc(),Ii(10,`div`,9),Vp(11,8),Vc(),Ii(12,`div`,10),Vp(13,8),Vc()()()),r&2){let p=aD(1);kv(4),kp(`viewBox`,i._viewBox()),kv(),Kp(`stroke-dasharray`,i._strokeCircumference(),`px`)(`stroke-dashoffset`,i._strokeDashOffset(),`px`)(`stroke-width`,i._circleStrokeWidth(),`%`),kp(`r`,i._circleRadius()),kv(4),Lp(`ngTemplateOutlet`,p),kv(2),Lp(`ngTemplateOutlet`,p),kv(2),Lp(`ngTemplateOutlet`,p)}},dependencies:[An],styles:[`.mat-mdc-progress-spinner {
  --%NS%mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--%NS%mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --%NS%mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--%NS%mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--%NS%mat-progress-spinner-active-indicator-color, var(--%NS%mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2})}return n})();var Ce=(()=>{class n{static ɵfac=function(r){return new(r||n)};static ɵmod=pE({type:n});static ɵinj=Kl({imports:[q]})}return n})();function Ne(n,c){n&1&&(Ii(0,`mat-error`),SD(1,`El usuario es requerido`),Vc())}function Oe(n,c){n&1&&(Ii(0,`mat-error`),SD(1,`La contraseña es requerida`),Vc())}function Te(n,c){n&1&&Pp(0,`mat-spinner`,11)}function Ie(n,c){n&1&&SD(0,` Ingresar `)}var Se=class n{constructor(){this.fb=D(yr);this.auth=D(m);this.router=D(ue);this.notify=D(Bt);this.loading=Ho(!1);this.hidePassword=Ho(!0);this.form=this.fb.group({username:[``,ut.required],password:[``,ut.required]})}onLogin(){if(this.form.invalid)return;this.loading.set(!0);let{username:c,password:e}=this.form.value;this.auth.login({username:c,password:e}).subscribe({next:()=>this.router.navigate([`/dashboard`]),error:r=>{this.notify.error(r.message||`Credenciales incorrectas`),this.loading.set(!1)}})}static{this.ɵfac=function(e){return new(e||n)}}static{this.ɵcmp=dE({type:n,selectors:[[`app-login`]],decls:42,vars:7,consts:[[1,`login-container`],[1,`login-card`],[1,`brand`],[1,`brand-icon`],[3,`ngSubmit`,`formGroup`],[`appearance`,`outline`,1,`full-width`],[`matInput`,``,`formControlName`,`username`,`autocomplete`,`username`],[`matPrefix`,``],[`matInput`,``,`formControlName`,`password`,`autocomplete`,`current-password`,3,`type`],[`mat-icon-button`,``,`matSuffix`,``,`type`,`button`,3,`click`],[`mat-raised-button`,``,`color`,`primary`,`type`,`submit`,1,`full-width`,`login-btn`,3,`disabled`],[`diameter`,`20`,2,`display`,`inline-block`],[1,`footer-hint`]],template:function(e,r){e&1&&(Ii(0,`div`,0)(1,`mat-card`,1)(2,`mat-card-header`)(3,`div`,2)(4,`div`,3)(5,`mat-icon`),SD(6,`door_front`),Vc()(),Ii(7,`div`)(8,`h1`),SD(9,`MOLDTEK`),Vc(),Ii(10,`p`),SD(11,`Sistema de Control de Inventario`),Vc()()()(),Ii(12,`mat-card-content`)(13,`form`,4),$p(`ngSubmit`,function(){return r.onLogin()}),Ii(14,`mat-form-field`,5)(15,`mat-label`),SD(16,`Usuario`),Vc(),Pp(17,`input`,6),DI(),Ii(18,`mat-icon`,7),SD(19,`person`),Vc(),PE(20,Ne,2,0,`mat-error`),Vc(),Ii(21,`mat-form-field`,5)(22,`mat-label`),SD(23,`Contraseña`),Vc(),Pp(24,`input`,8),DI(),Ii(25,`mat-icon`,7),SD(26,`lock`),Vc(),Ii(27,`button`,9),$p(`click`,function(){return r.hidePassword.set(!r.hidePassword())}),Ii(28,`mat-icon`),SD(29),Vc()(),PE(30,Oe,2,0,`mat-error`),Vc(),Ii(31,`button`,10),PE(32,Te,1,0,`mat-spinner`,11)(33,Ie,1,0),Vc()()(),Ii(34,`mat-card-footer`)(35,`p`,12),SD(36,`Usuario por defecto: `),Ii(37,`strong`),SD(38,`admin`),Vc(),SD(39,` / `),Ii(40,`strong`),SD(41,`admin123`),Vc()()()()()),e&2&&(kv(13),Lp(`formGroup`,r.form),kv(4),TI(),kv(3),FE(r.form.get(`username`)?.hasError(`required`)&&r.form.get(`username`)?.touched?20:-1),kv(4),Lp(`type`,r.hidePassword()?`password`:`text`),TI(),kv(5),oh(r.hidePassword()?`visibility_off`:`visibility`),kv(),FE(r.form.get(`password`)?.hasError(`required`)&&r.form.get(`password`)?.touched?30:-1),kv(),Lp(`disabled`,r.loading()||r.form.invalid),kv(),FE(r.loading()?32:33))},dependencies:[br,vr,di,gr,_r,Fn,zn,B,I,F,z,T,we$1,Tt,ye$1,un,hn,pn,hr,ur,Vr,Hr,mo,ms,ls,Ce,ye],styles:[`.login-container[_ngcontent-%COMP%]{min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#1b5e20,#2e7d32,#388e3c);padding:24px}.login-card[_ngcontent-%COMP%]{width:100%;max-width:420px;border-radius:16px;overflow:hidden}.brand[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;padding:16px 0}.brand-icon[_ngcontent-%COMP%]{width:56px;height:56px;background:#2e7d32;border-radius:12px;display:flex;align-items:center;justify-content:center}.brand-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff;font-size:32px;width:32px;height:32px}.brand[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:1.5rem;color:#2e7d32;font-weight:700}.brand[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:4px 0 0;color:#0009;font-size:.85rem}.full-width[_ngcontent-%COMP%]{width:100%}.login-btn[_ngcontent-%COMP%]{height:48px;font-size:1rem;margin-top:8px}.footer-hint[_ngcontent-%COMP%]{text-align:center;color:#00000080;font-size:.8rem;margin:12px 0 8px}mat-card-content[_ngcontent-%COMP%]{padding:24px 24px 8px}`]})}};export{Se as LoginComponent};