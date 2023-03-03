const Discord = require("discord.js")
const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
  
    data: new SlashCommandBuilder()
    
    .setName('emoji-info')
      .setDescription('[ 😎 INFO ] - veja as info de um cargo!')
        .addStringOption((option) => option
        .setName("emoji")
        .setDescription("cargo pra ver as info")
        .setRequired(true)
              ),
              async execute(interaction) {

        const emoji = interaction.options.getString('emoji')
       
        if (!emoji) {
            interaction.reply({
                embeds: [
                    new MessageEmbed()
                        .setColor("RANDOM")
                        .setDescription(`\`/emojiinfo [emoji | nome | id]\``)
                ]
            });
        } else if (emoji) {

            try {

            if (!emoji.animated) {

                let img = `https://cdn.discordapp.com/emojis/${emoji.id}.png?size=2048`;
                let botao = new MessageActionRow()
                    .addComponents(
                        new MessageButton()
                            .setStyle("LINK")
                            .setLabel("Faça o download")
                            .setEmoji("📎")
                            .setURL(img)
                    );

                    let embed = new MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle("Informações do Emoji:")
                    .setThumbnail(`${img}`)
                    .addFields(
                        {
                            name: `> \📝 Nome do emoji:`,
                            value: `\`${emoji.name}\``,
                            inline: false
                        },
                        {
                            name: `> \🆔 ID do emoji:`,
                            value: `\`${emoji.id}\``,
                            inline: false
                        },
                        {
                            name: `> \🧿 Menção do emoji:`,
                            value: `\`${emoji}\``,
                            inline: false
                        },
                        {
                            name: `> \🖼 O emoji é:`,
                            value: `\`Imagem (png/jpg)\``,
                            inline: false
                        }
                    );

                    interaction.reply({ embeds: [embed], components: [botao] })
            } 

            else if (emoji.animated) {

                    let img = `https://cdn.discordapp.com/emojis/${emoji.id}.gif?size=2048`;
                    let botao = new MessageActionRow()
                        .addComponents(
                            new MessageButton()
                                .setStyle("LINK")
                                .setLabel("Faça o download")
                                .setEmoji("📎")
                                .setURL(`${img}`)
                        );
    
                        let embed = new MessageEmbed()
                        .setColor("RANDOM")
                        .setTitle("Informações do Emoji:")
                        .setThumbnail(img)
                        .addFields(
                            {
                                name: `> \📝 Nome do emoji:`,
                                value: `\`${emoji.name}\``,
                                inline: false
                            },
                            {
                                name: `> \🆔 ID do emoji:`,
                                value: `\`${emoji.id}\``,
                                inline: false
                            },
                            {
                                name: `> \🧿 Menção do emoji:`,
                                value: `\`${emoji}\``,
                                inline: false
                            },
                            {
                                name: `> \🖼 O emoji é:`,
                                value: `\`Gif\``,
                                inline: false
                            }
                        );

                        interaction.reply({ embeds: [embed], components: [botao] })

            }

        } catch (e) { 
            interaction.reply(`${interaction.user} Ops! Não consegui identificar o emoji.`)
        }

        }

    }
}