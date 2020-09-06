const Discord = require('discord.js');
const client = new Discord.Client();
const { token } = require("./config.json");
const prefix = "DJS!";
const commands = {
		about: {
			help: require("./events/about/help"),
			about: require("./events/about/about"),
		},

	};


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} like a simpltion.`);
  client.user.setActivity("Currently in Development. || DJS!help");
});

client.on('message', message => {
	if (message.author.bot || !message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	
	if(command === "help") {
		message.channel.send({ embed: commands.about.help });
	};
});

client.login(token);
