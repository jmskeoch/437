import {html, LitElement} from "lit";
import {Auth, Events, Observer} from "@calpoly/mustang";
import {state} from "lit/decorators.js";

export class HeaderElement extends LitElement {
    constructor() {
        super();
    }

    renderSignOutButton() {
        return html`
    <button
      @click=${(e: UIEvent) => {
            Events.relay(e, "auth:message", ["auth/signout"])
        }}
    >
      Sign Out
    </button>
  `;
    }

    renderSignInButton() {
        return html`
            <a href="../login.html">
                Sign In…
            </a>
        `;
    }

    override render() {
        return html`
                <div>
                    ${this.loggedIn ?
            this.renderSignOutButton() :
            this.renderSignInButton()
        }
                    Hello, ${this.userid || "slacker"}
                </div>
            `;
    }

    _authObserver = new Observer<Auth.Model>(this, "session:auth");
    _user?: Auth.User;

    get authorization() {
        return (
            this._user?.authenticated && {
                Authorization:
                    `Bearer ${(this._user as Auth.AuthenticatedUser).token}`

            }
        );
    }

    @state()
    loggedIn = false;

    @state()
    userid?: string;

    connectedCallback() {
        super.connectedCallback();
        this._authObserver.observe((auth: Auth.Model) => {
            this._user= auth.user;
        });

        this._authObserver.observe((auth: Auth.Model) => {
            const { user } = auth;

            if (user && user.authenticated ) {
                this.loggedIn = true;
                this.userid = user.username;

                // {FETCH HERE}

            } else {
                this.loggedIn = false;
                this.userid = undefined;
            }
        });
    }

}