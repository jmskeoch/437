import{i as m,x as d,b as l,d as f,a as b}from"./lit-element-Bh8ygNlb.js";import{r as p,n as u}from"./state-BU4MZKlO.js";import{r as g}from"./reset.css-CUZ4bYjz.js";var v=Object.defineProperty,i=(h,r,t,o)=>{for(var e=void 0,a=h.length-1,c;a>=0;a--)(c=h[a])&&(e=c(r,t,e)||e);return e&&v(r,t,e),e};const n=class n extends m{constructor(){super(...arguments),this.formData={},this.redirect="/"}get canSubmit(){return!!(this.api&&this.formData.username&&this.formData.password)}render(){return d`
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
        `}handleChange(r){const t=r.target,o=t==null?void 0:t.name,e=t==null?void 0:t.value,a=this.formData;switch(o){case"username":this.formData={...a,username:e};break;case"password":this.formData={...a,password:e};break}}handleSubmit(r){r.preventDefault(),this.canSubmit&&fetch((this==null?void 0:this.api)||"",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.formData)}).then(t=>{if(t.status!==200)throw"Login failed";return t.json()}).then(t=>{const{token:o}=t,e=new CustomEvent("auth:message",{bubbles:!0,composed:!0,detail:["auth/signin",{token:o,redirect:this.redirect}]});console.log("dispatching message",e),this.dispatchEvent(e)}).catch(t=>{console.log(t),this.error=t.toString()})}};n.styles=[g.styles,l`
      .error:not(:empty) {
        color: var(--color-background-page);
        border: 1px solid var(--color-accent);
        padding: var(--size-spacing-large);
      }
  `];let s=n;i([p()],s.prototype,"formData");i([u()],s.prototype,"api");i([u()],s.prototype,"redirect");i([p()],s.prototype,"error");f({"mu-auth":b.Provider,"login-form":s});
