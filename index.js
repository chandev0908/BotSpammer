const Discord = require("discord.js-selfbot-v11");
const client = new Discord.Client();
let spammer = require("./spamFunction");
const config = require("./token.json");
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if (msg.author.id === "375992650429628416" && msg.content === "testbot") {
    msg.channel.send("Running!");
  }
  if (msg.channel.id === "746017057669382276") {
    msg.embeds.forEach((embed) => {
      try {
        setTimeout(() => {
          if (
            msg.author.id == "432610292342587392" &&
            embed.author.name === "Sayu Ogiwara"
          ) {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }
          if (
            msg.author.id == "432610292342587392" &&
            embed.author.name === "Amatsuka Uto"
          ) {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }
          if (
            msg.author.id == "432610292342587392" &&
            embed.author.name === "Vladilena Milizé"
          ) {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }
          if (
            msg.author.id == "432610292342587392" &&
            embed.author.name === "Elma"
          ) {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }
          if (
            msg.author.id == "432610292342587392" &&
            embed.author.name === "Aoi Nabi"
          ) {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }
          if (
            msg.author.id == "432610292342587392" &&
            embed.author.name === "Laika"
          ) {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }
          if (
            msg.author.id == "432610292342587392" &&
            embed.author.name === "Ray"
          ) {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }
          if (
            msg.author.id == "432610292342587392" &&
            embed.author.name === "Near"
          ) {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }
          if (
            msg.author.id == "432610292342587392" &&
            embed.author.name === "Zhongli"
          ) {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }
          if (
            msg.author.id == "432610292342587392" &&
            embed.author.name === "Kaedehara Kazuha"
          ) {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }
          //Romeo wish
          if (
            msg.author.id == "432610292342587392" &&
            embed.author.name === "Nyanners"
          ) {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }
          if (
            msg.author.id == "432610292342587392" &&
            embed.author.name === "Josee"
          ) {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }
          if (
            msg.author.id == "432610292342587392" &&
            embed.author.name === "Sig (Gangsta)"
          ) {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }
          if (
            msg.author.id == "432610292342587392" &&
            embed.author.name === "Kaoruko Hanayagi"
          ) {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }
          if (
            msg.author.id == "432610292342587392" &&
            embed.author.name === "Junna Hoshimi"
          ) {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }
          // Cevan wish
          if (
            msg.author.id == "432610292342587392" &&
            embed.author.name === "Skull Knight"
          ) {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }
          if (
            msg.author.id == "432610292342587392" &&
            embed.author.name === "Trevor Belmont"
          ) {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }
          if (
            msg.author.id == "432610292342587392" &&
            embed.author.name === "Musashi Miyamoto"
          ) {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }
          if (
            msg.author.id == "432610292342587392" &&
            embed.author.name === "Shinei Nouzen"
          ) {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }
          if (
            msg.author.id == "432610292342587392" &&
            embed.author.name === "Irene"
          ) {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }
          if (
            msg.author.id == "432610292342587392" &&
            embed.author.name === "Diablo (TenSura)"
          ) {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }
          // Bink wish Imma steal everything
          if (
            msg.author.id == "432610292342587392" &&
            embed.author.name === "Sumia"
          ) {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }
          if (
            msg.author.id == "432610292342587392" &&
            embed.author.name === "Ashe"
          ) {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }
          if (
            msg.author.id == "432610292342587392" &&
            embed.author.name === "Tomoko Nomura"
          ) {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }
          if (
            msg.author.id == "432610292342587392" &&
            embed.author.name === "Kagura Baldwin"
          ) {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }
          if (
            msg.author.id == "432610292342587392" &&
            embed.author.name === "Ririto Ibusuki"
          ) {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }
          if (
            msg.author.id == "432610292342587392" &&
            embed.author.name === "Nyanners"
          ) {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }
          if (
            msg.author.id == "432610292342587392" &&
            embed.author.name === "Sylphy"
          ) {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }
          if (
            msg.author.id == "432610292342587392" &&
            embed.author.name === "Yuzuki Eba"
          ) {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }
          if (
            msg.author.id == "432610292342587392" &&
            embed.author.name === "Mana (RF)"
          ) {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }
        },180)
      } catch (ex) {
        console.log("ERROR: " + ex);
      }
    });
  }
});

client.login(process.env.TOKEN || config.TOKEN);
