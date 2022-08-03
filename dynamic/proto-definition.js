const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

function getProtoDefinition(path) {
    const packageDefinition = protoLoader.loadSync(
        path,
        {keepCase: true,
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true
        });

    return grpc.loadPackageDefinition(packageDefinition).chat;
}

module.exports = getProtoDefinition