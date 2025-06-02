import{i as u,O as l,x as h,d as v,a as c}from"./lit-element-C8xrrTpq.js";import{r as n}from"./state-Cbw7rNgx.js";var f=Object.defineProperty,o=(t,s,e,p)=>{for(var r=void 0,i=t.length-1,d;i>=0;i--)(d=t[i])&&(r=d(s,e,r)||r);return r&&f(s,e,r),r};class a extends u{constructor(){super(),this._authObserver=new l(this,"session:auth"),this.loggedIn=!1}render(){return h`
                <div>
                    Hello, ${this.userid||"slacker"}
                </div
            `}connectedCallback(){super.connectedCallback(),this._authObserver.observe(s=>{const{user:e}=s;e&&e.authenticated?(this.loggedIn=!0,this.userid=e.username):(this.loggedIn=!1,this.userid=void 0)})}}o([n()],a.prototype,"loggedIn");o([n()],a.prototype,"userid");v({"rig-header":a,"mu-auth":c.provider});
