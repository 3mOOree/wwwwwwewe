const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs')
const moment = require('moment');
const Canvas = require('canvas');
const jimp = require('jimp');
const prefix = '#'

client.on('ready', () => {
    console.log('╔[════════════════════════════════════]╗'); // Heeeeeemo
    console.log('')
    console.log(' ╔[════════════]╗')
    console.log(' Bot Is Online')
    console.log(' ╚[════════════]╝')
    console.log('')
    console.log(`Logged in as ${client.user.tag}!`);
    console.log('')
    console.log(`servers! [ " ${client.guilds.size} " ]`);
    console.log('')
    console.log(`Users! [ " ${client.users.size} " ]`);
    console.log('')
    console.log('╚[════════════════════════════════════]╝')
    client.user.setActivity("#js",{type: 'WATCHING'}); //Heeeeeemo Heeeeeeeeeemo 
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
                 });
               });
             });
           });
         });
       });
     });
   }
});

client.on('message', async (message) => {
  if(message.content.startsWith("#تقديم")) {
    await message.channel.send("** ما لغتك؟**").then(e => {
    let filter = m => m.author.id === message.author.id
    let lan = '';
    let md = '';
    let br = '';
    let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 400000, errors: ['time'] })
      .then(collected => {
        lan = collected.first().content
        collected.first().delete()
        e.delete();
        message.channel.send('** ما خبرتك؟**').then(m => {
        let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 400000, errors: ['time'] })
          .then(co => {
            md = co.first().content
            co.first().delete()
            m.delete();
            message.channel.send('**وش الفرق بين const و var**').then(ms => {
            let br = message.channel.awaitMessages(filter, { max: 1, time: 400000, errors: ['time'] })
              .then(col => {
                br = col.first().content
                col.first().delete()
                ms.delete()
                message.channel.send('جاري التقديم ..').then(b => {
                setTimeout(() => { 
                  b.edit(`**تم التقديم وسيتم الرد فـ اقرب وقت**`)
                },2000);
                var gg = message.guild.channels.find('name', '✻-التقديمات')
                if(!gg) return;
                if(gg) {
                  gg.send({
                      embed : new Discord.RichEmbed()
                      .setDescription(`** اللغة :question: : \n ${lan}\nالخبرة :link: :\n ${md} \nالفرق بين const,var :question: :\n ${br} \nتم التقديم بواسطة : <@${message.author.id}> **`)
                      .setFooter(`Superme™`)
                      .setTimestamp()
                    });
                  } 
                })
              })
            })
          })
        })
      })
    })
  }
})
                      










  








				
			

		

	

		

			
          












client.on('message', message => {

    if (message.content === "#count") {

    let embed = new Discord.RichEmbed()

.addField('Count: ' , message.guild.memberCount)
.setColor("RANDOM")
.setDescription(`${message.guild.name}`)
     message.channel.sendEmbed(embed);
} 

});



client.on('message', message => {
         if (message.content === "#dt") {
         if (!message.channel.guild) return message.reply('** This command only for servers **');  
         var currentTime = new Date(),
            hours = currentTime.getHours() + 4 ,
            hours2 = currentTime.getHours() + 3 ,
            hours3 = currentTime.getHours() + 2 ,
            hours4 = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             var h = hours
  if(hours > 12) {
               hours -= 12;
            } else if(hours == 0) {
                hours = "12";
            }  
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";
            
            }  
                         if(hours3 > 12) {
               hours3 -= 12;
            } else if(hours3 == 0) {
                hours3 = "12";
            } 
            if (minutes < 10) {
                minutes = '0' + minutes;
            }

            var suffix = 'Morning';
            if (hours >= 12) {
                suffix = 'Evening';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }
 

                var Date15= new Discord.RichEmbed()
                .setThumbnail("https://i.imgur.com/ib3n4Hq.png") 
                .setTitle( "『Date & Time』")
                .setColor('RANDOM')
                .setFooter(message.author.username, message.author.avatarURL)
                .addField('UAE',
                "『"+ hours + ":" + minutes +":"+ seconds + "』")
                 .addField('KSA',
                "『"+ hours2 + ":" + minutes +":"+ seconds  + "』") 
                .addField('Egypt',
                "『"+ hours3 + ":" + minutes +":"+ seconds  + "』") 
                
                .addField('Date',
                "『"+ Day + "-" + Month + "-" + Year +  "』")

                 message.channel.sendEmbed(Date15);
        }
    });



//قبول - رفض
client.on('message',async message => {

let mention = message.mentions.members.first();

let Room = client.channels.get('512003685027414026');

if(message.content.startsWith(prefix + "رفض")) {

if(message.guild.id !== '507504573066379295') return;

 if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("**للأسف ليس لديك صلاحية**").then(msg => msg.delete(5000));


if(!mention) return message.reply("منشن شخص");



Room.send(`
**» العضو :** ${mention}
[ ❌ ] :: لقد تم رفض العضو`);

}

});
  

    
client.on('message',async message => {

let mention = message.mentions.members.first();

let Room = client.channels.get('512003685027414026');

if(message.content.startsWith(prefix + "قبول")) {

if(message.guild.id !== '507504573066379295') return;

 if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("**للأسف ليس لديك صلاحية**").then(msg => msg.delete(5000));


if(!mention) return message.reply("منشن شخص");



Room.send(`
**» العضو :** ${mention}
[ ✅ ] :: لقد تم قبول العضو واعطائه رتبة سبورت`);

}

});
  

 

  

      


	


client.on('message', msg => {
  if (msg.content === 'السعودية') {      
    msg.react("🇸🇦")
    msg.channel.send("🇸🇦")
  }
});

client.on('message', msg => {
  if (msg.content === 'مصر') {      
    msg.react("🇪🇬")
    msg.channel.send("🇪🇬")
  }
});

client.on('message', msg => {
  if (msg.content === 'المغرب') {      
    msg.react("🇲🇦")
    msg.channel.send("🇲🇦")
  }
});

client.on('message', msg => {
  if (msg.content === 'العراق') {      
    msg.react("🇮🇶")
    msg.channel.send("🇮🇶")
  }
});

client.on('message', msg => {
  if (msg.content === 'الجزائر') {      
    msg.react("🇩🇿")
    msg.channel.send("🇩🇿")
  }
});

client.on('message', msg => {
  if (msg.content === 'فلسطين') {      
    msg.react(":flag_ps: ")
    msg.channel.send(":flag_ps: ")
  }
});


client.on('message', msg => {
  if (msg.content === 'الامارات') {      
    msg.react("🇦🇪")
    msg.channel.send("🇦🇪")
  }
});

client.on('message', msg => {
  if (msg.content === 'تونس') {      
    msg.react("🇹🇳")
    msg.channel.send("🇹🇳")
  }
});

client.on('message', msg => {
  if (msg.content === 'سوريا') {      
    msg.react("🇸🇾")
    msg.channel.send("🇸🇾")
  }
});

client.on('message', msg => {
  if (msg.content === 'ليبيا') {      
    msg.react("🇱🇾")
    msg.channel.send("🇱🇾")
  }
});

client.on('message', msg => {
  if (msg.content === 'قطر') {      
    msg.react("🇶🇦")
    msg.channel.send("🇶🇦")
  }
});

client.on('message', msg => {
  if (msg.content === 'الصومال') {      
    msg.react("🇸🇴")
    msg.channel.send("🇸🇴")
  }
});

client.on('message', msg => {
  if (msg.content === 'عمان') {      
    msg.react("🇴🇲")
    msg.channel.send("🇴🇲")
  }
});

client.on('message', msg => {
  if (msg.content === 'موريتانيا') {      
    msg.react("🇲🇷")
    msg.channel.send("🇲🇷")
  }
});




  

client.on("guildMemberAdd", async member => {
  let moment2 = require('moment-duration-format'),
      moment = require("moment"),
      date = moment.duration(new Date() - member.user.createdAt).format("d");

  if(date < 7) {
    member.ban("Member account age is lower than 7 days.")
  }
});


client.on('message', message => {
var prefix = "."
    if (message.content.startsWith(prefix + 'clear')) {
      if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`ليس لديك برمشن[*MANAGE_MESSAGES*] `).catch(console.error);
  message.delete()
  if(!message.channel.guild) return;
  let args = message.content.split(" ").slice(1);
  
  const messagecount = parseInt(args.join(' '));
  
  message.channel.fetchMessages({
  
  limit: messagecount
  
  }).then(messages => message.channel.bulkDelete(messages));
  message.channel.sendMessage("", {embed: {
    title: "``✏️✅ تــم مسح الشات ``",
    color: 0x06DF00,
    footer: {
    
    }
    }}).then(msg => {msg.delete(2500)});
  };
  
  });




client.on('message',async msg => {
  var p = "!";
  if(msg.content.startsWith(p + "user")) {
  if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('❌ **go play minecraft**');
  if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ **البوت لا يمتلك صلاحية**');
  msg.guild.createChannel(`يتم تحضير الروم :[]` , 'voice').then(time => {
    time.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
  setInterval(() => {
      var currentTime = new Date(),
Year = currentTime.getFullYear(),
Month = currentTime.getMonth() + 1,
Dat = currentTime.getDate()
      time.setName(`Members : ◤ → ${msg.guild.members.size} ← ◢`);
 },1000);
  });
  } 
});

client.on("message", message => {
 
  function discoRole() {
    let random = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    roles.forEach((role) => {
      let theRole = message.guild.roles.find("name", role);
      theRole.edit({color: random}).catch(e => {
        return message.channel.send(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
      });
    });
  }
 
  if(message.content.startsWith(prefix + "disco")) {
    if(allowedUsers.includes(message.author.id)) {
    setInterval(() => { discoRole(); }, config.ms);
    message.channel.send("```css\nDiscoing...```");
    message.channel.send("Please make sure you read the README, you could get IP banned from discord because of ratelimits.");
  } else {
    message.reply(`You do not have permission to disco. If you have downloaded this bot off of github please go to the config.json and add your user ID to the "allowedUsers" value.`);
  }
} else
 
if(message.content.startsWith(prefix + "stop")) {
  if(allowedUsers.includes(message.author.id)) {
  message.channel.send("I've stopped discoing.");
  setTimeout(() => { console.log(process.exit(0)); }, 300);
} else {
  message.reply(`You do not have permission to disco. If you have downloaded this bot off of github please go to the config.json and add your user ID to the "allowedUsers" value.`);
  }
}
 
});
const config = require('./config.json');
const allowedUsers = config.allowedUsers;
const roles = config.roleToDisco;


const sWlc = {}
const premium = ['524661219039117312']
client.on('message', message => {
var prefix = ">";
if(message.channel.type === "dm") return;
if(message.author.bot) return;
  if(!sWlc[message.guild.id]) sWlc[message.guild.id] = {
    channel: "✽-welcome"
}
const channel = sWlc[message.guild.id].channel
  if (message.content.startsWith(prefix + "setwelcomer")) {
    if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
    let newChannel = message.content.split(' ').slice(1).join(" ")
    if(!newChannel) return message.reply(`**${prefix}setwelcomer <channel name>**`)
    sWlc[message.guild.id].channel = newChannel
    message.channel.send(`**${message.guild.name}'s channel has been changed to ${newChannel}**`);
  }
});
client.on("guildMemberAdd", member => {
      if(!sWlc[member.guild.id]) sWlc[member.guild.id] = {
    channel: "✽-welcome"
  }
  const channel = sWlc[member.guild.id].channel
    const sChannel = sWlc[member.guild.id].channel
    let welcomer = member.guild.channels.find('name', sChannel);
    let memberavatar = member.user.avatarURL
      if (!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let heroo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)
         .addField(': تاريخ دخولك السيرفر',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true)
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:heroo});
 
      var Canvas = require('canvas')
      var jimp = require('jimp')
 
      const w = ['./w1.png'];
 
      let Image = Canvas.Image,
         canvas = new Canvas(400, 200),
         ctx = canvas.getContext('2d');
     fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
         if (err) return console.log(err);
         let BG = Canvas.Image;
         let ground = new Image;
         ground.src = Background;
         ctx.drawImage(ground, 0, 0, 400, 200);
         
     
 
             let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(100) + ".png" : member.user.displayAvatarURL;
             jimp.read(url, (err, ava) => {
                 if (err) return console.log(err);
                 ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                     if (err) return console.log(err);
                   
                     ctx.font = "bold 12px Arial";
                     ctx.fontSize = '20px';
                     ctx.fillStyle = "#f1f1f1";
                     ctx.textAlign = "center";
                     ctx.fillText(`Welcome To ${member.guild.name}`, 300, 130);
                   
                     ctx.font = "bold 12px Arial";
                     ctx.fontSize = '20px';
                     ctx.fillStyle = "#f1f1f1";
                     ctx.textAlign = "center";
                     ctx.fillText(member.user.username, 200, 150);
 
             let Avatar = Canvas.Image;
                           let ava = new Avatar;
                           ava.src = buf;
                           ctx.beginPath();
                           ctx.arc(77, 101, 62, 0, Math.PI*2);
                           ctx.stroke();
                              ctx.clip();
                              ctx.drawImage(ava, 13, 38, 128, 126);  
                     
           
         
    welcomer.sendFile(canvas.toBuffer())
 
 
});
             }
             )}
             )}
            })


client.on('message', message => {
              if(!message.channel.guild) return;
    var prefix = "$";
    if(message.content.startsWith(prefix + 'bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "BC";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('```**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**```');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))

    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('Broadcast')
       .addField('Server', message.guild.name)
       .addField('Sender', message.author.username)
       .addField('Message', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });


client.on('message', message => {

		if(message.author.bot) return;

	if(message.channel.type === 'dm') return;

	

	var command = message.content.toLowerCase().split(" ")[0]; // حقوق الفا كوودز Alpha Codes.

	var args = message.content.toLowerCase().split(" ");

	var userM = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.id === args[1]));

	var prefix = '$'; // هنا تقدر تغير البرفكس <==================

	

	if(command == prefix + 'role') {

		if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(':no_entry: | You dont have **MANAGE_ROLES** Permission!');

		if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return message.channel.send(':no_entry: | I dont have **MANAGE_ROLES** Permission!');

		if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.channel.send(':no_entry: | I dont have **EMBED_LINKS** Permission!');

		let roleCommand = new Discord.RichEmbed()

		.setTitle(':white_check_mark: Role Command.')

		.setColor('GREEN')

		.setDescription(`**\n${prefix}role <SOMEONE> <ROLE>**\n➥ \`\`For give or delete from some one the role.\`\`\n\n**${prefix}role humans add <ROLE>**\n➥ \`\`For give the humans role.\`\`\n\n**${prefix}role humans remove <ROLE>**\n➥ \`\`For delete from the humans role.\`\`\n\n**${prefix}role bots add <ROLE>**\n➥ \`\`For give the bots role.\`\`\n\n**${prefix}role bots remove <ROLE>**\n➥ \`\`For delete from the bots role.\`\`\n\n**${prefix}role all add <ROLE>**\n➥ \`\`For give all role.\`\`\n\n**${prefix}role all remove <ROLE>**\n➥ \`\`For remove from all role.\`\``)

		.setTimestamp()

		.setFooter(message.author.tag, message.author.avatarURL)

		if(!args[1]) return message.channel.send(roleCommand);

		if(!userM && args[1] !== 'humans' && args[1] !== 'bots' && args[1] !== 'all') return message.channel.send(roleCommand);

		if(userM) {

			var argsRole = message.content.toLowerCase().split(' ').slice(2);

		}else if(args[1] === 'humans' || args[1] === 'bots' || args[1] === 'all') {

			var argsRole = message.content.toLowerCase().split(' ').slice(3); // حقوق الفا كوودز Alpha Codes.

		}

		var getRole = message.mentions.roles.first() || message.guild.roles.find(r => r.id === argsRole) || message.guild.roles.find(r => r.name.toLowerCase().includes(argsRole));

		if(userM) {

			if(!getRole) return message.channel.send(':no_entry: | I couldn\'t find the role!');

			if(getRole.name === '@everyone') return message.channel.send(':no_entry: | I couldn\'t find the role!');

			if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Or \`\`DELETE\`\` Any user have or not have **${getRole.name}** role beacuse this role highest from my role!`);

			

			if(!message.guild.member(userM.user).roles.has(getRole.id)) {

				message.guild.member(userM.user).addRole(getRole.id);

				message.channel.send(`:white_check_mark: | Successfully \`\`GIVE\`\` The role **${getRole.name}** To user **${userM.user.tag}**`);

			}else if(message.guild.member(userM.user).roles.has(getRole.id)) {

				message.guild.member(userM.user).removeRole(getRole.id);

				message.channel.send(`:white_check_mark: | Successfully \`\`DELETE\`\` The role **${getRole.name}** From user **${userM.user.tag}**`);

			}

		}else if(args[1] === 'humans') {

			let notArgs = new Discord.RichEmbed()

			.setTitle(':white_check_mark: Role Command.')

			.setColor('GREEN')

			.setDescription(`**\n${prefix}role humans add <ROLE>**\n➥ \`\`For give the humans the role.\`\`\n\n**${prefix}role humans remove <ROLE>**\n➥ \`\`For delete the role from all humans.\`\``)

			.setTimestamp()

			.setFooter(message.author.tag, message.author.avatarURL)

			

			if(!args[2]) return message.channel.send(notArgs);

			if(!args[3]) return message.channel.send(notArgs); // حقوق الفا كوودز Alpha Codes.

			if(!getRole) return message.channel.send(':no_entry: | I couldn\'t find the role!');

			if(getRole.name === '@everyone') return message.channel.send(':no_entry: | I couldn\'t find the role!');

			if(args[2] === 'add') {

				if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Any User the role with name **${getRole.name}** beacuse the role highest then my role!`);

				if(message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user not have **${getRole.name}** role!`);

				let humansSure = new Discord.RichEmbed()

				.setTitle(`:red_circle: Are you sure to give **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size}** Humans the role **${getRole.name}**`)

				.setColor('RED')

				.setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, give him the role.\n\n❎ = No no, cancel.')

				.setTimestamp()

				.setFooter(message.author.tag, message.author.avatarURL) // حقوق الفا كوودز Alpha Codes.

				message.channel.send(humansSure).then(msg => {

					msg.react('✅').then(() => msg.react('❎')) // حقوق الفا كوودز Alpha Codes.

					let giveHim = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;

					let dontGiveHim = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;

					let give = msg.createReactionCollector(giveHim, { time: 60000 });

					let dontGive = msg.createReactionCollector(dontGiveHim, { time: 60000 });

					give.on('collect', r => {

						msg.delete();

						message.channel.send(`:timer: | Now you must wait some time to give **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size}** Humans the role **${getRole.name}** ...`).then(message1 => {

							message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).forEach(m => {

								message.guild.member(m).addRole(getRole.id);

								setTimeout(() => {

									message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully give all **Humans** The role **${getRole.name}** .`);

								}, 10000)

							});

						});

					});

					dontGive.on('collect', r => { // حقوق الفا كوودز Alpha Codes.

						msg.delete();

						message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));

					});

				})

			}else if(args[2] === 'remove') {

				if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`REMOVE\`\` The role with name **${getRole.name}** From any User beacuse the role highest then my role!`);

				if(message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user have **${getRole.name}** role!`);

				let humansSure = new Discord.RichEmbed()

				.setTitle(`:red_circle: Are you sure to remove **${getRole.name}** from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size}** Humans?`)

				.setColor('RED')

				.setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, remove the role from him.\n\n❎ = No no, cancel.')

				.setTimestamp()

				.setFooter(message.author.tag, message.author.avatarURL)

				message.channel.send(humansSure).then(msg => {

					msg.react('✅').then(() => msg.react('❎')) // حقوق الفا كوودز Alpha Codes.

					let removeRole = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;

					let dontRemoveRole = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;

					let remove = msg.createReactionCollector(removeRole, { time: 60000 });

					let dontRemove = msg.createReactionCollector(dontRemoveRole, { time: 60000 });

					remove.on('collect', r => {

						msg.delete();

						message.channel.send(`:timer: | Now you must wait some time to delete from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size}** Humans the role **${getRole.name}**...`).then(message1 => {

							message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).forEach(m => {

								message.guild.member(m).removeRole(getRole.id);

								setTimeout(() => {

									message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully remove the role **${getRole.name}** From all **Humans** .`);

								}, 10000)

							});

						});

					}); // حقوق الفا كوودز Alpha Codes.

					dontRemove.on('collect', r => {

						msg.delete();

						message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));

					});

				})

			} // حقوق الفا كوودز Alpha Codes.

		}else if(args[1] === 'bots') {

		let notArgs = new Discord.RichEmbed()

			.setTitle(':white_check_mark: Role Command.')

			.setColor('GREEN')

			.setDescription(`**\n${prefix}role bots add <ROLE>**\n➥ \`\`For give the bots the role.\`\`\n\n**${prefix}role bots remove <ROLE>**\n➥ \`\`For delete the role from all bots.\`\``)

			.setTimestamp()

			.setFooter(message.author.tag, message.author.avatarURL) // حقوق الفا كوودز Alpha Codes.

			

			if(!args[2]) return message.channel.send(notArgs);

			if(!args[3]) return message.channel.send(notArgs);

			if(!getRole) return message.channel.send(':no_entry: | I couldn\'t find the role!');

			if(getRole.name === '@everyone') return message.channel.send(':no_entry: | I couldn\'t find the role!');

			if(args[2] === 'add') {

				if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Any Bot the role with name **${getRole.name}** beacuse the role highest then my role!`);

				if(message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any bot not have **${getRole.name}** role!`);

				let botsSure = new Discord.RichEmbed()

				.setTitle(`:red_circle: Are you sure to give **${message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).size}** Bots the role **${getRole.name}**`)

				.setColor('RED')

				.setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, give him the role.\n\n❎ = No no, cancel.')

				.setTimestamp()

				.setFooter(message.author.tag, message.author.avatarURL)

				message.channel.send(botsSure).then(msg => {

					msg.react('✅').then(() => msg.react('❎')) // حقوق الفا كوودز Alpha Codes.

					let giveHim = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;

					let dontGiveHim = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;

					let give = msg.createReactionCollector(giveHim, { time: 60000 });

					let dontGive = msg.createReactionCollector(dontGiveHim, { time: 60000 });

					give.on('collect', r => {

						msg.delete();

						message.channel.send(`:timer: | Now you must wait some time to give **${message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).size}** Bots the role **${getRole.name}**...`).then(message1 => {

							message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).forEach(b => {

								message.guild.member(b).addRole(getRole.id);

								setTimeout(() => {

									message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully give all **Bots** The role **${getRole.name}** .`);

								}, 10000)

							});

						});

					});

					dontGive.on('collect', r => {

						msg.delete();

						message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));

					});

				})

			}else if(args[2] === 'remove') { // حقوق الفا كوودز Alpha Codes.

				if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`REMOVE\`\` The role with name **${getRole.name}** From any Bot beacuse the role highest then my role!`);

				if(message.guild.members.filter(b => message.guild.member(b).roles.has(getRole.id) && b.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any bot have **${getRole.name}** role!`);

				let botsSure = new Discord.RichEmbed()

				.setTitle(`:red_circle: Are you sure to remove **${getRole.name}** from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && m.user.bot).size}** Bots?`)

				.setColor('RED')

				.setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, remove the role from him.\n\n❎ = No no, cancel.')

				.setTimestamp()

				.setFooter(message.author.tag, message.author.avatarURL)

				message.channel.send(botsSure).then(msg => {

					msg.react('✅').then(() => msg.react('❎'))

					let removeRole = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;

					let dontRemoveRole = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;

					let remove = msg.createReactionCollector(removeRole, { time: 60000 });

					let dontRemove = msg.createReactionCollector(dontRemoveRole, { time: 60000 });

					remove.on('collect', r => {

						msg.delete();

						message.channel.send(`:timer: | Now you must wait some time to delete from **${message.guild.members.filter(b => message.guild.member(b).roles.has(getRole.id) && b.user.bot).size}** Bots the role **${getRole.name}**...`).then(message1 => {

							message.guild.members.filter(b => message.guild.member(b).roles.has(getRole.id) && b.user.bot).forEach(b => {

								message.guild.member(b).removeRole(getRole.id);

								setTimeout(() => {

									message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully remove the role **${getRole.name}** From all **Bots** .`);

								}, 10000)

							});

						});

					});

					dontRemove.on('collect', r => { // حقوق الفا كوودز Alpha Codes.

						msg.delete();

						message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));

					});

				})

			}

		}else if(args[1] === 'all') { // حقوق الفا كوودز Alpha Codes.

			let notArgs = new Discord.RichEmbed()

			.setTitle(':white_check_mark: Role Command.')

			.setColor('GREEN')

			.setDescription(`**\n${prefix}role all add <ROLE>**\n➥ \`\`For give all the role.\`\`\n\n**${prefix}role all remove <ROLE>**\n➥ \`\`For delete the role from all.\`\``)

			.setTimestamp()

			.setFooter(message.author.tag, message.author.avatarURL)

			

			if(!args[2]) return message.channel.send(notArgs);

			if(!args[3]) return message.channel.send(notArgs);

			if(!getRole) return message.channel.send(':no_entry: | I couldn\'t find the role!');

			if(getRole.name === '@everyone') return message.channel.send(':no_entry: | I couldn\'t find the role!');

			if(args[2] === 'add') {

				if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Any User the role with name **${getRole.name}** beacuse the role highest then my role!`); // حقوق الفا كوودز Alpha Codes.

				if(message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user not have **${getRole.name}** role!`);

				let allSure = new Discord.RichEmbed()

				.setTitle(`:red_circle: Are you sure to give **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).size}** The role **${getRole.name}** ?`)

				.setColor('RED')

				.setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, give all the role.\n\n❎ = No no, cancel.')

				.setTimestamp()

				.setFooter(message.author.tag, message.author.avatarURL)

				message.channel.send(allSure).then(msg => {

					msg.react('✅').then(() => msg.react('❎'))

					let giveAll = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;

					let dontGiveAll = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;

					let give = msg.createReactionCollector(giveAll, { time: 60000 });

					let dontGive = msg.createReactionCollector(dontGiveAll, { time: 60000 });

					give.on('collect', r => {

						msg.delete();

						message.channel.send(`:timer: | Now you must wait some time to give **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).size}** The role **${getRole.name}** ...`).then(message1 => {

							message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).forEach(m => {

								message.guild.member(m).addRole(getRole.id);

								setTimeout(() => {

									message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully give **All** The role **${getRole.name}** .`);

								}, 10000) // حقوق الفا كوودز Alpha Codes.

							});

						});

					});

					dontGive.on('collect', r => {

						msg.delete();

						message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));

					});

				})

			}else if(args[2] === 'remove') {

				if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`REMOVE\`\` The role with name **${getRole.name}** From any User beacuse the role highest then my role!`);

				if(message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user have **${getRole.name}** role!`);

				let allSure = new Discord.RichEmbed() // حقوق الفا كوودز Alpha Codes.

				.setTitle(`:red_circle: Are you sure to remove **${getRole.name}** from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).size}** ?`)

				.setColor('RED')

				.setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, remove the role from him.\n\n❎ = No no, cancel.')

				.setTimestamp()

				.setFooter(message.author.tag, message.author.avatarURL)

				message.channel.send(allSure).then(msg => {

					msg.react('✅').then(() => msg.react('❎'))

					let removeRole = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;

					let dontRemoveRole = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id; // حقوق الفا كوودز Alpha Codes.

					let remove = msg.createReactionCollector(removeRole, { time: 60000 });

					let dontRemove = msg.createReactionCollector(dontRemoveRole, { time: 60000 });

					remove.on('collect', r => {

						msg.delete();

						message.channel.send(`:timer: | Now you must wait some time to delete from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).size}** The role **${getRole.name}** ...`).then(message1 => {

							message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).forEach(m => {

								message.guild.member(m).removeRole(getRole.id);

								setTimeout(() => {

									message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully remove the role **${getRole.name}** From **All** .`);

								}, 10000)

							});

						});

					});

					dontRemove.on('collect', r => { // حقوق الفا كوودز Alpha Codes.

						msg.delete();

						message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));

					}); // حقوق الفا كوودز Alpha Codes.

				})

			} // حقوق الفا كوودز Alpha Codes.

		}

	}

});




client.login(process.env.BOT_TOKEN);
