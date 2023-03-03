const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js');

  module.exports = {
data: new SlashCommandBuilder ()

   .setName('unlock')
  .setDescription ('desbloqueie o chat'),

async execute(interaction) {


        if (!interaction.member.permissions.has('MANAGE_CHANNELS')) return  interaction.reply({content: "Você não a permissão GERENCIAR CANAIS."})
        if(!interaction.guild.me.permissions.has("MANAGE_CHANNELS")) return interaction.reply({content:"eu nao tenho perm xd"});
        
        interaction.reply(`✅ | Este chat foi desbloqueado com sucesso.`).then(msg => { 

        interaction.channel.permissionOverwrites.edit(interaction.guild.id, { SEND_MESSAGES: true }).catch(e => {
                console.log(e)
                msg.edit(`❌ | Ops, algo deu errado ao tentar desbloquear este chat.`)
            })
        })

            }
        }        
