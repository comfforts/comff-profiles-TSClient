// package: profiles.v1
// file: profiles.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as profiles_pb from "./profiles_pb";

interface IProfilesService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createProfile: IProfilesService_ICreateProfile;
    getProfile: IProfilesService_IGetProfile;
    updateProfile: IProfilesService_IUpdateProfile;
    updateProfileStatus: IProfilesService_IUpdateProfileStatus;
    updateProfileId: IProfilesService_IUpdateProfileId;
    deleteProfile: IProfilesService_IDeleteProfile;
    getRoles: IProfilesService_IGetRoles;
    getOrg: IProfilesService_IGetOrg;
    updateOrgStatus: IProfilesService_IUpdateOrgStatus;
    updateOrgId: IProfilesService_IUpdateOrgId;
    deleteOrg: IProfilesService_IDeleteOrg;
}

interface IProfilesService_ICreateProfile extends grpc.MethodDefinition<profiles_pb.CreateProfileRequest, profiles_pb.ProfileResponse> {
    path: "/profiles.v1.Profiles/CreateProfile";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<profiles_pb.CreateProfileRequest>;
    requestDeserialize: grpc.deserialize<profiles_pb.CreateProfileRequest>;
    responseSerialize: grpc.serialize<profiles_pb.ProfileResponse>;
    responseDeserialize: grpc.deserialize<profiles_pb.ProfileResponse>;
}
interface IProfilesService_IGetProfile extends grpc.MethodDefinition<profiles_pb.GetProfileRequest, profiles_pb.ProfileResponse> {
    path: "/profiles.v1.Profiles/GetProfile";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<profiles_pb.GetProfileRequest>;
    requestDeserialize: grpc.deserialize<profiles_pb.GetProfileRequest>;
    responseSerialize: grpc.serialize<profiles_pb.ProfileResponse>;
    responseDeserialize: grpc.deserialize<profiles_pb.ProfileResponse>;
}
interface IProfilesService_IUpdateProfile extends grpc.MethodDefinition<profiles_pb.UpdateProfileRequest, profiles_pb.ProfileResponse> {
    path: "/profiles.v1.Profiles/UpdateProfile";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<profiles_pb.UpdateProfileRequest>;
    requestDeserialize: grpc.deserialize<profiles_pb.UpdateProfileRequest>;
    responseSerialize: grpc.serialize<profiles_pb.ProfileResponse>;
    responseDeserialize: grpc.deserialize<profiles_pb.ProfileResponse>;
}
interface IProfilesService_IUpdateProfileStatus extends grpc.MethodDefinition<profiles_pb.ProfileStatusUpdate, profiles_pb.ProfileResponse> {
    path: "/profiles.v1.Profiles/UpdateProfileStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<profiles_pb.ProfileStatusUpdate>;
    requestDeserialize: grpc.deserialize<profiles_pb.ProfileStatusUpdate>;
    responseSerialize: grpc.serialize<profiles_pb.ProfileResponse>;
    responseDeserialize: grpc.deserialize<profiles_pb.ProfileResponse>;
}
interface IProfilesService_IUpdateProfileId extends grpc.MethodDefinition<profiles_pb.ProfileIdUpdate, profiles_pb.ProfileResponse> {
    path: "/profiles.v1.Profiles/UpdateProfileId";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<profiles_pb.ProfileIdUpdate>;
    requestDeserialize: grpc.deserialize<profiles_pb.ProfileIdUpdate>;
    responseSerialize: grpc.serialize<profiles_pb.ProfileResponse>;
    responseDeserialize: grpc.deserialize<profiles_pb.ProfileResponse>;
}
interface IProfilesService_IDeleteProfile extends grpc.MethodDefinition<profiles_pb.DeleteProfileRequest, profiles_pb.DeleteResponse> {
    path: "/profiles.v1.Profiles/DeleteProfile";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<profiles_pb.DeleteProfileRequest>;
    requestDeserialize: grpc.deserialize<profiles_pb.DeleteProfileRequest>;
    responseSerialize: grpc.serialize<profiles_pb.DeleteResponse>;
    responseDeserialize: grpc.deserialize<profiles_pb.DeleteResponse>;
}
interface IProfilesService_IGetRoles extends grpc.MethodDefinition<profiles_pb.RolesRequest, profiles_pb.RolesResponse> {
    path: "/profiles.v1.Profiles/GetRoles";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<profiles_pb.RolesRequest>;
    requestDeserialize: grpc.deserialize<profiles_pb.RolesRequest>;
    responseSerialize: grpc.serialize<profiles_pb.RolesResponse>;
    responseDeserialize: grpc.deserialize<profiles_pb.RolesResponse>;
}
interface IProfilesService_IGetOrg extends grpc.MethodDefinition<profiles_pb.GetOrgRequest, profiles_pb.OrgResponse> {
    path: "/profiles.v1.Profiles/GetOrg";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<profiles_pb.GetOrgRequest>;
    requestDeserialize: grpc.deserialize<profiles_pb.GetOrgRequest>;
    responseSerialize: grpc.serialize<profiles_pb.OrgResponse>;
    responseDeserialize: grpc.deserialize<profiles_pb.OrgResponse>;
}
interface IProfilesService_IUpdateOrgStatus extends grpc.MethodDefinition<profiles_pb.OrgStatusUpdate, profiles_pb.OrgResponse> {
    path: "/profiles.v1.Profiles/UpdateOrgStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<profiles_pb.OrgStatusUpdate>;
    requestDeserialize: grpc.deserialize<profiles_pb.OrgStatusUpdate>;
    responseSerialize: grpc.serialize<profiles_pb.OrgResponse>;
    responseDeserialize: grpc.deserialize<profiles_pb.OrgResponse>;
}
interface IProfilesService_IUpdateOrgId extends grpc.MethodDefinition<profiles_pb.OrgIdUpdate, profiles_pb.OrgResponse> {
    path: "/profiles.v1.Profiles/UpdateOrgId";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<profiles_pb.OrgIdUpdate>;
    requestDeserialize: grpc.deserialize<profiles_pb.OrgIdUpdate>;
    responseSerialize: grpc.serialize<profiles_pb.OrgResponse>;
    responseDeserialize: grpc.deserialize<profiles_pb.OrgResponse>;
}
interface IProfilesService_IDeleteOrg extends grpc.MethodDefinition<profiles_pb.DeleteOrgRequest, profiles_pb.DeleteResponse> {
    path: "/profiles.v1.Profiles/DeleteOrg";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<profiles_pb.DeleteOrgRequest>;
    requestDeserialize: grpc.deserialize<profiles_pb.DeleteOrgRequest>;
    responseSerialize: grpc.serialize<profiles_pb.DeleteResponse>;
    responseDeserialize: grpc.deserialize<profiles_pb.DeleteResponse>;
}

export const ProfilesService: IProfilesService;

export interface IProfilesServer extends grpc.UntypedServiceImplementation {
    createProfile: grpc.handleUnaryCall<profiles_pb.CreateProfileRequest, profiles_pb.ProfileResponse>;
    getProfile: grpc.handleUnaryCall<profiles_pb.GetProfileRequest, profiles_pb.ProfileResponse>;
    updateProfile: grpc.handleUnaryCall<profiles_pb.UpdateProfileRequest, profiles_pb.ProfileResponse>;
    updateProfileStatus: grpc.handleUnaryCall<profiles_pb.ProfileStatusUpdate, profiles_pb.ProfileResponse>;
    updateProfileId: grpc.handleUnaryCall<profiles_pb.ProfileIdUpdate, profiles_pb.ProfileResponse>;
    deleteProfile: grpc.handleUnaryCall<profiles_pb.DeleteProfileRequest, profiles_pb.DeleteResponse>;
    getRoles: grpc.handleUnaryCall<profiles_pb.RolesRequest, profiles_pb.RolesResponse>;
    getOrg: grpc.handleUnaryCall<profiles_pb.GetOrgRequest, profiles_pb.OrgResponse>;
    updateOrgStatus: grpc.handleUnaryCall<profiles_pb.OrgStatusUpdate, profiles_pb.OrgResponse>;
    updateOrgId: grpc.handleUnaryCall<profiles_pb.OrgIdUpdate, profiles_pb.OrgResponse>;
    deleteOrg: grpc.handleUnaryCall<profiles_pb.DeleteOrgRequest, profiles_pb.DeleteResponse>;
}

export interface IProfilesClient {
    createProfile(request: profiles_pb.CreateProfileRequest, callback: (error: grpc.ServiceError | null, response: profiles_pb.ProfileResponse) => void): grpc.ClientUnaryCall;
    createProfile(request: profiles_pb.CreateProfileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: profiles_pb.ProfileResponse) => void): grpc.ClientUnaryCall;
    createProfile(request: profiles_pb.CreateProfileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: profiles_pb.ProfileResponse) => void): grpc.ClientUnaryCall;
    getProfile(request: profiles_pb.GetProfileRequest, callback: (error: grpc.ServiceError | null, response: profiles_pb.ProfileResponse) => void): grpc.ClientUnaryCall;
    getProfile(request: profiles_pb.GetProfileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: profiles_pb.ProfileResponse) => void): grpc.ClientUnaryCall;
    getProfile(request: profiles_pb.GetProfileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: profiles_pb.ProfileResponse) => void): grpc.ClientUnaryCall;
    updateProfile(request: profiles_pb.UpdateProfileRequest, callback: (error: grpc.ServiceError | null, response: profiles_pb.ProfileResponse) => void): grpc.ClientUnaryCall;
    updateProfile(request: profiles_pb.UpdateProfileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: profiles_pb.ProfileResponse) => void): grpc.ClientUnaryCall;
    updateProfile(request: profiles_pb.UpdateProfileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: profiles_pb.ProfileResponse) => void): grpc.ClientUnaryCall;
    updateProfileStatus(request: profiles_pb.ProfileStatusUpdate, callback: (error: grpc.ServiceError | null, response: profiles_pb.ProfileResponse) => void): grpc.ClientUnaryCall;
    updateProfileStatus(request: profiles_pb.ProfileStatusUpdate, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: profiles_pb.ProfileResponse) => void): grpc.ClientUnaryCall;
    updateProfileStatus(request: profiles_pb.ProfileStatusUpdate, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: profiles_pb.ProfileResponse) => void): grpc.ClientUnaryCall;
    updateProfileId(request: profiles_pb.ProfileIdUpdate, callback: (error: grpc.ServiceError | null, response: profiles_pb.ProfileResponse) => void): grpc.ClientUnaryCall;
    updateProfileId(request: profiles_pb.ProfileIdUpdate, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: profiles_pb.ProfileResponse) => void): grpc.ClientUnaryCall;
    updateProfileId(request: profiles_pb.ProfileIdUpdate, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: profiles_pb.ProfileResponse) => void): grpc.ClientUnaryCall;
    deleteProfile(request: profiles_pb.DeleteProfileRequest, callback: (error: grpc.ServiceError | null, response: profiles_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    deleteProfile(request: profiles_pb.DeleteProfileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: profiles_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    deleteProfile(request: profiles_pb.DeleteProfileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: profiles_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    getRoles(request: profiles_pb.RolesRequest, callback: (error: grpc.ServiceError | null, response: profiles_pb.RolesResponse) => void): grpc.ClientUnaryCall;
    getRoles(request: profiles_pb.RolesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: profiles_pb.RolesResponse) => void): grpc.ClientUnaryCall;
    getRoles(request: profiles_pb.RolesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: profiles_pb.RolesResponse) => void): grpc.ClientUnaryCall;
    getOrg(request: profiles_pb.GetOrgRequest, callback: (error: grpc.ServiceError | null, response: profiles_pb.OrgResponse) => void): grpc.ClientUnaryCall;
    getOrg(request: profiles_pb.GetOrgRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: profiles_pb.OrgResponse) => void): grpc.ClientUnaryCall;
    getOrg(request: profiles_pb.GetOrgRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: profiles_pb.OrgResponse) => void): grpc.ClientUnaryCall;
    updateOrgStatus(request: profiles_pb.OrgStatusUpdate, callback: (error: grpc.ServiceError | null, response: profiles_pb.OrgResponse) => void): grpc.ClientUnaryCall;
    updateOrgStatus(request: profiles_pb.OrgStatusUpdate, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: profiles_pb.OrgResponse) => void): grpc.ClientUnaryCall;
    updateOrgStatus(request: profiles_pb.OrgStatusUpdate, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: profiles_pb.OrgResponse) => void): grpc.ClientUnaryCall;
    updateOrgId(request: profiles_pb.OrgIdUpdate, callback: (error: grpc.ServiceError | null, response: profiles_pb.OrgResponse) => void): grpc.ClientUnaryCall;
    updateOrgId(request: profiles_pb.OrgIdUpdate, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: profiles_pb.OrgResponse) => void): grpc.ClientUnaryCall;
    updateOrgId(request: profiles_pb.OrgIdUpdate, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: profiles_pb.OrgResponse) => void): grpc.ClientUnaryCall;
    deleteOrg(request: profiles_pb.DeleteOrgRequest, callback: (error: grpc.ServiceError | null, response: profiles_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    deleteOrg(request: profiles_pb.DeleteOrgRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: profiles_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    deleteOrg(request: profiles_pb.DeleteOrgRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: profiles_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
}

export class ProfilesClient extends grpc.Client implements IProfilesClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createProfile(request: profiles_pb.CreateProfileRequest, callback: (error: grpc.ServiceError | null, response: profiles_pb.ProfileResponse) => void): grpc.ClientUnaryCall;
    public createProfile(request: profiles_pb.CreateProfileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: profiles_pb.ProfileResponse) => void): grpc.ClientUnaryCall;
    public createProfile(request: profiles_pb.CreateProfileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: profiles_pb.ProfileResponse) => void): grpc.ClientUnaryCall;
    public getProfile(request: profiles_pb.GetProfileRequest, callback: (error: grpc.ServiceError | null, response: profiles_pb.ProfileResponse) => void): grpc.ClientUnaryCall;
    public getProfile(request: profiles_pb.GetProfileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: profiles_pb.ProfileResponse) => void): grpc.ClientUnaryCall;
    public getProfile(request: profiles_pb.GetProfileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: profiles_pb.ProfileResponse) => void): grpc.ClientUnaryCall;
    public updateProfile(request: profiles_pb.UpdateProfileRequest, callback: (error: grpc.ServiceError | null, response: profiles_pb.ProfileResponse) => void): grpc.ClientUnaryCall;
    public updateProfile(request: profiles_pb.UpdateProfileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: profiles_pb.ProfileResponse) => void): grpc.ClientUnaryCall;
    public updateProfile(request: profiles_pb.UpdateProfileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: profiles_pb.ProfileResponse) => void): grpc.ClientUnaryCall;
    public updateProfileStatus(request: profiles_pb.ProfileStatusUpdate, callback: (error: grpc.ServiceError | null, response: profiles_pb.ProfileResponse) => void): grpc.ClientUnaryCall;
    public updateProfileStatus(request: profiles_pb.ProfileStatusUpdate, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: profiles_pb.ProfileResponse) => void): grpc.ClientUnaryCall;
    public updateProfileStatus(request: profiles_pb.ProfileStatusUpdate, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: profiles_pb.ProfileResponse) => void): grpc.ClientUnaryCall;
    public updateProfileId(request: profiles_pb.ProfileIdUpdate, callback: (error: grpc.ServiceError | null, response: profiles_pb.ProfileResponse) => void): grpc.ClientUnaryCall;
    public updateProfileId(request: profiles_pb.ProfileIdUpdate, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: profiles_pb.ProfileResponse) => void): grpc.ClientUnaryCall;
    public updateProfileId(request: profiles_pb.ProfileIdUpdate, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: profiles_pb.ProfileResponse) => void): grpc.ClientUnaryCall;
    public deleteProfile(request: profiles_pb.DeleteProfileRequest, callback: (error: grpc.ServiceError | null, response: profiles_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    public deleteProfile(request: profiles_pb.DeleteProfileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: profiles_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    public deleteProfile(request: profiles_pb.DeleteProfileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: profiles_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    public getRoles(request: profiles_pb.RolesRequest, callback: (error: grpc.ServiceError | null, response: profiles_pb.RolesResponse) => void): grpc.ClientUnaryCall;
    public getRoles(request: profiles_pb.RolesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: profiles_pb.RolesResponse) => void): grpc.ClientUnaryCall;
    public getRoles(request: profiles_pb.RolesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: profiles_pb.RolesResponse) => void): grpc.ClientUnaryCall;
    public getOrg(request: profiles_pb.GetOrgRequest, callback: (error: grpc.ServiceError | null, response: profiles_pb.OrgResponse) => void): grpc.ClientUnaryCall;
    public getOrg(request: profiles_pb.GetOrgRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: profiles_pb.OrgResponse) => void): grpc.ClientUnaryCall;
    public getOrg(request: profiles_pb.GetOrgRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: profiles_pb.OrgResponse) => void): grpc.ClientUnaryCall;
    public updateOrgStatus(request: profiles_pb.OrgStatusUpdate, callback: (error: grpc.ServiceError | null, response: profiles_pb.OrgResponse) => void): grpc.ClientUnaryCall;
    public updateOrgStatus(request: profiles_pb.OrgStatusUpdate, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: profiles_pb.OrgResponse) => void): grpc.ClientUnaryCall;
    public updateOrgStatus(request: profiles_pb.OrgStatusUpdate, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: profiles_pb.OrgResponse) => void): grpc.ClientUnaryCall;
    public updateOrgId(request: profiles_pb.OrgIdUpdate, callback: (error: grpc.ServiceError | null, response: profiles_pb.OrgResponse) => void): grpc.ClientUnaryCall;
    public updateOrgId(request: profiles_pb.OrgIdUpdate, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: profiles_pb.OrgResponse) => void): grpc.ClientUnaryCall;
    public updateOrgId(request: profiles_pb.OrgIdUpdate, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: profiles_pb.OrgResponse) => void): grpc.ClientUnaryCall;
    public deleteOrg(request: profiles_pb.DeleteOrgRequest, callback: (error: grpc.ServiceError | null, response: profiles_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    public deleteOrg(request: profiles_pb.DeleteOrgRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: profiles_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    public deleteOrg(request: profiles_pb.DeleteOrgRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: profiles_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
}
