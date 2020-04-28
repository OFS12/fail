const Discord: = require('discord.js');
const client = new DiscordClient();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
    
  }
});

client.login(process.env.NzAzMTcwMjcxOTYzNzc1MDg2.Xqgucw.RZDhQeFhSZBL7kDs5eZwbhmAAWY);
