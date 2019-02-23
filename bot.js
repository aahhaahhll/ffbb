const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("548750404868112416")
setInterval(function() {
channel.send(`basil basil basil basil`);
}, 30)
})

client.login(process.env.BOT_TOKEN);