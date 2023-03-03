const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js")
const db = require('quick.db')

module.exports = {
  
    data: new SlashCommandBuilder()
    
    .setName('sobremim')
      .setDescription('[ 😎 USER ] - mude seu sobremim!')
        .addStringOption((option) => option
        .setName("texto")
        .setDescription("texto do sobremim")
        .setRequired(true)
              ),
    async execute(interaction) {
   
    const sobremim = interaction.options.getString('texto')
    
    const user = interaction.user;
    
    if(sobremim.length > 60) return interaction.reply('por favor escreva um texto com no maximo 60 letras')
    
    await db.set(`sobremim_${user.id}`, sobremim)
    
    const sobremim_novo = new MessageEmbed()
    .setAuthor(`${interaction.user.username}`, interaction.user.displayAvatarURL({ dynamic: true }))
    .setTitle('sobremim trocado com sucesso')
    .addField('novo sobremim:', `${sobremim}`)
      .setColor('GREEN')
      .setFooter(`• Author ${interaction.user.username}`)
          .setTimestamp();
    interaction.reply({embeds: [sobremim_novo]})
    {
      
      }
}
      }
