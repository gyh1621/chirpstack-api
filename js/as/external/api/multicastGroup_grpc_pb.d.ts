// GENERATED CODE -- DO NOT EDIT!

// package: api
// file: as/external/api/multicastGroup.proto

import * as as_external_api_multicastGroup_pb from "../../../as/external/api/multicastGroup_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IMulticastGroupServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  create: grpc.MethodDefinition<as_external_api_multicastGroup_pb.CreateMulticastGroupRequest, as_external_api_multicastGroup_pb.CreateMulticastGroupResponse>;
  get: grpc.MethodDefinition<as_external_api_multicastGroup_pb.GetMulticastGroupRequest, as_external_api_multicastGroup_pb.GetMulticastGroupResponse>;
  update: grpc.MethodDefinition<as_external_api_multicastGroup_pb.UpdateMulticastGroupRequest, google_protobuf_empty_pb.Empty>;
  delete: grpc.MethodDefinition<as_external_api_multicastGroup_pb.DeleteMulticastGroupRequest, google_protobuf_empty_pb.Empty>;
  list: grpc.MethodDefinition<as_external_api_multicastGroup_pb.ListMulticastGroupRequest, as_external_api_multicastGroup_pb.ListMulticastGroupResponse>;
  addDevice: grpc.MethodDefinition<as_external_api_multicastGroup_pb.AddDeviceToMulticastGroupRequest, google_protobuf_empty_pb.Empty>;
  addApplicationDevice: grpc.MethodDefinition<as_external_api_multicastGroup_pb.AddApplicationDeviceToMulticastGroupRequest, google_protobuf_empty_pb.Empty>;
  removeDevice: grpc.MethodDefinition<as_external_api_multicastGroup_pb.RemoveDeviceFromMulticastGroupRequest, google_protobuf_empty_pb.Empty>;
  enqueue: grpc.MethodDefinition<as_external_api_multicastGroup_pb.EnqueueMulticastQueueItemRequest, as_external_api_multicastGroup_pb.EnqueueMulticastQueueItemResponse>;
  flushQueue: grpc.MethodDefinition<as_external_api_multicastGroup_pb.FlushMulticastGroupQueueItemsRequest, google_protobuf_empty_pb.Empty>;
  listQueue: grpc.MethodDefinition<as_external_api_multicastGroup_pb.ListMulticastGroupQueueItemsRequest, as_external_api_multicastGroup_pb.ListMulticastGroupQueueItemsResponse>;
  listSetup: grpc.MethodDefinition<as_external_api_multicastGroup_pb.ListMulticastGroupSetupItemsRequest, as_external_api_multicastGroup_pb.ListMulticastGroupSetupItemsResponse>;
  resetSetupItem: grpc.MethodDefinition<as_external_api_multicastGroup_pb.ResetMulticastSetupRequest, google_protobuf_empty_pb.Empty>;
}

export const MulticastGroupServiceService: IMulticastGroupServiceService;

export class MulticastGroupServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  create(argument: as_external_api_multicastGroup_pb.CreateMulticastGroupRequest, callback: grpc.requestCallback<as_external_api_multicastGroup_pb.CreateMulticastGroupResponse>): grpc.ClientUnaryCall;
  create(argument: as_external_api_multicastGroup_pb.CreateMulticastGroupRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_multicastGroup_pb.CreateMulticastGroupResponse>): grpc.ClientUnaryCall;
  create(argument: as_external_api_multicastGroup_pb.CreateMulticastGroupRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_multicastGroup_pb.CreateMulticastGroupResponse>): grpc.ClientUnaryCall;
  get(argument: as_external_api_multicastGroup_pb.GetMulticastGroupRequest, callback: grpc.requestCallback<as_external_api_multicastGroup_pb.GetMulticastGroupResponse>): grpc.ClientUnaryCall;
  get(argument: as_external_api_multicastGroup_pb.GetMulticastGroupRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_multicastGroup_pb.GetMulticastGroupResponse>): grpc.ClientUnaryCall;
  get(argument: as_external_api_multicastGroup_pb.GetMulticastGroupRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_multicastGroup_pb.GetMulticastGroupResponse>): grpc.ClientUnaryCall;
  update(argument: as_external_api_multicastGroup_pb.UpdateMulticastGroupRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  update(argument: as_external_api_multicastGroup_pb.UpdateMulticastGroupRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  update(argument: as_external_api_multicastGroup_pb.UpdateMulticastGroupRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  delete(argument: as_external_api_multicastGroup_pb.DeleteMulticastGroupRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  delete(argument: as_external_api_multicastGroup_pb.DeleteMulticastGroupRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  delete(argument: as_external_api_multicastGroup_pb.DeleteMulticastGroupRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  list(argument: as_external_api_multicastGroup_pb.ListMulticastGroupRequest, callback: grpc.requestCallback<as_external_api_multicastGroup_pb.ListMulticastGroupResponse>): grpc.ClientUnaryCall;
  list(argument: as_external_api_multicastGroup_pb.ListMulticastGroupRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_multicastGroup_pb.ListMulticastGroupResponse>): grpc.ClientUnaryCall;
  list(argument: as_external_api_multicastGroup_pb.ListMulticastGroupRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_multicastGroup_pb.ListMulticastGroupResponse>): grpc.ClientUnaryCall;
  addDevice(argument: as_external_api_multicastGroup_pb.AddDeviceToMulticastGroupRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  addDevice(argument: as_external_api_multicastGroup_pb.AddDeviceToMulticastGroupRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  addDevice(argument: as_external_api_multicastGroup_pb.AddDeviceToMulticastGroupRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  addApplicationDevice(argument: as_external_api_multicastGroup_pb.AddApplicationDeviceToMulticastGroupRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  addApplicationDevice(argument: as_external_api_multicastGroup_pb.AddApplicationDeviceToMulticastGroupRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  addApplicationDevice(argument: as_external_api_multicastGroup_pb.AddApplicationDeviceToMulticastGroupRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  removeDevice(argument: as_external_api_multicastGroup_pb.RemoveDeviceFromMulticastGroupRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  removeDevice(argument: as_external_api_multicastGroup_pb.RemoveDeviceFromMulticastGroupRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  removeDevice(argument: as_external_api_multicastGroup_pb.RemoveDeviceFromMulticastGroupRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  enqueue(argument: as_external_api_multicastGroup_pb.EnqueueMulticastQueueItemRequest, callback: grpc.requestCallback<as_external_api_multicastGroup_pb.EnqueueMulticastQueueItemResponse>): grpc.ClientUnaryCall;
  enqueue(argument: as_external_api_multicastGroup_pb.EnqueueMulticastQueueItemRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_multicastGroup_pb.EnqueueMulticastQueueItemResponse>): grpc.ClientUnaryCall;
  enqueue(argument: as_external_api_multicastGroup_pb.EnqueueMulticastQueueItemRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_multicastGroup_pb.EnqueueMulticastQueueItemResponse>): grpc.ClientUnaryCall;
  flushQueue(argument: as_external_api_multicastGroup_pb.FlushMulticastGroupQueueItemsRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  flushQueue(argument: as_external_api_multicastGroup_pb.FlushMulticastGroupQueueItemsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  flushQueue(argument: as_external_api_multicastGroup_pb.FlushMulticastGroupQueueItemsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  listQueue(argument: as_external_api_multicastGroup_pb.ListMulticastGroupQueueItemsRequest, callback: grpc.requestCallback<as_external_api_multicastGroup_pb.ListMulticastGroupQueueItemsResponse>): grpc.ClientUnaryCall;
  listQueue(argument: as_external_api_multicastGroup_pb.ListMulticastGroupQueueItemsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_multicastGroup_pb.ListMulticastGroupQueueItemsResponse>): grpc.ClientUnaryCall;
  listQueue(argument: as_external_api_multicastGroup_pb.ListMulticastGroupQueueItemsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_multicastGroup_pb.ListMulticastGroupQueueItemsResponse>): grpc.ClientUnaryCall;
  listSetup(argument: as_external_api_multicastGroup_pb.ListMulticastGroupSetupItemsRequest, callback: grpc.requestCallback<as_external_api_multicastGroup_pb.ListMulticastGroupSetupItemsResponse>): grpc.ClientUnaryCall;
  listSetup(argument: as_external_api_multicastGroup_pb.ListMulticastGroupSetupItemsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_multicastGroup_pb.ListMulticastGroupSetupItemsResponse>): grpc.ClientUnaryCall;
  listSetup(argument: as_external_api_multicastGroup_pb.ListMulticastGroupSetupItemsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_multicastGroup_pb.ListMulticastGroupSetupItemsResponse>): grpc.ClientUnaryCall;
  resetSetupItem(argument: as_external_api_multicastGroup_pb.ResetMulticastSetupRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  resetSetupItem(argument: as_external_api_multicastGroup_pb.ResetMulticastSetupRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  resetSetupItem(argument: as_external_api_multicastGroup_pb.ResetMulticastSetupRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
}
