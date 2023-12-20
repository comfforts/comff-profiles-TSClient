"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProfileStatus = void 0;
const profiles_pb_1 = require("./proto/_gen/profiles_pb");
const client_1 = __importDefault(require("./client"));
const index_1 = require("./index");
const updateProfileStatus = async (params) => {
    return await new Promise((resolve, reject) => {
        const upReq = new profiles_pb_1.ProfileStatusUpdate();
        upReq.setEmail(params.email);
        upReq.setStatus(params.status);
        try {
            client_1.default.updateProfileStatus(upReq, (err, res) => {
                if (err != null) {
                    console.error('updateProfileStatus() - request error, %o', { err });
                    resolve({ error: err });
                }
                else {
                    const user = res.getUser();
                    if (user != null) {
                        resolve((0, index_1.mapProfileResponse)(user));
                    }
                    else {
                        const err = new Error('error updating org');
                        console.error('updateProfileStatus() - error updating org, %o', {
                            err
                        });
                        resolve({ error: err });
                    }
                }
            });
        }
        catch (err) {
            console.error('updateProfileStatus() - system error, %o', { err });
            resolve({ error: err });
        }
    });
};
exports.updateProfileStatus = updateProfileStatus;
