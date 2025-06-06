import { html, LitElement } from "lit";
import { property, state }    from 'lit/decorators.js';

interface Session {
    date: string;
    weather: string;
    damage: string;
    link: string;
}

export class SessionsWrapper extends LitElement {
    constructor() {
        super();
    }

    @property()
    src?: string;

    @state()
    sessions: Array<Session> = [];



    renderSessions(sessions: Session) {
        return html`
            <div>
                Date: ${sessions.date} ><br />
                Weather: ${sessions.weather}<br />
                Damage: ${sessions.damage}<br />
                <hr />
            </div>
        `;
    }

    willUpdate(changedProps: Map<string, any>) {
        if (changedProps.has('src') && this.src) {
            this.hydrate(this.src);
        }
    }

    hydrate(src: string) {
        fetch(src)
            .then(res => res.json())
            .then((json: Record<string, Session>) => {
                this.sessions = Object.values(json);
            })
            .catch(err => console.error('Failed to load sessions:', err));
    }

    connectedCallback() {
        super.connectedCallback();
        if (this.src) this.hydrate(this.src);
    }

    render() {
        return html`
            ${this.sessions.map(session => this.renderSessions(session))}
        `;
    }
}
