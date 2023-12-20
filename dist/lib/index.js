"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapProtoToOrg = exports.mapProtoToProfile = exports.mapOrgResponse = exports.mapProfileResponse = void 0;
const mapProfileResponse = (user) => {
    return {
        user: (0, exports.mapProtoToProfile)(user)
    };
};
exports.mapProfileResponse = mapProfileResponse;
const mapOrgResponse = (org) => {
    return {
        org: (0, exports.mapProtoToOrg)(org)
    };
};
exports.mapOrgResponse = mapOrgResponse;
const mapProtoToProfile = (u) => {
    const loc = {
        latitude: u.getLatitude(),
        longitude: u.getLongitude()
    };
    return {
        email: u.getEmail(),
        name: u.getName(),
        org: u.getOrg(),
        status: u.getStatus(),
        roles: u.getRolesList(),
        externalId: u.getExternalId(),
        geocode: u.getGeocode(),
        loc
    };
};
exports.mapProtoToProfile = mapProtoToProfile;
const mapProtoToOrg = (u) => {
    return {
        name: u.getName(),
        externalId: u.getExternalId(),
        status: u.getStatus(),
    };
};
exports.mapProtoToOrg = mapProtoToOrg;
