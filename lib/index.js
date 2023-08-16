export { Role, UserRole, UserStatus, OrgStatus } from './proto/_gen/profiles_pb';
export var mapProfileResponse = function (user) {
    return {
        user: mapProtoToProfile(user)
    };
};
export var mapOrgResponse = function (org) {
    return {
        org: mapProtoToOrg(org)
    };
};
export var mapProtoToProfile = function (u) {
    var loc = {
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
        loc: loc
    };
};
export var mapProtoToOrg = function (u) {
    return {
        name: u.getName(),
        externalId: u.getExternalId(),
        status: u.getStatus(),
    };
};
