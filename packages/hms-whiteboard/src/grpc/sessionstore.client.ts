// @generated by protobuf-ts 2.9.4 with parameter long_type_string
// @generated from protobuf file "sessionstore.proto" (package "sessionstorepb", syntax proto3)
// tslint:disable
import type { RpcOptions, RpcTransport, ServerStreamingCall, ServiceInfo, UnaryCall } from '@protobuf-ts/runtime-rpc';
import { stackIntercept } from '@protobuf-ts/runtime-rpc';
import type {
  ChangeStream,
  CountRequest,
  CountResponse,
  DeleteRequest,
  DeleteResponse,
  Event,
  GetRequest,
  GetResponse,
  HelloRequest,
  HelloResponse,
  OpenRequest,
  SetRequest,
  SetResponse,
  SubscribeRequest,
} from './sessionstore';
import { Api, Store } from './sessionstore';
/**
 * @generated from protobuf service sessionstorepb.Api
 */
export interface IApiClient {
  /**
   * @generated from protobuf rpc: Hello(sessionstorepb.HelloRequest) returns (sessionstorepb.HelloResponse);
   */
  hello(input: HelloRequest, options?: RpcOptions): UnaryCall<HelloRequest, HelloResponse>;
  /**
   * @generated from protobuf rpc: Subscribe(sessionstorepb.SubscribeRequest) returns (stream sessionstorepb.Event);
   */
  subscribe(input: SubscribeRequest, options?: RpcOptions): ServerStreamingCall<SubscribeRequest, Event>;
}
/**
 * @generated from protobuf service sessionstorepb.Api
 */
export class ApiClient implements IApiClient, ServiceInfo {
  typeName = Api.typeName;
  methods = Api.methods;
  options = Api.options;
  constructor(private readonly _transport: RpcTransport) {}
  /**
   * @generated from protobuf rpc: Hello(sessionstorepb.HelloRequest) returns (sessionstorepb.HelloResponse);
   */
  hello(input: HelloRequest, options?: RpcOptions): UnaryCall<HelloRequest, HelloResponse> {
    const method = this.methods[0],
      opt = this._transport.mergeOptions(options);
    return stackIntercept<HelloRequest, HelloResponse>('unary', this._transport, method, opt, input);
  }
  /**
   * @generated from protobuf rpc: Subscribe(sessionstorepb.SubscribeRequest) returns (stream sessionstorepb.Event);
   */
  subscribe(input: SubscribeRequest, options?: RpcOptions): ServerStreamingCall<SubscribeRequest, Event> {
    const method = this.methods[1],
      opt = this._transport.mergeOptions(options);
    return stackIntercept<SubscribeRequest, Event>('serverStreaming', this._transport, method, opt, input);
  }
}
// metadata token -> session id, room id, user id, username

// open is used for presence

// change stream will return all keys in order of oldest to newsest.

// max number of keys -> 5000
// max size per key -> 10240 Bytes

/**
 * @generated from protobuf service sessionstorepb.Store
 */
export interface IStoreClient {
  /**
   * open - start listening to updates in keys with provided match patterns
   * provide change_id as last received ID to resume updates
   *
   * @generated from protobuf rpc: open(sessionstorepb.OpenRequest) returns (stream sessionstorepb.ChangeStream);
   */
  open(input: OpenRequest, options?: RpcOptions): ServerStreamingCall<OpenRequest, ChangeStream>;
  /**
   * get last stored value in given key
   *
   * @generated from protobuf rpc: get(sessionstorepb.GetRequest) returns (sessionstorepb.GetResponse);
   */
  get(input: GetRequest, options?: RpcOptions): UnaryCall<GetRequest, GetResponse>;
  /**
   * set key value
   *
   * @generated from protobuf rpc: set(sessionstorepb.SetRequest) returns (sessionstorepb.SetResponse);
   */
  set(input: SetRequest, options?: RpcOptions): UnaryCall<SetRequest, SetResponse>;
  /**
   * delete key from store
   *
   * @generated from protobuf rpc: delete(sessionstorepb.DeleteRequest) returns (sessionstorepb.DeleteResponse);
   */
  delete(input: DeleteRequest, options?: RpcOptions): UnaryCall<DeleteRequest, DeleteResponse>;
  /**
   * count get count of keys
   *
   * @generated from protobuf rpc: count(sessionstorepb.CountRequest) returns (sessionstorepb.CountResponse);
   */
  count(input: CountRequest, options?: RpcOptions): UnaryCall<CountRequest, CountResponse>;
}
// metadata token -> session id, room id, user id, username

// open is used for presence

// change stream will return all keys in order of oldest to newsest.

// max number of keys -> 5000
// max size per key -> 10240 Bytes

/**
 * @generated from protobuf service sessionstorepb.Store
 */
export class StoreClient implements IStoreClient, ServiceInfo {
  typeName = Store.typeName;
  methods = Store.methods;
  options = Store.options;
  constructor(private readonly _transport: RpcTransport) {}
  /**
   * open - start listening to updates in keys with provided match patterns
   * provide change_id as last received ID to resume updates
   *
   * @generated from protobuf rpc: open(sessionstorepb.OpenRequest) returns (stream sessionstorepb.ChangeStream);
   */
  open(input: OpenRequest, options?: RpcOptions): ServerStreamingCall<OpenRequest, ChangeStream> {
    const method = this.methods[0],
      opt = this._transport.mergeOptions(options);
    return stackIntercept<OpenRequest, ChangeStream>('serverStreaming', this._transport, method, opt, input);
  }
  /**
   * get last stored value in given key
   *
   * @generated from protobuf rpc: get(sessionstorepb.GetRequest) returns (sessionstorepb.GetResponse);
   */
  get(input: GetRequest, options?: RpcOptions): UnaryCall<GetRequest, GetResponse> {
    const method = this.methods[1],
      opt = this._transport.mergeOptions(options);
    return stackIntercept<GetRequest, GetResponse>('unary', this._transport, method, opt, input);
  }
  /**
   * set key value
   *
   * @generated from protobuf rpc: set(sessionstorepb.SetRequest) returns (sessionstorepb.SetResponse);
   */
  set(input: SetRequest, options?: RpcOptions): UnaryCall<SetRequest, SetResponse> {
    const method = this.methods[2],
      opt = this._transport.mergeOptions(options);
    return stackIntercept<SetRequest, SetResponse>('unary', this._transport, method, opt, input);
  }
  /**
   * delete key from store
   *
   * @generated from protobuf rpc: delete(sessionstorepb.DeleteRequest) returns (sessionstorepb.DeleteResponse);
   */
  delete(input: DeleteRequest, options?: RpcOptions): UnaryCall<DeleteRequest, DeleteResponse> {
    const method = this.methods[3],
      opt = this._transport.mergeOptions(options);
    return stackIntercept<DeleteRequest, DeleteResponse>('unary', this._transport, method, opt, input);
  }
  /**
   * count get count of keys
   *
   * @generated from protobuf rpc: count(sessionstorepb.CountRequest) returns (sessionstorepb.CountResponse);
   */
  count(input: CountRequest, options?: RpcOptions): UnaryCall<CountRequest, CountResponse> {
    const method = this.methods[4],
      opt = this._transport.mergeOptions(options);
    return stackIntercept<CountRequest, CountResponse>('unary', this._transport, method, opt, input);
  }
}