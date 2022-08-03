const grpc = require('@grpc/grpc-js')
const getProtoDefinition = require('./proto-definition')

const protoPath = `${__dirname}/../chat.proto`
const chatProtoDefinition = getProtoDefinition(protoPath)

function main () {
  const target = '0.0.0.0:9090'
  const client = new chatProtoDefinition.Chat(target, grpc.credentials.createInsecure())

  const deadline = new Date()
  deadline.setSeconds(deadline.getSeconds() + 5)

  client.waitForReady(deadline, (err) => {
    if (err) {
      throw err
    }

    console.log('Client ready')
  })

  const sendMessageRequest = {
    text: 'Hello I am a random client',
    author: 'Client'
  }

  client.Send(sendMessageRequest, function (err, _) {
    if (err) {
      throw err
    }
  })

  client.GetAll(null, (err, res) => {
    if (err) {
      throw err
    }

    console.log("Getting all existing messages")
    console.log(res.messages)
  })

  new Promise(r => setTimeout(r, 2000))
    .then(() => {
      console.log('Streaming live messages')

      const stream = client.stream()
      stream.on('data', msg => console.log(msg))
    })
}

main()
