// package: profiles.v1
// file: profiles.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class User extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): User;
    getName(): string;
    setName(value: string): User;
    getOrg(): string;
    setOrg(value: string): User;
    getExternalId(): string;
    setExternalId(value: string): User;
    clearRolesList(): void;
    getRolesList(): Array<UserRole>;
    setRolesList(value: Array<UserRole>): User;
    addRoles(value: UserRole, index?: number): UserRole;
    getStatus(): UserStatus;
    setStatus(value: UserStatus): User;
    getLatitude(): number;
    setLatitude(value: number): User;
    getLongitude(): number;
    setLongitude(value: number): User;
    getGeocode(): string;
    setGeocode(value: string): User;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        email: string,
        name: string,
        org: string,
        externalId: string,
        rolesList: Array<UserRole>,
        status: UserStatus,
        latitude: number,
        longitude: number,
        geocode: string,
    }
}

export class CreateProfileRequest extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): CreateProfileRequest;
    getName(): string;
    setName(value: string): CreateProfileRequest;
    getOrg(): string;
    setOrg(value: string): CreateProfileRequest;
    clearRolesList(): void;
    getRolesList(): Array<UserRole>;
    setRolesList(value: Array<UserRole>): CreateProfileRequest;
    addRoles(value: UserRole, index?: number): UserRole;
    getLongitude(): number;
    setLongitude(value: number): CreateProfileRequest;
    getLatitude(): number;
    setLatitude(value: number): CreateProfileRequest;
    getRequestedBy(): string;
    setRequestedBy(value: string): CreateProfileRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateProfileRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateProfileRequest): CreateProfileRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateProfileRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateProfileRequest;
    static deserializeBinaryFromReader(message: CreateProfileRequest, reader: jspb.BinaryReader): CreateProfileRequest;
}

export namespace CreateProfileRequest {
    export type AsObject = {
        email: string,
        name: string,
        org: string,
        rolesList: Array<UserRole>,
        longitude: number,
        latitude: number,
        requestedBy: string,
    }
}

export class GetProfileRequest extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): GetProfileRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetProfileRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetProfileRequest): GetProfileRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetProfileRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetProfileRequest;
    static deserializeBinaryFromReader(message: GetProfileRequest, reader: jspb.BinaryReader): GetProfileRequest;
}

export namespace GetProfileRequest {
    export type AsObject = {
        email: string,
    }
}

export class DeleteProfileRequest extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): DeleteProfileRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteProfileRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteProfileRequest): DeleteProfileRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteProfileRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteProfileRequest;
    static deserializeBinaryFromReader(message: DeleteProfileRequest, reader: jspb.BinaryReader): DeleteProfileRequest;
}

export namespace DeleteProfileRequest {
    export type AsObject = {
        email: string,
    }
}

export class ProfileResponse extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): User | undefined;
    setUser(value?: User): ProfileResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProfileResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ProfileResponse): ProfileResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProfileResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProfileResponse;
    static deserializeBinaryFromReader(message: ProfileResponse, reader: jspb.BinaryReader): ProfileResponse;
}

export namespace ProfileResponse {
    export type AsObject = {
        user?: User.AsObject,
    }
}

export class UpdateProfileRequest extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): UpdateProfileRequest;
    getOrg(): string;
    setOrg(value: string): UpdateProfileRequest;
    clearRolesList(): void;
    getRolesList(): Array<UserRole>;
    setRolesList(value: Array<UserRole>): UpdateProfileRequest;
    addRoles(value: UserRole, index?: number): UserRole;
    getLongitude(): number;
    setLongitude(value: number): UpdateProfileRequest;
    getLatitude(): number;
    setLatitude(value: number): UpdateProfileRequest;
    getRequestedBy(): string;
    setRequestedBy(value: string): UpdateProfileRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateProfileRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateProfileRequest): UpdateProfileRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateProfileRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateProfileRequest;
    static deserializeBinaryFromReader(message: UpdateProfileRequest, reader: jspb.BinaryReader): UpdateProfileRequest;
}

export namespace UpdateProfileRequest {
    export type AsObject = {
        email: string,
        org: string,
        rolesList: Array<UserRole>,
        longitude: number,
        latitude: number,
        requestedBy: string,
    }
}

export class ProfileStatusUpdate extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): ProfileStatusUpdate;
    getStatus(): UserStatus;
    setStatus(value: UserStatus): ProfileStatusUpdate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProfileStatusUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: ProfileStatusUpdate): ProfileStatusUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProfileStatusUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProfileStatusUpdate;
    static deserializeBinaryFromReader(message: ProfileStatusUpdate, reader: jspb.BinaryReader): ProfileStatusUpdate;
}

export namespace ProfileStatusUpdate {
    export type AsObject = {
        email: string,
        status: UserStatus,
    }
}

export class ProfileIdUpdate extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): ProfileIdUpdate;
    getExternalId(): string;
    setExternalId(value: string): ProfileIdUpdate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProfileIdUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: ProfileIdUpdate): ProfileIdUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProfileIdUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProfileIdUpdate;
    static deserializeBinaryFromReader(message: ProfileIdUpdate, reader: jspb.BinaryReader): ProfileIdUpdate;
}

export namespace ProfileIdUpdate {
    export type AsObject = {
        email: string,
        externalId: string,
    }
}

export class OrgIdUpdate extends jspb.Message { 
    getName(): string;
    setName(value: string): OrgIdUpdate;
    getExternalId(): string;
    setExternalId(value: string): OrgIdUpdate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrgIdUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: OrgIdUpdate): OrgIdUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrgIdUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrgIdUpdate;
    static deserializeBinaryFromReader(message: OrgIdUpdate, reader: jspb.BinaryReader): OrgIdUpdate;
}

export namespace OrgIdUpdate {
    export type AsObject = {
        name: string,
        externalId: string,
    }
}

export class OrgStatusUpdate extends jspb.Message { 
    getName(): string;
    setName(value: string): OrgStatusUpdate;
    getStatus(): OrgStatus;
    setStatus(value: OrgStatus): OrgStatusUpdate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrgStatusUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: OrgStatusUpdate): OrgStatusUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrgStatusUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrgStatusUpdate;
    static deserializeBinaryFromReader(message: OrgStatusUpdate, reader: jspb.BinaryReader): OrgStatusUpdate;
}

export namespace OrgStatusUpdate {
    export type AsObject = {
        name: string,
        status: OrgStatus,
    }
}

export class RolesRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RolesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RolesRequest): RolesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RolesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RolesRequest;
    static deserializeBinaryFromReader(message: RolesRequest, reader: jspb.BinaryReader): RolesRequest;
}

export namespace RolesRequest {
    export type AsObject = {
    }
}

export class RolesResponse extends jspb.Message { 
    clearRolesList(): void;
    getRolesList(): Array<UserRole>;
    setRolesList(value: Array<UserRole>): RolesResponse;
    addRoles(value: UserRole, index?: number): UserRole;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RolesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RolesResponse): RolesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RolesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RolesResponse;
    static deserializeBinaryFromReader(message: RolesResponse, reader: jspb.BinaryReader): RolesResponse;
}

export namespace RolesResponse {
    export type AsObject = {
        rolesList: Array<UserRole>,
    }
}

export class Organization extends jspb.Message { 
    getName(): string;
    setName(value: string): Organization;
    getStatus(): OrgStatus;
    setStatus(value: OrgStatus): Organization;
    getExternalId(): string;
    setExternalId(value: string): Organization;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Organization.AsObject;
    static toObject(includeInstance: boolean, msg: Organization): Organization.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Organization, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Organization;
    static deserializeBinaryFromReader(message: Organization, reader: jspb.BinaryReader): Organization;
}

export namespace Organization {
    export type AsObject = {
        name: string,
        status: OrgStatus,
        externalId: string,
    }
}

export class GetOrgRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): GetOrgRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrgRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrgRequest): GetOrgRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrgRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrgRequest;
    static deserializeBinaryFromReader(message: GetOrgRequest, reader: jspb.BinaryReader): GetOrgRequest;
}

export namespace GetOrgRequest {
    export type AsObject = {
        name: string,
    }
}

export class OrgResponse extends jspb.Message { 

    hasOrg(): boolean;
    clearOrg(): void;
    getOrg(): Organization | undefined;
    setOrg(value?: Organization): OrgResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrgResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OrgResponse): OrgResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrgResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrgResponse;
    static deserializeBinaryFromReader(message: OrgResponse, reader: jspb.BinaryReader): OrgResponse;
}

export namespace OrgResponse {
    export type AsObject = {
        org?: Organization.AsObject,
    }
}

export class DeleteOrgRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): DeleteOrgRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteOrgRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteOrgRequest): DeleteOrgRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteOrgRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteOrgRequest;
    static deserializeBinaryFromReader(message: DeleteOrgRequest, reader: jspb.BinaryReader): DeleteOrgRequest;
}

export namespace DeleteOrgRequest {
    export type AsObject = {
        name: string,
    }
}

export class DeleteResponse extends jspb.Message { 
    getOk(): boolean;
    setOk(value: boolean): DeleteResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteResponse): DeleteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteResponse;
    static deserializeBinaryFromReader(message: DeleteResponse, reader: jspb.BinaryReader): DeleteResponse;
}

export namespace DeleteResponse {
    export type AsObject = {
        ok: boolean,
    }
}

export enum Role {
    VISITOR = 0,
    CREATOR = 1,
    PRODUCER = 2,
    WORKER = 3,
    ADMIN = 4,
    FACILITATOR = 5,
}

export enum UserStatus {
    PENDING = 0,
    ACTIVE = 1,
    DEACTIVATED = 2,
}

export enum OrgStatus {
    PENDING_ORG = 0,
    ACTIVE_ORG = 1,
    REGISTERED = 2,
}

export enum UserRole {
    USER = 0,
    ARTISAN = 1,
    CHEF = 2,
    STORE_ADMIN = 3,
    STORE_USER = 4,
    COURIER = 5,
    COURIER_ADMIN = 6,
    STAFF = 7,
    ORGANIZER = 8,
    KNOWLEDGE_PROVIDER = 9,
    SUPER_USER = 10,
}
