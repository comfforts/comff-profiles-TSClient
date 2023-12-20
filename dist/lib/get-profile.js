"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfile = void 0;
const profiles_pb_1 = require("./proto/_gen/profiles_pb");
const client_1 = __importDefault(require("./client"));
const index_1 = require("./index");
async function getProfile(email) {
    return await new Promise((resolve, reject) => {
        const pReq = new profiles_pb_1.GetProfileRequest();
        pReq.setEmail(email);
        try {
            client_1.default.getProfile(pReq, (err, res) => {
                if (err != null) {
                    console.error('getProfile() - request error, %o', { err });
                    resolve({ error: err });
                }
                else {
                    const user = res.getUser();
                    if (user != null) {
                        resolve((0, index_1.mapProfileResponse)(user));
                    }
                    else {
                        const err = new Error('no profile found');
                        console.error('getProfile() - no profile found, %o', { err });
                        resolve({ error: err });
                    }
                }
            });
        }
        catch (err) {
            console.error('getProfile() - system error, %o', { err });
            resolve({ error: err });
        }
    });
}
exports.getProfile = getProfile;
