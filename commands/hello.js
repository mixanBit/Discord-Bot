module.export = {
  name: hello,
  callback: ({message}) => {
    message.channel.send('hello mihail!')
  }
}