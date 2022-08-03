# grpc-node-cli-chat

This repository is a sample of the capabilities of grpc.
It demonstrates how easy is create code from proto files.

The `/static` directory contains the code autogenerated by using protoc and protoc-gen-grpc-web tools.
The client and server for static version are not implemented.
On the other hand, in the `/dynamic` directory we have the code needed for create the client and server just by reading the proto file.

This repository also contains envoy proxy setup, take into account if you want to use web clients you will need a proxy in order to make it works.

### Scripts

- `start:server`: Run server
- `start:client`: Run client
- `build_protos`: Build client and server templates in `/static` directory
- `envoy:docker-build`: Build envoy docker image by using `envoy.yaml` configuration
- `envoy:docker-run`: Run the docker image with envoy