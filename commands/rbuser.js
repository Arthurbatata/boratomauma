const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageActionRow, MessageButton }= require("discord.js") // npm i discord.js
const roblox = require("noblox.js") // npm i noblox.js

module.exports = {
    data: new SlashCommandBuilder()
    
    .setName('rbuser')  
    .setDescription('[ 😎 INFO ] - Veja as  Info de um user do roblox!')
    .addStringOption((option) => option
      .setName("usuario")
      .setDescription("usuario pra ver as info")
      .setRequired(true)
            ),
       async execute(interaction) {

        const user = interaction.options.getString('usuario')
      
         let userId = await roblox.getIdFromUsername(`${user}`).catch((err) => {
         return interaction.reply("Esse usuário não existe."); 
     });
     var url = `https://www.roblox.com/headshot-thumbnail/image?userId=${userId}&width=420&height=420&format=png ` 
      roblox.getPlayerInfo(userId).then(async (playerinfo) => { 
     let embed = new MessageEmbed() 
     .setTitle(`A conta de ${playerinfo.username} foi encontrada`)
     .addFields(
         {
             name: '🗃️ | Nome de exibição', value: `${playerinfo.displayName}`, inline: true 
            },
            {
                name:  '📝 | Nome do Usuario', value: `${playerinfo.username}`, inline: true
               }, 

               {
                name: '⏰ | Entrou ', value: `${playerinfo.joinDate}`, inline: true
               },
             {
                name:  '📚 | Bio do Usuario', value: `${playerinfo.status}`, inline: true
               }, 
              
            {
                name:  '🕰️ | criado há', value: `${playerinfo.age} dias`, inline: true 
           },
         {
            name:  '🔎 | ID', value: `${userId}` ,  inline: true 
        },

        {
            name:  '📈 | seguidores', value: `${playerinfo.followerCount}`, inline: true 
           },
           {
            name:  '🔧 | seguindo', value: `${playerinfo.followingCount}`, inline: true
           },
           {
            name:  '💎 | amigos', value: `${playerinfo.friendCount}`, inline: true
           },

         {
            name:  '<:vasco:1011248547787710484> | Banido?', value: `${playerinfo.isBanned}`,  inline: true 
        },
        
     )

     .setThumbnail(url)
     .setImage(`http://www.roblox.com/Thumbs/Avatar.ashx?x=150&y=150&Format=Png&username=${userId}`) 
     .setFooter(`Requisitado por: ${interaction.user.tag}`, interaction.user.avatarURL({dynamic: true}))
     const row = new MessageActionRow()
     .addComponents(
         new MessageButton()
             .setStyle('LINK')  
             .setLabel('Perfil do usuario')
             .setURL(`https://www.roblox.com/users/${userId}/profile`),
     );
     interaction.reply({embeds: [embed],  components: [row] })
    })
    }
    }
