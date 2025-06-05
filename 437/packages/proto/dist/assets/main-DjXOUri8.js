import{i as d,O as l,e as g,x as i,d as v,a as c}from"./lit-element-Bh8ygNlb.js";import{r as o}from"./state-BU4MZKlO.js";var f=Object.defineProperty,h=(s,e,t,b)=>{for(var r=void 0,n=s.length-1,a;n>=0;n--)(a=s[n])&&(r=a(e,t,r)||r);return r&&f(e,t,r),r};class u extends d{constructor(){super(),this._authObserver=new l(this,"session:auth"),this.loggedIn=!1}renderSignOutButton(){return i`
    <button
      @click=${e=>{g.relay(e,"auth:message",["auth/signout"])}}
    >
      Sign Out
    </button>
  `}renderSignInButton(){return i`
    <a href="/login.html">
      Sign In…
    </a>
  `}render(){return i`
                <div>
                    ${this.loggedIn?this.renderSignOutButton():this.renderSignInButton()}
                    Hello, ${this.userid||"slacker"}
                </div>
            `}get authorization(){var e;return((e=this._user)==null?void 0:e.authenticated)&&{Authorization:`Bearer ${this._user.token}`}}connectedCallback(){super.connectedCallback(),this._authObserver.observe(e=>{this._user=e.user}),this._authObserver.observe(e=>{const{user:t}=e;t&&t.authenticated?(this.loggedIn=!0,this.userid=t.username):(this.loggedIn=!1,this.userid=void 0)})}}h([o()],u.prototype,"loggedIn");h([o()],u.prototype,"userid");v({"rig-header":u,"mu-auth":c.provider});
