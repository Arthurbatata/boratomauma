const ms = require("ms")
const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js")
const darkrandom = require("random");
const darkemail = require("random-email"); 
const darkpassword = require("generate-password");


module.exports = {
  
    data: new SlashCommandBuilder()
    
    .setName('timeout')
      .setDescription('[💎 Moderação ] - De timeout em alguém !')
        .addUserOption((option) => option
        .setName("membro")
        .setDescription("usuario pra dar timeout")
        .setRequired(true))
        .addStringOption((option) => option
        .setName("tempo")
        .setDescription("tempo do timeout")
        .setRequired(true))
        .addStringOption((option) => option
        .setName("motivo")
        .setDescription("motivo do timeout")
        .setRequired(true)
        ),
    async execute(interaction) {
    
    
        if (!interaction.member.permissions.has("TIMEOUT_MEMBERS")) {
            interaction.reply({ content: `Você não possui permissão para utilizar este comando.` })
            if(!interaction.guild.me.permissions.has("TIMEOUT_MEMBERS")) return interaction.reply({content:"eu nao tenho perm xd"});
        } else {

        let usuario = interaction.options.getUser("membro");

        let membro = interaction.guild.members.cache.get(usuario.id);
        let tempo = interaction.options.getString("tempo");
        let motivo = interaction.options.getString("motivo");

        let duracao = ms(tempo);

        if (!membro) {
            interaction.reply({ content: `O usuário não está no servidor.` })
        } else if (!duracao) {
            interaction.reply({ content: `Insira um tempo válido.` })
        } else {
            membro.timeout(duracao, motivo).then( () => {
                interaction.reply({ content: `:white_check_mark: | sucesso ${interaction.user} o membro ${membro} tomou timeout, tempo : ${tempo} pelo motivo : ${motivo}`, ephemeral: false })
            })
        }

    }

    }
}