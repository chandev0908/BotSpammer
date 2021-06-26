const Discord = require("discord.js-selfbot-v11");
const client = new Discord.Client();
let spammer = require("./spamFunction");
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if(msg.author.id === '375992650429628416' && msg.contains === "testbot"){
    msg.channel.send("Running!")
  }
  if (msg.channel.id === "746017057669382276") {
    msg.embeds.forEach((embed) => {
      if(msg.author.id == '432610292342587392' && embed.author.name === "Sayu Ogiwara"){
        msg.react("❤️");
        console.log("You get " + embed.author.name);
      }
      if(msg.author.id == '432610292342587392' && embed.author.name === "Amatsuka Uto"){
        msg.react("❤️");
        console.log("You get " + embed.author.name);
      }
      if(msg.author.id == '432610292342587392' && embed.author.name === "Vladilena Milizé"){
        msg.react("❤️");
        console.log("You get " + embed.author.name);
      }
      if(msg.author.id == '432610292342587392' && embed.author.name === "Elma"){
        msg.react("❤️");
        console.log("You get " + embed.author.name);
      }
      if(msg.author.id == '432610292342587392' && embed.author.name === "Lelouch Lamperouge"){
        msg.react("❤️");
        console.log("You get " + embed.author.name);
      }
      if(msg.author.id == '432610292342587392' && embed.author.name === "Aoi Nabi"){
        msg.react("❤️");
        console.log("You get " + embed.author.name);
      }
   });
  }
});

client.login(process.env.TOKEN);
