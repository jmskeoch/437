import { css, html, LitElement } from "lit";

export class AnchorsViewElement extends LitElement {
    render() {
        return html`
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
            <script src="/main.js"></script>
            </body>
    `;
    }

    css() {
        return css``;
    }
    // more to come
}