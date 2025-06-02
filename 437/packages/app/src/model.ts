import { Session } from "../../server/src/models/session"
export interface Model {
    session?: Session;
}

export const init: Model = {};