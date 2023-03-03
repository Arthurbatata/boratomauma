const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js")

module.exports = {
    
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription(' Mostrar informações sobre este servidor ou um usuário ')
        .addSubcommand(subCommand=> subCommand.setName("server").setDescription(" Informações sobre este servidor"))
        .addSubcommand(
            subCommand => subCommand.setName("user").setDescription("Informações de um membro")
            .addUserOption(option => option.setName("member").setDescription("o membro").setRequired(true))),


   
    async execute(interaction) {
        switch(interaction.options.getSubcommand()) {
            case "server": {
                interaction.reply({embeds: [
                    new MessageEmbed()
                    .setTitle(`Informações da Guild: ${interaction.guild.name}`)
                    .addFields([
                        {
                            name: "canais",
                            value: `${interaction.guild.channels.cache.size} canais`,
                            inline: true
                        },

                        {
                            name: "Criado",
                            value: `<t:${Math.round(interaction.guild.createdTimestamp/1000)}>`,
                            inline: true
                        }
                    ])

                ]})
                break
            }
            case "user": {
                const member = interaction.options.getMember("member")
                interaction.reply({embeds: [
                    new MessageEmbed()
                    .setTitle(`Informação  de ${member.user.tag.toString()}`)
                    .setThumbnail(member.user.avatarURL({dynamic: true}))
                    .addFields([
                        {
                            name: "conta criada ",
                            value: `<t:${Math.round(member.user.createdTimestamp/1000)}>`,
                            inline: true
                        },

                        {
                            name: "entrou no server ",
                            value: `<t:${Math.round(member.joinedTimestamp/1000)}>`,
                            inline: true
                        }
                    ])

                ]})
                break
            }
        }
    }
}	
