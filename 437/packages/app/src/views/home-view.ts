import { css, html, LitElement } from "lit";

export class HomeViewElement extends LitElement {
    render() {
        return html`
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
    `;
    }

    css() {
        return css``;
    }
    // more to come
}