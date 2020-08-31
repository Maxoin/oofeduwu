const Discord = require('discord.js');
var bot = new Discord.Client();

var i = 0

//Declaration Variables~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var channelStockId = "731145026570158100";  //Max, met ici l'id du channel !

var dataBank = []; //Contient des tableaux : C'est la base de données quand le bot est actif !

var channelStockIdPersos = "731145079204610118";

var dataBankPersos = [];

//Declaration Fonction~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function read () { //lit le stockage discord et le met dans le stockage variable
    // met le contenu des messages dans dataBank
        (bot.channels.get(channelStockId).fetchMessages({ limit : 100})
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
        (bot.channels.get(channelStockIdPersos).fetchMessages({ limit : 100}) 
            .then(messages =>    
                messages.forEach(function(valeur , clé) {
                    dataBankPersos.push(valeur.content.split(" * "));
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
})

bot.login(process.env.tokkk);

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
        .addField("La commande de priorité", "!!prio [Les] [Pokemon] [Du] [Combat] (jusqu'à 32)")
        .addField("La commande d'attaque", "!!atk [nom_de_l'attaque] [Nom_de_l'attaquant] [Nom_du_defenseur] [(Optionnel)Variation de stats]")
        .addField("Variation de stats", "[Atk/Def/AtkS/DefS/Crit/Pre/Esq][+/-][1/2/3/4/5/6]")
        .addField("Statut", "A ajouter à la commande d'attaque : [Brul]\nCommandes à part : !!sommeil (au tour ou il s'endort) - !!para (tout les tour de sa paralysie) - !!poison [nom du pokemon]")
        .addField("Talents", "A ajouter à la commande d'attaque (dans les situations qui l'exiges) : [Rideau_neige] - [Brasier] - [Torrent] - [Normalise] - [Adaptabilité]\nCommandes à part : !!statik - !!Joli Sourire")
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
        var precp = 100
        var esqui = 100
        for(var i = 0; i < dataBank.length; i++){
          if(dataBank[i][0] === attaque){
            var type = dataBank[i][1]
            var puis = dataBank[i][2]
            var spec = dataBank[i][3]
            var prec = dataBank[i][4]
          }
        }
        for(var ip = 0; ip < dataBankPersos.length; ip++){
          if(dataBankPersos[ip][0] === pkmn1){
            var nom1 = dataBankPersos[ip][0]
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
            var nom2 = dataBankPersos[ipb][0]
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
        var crit = Math.floor(Math.random() * Math.floor(100))
        if(message.content.includes("Crit+1") || message.content.includes("crit+1")){
            crit += 10
        }
        if(message.content.includes("Crit+2") || message.content.includes("crit+2")){
            crit += 15
        }
        if(message.content.includes("Crit+3") || message.content.includes("crit+3")){
            crit += 20
        }
        if(message.content.includes("Crit+4") || message.content.includes("crit+4")){
            crit += 25
        }
        if(message.content.includes("Crit+5") || message.content.includes("crit+5")){
            crit += 30
        }
        if(message.content.includes("Esq+1") || message.content.includes("esq+1")){
            esqui = 133
        }
        if(message.content.includes("Esq+2") || message.content.includes("esq+2")){
            esqui = 167
        }
        if(message.content.includes("Esq+3") || message.content.includes("esq+3")){
            esqui = 200
        }
        if(message.content.includes("Esq-1") || message.content.includes("esq-1")){
            esqui = 75
        }
        if(message.content.includes("Esq-2") || message.content.includes("esq-2")){
            esqui = 60
        }
        if(message.content.includes("Esq-3") || message.content.includes("esq-3")){
            esqui = 50
        }
        if(message.content.includes("Pre+1") || message.content.includes("pre+1")){
            precp = 133
        }
        if(message.content.includes("Pre+2") || message.content.includes("pre+2")){
            precp = 167
        }
        if(message.content.includes("Pre+3") || message.content.includes("pre+3")){
            precp = 200
        }
        if(message.content.includes("Pre-1") || message.content.includes("pre-1")){
            precp = 75
        }
        if(message.content.includes("Pre-2") || message.content.includes("pre-2")){
            precp = 60
        }
        if(message.content.includes("Pre-3") || message.content.includes("pre-3")){
            precp = 50
        }
        if(message.content.includes("brul") || message.content.includes("Brul")){
            attak1 /= 2
        }
        if(type === typep1){stab = 1.5}
///////////////////////////////////////////////////////////////////////////////
////////////////////////////////////TALENTS////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
        if(message.content.includes("rideau_neige") || message.content.includes("Rideau_neige")|| message.content.includes("Rideau_Neige")){
            esqui /= 1.2
        } 
        if(message.content.includes("brasier") || message.content.includes("Brasier" && type === "Feu")){
            puis *= 1.5
        }
        if(message.content.includes("torrent") || message.content.includes("Torrent" && type === "Eau")){
            puis *= 1.5
        }
        if(message.content.includes("normalise") || message.content.includes("Normalise")){
            puis *= 1.2
        }
        if(message.content.includes("adaptabilité") || message.content.includes("Adaptabilité")){
            stab = 2
        }
        var typdegz = 1
        if(type === "Acier"){
            if(typep2 === "Fée" || typep2 === "Glace"|| typep2 === "Roche"){
                typdegz = 2
            }
            if(typep2 === "Acier" || typep2 === "Eau" || typep2 === "Electrik" || typep2 === "Feu"){
                typdegz = 0.5
            }
        }
        if(type === "Combat"){
            if(typep2 === "Acier" || typep2 === "Glace" || typep2 === "Normal" || typep2 === "Roche" || typep2 === "Ténèbres"){
                typdegz = 2
            }
            if(typep2 === "Fée" || typep2 === "Insecte" || typep2 === "Poison" || typep2 === "Psy" || typep2 === "Vol"){
                typdegz = 0.5
            }
            if(typep2 === "Spectre"){
                typdegz = 0
            }
        }
        if(type === "Dragon"){
            if(typep2 === "Dragon"){
                typdegz = 2
            }
            if(typep2 === "Acier"){
                typdegz = 0.5
            }
            if(typep2 === "Fée"){
                typdegz = 0
            }
        }
        if(type === "Eau"){
            if(typep2 === "Feu" || typep2 === "Roche" || typep2 === "Sol"){
                typdegz = 2
            }
            if(typep2 === "Dragon" || typep2 === "Eau" || typep2 === "Plante"){
                typdegz = 0.5
            }
        }
        if(type === "Electrik"){
            if(typep2 === "Eau" || typep2 === "Vol"){
                typdegz = 2
            }
            if(typep2 === "Dragon" || typep2 === "Electrik" || typep2 === "Plante"){
                typdegz = 0.5
            }
            if(typep2 === "Sol"){
                typdegz = 0
            }
        }
        if(type === "Fée"){
            if(typep2 === "Combat" || typep2 === "Dragon" || typep2 === "Ténèbres"){
                typdegz = 2
            }
            if(typep2 === "Acier" || typep2 === "Feu" || typep2 === "Poison"){
                typdegz = 0.5
            }
        }
        if(type === "Feu"){
            if(typep2 === "Acier" || typep2 === "Glace" || typep2 === "Insecte" || typep2 === "Plante"){
                typdegz = 2
            }
            if(typep2 === "Dragon" || typep2 === "Eau" || typep2 === "Feu" || typep2 === "Roche"){
                typdegz = 0.5
            }
        }
        if(type === "Glace"){
            if(typep2 === "Dragon" || typep2 === "Plante" || typep2 === "Sol" || typep2 === "Vol"){
                typdegz = 2
            }
            if(typep2 === "Acier" || typep2 === "Eau" || typep2 === "Feu" || typep2 === "Glace"){
                typdegz = 0.5
            }
        }
        if(type === "Insecte"){
            if(typep2 === "Plante" || typep2 === "Psy" || typep2 === "Ténèbres"){
                typdegz = 2
            }
            if(typep2 === "Acier" || typep2 === "Combat" || typep2 === "Fée" || typep2 === "Feu" || typep2 === "Poison" || typep2 === "Spectre" || typep2 === "Vol"){
                typdegz = 0.5
            }
        }
        if(type === "Normal"){
            if(typep2 === "Acier" || typep2 === "Roche"){
                typdegz = 0.5
            }
            if(typep2 === "Spectre"){
                typdegz = 0
            }
        }
        if(type === "Plante"){
            if(typep2 === "Dragon"){
                typdegz = 2
            }
            if(typep2 === "Acier"){
                typdegz = 0.5
            }
            if(typep2 === "Fée"){
                typdegz = 0
            }
        }
        if(type === "Poison"){
            if(typep2 === "Plante"){
                typdegz = 2
            }
            if(typep2 === "Poison" || typep2 === "Roche" || typep2 === "Sol" || typep2 === "Spectre"){
                typdegz = 0.5
            }
            if(typep2 === "Acier"){
                typdegz = 0
            }
        }
        if(type === "Psy"){
            if(typep2 === "Combat" || typep2 === "Poison"){
                typdegz = 2
            }
            if(typep2 === "Acier" || typep2 === "Psy"){
                typdegz = 0.5
            }
            if(typep2 === "Ténèbres"){
                typdegz = 0
            }
        }
        if(type === "Roche"){
            if(typep2 === "Feu" || typep2 === "Glace" || typep2 === "Insecte" || typep2 === "Vol"){
                typdegz = 2
            }
            if(typep2 === "Acier" || typep2 === "Combat" || typep2 === "Sol"){
                typdegz = 0.5
            }
        }
        if(type === "Sol"){
            if(typep2 === "Acier" || typep2 === "Electrik" || typep2 === "Feu" || typep2 === "Poison" || typep2 === "Roche"){
                typdegz = 2
            }
            if(typep2 === "Insecte" || typep2 === "Plante"){
                typdegz = 0.5
            }
            if(typep2 === "Vol"){
                typdegz = 0
            }
        }
        if(type === "Spectre"){
            if(typep2 === "Psy" || typep2 === "Spectre"){
                typdegz = 2
            }
            if(typep2 === "Ténèbres"){
                typdegz = 0.5
            }
            if(typep2 === "Normal"){
                typdegz = 0
            }
        }
        if(type === "Ténèbres"){
            if(typep2 === "Psy" || typep2 === "Spectre"){
                typdegz = 2
            }
            if(typep2 === "Combat" || typep2 === "Fée" || typep2 === "Ténèbres"){
                typdegz = 0.5
            }
        }
        if(type === "Vol"){
            if(typep2 === "Combat" || typep2 === "Insecte" || typep2 === "Plante"){
                typdegz = 2
            }
            if(typep2 === "Acier" || typep2 === "Electrik" || typep2 === "Roche"){
                typdegz = 0.5
            }
        }
        if(spec === "Physique"){
            var degz = Math.round((((((niveau1*0.4)+2)*attak1*puis)/(def2*50)+2)*(typdegz*stab)) * 1) / 1
            var degz2 = Math.round((((((niveau1*0.4)+2)*attak1*puis)/(def2*50)+2)*(typdegz*stab)) * 1) / 1
        }
        if(spec === "Special"){
            var degz = Math.round((((((niveau1*0.4)+2)*attakS1*puis)/(defS2*50)+2)*(typdegz*stab)) * 1) / 1
            var degz2 = Math.round((((((niveau1*0.4)+2)*attak1*puis)/(def2*50)+2)*(typdegz*stab)) * 1) / 1
        }
        console.log("Type : " + type + " & " + typdegz + " Crit = " + crit)
        var hit = (precp / esqui) * prec
        var probahit = Math.floor(Math.random() * Math.floor(100))
        console.log(probahit + "/" + hit)
        if(crit >= 80 && (probahit <= hit || probahit === hit)){
            degz *= 2
            message.channel.send("**Coup Critique !**")
        }   
        var testvit = vit2 * 2
        if(probahit <= hit || probahit === hit){
            message.channel.send("L'attaque fait **" + degz + "** points de dégàts !")
            message.delete()
            if(testvit <= vit1 || testvit === vit2){
            message.channel.send("La vitesse de " + nom1 + " lui fait assainer une nouvelle attaque ! **" + degz2 + "** points de dégàts supplémentaires pour " + nom2 + " !")
            }
        }
        if(probahit >= hit){
            message.channel.send(pkmn1 + " rate son attaque !")
            message.delete()
        }
    }
})

bot.on('message', message => {
    if(message.content === "!!read"){
        dataBank = []
        dataBankPersos = []
        read()
        readPersos()
        console.log(dataBank)
        console.log(dataBankPersos)
        message.channel.send("Le read à été fait !")
    }
})

bot.on('message', message => {
    if(message.content === "!!sommeil"){
        var tourdodo = Math.floor(Math.random() * Math.floor(4))
        tourdodo += 1
        message.channel.send("Le pokemon est endormis pendant " + tourdodo + " tours !")
        message.delete()
        }
})

bot.on('message', message => {
    if(message.content === "!!para"){
        var rollpara = Math.floor(Math.random() * Math.floor(100))
        var probapara = 25
        console.log(rollpara)
        if(rollpara <= probapara || rollpara === probapara){
            message.channel.send("Le pokemon est paralysé et ne peux pas attaquer !")
            message.delete()
        }
        if(rollpara >= probapara){
            message.channel.send("Le pokemon réussis à attaquer !")
            message.delete()
        }
    }
})

bot.on('message', message => {
    if(message.content === "!!statik"){
        var rollstatik = Math.floor(Math.random() * Math.floor(100))
        var probastatik = 30
        console.log(rollstatik)
        if(rollstatik <= probastatik || rollstatik === probastatik){
            message.channel.send("Le pokemon est paralysé !")
            message.delete()
        }
        if(rollstatik >= probastatik){
            message.channel.send("Le pokemon reste de marbre.")
            message.delete()
        }
    }
})

bot.on('message', message => {
    if(message.content.includes("!!poison ")){
        var pkmnpoison = message.content.split(" ")[1]
        for(var ipoi = 0; ipoi < dataBankPersos.length; ipoi++){
          if(dataBankPersos[ipoi][0] === pkmnpoison){
            var nompoison1 = dataBankPersos[ipoi][0]
            var pvpokemonp = dataBankPersos[ipoi][3]
          }
        }
        var pvpkmnpoison = Math.round((pvpokemonp *= 0.125) * 1) / 1
        message.channel.send(nompoison1 + " subits " + pvpkmnpoison + " points dégats à cause du poison.")
        message.delete()
    }
})

bot.on('message', message => {
    if(message.content === "!!Joli Sourire"){
        var rolllove = Math.floor(Math.random() * Math.floor(100))
        var probalove = 30
        console.log(rolllove)
        if(rolllove <= probalove || rolllove === probalove){
            message.channel.send("Le pokemon est amoureux !")
            message.delete()
        }
        if(rolllove >= probalove){
            message.channel.send("Le pokemon reste de marbre.")
            message.delete()
        }
    }
})

bot.on('message', message => {
  if(message.content.includes("!!prio")){
    var pkmnprio1 = message.content.split(" ")[1]
    var pkmnprio2 = message.content.split(" ")[2]
    var pkmnprio3 = message.content.split(" ")[3]
    var pkmnprio4 = message.content.split(" ")[4]
    var pkmnprio5 = message.content.split(" ")[5]
    var pkmnprio6 = message.content.split(" ")[6]
    var pkmnprio7 = message.content.split(" ")[7]
    var pkmnprio8 = message.content.split(" ")[8]
    var pkmnprio9 = message.content.split(" ")[9]
    var pkmnprio10 = message.content.split(" ")[10]
    var pkmnprio11 = message.content.split(" ")[11]
    var pkmnprio12 = message.content.split(" ")[12]
    var pkmnprio13 = message.content.split(" ")[13]
    var pkmnprio14 = message.content.split(" ")[14]
    var pkmnprio15 = message.content.split(" ")[15]
    var pkmnprio16 = message.content.split(" ")[16]
    var pkmnprio17 = message.content.split(" ")[17]
    var pkmnprio18 = message.content.split(" ")[18]
    var pkmnprio19 = message.content.split(" ")[19]
    var pkmnprio20 = message.content.split(" ")[20]
    var pkmnprio21 = message.content.split(" ")[21]
    var pkmnprio22 = message.content.split(" ")[22]
    var pkmnprio23 = message.content.split(" ")[23]
    var pkmnprio24 = message.content.split(" ")[24]
    var pkmnprio25 = message.content.split(" ")[25]
    var pkmnprio26 = message.content.split(" ")[26]
    var pkmnprio27 = message.content.split(" ")[27]
    var pkmnprio28 = message.content.split(" ")[28]
    var pkmnprio29 = message.content.split(" ")[29]
    var pkmnprio30 = message.content.split(" ")[30]
    var pkmnprio31 = message.content.split(" ")[31]
    var pkmnprio32 = message.content.split(" ")[32]
    for(var iprioa = 0; iprioa < dataBankPersos.length; iprioa++){
      if(dataBankPersos[iprioa][0] === pkmnprio1){
        var nom1 = dataBankPersos[iprioa][0]
        var vit1 = dataBankPersos[iprioa][8]
    }
  }
    for(var ipriob = 0; ipriob < dataBankPersos.length; ipriob++){
      if(dataBankPersos[ipriob][0] === pkmnprio2){
        var nom2 = dataBankPersos[ipriob][0]
        var vit2 = dataBankPersos[ipriob][8]
      }
    }
    for(var iprioc = 0; iprioc < dataBankPersos.length; iprioc++){
      if(dataBankPersos[iprioc][0] === pkmnprio3){
        var nom3 = dataBankPersos[iprioc][0]
        var vit3 = dataBankPersos[iprioc][8]
      }
    }
    for(var ipriod = 0; ipriod < dataBankPersos.length; ipriod++){
      if(dataBankPersos[ipriod][0] === pkmnprio4){
        var nom4 = dataBankPersos[ipriod][0]
        var vit4 = dataBankPersos[ipriod][8]
      }
    }
    for(var iprioe = 0; iprioe < dataBankPersos.length; iprioe++){
      if(dataBankPersos[iprioe][0] === pkmnprio5){
        var nom5 = dataBankPersos[iprioe][0]
        var vit5 = dataBankPersos[iprioe][8]
      }
    }
    for(var ipriof = 0; ipriof < dataBankPersos.length; ipriof++){
      if(dataBankPersos[ipriof][0] === pkmnprio6){
        var nom6 = dataBankPersos[ipriof][0]
        var vit6 = dataBankPersos[ipriof][8]
      }
    }
    for(var ipriog = 0; ipriog < dataBankPersos.length; ipriog++){
      if(dataBankPersos[ipriog][0] === pkmnprio7){
        var nom7 = dataBankPersos[ipriog][0]
        var vit7 = dataBankPersos[ipriog][8]
      }
    }
    for(var iprioh = 0; iprioh < dataBankPersos.length; iprioh++){
      if(dataBankPersos[iprioh][0] === pkmnprio8){
        var nom8 = dataBankPersos[iprioh][0]
        var vit8 = dataBankPersos[iprioh][8]
      }
    }
    for(var iprioi = 0; iprioi < dataBankPersos.length; iprioi++){
      if(dataBankPersos[iprioi][0] === pkmnprio9){
        var nom9 = dataBankPersos[iprioi][0]
        var vit9 = dataBankPersos[iprioi][8]
      }
    }
    for(var iprioj = 0; iprioj < dataBankPersos.length; iprioj++){
      if(dataBankPersos[iprioj][0] === pkmnprio10){
        var nom10 = dataBankPersos[iprioj][0]
        var vit10 = dataBankPersos[iprioj][8]
      }
    }
    for(var ipriok = 0; ipriok < dataBankPersos.length; ipriok++){
      if(dataBankPersos[ipriok][0] === pkmnprio11){
        var nom11 = dataBankPersos[ipriok][0]
        var vit11 = dataBankPersos[ipriok][8]
      }
    }
    for(var ipriol = 0; ipriol < dataBankPersos.length; ipriol++){
      if(dataBankPersos[ipriol][0] === pkmnprio12){
        var nom12 = dataBankPersos[ipriol][0]
        var vit12 = dataBankPersos[ipriol][8]
      }
    }
    for(var ipriom = 0; ipriom < dataBankPersos.length; ipriom++){
      if(dataBankPersos[ipriom][0] === pkmnprio13){
        var nom13 = dataBankPersos[ipriom][0]
        var vit13 = dataBankPersos[ipriom][8]
      }
    }
    for(var iprion = 0; iprion < dataBankPersos.length; iprion++){
      if(dataBankPersos[iprion][0] === pkmnprio14){
        var nom14 = dataBankPersos[iprion][0]
        var vit14 = dataBankPersos[iprion][8]
      }
    }
    for(var iprioo = 0; iprioo < dataBankPersos.length; iprioo++){
      if(dataBankPersos[iprioo][0] === pkmnprio15){
        var nom15 = dataBankPersos[iprioo][0]
        var vit15 = dataBankPersos[iprioo][8]
      }
    }
    for(var ipriop = 0; ipriop < dataBankPersos.length; ipriop++){
      if(dataBankPersos[ipriop][0] === pkmnprio16){
        var nom16 = dataBankPersos[ipriop][0]
        var vit16 = dataBankPersos[ipriop][8]
      }
    }
    for(var iprioq = 0; iprioq < dataBankPersos.length; iprioq++){
      if(dataBankPersos[iprioq][0] === pkmnprio17){
        var nom17 = dataBankPersos[iprioq][0]
        var vit17 = dataBankPersos[iprioq][8]
      }
    }
    for(var iprior = 0; iprior < dataBankPersos.length; iprior++){
      if(dataBankPersos[iprior][0] === pkmnprio18){
        var nom18 = dataBankPersos[iprior][0]
        var vit18 = dataBankPersos[iprior][8]
      }
    }
    for(var iprios = 0; iprios < dataBankPersos.length; iprios++){
      if(dataBankPersos[iprios][0] === pkmnprio19){
        var nom19 = dataBankPersos[iprios][0]
        var vit19 = dataBankPersos[iprios][8]
      }
    }
    for(var ipriot = 0; ipriot < dataBankPersos.length; ipriot++){
      if(dataBankPersos[ipriot][0] === pkmnprio20){
        var nom20 = dataBankPersos[ipriot][0]
        var vit20 = dataBankPersos[ipriot][8]
      }
    }
    for(var ipriou = 0; ipriou < dataBankPersos.length; ipriou++){
      if(dataBankPersos[ipriou][0] === pkmnprio21){
        var nom21 = dataBankPersos[ipriou][0]
        var vit21 = dataBankPersos[ipriou][8]
      }
    }
    for(var ipriov = 0; ipriov < dataBankPersos.length; ipriov++){
      if(dataBankPersos[ipriov][0] === pkmnprio22){
        var nom22 = dataBankPersos[ipriov][0]
        var vit22 = dataBankPersos[ipriov][8]
      }
    }
    for(var ipriow = 0; ipriow < dataBankPersos.length; ipriow++){
      if(dataBankPersos[ipriow][0] === pkmnprio23){
        var nom23 = dataBankPersos[ipriow][0]
        var vit23 = dataBankPersos[ipriow][8]
      }
    }
    for(var ipriox = 0; ipriox < dataBankPersos.length; ipriox++){
      if(dataBankPersos[ipriox][0] === pkmnprio24){
        var nom24 = dataBankPersos[ipriox][0]
        var vit24 = dataBankPersos[ipriox][8]
      }
    }
    for(var iprioy = 0; iprioy < dataBankPersos.length; iprioy++){
      if(dataBankPersos[iprioy][0] === pkmnprio25){
        var nom25 = dataBankPersos[iprioy][0]
        var vit25 = dataBankPersos[iprioy][8]
      }
    }
    for(var iprioz = 0; iprioz < dataBankPersos.length; iprioz++){
      if(dataBankPersos[iprioz][0] === pkmnprio26){
        var nom26 = dataBankPersos[iprioz][0]
        var vit26 = dataBankPersos[iprioz][8]
      }
    }
    for(var iprioaa = 0; iprioaa < dataBankPersos.length; iprioaa++){
      if(dataBankPersos[iprioaa][0] === pkmnprio27){
        var nom27 = dataBankPersos[iprioaa][0]
        var vit27 = dataBankPersos[iprioaa][8]
      }
    }
    for(var iprioab = 0; iprioab < dataBankPersos.length; iprioab++){
      if(dataBankPersos[iprioab][0] === pkmnprio28){
        var nom28 = dataBankPersos[iprioab][0]
        var vit28 = dataBankPersos[iprioab][8]
      }
    }
    for(var iprioac = 0; iprioac < dataBankPersos.length; iprioac++){
      if(dataBankPersos[iprioac][0] === pkmnprio29){
        var nom29 = dataBankPersos[iprioac][0]
        var vit29 = dataBankPersos[iprioac][8]
      }
    }
    for(var iprioad = 0; iprioad < dataBankPersos.length; iprioad++){
      if(dataBankPersos[iprioad][0] === pkmnprio30){
        var nom30 = dataBankPersos[iprioad][0]
        var vit30 = dataBankPersos[iprioad][8]
      }
    }
    for(var iprioae = 0; iprioae < dataBankPersos.length; iprioae++){
      if(dataBankPersos[iprioae][0] === pkmnprio31){
        var nom31 = dataBankPersos[iprioae][0]
        var vit31 = dataBankPersos[iprioae][8]
      }
    }
    for(var iprioaf = 0; iprioaf < dataBankPersos.length; iprioaf++){
      if(dataBankPersos[iprioaf][0] === pkmnprio32){
        var nom32 = dataBankPersos[iprioaf][0]
        var vit32 = dataBankPersos[iprioaf][8]
      }
    }
    var testcroissant = [vit1 + " - " + nom1, vit2+ " - " + nom2, vit3+ " - " + nom3, vit4+ " - " + nom4, vit5+ " - " + nom5, vit6+ " - " + nom6, vit7+ " - " + nom7, vit8+ " - " + nom8, vit9+ " - " + nom9, vit10+ " - " + nom10, vit11+ " - " + nom11, vit12+ " - " + nom12, vit13+ " - " + nom13, vit14+ " - " + nom14, vit15+ " - " + nom15, vit16+ " - " + nom16, vit17+ " - " + nom17, vit18+ " - " + nom18, vit19+ " - " + nom19, vit20+ " - " + nom20, vit21+ " - " + nom21, vit22+ " - " + nom22, vit23+ " - " + nom23, vit24+ " - " + nom24, vit25+ " - " + nom25, vit26+ " - " + nom26, vit27+ " - " + nom27, vit28+ " - " + nom28, vit29+ " - " + nom29, vit30+ " - " + nom30, vit31+ " - " + nom31, vit32+ " - " + nom32]
    testcroissant.sort()
    console.log(testcroissant)
    var msgprio = []
    for(var iprio = 0; iprio < (message.content.split(" ").length-1); iprio++){
        msgprio.push(testcroissant[iprio])
      }
    msgprio.reverse()
    var messagefinal = ""
    for(var ipriofinal = 0; ipriofinal < msgprio.length; ipriofinal++){
      messagefinal += ("> " + msgprio[ipriofinal] + "\n")
    }
    message.channel.send(messagefinal)
    message.delete()
  }
})
