const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js")
const darkrandom = require("random");
const darkemail = require("random-email"); 
const darkpassword = require("generate-password");

module.exports = {
  
    data: new SlashCommandBuilder()
    
    .setName('hack')
      .setDescription('[ 🎉 DIVERSÃO ] - Seja um super hacker!')
        .addUserOption((option) => option
        .setName("usuario")
        .setDescription("usuario pra hackear")
        .setRequired(true)
              ),
    async execute(interaction) {
      const user = interaction.options.getUser('usuario') || interaction.member.user
    
     
      const pass = darkpassword.generate({
        length: 10,
        numbers: true,
      });
    if(user.id === interaction.user.id) {
        interaction.reply({ content: '❌ | Eu não vou te hackear para apagar seu histórico do google de novo!', ephemeral: true})
    } else {
        interaction.reply(`🌀 |  Procurando IP...`).then(async () => {
              setTimeout(async function () {
                await interaction.editReply(`🌀 | Carregando informações...`).catch(() => {});
              }, 10000);
            setTimeout(async function () {
                await interaction.editReply(`**Vítima:** \`${user.tag}\`\n**Email:** \`${darkemail({
                    domain: "gmail.com",
                  })}\`\n**Senha:** \`${pass}\`\n**IP:** \`123.4.5.6:${darkrandom.int(100, 9999)}\``).catch(() => {});
              }, 12000);
        })
    }
}
}
