const grpc = require('@grpc/grpc-js')
const getProtoDefinition = require('./proto-definition')

const protoPath = `${__dirname}/../chat.proto`
const chatProtoDefinition = getProtoDefinition(protoPath)

const messages = [
  {
    text: 'Hello!',
    author: 'Alice',
    time: new Date(),
  },
  {
    text: "Hi Alice, how are you doing?",
    author: 'Bob',
    time: new Date(),
  }
]

function Stream (call) {
  let count = 0;

  (function () {
    call.write({
      text: `Message ${count}`,
      author: 'Bot',
      time: new Date()
    })

    count++
    setTimeout(arguments.callee, 1000)
  })()
}

function GetAll (call, callback) {
  callback(null, { messages })
}

function Send (call, callback) {
  messages.push({
    text: call.request.text,
    author: call.request.author,
    time: new Date(),
  })

  callback(null, null)
}

function main () {
  const server = new grpc.Server()
  server.addService(chatProtoDefinition.Chat.service, {
    Send: Send,
    GetAll: GetAll,
    Stream: Stream
  })
  server.bindAsync('0.0.0.0:9090', grpc.ServerCredentials.createInsecure(), () => {
    server.start()
  })
}

main()