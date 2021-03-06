// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var as_external_api_fuotaDeployment_pb = require('../../../as/external/api/fuotaDeployment_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var as_external_api_multicastGroup_pb = require('../../../as/external/api/multicastGroup_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_api_CreateFUOTADeploymentForDeviceRequest(arg) {
  if (!(arg instanceof as_external_api_fuotaDeployment_pb.CreateFUOTADeploymentForDeviceRequest)) {
    throw new Error('Expected argument of type api.CreateFUOTADeploymentForDeviceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_CreateFUOTADeploymentForDeviceRequest(buffer_arg) {
  return as_external_api_fuotaDeployment_pb.CreateFUOTADeploymentForDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_CreateFUOTADeploymentForDeviceResponse(arg) {
  if (!(arg instanceof as_external_api_fuotaDeployment_pb.CreateFUOTADeploymentForDeviceResponse)) {
    throw new Error('Expected argument of type api.CreateFUOTADeploymentForDeviceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_CreateFUOTADeploymentForDeviceResponse(buffer_arg) {
  return as_external_api_fuotaDeployment_pb.CreateFUOTADeploymentForDeviceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_CreateFUOTADeploymentForGroupRequest(arg) {
  if (!(arg instanceof as_external_api_fuotaDeployment_pb.CreateFUOTADeploymentForGroupRequest)) {
    throw new Error('Expected argument of type api.CreateFUOTADeploymentForGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_CreateFUOTADeploymentForGroupRequest(buffer_arg) {
  return as_external_api_fuotaDeployment_pb.CreateFUOTADeploymentForGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_CreateFUOTADeploymentForGroupResponse(arg) {
  if (!(arg instanceof as_external_api_fuotaDeployment_pb.CreateFUOTADeploymentForGroupResponse)) {
    throw new Error('Expected argument of type api.CreateFUOTADeploymentForGroupResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_CreateFUOTADeploymentForGroupResponse(buffer_arg) {
  return as_external_api_fuotaDeployment_pb.CreateFUOTADeploymentForGroupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetFUOTADeploymentDeviceRequest(arg) {
  if (!(arg instanceof as_external_api_fuotaDeployment_pb.GetFUOTADeploymentDeviceRequest)) {
    throw new Error('Expected argument of type api.GetFUOTADeploymentDeviceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetFUOTADeploymentDeviceRequest(buffer_arg) {
  return as_external_api_fuotaDeployment_pb.GetFUOTADeploymentDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetFUOTADeploymentDeviceResponse(arg) {
  if (!(arg instanceof as_external_api_fuotaDeployment_pb.GetFUOTADeploymentDeviceResponse)) {
    throw new Error('Expected argument of type api.GetFUOTADeploymentDeviceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetFUOTADeploymentDeviceResponse(buffer_arg) {
  return as_external_api_fuotaDeployment_pb.GetFUOTADeploymentDeviceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetFUOTADeploymentRequest(arg) {
  if (!(arg instanceof as_external_api_fuotaDeployment_pb.GetFUOTADeploymentRequest)) {
    throw new Error('Expected argument of type api.GetFUOTADeploymentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetFUOTADeploymentRequest(buffer_arg) {
  return as_external_api_fuotaDeployment_pb.GetFUOTADeploymentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetFUOTADeploymentResponse(arg) {
  if (!(arg instanceof as_external_api_fuotaDeployment_pb.GetFUOTADeploymentResponse)) {
    throw new Error('Expected argument of type api.GetFUOTADeploymentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetFUOTADeploymentResponse(buffer_arg) {
  return as_external_api_fuotaDeployment_pb.GetFUOTADeploymentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_ListFUOTADeploymentDevicesRequest(arg) {
  if (!(arg instanceof as_external_api_fuotaDeployment_pb.ListFUOTADeploymentDevicesRequest)) {
    throw new Error('Expected argument of type api.ListFUOTADeploymentDevicesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_ListFUOTADeploymentDevicesRequest(buffer_arg) {
  return as_external_api_fuotaDeployment_pb.ListFUOTADeploymentDevicesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_ListFUOTADeploymentDevicesResponse(arg) {
  if (!(arg instanceof as_external_api_fuotaDeployment_pb.ListFUOTADeploymentDevicesResponse)) {
    throw new Error('Expected argument of type api.ListFUOTADeploymentDevicesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_ListFUOTADeploymentDevicesResponse(buffer_arg) {
  return as_external_api_fuotaDeployment_pb.ListFUOTADeploymentDevicesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_ListFUOTADeploymentRequest(arg) {
  if (!(arg instanceof as_external_api_fuotaDeployment_pb.ListFUOTADeploymentRequest)) {
    throw new Error('Expected argument of type api.ListFUOTADeploymentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_ListFUOTADeploymentRequest(buffer_arg) {
  return as_external_api_fuotaDeployment_pb.ListFUOTADeploymentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_ListFUOTADeploymentResponse(arg) {
  if (!(arg instanceof as_external_api_fuotaDeployment_pb.ListFUOTADeploymentResponse)) {
    throw new Error('Expected argument of type api.ListFUOTADeploymentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_ListFUOTADeploymentResponse(buffer_arg) {
  return as_external_api_fuotaDeployment_pb.ListFUOTADeploymentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_RetryFUOTADeploymentRequest(arg) {
  if (!(arg instanceof as_external_api_fuotaDeployment_pb.RetryFUOTADeploymentRequest)) {
    throw new Error('Expected argument of type api.RetryFUOTADeploymentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_RetryFUOTADeploymentRequest(buffer_arg) {
  return as_external_api_fuotaDeployment_pb.RetryFUOTADeploymentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


// FUOTADeploymentService is the service managing FUOTA deployments.
var FUOTADeploymentServiceService = exports.FUOTADeploymentServiceService = {
  // CreateForDevice creates a deployment for the given DevEUI.
  createForDevice: {
    path: '/api.FUOTADeploymentService/CreateForDevice',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_fuotaDeployment_pb.CreateFUOTADeploymentForDeviceRequest,
    responseType: as_external_api_fuotaDeployment_pb.CreateFUOTADeploymentForDeviceResponse,
    requestSerialize: serialize_api_CreateFUOTADeploymentForDeviceRequest,
    requestDeserialize: deserialize_api_CreateFUOTADeploymentForDeviceRequest,
    responseSerialize: serialize_api_CreateFUOTADeploymentForDeviceResponse,
    responseDeserialize: deserialize_api_CreateFUOTADeploymentForDeviceResponse,
  },
  // CreateForGroup creates a deployment for the given multicast group id.
  createForGroup: {
    path: '/api.FUOTADeploymentService/CreateForGroup',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_fuotaDeployment_pb.CreateFUOTADeploymentForGroupRequest,
    responseType: as_external_api_fuotaDeployment_pb.CreateFUOTADeploymentForGroupResponse,
    requestSerialize: serialize_api_CreateFUOTADeploymentForGroupRequest,
    requestDeserialize: deserialize_api_CreateFUOTADeploymentForGroupRequest,
    responseSerialize: serialize_api_CreateFUOTADeploymentForGroupResponse,
    responseDeserialize: deserialize_api_CreateFUOTADeploymentForGroupResponse,
  },
  // Get returns the fuota deployment for the given id.
  get: {
    path: '/api.FUOTADeploymentService/Get',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_fuotaDeployment_pb.GetFUOTADeploymentRequest,
    responseType: as_external_api_fuotaDeployment_pb.GetFUOTADeploymentResponse,
    requestSerialize: serialize_api_GetFUOTADeploymentRequest,
    requestDeserialize: deserialize_api_GetFUOTADeploymentRequest,
    responseSerialize: serialize_api_GetFUOTADeploymentResponse,
    responseDeserialize: deserialize_api_GetFUOTADeploymentResponse,
  },
  // List lists the fuota deployments.
  list: {
    path: '/api.FUOTADeploymentService/List',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_fuotaDeployment_pb.ListFUOTADeploymentRequest,
    responseType: as_external_api_fuotaDeployment_pb.ListFUOTADeploymentResponse,
    requestSerialize: serialize_api_ListFUOTADeploymentRequest,
    requestDeserialize: deserialize_api_ListFUOTADeploymentRequest,
    responseSerialize: serialize_api_ListFUOTADeploymentResponse,
    responseDeserialize: deserialize_api_ListFUOTADeploymentResponse,
  },
  // GetDeploymentDevice returns the deployment device.
  getDeploymentDevice: {
    path: '/api.FUOTADeploymentService/GetDeploymentDevice',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_fuotaDeployment_pb.GetFUOTADeploymentDeviceRequest,
    responseType: as_external_api_fuotaDeployment_pb.GetFUOTADeploymentDeviceResponse,
    requestSerialize: serialize_api_GetFUOTADeploymentDeviceRequest,
    requestDeserialize: deserialize_api_GetFUOTADeploymentDeviceRequest,
    responseSerialize: serialize_api_GetFUOTADeploymentDeviceResponse,
    responseDeserialize: deserialize_api_GetFUOTADeploymentDeviceResponse,
  },
  // ListDeploymentDevices lists the devices (and status) for the given fuota deployment ID.
  listDeploymentDevices: {
    path: '/api.FUOTADeploymentService/ListDeploymentDevices',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_fuotaDeployment_pb.ListFUOTADeploymentDevicesRequest,
    responseType: as_external_api_fuotaDeployment_pb.ListFUOTADeploymentDevicesResponse,
    requestSerialize: serialize_api_ListFUOTADeploymentDevicesRequest,
    requestDeserialize: deserialize_api_ListFUOTADeploymentDevicesRequest,
    responseSerialize: serialize_api_ListFUOTADeploymentDevicesResponse,
    responseDeserialize: deserialize_api_ListFUOTADeploymentDevicesResponse,
  },
  retryDeployment: {
    path: '/api.FUOTADeploymentService/RetryDeployment',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_fuotaDeployment_pb.RetryFUOTADeploymentRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_RetryFUOTADeploymentRequest,
    requestDeserialize: deserialize_api_RetryFUOTADeploymentRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.FUOTADeploymentServiceClient = grpc.makeGenericClientConstructor(FUOTADeploymentServiceService);
