const Discord = require('discord.js');
const bot = new Discord.Client();



var prefix = ('.');

bot.login ('NTEyNjcxMjMzMTk2ODE4NDU0.Ds82dw.bXalLBHHn8rsWSaEDLb7C57aXDQ');

bot.on ('ready',fonction => {
    console.log('I am ready!');
    bot.user.setStatus('online');
    bot.user.setActivity('.help');
    return (console.error);
   

  });
bot.on ('ready', message => {
  bot.channels.get(515036306523291660)
})


  bot.on('guildMemberAdd', function (member) {
    member.createDM().then(function(channel) {
     return channel.send('bienvenue sur RP manche'+ member.displayName)
    }).catch(console.error)
  })

bot.on('message', message => {
   if (message.content === prefix + 'help') {
    message.channel.send('**__Voici les commandes du bot:__**\n **préfix du bot:** **.** \n **- help:** pour afficher les commandes \n **- gouvernement:** afficher la composition de la haute administration de la manche \n **- nuit:** annoncer que vous allez vous coucher \n **- G {user}:** Engeuler la personne de son choix');
    console.log('commande help demandé !');
    }
  });


  bot.on('message', message => {
     if (message.content === 'ping') {
       message.reply('pong');
       console.log ('ping pong');
    }
  });

  bot.on ('message', message => { 
    if (message.content === 'ta gueule') { 
      message.reply('vous allez commandée un beguel');
      console.log ('ta gueule');
    }
  });

  bot.on('message', message => {
    if (message.content === 'pong') {
      message.reply('ping');
      console.log ('pong ping');
   }
 });

 bot.on('message', message => {
   if (message.content ==='!garde') {
     message.channel.send('<@&477478572039208961>');
          console.log('gardes du prefet');
          message.delete([1000]);
   }
 });


bot.on('message', message => {
  if (message.content === prefix +'gouvernement') {
    message.channel.sendMessage('**__Voici la composition actuelle de la haute administration:__** \n \n **__préfet:__** <@390911851191336961> \n **__sous-préfet:__** *indisponible pour le moment* \n **__préfet de police:__** *indisponible pour le moment* \n __**colonel des armèes:**__ <@390213101624098816> \n **__chef des service secret:__** **:x: information à ne pas révéler**:x: \n **__chef des médecins__** *indisponible pour le moment* \n __**chef des pompiers**__ *indisponible pour le moment*');
    console.log('compo gouvernement');
  }
});

bot.on('message', message => {
  if (message.content === prefix + 'nuit') {
    message.reply('va se coucher, @here');
    console.log ('nuit');
 }
});

bot.on('message', message => {
  if (message.content.startsWith(prefix + 'G')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        message.channel.sendMessage((user) + 'ALORS COMME CA ON TRAVAILLE  PAS ??? CA VA PAS LE FAIRE HEIN ! DEPECHE TOI FAUT PAS PERDRE DE TEMPS !');
        message.delete([1000]);
        console.log('engeulade sur' + user);
      }
    }
  }

 
})

bot.on('message', message => {
  if (message.content === ('!police'+ message)) {
       message.channel.send('Votre appel a bien été prise en compte, la police va arriver sous peu...');
       sendMessage.channel.id(478123048386691082)('')
       cpnsole.log('appelle police dans' + channel.id);
    }   
});

bot.on('message', message => {
  if (message.content === prefix + 'decobot') {
    message.channel.sendMessage('je vais me déconnecter, mes commande ne serons plus utilisable. @here');
    message.delete(1000);
    console.log ('deco bot');
 }
});

bot.on('message', message => {
  if (message.content === prefix + 'cobot') {
     message.channel.send(':smiley: salut tout le monde je suis la !:smiley: @here');
    message.delete(1000);
    console.log ('co bot');
 
  }
});

bot.on('message', message => {
  if (message.content.startsWith(prefix + 'D')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        message.channel.sendMessage((user) + 'dépèche toi un peut, on a pas que ca a faire !');
        message.delete([1000]);
        console.log('depeche toi sur ' + user);
      }
    }
  }

 
})
