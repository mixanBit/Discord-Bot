module.exports = (bot) => {

  // Проверка запуска
  bot.on('ready', () => {
    require('./ready.js')(bot)
  })

  bot.on('messageCreate', (message) => {
    require('./messageCreate.js')(bot, message)
  })
}// module.exports 

