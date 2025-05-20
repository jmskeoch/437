import{f as m,u as f,i as b,x as g,r as v,a as y,d as w,b as D}from"./reset.css-DkJdaEjN.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:m},S=(s=P,r,t)=>{const{kind:o,metadata:e}=t;let a=globalThis.litPropertyMetadata.get(e);if(a===void 0&&globalThis.litPropertyMetadata.set(e,a=new Map),o==="setter"&&((s=Object.create(s)).wrapped=!0),a.set(t.name,s),o==="accessor"){const{name:n}=t;return{set(i){const h=r.get.call(this);r.set.call(this,i),this.requestUpdate(n,h,s)},init(i){return i!==void 0&&this.C(n,void 0,s,i),i}}}if(o==="setter"){const{name:n}=t;return function(i){const h=this[n];r.call(this,i),this.requestUpdate(n,h,s)}}throw Error("Unsupported decorator location: "+o)};function l(s){return(r,t)=>typeof t=="object"?S(s,r,t):((o,e,a)=>{const n=e.hasOwnProperty(a);return e.constructor.createProperty(a,o),n?Object.getOwnPropertyDescriptor(e,a):void 0})(s,r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function d(s){return l({...s,state:!0,attribute:!1})}var C=Object.defineProperty,u=(s,r,t,o)=>{for(var e=void 0,a=s.length-1,n;a>=0;a--)(n=s[a])&&(e=n(r,t,e)||e);return e&&C(r,t,e),e};const p=class p extends b{constructor(){super(...arguments),this.formData={},this.redirect="/"}get canSubmit(){return!!(this.api&&this.formData.username&&this.formData.password)}render(){return g`
      <form
        @change=${r=>this.handleChange(r)}
        @submit=${r=>this.handleSubmit(r)}
      >
        <slot></slot>
        <slot name="button">
          <button
            ?disabled=${!this.canSubmit}
            type="submit">
            Login
          </button>
        </slot>
        <p class="error">${this.error}</p>
      </form>
    `}handleChange(r){const t=r.target,o=t==null?void 0:t.name,e=t==null?void 0:t.value,a=this.formData;switch(o){case"username":this.formData={...a,username:e};break;case"password":this.formData={...a,password:e};break}}handleSubmit(r){r.preventDefault(),this.canSubmit&&fetch((this==null?void 0:this.api)||"",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.formData)}).then(t=>{if(t.status!==200)throw"Login failed";return t.json()}).then(t=>{const{token:o}=t,e=new CustomEvent("auth:message",{bubbles:!0,composed:!0,detail:["auth/signin",{token:o,redirect:this.redirect}]});console.log("dispatching message",e),this.dispatchEvent(e)}).catch(t=>{console.log(t),this.error=t.toString()})}};p.styles=[v.styles,y`
      .error:not(:empty) {
        color: var(--color-background-page);
        border: 1px solid var(--color-accent);
        padding: var(--size-spacing-large);
      }
  `];let c=p;u([d()],c.prototype,"formData");u([l()],c.prototype,"api");u([l()],c.prototype,"redirect");u([d()],c.prototype,"error");w({"mu-auth":D.Provider,"login-form":c});
