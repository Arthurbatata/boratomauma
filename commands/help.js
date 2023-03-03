const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
  
    data: new SlashCommandBuilder()
    
    
    .setName('help')
      .setDescription('[ 😎INFO ] - veja meus comandos!'),
    async execute(interaction) {

  interaction.reply({embeds: [
            new MessageEmbed()
        .setTitle(`ola ${interaction.user.tag} veja meus comandos a baixo `)
        .setColor('#33FF33')
        .setImage('https://cdn.discordapp.com/attachments/826507607858217052/925348170605690910/unknown.png')
        .setDescription(`
        moderação <:sunglasso:902714428871553056>
           /say  

  utilidade  <:sunglause:902715164334358538>

  /avatar /botinfo /info user /info server 
  
  diversão  <:joia:893875762912981083>

 /ping /invite /ff /hack /8ball `),  
  ]});    
 },
};
