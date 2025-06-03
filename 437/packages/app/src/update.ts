import { Auth, Update } from "@calpoly/mustang";
import { Msg } from "./messages";
import { Model } from "./model";
import { Session } from "../../server/src/models/session"

export default function update(
    message: Msg,
    apply: Update.ApplyMap<Model>,
    user: Auth.User
) {
    switch (message[0]) {
        case "profile/select":
            loadProfile(message[1], user)
                .then((profile) =>
                    apply((model) =>
                        ({ ...model, profile })
                    )
                );
            break;
        case "profile/save":
            saveProfile({userid: message[1].userid, profile: message[1].profile}, user)
                .then((profile) =>
                    apply((model) => ({ ...model, profile }))
                )
                .then(() => {
                    const { onSuccess } = message[1];
                    if (onSuccess) onSuccess();
                })
                .catch((error: Error) => {
                    const { onFailure } = message[1];
                    if (onFailure) onFailure(error);
                });
            break;
            // MORE CASES HERE
        default:
            let unhandled;
            throw new Error(`Unhandled Auth message "${unhandled}"`);
    }
}


function loadProfile(
    payload: { userid: string },
    user: Auth.User
) {
    return fetch(`/api/riglog/${payload.userid}`, {
        headers: Auth.headers(user)
    })
        .then((response: Response) => {
            if (response.status === 200) {
                return response.json();
            }
            return undefined;
        })
        .then((json: unknown) => {
            if (json) {
                console.log("Profile:", json);
                return json as Session;
            }
        });
}

function saveProfile(
    msg: {
        userid: string;
        profile: Session;
    },
    user: Auth.User
) {
    return fetch(`/api/travelers/${msg.userid}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            ...Auth.headers(user)
        },
        body: JSON.stringify(msg.profile)
    })
        .then((response: Response) => {
            if (response.status === 200) return response.json();
            else
                throw new Error(
                    `Failed to save profile for ${msg.userid}`
                );
        })
        .then((json: unknown) => {
            if (json) return json as Session;
            return undefined;
        });
}