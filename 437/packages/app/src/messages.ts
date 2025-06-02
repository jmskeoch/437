import { Session } from "../../server/src/models/session"

export type Msg =
    ["session/date", { date: Session }]
    | ["profile/save", { userid: string }]
    | ["profile/select", { userid: string }];