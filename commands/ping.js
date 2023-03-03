
const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('[ ❓ sem tópico ] - veja meu ping'),
	async execute(interaction) {
		await interaction.reply(`🔎 - Pong! Meu ping atual é : ${interaction.client.ws.ping}ms!! `);
		
	},
};
