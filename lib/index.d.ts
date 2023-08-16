import type { User, UserRole, UserStatus, OrgStatus, Organization } from './proto/_gen/profiles_pb';
import type { ILocation, OkResponse } from '@hankgalt/comff-geo-tsclient/lib';
export { Role, UserRole, UserStatus, OrgStatus } from './proto/_gen/profiles_pb';
export interface ProfilesServiceClient {
    getRoles: () => Promise<ProfileRolesResponse>;
    createProfile: (u: Profile) => Promise<UserProfileResponse>;
    getProfile: (email: string) => Promise<UserProfileResponse>;
    updateProfile: (u: Profile) => Promise<UserProfileResponse>;
    updateProfileStatus: (params: OrgUpdate) => Promise<UserProfileResponse>;
    deleteProfile: (email: string) => Promise<OkResponse>;
    updateOrgStatus: (params: OrgUpdate) => Promise<OrganizationResponse>;
    deleteOrg: (name: string) => Promise<OkResponse>;
    closeClient: () => void;
}
export interface Profile {
    name: string;
    email: string;
    org: string;
    roles: UserRole[];
    externalId?: string;
    loc?: ILocation;
    status?: UserStatus;
}
export interface Org {
    name: string;
    externalId: string;
    status?: OrgStatus;
}
export interface ProfileRolesResponse {
    roles?: UserRole[];
    error?: Error;
}
export interface UserProfileResponse {
    user?: Profile;
    error?: Error;
}
export interface OrgUpdate {
    name: string;
    status: OrgStatus;
    externalId: string;
}
export interface ProfileUpdate {
    email: string;
    status: UserStatus;
    externalId: string;
}
export interface OrganizationResponse {
    org?: Org;
    error?: Error;
}
export declare const mapProfileResponse: (user: User) => UserProfileResponse;
export declare const mapOrgResponse: (org: Organization) => OrganizationResponse;
export declare const mapProtoToProfile: (u: User) => Profile;
export declare const mapProtoToOrg: (u: Organization) => Org;
