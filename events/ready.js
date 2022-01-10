module.exports = (bot) => {
  console.log('Бот: ' + bot.user.username + ' запустился!');

  bot.user.setPresence({
    activities: [
      {
        name: 'на тебя',
        type: 3
      }
    ]
  })
}