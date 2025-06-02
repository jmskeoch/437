import { css, html, LitElement } from "lit";

export class RatViewElement extends LitElement {
    render() {
        return html`
            <body>
            <img />
            <dl>
                <dt> Name </dt>
                <dd> Adan Shaw </dd>

                <dt> Rig Owner? (Y/N) </dt>
                <dd> Y </dd>

                <dt> Experience </dt>
                <dd> 2 years </dd>

                <dt> Crew </dt>
                <dd> SLO Slack </dd>
            </dl>
            <script src="/main.js"> </script>
            </body>
    `;
    }

    css() {
        return css``;
    }
    // more to come
}