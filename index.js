/*
  A bot that welcomes new guild members when they join
*/
// Import the discord.js module
const Discord = require('discord.js');
const warcraftNames = require('warcraft-names')
// The token of your bot - https://discordapp.com/developers/applications/me
const config =  require("./lib/config/config.json");
const token = config.discord.api_key;
// Create an instance of a Discord client
const bot = new Discord.Client();
const commands = require('./lib/commands');

    bot.on('message', (message)=> {
        if(message.content[0] === config.bot.prefix ){
            var command = message.content.split(" ")[0].substring(1);
            var suffix = message.content.substring(command.length+2);
            var cmd = commands[command];
            if (cmd) {
                    cmd.process(message, suffix);
                } else {
                    message.channel.sendMessage("Invalid command, type `!help` to see the list of commands.");
                }
        }
    });

    // Create an event listener for new guild members
bot.on('guildMemberAdd', member => {
    // Send the message to the guilds default channel (usually #general), mentioning the member
    member.guild.defaultChannel.send(`Welcome to MOre gaMES moRE PLay , ${member}!`);
  });
// Log our bot in
bot.login(token);