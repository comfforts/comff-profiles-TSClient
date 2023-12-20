"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProfile = void 0;
const profiles_pb_1 = require("./proto/_gen/profiles_pb");
const client_1 = __importDefault(require("./client"));
const index_1 = require("./index");
const updateProfile = async (u) => {
    return await new Promise((resolve, reject) => {
        const upReq = new profiles_pb_1.UpdateProfileRequest();
        upReq.setOrg(u.org);
        upReq.setEmail(u.email);
        upReq.setRequestedBy(u.email);
        upReq.setLatitude(u.loc?.latitude ?? 0);
        upReq.setLongitude(u.loc?.longitude ?? 0);
        upReq.setRolesList(u.roles != null ? u.roles : []);
        try {
            client_1.default.updateProfile(upReq, (err, res) => {
                if (err != null) {
                    console.error('updateProfile() - request error, %o', { err });
                    resolve({ error: err });
                }
                else {
                    const user = res.getUser();
                    if (user != null) {
                        resolve((0, index_1.mapProfileResponse)(user));
                    }
                    else {
                        const err = new Error('error updating profile');
                        console.error('updateProfile() - error updating profile, %o', {
                            err
                        });
                        resolve({ error: err });
                    }
                }
            });
        }
        catch (err) {
            console.error('updateProfile() - system error, %o', { err });
            resolve({ error: err });
        }
    });
};
exports.updateProfile = updateProfile;
