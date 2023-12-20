"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoles = void 0;
const profiles_pb_1 = require("./proto/_gen/profiles_pb");
const client_1 = __importDefault(require("./client"));
async function getRoles() {
    return await new Promise((resolve, reject) => {
        const rolesReq = new profiles_pb_1.RolesRequest();
        try {
            client_1.default.getRoles(rolesReq, (err, res) => {
                if (err != null) {
                    console.error('getRoles() - request error, %o', { err });
                    resolve({ error: err });
                }
                else {
                    const roles = res.getRolesList();
                    if (roles.length > 0) {
                        resolve({ roles });
                    }
                    else {
                        const err = new Error('no role found');
                        console.error('getRoles() - no role found, %o', { err });
                        resolve({ error: err });
                    }
                }
            });
        }
        catch (err) {
            console.error('getRoles() - system error, %o', { err });
            resolve({ error: err });
        }
    });
}
exports.getRoles = getRoles;
