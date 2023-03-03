
        
const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageAttachment } = require('discord.js');
const Canvas = require('canvas');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('trump')
    .setDescription('[🤥 Diversão] Crie um tweet fake do Donald trump.')
    .addStringOption(option =>
      option.setName('conteúdo')
        .setDescription('O conteúdo do tweet.')
        .setRequired(true)),
  async execute(interaction = new CommandInteraction()) {
    // Obter os valores dos parâmetros
    const conteudo = interaction.options.getString('conteúdo');

    // Criar um novo canvas e carregar a imagem do tweet de exemplo
    const canvas = Canvas.createCanvas(700, 250);
    const ctx = canvas.getContext('2d');
    const background = await Canvas.loadImage('https://media.discordapp.net/attachments/969229712280928266/1064206758425399306/trump.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);


    // Desenhar o nome e conteúdo do tweet no canvas
    ctx.font = 'bold 20px sans-serif';
    ctx.font = '18px sans-serif';
    ctx.fillText(conteudo, 85, 80);

    // Anexar o tweet ao Discord e responder à interação
    const attachment = new MessageAttachment(canvas.toBuffer(), 'trump.png');
    interaction.reply({ files: [attachment] });
  },
};

