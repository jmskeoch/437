import { html, LitElement } from "lit";
import { property, state }    from 'lit/decorators.js';

interface Session {
    date: string;
    weather: string;
    damage: string;
    link: string;
}

export class SessionsElement extends LitElement {
    constructor() {
        super();
    }

    @property()
    src?: string;

    @state()
    sessions: Array<Session> = [];

    renderSessions(sessions: Session) {
        return html`
            <rig-sessions>
                ${sessions.date}
                ${sessions.weather}
                ${sessions.damage}
            </rig-sessions>
        `
    }

    hydrate(src: string) {
        fetch(src)
            .then(res => res.json())
            .then((json: object) => {
                if(json) {
                    // store the data as @state
                    const rigSessions = json as {
                        sessions: Array<Object>
                    };
                    this.sessions =
                        rigSessions.sessions.map(Object);
                }
            })
    }

    connectedCallback() {
        super.connectedCallback();
        if (this.src) this.hydrate(this.src);
    }
}
