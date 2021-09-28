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

bot.on('login', async () => {console.log(`${connection.username} is on at ${connection.host+':'+connection.port}`);});

bot.on('physicTick', () => {
  var playerFilter = entity => entity.type === 'player';
  var playerEntity = bot.nearestEntity(playerFilter);
  if (!playerEntity) return null;
  var pos = playerEntity.position.offset(0, playerEntity.height , 0)
  bot.lookAt(pos);
});

bot.on('kicked', res=>{console.log(res,'bot uptime : '+uptime,'\n\n\n\n\n\n\n\n\n\n');ping=false});
bot.on('error', console.log);