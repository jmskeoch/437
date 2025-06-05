import{r as g,i as s,O as y,e as O,x as d,a,b as o,d as b,s as S,_ as P,h as $}from"./state-CgjjhgB9.js";var C=Object.defineProperty,m=(e,r,t,l)=>{for(var n=void 0,i=e.length-1,u;i>=0;i--)(u=e[i])&&(n=u(r,t,n)||n);return n&&C(r,t,n),n};class c extends s{constructor(){super(),this._authObserver=new y(this,"session:auth"),this.loggedIn=!1}renderSignOutButton(){return d`
    <button
      @click=${r=>{O.relay(r,"auth:message",["auth/signout"])}}
    >
      Sign Out
    </button>
  `}renderSignInButton(){return d`
            <a href="../login.html">
                Sign In…
            </a>
        `}render(){return d`
                <div>
                    ${this.loggedIn?this.renderSignOutButton():this.renderSignInButton()}
                    Hello, ${this.userid||"slacker"}
                </div>
            `}get authorization(){var r;return((r=this._user)==null?void 0:r.authenticated)&&{Authorization:`Bearer ${this._user.token}`}}connectedCallback(){super.connectedCallback(),this._authObserver.observe(r=>{this._user=r.user}),this._authObserver.observe(r=>{const{user:t}=r;t&&t.authenticated?(this.loggedIn=!0,this.userid=t.username):(this.loggedIn=!1,this.userid=void 0)})}}m([g()],c.prototype,"loggedIn");m([g()],c.prototype,"userid");class I extends s{render(){return d`
            <section class="resources-container">
                <h1> RESOURCES </h1>
                <dl class="resources">
                    <dt> KNOWN ANCHOR LIST</dt>
                    <dd><a href="/anchors"> Anchors</a></dd>

                    <dt> CERTIFIED TECHNICIANS</dt>
                    <dd><a href="/rat"> Rope Access Technician</a></dd>

                    <dt> LOCATION INFO</dt>
                    <dd><a href="/location"> Locations</a></dd>
                </dl>
            </section>
            <img src="/assets/highline_main.JPG" alt="highline front"
                 style="width:60%; justify-self: end; align-self: start;">
    `}css(){return a``}}var h=Object.freeze,E=Object.defineProperty,A=(e,r)=>h(E(e,"raw",{value:h(e.slice())})),v;class j extends s{render(){return d(v||(v=A([`
            <body>
            <img/>
            <p> Static Side: </p>
            <dl>
                <dt> Type</dt>
                <dd> Bolts</dd>

                <dt> Quantity</dt>
                <dd> 3</dd>

                <dt> Rope Access Needs</dt>
                <dd> Bunny Figure-8</dd>
            </dl>
            <script src="/main.js"><\/script>
            </body>
    `])))}css(){return a``}}var p=Object.freeze,N=Object.defineProperty,T=(e,r)=>p(N(e,"raw",{value:p(e.slice())})),f;class x extends s{render(){return d(f||(f=T([`
            <body>
            <img />
            <dl>
                <dt> Name </dt>
                <dd> Adan Shaw </dd>

                <dt> Rig Owner? (Y/N) </dt>
                <dd> Y </dd>

                <dt> Experience </dt>
                <dd> 2 years </dd>

                <dt> Crew </dt>
                <dd> SLO Slack </dd>
            </dl>
            <script src="/main.js"> <\/script>
            </body>
    `])))}css(){return a``}}var w=Object.freeze,z=Object.defineProperty,B=(e,r)=>w(z(e,"raw",{value:w(e.slice())})),_;class R extends s{render(){return d(_||(_=B([`
            <body>
            <dl>
                <dt> Country</dt>
                <dd> USA</dd>

                <dt> Region/State</dt>
                <dd> California</dd>

                <dt> County</dt>
                <dd> San Luis Obispo</dd>

                <dt> City/Town</dt>
                <dd> Pismo Beach</dd>

                <dt> Title</dt>
                <dd> Ballstrocity @ Pirate's Cove</dd>

                <dt> Coordinates</dt>
                <dd> ------</dd>
            </dl>
            <script src="/main.js"><\/script>
            </body>
    `])))}css(){return a``}}const L={};function k(e,r,t){switch(e[0]){case"profile/select":F(e[1],t).then(n=>r(i=>({...i,profile:n})));break;case"profile/save":H({userid:e[1].userid,profile:e[1].profile},t).then(n=>r(i=>({...i,profile:n}))).then(()=>{const{onSuccess:n}=e[1];n&&n()}).catch(n=>{const{onFailure:i}=e[1];i&&i(n)});break;default:let l;throw new Error(`Unhandled Auth message "${l}"`)}}function F(e,r){return fetch(`/api/riglog/${e.userid}`,{headers:o.headers(r)}).then(t=>{if(t.status===200)return t.json()}).then(t=>{if(t)return console.log("Profile:",t),t})}function H(e,r){return fetch(`/api/travelers/${e.userid}`,{method:"PUT",headers:{"Content-Type":"application/json",...o.headers(r)},body:JSON.stringify(e.profile)}).then(t=>{if(t.status===200)return t.json();throw new Error(`Failed to save profile for ${e.userid}`)}).then(t=>{if(t)return t})}const U=[{path:"/",redirect:"/app"},{path:"/login",redirect:"login.html"},{path:"/app",view:()=>d`<home-view></home-view>`},{path:"/anchors",view:()=>d`<anchors-view></anchors-view>`},{path:"/rat",view:()=>d`<rat-view></rat-view>`},{path:"/location",view:()=>d`<location-view></location-view>`}];b({"rig-header":c,"home-view":I,"anchors-view":j,"rat-view":x,"location-view":R,"mu-auth":o.Provider,"mu-history":$.Provider,"mu-switch":class extends P.Element{constructor(){super(U,"riglog:history","session:auth")}},"mu-store":class extends S.Provider{constructor(){super(k,L,"session:auth")}}});b({"blz-header":c,"mu-auth":o.Provider});
