const Discord = require('discord.js'),
           fs = require('fs'),
       config = require('./config.json');
config.cfg.intents = new Discord.Intents(config.cfg.intents);
    
const bot = new Discord.Client(config.cfg);

require('./events/index.js')(bot)

// Перебор команд
bot.commands = new Discord.Collection()

const commandFiles = fs.readdirSync('./commands')
for (const file of commandFiles) {
  const comand = require(`./commands/${file}`)
  comand.names.forEach(el => {
    bot.commands.set(el, comand)
  });
}
// console.log(bot.commands);
console.log('token: ' + config.token);
// Токен для хоста
// bot.login(config.token)
bot.login(process.env.token)
// Токен для теста
// bot.login("")