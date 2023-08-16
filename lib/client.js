var _a;
import * as fs from 'fs';
import * as path from 'path';
import { ProfilesClient } from './proto/_gen/profiles_grpc_pb';
import { getCredentials, commonInterceptor } from './utils';
export function getChannelCredentials() {
    var _a, _b, _c;
    var rootCert = fs.readFileSync(path.resolve("".concat((_a = process.env.CERTS_PATH) !== null && _a !== void 0 ? _a : '', "/ca.pem")));
    var clientCert = fs.readFileSync(path.resolve("".concat((_b = process.env.CERTS_PATH) !== null && _b !== void 0 ? _b : '', "/profiles-client.pem")));
    var clientKey = fs.readFileSync(path.resolve("".concat((_c = process.env.CERTS_PATH) !== null && _c !== void 0 ? _c : '', "/profiles-client-key.pem")));
    return getCredentials(rootCert, clientKey, clientCert);
}
console.log('Profile service host: ', process.env.GRPC_PROFILES);
var profileClient = new ProfilesClient((_a = process.env.GRPC_PROFILES) !== null && _a !== void 0 ? _a : '', getChannelCredentials(), { interceptors: [commonInterceptor] });
export default profileClient;
