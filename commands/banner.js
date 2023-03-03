const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios')
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');


module.exports = {
  
    data: new SlashCommandBuilder()
    
    .setName('banner')
      .setDescription('[ 😎 USER ] - veja o banner de um membro!')
        .addUserOption((option) => option
        .setName("user")
        .setDescription("membro pra pegar o banner")
        .setRequired(true)
              ),
    async execute(interaction) {

const user = interaction.options.getUser("user") || interaction.user;
        const data = await axios.get(`https://discord.com/api/users/${user.id}`, {
        headers: {
            Authorization: `Bot ${interaction.client.token}`
        }
    }).then(d => d.data);
    if(data.banner){
        let url = data.banner.startsWith("a_") ? ".gif?size=4096" : ".png?size=4096";
        url = `https://cdn.discordapp.com/banners/${user.id}/${data.banner}${url}`;

        let link = new MessageButton().setStyle('LINK').setLabel('Abrir banner no navegador').setURL(url)
        let row = new MessageActionRow().addComponents([link]);
        
        let embed = new MessageEmbed() 
        .setTitle(`Banner de ${user.username}`)
        .setImage(url)
        interaction.reply({ embeds: [embed], components: [row]})
    } else {
        interaction.reply({ content: 'Este usuário não tem banner no perfil!', ephemeral: true}) 
    }
    }
  }