const Discord = require('discord.js');
const bot = new Discord.Client();
var RandoMessage = random(1,4);
var messageAnswer = null;

bot.on('message', (message) => {

    
    if(message.content == "Hi Frater"){
        if(RandoMessage = 1){
            messageAnswer = "Hello, I'm Frater!"
        }
        if(RandoMessage = 2){
            messageAnswer = "Hello!"
        }

        if(RandoMessage = 3){
            messageAnswer = "Hi!"
        }

        if(RandoMessage = 4){
            messageAnswer = "Nice to meet you!"
        }
        message.reply(messageAnswer);
    }


    }
);

bot.login('NDQ0Njk2MzMwNzI0NDQyMTEy.DdgICA.IrX9jurx4KqlSDGkMMSHdI9bPX0'
