import{a as l,i as p,x as m,r as d,n as u,d as f,b}from"./state-CgjjhgB9.js";const g=l`
  * {
    margin: 0;
    box-sizing: border-box;
  }
  img {
    max-width: 100%;
  }
  ul,
  menu {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
  }
`,v={styles:g};var y=Object.defineProperty,i=(c,s,t,o)=>{for(var e=void 0,r=c.length-1,h;r>=0;r--)(h=c[r])&&(e=h(s,t,e)||e);return e&&y(s,t,e),e};const n=class n extends p{constructor(){super(...arguments),this.formData={},this.redirect="/"}get canSubmit(){return!!(this.api&&this.formData.username&&this.formData.password)}render(){return m`
            <form
                    @input=${s=>this.handleChange(s)}
                    @submit=${s=>this.handleSubmit(s)}
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
        `}handleChange(s){const t=s.target,o=t==null?void 0:t.name,e=t==null?void 0:t.value,r=this.formData;switch(o){case"username":this.formData={...r,username:e};break;case"password":this.formData={...r,password:e};break}}handleSubmit(s){s.preventDefault(),this.canSubmit&&fetch((this==null?void 0:this.api)||"",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.formData)}).then(t=>{if(t.status!==200)throw"Login failed";return t.json()}).then(t=>{const{token:o}=t,e=new CustomEvent("auth:message",{bubbles:!0,composed:!0,detail:["auth/signin",{token:o,redirect:this.redirect}]});console.log("dispatching message",e),this.dispatchEvent(e)}).catch(t=>{console.log(t),this.error=t.toString()})}};n.styles=[v.styles,l`
      .error:not(:empty) {
        color: var(--color-background-page);
        border: 1px solid var(--color-accent);
        padding: var(--size-spacing-large);
      }
  `];let a=n;i([d()],a.prototype,"formData");i([u()],a.prototype,"api");i([u()],a.prototype,"redirect");i([d()],a.prototype,"error");f({"mu-auth":b.Provider,"login-form":a});
