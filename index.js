const Discord = require("discord.js-selfbot-v11");
const client = new Discord.Client();
let spammer = require("./spamFunction");
//const config = require("./token.json");
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
        if (
          msg.author.id == "432610292342587392" &&
          embed.author.name === "Sayu Ogiwara"
        ) {
          setTimeout(() => {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }, 200);
        }
        if (
          msg.author.id == "432610292342587392" &&
          embed.author.name === "Amatsuka Uto"
        ) {
          setTimeout(() => {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }, 200);
        }
        if (
          msg.author.id == "432610292342587392" &&
          embed.author.name === "Vladilena Milizé"
        ) {
          setTimeout(() => {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }, 200);
        }
        if (
          msg.author.id == "432610292342587392" &&
          embed.author.name === "Elma"
        ) {
          setTimeout(() => {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }, 200);
        }
        if (
          msg.author.id == "432610292342587392" &&
          embed.author.name === "Aoi Nabi"
        ) {
          setTimeout(() => {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }, 200);
        }
        if (
          msg.author.id == "432610292342587392" &&
          embed.author.name === "Laika"
        ) {
          setTimeout(() => {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }, 200);
        }
        if (
          msg.author.id == "432610292342587392" &&
          embed.author.name === "Ray"
        ) {
          setTimeout(() => {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }, 200);
        }
        if (
          msg.author.id == "432610292342587392" &&
          embed.author.name === "Near"
        ) {
          setTimeout(() => {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }, 200);
        }
        if (
          msg.author.id == "432610292342587392" &&
          embed.author.name === "Zhongli"
        ) {
          setTimeout(() => {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }, 200);
        }
        if (
          msg.author.id == "432610292342587392" &&
          embed.author.name === "Kaedehara Kazuha"
        ) {
          setTimeout(() => {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }, 200);
        }
        //Romeo wish
        if (
          msg.author.id == "432610292342587392" &&
          embed.author.name === "Nyanners"
        ) {
          setTimeout(() => {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }, 200);
        }
        if (
          msg.author.id == "432610292342587392" &&
          embed.author.name === "Josee"
        ) {
          setTimeout(() => {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }, 200);
        }
        if (
          msg.author.id == "432610292342587392" &&
          embed.author.name === "Sig (Gangsta)"
        ) {
          setTimeout(() => {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }, 200);
        }
        if (
          msg.author.id == "432610292342587392" &&
          embed.author.name === "Kaoruko Hanayagi"
        ) {
          setTimeout(() => {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }, 200);
        }
        if (
          msg.author.id == "432610292342587392" &&
          embed.author.name === "Junna Hoshimi"
        ) {
          setTimeout(() => {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }, 200);
        }
        // Cevan wish
        if (
          msg.author.id == "432610292342587392" &&
          embed.author.name === "Skull Knight"
        ) {
          setTimeout(() => {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }, 200);
        }
        if (
          msg.author.id == "432610292342587392" &&
          embed.author.name === "Trevor Belmont"
        ) {
          setTimeout(() => {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }, 200);
        }
        if (
          msg.author.id == "432610292342587392" &&
          embed.author.name === "Musashi Miyamoto"
        ) {
          setTimeout(() => {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }, 200);
        }
        if (
          msg.author.id == "432610292342587392" &&
          embed.author.name === "Shinei Nouzen"
        ) {
          setTimeout(() => {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }, 200);
        }
        if (
          msg.author.id == "432610292342587392" &&
          embed.author.name === "Irene"
        ) {
          setTimeout(() => {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }, 200);
        }
        if (
          msg.author.id == "432610292342587392" &&
          embed.author.name === "Diablo (TenSura)"
        ) {
          setTimeout(() => {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }, 200);
        }
        // Bink wish Imma steal everything
        if (
          msg.author.id == "432610292342587392" &&
          embed.author.name === "Sumia"
        ) {
          setTimeout(() => {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }, 200);
        }
        if (
          msg.author.id == "432610292342587392" &&
          embed.author.name === "Ashe"
        ) {
          setTimeout(() => {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }, 200);
        }
        if (
          msg.author.id == "432610292342587392" &&
          embed.author.name === "Tomoko Nomura"
        ) {
          setTimeout(() => {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }, 200);
        }
        if (
          msg.author.id == "432610292342587392" &&
          embed.author.name === "Kagura Baldwin"
        ) {
          setTimeout(() => {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }, 200);
        }
        if (
          msg.author.id == "432610292342587392" &&
          embed.author.name === "Ririto Ibusuki"
        ) {
          setTimeout(() => {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }, 200);
        }
        if (
          msg.author.id == "432610292342587392" &&
          embed.author.name === "Nyanners"
        ) {
          setTimeout(() => {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }, 200);
        }
        if (
          msg.author.id == "432610292342587392" &&
          embed.author.name === "Sylphy"
        ) {
          setTimeout(() => {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }, 200);
        }
        if (
          msg.author.id == "432610292342587392" &&
          embed.author.name === "Yuzuki Eba"
        ) {
          setTimeout(() => {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }, 200);
        }
        if (
          msg.author.id == "432610292342587392" &&
          embed.author.name === "Mana (RF)"
        ) {
          setTimeout(() => {
            msg.react("❤️");
            console.log("You get " + embed.author.name);
          }, 200);
        }
      } catch (ex) {
        console.log("ERROR: " + ex);
      }
    });
  }
});

client.login(process.env.TOKEN || config.TOKEN);
