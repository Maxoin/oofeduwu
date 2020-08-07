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
        (bot.channels.get(channelStockId).fetchMessages({ limit : 200})
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
        (bot.channels.get(channelStockIdPersos).fetchMessages({ limit : 200}) 
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
        .addField("La commande d'attaque", "!!atk [nom_de_l'attaque] [Nom_de_l'attaquant] [Nom_du_defenseur] [(Optionnel)Variation de statut]")
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
            if(testvit <= vit1 || testvit === vit2){
            message.channel.send("La vitesse de " + nom1 + " lui fait assainer une nouvelle attaque ! **" + degz2 + "** points de dégàts supplémentaires pour " + nom2 + " !")
            }
        }
        if(probahit >= hit){
            message.channel.send(pkmn1 + " rate son attaque !")
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
        }
})

bot.on('message', message => {
    if(message.content === "!!para"){
        var rollpara = Math.floor(Math.random() * Math.floor(100))
        var probapara = 25
        console.log(rollpara)
        if(rollpara <= probapara || rollpara === probapara){
            message.channel.send("Le pokemon est paralysé et ne peux pas attaquer !")
        }
        if(rollpara >= probapara){
            message.channel.send("Le pokemon réussis à attaquer !")
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
        }
        if(rollstatik >= probastatik){
            message.channel.send("Le pokemon reste de marbre.")
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
    }
})

bot.on('message', message => {
    if(message.content === "!!Joli Sourire"){
        var rolllove = Math.floor(Math.random() * Math.floor(100))
        var probalove = 30
        console.log(rolllove)
        if(rolllove <= probalove || rolllove === probalove){
            message.channel.send("Le pokemon est amoureux !")
        }
        if(rolllove >= probalove){
            message.channel.send("Le pokemon reste de marbre.")
        }
    }
})

