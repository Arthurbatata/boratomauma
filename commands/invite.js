const { MessageActionRow, MessageButton } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('invite')
		.setDescription('[❓ - Sem Tópico ] me convide pro seu server!'),
	async execute(interaction) {
		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setStyle('LINK')  
					.setLabel('LINK')
					.setURL(`https://discord.com/oauth2/authorize?client_id=1000897816849297501&scope=bot&permissions=1099511627775`),
			);

			await interaction.reply({ content: 'clique no botão pra me convidar!', components: [row] }); //button
		},
	}