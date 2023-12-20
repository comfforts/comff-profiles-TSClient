"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProfile = void 0;
const profiles_pb_1 = require("./proto/_gen/profiles_pb");
const client_1 = __importDefault(require("./client"));
async function deleteProfile(email) {
    return await new Promise((resolve, reject) => {
        const pReq = new profiles_pb_1.DeleteProfileRequest();
        pReq.setEmail(email);
        try {
            client_1.default.deleteProfile(pReq, (err, res) => {
                if (err != null) {
                    console.error('deleteProfile() - request error, %o', { err, email });
                    resolve({ ok: false, error: err });
                }
                else {
                    const ok = res.getOk();
                    if (ok) {
                        resolve({ ok });
                    }
                    else {
                        const err = new Error(`error deleting profile`);
                        console.error('deleteProfile() - error deleting profile: ', {
                            err,
                            email
                        });
                        resolve({ ok: false, error: err });
                    }
                }
            });
        }
        catch (err) {
            console.error('deleteProfile() - system error, %o', { err, email });
            resolve({ ok: false, error: err });
        }
    });
}
exports.deleteProfile = deleteProfile;
