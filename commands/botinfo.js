const {
    MessageEmbed,
    Message
  } = require("discord.js");
  const Discord = require('discord.js')
  let cpuStat = require("cpu-stat");
  let os = require("os");
  const {  SlashCommandBuilder  } = require('@discordjs/builders')
  
  module.exports = {
   data: new SlashCommandBuilder()
   .setName('botinfo')
   .setDescription('[ ❓ INFO ] - Me conheça melhor!'),
  async execute(interaction) {
  
            let embed = new MessageEmbed()
           
            .setDescription(`Olá, eu sou o ${interaction.client.user.username}!\n_ _`)
            .setColor('YELLOW')
            .setThumbnail(interaction.user.avatarURL({dynamic: true}))
          .setImage('https://cdn.discordapp.com/attachments/767842897550639115/925462309046980649/unknown.png')
            .addFields(
                {
                    name: '❔ | **__Quem sou eu:__**',
                    value: `\`${interaction.client.user.username}\``,
                    inline: false
                },
                {
                    name: '<:jgh:942898857468121118> | **__Discord.js:__**',
                    value: `\`${Discord.version}\``,
                    inline: false
                },
                {
                    name: ' <:joia:893875762912981083> | **__Memória:__**',
                    value: `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}/ ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB\``,
                    inline: false
                },
                {
                    name: ' <:js:896758776445689898> | **__Node.js__** ',
                    value: `\`${process.version}\``
                },
                {
                    name: '<a:hh:927546501528440852> | **__Meu ping:__**',
                    value: `\`${interaction.client.ws.ping}ms\``,
                    inline: false
                },
            {
                    name: '🎉 | **__Meus Dev:__**',
                    value: `\`! Arthur Batat4🥶⃤「𝗦𝗠𝗨𝗥𝗙𝗦」#0577 darkangel#2169\``,
                    inline: false
                },
                {
                  name: '😎 | **__Servidores q estou:__**',
                  value: `\`${interaction.client.guilds.cache.size}\``,
                  inline: false
              },
              {
                  name: '\🌀 | **__Usuarios q estou gerenciando:__**',
                  value: `\`${interaction.client.users.cache.size}\``,
                  inline: false
              },
            )
  
            interaction.reply({ embeds: [embed]})
  
    }
  }