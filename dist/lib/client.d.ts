import type * as grpc from '@grpc/grpc-js';
import { ProfilesClient } from './proto/_gen/profiles_grpc_pb';
export declare function getChannelCredentials(): grpc.ChannelCredentials;
declare const profileClient: ProfilesClient;
export default profileClient;
