module.exports = (bot, message) => {
  if (message.author.bot) {return}
    // console.log(message.content);
    const {content} = message
    console.log(content);

    const
      messageArray = content.toLowerCase().split(' '),
      command = messageArray[0],
      args = messageArray.slice(1),
      messageArrayFull = content.split(' '),
      argsF = messageArrayFull.slice(1),
      commandRun = bot.commands.get(command);

    if (commandRun) {
      commandRun(bot, message, args, argsF)
    }

    
}