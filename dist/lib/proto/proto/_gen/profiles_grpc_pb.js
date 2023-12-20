// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var profiles_pb = require('./profiles_pb.js');

function serialize_profiles_v1_CreateProfileRequest(arg) {
  if (!(arg instanceof profiles_pb.CreateProfileRequest)) {
    throw new Error('Expected argument of type profiles.v1.CreateProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_profiles_v1_CreateProfileRequest(buffer_arg) {
  return profiles_pb.CreateProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_profiles_v1_DeleteOrgRequest(arg) {
  if (!(arg instanceof profiles_pb.DeleteOrgRequest)) {
    throw new Error('Expected argument of type profiles.v1.DeleteOrgRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_profiles_v1_DeleteOrgRequest(buffer_arg) {
  return profiles_pb.DeleteOrgRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_profiles_v1_DeleteProfileRequest(arg) {
  if (!(arg instanceof profiles_pb.DeleteProfileRequest)) {
    throw new Error('Expected argument of type profiles.v1.DeleteProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_profiles_v1_DeleteProfileRequest(buffer_arg) {
  return profiles_pb.DeleteProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_profiles_v1_DeleteResponse(arg) {
  if (!(arg instanceof profiles_pb.DeleteResponse)) {
    throw new Error('Expected argument of type profiles.v1.DeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_profiles_v1_DeleteResponse(buffer_arg) {
  return profiles_pb.DeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_profiles_v1_GetOrgRequest(arg) {
  if (!(arg instanceof profiles_pb.GetOrgRequest)) {
    throw new Error('Expected argument of type profiles.v1.GetOrgRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_profiles_v1_GetOrgRequest(buffer_arg) {
  return profiles_pb.GetOrgRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_profiles_v1_GetProfileRequest(arg) {
  if (!(arg instanceof profiles_pb.GetProfileRequest)) {
    throw new Error('Expected argument of type profiles.v1.GetProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_profiles_v1_GetProfileRequest(buffer_arg) {
  return profiles_pb.GetProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_profiles_v1_OrgIdUpdate(arg) {
  if (!(arg instanceof profiles_pb.OrgIdUpdate)) {
    throw new Error('Expected argument of type profiles.v1.OrgIdUpdate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_profiles_v1_OrgIdUpdate(buffer_arg) {
  return profiles_pb.OrgIdUpdate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_profiles_v1_OrgResponse(arg) {
  if (!(arg instanceof profiles_pb.OrgResponse)) {
    throw new Error('Expected argument of type profiles.v1.OrgResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_profiles_v1_OrgResponse(buffer_arg) {
  return profiles_pb.OrgResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_profiles_v1_OrgStatusUpdate(arg) {
  if (!(arg instanceof profiles_pb.OrgStatusUpdate)) {
    throw new Error('Expected argument of type profiles.v1.OrgStatusUpdate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_profiles_v1_OrgStatusUpdate(buffer_arg) {
  return profiles_pb.OrgStatusUpdate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_profiles_v1_ProfileIdUpdate(arg) {
  if (!(arg instanceof profiles_pb.ProfileIdUpdate)) {
    throw new Error('Expected argument of type profiles.v1.ProfileIdUpdate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_profiles_v1_ProfileIdUpdate(buffer_arg) {
  return profiles_pb.ProfileIdUpdate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_profiles_v1_ProfileResponse(arg) {
  if (!(arg instanceof profiles_pb.ProfileResponse)) {
    throw new Error('Expected argument of type profiles.v1.ProfileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_profiles_v1_ProfileResponse(buffer_arg) {
  return profiles_pb.ProfileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_profiles_v1_ProfileStatusUpdate(arg) {
  if (!(arg instanceof profiles_pb.ProfileStatusUpdate)) {
    throw new Error('Expected argument of type profiles.v1.ProfileStatusUpdate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_profiles_v1_ProfileStatusUpdate(buffer_arg) {
  return profiles_pb.ProfileStatusUpdate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_profiles_v1_RolesRequest(arg) {
  if (!(arg instanceof profiles_pb.RolesRequest)) {
    throw new Error('Expected argument of type profiles.v1.RolesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_profiles_v1_RolesRequest(buffer_arg) {
  return profiles_pb.RolesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_profiles_v1_RolesResponse(arg) {
  if (!(arg instanceof profiles_pb.RolesResponse)) {
    throw new Error('Expected argument of type profiles.v1.RolesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_profiles_v1_RolesResponse(buffer_arg) {
  return profiles_pb.RolesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_profiles_v1_UpdateProfileRequest(arg) {
  if (!(arg instanceof profiles_pb.UpdateProfileRequest)) {
    throw new Error('Expected argument of type profiles.v1.UpdateProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_profiles_v1_UpdateProfileRequest(buffer_arg) {
  return profiles_pb.UpdateProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProfilesService = exports.ProfilesService = {
  createProfile: {
    path: '/profiles.v1.Profiles/CreateProfile',
    requestStream: false,
    responseStream: false,
    requestType: profiles_pb.CreateProfileRequest,
    responseType: profiles_pb.ProfileResponse,
    requestSerialize: serialize_profiles_v1_CreateProfileRequest,
    requestDeserialize: deserialize_profiles_v1_CreateProfileRequest,
    responseSerialize: serialize_profiles_v1_ProfileResponse,
    responseDeserialize: deserialize_profiles_v1_ProfileResponse,
  },
  getProfile: {
    path: '/profiles.v1.Profiles/GetProfile',
    requestStream: false,
    responseStream: false,
    requestType: profiles_pb.GetProfileRequest,
    responseType: profiles_pb.ProfileResponse,
    requestSerialize: serialize_profiles_v1_GetProfileRequest,
    requestDeserialize: deserialize_profiles_v1_GetProfileRequest,
    responseSerialize: serialize_profiles_v1_ProfileResponse,
    responseDeserialize: deserialize_profiles_v1_ProfileResponse,
  },
  updateProfile: {
    path: '/profiles.v1.Profiles/UpdateProfile',
    requestStream: false,
    responseStream: false,
    requestType: profiles_pb.UpdateProfileRequest,
    responseType: profiles_pb.ProfileResponse,
    requestSerialize: serialize_profiles_v1_UpdateProfileRequest,
    requestDeserialize: deserialize_profiles_v1_UpdateProfileRequest,
    responseSerialize: serialize_profiles_v1_ProfileResponse,
    responseDeserialize: deserialize_profiles_v1_ProfileResponse,
  },
  updateProfileStatus: {
    path: '/profiles.v1.Profiles/UpdateProfileStatus',
    requestStream: false,
    responseStream: false,
    requestType: profiles_pb.ProfileStatusUpdate,
    responseType: profiles_pb.ProfileResponse,
    requestSerialize: serialize_profiles_v1_ProfileStatusUpdate,
    requestDeserialize: deserialize_profiles_v1_ProfileStatusUpdate,
    responseSerialize: serialize_profiles_v1_ProfileResponse,
    responseDeserialize: deserialize_profiles_v1_ProfileResponse,
  },
  updateProfileId: {
    path: '/profiles.v1.Profiles/UpdateProfileId',
    requestStream: false,
    responseStream: false,
    requestType: profiles_pb.ProfileIdUpdate,
    responseType: profiles_pb.ProfileResponse,
    requestSerialize: serialize_profiles_v1_ProfileIdUpdate,
    requestDeserialize: deserialize_profiles_v1_ProfileIdUpdate,
    responseSerialize: serialize_profiles_v1_ProfileResponse,
    responseDeserialize: deserialize_profiles_v1_ProfileResponse,
  },
  deleteProfile: {
    path: '/profiles.v1.Profiles/DeleteProfile',
    requestStream: false,
    responseStream: false,
    requestType: profiles_pb.DeleteProfileRequest,
    responseType: profiles_pb.DeleteResponse,
    requestSerialize: serialize_profiles_v1_DeleteProfileRequest,
    requestDeserialize: deserialize_profiles_v1_DeleteProfileRequest,
    responseSerialize: serialize_profiles_v1_DeleteResponse,
    responseDeserialize: deserialize_profiles_v1_DeleteResponse,
  },
  getRoles: {
    path: '/profiles.v1.Profiles/GetRoles',
    requestStream: false,
    responseStream: false,
    requestType: profiles_pb.RolesRequest,
    responseType: profiles_pb.RolesResponse,
    requestSerialize: serialize_profiles_v1_RolesRequest,
    requestDeserialize: deserialize_profiles_v1_RolesRequest,
    responseSerialize: serialize_profiles_v1_RolesResponse,
    responseDeserialize: deserialize_profiles_v1_RolesResponse,
  },
  getOrg: {
    path: '/profiles.v1.Profiles/GetOrg',
    requestStream: false,
    responseStream: false,
    requestType: profiles_pb.GetOrgRequest,
    responseType: profiles_pb.OrgResponse,
    requestSerialize: serialize_profiles_v1_GetOrgRequest,
    requestDeserialize: deserialize_profiles_v1_GetOrgRequest,
    responseSerialize: serialize_profiles_v1_OrgResponse,
    responseDeserialize: deserialize_profiles_v1_OrgResponse,
  },
  updateOrgStatus: {
    path: '/profiles.v1.Profiles/UpdateOrgStatus',
    requestStream: false,
    responseStream: false,
    requestType: profiles_pb.OrgStatusUpdate,
    responseType: profiles_pb.OrgResponse,
    requestSerialize: serialize_profiles_v1_OrgStatusUpdate,
    requestDeserialize: deserialize_profiles_v1_OrgStatusUpdate,
    responseSerialize: serialize_profiles_v1_OrgResponse,
    responseDeserialize: deserialize_profiles_v1_OrgResponse,
  },
  updateOrgId: {
    path: '/profiles.v1.Profiles/UpdateOrgId',
    requestStream: false,
    responseStream: false,
    requestType: profiles_pb.OrgIdUpdate,
    responseType: profiles_pb.OrgResponse,
    requestSerialize: serialize_profiles_v1_OrgIdUpdate,
    requestDeserialize: deserialize_profiles_v1_OrgIdUpdate,
    responseSerialize: serialize_profiles_v1_OrgResponse,
    responseDeserialize: deserialize_profiles_v1_OrgResponse,
  },
  deleteOrg: {
    path: '/profiles.v1.Profiles/DeleteOrg',
    requestStream: false,
    responseStream: false,
    requestType: profiles_pb.DeleteOrgRequest,
    responseType: profiles_pb.DeleteResponse,
    requestSerialize: serialize_profiles_v1_DeleteOrgRequest,
    requestDeserialize: deserialize_profiles_v1_DeleteOrgRequest,
    responseSerialize: serialize_profiles_v1_DeleteResponse,
    responseDeserialize: deserialize_profiles_v1_DeleteResponse,
  },
};

exports.ProfilesClient = grpc.makeGenericClientConstructor(ProfilesService);
