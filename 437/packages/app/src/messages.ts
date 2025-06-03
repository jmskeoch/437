import { Session } from "../../server/src/models/session"

export type Msg =
    ["session/date", { date: Session }]
    | ["profile/select", { userid: string }]
    | [
    "profile/save",
    {
        userid: string;
        profile: Session;
        onSuccess?: () => void;
        onFailure?: (err: Error) => void;
    }
    ];