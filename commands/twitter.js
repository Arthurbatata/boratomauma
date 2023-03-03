const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageAttachment } = require('discord.js');
const Canvas = require('canvas');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('twitter')
    .setDescription('Crie um tweet fictício com o nome e o avatar do usuário.')
    .addStringOption(option =>
      option.setName('nome')
        .setDescription('O nome do usuário.')
        .setRequired(true))
    .addStringOption(option =>
      option.setName('avatar_url')
        .setDescription('A URL do avatar do usuário.')
        .setRequired(true))
    .addStringOption(option =>
      option.setName('conteúdo')
        .setDescription('O conteúdo do tweet.')
        .setRequired(true)),
  async execute(interaction = new CommandInteraction()) {
    // Obter os valores dos parâmetros
    const nome = interaction.options.getString('nome');
    const avatarURL = interaction.options.getString('avatar_url');
    const conteudo = interaction.options.getString('conteúdo');

    // Criar um novo canvas e carregar a imagem do tweet de exemplo
    const canvas = Canvas.createCanvas(700, 250);
    const ctx = canvas.getContext('2d');
    const background = await Canvas.loadImage('https://i.imgur.com/nGblOQJ.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    // Desenhar o avatar do usuário no canvas
    const avatar = await Canvas.loadImage(avatarURL);
    ctx.drawImage(avatar, 25, 25, 50, 50);

    // Desenhar o nome e conteúdo do tweet no canvas
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText(nome, 85, 40);
    ctx.font = '18px sans-serif';
    ctx.fillText(conteudo, 85, 80);

    // Anexar o tweet ao Discord e responder à interação
    const attachment = new MessageAttachment(canvas.toBuffer(), 'tweet.png');
    interaction.reply({ files: [attachment] });
  },
};

