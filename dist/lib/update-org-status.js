"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrgStatus = void 0;
const profiles_pb_1 = require("./proto/_gen/profiles_pb");
const client_1 = __importDefault(require("./client"));
const index_1 = require("./index");
const updateOrgStatus = async (params) => {
    return await new Promise((resolve, reject) => {
        const upReq = new profiles_pb_1.OrgStatusUpdate();
        upReq.setName(params.name);
        upReq.setStatus(params.status);
        try {
            client_1.default.updateOrgStatus(upReq, (err, res) => {
                if (err != null) {
                    console.error('updateOrgStatus() - request error, %o', { err });
                    resolve({ error: err });
                }
                else {
                    const org = res.getOrg();
                    if (org != null) {
                        resolve((0, index_1.mapOrgResponse)(org));
                    }
                    else {
                        const err = new Error('error updating org');
                        console.error('updateOrgStatus() - error updating org, %o', {
                            err
                        });
                        resolve({ error: err });
                    }
                }
            });
        }
        catch (err) {
            console.error('updateOrgStatus() - system error, %o', { err });
            resolve({ error: err });
        }
    });
};
exports.updateOrgStatus = updateOrgStatus;
