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
                <dd> ------</dd>
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