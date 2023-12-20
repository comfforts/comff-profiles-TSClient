"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProfile = void 0;
const profiles_pb_1 = require("./proto/_gen/profiles_pb");
const client_1 = __importDefault(require("./client"));
const index_1 = require("./index");
async function createProfile(u) {
    return await new Promise((resolve, reject) => {
        const cpReq = new profiles_pb_1.CreateProfileRequest();
        cpReq.setOrg(u.org);
        cpReq.setName(u.name);
        cpReq.setEmail(u.email);
        cpReq.setRequestedBy(u.email);
        cpReq.setRolesList(u.roles !== undefined ? u.roles : []);
        cpReq.setLatitude(u.loc?.latitude ?? 0);
        cpReq.setLongitude(u.loc?.longitude ?? 0);
        try {
            client_1.default.createProfile(cpReq, (err, res) => {
                if (err != null) {
                    console.error('createProfile() - request error, %o', { err });
                    resolve({ error: err });
                }
                else {
                    const user = res.getUser();
                    if (user != null) {
                        resolve((0, index_1.mapProfileResponse)(user));
                    }
                    else {
                        const err = new Error('error creating profile');
                        console.error('createProfile() - error creating profile, %o', {
                            err
                        });
                        resolve({ error: err });
                    }
                }
            });
        }
        catch (err) {
            console.error('createProfile() - system error, %o', { err });
            resolve({ error: err });
        }
    });
}
exports.createProfile = createProfile;
