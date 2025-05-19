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

function create(json: Session): Promise<Session> {
	const t = new SessionModel(json);
	return t.save();
}

function update(
	date: String,
	session: Session
): Promise<Session> {
	return SessionModel.findOneAndUpdate({ date }, session, {
		new: true
	}).then((updated) => {
		if (!updated) throw `${date} not updated`;
		else return updated as Session;
	});
}

function remove(userid: String): Promise<void> {
	return SessionModel.findOneAndDelete({ userid }).then(
		(deleted) => {
			if (!deleted) throw `${userid} not deleted`;
		}
	);
}

export default {index, get, create, update, remove};
