import { View } from "@calpoly/mustang";
import { html } from "lit";
import {property, state} from "lit/decorators.js";
import { Session } from "../../../server/src/models/session"
import { Msg } from "../messages";
import { Model } from "../model";

export class SessionsViewElement extends View<Model, Msg> {
    @property({attribute: "user-id"})
    userid?: string;

    @state()
    get profile(): Session | undefined {
        return this.model.session;
    }

    constructor() {
        super("blazing:model");
    }

    render() {
        return html`
      
    `;
    }

    attributeChangedCallback(
        name: string,
        oldValue: string,
        newValue: string
    ) {
        super.attributeChangedCallback(name, oldValue, newValue);
        if (
            name === "user-id" &&
            oldValue !== newValue &&
            newValue
        ) {
            this.dispatchMessage([
                "profile/select",
                { userid: newValue }
            ]);
        }
    }
}