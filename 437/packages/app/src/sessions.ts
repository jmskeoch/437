import { html, css, LitElement } from "lit";
import reset from "../public/styles/reset.css.ts";

export class SessionsElement extends LitElement {
    constructor() {
        super();
    }

    override render() {
        return html`
                <dl>
                <dt> Date </dt>
                <dd><slot name="date">date</dd>

                <dt> Weather </dt>
                <dd><slot name="weather">weather</dd>

                <dt> Damage </dt>
                <dd><slot name="damage">dmg</dd>

                <dt> Rigged By </dt>
                <dd><a href="/rat.html"> Adan Shaw </a></dd>
                </dl>
            `;
    }

    static styles = [
        reset.styles,
        css`
        dl {
            max-width: 400px;
            margin: 2rem auto;
            padding: 1rem;
            background-color: var(--color-background-page);
            border-radius: 8px;
        }

        dt {
            font-weight: bold;
            margin-top: 1rem;
        }

        dd {
            margin: 0 0 1rem 0;
            padding-left: 1rem;
        }
    `];
}