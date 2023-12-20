"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChannelCredentials = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const profiles_grpc_pb_1 = require("./proto/_gen/profiles_grpc_pb");
const utils_1 = require("./utils");
function getChannelCredentials() {
    const rootCert = fs.readFileSync(path.resolve(`${process.env.CERTS_PATH ?? ''}/ca.pem`));
    const clientCert = fs.readFileSync(path.resolve(`${process.env.CERTS_PATH ?? ''}/profiles-client.pem`));
    const clientKey = fs.readFileSync(path.resolve(`${process.env.CERTS_PATH ?? ''}/profiles-client-key.pem`));
    return (0, utils_1.getCredentials)(rootCert, clientKey, clientCert);
}
exports.getChannelCredentials = getChannelCredentials;
console.log('Profile service host: ', process.env.GRPC_PROFILES);
const profileClient = new profiles_grpc_pb_1.ProfilesClient(process.env.GRPC_PROFILES ?? '', getChannelCredentials(), { interceptors: [utils_1.commonInterceptor] });
exports.default = profileClient;
