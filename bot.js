const Discord = require("discord.js");
const client = new Discord.Client();

client.on("guildMemberAdd", member => {
  client.channels.find('id', '558783299024060419').send(`**Welcome To Venus Server:yellow_heart: : [ ${member} ]**`)
});

client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
