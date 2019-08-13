const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, Attachment } = require('discord.js');
const fs = require('fs');


client.on('ready', () => {
  console.log(`Logged in`);
});



client.on('message', message => {
  // If the message is "ping"
  if (message.content === '#ib help') {
    // Send "pong" to the same channel
    message.channel.send(`${message.author},`);
    message.channel.send('Parancslista:');
    message.channel.send('#ib help - Parancslista előhívása.');
    message.channel.send('#ib avatar - Avatárképed lekérése.');
    message.channel.send('#ib neko - Macskás kép.');
  }
});

  client.on('message', message => {
    // If the message is "what is my avatar"
    if (message.content === '#ib avatar') {
      // Send the user's avatar URL
      message.reply(message.author.avatarURL);
    }
  });

  client.on('message', message => {
    // If the message is '#ib neko'
    if (message.content === '#ib neko') {
        // Create the attachment using Attachment
        const attachment = new Attachment('./neko.jpg');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author},`, attachment);
      }
    });
    

client.login('NjEwODY3NDU5OTAxMzU4MDgx.XVLxiw.nqLmH7JV1qhaOP7ECz01DBhCle4');