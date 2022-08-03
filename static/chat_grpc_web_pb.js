/**
 * @fileoverview gRPC-Web generated client stub for chat
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.chat = require('./chat_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.chat.ChatClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.chat.ChatPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.SendRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Chat_Send = new grpc.web.MethodDescriptor(
  '/chat.Chat/Send',
  grpc.web.MethodType.UNARY,
  proto.chat.SendRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.chat.SendRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.chat.SendRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatClient.prototype.send =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.Chat/Send',
      request,
      metadata || {},
      methodDescriptor_Chat_Send,
      callback);
};


/**
 * @param {!proto.chat.SendRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.chat.ChatPromiseClient.prototype.send =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.Chat/Send',
      request,
      metadata || {},
      methodDescriptor_Chat_Send);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.chat.ChatMessage>}
 */
const methodDescriptor_Chat_Stream = new grpc.web.MethodDescriptor(
  '/chat.Chat/Stream',
  grpc.web.MethodType.SERVER_STREAMING,
  google_protobuf_empty_pb.Empty,
  proto.chat.ChatMessage,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.ChatMessage.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.chat.ChatMessage>}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatClient.prototype.stream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/chat.Chat/Stream',
      request,
      metadata || {},
      methodDescriptor_Chat_Stream);
};


/**
 * @param {!proto.google.protobuf.Empty} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.chat.ChatMessage>}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatPromiseClient.prototype.stream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/chat.Chat/Stream',
      request,
      metadata || {},
      methodDescriptor_Chat_Stream);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.chat.GetAllResponse>}
 */
const methodDescriptor_Chat_GetAll = new grpc.web.MethodDescriptor(
  '/chat.Chat/GetAll',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.chat.GetAllResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.GetAllResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.chat.GetAllResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chat.GetAllResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatClient.prototype.getAll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.Chat/GetAll',
      request,
      metadata || {},
      methodDescriptor_Chat_GetAll,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chat.GetAllResponse>}
 *     Promise that resolves to the response
 */
proto.chat.ChatPromiseClient.prototype.getAll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.Chat/GetAll',
      request,
      metadata || {},
      methodDescriptor_Chat_GetAll);
};


module.exports = proto.chat;

