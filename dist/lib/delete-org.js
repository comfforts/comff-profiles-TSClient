"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrg = void 0;
const profiles_pb_1 = require("./proto/_gen/profiles_pb");
const client_1 = __importDefault(require("./client"));
const deleteOrg = async (name) => {
    return await new Promise((resolve, reject) => {
        const pReq = new profiles_pb_1.DeleteOrgRequest();
        pReq.setName(name);
        try {
            client_1.default.deleteOrg(pReq, (err, res) => {
                if (err != null) {
                    console.error('deleteOrg() - request error, %o', { err, name });
                    resolve({ ok: false, error: err });
                }
                else {
                    const ok = res.getOk();
                    if (ok) {
                        resolve({ ok });
                    }
                    else {
                        const err = new Error(`error deleting org`);
                        console.error('deleteOrg() - error deleting org: ', {
                            err,
                            name
                        });
                        resolve({ ok: false, error: err });
                    }
                }
            });
        }
        catch (err) {
            console.error('deleteOrg() - system error, %o', { err, name });
            resolve({ ok: false, error: err });
        }
    });
};
exports.deleteOrg = deleteOrg;
