var util = require('util');
var youtube_node = require('youtube-node');
var config = require("../config/config.json");

var YouTube = function () {
    this.youtube = new youtube_node();
    this.youtube.setKey(config.youtube.api_key);
};

YouTube.prototype.respond = function (bot, query) {
    this.youtube.search(query, 1, function(error, result) {
        if (error) {
            bot.channel.sendMessage("An error ocurred. Please try again.");
        } else {
            if (!result || !result.items || result.items.length < 1) {
                bot.channel.sendMessage("No results. Please try again with different tags.");
            } else {
                bot.channel.sendMessage("http://www.youtube.com/watch?v=" + result.items[0].id.videoId );
            }
        }
    });
};

module.exports = new YouTube();