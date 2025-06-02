import {
    define,
    Auth,
    History,
    Switch,
    Store
} from "@calpoly/mustang";
import {HeaderElement} from "./header";
import {HomeViewElement} from "./views/home-view";
import {AnchorsViewElement} from "./views/anchors-view";
import {RatViewElement} from "./views/rat-view";
import {LocationViewElement} from "./views/location-view";
import { html } from "lit";
import { Msg } from "./messages";
import { Model, init } from "./model";
import update from "./update.ts";

const routes = [
    {
        path: "/",
        redirect: "/app"
    },
    {
        path:"/app",
        view: () => html`<home-view></home-view>`
    },
    {    path: "/anchors",
        view: () => html`<anchors-view></anchors-view>`
    },
    {
        path: "/rat",
        view: () => html`<rat-view></rat-view>`
    },
    {
        path: "/location",
        view: () => html`<location-view></location-view>`
    }
];

define({
    "rig-header": HeaderElement,
    "home-view": HomeViewElement,
    "anchors-view": AnchorsViewElement,
    "rat-view": RatViewElement,
    "location-view": LocationViewElement,
    "mu-auth": Auth.Provider,
    "mu-history": History.Provider,
    "mu-switch": class AppSwitch extends Switch.Element {
        constructor() {
            super(routes, "riglog:history", "session:auth");
        }
    },
    "mu-store": class AppStore
        extends Store.Provider<Model, Msg>
    {
        constructor() {
            super(update, init, "session:auth");
        }
    }
});