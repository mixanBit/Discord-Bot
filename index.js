const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')
require('dotenv').config()

const client = new DiscordJS.Client({
  partials: ['MESSAGE', 'REACTION'],
})

client.on('ready', () => {
  console.log('Бот готов!');
  const dbOptions = {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
  }

  new WOKCommands(client, {
    commdnsDir: 'commands',
    featureDir: 'features',
    dbOptions
  })

  .setDefaultPrefix('.')
})
