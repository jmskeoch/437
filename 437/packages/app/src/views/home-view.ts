import { css, html, LitElement } from "lit";

export class HomeViewElement extends LitElement {
    render() {
        return html`
            <section class="rig">
                <div class="resources-container">
                    
                <h1> RESOURCES </h1>
                <dl class="resources">
                    <dt> KNOWN ANCHOR LIST</dt>
                    <dd><a href="/anchors"> Anchors</a></dd>

                    <dt> CERTIFIED TECHNICIANS</dt>
                    <dd><a href="/rat"> Rope Access Technician</a></dd>

                    <dt> LOCATION INFO</dt>
                    <dd><a href="/location"> Locations</a></dd>
                </dl>
                </div>

                <div></div>
                
                <div>
                </div>
                
            </section>
    `;
    }

    css() {
        return css`
            padding: var(--text-padding);
        `;
    }
}