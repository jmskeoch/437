import {Schema, model } from "mongoose";
import { Session } from "../models/session";

const SessionSchema = new Schema<Session>(
	{
		date: String,
		weather: String,
		damage: String,
		link: String

	},
	{ collection: "rig_sessions" }

);

const SessionModel = model<Session>(
	"Profile",
	SessionSchema
);

function index(): Promise<Session[]> {
	return SessionModel.find();
}

function get(date: String): Promise<Session> {
	return SessionModel.find({ date })
	    .then((list) => list[0])
	    .catch((err) => {
		throw `${date} Not Found`;
	    });
}

export default {index, get};
