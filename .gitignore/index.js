const Discord = require('discord.js');
var bot = new Discord.Client();


bot.on('ready',() => {
    console.log('Bot Ready')
})

bot.login(process.env.token);

bot.on('message', message => { //Garen
    if(message.author.id === "395678267207843872" && message.content === "!!list"){
    message.channel.send("__**~Garen~**__\n*Émotions :*\n``karma``, ``sad``, ``hmm``\n*Combat :*\n``combat1``, ``combat2``, ``combat3``, ``combat4``, ``berzerk``")
    }
    if(message.author.id === "395678267207843872" && message.content === "!!karma"){
    message.channel.send("https://www.youtube.com/watch?v=2O7MmZ8geMw\n\n\n**Si je suis la, c'est pour te faire payer ton erreur, qui a été de venir nous faire chier.**")
    }
    if(message.author.id === "395678267207843872" && message.content === "!!combat4"){
    message.channel.send("https://www.youtube.com/watch?v=5ddOT_TJnKg\n\n\n**Puisse l'__Honneur__ guider mes pas dans ce combat d'anthologie.**")
    }
    if(message.author.id === "395678267207843872" && message.content === "!!combat3"){
    message.channel.send("https://www.youtube.com/watch?v=T-gzwTCFPLQ\n\n\n**Je donnerai tout pour répendre Justice.**")
    }
    if(message.author.id === "395678267207843872" && message.content === "!!combat2"){
    message.channel.send("https://www.youtube.com/watch?v=Tjaf6i5PvGg\n\n\n**Je sent que celui-ci va être coriace..**")
    }
    if(message.author.id === "395678267207843872" && message.content === "!!combat1"){
    message.channel.send("https://www.youtube.com/watch?v=tnRqp_TAnVA\n\n\n**Je m'occupe de lui et je reviens.**")
    }
    if(message.author.id === "395678267207843872" && message.content === "!!sad"){
    message.channel.send("https://www.youtube.com/watch?v=y1LIsrFdEuU")
    }
    if(message.author.id === "395678267207843872" && message.content === "!!berzerk"){
    message.channel.send("https://www.youtube.com/watch?v=36dL7YjCOsw\n\n\n**C'est en levant la patte sur mes amis que tu as signé ton arret de mort.**")
    }
    if(message.author.id === "395678267207843872" && message.content === "!!hmm"){
    message.channel.send("https://www.youtube.com/watch?v=tnrJyvVF7l4")
    }
})

bot.on('message', message => { //Des
    if(message.author.id === "161908030559092738" && message.content === "!!list"){
    message.channel.send("__**~Des~**__\n*Situations :*\n``investigations1``")
    }
    if(message.author.id === "161908030559092738" && message.content === "!!investigations1"){
    message.channel.send("https://www.youtube.com/watch?v=AtgquM4JKR0")
    }
})

bot.on('message', message => { //Iris
    if(message.author.id === "339848621908426752" && message.content === "!!list"){
    message.channel.send("__**~Iris~**__\n*Émotions :*\n``sad``\n*Combat :*\n``fight``")
    }
    if(message.author.id === "339848621908426752" && message.content === "!!sad"){
    message.channel.send("https://www.youtube.com/watch?v=D3scyfzqRU0")
    }
    if(message.author.id === "339848621908426752" && message.content === "!!fight"){
    message.channel.send("https://www.youtube.com/watch?v=AINcGl9l57o\n\n\n**Tu n'as pas le droit de perdre !**")
    }
})
