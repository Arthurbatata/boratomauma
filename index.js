
console.log("NodeJS Version: " + process.version);
const fs = require('fs');
const jimp = require("jimp");
const Discord = require('discord.js')
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.commands = new Collection();
      const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const commands = require(`./commands/${file}`);
    client.commands.set(commands.data.name, commands);
}

client.once('ready', () => {
    console.log('roberto esta no ff!');
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'Ocorreu um erro ao executar este comando! ❌', ephemeral: true });
	}
});


client.on("ready", () => {
	let activities = [
	  `Use /help`,
	  `${client.guilds.cache.size} servidore(s)!`,
	  `${client.users.cache.size} Membro(s)!`
	  ],
	  i = 0;
	setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
	   type: "STREAMING", url: "https://www.twitch.tv/robberttoffffsuportteezzhjfhfhfdk"
		}), 5000); 
	client.user
		.setStatus("dnd")
  });

 
	
client.login(token);


process.on('multipleResolves', (type, reason, promise) => {
    console.log(`🚫 Erro Detectado\n\n` + type, promise, reason)
});
process.on('unhandRejection', (reason, promise) => {
    console.log(`🚫 Erro Detectado:\n\n` + reason, promise)
});
process.on('uncaughtException', (error, origin) => {
    console.log(`🚫 Erro Detectado:\n\n` + error, origin)
});
process.on('uncaughtExceptionMonitor', (error, origin) => {
    console.log(`🚫 Erro Detectado:\n\n` + error, origin)
});




