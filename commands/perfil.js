const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js")
const db = require('quick.db')

module.exports = {
  
    data: new SlashCommandBuilder()
    
    .setName('perfil')
      .setDescription('[ 😎 User ] - veja o perfil de um membro!')
        .addUserOption((option) => option
        .setName("usuario")
        .setDescription("membro pra ver o perfil")
        .setRequired(true)
              ),
    async execute(interaction) {
      const user = interaction.options.getUser('usuario') || interaction.member.user
      

      let badges = {
HOUSE_BRAVERY: "<:HOUSE_BRAVERY:925820883031969912> ",
HOUSE_BALANCE: "<:HOUSE_BALANCE:925821223903047720>",
HOUSE_BRILLIANCE: "<:HOUSE_BRILLIANCE:925821413636591646>"
}

let flags = user.flags.toArray().filter(b => badges[b]).map(a => badges[a]).join(" ")
  const nada = "nenhum hypeSquad"
if(!flags) flags = nada
        
let badges1 = {
    staff: "<:staff:925835949999529985> ",
    dono: "<:dono:925835827907534848>",
    parceiro: "<:ezz:925837658859634699> "
    }

let badges33 = "em breve bro"
    const semnada = "sem badge xd"
    if(!badges33) badges33 = semnada
    
  
    
    let sobremim = db.fetch(`sobremim_${user.id}`)
    if(sobremim === null) sobremim = `você pode trocar seu sobre mim usando **/sobremim**`;
    
    

      const perfil = new MessageEmbed()        
      .setAuthor(`perfil de ${user.username}`)
      .setThumbnail(`${user.displayAvatarURL({ dynamic: true })}`)
         .addField("🏷️ Nome:", `${user.username}`)
         .addField("✉️ sobremim:", `\`\`\`${sobremim}\`\`\``)
        .addField("hypeSquad", `${flags}`)
      .setColor('RED')
      .setTimestamp();
         interaction.reply({embeds: [perfil]})
      {
      }
    }
    }
 
