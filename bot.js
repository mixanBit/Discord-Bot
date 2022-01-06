const Discord = require('discord.js'),
    config = require('./config.json');
config.cfg.intents = new Discord.Intents(config.cfg.intents);
    
const bot = new Discord.Client(config.cfg);

// Проверка запуска
bot.on('ready', () => {
  console.log('Бот запустился ' + bot.user.username);
})


bot.on('messageCreate', (message) => {
  if (message.author.bot) {return}

  console.log(message.content);

  // message.reply(message.content)
  message.channel.send({
    // tts: true,
    content: message.content,
    embeds: [
      {
        title: message.content,
        description: 'description',
        color: 'AQUA',
        url: 'https://discord.js.org/#/docs/main/stable/typedef/MessageEmbedOptions'
      }
    ]
  })
})

bot.login(config.token);