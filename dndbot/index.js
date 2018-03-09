const Discord = require("discord.js");    //imports 'discord.js'

const TOKEN = "NDIxNDQ2MTcxNzMxNjg5NDgy.DYNV_Q.VsIpXZmNQGI-xTNH6GgGmG0SyZ8";

var bot = new Discord.Client(); //imitates a class in the form of a Client

bot.on("message", function(message)) { //event procedure. runs a function, with the parameter "message"
  console.log(message.content);
});

bot.login(TOKEN);
