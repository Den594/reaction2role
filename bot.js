const Discord = require ('discord.js'); 

const client = new Discord.Client (); 

 

client.on ('ready', () => { 

    console.log ('I ready!'); 

}); 

 

client.on ('message', message => { 

    if (message.content === 'ping') { 

       message.reply ('pong'); 

       } 

}); 

 
// ЭТО ДОЛЖЕН БЫТЬ ЭТОТ ПУТЬ 

client.login (process.env.Njg3OTk0OTQ3MjkwMjY3NzEw.XnDO-w.ZJo6PWByv-hs1Q6ndSc-z6rtdcg);
