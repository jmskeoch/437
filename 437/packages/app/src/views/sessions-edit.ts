import { define, Form, View, History } from "@calpoly/mustang";
import { html } from "lit";
import {property, state} from "lit/decorators.js";
import { Msg } from "../messages";
import { Model } from "../model";
import {Session} from "../../../server/src/models/session.ts";

export class SessionEditElement extends View<Model, Msg> {
    static uses = define({
        "mu-form": Form.Element,
    });

    @property()
    userid?: string;

    handleSubmit(event: Form.SubmitEvent<Session>) {
        this.dispatchMessage([
            "profile/save",
            {
                userid: event.detail,
                profile: event.detail,
                onSuccess: () =>
                    History.dispatch(this, "history/navigate", {
                        href: `/app/traveler/${this.userid}`
                    }),
                onFailure: (error: Error) =>
                    console.log("ERROR:", error)
            }
        ]);
    }

    @state()
    get profile(): Session | undefined {
        return this.model.session;
    }

    render() {
        return html`
      <main class="page">
        <mu-form
          .init=${this.profile}
          @mu-form:submit=${this.handleSubmit}>
          <!-- Form inputs -->
        </mu-form>
      </main>`;
  }
}