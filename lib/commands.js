var YouTube = require("./api/youtube");
const config =  require("./config/config.json");
//Here you write all your commands
var Commands = {
    "help": {
        description: "Lists of all commands.",
        process: function(message, suffix) {
            for(var cmd in Commands) {
                var info = "`" + config.bot.prefix + cmd + "`";
                var description = Commands[cmd].description;
                if(description){
                    info += "\n\t*" + description + "*";
                }
                message.channel.sendMessage(info);
            } 
        }
    },

    "youtube": {
        description: "Gets a YouTube video matching tags.",
        process: function(message, suffix){
            YouTube.respond(message, suffix);
            }
    }
   
};
module.exports = Commands;