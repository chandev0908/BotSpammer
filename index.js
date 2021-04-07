const Discord = require('discord.js-selfbot-v11');
const client = new Discord.Client();
let spammer = require('./spamFunction');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'zin!spamrun') {
    spammer.setChannel(msg.channel);
    spammer.setStatus(true);
  }else if(msg.content === 'zin!spamstop'){
    spammer.setStatus(false);
  }
});

client.login(process.env.TOKEN);