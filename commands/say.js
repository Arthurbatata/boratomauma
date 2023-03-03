const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  
  data: new SlashCommandBuilder()
  
  .setName('say')
	.setDescription('[ 🏟️ Diversão pra moderação ] - Faça o bot falar!')
	.addStringOption((option) =>
		option.setName('mensagem')
			.setDescription('🏟️ mensagem pro bot falar')
			.setRequired(true)

  ),
  
  
  
async execute(interaction) {
  
  if (!interaction.member.permissions.has('MANAGE_MESSAGES')) return  interaction.reply({content: "Você não tem perm de `GERENCIAR MENSAGENS`"})
  const mensagem = interaction.options.getString('mensagem')

  interaction.reply(`${mensagem}
  
  mensagem enviada por : ${interaction.user}`)
    
   // ephemeral: true,
  },
};
