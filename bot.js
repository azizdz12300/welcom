const Discord = require("discord.js");
const client = new Discord.Client();

client.on("guildMemberAdd", member => {
  client.channels.find('id', '558783299024060419').send(`**welcome to Venus : [ ${member} ]**`)
});

client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
