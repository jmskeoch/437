import { css, html, LitElement } from "lit";

export class LocationViewElement extends LitElement {
    render() {
        return html`
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
                <dd> N 35° 10.537′, W 120° 42.725′</dd>
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