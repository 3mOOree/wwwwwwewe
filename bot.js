const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = '#'




client.on('ready', () => {
    console.log('╔[════════════════════════════════════]╗'); // Heeeeeemo
    console.log('')
    console.log('            ╔[════════════]╗')
    console.log('              Bot Is Online')
    console.log('            ╚[════════════]╝')
    console.log('')
    console.log(`Logged in as ${client.user.tag}!`);
    console.log('')
    console.log(`servers! [ " ${client.guilds.size} " ]`);
    console.log('')
    console.log(`Users! [ " ${client.users.size} " ]`);
    console.log('')
    console.log('╚[════════════════════════════════════]╝')
          client.user.setActivity("#js",{type: 'STREAMING'});     //Heeeeeemo Heeeeeeeeeemo   
});




const code = '#';

client.on('message',async message => {
    if(message.content.startsWith(code + "js")) {
  if(!message.channel.guild) return message.reply(' ');
    let rank = message.guild.member(message.author).roles.find('name', '• Superme » Support');
    if (!rank) return message.channel.send(':octagonal_sign: **| يجب ان تمتلك رتبة • Superme » Support لأستخدام هذا الأمر.**');
    let jscodes = message.guild.channels.find(`name`, "✽-discord-js");
    if(!jscodes) return message.channel.send(":x:لم اجد الروم الخاص بنشر الاكواد");
      let filter = m => m.author.id === message.author.id;
      let thisMessage;
      let thisFalse;
      message.channel.send(':pencil: **| من فضلك اكتب الكود الأن... :pencil2: **').then(msg => {
  
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 90000,
        errors: ['time']
      })
      .then(collected => {
        collected.first().delete();
        thisMessage = collected.first().content;
        let boi;
        msg.edit(':scroll: **| من فضلك اكتب وصف الكود الأن... :pencil2: **').then(msg => {
  
            message.channel.awaitMessages(filter, {
              max: 1,
              time: 90000,
              errors: ['time']
            })
            .then(collected => {
              collected.first().delete();
              boi = collected.first().content;
              let boi2;
              msg.edit(':man_in_tuxedo: **| من فضلك اكتب من صنع هذا الكود الأن... :pencil2: **').then(msg => {
  
                message.channel.awaitMessages(filter, {
                  max: 1,
                  time: 90000,
                  errors: ['time']
                })
                .then(collected => {
                  collected.first().delete();
                boi2 = collected.first().content;
        msg.edit(':shield: **| [ هل انت متأكد من نشر الكود؟ | [ نعم ] او [ لا**');
   message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
          max: 1,
          time: 90000,
          errors: ['time']
        })
        .then(collected => {
          if(collected.first().content === 'لا') {
            msg.delete();
            message.delete();
            thisFalse = false;
          }
          if(collected.first().content === 'نعم') {
            if(thisFalse === false) return;
            msg.edit(':dove: **| Done :white_check_mark:, تم بنجاح نشر كودك في روم الاكواد**');
            collected.first().delete();
            jscodes.send(`@everyone | @here
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**Superme Codes© :arrow_down:**            
\`\`\`js
${thisMessage}\`\`\`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**وصف الكود**: ${boi}
**تم النشر بواسطة**: ${message.author}
**المصدر / الشخص الذي صنع الكود**: ${boi2}`); 
          }
        }
    );
});
      });
    }
      );
    });
}
);
      })}});

client.on("ready", async  => {
setInterval(function(){
client.channels.find('511239519144771614', 'ChannelID').setName("「");
client.channels.find('511239519144771614', 'ChannelID').setName("「 Wel");
client.channels.find('511239519144771614', 'ChannelID').setName("「 Welco");
client.channels.find('511239519144771614', 'ChannelID').setName("「 Welcome");
client.channels.find('511239519144771614', 'ChannelID').setName("「 Welcome To");
client.channels.find('511239519144771614', 'ChannelID').setName("「 Welcome To ");
client.channels.find('511239519144771614', 'ChannelID').setName("「 Welcome To S");
client.channels.find('511239519144771614', 'ChannelID').setName("「 Welcome To Su);
client.channels.find('id', 'ChannelID').setName("「 Welcome To Sup");
client.channels.find('511239519144771614', 'ChannelID').setName("「 Welcome To Supe");
client.channels.find('511239519144771614', 'ChannelID').setName("「 Welcome To Super );
client.channels.find('511239519144771614', 'ChannelID').setName("「 Welcome To Super me co");
client.channels.find('511239519144771614', 'ChannelID').setName("「 Welcome To Superme Codes 」");
  }, 3000);
});






client.login(process.env.BOT_TOKEN)

