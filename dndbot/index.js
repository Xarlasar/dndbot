const Discord = require("discord.js");    //imports 'discord.js'
const TOKEN = "NDIxNDQ2MTcxNzMxNjg5NDgy.DYNV_Q.VsIpXZmNQGI-xTNH6GgGmG0SyZ8"; //set a const to the long-ass token variable
const PREFIX = "."; //subject to change

var bot = new Discord.Client(); //imitates a class in the form of a Client

bot.on("ready", function() {
  console.log('Connected'); //initialization text
  console.log('Logged in as: ');
  console.log(bot.user + ' - (' + TOKEN + ')');
});

bot.on("message", function(message) { //event procedure. runs a function, with the parameter "message"
  //adding in accessor variables to shorten code
  var a = message.author;
  var m = message.content;
  var c = message.channel;
  if (a.equals(bot.user)) return; //stops the bot from reading its own commands.
  if (!m.startsWith(PREFIX)) return; //stops if there is no prefix.
  var args = m.substring(PREFIX.length).split(" "); //takes the message, and takes away the prefix from the start, and splits it into an array by its spaces.
  switch (args[0].toLowerCase()) { //takes the first element of the args array (the command itself), also sets it to lowercase
    case "ping":
      c.send("Pong!");
      break;
    case "help": //help command
      if (!args[1]) {
        args[1] = 1;
      }
      var embed = require('./embeds/help.json')
      embed.pages = 1
      embed.footer.text = ".help | Page " + args[1] + " | " + new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');

      c.send({ embed });
      break;
    default: //check for invalid commands.
      c.send("Invalid message. Check your spelling!");
      break;
  }
});
bot.login(TOKEN);
