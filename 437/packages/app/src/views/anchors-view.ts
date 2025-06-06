import { css, html, LitElement } from "lit";

export class AnchorsViewElement extends LitElement {
    render() {
        return html`
            <body>
            <p> STATIC </p>
            <dl>
                <dt> Type</dt>
                <dd> Bolts</dd>

                <dt> Rope Access Needs</dt>
                <dd> Bunny Figure-8</dd>
            </dl>

            <p> TENSION </p>
            <dl>
                <dt> Type</dt>
                <dd> Bolts</dd>

                <dt> Rope Access Needs</dt>
                <dd> Single Strand Abseil </dd>
            </dl>
            <script src="/main.js"></script>
            </body>
    `;
    }

    css() {
        return css`
        `;
    }
}