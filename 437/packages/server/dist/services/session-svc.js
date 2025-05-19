"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var session_svc_exports = {};
__export(session_svc_exports, {
  default: () => session_svc_default
});
module.exports = __toCommonJS(session_svc_exports);
var import_mongoose = require("mongoose");
const SessionSchema = new import_mongoose.Schema(
  {
    date: String,
    weather: String,
    damage: String,
    link: String
  },
  { collection: "rig_sessions" }
);
const SessionModel = (0, import_mongoose.model)(
  "Profile",
  SessionSchema
);
function index() {
  return SessionModel.find();
}
function get(date) {
  return SessionModel.find({ date }).then((list) => list[0]).catch((err) => {
    throw `${date} Not Found`;
  });
}
function create(json) {
  const t = new SessionModel(json);
  return t.save();
}
function update(date, session) {
  return SessionModel.findOneAndUpdate({ date }, session, {
    new: true
  }).then((updated) => {
    if (!updated) throw `${date} not updated`;
    else return updated;
  });
}
function remove(userid) {
  return SessionModel.findOneAndDelete({ userid }).then(
    (deleted) => {
      if (!deleted) throw `${userid} not deleted`;
    }
  );
}
var session_svc_default = { index, get, create, update, remove };
