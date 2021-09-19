const express = require("express");
const app = express();

app.listen(() => console.log("Server started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});


const Discord = require('discord.js');
const cmd = require("node-cmd");
const ms = require("ms");
const fs = require('fs');
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const simpleytapi = require('simple-youtube-api')
const util = require("util")
const gif = require("gif-search");
const jimp = require("jimp");
const guild = require('guild');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const pretty = require("pretty-ms");
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');
const ffmpeg = require('ffmpeg');
const ffmpegstatic = require('ffmpeg-static');
const fetch = require("node-fetch");
const db = require("quick.db");
const client = new Discord.Client();





const prefix = "-"
const api = ""





client.on("message", message => {
  if (message.content.startsWith(prefix + "help")) {
  message.react('✅')
 const yassen = new Discord.MessageEmbed()
.setAuthor(client.user.username,client.user.displayAvatarURL({ dynamic: true, size: 2048}))
.setColor("RED")
.addField("Public Command", "`credits` | `daily` | `top` | `avatar` | `ping` | `support` | `server` | `boost` | `gstart`")
.addField("Moderation Command", "`mute` | `unmute` | `clear` | `show` | `hide` | `setnick` | `role` | `rerole` | `ban` | `kick` | `slow`")
.addField("Ticket Command", "`new` | `close` | `delticket` | `add` | `enable` | `ticket` | `set-support` | `set-description`")
.addField("Other Command", " | `ranime` | `meme` | `timer` | `invite` | `tag` | `poll`")

.setImage('')
 message.channel.send(yassen)
}
})






client.on('ready', () => {
  console.log(`${client.user.username} Hey there !`)
  client.user.setStatus('idle') 
  client.user.setActivity('-help') 
  })




client.on('message', naarCodes=> {
    if(naarCodes.content.startsWith(prefix + 'poll')) {
    if (!naarCodes.member.hasPermission('ADMINISTRATOR')) return naarCodes.channel.send('You Dont Have Permission')
      let args = naarCodes.content.split(' ').slice('1').join(" ")
        if (!args) return naarCodes.channel.send('Please type A Message To Poll On It');
        const naarembed = new Discord.MessageEmbed()
            .setDescription(`**New poll :** \n \`${args}\``)
            .setColor('BLACK')
            .setThumbnail(naarCodes.guild.iconURL())
            .setFooter(`Poll By : ${naarCodes.author.tag}`);
        naarCodes.delete();
        naarCodes.channel.send(naarembed).then(angelo => {
            angelo.react('✅');
            angelo.react('❌');
        });
    }
})



client.on('message', message => {
  if(message.content.startsWith(prefix + "love")) {
let user = message.mentions.users.first();
if(!user) return message.reply('**منشن شخص**')
      if (user.id == message.author.id) return message.reply("**طبعا انت بتحب نفسك **")

 message.channel.send({
          embed: new Discord.MessageEmbed()
          .setFooter(`Requsted by ${message.author.username}`)
          .setTitle(`${message.author.username}  يحب  ${user} \`${Math.floor(Math.random() * 100)}\`%` )
          .setThumbnail(message.author.displayAvatarURL({dynamic:true}))
      })
  }
})

client.on('message', message => {
  if(message.content.startsWith(prefix + "boost")){
    
 if(message.author.bot || !message.guild) return message.reply("this command for server only")
 
    
    let level = message.guild.premiumTier === 0 ? "No Level" : `${message.guild.premiumTier}`;
 
    let boost = message.guild.premiumSubscriptionCount;
    
    
    
    let embed = new Discord.MessageEmbed()
    .setTitle(`Boost of ${message.guild.name}`)

.addField("Boost", `${boost}`)
.addField("Level", `${level}`)
 .setColor("BLUE")
 
 message.channel.send(embed)
 
  }
});



const figlet = require ("figlet");

client.on('message', flig => {
if (flig.content.startsWith(prefix + 'tag')) {
    let args = flig.content.split(" ").slice(1);
if(!args[0]) return flig.reply('i dont see any word !?!');  

    figlet(args.join(" "), (err, shark) => {
              flig.channel.send(`\`\`\`${shark}\`\`\``)
           })
}
});



client.on('message', message => {
     if (message.author.bot) return;
     if (message.content === `${prefix}ticket`) {
             let embed = new Discord.MessageEmbed()
                .setColor('PURPLE')
                .setTitle('Ticket Commands')
                .addFields(
                {name: `${prefix}new`, value: 'فتح تذكرة جديدة' , inline: false},
                {name: `${prefix}close`, value: 'غلق التذكرة' , inline: false},
                {name: `${prefix}delticket`, value: 'حذف جميع التذاكر' , inline: false},
                {name: `${prefix}add`, value: 'اضافة شخص لتذكرة' , inline: false},
                {name: `${prefix}enable`, value: 'تفعيل نظام التذاكر' , inline: false},
                );
                message.channel.send(embed);
     };
})




client.on("message", async message =>{
let command = message.content.toLowerCase().split(" ")[0]
command = command.slice(prefix.length)
if(message.content.startsWith(prefix + "avatar")){
let args = message.content.split(" ")
let user = message.mentions.users.first() || message.author || message.guild.member.cache.get(args[1])
message.channel.send( new Discord.MessageEmbed()
.setAuthor(user.username,user.avatarURL())
.setDescription(`**[Avatar Link](${user.avatarURL()})**`)
.setImage(user.avatarURL(
{dynamic : true,
format : 'png',
size : 1024}
))
);
}
});


const Timers = new Map();

client.on("message", message => {
if(message.content.startsWith(prefix + "timer")){

  let args = message.content.split(" ")


if (!args[1]) {
      return message.channel.send(
        `**You did not specify the amount of time you wish to set a timer for!**`
      );
    }
    if (!args[1].endsWith("s")) {
    if (!args[1].endsWith("d")) {
      if (!args[1].endsWith("h")) {
        if (!args[1].endsWith("m")) {
          return message.channel.send(
            `**You did not use the proper format for the the time!**`
          );
        }
      }
    }
    }
    if (isNaN(args[1][0])) {
      return message.channel.send(`**That is not a number!**`);
    }
    Timers.set(message.author.id + " G " + message.guild.name, {
      Guild: message.guild.name,
      Author: {
        Tag: message.author.tag,
        ID: message.author.id,
      },
      Time: ms(args[1]),
    });
    message.channel.send(
      `**${message.author.tag} you have set a timer for ${args[1]} (${ms(
        args[1]
      )}MS)**`
    ).then(m =>{
  setTimeout(() => {
      m.edit(`**${message.author} Your Timer Has Finished**`)
    }, ms(args[1]));

    })
    setTimeout(() => {
      let Embed = new Discord.MessageEmbed()
        .setTitle(`Timer finished in guild ${message.guild.name}..`)
        .setDescription(
          `**Your timer for ${args[1]} (${ms(args[1])}MS) has finished!**`
        )
        .setColor(`GREEN`);
      message.author.send(Embed);
      Timers.delete(message.author.id + " G " + message.guild.name);
    }, ms(args[1]));
}
})



var top = require("./top.json");
function save() {
    fs.writeFileSync("./top.json", JSON.stringify(top, null, 4));
}
client.on("voiceStateUpdate", async function(oldMember, newMember) {
    if (newMember.user.bot) return;
    if (!top[newMember.guild.id]) top[newMember.guild.id] = {};
    if (!top[newMember.guild.id][newMember.user.id]) top[newMember.guild.id][newMember.user.id] = {
        "text": 0,
        "voice": parseInt(Math.random()*10),
        "msgs": 0,
        "id": newMember.user.id
    }
    save();
    if (!oldMember.voice.channel && newMember.voice.channel) {
        var addXP = setInterval(async function () {
            top[newMember.guild.id][newMember.user.id].voice+=parseInt(Math.random()*4);
            save();
            if (!newMember.voice.channel) {
                clearInterval(addXP);
            }
        }, 60000);
    }
});
client.on("message", async function (message) {
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!top[message.guild.id]) top[message.guild.id] = {};
    if (!top[message.guild.id][message.author.id]) top[message.guild.id][message.author.id] = {
        "text": parseInt(Math.random()*10),
        "voice": 1,
        "msgs": 0,
        "id": message.author.id
    }
    if (top[message.guild.id][message.author.id].msgs > 10) {
        top[message.guild.id][message.author.id].text += parseInt(Math.random()*4);
        top[message.guild.id][message.author.id].msgs = 0;
    }
    save();
    var args = message.content.split(" ");
    var cmd = args[0].toLowerCase();
    if (!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "top text")) {
            var topArray = Object.values(top[message.guild.id]);
            var num = 0;
            var textStr = `${topArray.sort((a, b) => b.text - a.text).slice(0, 5).filter(user => user.text > 0 && message.guild.members.cache.get(user.id)).map(function (user) {
                if (user.text > 0) {
                    return `**#${++num} | <@${user.id}> XP: \`${user.text}\` **`
                }
            }).join("\n")}`;
            var embed = new Discord.MessageEmbed()
            .setAuthor("Guild Score Leaderboards", message.guild.iconURL())
  .setColor("13B813")
        .addField(`**:speech_balloon: | TEXT LEADERBOARD**`, `${textStr}   \n\n\n **? | For More: \`${prefix}top text\`**`, true)  
        .setFooter(message.author.tag, message.author.displayAvatarURL())
            .setTimestamp()
            message.channel.send({
                embed: embed
            });
     //   if (!message.content.startsWith(prefix)) return;
  } else {
    if(message.content.startsWith(prefix + "top voice")) {
            var topArray = Object.values(top[message.guild.id]);
            var num = 0;
            var voiceStr = `${topArray.sort((a, b) => b.voice - a.voice).slice(0, 5).filter(user => user.voice > 0 && message.guild.members.cache.get(user.id)).map(function (user) {
                if (user.voice > 0) {
                    return `**#${++num} | <@${user.id}> XP: \`${user.voice}\` **`
                }
            }).join("\n")}`;
            var embed = new Discord.MessageEmbed()
            .setAuthor("Guild Score Leaderboards", message.guild.iconURL())
  .setColor("13B813")
        .addField(`**:microphone2: | VOICE LEADERBOARD**`, `${voiceStr}   \n\n\n **:sparkles: More?** \`${prefix}top voice\``, true)
  
        .setFooter(message.author.tag, message.author.displayAvatarURL())
            .setTimestamp()  
            message.channel.send({
                embed: embed
            });
      
    } else {
      if (message.content.startsWith(prefix + "reset voice")){
      var reset = ':white_check_mark:  ?? ????? ?????? ?????'
      var confirm = ' ??? ????? ??? ???? ????? ???? ???? ??????'
        
        message.channel.send(`**${confirm}**`).then(async msg => {
         await  msg.react("?")
        await   msg.react("?")
          const doma = msg.createReactionCollector((reaction, user) => reaction.emoji.name === "?" && user.id === message.author.id, {time: 60000})
          const ziad = msg.createReactionCollector((reaction, user) => reaction.emoji.name === "?" && user.id === message.author.id, {time: 60000})
doma.on("collect", async r => {
 
  
  
  msg.delete()
    
    msg.channel.send(`${reset}`)
  
})
  
  ziad.on("collect", async r => {
    
    msg.delete()
  })
      
        })
 
     //  break;
       // if (!message.content.startsWith(prefix)) return;
  } else {
       if(message.content.startsWith(prefix + "top")) {
            var topArray = Object.values(top[message.guild.id]);
            var num = 0;
            var textStr = `${topArray.sort((a, b) => b.text - a.text).slice(0, 10).filter(user => user.text > 0 && message.guild.members.cache.get(user.id)).map(function (user) {
                if (user.text > 0) {
                    return `**#${++num} | <@${user.id}> XP: \`${user.text}\` **`
                }
            }).join("\n")}`;
            num = 0;
            var voiceStr = `${topArray.sort((a, b) => b.voice - a.voice).slice(0, 10).filter(user => user.voice > 0 && message.guild.members.cache.get(user.id)).map(function (user) {
                if (user.voice > 0) {
                    return `**#${++num} | <@${user.id}> XP: \`${user.voice}\` **`
                }
            }).join("\n")}`;
            var embed = new Discord.MessageEmbed()  
            .setAuthor("Guild Score Leaderboards", message.guild.iconURL())
            .addField("**TOP 5 TEXT :speech_balloon:**", `${textStr}  \n\n  **:sparkles: More?** \`${prefix}top text\``, true)
            .addField("**TOP 5 VOICE :microphone2:**", `${voiceStr} \n\n **:sparkles: More?** \`${prefix}top voice\``, true)
            .setFooter(message.author.tag, message.author.displayAvatarURL())
            .setTimestamp()
            .setColor("13B813");
            message.channel.send({
                embed: embed
            
  
            });
 
      
       
        }
  }
  }
  }
});



client.on("message", russi => {
  if (russi.content === prefix + "server") {


    let embed = new Discord.MessageEmbed()
    .setTitle(`${russi.guild.name}`)
    .setThumbnail(client.user.avatarURL())
    .setColor('#3a6bff')
    .setFooter(`Requested | ${russi.author.tag}`, russi.author.avatarURL())
    .addField('> :star: ID Server :', `${russi.guild.id}`)
    .addField('> :crown: Owner Server :', `${russi.guild.owner}`)
    .addField('> :calendar: Created : ', `${russi.guild.createdAt.toLocaleString()}`)
    .addField('> :busts_in_silhouette: Members : ', `${russi.guild.memberCount}`)
    .addField('> :speech_balloon: Channels : ', `${russi.guild.channels.cache.size}`)
    .addField('> :earth_americas: Region : ', `${russi.guild.region}`)
    .setTimestamp()
    russi.channel.send(embed);
  }
});


const credits = JSON.parse(fs.readFileSync('./credits.json'));
var time = require('./time.json');
client.on('message', async message => {
	if (message.author.bot || message.channel.type === 'dm') return;
	let args = message.content.split(' ');
	let author = message.author.id;
	if (!credits[author])
		credits[author] = {
			credits: 0
		};
	fs.writeFileSync('./credits.json', JSON.stringify(credits, null, 4));
	if (args[0].toLowerCase() == `${prefix}credits`) {
		const mention = message.mentions.users.first() || message.author;
		const mentionn = message.mentions.users.first();
		if (!args[2]) {
			message.channel.send(
				`**${mention.username}, your account balance is :credit_card: \`$${
					credits[mention.id].credits
				}\`**`
			);
		} else if (mentionn && args[2]) {
			if (isNaN(args[2]) || [',', '.'].includes(args[2]))
				return message.channel.send(`**:x: | خطا **`);
 
			if (args[2] < 1) return message.channel.send(`**:x: | خطا**`);
			if (mention.bot) return message.channel.send(`**:x: | خطا**`);
			if (mentionn.id === message.author.id)
				return message.channel.send(`**:x: | خطا**`);
			if (args[2] > credits[author].credits)
				return message.channel.send(
					`**:x: | Error ,<a:no:748385723262173216> انت لا تمتلك رصيد**`
				);
			if (args[2].includes('-')) return message.channel.send(`**:x: | خطا**`);
			let resulting =
				parseInt(args[2]) == 1
					? parseInt(args[2])
					: Math.floor(args[2] - args[2] * (5 / 100));
			let tax =
				parseInt(args[2]) == 1
					? parseInt(args[2])
					: Math.floor(args[2] * (5 / 100));
			let first = Math.floor(Math.random() * 9);
			let second = Math.floor(Math.random() * 9);
			let third = Math.floor(Math.random() * 9);
			let fourth = Math.floor(Math.random() * 9);
			let num = `${first}${second}${third}${fourth}`;
			let Canvas = require('canvas');
			let canvas = Canvas.createCanvas(108, 40);
			let ctx = canvas.getContext('2d');
			const background = await Canvas.loadImage(
				'https://cdn.discordapp.com/attachments/608278049091223552/617791172810899456/hmmm.png'
			);
			ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
			ctx.font = '20px Arial Bold';
			ctx.fontSize = '20px';
			ctx.fillStyle = '#ffffff';
			message.channel
				.send(
					`**${
						message.author.username
					}, Transfer Fees: \`${tax}\`, Amount: \`$${resulting.toLocaleString()}\`**
type these numbers to confirm: `
				)
				.then(async essss => {
					message.channel.send(`\`${num}\``).then(m => {
						message.channel
							.awaitMessages(r => r.author.id === message.author.id, {
								max: 1,
								time: 20000,
								errors: ['time']
							})
							.then(collected => {
								if (collected.first().content === num) {
									essss.delete();
									message.channel.send(
										`**:moneybag: | ${
											message.author.username
										}, Done Trans \`$${resulting.toLocaleString()}\` To ${mentionn}**`
									);
									mention.send(
										`**:money_with_wings: | Transfer Receipt **\`\`\`You Have Received \`$${resulting.toLocaleString()}\` From User ${
											message.author.username
										}; (ID (${message.author.id})\`\`\``
									);
									m.delete();
									credits[author].credits += Math.floor(
										-resulting.toLocaleString()
									);
									credits[mentionn.id].credits += Math.floor(
										+resulting.toLocaleString()
									);
									fs.writeFileSync(
										'./credits.json',
										JSON.stringify(credits, null, 4)
									);
								} else {
									m.delete();
									essss.delete();
								}
							});
					});
				});
		} else {
			message.channel.send(
				`**:x: | Error , Please Command True Ex: \`${prefix}credits [MentionUser] [Balance]\`**`
			);
		}
	}
	if (args[0].toLowerCase() === `${prefix}daily`) {
		let cooldown = 8.64e7;
		let Daily = time[message.author.id];
		if (Daily !== null && cooldown - (Date.now() - Daily) > 0) {
			let times = cooldown - (Date.now() - Daily);
			message.channel.send(
				`**:stopwatch: |  ${
					message.author.username
				}, your daily :dollar: credits refreshes in ${pretty(times, {
					verbose: true
				})}.**`
			);
			fs.writeFile('./time.json', JSON.stringify(time), function(e) {
				if (e) throw e;
			});
		} else {
			let ammount = (300,
			500,
			100,
			200,
			120,
			150,
			350,
			320,
			220,
			250,
			700,
			737);
			credits[author].credits += ammount;
			time[message.author.id] = Date.now();
			message.channel.send(
				`**${message.author.username}
				مكافأتك  اليومية: ${ammount}**`
			);
			fs.writeFile('./credits.json', JSON.stringify(credits), function(e) {
				if (e) throw e;
			});
		}
	}
});


client.on('message', async message => {
  let cmd = message.content.split(" ")[0];
  if (cmd == prefix + "gstart") {
    let winners = message.content.split(" ")[1];
    let time = message.content.split(" ")[2];
    let prize = message.content.split(" ").slice(3).join(" ");
    if (!winners || !time || !prize) return message.channel.send(`**Pls Use This Command Like this**\n \`${prefix}gstart 1 10m Nitro C\``);
    ///////time
    let ggg = ['d', "m", "h", "s"];
    if (ggg.some(c => time.endsWith(c))) {
      let timee = ms(time);
      console.log(timee);
      if (timee <= 10000) return message.channel.send(`**You Can't Make Giveaway Time Less Than 10sec**`);
      /////winners
      if (timee > 2592000000) return message.channel.send(`**You Can't Make Giveaway Time More Than 30Day**`)
      if (isNaN(winners)) return message.channel.send(`**Pls Type Number Of Winners Like:**\n${prefix}gstart \`1\` 10m Nitro C`);
      let wooners = Math.floor(winners);
      if (wooners >= 20 || wooners <= 0) return message.channel.send(`**Winners Most Be More Than 0 And Not More Than 20**`);
      ///// prize
      let tm = ms((timee - (Date.now() - (Date.now() + timee)) % 2), { long: true })
      let embed = new Discord.MessageEmbed()
        .setTitle(`${prize}`)
        .setDescription(` Ends At : ${tm}`)
        .setFooter(`${wooners} Winners | Hosted By : ${message.author.username}`)
        .setColor('RANDOM')
 
 
      message.channel.send(embed).then(c => {
        c.react('🎉');
        asta(c, wooners, timee, prize, message.author.id);
      })
    } else {
      message.channel.send("**Please The Time Most Be Ends With 10m or 10s or 11h or 2d**");
    }
  } 
})
function asta(message, winners, time, prize, hoster) {
  setTimeout(() => {
    let tm = ms(((time - (Date.now() - (Date.now() + time)) % 2) / 2), { long: true })
    let embed = new Discord.MessageEmbed()
      .setTitle(`${prize}`)
      .setDescription(`Ends At : ${tm}`)
      .setFooter(`${winners} Winners | Hosted By : ${hoster}`)
      .setColor('GREEN')
 
    message.edit(embed);
 
  }, time / 4);
  setTimeout(() => {
    let tm = ms(((time - (Date.now() - (Date.now() + time)) % 2) / 4), { long: true })
    let embed = new Discord.MessageEmbed()
      .setTitle(`${prize}`)
      .setDescription(`\n Ends At : ${tm}`)
      .setFooter(`${winners} Winners | Hosted By : ${hoster}`)
      .setColor('GREEN')
 
    message.edit(embed);
 
  }, time / 2);
  setTimeout(() => {
    message.reactions.cache.get('🎉').users.remove(client.user.id)
    setTimeout(async () => {
      let winner = "";
      let s = [];
      let m = await message.reactions.cache.get('🎉').users.cache;
 
      m.forEach((value, key) => {
        s.push(key);
      })
 
 
 
      console.log(m);
 
      for (i = 0; i <= winners - 1; i++) {
        console.log(s);
 
        let r = s[Math.floor(Math.random() * s.length)];
        console.log(r);
        winner += "<@" + r + "> \n";
 
      }
      if (message.reactions.cache.get('🎉').users.cache.size < 1) {
        let embed = new Discord.MessageEmbed()
          .setTitle('End Giveaway')
          .setDescription(`No One Entered`)
          .setColor('RED')
        message.edit(embed);
      } else {
        let embed = new Discord.MessageEmbed()
          .setTitle('End Giveaway')
          .setDescription(`**Hosted By : <@${hoster}>**\n **Winner/s :**${winner}`)
          .setColor('GREEN')
        message.edit(embed);
        message.channel.send(`**Congratulations  ${winner}! You won the  ${prize}!**`);
      }
 
 
 
 
 
    }, 1000)
  }, time)
} 
 



let t1 = JSON.parse(fs.readFileSync("./t1.json", 'utf8'));
client.on('message', badboy => {
  if(badboy.content.startsWith(prefix + "set-description")){
    var args = badboy.content.split(" ").slice(1).join(" ")
    if(!args) return
    t1[badboy.guild.id] = {
      aaa: args,
    }
     fs.writeFile("./t1.json", JSON.stringify(t1), (err) => {
if(err)
console.error(err);

})

badboy.channel.send("done")
  }
})



let ticket = JSON.parse(fs.readFileSync("./ticket.json", 'utf8'));



client.on('message', badboy => {
  if(badboy.content.startsWith(prefix + "set-support")){
    if(!badboy.member.hasPermission("ADMINISTRATOR")) return
  if (!badboy.guild || badboy.author.bot) return;

    let roles = badboy.mentions.roles.first();
if(!roles) return
ticket[badboy.guild.id] = {
  rr: roles.name,
}
    fs.writeFile("./ticket.json", JSON.stringify(ticket), (err) => {
if(err)
console.error(err);

})
badboy.channel.send("done")

  }
})




///ticket

const category = "category-id";
let mtickets = true;
let tchannels = [];
let current = 0;
 
 
client.on("message", async message => {
  if (message.author.bot || message.channel.type === "dm") return;
  let args = message.content.split(" ");
  let author = message.author.id;
  if (args[0].toLowerCase() === `${prefix}heeeeelsasaollooop`) {
    let embed = new Discord.MessageEmbed()
      .addField(``);
    await message.channel.send(
      `:white_check_mark: , **هذه قائمة بجميع اوامر البووت.**`
    );
    await message.channel.send(embed);
  } else if (args[0].toLowerCase() === `${prefix}new`) {
    if (mtickets === false)
      return message.channel.send(
        `**تـم ايـقـاف الـتـذاكـر بـواسـطة أحـد مـن الادارة**`
      );
    if (!message.guild.me.hasPermission("MANAGE_CHANNELS"))
      return message.channel.send(
        `**الـبـوت غـيـر قـادر عـلـي صـنـع روم تـحقق مـن الـرتـبـة**`
      );
    console.log(current);
    let openReason = "";
    current++;
    message.guild.channels.create(`ticket-${current}`, "text").then(c => {
      tchannels.push(c.id);
      c.setParent(category);
      message.channel.send(`**تـم فـتـح تـذكرتـك**`);
      c.createOverwrite(message.guild.id, {
        VIEW_CHANNEL: false,
        SEND_MESSAGES: false
      });
      c.createOverwrite(message.author.id, {
        VIEW_CHANNEL: true,
        SEND_MESSAGES: true
      });
 
      if (args[1])
        openReason = `\nReason: [ **__${args.slice(1).join(" ")}__** ]`;
      let embed = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL())
        .setColor("#36393e")
        .setDescription(`**Wait Admin To Answer You**${openReason}`);
      c.send(`${message.author}`);
      c.send(embed);
    });
  } else if (args[0].toLowerCase() === `${prefix}enable`) {
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        `**هـذا الأمـر للأدارة فـقـط**`
      );
    if (args[1] && args[1].toLowerCase() === "enable") {
      mtickets = true;
      message.channel.send(
        `**تـم تـفـعـيـل نـظـام الـتذاكـر**`
      );
    } else if (args[1] && args[1].toLowerCase() === "disable") {
      mtickets = false;
      message.channel.send(
        `**تـم اغـلاق نـظـام الـتذاكـر**`
      );
    } else if (!args[1]) {
      if (mtickets === true) {
        mtickets = false;
        message.channel.send(
          `**تـم اغـلاق نـظـام الـتذاكـر**`
        );
      } else if (mtickets === false) {
        mtickets = true;
        message.channel.send(
          `**تـم تـفـعـيـل نـظـام الـتذاكـر**`
        );
      }
    }
  } else if (args[0].toLowerCase() === `${prefix}close`) {
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
      `**انـت لـسـت مـن ادارة الـسـيـرفـر لـتـنـفـيذ هذا الأمـر`
      );
    if (
      !message.channel.name.startsWith("ticket-") &&
      !tchannels.includes(message.channel.id)
    )
      return message.channel.send(`**هـذا لـيـس روم تـيـكـيـت**`);
 
    message.channel.send(
      `**جـاري قـفـل الـروم تـلـقـائـيـا بـعـد 5 ثـوانـي**`
    );
    tchannels.splice(tchannels.indexOf(message.channel.id), 1);
    setTimeout(() => message.channel.delete(), 5000); //لحد هنا
  } else if (message.content == prefix + `delticket`) {
    if (!message.channel.name.startsWith("ticket-")) {
      return message.channel.send(`**This command only for the tickets**`);
    }
    let member = message.mentions.members.first();
    if (!member || member.id === client.user.id) {
      return message.channel.send(`**Please mention the user**`);
    }
    if (
      !message.channel
        .permissionsFor(member)
        .has(["SEND_MESSAGES", "VIEW_CHANNEL", "READ_MESSAGE_HISTORY"])
    ) {
      return message.channel.send(
        `**${member.user.tag}** is not in this ticket to remove them`
      );
    }
    message.channel.createOverwrite(member.id, {
      SEND_MESSAGES: false,
      VIEW_CHANNEL: false,
      READ_MESSAGE_HISTORY: false
    });
    message.channel.send(
      `**Done \nSuccessfully removed \`${member.user.tag}\` from the ticket**`
    );
  } else if (message.content == prefix + `add`) {
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return message.channel.send(
        `**Error** \nI Don\'t have MANAGE_CHANNELS Permission to do this`
      );
    if (!message.channel.name.startsWith("ticket-"))
      return message.channel.send(`**This command only for the tickets**`);
    let member = message.mentions.members.first();
    if (!member) return message.channel.send(`**Please mention the user**`);
    if (
      message.channel
        .permissionsFor(member)
        .has(["SEND_MESSAGES", "VIEW_CHANNEL", "READ_MESSAGE_HISTORY"])
    )
      return message.channel.send(
        `this member already in this ticket :rolling_eyes:`
      );
    message.channel.createOverwrite(member.id, {
      SEND_MESSAGES: true,
      VIEW_CHANNEL: true,
      READ_MESSAGE_HISTORY: true
    });
    message.channel.send(
      `**Done \nSuccessfully added <@${member.user.id}> to the ticket**`
    );
  } else if (args[0].toLowerCase() === `${prefix}reeeeeeeee8estart`) {
    if (!devs.includes(message.author.id))
      return message.channel.send(
        `:tools:, **أنت لست من ادارة السيرفر لأستخدام هذا الأمر.**`
      );
    message.channel.send(`:white_check_mark:, **جارى اعادة تشغيل البوت.**`);
    client.destroy();
 
        
      
    
  }
});


const randomGen = require("andoi-image-api");
client.on("message", async (message) => {
  if (message.content.startsWith(prefix + "meme")) {
    message.channel.send(await randomGen.meme());
  }
});

const randomanime = require("random-anime");
client.on("message", async message => {

  if (message.content === prefix +"ranime") {
    const anime = randomanime.anime();
    const embed = new Discord.MessageEmbed()
    .setTitle("Anime image")
    .setColor('RANDOM')
    .setImage(anime)
    .setFooter(`Requested By ${message.author.username}`,message.author.displayAvatarURL({ dynamic: true, format: 'png' })
    );
    message.channel.send(embed);
  }
});


client.on('message', message => {
  if(message.content.startsWith(prefix + 'slow')) {
    var slowtime = message.content.split(" ").slice(1).join(" ");
    if(!slowtime) return message.reply(`**Write A Number Please 🙄**`)

message.channel.setRateLimitPerUser(`${slowtime}`)

var embed = new Discord.MessageEmbed()
.setTitle(`${message.guild.name}`)
.setThumbnail(`${message.guild.iconURL({dynamic: true, size: 1024})}`)
.setDescription(`**Done Setting Slowmode To ${slowtime}s ✅**`)
message.channel.send(embed)

  }
});



client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith( prefix + 'kick')) {
    if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
      return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
    if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS"))
      return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
          
        
            const embed = new Discord.MessageEmbed()
           .setColor("0F750E")
          .setTitle(`Successfully kicked ${user.tag}`)
          message.channel.send(embed);
 
          })
          .catch(err => {
 
            message.reply('I was unable to kick the member');
            
            console.error(err);
          });
      } else {
       
        message.reply("That user isn't in this guild!");
      }
      
    } else {
 
const embed = new Discord.MessageEmbed()
.setColor("FF0000")
.setTitle("``You didn't mention the user to kick!`` ❌")
message.channel.send(embed);
    }
  }
});


client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith( prefix + 'ban')) {
        if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
      return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
    if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS"))
      return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");      
 
    const user = message.mentions.users.first();
  
    if (user) {
      
      const member = message.guild.member(user);
      
      if (member) {
 
        member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
            
                        const embed = new Discord.MessageEmbed()
           .setColor("0F750E")
          .setTitle(`Successfully banned ${user.tag}`)
          message.channel.send(embed);
          })
          .catch(err => {
 
            message.reply('I was unable to ban the member');
           
            console.error(err);
          });
      } else {
       
        message.reply("That user isn't in this guild!");
      }
    } else {
      
      const embed = new Discord.MessageEmbed()
.setColor("FF0000")
.setTitle("``You didn't mention the user to ban!`` ❌")
message.channel.send(embed);
    }
  }
});


client.on('message',message=>{
  if(message.content.startsWith(prefix+"rerole")){
    if(!message.channel.guild) return;
    if(message.author.bot) return;
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('You dont have permissions.')
    let user = message.mentions.members.first();
    let role = message.mentions.roles.first();
    if(!role){
    let Layer = message.content.split(" ").slice(2).join(" ");
    if(!Layer) return message.reply('Please enter role name.')
    console.log(Layer)
    let roles = message.guild.roles.cache.find(r => r.name === Layer)
    if(!roles) return message.reply('i cant find this role.')

    message.guild.members.cache.get(user.id).roles.remove(roles)
    return message.channel.send(`:white_check_mark: (**${roles.name}**), has remove from **${user.user.username}**`)
    }

    message.guild.members.cache.get(user.id).roles.remove(role)

    return message.channel.send(`:white_check_mark: (**${role.name}**), has remove from **${user.user.username}**`)
  }
})

client.on('message', async message => {
if(message.content.startsWith(prefix + 'role')) {
if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(`>>> \`\`\`You Don't have the permission : \`\`\` \n\n **\`MANAGE_ROLES\`**`);
var user = message.mentions.members.first();
if(!user) return message.channel.send(`**Usage: ${prefix}role \`<@user> <role>\`**`);
var role = message.mentions.roles.first() || message.guild.roles.cache.find(r => r.name.startsWith (message.content.split(" ").slice(2).join(" ")))
if(!role) return message.channel.send(`**Can't found this role**`);
if(user.roles.cache.get(role.id)){
user.roles.remove(role).then(() =>{
return message.channel.send(`✅ - **Successfully Removed Role From ${user.user.username}, \`-${role.name}\`**`);    
})
} else {
user.roles.add(role).then(() =>{
return message.channel.send(`✅ - **Successfully Added Role To ${user.user.username}, \`+${role.name}\`**`);    
})
}
}
});


client.on("message", message => {
if(message.content.startsWith(prefix + "setnick")){
if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("MANAGE_NICKNAMES") || !message.guild.member(client.user).hasPermission("MANAGE_NICKNAMES")) return;
var user = message.mentions.members.first();
var args = message.content.split(" ").slice(2);
var nick = args.join(" ");
if(!user || !args) return message.channel.send(`
\`\`\`js
Command: setnick
تغيير لقب العضو.
 
الاستخدام:
+setnick (العضو)
+setnick (العضو) (اللقب الجديد)
 
\`\`\`
 
`);
message.guild.member(user.user).setNickname(`${nick}`);
message.channel.send(`Successfully changed **${user}** nickname to **${nick}**`);
}
});


client.on('message', message =>{
if(message.content === prefix +"show"){
if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(' ** You dont have `MANAGE_CHANNELS` permission **');
let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
        message.channel.createOverwrite(everyone, {
              VIEW_CHANNEL : true
            }).then(() => {
                                const embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
               .setThumbnail(message.guild.iconURL())
                .setDescription(`> **Done show This Room ${message.channel}**`)
                .setFooter(`By ${message.author.username}`)
                message.channel.send(embed)
                })
}
});


client.on('message', message =>{
if(message.content === prefix +"hide"){
if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(' ** You dont have `MANAGE_CHANNELS` permission **');
let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
        message.channel.createOverwrite(everyone, {
              VIEW_CHANNEL : false
            }).then(() => {
                                const embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
               .setThumbnail(message.guild.iconURL())
                .setDescription(`> **Done Hide This Room ${message.channel}**`)
                .setFooter(`By ${message.author.username}`)
                message.channel.send(embed)
                })
}
});


client.on("message",async message =>{
    let command = message.content.toLowerCase().split(" ")[0];
        command = command.slice(prefix.length);
    if(message.content.startsWith(prefix + "clear")){ 
    message.delete({timeout: 0})
        if(!message.channel.guild) return message.reply(`** This Command For Servers Only**`); 
         if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`> ** You don't have perms :x:**`);
         if(!message.guild.member(client.user).hasPermission('MANAGE_GUILD')) return message.channel.send(`> ** I don't have perms :x:**`);
     
        let args = message.content.split(" ").slice(1)
        let messagecount = parseInt(args);
        if (args > 100) return message.channel.send(`\`\`\`javascript
    i cant delete more than 100 messages 
    \`\`\``).then(messages => messages.delete(5000))
    if(!messagecount) messagecount = '50';
        message.channel.messages.fetch({limit: 100 }).then(messages => message.channel.bulkDelete(messagecount)).then(msgs => {
        message.channel.send(`\`\`\`js
    ${msgs.size} messages cleared
    \`\`\``).then(messages => 
    messages.delete({timeout:5000}));
        })
      }    
    });


client.on('message', async message => {
if(message.content.startsWith(prefix + 'unmute')) {
if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(``);
let mention = message.mentions.members.first();
var args = message.content.split(" ").slice(2).join(" ")
let member = message.mentions.members.first()
let role = message.guild.roles.cache.find(ro => ro.name == 'Muted');
if(!mention) return message.channel.send(`**Usage: ${prefix}unmute \`<@user>\` **`);
if (member.user.id === client.user.id) return message.channel.send(`**لم اجد الشخص**`);
mention.roles.remove(role)
message.channel.send(`**✅ - تم بنجاح ${mention.user.tag} **`)
let mens = new Discord.MessageEmbed()
.setThumbnail(message.guild.iconURL())
.setTitle(`You Have Been UnMuted`)
.setDescription(`**
 In Server : ${message.guild.name}
 With Reson : ${args || "No reason provided."}
 By : ${message.author}
**`)
.setColor("GREY")
.setFooter('Id ' + message.author.id, message.author.avatarURL())
member.send(mens);
}
})


client.on('message', async message => {
if(message.content.startsWith(prefix + 'mute')) {
if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(``);
  var args = message.content.split(" ").slice(2).join(" ")
    
let mention = message.mentions.members.first();
  
let member = message.mentions.members.first()
  
let role = message.guild.roles.cache.find(ro => ro.name == 'Muted');
if(!role) {
    message.guild.roles.create({
        data: {
            name: 'Muted',
            permissions: [],
            color: 'GREY'
        }
    })
}
  
if(!mention) return message.channel.send(`**Usage: ${prefix}mute \`<@user>\` <Reason> **`);
  if (member.user.id === message.author.id) return message.channel.send(`**لا استطيع اعطائه ميوت **`);
if (member.user.id === client.user.id) return message.channel.send(`**لم اجد الشخص**`);
message.guild.channels.cache.forEach(c => {
c.updateOverwrite(role , {
SEND_MESSAGES: false, 
ADD_REACTIONS: false
});
});
  
mention.roles.add(role)
 
message.channel.send(`**✅ - تم بنجاح ${mention.user.tag} , ${args || "No reason provided."}**`)
let mens = new Discord.MessageEmbed()
.setThumbnail(message.guild.iconURL())//.setThumbnail(message.guild.iconURL({ dynamic: true, format: 'png' }))
.setTitle(`You Have Been Muted`)
.setDescription(`**
 In Server : ${message.guild.name}
 With Reson : ${args || "No reason provided."}
 By : ${message.author}
**`)
.setColor("#0083ff")
.setFooter('Id ' + message.author.id, message.author.avatarURL())
member.send(mens);
}
})


client.on("message", message => {
          if (message.content === prefix + "ping") {
            let start = Date.now();
            message.channel.send("pong").then(message => {
              message.edit(`\`\`\`js
        Time taken: ${Date.now() - start} ms
        Discord API: ${client.ws.ping.toFixed(0)} ms\`\`\``);
            });
          }
});


client.on("message", message => {
  if (message.content.startsWith(prefix + "invite")) {
 const yassen = new Discord.MessageEmbed()
.setColor("PURPLE")
.setDescription(`

**BlackBot 0.0.1 >** [**Invite**](https://discord.com/api/oauth2/authorize?client_id=889136595272351776&permissions=8&scope=bot)

`)
.setImage('')
 message.channel.send(yassen)
}
})

client.on("message", message => {
  if (message.content.startsWith(prefix + "support")) {
 const yassen = new Discord.MessageEmbed()
.setColor("PURPLE")
.setDescription(`

**BlackBot 0.0.1 >** [**Support**](https://discord.gg/q4VBawkTxZ)

`)
.setImage('')
 message.channel.send(yassen)
}
})


require("express")().listen(1343);


setInterval(() => {
  var links = db.get("linkler");
  if(!links) return;
  var linkA = links.map(c => c.url)
  linkA.forEach(link => {
    try {
      fetch(link)
    } catch(e) { console.log("" + e) };
  })
  console.log("Hi.")
}, 60000)

client.on("ready", () => {
if(!Array.isArray(db.get("linkler"))) {
db.set("linkler", [])
}
})
client.on("ready", () => {
  client.user.setActivity(`${prefix}help`)
  console.log(`Bot Is Ready`)
})

client.login('ODg5MTM2NTk1MjcyMzUxNzc2.YUc2-w.XbL8rA0lPXdcYDD-Co16ABa9Aps');
