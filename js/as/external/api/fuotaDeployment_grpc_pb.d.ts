// GENERATED CODE -- DO NOT EDIT!

// package: api
// file: as/external/api/fuotaDeployment.proto

import * as as_external_api_fuotaDeployment_pb from "../../../as/external/api/fuotaDeployment_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IFUOTADeploymentServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createForDevice: grpc.MethodDefinition<as_external_api_fuotaDeployment_pb.CreateFUOTADeploymentForDeviceRequest, as_external_api_fuotaDeployment_pb.CreateFUOTADeploymentForDeviceResponse>;
  createForGroup: grpc.MethodDefinition<as_external_api_fuotaDeployment_pb.CreateFUOTADeploymentForGroupRequest, as_external_api_fuotaDeployment_pb.CreateFUOTADeploymentForGroupResponse>;
  get: grpc.MethodDefinition<as_external_api_fuotaDeployment_pb.GetFUOTADeploymentRequest, as_external_api_fuotaDeployment_pb.GetFUOTADeploymentResponse>;
  list: grpc.MethodDefinition<as_external_api_fuotaDeployment_pb.ListFUOTADeploymentRequest, as_external_api_fuotaDeployment_pb.ListFUOTADeploymentResponse>;
  getDeploymentDevice: grpc.MethodDefinition<as_external_api_fuotaDeployment_pb.GetFUOTADeploymentDeviceRequest, as_external_api_fuotaDeployment_pb.GetFUOTADeploymentDeviceResponse>;
  listDeploymentDevices: grpc.MethodDefinition<as_external_api_fuotaDeployment_pb.ListFUOTADeploymentDevicesRequest, as_external_api_fuotaDeployment_pb.ListFUOTADeploymentDevicesResponse>;
  retryDeployment: grpc.MethodDefinition<as_external_api_fuotaDeployment_pb.RetryFUOTADeploymentRequest, google_protobuf_empty_pb.Empty>;
}

export const FUOTADeploymentServiceService: IFUOTADeploymentServiceService;

export class FUOTADeploymentServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createForDevice(argument: as_external_api_fuotaDeployment_pb.CreateFUOTADeploymentForDeviceRequest, callback: grpc.requestCallback<as_external_api_fuotaDeployment_pb.CreateFUOTADeploymentForDeviceResponse>): grpc.ClientUnaryCall;
  createForDevice(argument: as_external_api_fuotaDeployment_pb.CreateFUOTADeploymentForDeviceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_fuotaDeployment_pb.CreateFUOTADeploymentForDeviceResponse>): grpc.ClientUnaryCall;
  createForDevice(argument: as_external_api_fuotaDeployment_pb.CreateFUOTADeploymentForDeviceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_fuotaDeployment_pb.CreateFUOTADeploymentForDeviceResponse>): grpc.ClientUnaryCall;
  createForGroup(argument: as_external_api_fuotaDeployment_pb.CreateFUOTADeploymentForGroupRequest, callback: grpc.requestCallback<as_external_api_fuotaDeployment_pb.CreateFUOTADeploymentForGroupResponse>): grpc.ClientUnaryCall;
  createForGroup(argument: as_external_api_fuotaDeployment_pb.CreateFUOTADeploymentForGroupRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_fuotaDeployment_pb.CreateFUOTADeploymentForGroupResponse>): grpc.ClientUnaryCall;
  createForGroup(argument: as_external_api_fuotaDeployment_pb.CreateFUOTADeploymentForGroupRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_fuotaDeployment_pb.CreateFUOTADeploymentForGroupResponse>): grpc.ClientUnaryCall;
  get(argument: as_external_api_fuotaDeployment_pb.GetFUOTADeploymentRequest, callback: grpc.requestCallback<as_external_api_fuotaDeployment_pb.GetFUOTADeploymentResponse>): grpc.ClientUnaryCall;
  get(argument: as_external_api_fuotaDeployment_pb.GetFUOTADeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_fuotaDeployment_pb.GetFUOTADeploymentResponse>): grpc.ClientUnaryCall;
  get(argument: as_external_api_fuotaDeployment_pb.GetFUOTADeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_fuotaDeployment_pb.GetFUOTADeploymentResponse>): grpc.ClientUnaryCall;
  list(argument: as_external_api_fuotaDeployment_pb.ListFUOTADeploymentRequest, callback: grpc.requestCallback<as_external_api_fuotaDeployment_pb.ListFUOTADeploymentResponse>): grpc.ClientUnaryCall;
  list(argument: as_external_api_fuotaDeployment_pb.ListFUOTADeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_fuotaDeployment_pb.ListFUOTADeploymentResponse>): grpc.ClientUnaryCall;
  list(argument: as_external_api_fuotaDeployment_pb.ListFUOTADeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_fuotaDeployment_pb.ListFUOTADeploymentResponse>): grpc.ClientUnaryCall;
  getDeploymentDevice(argument: as_external_api_fuotaDeployment_pb.GetFUOTADeploymentDeviceRequest, callback: grpc.requestCallback<as_external_api_fuotaDeployment_pb.GetFUOTADeploymentDeviceResponse>): grpc.ClientUnaryCall;
  getDeploymentDevice(argument: as_external_api_fuotaDeployment_pb.GetFUOTADeploymentDeviceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_fuotaDeployment_pb.GetFUOTADeploymentDeviceResponse>): grpc.ClientUnaryCall;
  getDeploymentDevice(argument: as_external_api_fuotaDeployment_pb.GetFUOTADeploymentDeviceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_fuotaDeployment_pb.GetFUOTADeploymentDeviceResponse>): grpc.ClientUnaryCall;
  listDeploymentDevices(argument: as_external_api_fuotaDeployment_pb.ListFUOTADeploymentDevicesRequest, callback: grpc.requestCallback<as_external_api_fuotaDeployment_pb.ListFUOTADeploymentDevicesResponse>): grpc.ClientUnaryCall;
  listDeploymentDevices(argument: as_external_api_fuotaDeployment_pb.ListFUOTADeploymentDevicesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_fuotaDeployment_pb.ListFUOTADeploymentDevicesResponse>): grpc.ClientUnaryCall;
  listDeploymentDevices(argument: as_external_api_fuotaDeployment_pb.ListFUOTADeploymentDevicesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_fuotaDeployment_pb.ListFUOTADeploymentDevicesResponse>): grpc.ClientUnaryCall;
  retryDeployment(argument: as_external_api_fuotaDeployment_pb.RetryFUOTADeploymentRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  retryDeployment(argument: as_external_api_fuotaDeployment_pb.RetryFUOTADeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  retryDeployment(argument: as_external_api_fuotaDeployment_pb.RetryFUOTADeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
}
