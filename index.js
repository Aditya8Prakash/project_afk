const mineflayer = require('mineflayer');
var uptime = 0;
var ping = false

const connection = {
  host:'jadenet48485.aternos.me',
  port:16012,
  username:'bot',
  version:false,
  logError:true
}

var bot = mineflayer.createBot({
    host: connection.host,
    username: connection.username,
    port: connection.port,
    version: connection.version,
    logErrors: connection.logError
});

bot.on('login', async () => {
  console.log(`${connection.username} is on at ${connection.host+':'+connection.port}`);
  bot.chat("/tp bot -235.30000001192093 44.0 -824.4113081741133");
  bot.chat("/effect clear bot")
  bot.chat("/effect give bot minecraft:water_breathing 99999 255");
  bot.chat("/effect give bot 21 99999 10");
  bot.chat("/attribute bot minecraft:generic.max_health base set 255");
  bot.chat("/effect give bot minecraft:regeneration 99999 255");
});

bot.on('physicTick', () => {
  var playerFilter = entity => entity.type === 'player';
  var playerEntity = bot.nearestEntity(playerFilter);
  if (!playerEntity) return null;
  var pos = playerEntity.position.offset(0, playerEntity.height , 0)
  bot.lookAt(pos);
});

bot.on('kicked', res=>{console.log(res,'bot uptime : '+uptime,'\n\n\n\n\n\n\n\n\n\n');ping=false;uptime=0});
bot.on('error', console.log);