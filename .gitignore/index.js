const Discord = require('discord.js');
var bot = new Discord.Client();

var i = 0

//Declaration Variables~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var channelStockId = "731145026570158100";  //Max, met ici l'id du channel !

var dataBank = []; //Contient des tableaux : C'est la base de données quand le bot est actif !

var channelStockIdPersos = "731145079204610118";

var dataBankPersos = [];

var channelStockIdEff = "731201898698244198";

var dataBankEff = [];

//Declaration Fonction~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function read () { //lit le stockage discord et le met dans le stockage variable
    // met le contenu des messages dans dataBank
        (bot.channels.get(channelStockId).fetchMessages({ limit: 100 }) 
            .then(messages =>    
                messages.forEach(function(valeur , clé) {
                    dataBank.push(valeur.content.split(" * "));
                })
            )
            .catch(console.error)
        );
    
};

function readPersos () { //lit le stockage discord et le met dans le stockage variable
    // met le contenu des messages dans dataBank
        (bot.channels.get(channelStockIdPersos).fetchMessages({ limit: 100 }) 
            .then(messages =>    
                messages.forEach(function(valeur , clé) {
                    dataBankPersos.push(valeur.content.split(" * "));
                })
            )
            .catch(console.error)
        );
    
};

function readEff () { //lit le stockage discord et le met dans le stockage variable
    // met le contenu des messages dans dataBank
        (bot.channels.get(channelStockIdEff).fetchMessages({ limit: 100 }) 
            .then(messages =>    
                messages.forEach(function(valeur , clé) {
                    dataBankEff.push(valeur.content.split(" * "));
                })
            )
            .catch(console.error)
        );
    
};

function findUser (id) { //à partir de l'id d'un user, trouve l'indice de sa "fiche" dans le stockage => -1 si pas de fiche
    var userIndice;
    dataBank.forEach(function(valeur, clé) {
        if (id ===  valeur[0]) {
            userIndice = clé;
        }
    })
    if (userIndice === undefined) {
        return -1;
    } else { 
        return userIndice;
    }
}

function findUserPersos (id) { //à partir de l'id d'un user, trouve l'indice de sa "fiche" dans le stockage => -1 si pas de fiche
    var userIndice;
    dataBankPersos.forEach(function(valeur, clé) {
        if (id ===  valeur[0]) {
            userIndice = clé;
        }
    })
    if (userIndice === undefined) {
        return -1;
    } else { 
        return userIndice;
    }
}

function gotOwO (id, numOwO) { //Verifie si un user a un OwO ! return true si il l'a, return false sinon
    var got = false;
    if (findUser(id) != -1 ) {
        dataBank[findUser(id)].forEach(function (valeur) {
            if (valeur === numOwO) {
                got = true;
            }            
        });    
    return got;
    }
}

function gotOwOPersos (id, numOwO) { //Verifie si un user a un OwO ! return true si il l'a, return false sinon
    var got = false;
    if (findUser(id) != -1 ) {
        dataBankPersos[findUser(id)].forEach(function (valeur) {
            if (valeur === numOwO) {
                got = true;
            }            
        });    
    return got;
    }
}

bot.on('ready',() => {
    console.log('Bot Ready')
    read()
    readPersos()
    readEff()
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

bot.on('message', message => { //memo
    if(message.content === "!!memo"){
      var embed = new Discord.RichEmbed()
        .setTitle("**Koman ssamarsh ?**")
        .setDescription("Petit post-it pour pas oublier comment que Griffin fonctionne")
        .addField("Prefix :", "!!", true)
        .addField("La commande d'attaque", "!!atk [nom_de_l'attaque] [Nom_de_l'attaquant] [Nom_du_defenseur] [(Optionnel)Variation de statut]")
        .addField("Variation de stats", "[Atk/Def/AtkS/DefS][+/-][1/2/3/4/5/6]")
        .addBlankField()
        .addField("!!!", "N'effectuer que des commandes avec les attaques offensives")  
        .setColor("#c40000")
        .setFooter("Amusez-vous bien ! - Maxoin | Baz")
      
        message.channel.send(embed);
    }
  })

bot.on('message', message => {
    if(message.content.includes("!!atk ")){
        var stab = 1
        var attaque = message.content.split(" ")[1]
        var pkmn1 = message.content.split(" ")[2]
        var pkmn2 = message.content.split(" ")[3]
        for(var i = 0; i < dataBank.length; i++){
          if(dataBank[i][0] === attaque){
            var type = dataBank[i][1]
            var puis = dataBank[i][2]
            var spec = dataBank[i][3]
          }
        }
        for(var ip = 0; ip < dataBankPersos.length; ip++){
          if(dataBankPersos[ip][0] === pkmn1){
            var niveau1 = dataBankPersos[ip][1]
            var typep1 = dataBankPersos[ip][2]
            var pv1 = dataBankPersos[ip][3]
            var attak1 = dataBankPersos[ip][4]
            var def1 = dataBankPersos[ip][5]
            var attakS1 = dataBankPersos[ip][6]
            var defS1 = dataBankPersos[ip][7]
            var vit1 = dataBankPersos[ip][8]
          }
        }
        for(var ipb = 0; ipb < dataBankPersos.length; ipb++){
          if(dataBankPersos[ipb][0] === pkmn2){
            var niveau2 = dataBankPersos[ipb][1]
            var typep2 = dataBankPersos[ipb][2]
            var pv2 = dataBankPersos[ipb][3]
            var attak2 = dataBankPersos[ipb][4]
            var def2 = dataBankPersos[ipb][5]
            var attakS2 = dataBankPersos[ipb][6]
            var defS2 = dataBankPersos[ipb][7]
            var vit2 = dataBankPersos[ipb][8]
          }
        }
        if(message.content.includes("atk+1") || message.content.includes("Atk+1")){
            attak1 *= 1.5
        }
        if(message.content.includes("atk+2") || message.content.includes("Atk+2")){
            attak1 *= 2
        }
        if(message.content.includes("atk+3") || message.content.includes("Atk+3")){
            attak1 *= 2.5
            console.log(attak1)
        }
        if(message.content.includes("atk+4") || message.content.includes("Atk+4")){
            attak1 *= 3
        }
        if(message.content.includes("atk+5") || message.content.includes("Atk+5")){
            attak1 *= 3.5
        }
        if(message.content.includes("atk+6") || message.content.includes("Atk+6")){
            attak1 *= 4
        }
        if(message.content.includes("def+1") || message.content.includes("Def+1")){
            def2 *= 1.5
        }
        if(message.content.includes("def+2") || message.content.includes("Def+2")){
            def2 *= 2
        }
        if(message.content.includes("def+3") || message.content.includes("Def+3")){
            def2 *= 2.5
        }
        if(message.content.includes("def+4") || message.content.includes("Def+4")){
            def2 *= 3
        }
        if(message.content.includes("def+5") || message.content.includes("Def+5")){
            def2 *= 3.5
        }
        if(message.content.includes("def+6") || message.content.includes("Def+6")){
            def2 *= 4
        }
        if(message.content.includes("atkS+1") || message.content.includes("AtkS+1") || message.content.includes("atks+1") || message.content.includes("Atks+1")){
            attakS1 *= 1.5
        }
        if(message.content.includes("atkS+2") || message.content.includes("AtkS+2") || message.content.includes("atks+2") || message.content.includes("Atks+2")){
            attakS1 *= 2
        }
        if(message.content.includes("atkS+3") || message.content.includes("AtkS+3") || message.content.includes("atks+3") || message.content.includes("Atks+3")){
            attakS1 *= 2.5
        }
        if(message.content.includes("atkS+4") || message.content.includes("AtkS+4") || message.content.includes("atks+4") || message.content.includes("Atks+4")){
            attakS1 *= 3
        }
        if(message.content.includes("atkS+5") || message.content.includes("AtkS+5") || message.content.includes("atks+5") || message.content.includes("Atks+5")){
            attakS1 *= 3.5
        }
        if(message.content.includes("atkS+6") || message.content.includes("AtkS+6") || message.content.includes("atks+6") || message.content.includes("Atks+6")){
            attakS1 *= 4
        }
        if(message.content.includes("defS+1") || message.content.includes("DefS+1") || message.content.includes("defs+1") || message.content.includes("Defs+1")){
            defS2 *= 1.5
        }
        if(message.content.includes("defS+2") || message.content.includes("DefS+2") || message.content.includes("defs+2") || message.content.includes("Defs+2")){
            defS2 *= 2
        }
        if(message.content.includes("defS+3") || message.content.includes("DefS+3") || message.content.includes("defs+3") || message.content.includes("Defs+3")){
            defS2 *= 2.5
        }
        if(message.content.includes("defS+4") || message.content.includes("DefS+4") || message.content.includes("defs+4") || message.content.includes("Defs+4")){
            defS2 *= 3
        }
        if(message.content.includes("defS+5") || message.content.includes("DefS+5") || message.content.includes("defs+5") || message.content.includes("Defs+5")){
            defS2 *= 3.5
        }
        if(message.content.includes("defS+6") || message.content.includes("DefS+6") || message.content.includes("defs+6") || message.content.includes("Defs+6")){
            defS2 *= 4
        }
        
        if(message.content.includes("atk-1") || message.content.includes("Atk-1")){
            attak1 /= 1.5
        }
        if(message.content.includes("atk-2") || message.content.includes("Atk-2")){
            attak1 /= 2
        }
        if(message.content.includes("atk-3") || message.content.includes("Atk-3")){
            attak1 /= 2.5
            console.log(attak1)
        }
        if(message.content.includes("atk-4") || message.content.includes("Atk-4")){
            attak1 /= 3
        }
        if(message.content.includes("atk-5") || message.content.includes("Atk-5")){
            attak1 /= 3.5
        }
        if(message.content.includes("atk-6") || message.content.includes("Atk-6")){
            attak1 /= 4
        }
        if(message.content.includes("def-1") || message.content.includes("Def-1")){
            def2 /= 1.5
        }
        if(message.content.includes("def-2") || message.content.includes("Def-2")){
            def2 /= 2
        }
        if(message.content.includes("def-3") || message.content.includes("Def-3")){
            def2 /= 2.5
        }
        if(message.content.includes("def-4") || message.content.includes("Def-4")){
            def2 /= 3
        }
        if(message.content.includes("def-5") || message.content.includes("Def-5")){
            def2 /= 3.5
        }
        if(message.content.includes("def-6") || message.content.includes("Def-6")){
            def2 /= 4
        }
        if(message.content.includes("atkS-1") || message.content.includes("AtkS-1") || message.content.includes("atks-1") || message.content.includes("Atks-1")){
            attakS1 /= 1.5
        }
        if(message.content.includes("atkS-2") || message.content.includes("AtkS-2") || message.content.includes("atks-2") || message.content.includes("Atks-2")){
            attakS1 /= 2
        }
        if(message.content.includes("atkS-3") || message.content.includes("AtkS-3") || message.content.includes("atks-3") || message.content.includes("Atks-3")){
            attakS1 /= 2.5
        }
        if(message.content.includes("atkS-4") || message.content.includes("AtkS-4") || message.content.includes("atks-4") || message.content.includes("Atks-4")){
            attakS1 /= 3
        }
        if(message.content.includes("atkS-5") || message.content.includes("AtkS-5") || message.content.includes("atks-5") || message.content.includes("Atks-5")){
            attakS1 /= 3.5
        }
        if(message.content.includes("atkS-6") || message.content.includes("AtkS-6") || message.content.includes("atks-6") || message.content.includes("Atks-6")){
            attakS1 /= 4
        }
        if(message.content.includes("defS-1") || message.content.includes("DefS-1") || message.content.includes("defs-1") || message.content.includes("Defs-1")){
            defS2 /= 1.5
        }
        if(message.content.includes("defS-2") || message.content.includes("DefS-2") || message.content.includes("defs-2") || message.content.includes("Defs-2")){
            defS2 /= 2
        }
        if(message.content.includes("defS-3") || message.content.includes("DefS-3") || message.content.includes("defs-3") || message.content.includes("Defs-3")){
            defS2 /= 2.5
        }
        if(message.content.includes("defS-4") || message.content.includes("DefS-4") || message.content.includes("defs-4") || message.content.includes("Defs-4")){
            defS2 /= 3
        }
        if(message.content.includes("defS-5") || message.content.includes("DefS-5") || message.content.includes("defs-5") || message.content.includes("Defs-5")){
            defS2 /= 3.5
        }
        if(message.content.includes("defS-6") || message.content.includes("DefS-6") || message.content.includes("defs-6") || message.content.includes("Defs-6")){
            defS2 /= 4
        }
        
        for(var ie = 0; ie < dataBankEff.length; ie++){
          if(dataBankEff[ie][0] === typep1){
            var Acier = dataBankEff[ie][1]
            var Combat = dataBankEff[ie][2]
            var Dragon = dataBankEff[ie][3]
            var Eau = dataBankEff[ie][4]
            var Electrik  = dataBankEff[ie][5]
            var Fée = dataBankEff[ie][6]
            var Feu = dataBankEff[ie][7]
            var Glace = dataBankEff[ie][8]
            var Insecte = dataBankEff[ie][9]
            var Normal = dataBankEff[ie][10]
            var Plante = dataBankEff[ie][11]
            var Poison = dataBankEff[ie][12]
            var Psy = dataBankEff[ie][13]
            var Roche = dataBankEff[ie][14]
            var Sol = dataBankEff[ie][15]
            var Spectre = dataBankEff[ie][16]
            var Tenebre = dataBankEff[ie][17]
            var Vol = dataBankEff[ie][18]
          }
        }
        if(typep2 === "Acier"){var typdegz = Acier}
        if(typep2 === "Combat"){var typdegz = Combat}
        if(typep2 === "Dragon"){var typdegz = Dragon}
        if(typep2 === "Eau"){var typdegz = Eau}
        if(typep2 === "Electrik"){var typdegz = Electrik}
        if(typep2 === "Fée"){var typdegz = Fée}
        if(typep2 === "Feu"){var typdegz = Feu}
        if(typep2 === "Glace"){var typdegz = Glace}
        if(typep2 === "Insecte"){var typdegz = Insecte}
        if(typep2 === "Normal"){var typdegz = Normal}
        if(typep2 === "Plante"){var typdegz = Plante}
        if(typep2 === "Poison"){var typdegz = Poison}
        if(typep2 === "Psy"){var typdegz = Psy}
        if(typep2 === "Roche"){var typdegz = Roche}
        if(typep2 === "Sol"){var typdegz = Sol}
        if(typep2 === "Spectre"){var typdegz = Spectre}
        if(typep2 === "Tenebre"){var typdegz = Tenebre}
        if(typep2 === "Vol"){var typdegz = Vol}
        if(type === typep1){stab = 1.5}
        if(spec === "Physique"){var degz = (((((niveau1*0.4)+2)*attak1*puis)/(def2*50)+2)*(typdegz*stab))}
        if(spec === "Special"){var degz = (((((niveau1*0.4)+2)*attakS1*puis)/(defS2*50)+2)*(typdegz*stab))}
        var crit = Math.floor(Math.random() * Math.floor(20))
        console.log(crit + " & " + typdegz)
        if(crit === 13){
            degz *= 2
            message.channel.send("**Coup Critique !**")
        }
        message.channel.send("L'attaque fait **" + degz + "** points de dégàts !")
    }
})

bot.on('message', message => {
    if(message.content.includes("!!read")){
        console.log(dataBank)
        console.log(dataBankPersos)
        console.log(dataBankEff)
    }
})

