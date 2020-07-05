const Discord = require('discord.js');
var bot = new Discord.Client();


bot.on('ready',() => {
    console.log('Bot Ready')
})

bot.login(process.env.token);

bot.on('message', message => { //Garen
    if(message.author.id === "395678267207843872" && message.content === "!!list"){
    message.channel.send("__**~Garen~**__\n-karma\n-combat1\n-combat2\n-combat3\n-sad")
    }
    if(message.author.id === "395678267207843872" && message.content === "!!karma"){
    message.channel.send("https://www.youtube.com/watch?v=2O7MmZ8geMw\n\n\n**Le Karma ? Je suis le Karma.**")
    }
    if(message.author.id === "395678267207843872" && message.content === "!!combat3"){
    message.channel.send("https://www.youtube.com/watch?v=5ddOT_TJnKg\n\n\n**Puisse l'__Honneur__ guider mes pas dans ce combat d'anthologie.**")
    }
    if(message.author.id === "395678267207843872" && message.content === "!!combat2"){
    message.channel.send("https://www.youtube.com/watch?v=b52jaQQFPj8\n\n\n**Je donnerai tout pour répendre Justice.**")
    }
    if(message.author.id === "395678267207843872" && message.content === "!!combat1"){
    message.channel.send("https://www.youtube.com/watch?v=aMxcPgEJkfA\n\n\n**Je m'occupe de lui et je reviens.**")
    }
    if(message.author.id === "395678267207843872" && message.content === "!!sad"){
    message.channel.send("https://www.youtube.com/watch?v=uOhaJNUhPG4\n\n\n**Seul, je ne tiendrai pas le coup.**")
    }
})

bot.on('message', message => { //Des
    if(message.author.id === "161908030559092738" && message.content === "!!list"){
    message.channel.send("__**~Des~**__\n-investigations1")
    }
    if(message.author.id === "161908030559092738" && message.content === "!!investigations1"){
    message.channel.send("https://www.youtube.com/watch?v=AtgquM4JKR0")
    }
})

bot.on('message', message => { //Iris
    if(message.author.id === "339848621908426752" && message.content === "!!list"){
    message.channel.send("__**~Iris~**__\n-sad\n-fight")
    }
    if(message.author.id === "339848621908426752" && message.content === "!!sad"){
    message.channel.send("https://www.youtube.com/watch?v=D3scyfzqRU0")
    }
    if(message.author.id === "339848621908426752" && message.content === "!!fight"){
    message.channel.send("https://www.youtube.com/watch?v=AINcGl9l57o\n\n\n**Tu n'as pas le droit de perdre !**")
    }
})
