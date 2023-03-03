const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios')
const { MessageActionRow, MessageButton, MessageEmbed, MessageCollector, MessageComponent, MessageComponentInteraction } = require('discord.js');

module.exports = {
  
    data: new SlashCommandBuilder()
    
    .setName('nitro')
      .setDescription('[ 😎 Diversão ] - Nitro? OMG!'),
    async execute(interaction) {

        var list = [
            'jODIPFsm',
            'fqJHXmom',
            'mSSWsAlN', 
            'lFSZGrcY', 
            'riobLSpX', 
            'TuZwaCYW', 
            'cYybyqqz', 
            'oPgkcoJa',        
            'xQfcjbMb'
          ];
        
          var codes = list[Math.floor(Math.random() * list.length)];
            

        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId('sucess')
                .setLabel('ㅤㅤㅤㅤㅤACCEPTㅤㅤㅤㅤㅤ')
                .setStyle('SUCCESS'),
        );

        const row2 = new MessageActionRow()
        .addComponents(
        new MessageButton()
        .setCustomId('secondary')
        .setLabel('this gift has already been redeemed')
        .setStyle('SECONDARY')
        .setDisabled(true))

        const embed = new MessageEmbed()
        
        .setTitle('A WILD GIFT APPEARS!')
        .setDescription('Nitro Expires in 47 hours')
        .setThumbnail('https://media.discordapp.net/attachments/863108058028048431/947942315115307128/w9aiD6F.png');

    await interaction.reply({ content: `discord.com\/gift/${codes}`, embeds: [embed], components: [row] });
   
    const embed2 = new MessageEmbed()
        
    .setTitle('A WILD GIFT APPEARS!')
    .setDescription('but the gift has already been redeemed by someone Nitro Expires in 47 hours')
    .setThumbnail('https://media.discordapp.net/attachments/863108058028048431/947942315115307128/w9aiD6F.png');
  

   
  
    
    const wait = require('node:util').promisify(setTimeout);    
    const filter = i => i.customId === 'sucess';

    const collector = interaction.channel.createMessageComponentCollector({ filter, time: 4000 });


    collector.on('collect', async i => {
                if (i.customId === 'sucess') {
                    await i.deferUpdate();
                    await wait(4000);
                    await i.editReply({embeds: [embed2], components: [row2] });
                }
            });
            
            collector.on('end', collected => console.log(`Collected ${collected.size} items`));

    }
}