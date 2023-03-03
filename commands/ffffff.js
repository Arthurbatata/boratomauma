const { MessageEmbed } = require('discord.js')
const moment = require('moment') // npm i moment
const  { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
  
    data: new SlashCommandBuilder()
    
    .setName('channel-info')
      .setDescription('[ 😎 INFO ] - veja as info de um canal!')
        .addChannelOption((option) => option
        .setName("channel")
        .setDescription("canal pra ver as info")
        .setRequired(true)
              ),
    async execute(interaction) {

        moment.locale('pt-BR')
        const channel = interaction.options.getChannel('channel');
        if(channel === null) {
            // canal da interação
            let c = interaction.channel
            let embed = new MessageEmbed()
        .setColor('AQUA')
        .setTitle('Informações do canal atual:')
        .setFields(
            {
                name: 'Nome:',
                value: `\`${c.name}\``,
                inline: true
            },
            {
                name: 'ID:',
                value: `\`${c.id}\``,
                inline: true
            },
            {
                name: 'Menção',
                value: `\`<#${c.id}>\``,
                inline: true
            },
            {
                name: 'Tipo do canal:',
                value: `\`${channelType()}\``,
                inline: true
            },
            {
                name: 'NSFW:',
                value: `\`${c.nsfw ? "Sim" : "Não"}\``,
                inline: true
            },
            {
                name: 'Categoria:',
                value: `\`${c.parent == null ? 'Nenhuma categoria selecionada' : c.parent.name}\``,
                inline: true
            },
            {
                name: 'Criado em:',
                value: `\`${moment(c.createdAt).format('LL')}, às ${moment(c.createdAt).format('LT')}\``,
                inline: true
            }
        )
        interaction.reply({embeds: [embed]})

        function channelType() {
            let types = {
                GUILD_TEXT: 'Canal de texto',
                GUILD_VOICE: 'Canal de voz',
                GUILD_NEWS: 'Canal de novidades',
                GUILD_NEWS_THREAD: `Canal de novidades (Thread)`,
                GUILD_PUBLIC_THREAD: `Thread pública`,
                GUILD_PRIVATE_THREAD: `Thread privada`,
                GUILD_STAGE_VOICE: `Palco`,
                UNKNOWN: `Desconhecido`
            }

        let canal = types[c.type]
        return canal
        }
            
        } else if (channel) {
            // canal sitado
            if(channel.type === 'GUILD_CATEGORY') return interaction.reply({content: `**<:noentry:921415736566636575> | Você não pode ver informações de uma categoria!**`, ephemeral: true})
            let embed = new MessageEmbed()
        .setColor('AQUA')
        .setTitle('Informações do canal:')
        .setFields(
            {
                name: 'Nome:',
                value: `\`${channel.name}\``,
                inline: true
            },
            {
                name: 'ID:',
                value: `\`${channel.id}\``,
                inline: true
            },
            {
                name: 'Menção',
                value: `\`<#${channel.id}>\``,
                inline: true
            },
            {
                name: 'Tipo do canal:',
                value: `\`${channelType()}\``,
                inline: true
            },
            {
                name: 'NSFW:',
                value: `\`${channel.nsfw ? "Sim" : "Não"}\``,
                inline: true
            },
            {
                name: 'Categoria:',
                value: `\`${channel.parent == null ? 'Nenhuma categoria selecionada' : channel.parent.name}\``,
                inline: true
            },
            {
                name: 'Criado em:',
                value: `\`${moment(channel.createdAt).format('LL')}, às ${moment(channel.createdAt).format('LT')}\``,
                inline: true
            }
        )
        interaction.reply({embeds: [embed]})

        function channelType() {
            let types = {
                GUILD_TEXT: 'Canal de texto',
                GUILD_VOICE: 'Canal de voz',
                GUILD_CATEGORY: 'Categoria',
                GUILD_NEWS: 'Canal de novidades',
                GUILD_NEWS_THREAD: `Canal de novidades (Thread)`,
                GUILD_PUBLIC_THREAD: `Thread pública`,
                GUILD_PRIVATE_THREAD: `Thread privada`,
                GUILD_STAGE_VOICE: `Palco`,
                UNKNOWN: `Desconhecido`
            }

        let c = types[channel.type]
        return c
        }
        }
    }
}