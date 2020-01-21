const Discord = require('discord.js');
var bot = new Discord.Client();

bot.on('ready',() => {
    console.log('Bot Ready')
})

bot.login(process.env.token);

bot.on('message', message => {
  if(message.content[0]+message.content[1]+message.content[2]+message.content[3]+message.content[4]+message.content[5]+message.content[6] === "/charge"){
    var probafail = Math.floor(Math.random() * Math.floor(100))
    if(message.content[8]+message.content[9]+message.content[10] === "pre"){
      if(message.content[11] === "-"){
      probafail -= Math.floor(Math.random() * Math.floor(2)) + 4
      if(message.content[12] === "-"){
        probafail -= Math.floor(Math.random() * Math.floor(3)) + 5
        if(message.content[13] === "-"){
          probafail -= Math.floor(Math.random() * Math.floor(4)) + 6
          }
        }
      }
    }
    if(message.content[11]+message.content[12]+message.content[13] === "pre"){
      if(message.content[14] === "-"){
      probafail -= Math.floor(Math.random() * Math.floor(2)) + 4
      if(message.content[15] === "-"){
        probafail -= Math.floor(Math.random() * Math.floor(2)) + 4
        if(message.content[16] === "-"){
          probafail -= Math.floor(Math.random() * Math.floor(2)) + 4
          }
        }
      }
    }
    if(message.content[15]+message.content[16]+message.content[17] === "pre"){
      if(message.content[18] === "-"){
      probafail -= Math.floor(Math.random() * Math.floor(2)) + 4
      if(message.content[19] === "-"){
        probafail -= Math.floor(Math.random() * Math.floor(2)) + 4
        if(message.content[20] === "-"){
          probafail -= Math.floor(Math.random() * Math.floor(2)) + 4
          }
        }
      }
    }
    if(message.content[18]+message.content[19]+message.content[20] === "pre"){
      if(message.content[21] === "-"){
      probafail -= Math.floor(Math.random() * Math.floor(2)) + 4
      if(message.content[22] === "-"){
        probafail -= Math.floor(Math.random() * Math.floor(2)) + 4
        if(message.content[23] === "-"){
          probafail -= Math.floor(Math.random() * Math.floor(2)) + 4
          }
        }
      }
    }
    if(probafail >= 90){
      message.channel.send("> L'adversaire esquive votre attaque !")
    }else{
      var crit = Math.floor(Math.random() * Math.floor(100))
      var dégat = Math.floor(Math.random() * Math.floor(2))
      dégat += 3
      if(message.content[8]+message.content[9]+message.content[10] === "atk"){
        if(message.content[11] === "-"){
        dégat += Math.floor(Math.random() * Math.floor(3)) + 2
        if(message.content[12] === "-"){
          dégat += Math.floor(Math.random() * Math.floor(3)) + 2
          if(message.content[13] === "-"){
            dégat += Math.floor(Math.random() * Math.floor(3)) + 2
            if(message.content[14] === "-"){
              dégat += Math.floor(Math.random() * Math.floor(3)) + 2
              if(message.content[15] === "-"){
                dégat += Math.floor(Math.random() * Math.floor(3)) + 2
                }
              }    
            }    
          }
        }
      }
      if(message.content[11]+message.content[12]+message.content[13] === "atk"){
        if(message.content[14] === "-"){
        dégat += Math.floor(Math.random() * Math.floor(3)) + 2
        if(message.content[15] === "-"){
          dégat += Math.floor(Math.random() * Math.floor(3)) + 2
          if(message.content[16] === "-"){
            dégat += Math.floor(Math.random() * Math.floor(3)) + 2
            if(message.content[17] === "-"){
              dégat += Math.floor(Math.random() * Math.floor(3)) + 2
              if(message.content[18] === "-"){
                dégat += Math.floor(Math.random() * Math.floor(3)) + 2
                }  
              }
            }
          }
        }
      }
      if(message.content[15]+message.content[16]+message.content[17] === "atk"){
        if(message.content[18] === "-"){
        dégat += Math.floor(Math.random() * Math.floor(4)) + 2
        if(message.content[19] === "-"){
          dégat += Math.floor(Math.random() * Math.floor(6)) + 2
          if(message.content[20] === "-"){
            dégat += Math.floor(Math.random() * Math.floor(8)) + 2
            if(message.content[21] === "-"){
              dégat += Math.floor(Math.random() * Math.floor(3)) + 2
              if(message.content[22] === "-"){
                dégat += Math.floor(Math.random() * Math.floor(3)) + 2
                }
              }
            }
          }
        }
      }
      if(message.content[18]+message.content[19]+message.content[20] === "atk"){
        if(message.content[21] === "-"){
        dégat += Math.floor(Math.random() * Math.floor(3)) + 2
        if(message.content[22] === "-"){
          dégat += Math.floor(Math.random() * Math.floor(3)) + 2
          if(message.content[23] === "-"){
            dégat += Math.floor(Math.random() * Math.floor(3)) + 2
            if(message.content[24] === "-"){
              dégat += Math.floor(Math.random() * Math.floor(3)) + 2
              if(message.content[25] === "-"){
                dégat += Math.floor(Math.random() * Math.floor(3)) + 2
                }
              }
            }
          }
        }
      }
      if(message.content[8]+message.content[9]+message.content[10] === "atk"){
        if(message.content[11] === "+"){
        dégat += Math.floor(Math.random() * Math.floor(3)) + 2
        if(message.content[12] === "+"){
          dégat += Math.floor(Math.random() * Math.floor(3)) + 2
          if(message.content[13] === "+"){
            dégat += Math.floor(Math.random() * Math.floor(3)) + 2
            if(message.content[14] === "+"){
              dégat += Math.floor(Math.random() * Math.floor(3)) + 2
              if(message.content[15] === "+"){
                dégat += Math.floor(Math.random() * Math.floor(3)) + 2
                }    
              }
            }
          }
        }
      }
      if(message.content[11]+message.content[12]+message.content[13] === "atk"){
        if(message.content[14] === "+"){
        dégat += Math.floor(Math.random() * Math.floor(3)) + 2
        if(message.content[15] === "+"){
          dégat += Math.floor(Math.random() * Math.floor(3)) + 2
          if(message.content[16] === "+"){
            dégat += Math.floor(Math.random() * Math.floor(3)) + 2
            if(message.content[17] === "+"){
              dégat += Math.floor(Math.random() * Math.floor(3)) + 2
              if(message.content[18] === "+"){
                dégat += Math.floor(Math.random() * Math.floor(3)) + 2
                }    
              }
            }
          }
        }
      }
      if(message.content[15]+message.content[16]+message.content[17] === "atk"){
        if(message.content[18] === "+"){
        dégat += Math.floor(Math.random() * Math.floor(4)) + 2
        if(message.content[19] === "+"){
          dégat += Math.floor(Math.random() * Math.floor(6)) + 2
          if(message.content[20] === "+"){
            dégat += Math.floor(Math.random() * Math.floor(8)) + 2
            if(message.content[21] === "+"){
              dégat += Math.floor(Math.random() * Math.floor(3)) + 2
              if(message.content[22] === "+"){
                dégat += Math.floor(Math.random() * Math.floor(3)) + 2
                }
              }
            }
          }
        }
      }
      if(message.content[18]+message.content[19]+message.content[20] === "atk"){
        if(message.content[21] === "+"){
        dégat += Math.floor(Math.random() * Math.floor(3)) + 2
        if(message.content[22] === "+"){
          dégat += Math.floor(Math.random() * Math.floor(3)) + 2
          if(message.content[23] === "+"){
            dégat += Math.floor(Math.random() * Math.floor(3)) + 2
            if(message.content[24] === "+"){
              dégat += Math.floor(Math.random() * Math.floor(3)) + 2
              if(message.content[25] === "+"){
                dégat += Math.floor(Math.random() * Math.floor(3)) + 2
                }
              }
            }
          }
        }
      }
      if(crit <= 7){
        dégat += Math.floor(Math.random() * Math.floor(4)) + 2
        message.channel.send("> ***COUP CRITIQUE !!***")
      }
      if(message.content[8]+message.content[9] === "SE"){
        dégat + Math.floor(Math.random() * Math.floor(5)) + 3
        message.channel.send("> ***C'est super efficace !***")
      }
      if(message.content[8]+message.content[9] === "PE"){
        dégat -= Math.floor(Math.random() * Math.floor(4)) + 3
        message.channel.send("> *Ce n'est pas trés efficace...*")
      }
      if(dégat <= 0){
        dégat = 1
      }
      message.channel.send("> L'attaque réussie ! L'adversaire subit **" + dégat + "** points de dégats !")
    }
  }
})
