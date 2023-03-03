const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageAttachment } = require('discord.js');
const Canvas = require('canvas');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('youtube')
    .setDescription('[🤥 Diversão] Crie um comentário no Youtube.')
    .addStringOption(option =>
      option.setName('nome')
        .setDescription('O nome do usuário.')
        .setRequired(true))
    .addStringOption(option =>
      option.setName('imagem_url')
        .setDescription('A URL da imagem do usuário.')
        .setRequired(true))
    .addStringOption(option =>
      option.setName('conteúdo')
        .setDescription('O conteúdo do comentário.')
        .setRequired(true))
    .addStringOption(option =>
      option.setName('vídeo')
        .setDescription('O título do vídeo ao qual o comentário está relacionado.')
        .setRequired(true)),
  async execute(interaction = new CommandInteraction()) {
    // Obter os valores dos parâmetros
    const nome = interaction.options.getString('nome');
    const imagemURL = interaction.options.getString('imagem_url');
    const conteudo = interaction.options.getString('conteúdo');
    const video = interaction.options.getString('vídeo');

    // Criar um novo canvas e carregar a imagem do comentário do YouTube de exemplo
    const canvas = Canvas.createCanvas(800, 200);
    const ctx = canvas.getContext('2d');
    const background = await Canvas.loadImage('https://i.imgur.com/UgU6oGv.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    // Desenhar a imagem do usuário no canvas
    const imagem = await Canvas.loadImage(imagemURL);
    ctx.drawImage(imagem, 25, 25, 50, 50);

    // Desenhar o nome e conteúdo do comentário no canvas
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText(nome, 85, 40);
    ctx.font = '18px sans-serif';
    ctx.fillText(conteudo, 85, 80);

    // Desenhar o título do vídeo no canvas
    ctx.fillStyle = '#333';
    ctx.font = 'bold 18px sans-serif';
    ctx.fillText(`Comentando em: ${video}`, 25, 150);

    // Anexar o comentário ao Discord e responder à interação
    const attachment = new MessageAttachment(canvas.toBuffer(), 'youtube.png');
    interaction.reply({ files: [attachment] });
  },
};
