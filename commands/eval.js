const Discord = require('discord.js');
const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js")
const { inspect } = require('util')
const config = require('../config.json')

module.exports = {
    
 data: new SlashCommandBuilder()
  
      .setName('eval')  
      .setDescription('[ 📈DONO ] - eval command')
      .addStringOption((option) => option
        .setName("code")
        .setDescription("code eval")
        .setRequired(true)
              ),
         async execute(interaction) {
             
	 let owner = [ '758423648901529652' , '341334675979108363']

        if(!owner.includes(interaction.user.id)) return interaction.reply(`vc n tem perm.`)


			           
      const code = interaction.options.getString('code')
      
				if(code.includes("config.token"))return interaction.user.reply(config.token)
				if(interaction.reply === '758423648901529652'){
					if(code.includes("config.token"))return interaction.reply({content:`Eu não caio nessa.`})
				}

				try{
					const result = await eval(code)
					let output = result

					if(typeof output !== 'string') {
						output = inspect(result)
					}
					const embed = new MessageEmbed()
					.setDescription(`Entrada:
					\`\`\`js
					${code}
					\`\`\`
					Saida:
					\`\`\`js
					${output}
					\`\`\`
					`).setColor(`#b026d6`)

					interaction.reply({embeds:[embed]})
				}catch (error){
						const embed = new MessageEmbed()
					.setDescription(`Ocorreu um erro:
					\`\`\`js
					${error}
					\`\`\`
					`).setColor(`#b026d6`)

					interaction.reply({embeds:[embed]})
				}
            }
        } 