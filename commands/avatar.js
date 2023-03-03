//interaction.options.getMember
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  
    data: new SlashCommandBuilder()
    
    .setName('avatar')
      .setDescription('[ 😎 USER ] - veja o avatar de um membro!')
        .addUserOption((option) => option
        .setName("usuario")
        .setDescription("membro pra pegar o avatar")
        .setRequired(true)
              ),
    async execute(interaction) {
        const user = interaction.options.getUser("usuario");
      
     

      const embed = new MessageEmbed()
            .setTitle(`Avatar de ${user.username}`)
            .setColor("RANDOM")
            .setImage(
                user.displayAvatarURL({
                    dynamic: true,
                    size: 1024,
                })
            )
            .setDescription(`Requisitado por: ${interaction.user}
            Escolha o formato de download abaixo`)

        const button = new MessageActionRow().addComponents(
            new MessageButton()

                .setStyle("LINK")
                .setEmoji("🔎")
                .setLabel("PNG")
                .setURL(`${user.avatarURL({ format: "png", size: 1024 })}`),
            new MessageButton()

                .setStyle("LINK")
                .setEmoji("🔎")
                .setLabel("WEBP")
                .setURL(`${user.avatarURL({ dynamic: true, size: 1024 })}`),
               
            new MessageButton()

                .setStyle("LINK")
                .setEmoji("🔎")
                .setLabel("JPG")
                .setURL(`${user.avatarURL({ format: "jpg", size: 1024 })}`)
        );

        interaction.reply({
            embeds: [embed],
            components: [button],
        });
    },
};