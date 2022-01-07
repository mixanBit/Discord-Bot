module.exports = async (bot, message, args, argsF) => {

  message.channel.send({
    content: 'pong'
  })
  
}
module.exports.names = ['ping']