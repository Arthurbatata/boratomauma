const Discord = require("discord.js")
const {MessageEmbed} = require ("discord.js")
const moment = require("moment") // npm i moment
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  
    data: new SlashCommandBuilder()
    
    .setName('role-info')
      .setDescription('[ 😎 INFO ] - veja as info de um cargo!')
        .addRoleOption((option) => option
        .setName("cargo")
        .setDescription("cargo pra ver as info")
        .setRequired(true)
              ),
              async execute(interaction) {

                moment.locale('pt-BR')

    let r = interaction.options.getRole("cargo")
    let g = interaction.guild
    if(!r) {
        return interaction.reply(`**:x: | Cargo não identificado! Mencione um cargo ou utilize um ID válido.**`)
}
    let embed = new MessageEmbed()
    .setColor(`GREEN`)
    .setTitle(`Informações do cargo:`)
    .setFields(
        {
            name: `Nome:`,
            value: `\`${r.name}\``,
            inline: true
        },
        {
            name: `ID:`,
            value: `\`${r.id}\``,
            inline: true
        },
        {
            name: `Menção:`,
            value: `\`<@&${r.id}>\``,
            inline: true
        },
        {
            name: `Cor do cargo:`,
            value: `\`${r.hexColor}\``,
            inline: true
        },
        {
            name: `Membros:`,
            value: `\`${g.members.cache.filter(m => m.roles.cache.has(r.id)).size}\``,
            inline: true
        },
        {
            name: `Mencionável:`,
            value: `\`${r.mentionable ? 'Sim' : 'Não'}\``,
            inline: true
        },
        {
            name: `Criado em:`,
            value: `\`${moment(r.createdAt).format('LL')}, às ${moment(r.createdAt).format('LT')}\``,
            inline: true
        },
        {
            name: `Exibe separadamente na lista de membros:`,
            value: `\`${r.hoist ? 'Sim': 'Não'}\``,
            inline: true
        },
        {
            name: `Posição: (para cima)`,
            value: `\`${r.position}/${g.roles.cache.size - 1}\``, // o -1 é para remover o @everyone
            inline: true
        },
        {
            name: `Permissões:`,
            value: permissionsRole(),
            inline: false
        }
    )
    interaction.reply({embeds: [embed]})
    
    function permissionsRole() {
        const perms = {
            CREATE_INSTANT_INVITE: '\`Criar convite instantâneo\`',
            ADMINISTRADOR: '\`Administrador\`',
            KICK_MEMBERS: '\`Expulsar membros\`',
            BAN_MEMBERS: '\`Banir membros\`',
            MANAGE_CHANNELS: '\`Gerenciar canais\`',
            MANAGE_GUILD: '\`Gerenciar servidor\`',
            ADD_REACTIONS: '\`Adicionar reações\`',
            VIEW_AUDIT_LOG: '\`Ver registro de auditoria\`',
            PRIORITY_SPEAKER: '\`Voz Prioritária\`',
            STREAM: '\`Ao vivo\`',
            VIEW_CHANNEL: '\`Ver canais\`',
            SEND_MESSAGES: '\`Enviar mensagens\`',
            SEND_TTS_MESSAGES: '\`Enviar mensagens em tts\`',
            MANAGE_MESSAGES: '\`Gerenciar mensagens\`',
            EMBED_LINKS: '\`Enviar links\`',
            ATTACH_FILES: '\`Enviar anexos\`',
            READ_MESSAGE_HISTORY: '\`Ver histórico de mensagens\`',
            MENTION_EVERYONE: '\`Mencionar everyone e cargos\`',
            USE_EXTERNAL_EMOJIS: '\`Usar emojis externos\`',
            USE_EXTERNAL_STICKERS: '\`Usar figurinhas externas\`',
            VIEW_GUILD_INSIGHTS: '\`Ver análises do servidor\`',
            CONNECT: "\`Conectar em call's\`",
            SPEAK: `\`Falar em call's\``,
            MUTE_MEMBERS: `\`Mutar membros\``,
            DEAFEN_MEMBERS: `\`Ensurdecer membros\``,
            MOVE_MEMBERS: `\`Mover membros\``,
            USE_VAD: `\`Utilizar detecção de voz\``,
            CHANGE_NICKNAME: `\`Alterar apelido\``,
            MANAGE_NICKNAMES: `\`Gerenciar apelidos\``,
            MANAGE_ROLES: `\`Gerenciar cargos\``,
            MANAGE_WEBHOOKS: `\`Gerenciar webhooks\``,
            MANAGE_EMOJIS_AND_STICKERS: `\`Gerenciar emojis e figurinhas\``,
            USE_APPLICATION_COMMANDS: `\`Utilizar comandos slashs (/)\``,
            REQUEST_TO_SPEAK: `\`Pedir para falar\``,
            MANAGE_EVENTS: `\`Gerenciar eventos\``,
            MANAGE_THREADS: `\`Gerenciar threads\``,
            CREATE_PUBLIC_THREADS: `\`Criar threads públicas\``,
            CREATE_PRIVATE_THREADS: `\`Criar threads privadas\``,
            SEND_MESSAGES_IN_THREADS: `\`Falar em threads\``,
            START_EMBEDDED_ACTIVITIES: `\`Iniciar atividades\``,
            MODERATE_MEMBERS: `\`Gerenciar moderação do servidor\``
        }
        const permsArray = r.permissions.toArray().map(p => perms[p]) 

        if(r.permissions.toArray().includes('ADMINISTRATOR')) {
            return '\`Administrador (todas)\`'
        } else {
            if (permsArray.length === 0) {
                return 'Nenhum!'
            }
            let resultado = permsArray.join(", ")
            return resultado
        }
    }
}
}
