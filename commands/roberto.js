const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js')

module.exports = {
    
 data: new SlashCommandBuilder()
  
      .setName('8ball')  
      .setDescription('[ ❓ Diversão ] - faça uma pergunta pro roberto ff ')
      .addStringOption((option) => option
        .setName("pergunta")
        .setDescription("pergunta pro bot")
        .setRequired(true)
              ),
         async execute(interaction) {
             
       const pergunta = interaction.options.getString('pergunta')
           
           let respostas = ["Sim", "Provavelmente Sim", "Provavelmente não", "não", "óbvio que não", "Não faço ideia", "Não perguntei blz", "Fale isso com o @LeoInsvestimentosNFT", "Sei la po", "Não sei."];
        
           let resposta = respostas[Math.floor(Math.random()*respostas.length)];

             let embed = new MessageEmbed()
         .setTitle('Roberto FF') .setThumbnail('https://media.discordapp.net/attachments/922817624239407214/959266931339313182/7b4f7e6b2e1884d44c25c0bd77401300.png?width=606&height=606')
.setDescription(`Hey ${interaction.user}! Sua Pergunta: **${pergunta}**.
Minha Resposta : **${resposta}** `)
           .setColor('GREEN')
           interaction.reply({embeds:[embed]})
				}
    } 