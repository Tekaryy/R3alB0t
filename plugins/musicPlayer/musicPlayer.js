"use strict";

var DiscordJS = require('discord.js');
var Plugin = require('../../lib/registry/models/Plugin');
var commands = require('./lib/commands');

class musicPlayer extends Plugin {

    constructor(bot, plugin, registry) {
        super(plugin.name);
        this.plugin = plugin
        this.id = plugin.id;
        this.name = plugin.name;
        this.author = plugin.author;
        this.registry = registry;
        this.version = plugin.version;
        if (bot instanceof DiscordJS.Client) {
            this.bot = bot;

        } else {
            console.log("Provided bot is not istance of Discord.js Bot");
        }
    }



    loadPlugin() {
        if (!this.loaded) {
            commands = new commands(this.plugin);
            commands.register(this.registry);
            this.loaded = true;
        }
    }
}

var plugin = {
    name: "Music Player",
    id: "music",
    author: "R3alCl0ud",
    version: "1.0.1"
}


module.exports = function(bot, registry) {
    return new musicPlayer(bot, plugin, registry);
};
